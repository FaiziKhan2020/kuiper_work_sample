import express from "express";
import cors from "cors";
import helmet from "helmet";
import { getPort } from "./shared/config/config";
import appPrismaClient from "./shared/prisma/client";
import passport from "passport";
import { getBearerStrategy, getLocalStrategy } from "./middlewares/strategy";
import { getPublicRouter } from "./routes/public";
import { getPrivateRouter } from "./routes/private";
const prisma = appPrismaClient;

const publicApp = express();

passport.use(getLocalStrategy());
passport.use(getBearerStrategy());
publicApp.use(passport.initialize());

publicApp.use(cors());
publicApp.use(helmet());
publicApp.use(express.json({ limit: "50mb" }));
publicApp.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

passport.serializeUser((user, cb) =>
  user !== null ? cb(null, user) : cb(null, false)
);
publicApp.all(
  "/private/*",
  passport.authenticate("bearer", { session: false })
);
publicApp.all("/public/*");
publicApp.use("/public", getPublicRouter());
publicApp.use("/private", getPrivateRouter());
publicApp.listen(getPort(), () => {
  console.log(`🚀 Server ready at: http://localhost:${getPort()}`);
});

process.on("exit", async () => {
  await prisma.$disconnect();
});
