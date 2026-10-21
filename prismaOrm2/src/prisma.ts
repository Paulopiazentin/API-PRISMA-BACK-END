import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
// rodar no terminal: npx prisma generate

const adapter = new PrismaMariaDb({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'aula_prisma',
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });
export { prisma };
