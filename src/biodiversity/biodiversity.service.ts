import fs from 'fs';
import path from 'path';

const { readFile } = fs.promises;

import { Injectable } from '@nestjs/common';

@Injectable()
export class BiodiversityService {
  async getData() {
    const file = path.resolve(__dirname, './data/s7d7-7ktr.json');
    const read = await readFile(file, { encoding: 'utf8' });

    return JSON.parse(read);
  }

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
