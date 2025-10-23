import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnnouncementCardProps {
  title: string;
  content: string;
  date: string;
  priority: "high" | "medium" | "low";
}

export const AnnouncementCard = ({ title, content, date, priority }: AnnouncementCardProps) => {
  const priorityColors = {
    high: "destructive",
    medium: "default",
    low: "secondary",
  } as const;

  return (
    <Card className="bg-[var(--gradient-card)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            {priority === "high" && <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />}
            <div className="flex-1">
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{date}</p>
            </div>
          </div>
          <Badge variant={priorityColors[priority]} className="capitalize">
            {priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
};
