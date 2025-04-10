import "dotenv/config";

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;
const FILE_PATH = process.env.FILE_PATH || "";
const PAYMENT_KEY = process.env.PAYMENT_KEY || "";
const PAYMENT_WEBHOOK_SECRET = process.env.PAYMENT_WEBHOOK_SECRET;
const DOMAIN = process.env.API_ENDPOINT || "http://localhost:3000";
const SECRET_KEY = process.env.SECRET_KEY || "na-only-you-waka-come";




const config = {
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
