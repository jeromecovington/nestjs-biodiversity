import { CreateBiodiversityInput } from './create-biodiversity.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBiodiversityInput extends PartialType(CreateBiodiversityInput) {
  @Field(() => Int)
  id: number;
}
