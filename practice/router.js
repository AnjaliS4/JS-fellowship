const express = require("express");

const router = express.Router();

router.get(
  "/:id/education/:education/address/:address/country/:country",
  (req, res) => {
    const id = req.params.id;
    const education = req.params.education;
    const address = req.params.address;
    const country = req.params.country;
    res.send(
      `i am practicing what was learned in class today through this ;<br/> Id: ${id}, </br>address:${address},<br/> country: ${country}`
    );
  }
);



module.exports = router