import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HLAB_POSTGRES_HOST,
  port: parseInt(<string>process.env.HLAB_POSTGRES_PORT),
  username: process.env.HLAB_POSTGRES_USER,
  password: process.env.HLAB_POSTGRES_PASSWORD,
  database: process.env.HLAB_POSTGRES_DATABASE,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/migrations/*.js'],
});
