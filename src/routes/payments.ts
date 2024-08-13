import { Router } from "express";
import { order,verify } from "../Controllers/PaymentControllers";

const router = Router();

router.post("/order", order);
router.post("/verify", verify);

export default router;
