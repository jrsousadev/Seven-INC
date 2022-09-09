import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { GetAllEmployeeService } from "./GetAllEmployeeService";

export class GetAllEmployeeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const getAllEmployeeService = container.resolve(GetAllEmployeeService);
      const employees = await getAllEmployeeService.execute();

      return response.status(200).json(employees);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
