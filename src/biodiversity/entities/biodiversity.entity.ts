import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Biodiversity {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
