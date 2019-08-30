import express from "express";
import { IDeposits } from "../../structs/deposits";

const router = express.Router();

const deposits: IDeposits[] = [{
  date: new Date(),
  total: 3510.00,
}];

/* GET total deposits. */
router.get("/", (req, res) => {
  res.json(deposits);
});

export default router;
