import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BiodiversityService } from './biodiversity.service';
import { Biodiversity } from './entities/biodiversity.entity';
import { CreateBiodiversityInput } from './dto/create-biodiversity.input';
import { UpdateBiodiversityInput } from './dto/update-biodiversity.input';

@Resolver(() => Biodiversity)
export class BiodiversityResolver {
  constructor(private readonly biodiversityService: BiodiversityService) {}

  @Mutation(() => Biodiversity)
  createBiodiversity(@Args('createBiodiversityInput') createBiodiversityInput: CreateBiodiversityInput) {
    return this.biodiversityService.create(createBiodiversityInput);
  }

  @Query(() => [Biodiversity], { name: 'biodiversity' })
  findAll() {
    return this.biodiversityService.findAll();
  }

  @Query(() => Biodiversity, { name: 'biodiversity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.biodiversityService.findOne(id);
  }

  @Mutation(() => Biodiversity)
  updateBiodiversity(@Args('updateBiodiversityInput') updateBiodiversityInput: UpdateBiodiversityInput) {
    return this.biodiversityService.update(updateBiodiversityInput.id, updateBiodiversityInput);
  }

  @Mutation(() => Biodiversity)
  removeBiodiversity(@Args('id', { type: () => Int }) id: number) {
    return this.biodiversityService.remove(id);
  }
}
