import { toId } from './strings';

export const mapRowFields = (
  row: Record<string, string>,
): Record<string, string> => ({
  id: toId({
    county: row['County'],
    scientific_name: row['Scientific Name'],
  }),
  county: row['County'],
  category: row['Category'],
  taxonomic_group: row['Taxonomic Group'],
  taxonomic_subgroup: row['Taxonomic Subgroup'],
  scientific_name: row['Scientific Name'],
  common_name: row['Common Name'],
  year_last_documented: row['Year Last Documented'],
  ny_listing_status: row['NY Listing Status'],
  federal_listing_status: row['Federal Listing Status'],
  state_conservation_rank: row['State Conservation Rank'],
  global_conservation_rank: row['Global Conservation Rank'],
  distribution_status: row['Distribution Status'],
});
