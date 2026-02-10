import express from "express";
import {
  addPlan,
  getPlan,
  updatingPlan,
  deletingPlan,
} from "../controllers/planController.js";

const router = express.Router();

// *POST
router.post("/:idProject/plans/", addPlan);
// *GET
router.get("/plans/:id", getPlan);
// *PATCH
router.patch("/plans/:id", updatingPlan);
// *DELETE
router.delete("/plans/:id", deletingPlan);

export default router;
