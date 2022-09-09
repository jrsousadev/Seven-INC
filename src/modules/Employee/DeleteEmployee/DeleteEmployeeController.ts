import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { DeleteEmployeeService } from "./DeleteEmployeeService";

export class DeleteEmployeeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const deleteEmployeeService = container.resolve(DeleteEmployeeService);
      const employee = await deleteEmployeeService.execute({
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
