import { PrismaClient } from "@prisma/client";

const connectionString = process.env.DATABASE_URL;

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
});

export { prismaClient as prisma };

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
