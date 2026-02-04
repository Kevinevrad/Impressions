import _ from "lodash";
import app from "./app.js";

app.get("/", (req, res) => {
  res.json({
    message: "Welcome my G",
  });
});

app.get("");

app.listen(process.env.PORT, "localhost", () => {
  console.log("LISTENNING FOR REQUEST ON PORT 3000");
});
