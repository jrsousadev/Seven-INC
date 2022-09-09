import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { CreateEmployeeService } from "./CreateEmployeeService";

export class CreateEmployeeController {
  async handle(request: Request, response: Response) {
    const { name, document, email, phone, birth_date, salary } = request.body;

    try {
      const createEmployeeService = container.resolve(CreateEmployeeService);
      const people = await createEmployeeService.execute({
        name,
        document,
        email,
        phone,
        birth_date,
        salary,
      });

      return response.status(201).json(people);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
