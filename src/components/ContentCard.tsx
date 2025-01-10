import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContentCardProps {
  brand: string;
  owner: string;
  ownershipType: string;
  additionalNotes?: string;
}

const ContentCard = ({ brand, owner, ownershipType, additionalNotes }: ContentCardProps) => {
  const getBadgeVariant = (type: string) => {
    const lowercaseType = type.toLowerCase();
    if (lowercaseType.includes("female")) return "secondary";
    if (lowercaseType.includes("family")) return "primary";
    if (lowercaseType.includes("founder")) return "default";
    if (lowercaseType.includes("co-op")) return "outline";
    return "default";
  };

  return (
    <Card className="card-elevation material-motion hover:scale-[1.02] cursor-pointer">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          {brand}
          <Badge variant={getBadgeVariant(ownershipType)} className="ml-2">
            {ownershipType}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">Owned by: {owner}</p>
        {additionalNotes && (
          <p className="text-xs text-muted-foreground italic">{additionalNotes}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentCard;