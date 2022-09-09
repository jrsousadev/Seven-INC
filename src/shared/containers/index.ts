import { container } from "tsyringe";
import { EmployeeRepository } from "../../repositories/Employee";

container.registerSingleton<EmployeeRepository>(
  "EmployeeRepository",
  EmployeeRepository
);

