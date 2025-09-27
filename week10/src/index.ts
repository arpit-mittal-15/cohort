// docker run --name my-postgres3 -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
// psql -h localhost -d postgres -U postgres

// npm init -y
// npm i prisma typescript ts-node @types/node --save-dev
// npx tsc --init

// update tsconfig file

// npx prisma init

// update schema.prisma -> output = "../node_modules/.prisma/client"
// npx prisma migrate dev --name UserAndTodoAdded
// npx prisma generate                              --> to generate client


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

