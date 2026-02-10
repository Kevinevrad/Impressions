import _ from "lodash";
import app from "./app.js";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// * ROUTES
import projects from "./routes/projectRoutes.js";
import rapports from "./routes/rapportRoutes.js";
import users from "./routes/usersRoutes.js";
import plans from "./routes/planRoutes.js";

dotenv.config();

// * MIDDLEWARES
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.params);
  // console.log(req.params);

  next();
});

/*
 * SETTING  PROJECT ROUTES
 TODO: SETTING ROUTES FOR POST GET ANS PATCH REQUESTS 
 TODO  FOR PROJECT DATA
 *       
 */

app.use("/api/projects", projects);

/*
 * SETTING USER ROUTES
 TODO: SETTING ROUTES FOR CREATING USER 
 */
app.use("/api/users", users);

/*
 * SETTING RAPPORTS ROUTES
 TODO: SETTING ROUTES FOR CREATING RAPPORT DOC 
 */
app.use("/api/projects", rapports);

/*
 * SETTING RAPPORTS ROUTES
 TODO: SETTING ROUTES FOR CREATING PLAN DOC 
 */
app.use("/api/docs", plans);

/*
 *CONNECTING MY APP TO MONGODB
 *USING THE PACKAGE MONGOSE WITH THE FUNCTION CONNECT
 *FOR CONNECTING MY APP WITH MONGODB USING (MONGO_URI PROVIDE BY MONGODB)
 */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // * LISTENNING TO REQUEST
    app.listen(process.env.PORT, "localhost", () => {
      console.log(
        `CONNECTED TO DB & LISTENNING FOR REQUEST ON PORT ${process.env.PORT}`,
      );
    });
  })
  .catch((error) => console.log(error));
