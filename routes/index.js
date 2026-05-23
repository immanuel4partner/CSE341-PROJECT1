const router = require("express").Router();

/*
  #swagger.ignore = true
*/
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contacts API is running..."
  });
});

router.use("/contacts", require("./contacts"));

module.exports = router;