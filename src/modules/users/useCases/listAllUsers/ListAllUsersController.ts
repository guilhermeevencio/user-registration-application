import { Request, Response } from "express";
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
  }
}

export { ListAllUsersController };
