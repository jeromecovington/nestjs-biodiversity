import { resolve } from 'node:path';
import { Database } from 'sqlite3';
import { open } from 'sqlite';
import { mapRowFields } from './fields';

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

const database = resolve(__dirname, '../../biodiversity.db');

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
  const whereParams: Record<string, string> = {};

  if (category) {
    whereClause += 'Category = :category AND ';
    whereParams[':category'] = category;
  }
  if (common_name) {
    whereClause += '"Common Name" = :common_name AND ';
    whereParams[':common_name'] = common_name;
  }
  if (county) {
    whereClause += 'County = :county AND ';
    whereParams[':county'] = county;
  }
  if (distribution_status) {
    whereClause += '"Distribution Status" = :distribution_status AND ';
    whereParams[':distribution_status'] = distribution_status;
  }
  if (federal_listing_status) {
    whereClause += '"Federal Listing Status" = :federal_listing_status AND ';
    whereParams[':federal_listing_status'] = federal_listing_status;
  }
  if (global_conservation_rank) {
    whereClause +=
      '"Global Conservation Rank" = :global_conservation_rank AND ';
    whereParams[':global_conservation_rank'] = global_conservation_rank;
  }
  if (ny_listing_status) {
    whereClause += '"NY Listing Status" = :ny_listing_status AND ';
    whereParams[':ny_listing_status'] = ny_listing_status;
  }
  if (scientific_name) {
    whereClause += '"Scientific Name" = :scientific_name AND ';
    whereParams[':scientific_name'] = scientific_name;
  }
  if (state_conservation_rank) {
    whereClause += '"State Conservation Rank" = :state_conservation_rank AND ';
    whereParams[':state_conservation_rank'] = state_conservation_rank;
  }
  if (taxonomic_group) {
    whereClause += '"Taxonomic Group" = :taxonomic_group AND ';
    whereParams[':taxonomic_group'] = taxonomic_group;
  }
  if (taxonomic_subgroup) {
    whereClause += '"Taxonomic Subgroup" = :taxonomic_subgroup AND ';
    whereParams[':taxonomic_subgroup'] = taxonomic_subgroup;
  }
  if (year_last_documented) {
    whereClause += '"Year Last Documented" = :year_last_documented AND ';
    whereParams[':year_last_documented'] = year_last_documented;
  }

  if (whereClause !== '') {
    whereClause = 'WHERE ' + whereClause.slice(0, -5);
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
