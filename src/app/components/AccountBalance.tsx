"use client";

import { useState } from "react";
import { ITransaction } from "../types/transaction";
import { AddTransactionForm } from "./AddTransactionForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./AccountBalance.module.css";

interface AccountBalanceProps {
  transactions: ITransaction[];
}

export const AccountBalance = ({ transactions }: AccountBalanceProps) => {
  const [open, setOpen] = useState(false);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "credito") {
        acc.credit += transaction.amount;
      } else {
        acc.debit += transaction.amount;
      }
      return acc;
    },
    { credit: 0, debit: 0 },
  );

  const balance = summary.credit - summary.debit;

  return (
    <div className="w-full">
    <div>
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger className="w-full flex justify-end">
      <button className="bg-[#00875F] h-12 text-white px-4 py-2 rounded-md hover:bg-emerald-600 focus:outline-none">
        Nova Transação
      </button>
    </DialogTrigger>
    <DialogContent className="bg-[#202024] border-none sm:max-w-md p-8 gap-6">
      <AddTransactionForm
        addTransaction={() => {
          setOpen(false);
        }}
      />
    </DialogContent>
  </Dialog>
</div>
    <div className={styles.container}>
      {/* Entradas */}
      <div className={`${styles.card} ${styles.credit}`}>
        <div className={styles["card-header"]}>
          <span className={styles["card-label"]}>Entradas</span>
          <div className={styles["card-icon"]}>↑</div>
        </div>
        <span className={styles["card-value"]}>R$ {summary.credit.toFixed(2)}</span>
      </div>

      {/* Saídas */}
      <div className={`${styles.card} ${styles.debit}`}>
        <div className={styles["card-header"]}>
          <span className={styles["card-label"]}>Saídas</span>
          <div className={styles["card-icon"]}>↓</div>
        </div>
        <span className={styles["card-value"]}>R$ {summary.debit.toFixed(2)}</span>
      </div>

      {/* Total */}
      <div className={`${styles.card} ${styles.balance}`}>
        <div className={styles["card-header"]}>
          <span className={styles["card-label"]}>Total</span>
          <div className={styles["card-icon"]}>$</div>
        </div>
        <span className={styles["card-value"]}>R$ {balance.toFixed(2)}</span>
      </div>
    </div>
    </div>
  );
};
