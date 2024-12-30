export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
  }
  
  export interface fullProduct {
    _id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
  }