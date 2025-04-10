// lib/socket.ts
import { io, Socket } from "socket.io-client";

let socket: Socket;

export const initiateSocket = () => {
  if (!socket) {
    socket = io();
    console.log("🟢 Connecting socket...");
  }
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    console.log("🔴 Socket disconnected");
  }
};

export const sendMessage = (message: string) => {
  if (socket) socket.emit("message", message);
};

export const subscribeToMessages = (cb: (msg: string) => void) => {
  if (!socket) return;
  socket.on("message", cb);
};
