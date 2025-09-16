import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>This section is under construction. Check back later for more settings and options.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>We're working hard to bring you a comprehensive settings experience. Thank you for your patience!</p>
        </CardContent>
      </Card>
    </div>
  );
}
