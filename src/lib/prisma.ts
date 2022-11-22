
import { PrismaClient } from '@prisma/client';

declare const global: Global & { prisma?: PrismaClient };

export let prisma: PrismaClient;

if (typeof window === 'undefined') {
  if (process.env['NODE_ENV'] === 'production') {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}
export default prisma

// 以下参考
// https://github.com/prisma/prisma/issues/6219#issuecomment-1200982341