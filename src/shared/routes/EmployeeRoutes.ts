import { Router } from "express";
import { CreateEmployeeController } from "../../modules/Employee/CreateEmployee/CreateEmployeeController";
import { DeleteEmployeeController } from "../../modules/Employee/DeleteEmployee/DeleteEmployeeController";
import { GetAllEmployeeController } from "../../modules/Employee/GetAllEmployee/GetAllEmployeeController";
import { GetEmployeeController } from "../../modules/Employee/GetEmployee/GetEmployeeController";
import { UpdateEmployeeController } from "../../modules/Employee/UpdateEmployee/UpdateEmployeeController";

const employeeRoutes = Router();

const createEmployeeController = new CreateEmployeeController();
employeeRoutes.post('/', createEmployeeController.handle);

const getAllEmployeeController = new GetAllEmployeeController();
employeeRoutes.get('/', getAllEmployeeController.handle);

const getEmployeeController = new GetEmployeeController();
employeeRoutes.get('/:id', getEmployeeController.handle);

const deleteEmployeeController = new DeleteEmployeeController();
employeeRoutes.delete('/:id', deleteEmployeeController.handle);

const updateEmployeeController = new UpdateEmployeeController();
employeeRoutes.put('/:id', updateEmployeeController.handle);

export default employeeRoutes;
