export enum Products {
  Common = 'Common',
  Digital = 'Digital',
  Food = 'Food',
  Luxury = 'Luxury',
  Others = 'Others',
  Soft = 'Soft',
  Sport = 'Sport',
}

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Products;
  isAvailable: boolean;
}

export class Product implements ProductModel {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public category: Products = Products.Others,
    public isAvailable: boolean = false,
  ) {}
}
