import { resolve } from 'node:path';
import { Database } from 'sqlite3';
import { open } from 'sqlite';
import { mapRowFields } from './fields';

const database = resolve(__dirname, '../../biodiversity.db');

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
}: {
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
}) => {
  const db = await open({
    filename: database,
    driver: Database,
  });
  const result = await db.all(
    `SELECT * FROM biodiversity
      WHERE County = :county
      AND Category = :category
      AND Category = :category
      AND "Taxonomic Group" = :taxonomic_group
      AND "Taxonomic Subgroup" = :taxonomic_subgroup
      AND "Scientific Name" = :scientific_name
      AND "Common Name" = :common_name
      AND "Year Last Documented" = :year_last_documented
      AND "NY Listing Status" = :ny_listing_status
      AND "Federal Listing Status" = :federal_listing_status
      AND "State Conservation Rank" = :state_conservation_rank
      AND "Global Conservation Rank" = :global_conservation_rank
      AND "Distribution Status" = :distribution_status
    `,
    {
      ':category': category,
      ':common_name': common_name,
      ':county': county,
      ':distribution_status': distribution_status,
      ':federal_listing_status': federal_listing_status,
      ':global_conservation_rank': global_conservation_rank,
      ':ny_listing_status': ny_listing_status,
      ':scientific_name': scientific_name,
      ':state_conservation_rank': state_conservation_rank,
      ':taxonomic_group': taxonomic_group,
      ':taxonomic_subgroup': taxonomic_subgroup,
      ':year_last_documented': year_last_documented,
    },
  );
  const mapped = result.map(mapRowFields);

  return mapped;
};
