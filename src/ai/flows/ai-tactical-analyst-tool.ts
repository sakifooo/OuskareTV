'use server';
/**
 * @fileOverview An AI tactical analyst tool that provides match predictions and tactical summaries.
 *
 * - aiTacticalAnalystTool - A function that handles the match analysis process.
 * - AITacticalAnalystToolInput - The input type for the aiTacticalAnalystTool function.
 * - AITacticalAnalystToolOutput - The return type for the aiTacticalAnalystTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AITacticalAnalystToolInputSchema = z.object({
  teamA: z.string().describe('The name of the first team.'),
  teamB: z.string().describe('The name of the second team.'),
  matchDate: z
    .string()
    .describe('The date or time of the match (e.g., "YYYY-MM-DD" or "Tonight").'),
  additionalContext:
    z.string().optional().describe('Any extra details about the match, like recent form, injuries, or importance.'),
});
export type AITacticalAnalystToolInput = z.infer<typeof AITacticalAnalystToolInputSchema>;

const AITacticalAnalystToolOutputSchema = z.object({
  prediction: z.string().describe('A detailed prediction for the match outcome.'),
  tacticalSummary:
    z.string().describe('A comprehensive tactical analysis, including key players and strategic points.'),
});
export type AITacticalAnalystToolOutput = z.infer<typeof AITacticalAnalystToolOutputSchema>;

export async function aiTacticalAnalystTool(
  input: AITacticalAnalystToolInput
): Promise<AITacticalAnalystToolOutput> {
  return aiTacticalAnalystToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTacticalAnalystPrompt',
  input: {schema: AITacticalAnalystToolInputSchema},
  output: {schema: AITacticalAnalystToolOutputSchema},
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
  prompt: `You are an expert football tactical analyst. Your task is to analyze upcoming or ongoing matches and provide insights.

Based on the provided information, generate a match prediction and a tactical summary.

Match Details:
Team A: {{{teamA}}}
Team B: {{{teamB}}}
Match Date: {{{matchDate}}}
{{#if additionalContext}}Additional Context: {{{additionalContext}}}{{/if}}

Provide your analysis in the following structured JSON format:
`,
});

const aiTacticalAnalystToolFlow = ai.defineFlow(
  {
    name: 'aiTacticalAnalystToolFlow',
    inputSchema: AITacticalAnalystToolInputSchema,
    outputSchema: AITacticalAnalystToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
