import { join } from 'path';
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 't20_app',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  ssl: false,
  // {
  //   rejectUnauthorized: false,
  // },
  synchronize: true,
  migrations: ['src/database/migrations/*{.ts, .js}'],
});
