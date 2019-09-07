export interface IVariant {
  price: number;
  weight: number;
  quantity:number;
  productImagesURL1:string  
  productImagesURL2:string
}
export type ProductType='tea'|'coffee';
export interface IProduct {
  productIconURL: string 
  name: string;
  summary: string;
  additionalDescription: string;
  bigDescription:string
  ingredients: string[];
  variant: IVariant[];
  type:ProductType
  productImagesURL1:string
  productImagesURL2:string
  productImagesURL3:string
  productImagesURL4:string
}
