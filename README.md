# LearningApp

Learning application based on **flashcards**.

---

## Frontend Setup

**Tech Stack:**

- ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) React with TypeScript
- ![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?logo=chakra-ui&logoColor=white) Chakra UI
- ![Zod](https://img.shields.io/badge/Zod-000000?logo=zod&logoColor=white) Zod Schema Validation

**Setup commands:**

````bash
npm install
npm run dev
> **Note:** Running at port `5173`.

# Backend Setup

## Running the Backend

### Setup Command

# To start the backend and execute your TypeScript code:

```bash
npx ts-node index.ts
> **Note:** Node js running at port 3000
> **Note:** Postgres is running at port `5432`.

## Tech Stack

- **Node.js** with TypeScript
- **PostgreSQL**

## PostgreSQL Advantages

- **Free and open-source** – no licensing cost.
- **Reliable and ACID-compliant** – ensures data safety.
- **Supports advanced features** – like JSON, arrays, and extensions.
- **Scalable and performant** – handles large datasets and many users efficiently.
- **Standards-compliant** – adheres to ANSI SQL and ISO SQL standards for portability.

## Password Hashing

- Using the `pgcrypto` extension with `crypt()` and `gen_salt()` for salted password hashing.

### Setup Command

```sql
-- Enable pgcrypto extension
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Example: hashing a password
INSERT INTO users (username, password)
VALUES ('exampleUser', crypt('plainPassword', gen_salt('bf')));


````

## Updates – 3 September 2025 - Jani

- Created feature branch: `feature_learning`
- Installed `pg` and `dotenv` packages
- Updated `tsconfig.json` for database connectivity and table creation
- Inserted data into `users` table using `faker`, dropping the table if it exists
- Generated emails based on `username` and `userId`
- `.env` file used for storing database username, password, and database name
- Used `pgcrypto` extension for password encryption with `crypt()` and `gen_salt()`

## Updates – 4 September 2025 - Kaanchan

- Created folder structure for React Frontend
- Installed ChakraUI
- Created Routing & link placeholder
