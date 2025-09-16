import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { recentActivityData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { PhoneIncoming, PhoneOutgoing, Voicemail, PhoneMissed } from 'lucide-react';

const typeStyles: { [key: string]: string } = {
  Incoming: "text-green-500",
  Outgoing: "text-blue-500",
  Voicemail: "text-purple-500",
  Missed: "text-red-500",
};

const typeIcons: { [key: string]: React.ElementType } = {
    Incoming: PhoneIncoming,
    Outgoing: PhoneOutgoing,
    Voicemail: Voicemail,
    Missed: PhoneMissed
}

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {recentActivityData.map((item, index) => {
        const Icon = typeIcons[item.type];
        return(
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.avatar} alt="Avatar" data-ai-hint="person portrait"/>
            <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.number}</p>
          </div>
          <div className="ml-auto font-medium text-sm flex items-center gap-2">
            <Icon className={cn("h-4 w-4", typeStyles[item.type])} />
            {item.duration}
          </div>
        </div>
      )})}
    </div>
  );
}
