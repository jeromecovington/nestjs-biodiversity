import { resolve } from 'node:path';
import { Database } from 'sqlite3';
import { open } from 'sqlite';
import { mapRowFields } from './fields';
import { fromId } from './strings';

type Parameters = {
  category?: string;
  common_name?: string;
  county?: string;
  distribution_status?: string;
  federal_listing_status?: string;
  global_conservation_rank?: string;
  ny_listing_status?: string;
  scientific_name?: string;
  state_conservation_rank?: string;
  taxonomic_group?: string;
  taxonomic_subgroup?: string;
  year_last_documented?: string;
};

const database = resolve(__dirname, '../biodiversity.db');

const whereClauseBuilder = ({
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
}: Parameters) => {
  let whereClause = '';
  const whereClauseArray: Array<string> = [];
  const whereParams: Record<string, string> = {};

  if (category) {
    whereClauseArray.push('Category = :category');
    whereParams[':category'] = category;
  }
  if (common_name) {
    whereClauseArray.push('"Common Name" = :common_name');
    whereParams[':common_name'] = common_name;
  }
  if (county) {
    whereClauseArray.push('County = :county');
    whereParams[':county'] = county;
  }
  if (distribution_status) {
    whereClauseArray.push('"Distribution Status" = :distribution_status');
    whereParams[':distribution_status'] = distribution_status;
  }
  if (federal_listing_status) {
    whereClauseArray.push('"Federal Listing Status" = :federal_listing_status');
    whereParams[':federal_listing_status'] = federal_listing_status;
  }
  if (global_conservation_rank) {
    whereClauseArray.push(
      '"Global Conservation Rank" = :global_conservation_rank',
    );
    whereParams[':global_conservation_rank'] = global_conservation_rank;
  }
  if (ny_listing_status) {
    whereClauseArray.push('"NY Listing Status" = :ny_listing_status');
    whereParams[':ny_listing_status'] = ny_listing_status;
  }
  if (scientific_name) {
    whereClauseArray.push('"Scientific Name" = :scientific_name');
    whereParams[':scientific_name'] = scientific_name;
  }
  if (state_conservation_rank) {
    whereClauseArray.push(
      '"State Conservation Rank" = :state_conservation_rank',
    );
    whereParams[':state_conservation_rank'] = state_conservation_rank;
  }
  if (taxonomic_group) {
    whereClauseArray.push('"Taxonomic Group" = :taxonomic_group');
    whereParams[':taxonomic_group'] = taxonomic_group;
  }
  if (taxonomic_subgroup) {
    whereClauseArray.push('"Taxonomic Subgroup" = :taxonomic_subgroup');
    whereParams[':taxonomic_subgroup'] = taxonomic_subgroup;
  }
  if (year_last_documented) {
    whereClauseArray.push('"Year Last Documented" = :year_last_documented');
    whereParams[':year_last_documented'] = year_last_documented;
  }

  if (whereClauseArray.length) {
    whereClause = 'WHERE ' + whereClauseArray.join(' AND ');
  }

  return { whereClause, whereParams };
};

export const findAll = async ({
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
}: Parameters) => {
  const db = await open({
    filename: database,
    driver: Database,
  });
  const { whereClause, whereParams } = whereClauseBuilder({
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
  const result = await db.all(
    `SELECT * FROM biodiversity
     ${whereClause}
    `,
    whereParams,
  );
  const mapped = result.map(mapRowFields);

  return mapped;
};

export const findOne = async (id: string) => {
  const db = await open({
    filename: database,
    driver: Database,
  });
  const { county, scientific_name } = fromId(id);
  const result = await db.get(
    `SELECT * FROM biodiversity
     WHERE County = :county AND "Scientific Name" = :scientific_name
    `,
    {
      ':county': county,
      ':scientific_name': scientific_name,
    },
  );

  return mapRowFields(result);
};
