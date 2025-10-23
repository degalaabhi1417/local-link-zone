import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

export const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <Card className="bg-[var(--gradient-card)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        {link && (
          <Button variant="ghost" className="w-full" asChild>
            <a href={link}>Learn More</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
