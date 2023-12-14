import express from "express";
import {
  addClients,
  deleteClients,
  getClients,
  updateClients,
} from "../controllers/clientController.js";

const router = express.Router();

router.get("/getClients", getClients);
router.post("/addClients", addClients);
router.put("/updateClients/:clientId", updateClients);
router.delete("/deleteClients/:clientId", deleteClients);

export default router;
