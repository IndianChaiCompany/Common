export interface IVariant {
  price: number;
  weight: number;
}
export type ProductType='tea'|'coffee';
export interface IProduct {
  productIconURL: String 
  name: String;
  summary: String;
  additionalDescription: String;
  bigDescription:String
  ingredients: String[];
  variant: IVariant[];
  type:ProductType
  productImagesURL:String[]
}
