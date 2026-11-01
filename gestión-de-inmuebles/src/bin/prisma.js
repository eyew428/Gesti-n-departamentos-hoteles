import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prismaDB = new PrismaClient({
  adapter,
});

export async function connectDB() {
  try {
    await prismaDB.$connect();
    await prismaDB.$queryRaw`SELECT 1`;
    console.log("✅ BD conectada");
  } catch (error) {
    console.log("❌ BD no conectada");
    console.error(error);
    process.exit(1);
  }
}