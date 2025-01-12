import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProductData } from "@/types/product";

interface ProductTableProps {
  data: ProductData[];
}

const ProductTable = ({ data }: ProductTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Brand</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Ownership Type</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.brand}</TableCell>
              <TableCell>{item.owner}</TableCell>
              <TableCell>{item.ownershipType}</TableCell>
              <TableCell>{item.notes || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;