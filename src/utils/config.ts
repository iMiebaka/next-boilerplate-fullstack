import "dotenv/config";

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;
const FILE_PATH = process.env.FILE_PATH || "";
const PAYMENT_KEY = process.env.PAYMENT_KEY || "";
const PAYMENT_WEBHOOK_SECRET = process.env.PAYMENT_WEBHOOK_SECRET;
const DOMAIN = process.env.API_ENDPOINT || "http://localhost:3000";
const SECRET_KEY = process.env.SECRET_KEY || "na-only-you-waka-come";
const SQL_DATABASE_URL =
  process.env.SQL_DATABASE_URL || "postgres://localhost:5432/next-template";
const NO_SQL_DATABASE_URL =
  process.env.NO_SQL_DATABASE_URL || "mongodb://localhost:27017/next-template";




const config = {
  database: {
    sql: {
      url: SQL_DATABASE_URL,
    },
    no_sql: {
      url: NO_SQL_DATABASE_URL,
    },
  },
  server: {
    PORT,
  },
  payment: {
    PAYMENT_KEY,
    PAYMENT_WEBHOOK_SECRET,
  },
  DOMAIN,
  NODE_ENV,
  SECRET_KEY,
  FILE_PATH,
};

export default config;
