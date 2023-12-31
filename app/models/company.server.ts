import { prisma } from '~/db.server';

export function getCompany (companyID: string) {
  return prisma.company.findUniqueOrThrow({
    where: {
      id: companyID,
    },
  });
}

export function getCompaniesWithUserId(userId: string) {
  return prisma.company.findMany({
    where: {
      users: {
        some: {
          id: userId
        }
      }
    },
    include: {
      users: true
    }
  });
}

export function getUniqueCompanies() {
  return prisma.company.findMany({
    select: {
        name: true
    },
    distinct: ['name']
  })
}