import express from "express";
import { Client } from 'pg';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';

// ***************************** //
// Database and tables setup
// ***************************** //

dotenv.config();
const app = express();
app.use(express.json());

const connectionString = process.env.DATABASE_URL;

const client = new Client({ connectionString });



const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    userid UUID PRIMARY KEY NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    fname VARCHAR(50) UNIQUE NOT NULL,
    lname VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
  );
`;

async function main() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Creating extension for encrypting password
    await client.query(`CREATE EXTENSION IF NOT EXISTS pgcrypto;`);
    console.log("Created pgcrypto extension for encrypting password");

    //Drop table
    const dropUserTable = await client.query(`DROP TABLE IF EXISTS users`);
    console.log("Deleting table, if exists", dropUserTable);

    //Create tables

    const createUserResult = await client.query(createUserTableQuery);
    console.log("Created table successfully", createUserResult);


    //Insert values

  for(let i=0; i<10; i++){
    const userId = faker.string.uuid();
    const Fullname = faker.person.fullName().split(" ");
    
    const userEmail = Fullname[0] + "." + Fullname[1] + userId.slice(0,2) + "@Learning.com";
    const userPassword = faker.string.alpha(6);

    const insertUserQuery = `INSERT INTO users (userid, email, fname, lname, password_hash) VALUES ($1, $2, $3, $4, crypt($5, gen_salt('bf'))) RETURNING *`;
    const insertValues = [userId, userEmail, Fullname[0], Fullname[1], userPassword];
    const insertResult = await client.query(insertUserQuery, insertValues);
    const newUser = insertResult.rows[0];
    console.log('New user created:', newUser);
  }

  }
  catch(e){
    console.log("Error connecting to Database, Check env file and tsconfig", e);
  }
  finally{
    await client.end();
  }

}

// const http = require('http');
// ***************************** //
// Create port for backend
// ***************************** //


app.get('/', (req, res) => res.send('Hello, Express!'));

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello, Node.js!');
// });

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

main();