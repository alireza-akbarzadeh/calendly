import { PrismaClient } from '@prisma/client'

const connectionString = process.env.DATABASE_URL

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
})

export { prismaClient as prisma }
