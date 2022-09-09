import * as cpf from "@fnando/cpf";

export const isValidDocument = (document: string) => {
  return cpf.isValid(document);
}