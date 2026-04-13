import { transactionsMock } from "../../services/transactions.mock";

export default function TransactionListPage() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <search>
        <input
          type="text"
          placeholder="Busque uma transação"
          className="w-full bg-[#121214] text-[#7C7C8A] h-10 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg></svg>
          
        </button>
      </search>

      {transactionsMock.map((transaction) => (
        <div
          key={transaction.id}
          className=" bg-[#29292E] h-14 w-full shadow-md rounded-lg items-center flex justify-between"
        >
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <h1 className="text-lg font-normal text-white">
              {transaction.description}
            </h1>
            <span
              className={`font-bold ${
                transaction.amount > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {transaction.amount > 0 ? "" : "- "}R${" "}
              {Math.abs(transaction.amount).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
            <h1 className="text-lg font-normal text-white">
              {transaction.type}
            </h1>
            <h1 className="text-sm font-normal text-gray-400">
              {transaction.date}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}   