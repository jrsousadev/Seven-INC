import { inject, injectable } from "tsyringe";
import { EmployeeRepository } from "../../../repositories/Employee";
import { CustomError } from "../../../shared/errors/CustomError";

interface IRequest {
  id: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  birth_date: Date;
  salary: number;
}

@injectable()
export class UpdateEmployeeService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: EmployeeRepository
  ) {}

  async execute(data: IRequest) {
    try {
      const employeeExist = await this.employeeRepository.getOne({
        id: data.id,
      });

      if (!employeeExist) throw new CustomError("Employee is not exist", 400);

      const documentExist = await this.employeeRepository.getOne({
        document: data.document,
      });

      if (
        documentExist &&
        String(documentExist.id) !== String(employeeExist.id)
      )
        throw new CustomError("CPF already used", 400);

      const employee = await this.employeeRepository.update(data);

      return employee;
    } catch (err) {
      throw err;
    }
  }
}
