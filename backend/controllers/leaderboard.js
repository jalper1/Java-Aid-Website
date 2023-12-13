import mysql from "mysql2";

//create a connection to the database
const db = mysql.createPool({
  host: "db2",
  port: `3306`,
  user: "506team",
  password: "beepboop",
  database: "beepboop_db",
});

//create a get request to get all the values from the leaderboard table
export const getLeaderboard = (req, res) => {
  const whichTimeToSort = req.params.time;
  const sqlSelect = `SELECT * FROM leaderboard ORDER BY bestTime${whichTimeToSort} ASC;`;
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

//create a post request to add an entry to the leaderboard, the two values that are needed are the email and the bestTime
export const addLeaderboardEntry = (req, res) => {
  const entry = req.body;
  const sqlInsert = `INSERT INTO leaderboard (email, bestTime1, bestTime2, bestTime3) VALUES ('${entry.email}', '${entry.bestTime1}', '${entry.bestTime2}', '${entry.bestTime3}');`;
  db.query(sqlInsert, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("entry added to the leaderboard");
    }
  });
};

//create a get request to get an entry from the leaderboard given the email
export const getLeaderboardEntry = (req, res) => {
  const email = req.params.email;
  const sqlSelect = `SELECT * FROM leaderboard WHERE email = '${email}';`;
  db.query(sqlSelect, (err, result) => {
    if (result.length === 0) {
      res.status(400);
      res.send("This user is not on the leaderboard");
    } else {
      res.send(result);
    }
  });
};

//create a patch request to update the time of a user on the leaderboard given the email and the new time
export const updateLeaderboardEntry = (req, res) => {
  const email = req.params.email;
  const bestTimeToUpdate = Object.keys(req.body)[0];
  const newTime = JSON.parse(req.body[bestTimeToUpdate]);

  console.log(Object.keys(req.body)[0]);
  //console.log(req.body.params.bestTime.key)
  const sqlUpdate = `UPDATE leaderboard SET ${bestTimeToUpdate} = '${newTime}' WHERE email = '${email}';`;
  db.query(sqlUpdate, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("entry updated");
    }
  });
};

//create a delete request to delete an entry from the leaderboard given the email
export const deleteLeaderboardEntry = (req, res) => {
  const email = req.params.email;
  const sqlDelete = `DELETE FROM leaderboard WHERE email = '${email}';`;
  db.query(sqlDelete, (err, result) => {
    console.log(err);
    res.send("entry deleted");
  });
};
