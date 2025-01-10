import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  description: string;
}

const ContentCard = ({ title, description }: ContentCardProps) => {
  return (
    <Card className="card-elevation material-motion hover:scale-[1.02] cursor-pointer">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ContentCard;