import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/src/types/next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  
  res.socket.server.io.emit("message", "hello")
  res.json({"message":"sent"});
};

