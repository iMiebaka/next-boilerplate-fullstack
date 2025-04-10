import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { ITCustomeRequest, NextApiResponseServerIO } from "@/src/types/next";
import { withAuth, withOptionalAuth } from "@/src/utils/middlewares/auth";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req: ITCustomeRequest, res: NextApiResponseServerIO): Promise<any> {
 
  if (!res.socket.server.io) {
    console.log("New Socket.io server...");
    // adapt Next's net Server to http Server
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: "/api/socketio",
    });
    
    // Add socket event listeners
    io.on("connection", (socket) => {
      console.log(`Client connected: ${socket.id}`);
      
      socket.on("message", (data) => {
        console.log("Message received:", data);
        // Broadcast message to all clients
        io.emit("message", data);
      });
      
      socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
      });
    });
    
    // append SocketIO server to Next.js socket server response
    res.socket.server.io = io;
  }
  
  res.end();
};

export default withAuth(handler)