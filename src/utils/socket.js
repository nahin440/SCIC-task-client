import { io } from "socket.io-client";

const SOCKET_URL = "https://scic-task-server.onrender.com";
// const SOCKET_URL = "https://task-nest-server.onrender.com";
export const socket = io(SOCKET_URL);
