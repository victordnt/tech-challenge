"use client";

import { useState } from "react";
import { ITransaction } from "../types/transaction";

interface AddTranscationFormProps {
  addTransaction: (transaction: ITransaction) => void;
}

const initialTransaction: ITransaction = {
  id: Date.now(),
  date: new Date().toISOString().split("T")[0],
  amount: 0,
  description: "",
  type: "credito",
};

export const AddTransactionForm = ({
  addTransaction,
}: AddTranscationFormProps) => {
  const [newTransaction, setNewTransaction] =
    useState<ITransaction>(initialTransaction);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction(newTransaction);

    setNewTransaction({
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: 0,
      description: "",
      type: "credito",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-3"
    >
      <h2 className="text-2xl font-bold text-white mb-2">Nova transação</h2>

      {/* Descrição */}
      <input
        type="text"
        value={newTransaction.description}
        onChange={(e) =>
          setNewTransaction({
            ...newTransaction,
            description: e.target.value,
          })
        }
        className="rounded-md px-4 py-4 bg-[#121214] text-white placeholder-[#7C7C8A] border-none focus:outline-none focus:ring-2 focus:ring-[#00875F]"
        placeholder="Descrição"
      />

      {/* Preço */}
      <input
        type="number"
        value={newTransaction.amount || ""}
        onChange={(e) =>
          setNewTransaction({
            ...newTransaction,
            amount: Number(e.target.value),
          })
        }
        className="rounded-md px-4 py-4 bg-[#121214] text-white placeholder-[#7C7C8A] border-none focus:outline-none focus:ring-2 focus:ring-[#00875F]"
        placeholder="Preço"
      />

      {/* Categoria */}
      <input
        type="text"
        value={newTransaction.type === "credito" || newTransaction.type === "debito" ? "" : newTransaction.type}
        onChange={(e) =>
          setNewTransaction({
            ...newTransaction,
            type: e.target.value,
          })
        }
        className="rounded-md px-4 py-4 bg-[#121214] text-white placeholder-[#7C7C8A] border-none focus:outline-none focus:ring-2 focus:ring-[#00875F]"
        placeholder="Categoria"
      />

      {/* Tipo - Entrada/Saída */}
      <div className="flex gap-4 mt-2">
        <button
          type="button"
          onClick={() =>
            setNewTransaction({ ...newTransaction, type: "credito" })
          }
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-medium transition ${
            newTransaction.type === "credito"
              ? "bg-[#00875F]/20 border border-[#00875F] text-white"
              : "bg-[#29292E] text-[#C4C4CC] hover:bg-[#323238]"
          }`}
        >
          <span className="text-green-500">↑</span> Entrada
        </button>
        <button
          type="button"
          onClick={() =>
            setNewTransaction({ ...newTransaction, type: "debito" })
          }
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-medium transition ${
            newTransaction.type === "debito"
              ? "bg-red-500/20 border border-red-500 text-white"
              : "bg-[#29292E] text-[#C4C4CC] hover:bg-[#323238]"
          }`}
        >
          <span className="text-red-500">↓</span> Saída
        </button>
      </div>

      {/* Botão Cadastrar */}
      <button
        type="submit"
        className="mt-4 bg-[#00875F] text-white py-4 rounded-md font-bold text-base hover:bg-emerald-600 transition"
      >
        Cadastrar
      </button>
    </form>
  );
};
