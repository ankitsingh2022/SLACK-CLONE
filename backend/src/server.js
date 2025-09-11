import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";   // ✅ correct imports
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";

const app = express();
app.use(express.json());

// ✅ Clerk middleware (adds req.auth for all requests)
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));

// Public route
app.get("/", (req, res) => {
  res.send("Hello World! 123");
});

// Example protected route
app.get("/protected", requireAuth(), (req, res) => {
  res.json({ message: "You are authenticated!", userId: req.auth.userId });
});

const startServer = async () => {
  try {
    await connectDB();

    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log("✅ Server started at port:", ENV.PORT);
      });
    }
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
};

startServer();
export default app;
