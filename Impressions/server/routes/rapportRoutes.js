import express from "express";
import {
  addRapport,
  removeRapport,
  getRapport,
  updateRapport,
} from "../controllers/rapportControllers.js";

const router = express.Router();

//  *POST REQUEST
router.post("/:idProject/rapports/", addRapport);

// *DELETE REQUEST
router.delete("/rapports/:id", removeRapport);

// * GET RAPPORT
router.get("/rapports/:id", getRapport);

// * UPDATE RAPPORT PATCH REQUEST
router.patch("/rapport/:id", updateRapport);

export default router;
