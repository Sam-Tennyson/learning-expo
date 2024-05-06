declare module "*.jpg";
declare module "*.png";

export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface IRating {
  rate: number;
  count: number;
}
