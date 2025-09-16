"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { transcribeVoicemail, type TranscribeVoicemailOutput } from '@/ai/flows/transcribe-voicemails';
import { useToast } from '@/hooks/use-toast';
import { Loader2, FileText } from 'lucide-react';

export function VoicemailTranscription() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TranscribeVoicemailOutput | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      toast({
        variant: 'destructive',
        title: 'No file selected',
        description: 'Please select an audio file to transcribe.',
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const audioDataUri = reader.result as string;
        const response = await transcribeVoicemail({ audioDataUri });
        setResult(response);
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        toast({
          variant: 'destructive',
          title: 'File Read Error',
          description: 'Could not read the selected file.',
        });
        setLoading(false);
      }
    } catch (error) {
      console.error('Error transcribing voicemail:', error);
      toast({
        variant: 'destructive',
        title: 'Transcription Failed',
        description: 'An error occurred while generating the transcription.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Voicemail Transcription</CardTitle>
        <CardDescription>Upload a voicemail to automatically convert it to text.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="voicemail-file">Voicemail File</Label>
              <Input id="voicemail-file" type="file" accept="audio/*" onChange={handleFileChange} />
            </div>
            <Button type="submit" disabled={loading} className='bg-primary hover:bg-primary/90'>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Transcribing...' : 'Generate Transcription'}
            </Button>
          </div>
        </form>
      </CardContent>
      {result && (
        <CardFooter className="flex flex-col items-start gap-4">
          <div className="w-full space-y-2">
            <h3 className="text-lg font-semibold flex items-center"><FileText className="mr-2 h-5 w-5"/>Transcription</h3>
            <p className="text-sm text-muted-foreground bg-secondary p-4 rounded-lg whitespace-pre-wrap">{result.transcription}</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
