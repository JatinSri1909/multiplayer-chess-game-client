import { io } from "socket.io-client"; // import connection function

const socket = io('https://multiplayer-chess-game-server.onrender.com/'); // initialize websocket connection

export default socket;
