import { injectable, inject } from "tsyringe";
import { EmployeeRepository } from "../../../repositories/Employee";

@injectable()
export class GetAllEmployeeService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: EmployeeRepository
  ) {}

  async execute() {
    try {
      const employees = await this.employeeRepository.getAll();

      if (!employees) return [];

      return employees;
    } catch (err) {
      throw err;
    }
  }
}
