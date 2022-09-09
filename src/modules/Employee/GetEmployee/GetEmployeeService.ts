import { injectable, inject } from "tsyringe";
import { EmployeeRepository } from "../../../repositories/Employee";
import { CustomError } from "../../../shared/errors/CustomError";

interface IRequest {
  id: string;
}

@injectable()
export class GetEmployeeService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: EmployeeRepository
  ) {}

  async execute({ id }: IRequest) {
    try {
      const employee = await this.employeeRepository.getOne({
        id,
      });

      if (!employee) throw new CustomError("Employee is not exist", 400);

      return employee;
    } catch (err) {
      throw err;
    }
  }
}
