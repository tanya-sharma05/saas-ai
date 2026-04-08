import { Router } from "express";
import { auth } from "../middlewares/auth.middlewares.js";
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from "../controllers/ai.controllers.js";
import { upload } from "../config/multer.js";

const aiRouter= Router();

aiRouter.post('/generate-article', auth, generateArticle);
aiRouter.post('/generate-blog-title', auth, generateBlogTitle);
aiRouter.post('/generate-image', auth, generateImage);
aiRouter.post('/generate-image-background', upload.single('image'), auth, removeImageBackground);
aiRouter.post('/generate-image-object', upload.single('image'), auth, removeImageObject);
aiRouter.post('/resume-review', upload.single('resume'), auth, resumeReview);

export default aiRouter;