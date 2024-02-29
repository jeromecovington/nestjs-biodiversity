export const fromId = (
  id: string,
): {
  county: string;
  scientific_name: string;
} => {
  const [county, scientific_name] = Buffer.from(id, 'base64')
    .toString('ascii')
    .split(':');

  return {
    county,
    scientific_name,
  };
};

export const toId = ({
  county,
  scientific_name,
}: {
  county: string;
  scientific_name: string;
}) => {
  return Buffer.from(`${county}:${scientific_name}`).toString('base64');
};
