import { resolve } from 'node:path';
import { Database } from 'sqlite3';
import { open } from 'sqlite';
import { mapRowFields } from './fields';

const database = resolve(__dirname, '../../biodiversity.db');

export const findAll = async () => {
  const db = await open({
    filename: database,
    driver: Database,
  });
  // TODO: Accept args for WHERE clause.
  const result = await db.all('SELECT * FROM biodiversity LIMIT 10');
  const mapped = result.map(mapRowFields);

  return mapped;
};
