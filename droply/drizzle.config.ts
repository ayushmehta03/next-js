import * as dotenv from "dotenv"
import { defineConfig } from "drizzle-kit";
dotenv.config({path:".env.local"})

if(!process.env.DATABASE_URL){
    throw new Error("Data Base url is not set in .env.local")
}

export default defineConfig({
    out:"./drizzle",
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema.ts',
  dbCredentials:{
    url:process.env.DATABASE_URL!,
  },
});
