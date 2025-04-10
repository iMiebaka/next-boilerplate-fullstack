import React, { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;
export default function Dashboard() {
  useEffect((): any => {
    socket = io("", {
      path: "/api/socketio",
    });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
    });

    // update chat on new message dispatched
    socket.on("message", (message: any) => {
      console.log("Hello");
    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    socket.emit("message", "send");
  };
  return <div>Dashboard</div>;
}
