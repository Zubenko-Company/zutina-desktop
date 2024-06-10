import type { DataSourceOptions } from "typeorm";
import { Client } from "pg";
import { DataSource } from "typeorm";

import { ImagesDB } from "./entities/images";
import { UserDB } from "./entities/user";

const thisFileDir = __dirname;

const defaultDatabaseConfig = {
  type: "postgres",
  database: "zutina",
  synchronize: true,
  logging: false,
  entities: [thisFileDir + "/entities/**/*.ts"],
  migrations: [],
  subscribers: [],
} satisfies Partial<DataSourceOptions>;

interface CreateDatabaseOptions {
  host: string;
  username: string;
  password: string;
  port: number;
}

export const createDatabaseConnection = async (
  options: CreateDatabaseOptions,
) => {
  const client = new Client({
    user: options.username,
    password: options.password,
    port: options.port,
    host: options.host,
  });
  await client.connect();

  await client.query("CREATE DATABASE zutina").catch((err) => {
    if (err?.message.includes("already exists")) {
      console.log('База "zutina" уже создана');
    } else if (err) {
      throw new Error("Ошибка при создании базы данных", { cause: err });
    }
  });

  const sourceOptions = {
    ...options,
    ...defaultDatabaseConfig,
  };

  const AppDataSource = new DataSource(sourceOptions);
  const initAppDataASource = AppDataSource.initialize();

  return await initAppDataASource;
};

export const Entities = {
  Images: ImagesDB,
  User: UserDB,
};
