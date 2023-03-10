import {DataSource} from "typeorm";
import {appEnv} from "../../app/envs/app.env";

export default new DataSource({
  type: "postgres",
  url: appEnv.dbUrl,
  schema: "public",
  entities: ["src/app/shared/database/entities/**/*ts"],
  migrations: ["src/app/shared/database/migrations/**/*ts"],
  synchronize: false,
  ssl: {
    rejectUnauthorized: false,
  },
});
