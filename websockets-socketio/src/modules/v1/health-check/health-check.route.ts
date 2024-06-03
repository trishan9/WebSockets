import { NextFunction, Request, Response, Router } from "express";

const healthCheckRouter = Router();

healthCheckRouter.get(
  "/",
  (req: Request, res: Response, _next: NextFunction) => {
    return res.status(200).json({
      success: true,
      message: "Server up and running!",
    });
  },
);

export default healthCheckRouter;
