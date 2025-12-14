const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = require("./app");
const connectDB = require("./config/db");

const startServer = async () => {
  try {
    await connectDB(); // 🔥 WAIT FOR MONGO
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 IntelliGrievance Backend running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server start failed:", err.message);
    process.exit(1);
  }
};

startServer();
