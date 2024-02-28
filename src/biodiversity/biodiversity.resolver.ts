import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { BiodiversityService } from './biodiversity.service';
import { Biodiversity } from './entities/biodiversity.entity';

@Resolver(() => Biodiversity)
export class BiodiversityResolver {
  constructor(private readonly biodiversityService: BiodiversityService) {}

  @Query(() => [Biodiversity], { name: 'biodiversity' })
  findAll() {
    return this.biodiversityService.findAll();
  }

  @Query(() => Biodiversity, { name: 'biodiversity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.biodiversityService.findOne(id);
  }
}
