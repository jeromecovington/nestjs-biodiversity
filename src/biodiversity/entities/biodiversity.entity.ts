import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Biodiversity {
  @Field()
  category: string;

  @Field()
  common_name: string;

  @Field()
  county: string;

  @Field()
  distribution_status: string;

  @Field()
  federal_listing_status: string;

  @Field()
  global_conservation_rank: string;

  @Field()
  ny_listing_status: string;

  @Field()
  scientific_name: string;

  @Field()
  state_conservation_rank: string;

  @Field()
  taxonomic_group: string;

  @Field()
  taxonomic_subgroup: string;

  @Field()
  year_last_documented: string;
}
