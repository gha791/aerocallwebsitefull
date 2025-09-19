
"use client";

import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const webAppLoginUrl = "https://app.aerocall.net/login";

  useEffect(() => {
    window.location.href = webAppLoginUrl;
  }, []);

  return (
    <main className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="mt-4 text-muted-foreground">Redirecting you to the login page...</p>
        </div>
    </main>
  );
}
