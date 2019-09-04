export interface IVariant {
  price: number;
  weight: number;
}

export interface IProduct {
  name: String;
  summary: String;
  additionalDescription: String;
  ingredients: String[];
  variant: IVariant[];
}
