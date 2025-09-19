
'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  companyName?: string;
  callbackNumber?: string;
  website?: string;
  users?: string;
  discussionTopic?: string;
  message?: string;
  source: 'Contact Form' | 'Chatbot';
}

export async function createLead(lead: Omit<Lead, 'createdAt'>) {
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      ...lead,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: "Failed to create lead." };
  }
}
