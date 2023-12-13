import express from "express";

import {
  getLeaderboard,
  addLeaderboardEntry,
  getLeaderboardEntry,
  updateLeaderboardEntry,
  deleteLeaderboardEntry,
} from "../controllers/leaderboard.js";
const router = express.Router();

//create a get request to get all the values from the leaderboard table
router.get("/:time", getLeaderboard);

//create a post request to add an entry to the leaderboard
router.post("/", addLeaderboardEntry);

//create a get request to get an entry from the leaderboard given the email
router.get("/:email", getLeaderboardEntry);

//create a patch request to update the time of a user on the leaderboard given the email and the new time
router.patch("/:email", updateLeaderboardEntry);

//create a delete request to delete an entry from the leaderboard given the email
router.delete("/:email", deleteLeaderboardEntry);

//export the router
export default router;
