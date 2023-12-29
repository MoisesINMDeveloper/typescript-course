import { Product } from "./product.model";
//OMIT OMITE QUE RECIBIR O ENVIAR EN LOS DATOS Y PICK UNO ELIGE QUE ES LO QUE VA ENVIAR
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
    categoryId: string;
}
type example = Pick<Product, 'color' | 'description'>
// PARTIAL DEJA TODO COMO OPCIONAL Y REQUIRED DEJA TODO COMO OBLIGATORIO
export interface UpdateProductDto extends Partial<CreateProductDto>{ }

type example2 = Required<Product>

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
 }

type example3 = Readonly<Product>