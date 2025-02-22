import { CreateProductRequest } from "./create-product.dto";
import { IsString } from "class-validator";

export class UpdateProductRequest extends CreateProductRequest {
    @IsString()
    id: string;
}
  