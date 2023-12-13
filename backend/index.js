// To run backend, first go to terminal and run: ssh -L localhost:60680:localhost:60680 yourcslogin@cs506-team-19.cs.wisc.edu
// also run: ssh -L localhost:60666:localhost:60666 yourcslogin@cs506-team-19.cs.wisc.edu
// then run command 'npm install express body-parser mysql mysql2 nodemon cors'
// then run command 'node index.js'
import userRoutes from "./routes/users.js";
import leaderboardRoute from "./routes/leaderboard.js";
import express from "express";

import bodyParser from "body-parser";

import cors from "cors";

const app = express();
app.use(cors());

const PORT = 6007;
app.use(bodyParser.json());
// app.use('/users', userRoutes);
app.use("/users", userRoutes);
app.use("/leaderboard", leaderboardRoute);

app.listen(PORT, () => {
  console.log("running on port 6007");
});
