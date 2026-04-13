import { ITransaction } from "@/app/types/transaction";

export const transactionsMock: ITransaction[] = [
  {
    id: 1,
    description: "Desenvolvimento de site",
    amount: 12000,
    type: "Venda",
    date: "13/04/2022",
  },
  {
    id: 2,
    description: "Hamburguer",
    amount: -59,
    type: "Alimentação",
    date: "10/04/2022",
  },
  {
    id: 3,
    description: "Aluguel do apartamento",
    amount: -1200,
    type: "Casa",
    date: "27/03/2022",
  },
  {
    id: 4,
    description: "Computador",
    amount: 5400,
    type: "Venda",
    date: "15/03/2022",
  },
  {
    id: 5,
    description: "Desenvolvimento de site",
    amount: 8000,
    type: "Venda",
    date: "13/03/2022",
  },
  {
    id: 6,
    description: "Janta",
    amount: -39,
    type: "Alimentação",
    date: "10/03/2022",
  },
  {
    id: 7,
    description: "Aluguel do apartamento",
    amount: -1200,
    type: "Casa",
    date: "27/02/2022",
  },
  {
    id: 8,
    description: "Salário",
    amount: 5400,
    type: "Salário",
    date: "15/02/2022",
  },
  {
    id: 9,
    description: "Almoço",
    amount: -30,
    type: "Alimentação",
    date: "05/02/2022",
  },
  {
    id: 10,
    description: "Fone de ouvido",
    amount: -150,
    type: "Itens",
    date: "02/02/2022",
  },
];