import { injectable, inject } from "tsyringe";
import { EmployeeRepository } from "../../../repositories/Employee";
import { CustomError } from "../../../shared/errors/CustomError";
import { isValidDocument } from "../../../utils/isValidDocument";

interface IRequest {
  name: string;
  document: string;
  email: string;
  phone: string;
  birth_date: Date;
  salary: number;
}

@injectable()
export class CreateEmployeeService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(data: IRequest) {
    try {
      const employeeExist = await this.employeeRepository.getOne({document: data.document})

      if (employeeExist) throw new CustomError("CPF alredy is exist", 400);

      const employee = await this.employeeRepository.create(data);

      return employee;
    } catch (err) {
      throw err;
    }
  }
}
