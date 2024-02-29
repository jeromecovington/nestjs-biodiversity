import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { Injectable } from '@nestjs/common';
import { findAll, findOne } from '../util/db';

type DataRecord = Record<string, string>;

@Injectable()
export class BiodiversityService {
  async getData(): Promise<Array<DataRecord>> {
    const file = resolve(__dirname, '../../data/s7d7-7ktr.json');
    const read = await readFile(file, { encoding: 'utf8' });

    return JSON.parse(read);
  }

  async findAll(
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
    const result = await findAll({
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
    });

    return result;
  }

  async findOne(id: string) {
    const result = await findOne(id);

    return result;
  }
}
