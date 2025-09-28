import { Client } from "pg";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "mysecretpassword",
  port: 5432,
});

async function main() {
  await client.connect();
  const res = await client.query("SELECT NOW()");
  console.log(res.rows);
  await client.end();
}

main();
