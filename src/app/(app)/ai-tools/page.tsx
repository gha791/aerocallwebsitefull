import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CallSummarization } from "@/components/ai-tools/call-summarization";
import { VoicemailTranscription } from "@/components/ai-tools/voicemail-transcription";

export default function AiToolsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Tools</h1>
        <p className="text-muted-foreground">Leverage AI to enhance your productivity.</p>
      </div>
      <Tabs defaultValue="summarization" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="summarization">Call Summarization</TabsTrigger>
          <TabsTrigger value="transcription">Voicemail Transcription</TabsTrigger>
        </TabsList>
        <TabsContent value="summarization">
          <CallSummarization />
        </TabsContent>
        <TabsContent value="transcription">
          <VoicemailTranscription />
        </TabsContent>
      </Tabs>
    </div>
  );
}
