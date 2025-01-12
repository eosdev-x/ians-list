export interface Product {
  category: string;
  brand: string;
  owner: string;
  ownershipType: string;
  additionalNotes?: string;
}

export interface ProductData {
  brand: string;
  owner: string;
  ownershipType: string;
  notes?: string;
}