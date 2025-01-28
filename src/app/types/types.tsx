export interface Products {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stockLevel: number;
    isFeaturedProduct: boolean;
    image: string;
  }


export interface Blogs {
    _id: string;
    name: string;
    image: string;
    desciption: string;
    price: number;
}