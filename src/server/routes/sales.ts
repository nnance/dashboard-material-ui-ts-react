import express from "express";
import { ISale } from "../../structs/sales";

const router = express.Router();

// Generate Sales Data
function createData(time: string, amount: number | undefined): ISale {
    return { time, amount };
}

const data = [
    createData("00:00", 0),
    createData("03:00", 300),
    createData("06:00", 600),
    createData("09:00", 800),
    createData("12:00", 1500),
    createData("15:00", 2000),
    createData("18:00", 2400),
    createData("21:00", 2400),
    createData("24:00", undefined),
];

/* GET order listing. */
router.get("/", (req, res) => {
    res.json(data);
  });

export default router;
