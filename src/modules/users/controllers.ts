import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UserSignUpRequest } from "./dtos";
import { userSignUp } from "./services";

export const handleUserSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("회원가입을 요청했습니다!");
    console.log("body:", req.body);

    const user = await userSignUp(req.body as UserSignUpRequest);

    res.status(StatusCodes.OK).json({
      result: user,
    });
  } catch (err) {
    next(err);
  }
};