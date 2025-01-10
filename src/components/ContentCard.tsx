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
  return (
    <Card className="card-elevation material-motion hover:scale-[1.02] cursor-pointer">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          {brand}
          <Badge variant="secondary" className="ml-2">
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