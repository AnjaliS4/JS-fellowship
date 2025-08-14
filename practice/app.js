const express = require ("express")
const profileRouter = require("./router");
const app = express ();

app.get("/home", (req, res) => {
  const location = req.query.location;
  const name = req.query.name;
  const country = req.query.country;
  res.send(`this is a static route;<br/>From <br/>Location: ${location},
            <br/> name: ${name}, <br/>country: ${country}`);
});
app.use("/adminprofile", profileRouter);
app.use("/userprofile", profileRouter);

app.listen(3000, () => {
  console.log;
  
});

