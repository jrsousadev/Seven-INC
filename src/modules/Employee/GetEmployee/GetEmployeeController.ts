import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { GetEmployeeService } from "./GetEmployeeService";

export class GetEmployeeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const getEmployeeService = container.resolve(GetEmployeeService);
      const employee = await getEmployeeService.execute({
        id: String(id)
      });

      return response.status(200).json(employee);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
