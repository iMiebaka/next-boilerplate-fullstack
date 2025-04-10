import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { Server as SocketIOServer } from "socket.io";

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};


export type ITCustomeRequest = NextRequest &{
  userCredential: any
}