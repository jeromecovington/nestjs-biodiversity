import { Resolver, Query, Args } from '@nestjs/graphql';
import { BiodiversityService } from './biodiversity.service';
import { Biodiversity } from './entities/biodiversity.entity';

@Resolver(() => Biodiversity)
export class BiodiversityResolver {
  constructor(private readonly biodiversityService: BiodiversityService) {}

  @Query(() => [Biodiversity], { name: 'findAll' })
  async findAll(
    @Args('category', { nullable: true }) category?: string,
    @Args('common_name', { nullable: true }) common_name?: string,
    @Args('county', { nullable: true }) county?: string,
    @Args('distribution_status', { nullable: true })
    distribution_status?: string,
    @Args('federal_listing_status', { nullable: true })
    federal_listing_status?: string,
    @Args('global_conservation_rank', { nullable: true })
    global_conservation_rank?: string,
    @Args('ny_listing_status', { nullable: true }) ny_listing_status?: string,
    @Args('scientific_name', { nullable: true }) scientific_name?: string,
    @Args('state_conservation_rank', { nullable: true })
    state_conservation_rank?: string,
    @Args('taxonomic_group', { nullable: true }) taxonomic_group?: string,
    @Args('taxonomic_subgroup', { nullable: true }) taxonomic_subgroup?: string,
    @Args('year_last_documented', { nullable: true })
    year_last_documented?: string,
  ) {
    const result = await this.biodiversityService.findAll(
      category,
      common_name,
      county,
      distribution_status,
      federal_listing_status,
      global_conservation_rank,
      ny_listing_status,
      scientific_name,
      state_conservation_rank,
      taxonomic_group,
      taxonomic_subgroup,
      year_last_documented,
    );

    return result;
  }

  @Query(() => Biodiversity, { name: 'findOne' })
  async findOne(@Args('id') id: string) {
    return await this.biodiversityService.findOne(id);
  }
}
