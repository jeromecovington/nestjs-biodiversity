import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { Injectable } from '@nestjs/common';

type DataRecord = Record<string, string>;

@Injectable()
export class BiodiversityService {
  async getData(): Promise<Array<DataRecord>> {
    const file = path.resolve(__dirname, '../../data/s7d7-7ktr.json');
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
    const json = await this.getData();
    const allArgs = {
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
    };

    const result = json.reduce((acc: DataRecord[], item) => {
      const doesMatch = [];

      for (const [key, value] of Object.entries(allArgs)) {
        if (typeof value === 'undefined') {
          doesMatch.push(null);
        } else if (item[key] === value) {
          doesMatch.push(true);
        } else if (item[key] !== value) {
          doesMatch.push(false);
        }
      }

      if (!doesMatch.includes(false)) {
        acc.push(item);
      }

      return acc;
    }, []);

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodiversity`;
  }
}
