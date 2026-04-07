import { Router } from "express";
import { auth } from "../middlewares/auth.middlewares.js";
import { generateArticle } from "../controllers/ai.controllers.js";

const aiRouter= Router();

aiRouter.post('/generate-article', auth, generateArticle);

export default aiRouter;