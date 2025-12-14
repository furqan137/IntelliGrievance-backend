const express = require("express");
const router = express.Router();
const {
  createComplaint,
  getMyComplaints,
} = require("../controllers/complaint.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, createComplaint);
router.get("/my", auth, getMyComplaints);

module.exports = router;
