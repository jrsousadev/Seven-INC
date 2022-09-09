import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { UpdateEmployeeService } from "./UpdateEmployeeService";

export class UpdateEmployeeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, document, email, phone, birth_date, salary } = request.body;

    try {
      const updateEmployeeService = container.resolve(UpdateEmployeeService);
      const employee = await updateEmployeeService.execute({
        id,
        name,
        birth_date,
        document,
        email,
        phone,
        salary,
      });

      return response.status(200).json(employee);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
