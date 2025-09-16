"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { summarizeCallWithActionItems, type SummarizeCallWithActionItemsOutput } from '@/ai/flows/summarize-calls-with-action-items';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ListChecks, FileText } from 'lucide-react';

export function CallSummarization() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SummarizeCallWithActionItemsOutput | null>(null);
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
        description: 'Please select an audio file to summarize.',
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const recordingDataUri = reader.result as string;
        const response = await summarizeCallWithActionItems({ recordingDataUri });
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
      console.error('Error summarizing call:', error);
      toast({
        variant: 'destructive',
        title: 'Summarization Failed',
        description: 'An error occurred while generating the summary.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>AI Call Summarization</CardTitle>
        <CardDescription>Upload a recorded call to get an executive summary and a list of action items.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="audio-file">Audio File</Label>
              <Input id="audio-file" type="file" accept="audio/*" onChange={handleFileChange} />
            </div>
            <Button type="submit" disabled={loading} className='bg-primary hover:bg-primary/90'>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Summarizing...' : 'Generate Summary'}
            </Button>
          </div>
        </form>
      </CardContent>
      {result && (
        <CardFooter className="flex flex-col items-start gap-4">
          <div className="w-full space-y-2">
            <h3 className="text-lg font-semibold flex items-center"><FileText className="mr-2 h-5 w-5"/>Summary</h3>
            <p className="text-sm text-muted-foreground bg-secondary p-4 rounded-lg">{result.summary}</p>
          </div>
          {result.actionItems.length > 0 && (
            <div className="w-full space-y-2">
              <h3 className="text-lg font-semibold flex items-center"><ListChecks className="mr-2 h-5 w-5"/>Action Items</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {result.actionItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
