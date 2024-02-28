import { Injectable } from '@nestjs/common';

@Injectable()
export class BiodiversityService {
  findAll(
    category?: string,
    common_name?: string,
    county?: string,
    distribution_status?: string,
    federal_listing_status?: string,
    global_conservation_rank?: string,
    ny_listing_status?: string,
    scientific_name?: string,
    state_conservation_rank?: string,
    taxonomic_group?: string,
    taxonomic_subgroup?: string,
    year_last_documented?: string,
  ) {
    return `This action returns all biodiversity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodiversity`;
  }
}
