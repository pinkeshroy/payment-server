import { Router } from "express";
import paymentRoutes from "./payments";

const router = Router();

router.use("/payments",paymentRoutes);

export default router;
