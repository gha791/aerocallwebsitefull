
'use server';

import { createLead, Lead } from "@/services/leads";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  callbackNumber: z.string().optional(),
  countryCode: z.string().optional(),
  companyName: z.string(),
  website: z.string().optional(),
  users: z.string(),
  discussionTopic: z.string(),
  message: z.string().optional(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { countryCode, callbackNumber, ...leadData } = parsed.data;
  
  const lead: Omit<Lead, 'createdAt'> = {
    ...leadData,
    callbackNumber: countryCode && callbackNumber ? `${countryCode === 'US' ? '+1' : '+1'} ${callbackNumber}` : undefined,
    discussionTopic: parsed.data.discussionTopic,
    source: 'Contact Form'
  };

  const result = await createLead(lead);

  return result;
}
