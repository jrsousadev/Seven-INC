import { prismaClient } from "../database/prismaClient";

interface ICreateEmployee {
  name: string;
  document: string;
  email: string;
  phone: string;
  birth_date: Date;
  salary: number;
}

interface IGetEmployee {
  id?: string;
  document?: string;
}

interface IDeleteEmployee {
  id?: string;
  document?: string;
}

interface IUpdateEmployee {
  id: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  birth_date: Date;
  salary: number;
}

export class EmployeeRepository {
  async create(data: ICreateEmployee) {
    try {
      return await prismaClient.employee.create({
        data: data,
      });
    } catch (err) {
      throw err;
    }
  }

  async getOne({ id, document }: IGetEmployee) {
    if (id) {
      try {
        return await prismaClient.employee.findFirst({
          where: {
            id,
          }
        });
      } catch (err) {
        throw err;
      }
    }

    if(document) {
      try {
        return await prismaClient.employee.findFirst({
          where: {
            document,
          }
        });
      } catch (err) {
        throw err;
      }
    }
  }

  async getAll() {
    try {
      return await prismaClient.employee.findMany();
    } catch (err) {
      throw err;
    }
  }

  async delete({ id }: IDeleteEmployee) {
    try {
      await prismaClient.employee.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async update(data: IUpdateEmployee) {
    try {
      return await prismaClient.employee.update({
        where: {
          id: data.id,
        },
        data,
      });
    } catch (err) {
      throw err;
    }
  }
}
