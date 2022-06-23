import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3003;

app.get("/jobs", (req, res) => {
    res.send([{ name: "job 1" }, { name: "job 2" }]);
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//create error 404 am ende
 app.get("*", function (req, res) {
     res.status(404).send("what???");
 });