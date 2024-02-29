import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { Injectable } from '@nestjs/common';
import { fromId, toId } from 'src/util/strings';
import { findAll } from 'src/util/db';

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
    // TODO: Accept args.
    const result = await findAll();

    return result;
  }

  async findOne(id: string) {
    const json = await this.getData();
    const { county, scientific_name } = fromId(id);
    const found = json.find(
      (item) =>
        item.county === county && item.scientific_name === scientific_name,
    );

    return { id, ...found };
  }
}
