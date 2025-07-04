import express from "express";
const router = express.Router();
import { addProblemControl } from "../controllers/problem/addProblemControl";
//Controller Imports
import { loginControl, registerControl } from "../controllers/authController";
import { judgeControl } from "../controllers/judgeController";
import { getProblemsControl } from "../controllers/problem/getProblemsControl";
import { getProblemControl } from "../controllers/problem/getProblemControl";
//Auth Routes
router.post("/login", loginControl);
router.post("/register", registerControl);
router.post("/judge", judgeControl);
router.post("/addProblem", addProblemControl);
router.get("/problems", getProblemsControl);
router.get("/getProblem/:slug", getProblemControl);

export default router;
