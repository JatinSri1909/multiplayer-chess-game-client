import { io } from "socket.io-client"; // import connection function

const serverUrl = process.env.SERVER_URL || 'http://localhost:8080'

const socket = io(serverUrl); // initialize websocket connection

export default socket;