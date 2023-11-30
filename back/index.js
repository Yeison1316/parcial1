import Server from "./config/server.js"
const cors = require('cors');
const server = new Server();
app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
server.load();