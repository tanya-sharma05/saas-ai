import {Router} from "express";
import { auth } from "../middlewares/auth.middlewares.js";
import { getPublishedCreations, getUserCreations, toggleLikeCreations } from "../controllers/user.controllers.js";

const userRouter= Router();

userRouter.get('/get/user-creations', auth, getUserCreations);
userRouter.get('/get/published-creations', auth, getPublishedCreations);
userRouter.post('/toggle-like-creations', auth, toggleLikeCreations);


export default userRouter;