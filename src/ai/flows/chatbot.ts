'use server';

/**
 * @fileOverview A chatbot AI agent for AEROCALL.
 *
 * - chat - A function that handles the chatbot conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The user\'s message to the chatbot.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response to the user.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatPrompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are a friendly and helpful customer support agent for AEROCALL, a company that provides modern cloud calling solutions for businesses.

Your goal is to answer user questions about AEROCALL's services, features, and pricing. Be concise and clear in your responses.

Here is some information about AEROCALL:
- Tagline: The Future of Business Communication is Crystal Clear.
- Services: Cloud calling, team collaboration, call analytics, number porting, 24/7 support.
- Key Features: Crystal clear HD voice calls, team conference calls, call forwarding, advanced analytics, CRM integration, enterprise-grade security.
- Target Audience: Small to mid-sized businesses, from solo entrepreneurs to growing teams in the USA and Canada.
- Pricing:
  - Starter: $20/user/month. Good for up to 5 users.
  - Business: $35/user/month. The most popular plan, for up to 25 users. Includes advanced features like conference calling and CRM integration.
  - Enterprise: Custom pricing for unlimited users with dedicated support.

Based on the user's message and the conversation history, provide a helpful response.

History:
{{#each history}}
- {{role}}: {{content}}
{{/each}}

User's new message:
{{{message}}}
`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const {output} = await chatPrompt(input);
    return { response: output!.response };
  }
);
