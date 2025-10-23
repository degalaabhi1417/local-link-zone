import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

export const EventCard = ({ title, date, time, location, category, description }: EventCardProps) => {
  return (
    <Card className="bg-[var(--gradient-card)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="secondary">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-muted-foreground">{description}</p>
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
