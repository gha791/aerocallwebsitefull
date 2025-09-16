'use server';

/**
 * @fileOverview Summarizes recorded calls and extracts action items.
 *
 * - summarizeCallWithActionItems - A function that takes a call recording and returns a summary with action items.
 * - SummarizeCallWithActionItemsInput - The input type for the summarizeCallWithActionItems function.
 * - SummarizeCallWithActionItemsOutput - The return type for the summarizeCallWithActionItems function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCallWithActionItemsInputSchema = z.object({
  recordingDataUri: z
    .string()
    .describe(
      "A recording of a call, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SummarizeCallWithActionItemsInput = z.infer<typeof SummarizeCallWithActionItemsInputSchema>;

const SummarizeCallWithActionItemsOutputSchema = z.object({
  summary: z.string().describe('A summary of the call.'),
  actionItems: z.array(z.string()).describe('A list of action items extracted from the call.'),
});
export type SummarizeCallWithActionItemsOutput = z.infer<typeof SummarizeCallWithActionItemsOutputSchema>;

export async function summarizeCallWithActionItems(input: SummarizeCallWithActionItemsInput): Promise<SummarizeCallWithActionItemsOutput> {
  return summarizeCallWithActionItemsFlow(input);
}

const summarizeCallWithActionItemsPrompt = ai.definePrompt({
  name: 'summarizeCallWithActionItemsPrompt',
  input: {schema: SummarizeCallWithActionItemsInputSchema},
  output: {schema: SummarizeCallWithActionItemsOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing phone calls and extracting action items.

  Given a recording of a phone call, provide a concise summary of the conversation and identify any action items for the participants.

  The recording is provided as a data URI. Use the following format:

  Recording: {{media url=recordingDataUri}}

  Summary:
  Action Items:`,
});

const summarizeCallWithActionItemsFlow = ai.defineFlow(
  {
    name: 'summarizeCallWithActionItemsFlow',
    inputSchema: SummarizeCallWithActionItemsInputSchema,
    outputSchema: SummarizeCallWithActionItemsOutputSchema,
  },
  async input => {
    const {output} = await summarizeCallWithActionItemsPrompt(input);
    return output!;
  }
);
