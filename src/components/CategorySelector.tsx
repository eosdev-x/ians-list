import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CategorySelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

const CategorySelector = ({ value, onValueChange }: CategorySelectorProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="cereal">Cereal</SelectItem>
        <SelectItem value="feminine-hygiene">Feminine Hygiene</SelectItem>
        <SelectItem value="supplements">Supplements</SelectItem>
        <SelectItem value="household">Household</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CategorySelector;