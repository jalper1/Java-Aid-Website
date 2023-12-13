import express from 'express';
//import uuid
import {createUser, deleteUser, getUser, getUsers, updateUser} from '../controllers/users.js';

import { getLeaderboard, addLeaderboardEntry } from '../controllers/leaderboard.js';

const router = express.Router();

//create a get request to get all the users in the database
router.get('/', getUsers);


//create a post request to add a user to the database
router.post('/', createUser);

//create a get request to get a specific user from the database
router.get('/:id',getUser);

//create a delete request to delete a user from the database
router.delete('/:id', deleteUser);

//create a patch request to update a user in the database
router.patch('/:id', updateUser);



//export the router
export default router;
