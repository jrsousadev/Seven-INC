import { Router } from "express";
import employeeRoutes from "./EmployeeRoutes";

const routes = Router();

routes.use("/employee", employeeRoutes);

export default routes;