const express = require("express");
const router = express.Router();

/* ================= MIDDLEWARES ================= */
const auth = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/role.middleware");

/* ================= CONTROLLERS ================= */
const {
  getAllComplaints,
  updateComplaintStatus,
  getAnalytics,
} = require("../controllers/admin.controller");

/* ================= ADMIN ROUTES ================= */

// 📄 Get all complaints
router.get("/complaints", auth, isAdmin, getAllComplaints);

// 🔄 Update complaint status
router.put(
  "/complaints/:id/status",
  auth,
  isAdmin,
  updateComplaintStatus
);

// 📊 Analytics
router.get("/analytics", auth, isAdmin, getAnalytics);

module.exports = router;
