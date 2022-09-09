import { injectable, inject } from "tsyringe";
import { EmployeeRepository } from "../../../repositories/Employee";
import { CustomError } from "../../../shared/errors/CustomError";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteEmployeeService {
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

      await this.employeeRepository.delete({
        id,
      })

      return {
        message: 'Employee successfully deleted'
      };
    } catch (err) {
      throw err;
    }
  }
}
