import { transactionsMock } from "../../services/transactions.mock";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function TransactionListPage() {

  return (
    <div className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <search className="w-full flex gap-2">
        <input
          type="text"
          placeholder="Busque uma transação"
          className="w-full bg-[#121214] text-[#7C7C8A] h-10 border-gray-300 rounded-md  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button className="text-[#00B37E] border-[#00B37E] border-2 rounded-md focus:outline-none">
          <span className="sr-only">Buscar</span>
         Buscar
        </button>
      </search>

      <Table className="border-separate border-spacing-y-2">
        <TableBody>
          {transactionsMock.map((transaction) => (
            <TableRow
              key={transaction.id}
              className="bg-[#29292E] h-14 border-none hover:bg-[#29292E]/80 [&>td:first-child]:rounded-l-[5px] [&>td:last-child]:rounded-r-[5px]"
            >
              <TableCell className="text-lg font-normal text-white">
                {transaction.description}
              </TableCell>
              <TableCell
                className={`font-bold ${
                  transaction.amount > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.amount > 0 ? "" : "- "}R${" "}
                {Math.abs(transaction.amount).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell className="text-lg font-normal text-white">
                {transaction.type}
              </TableCell>
              <TableCell className="text-sm font-normal text-gray-400">
                {transaction.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}   