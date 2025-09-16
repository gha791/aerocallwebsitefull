'use server';
/**
 * @fileOverview A voicemail transcription AI agent.
 *
 * - transcribeVoicemail - A function that handles the voicemail transcription process.
 * - TranscribeVoicemailInput - The input type for the transcribeVoicemail function.
 * - TranscribeVoicemailOutput - The return type for the transcribeVoicemail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranscribeVoicemailInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      'A voicemail audio file, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type TranscribeVoicemailInput = z.infer<typeof TranscribeVoicemailInputSchema>;

const TranscribeVoicemailOutputSchema = z.object({
  transcription: z.string().describe('The transcription of the voicemail message.'),
});
export type TranscribeVoicemailOutput = z.infer<typeof TranscribeVoicemailOutputSchema>;

export async function transcribeVoicemail(input: TranscribeVoicemailInput): Promise<TranscribeVoicemailOutput> {
  return transcribeVoicemailFlow(input);
}

const prompt = ai.definePrompt({
  name: 'transcribeVoicemailPrompt',
  input: {schema: TranscribeVoicemailInputSchema},
  output: {schema: TranscribeVoicemailOutputSchema},
  prompt: `You are an AI assistant specializing in transcribing voicemail messages. Please transcribe the following voicemail message to text.\n\nVoicemail: {{media url=audioDataUri}}`,
});

const transcribeVoicemailFlow = ai.defineFlow(
  {
    name: 'transcribeVoicemailFlow',
    inputSchema: TranscribeVoicemailInputSchema,
    outputSchema: TranscribeVoicemailOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
