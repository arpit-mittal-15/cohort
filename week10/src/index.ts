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

async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string){
  const response = await prisma.user.create({
    data: {
      email,
      username,
      firstName,
      lastName,
      password
    }
  });
  console.log(response);
}
// insertUser("test","test","test","test","test");

async function insertTodo(title: string, description: string, userId: number){
  const response = await prisma.todo.create({
    data: {
      title,
      description,
      userId
    }
  });
  console.log(response);
};
// insertTodo("Prisma", "Prisma desc", 1);

async function getTodosAndUserDetails(userId: number){
  const response = await prisma.todo.findMany({
    where: {
      userId
    },
    select: {
      id: true,
      title: true,
      description: true,
      user: true
    }
  })
  console.log(response);
}

getTodosAndUserDetails(1);
