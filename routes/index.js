import { Router } from "express";
import { findServer } from "../controllers/findServer";

const router = Router();

router.get('/', findServer)

export default router