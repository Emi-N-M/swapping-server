import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import itemRoutes from "./routes/items.routes.js";
import imageRoutes from "./routes/images.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);
app.use("/api/images", imageRoutes);

export default app;
