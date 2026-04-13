"use client";

import { useState } from "react";

import styles from "./page.module.css";

import { AddTransactionForm } from "./components/AddTransactionForm";
import { TransactionList } from "./components/TransactionList";
import { AccountBalance } from "./components/AccountBalance";
import { ITransaction } from "./types/transaction";
import TransactionCreateModal from "./features/transactions/components/transactionListPage";
import TransactionListPage from "./features/transactions/components/transactionListPage";

export default function Home() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const addTransaction = (newTransaction: ITransaction) => {
    setTransactions((previousTransactions) => [
      ...previousTransactions,
      newTransaction,
    ]);
    console.log("Transação adicionada!");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AccountBalance transactions={transactions} />
        <TransactionListPage />
        {/* <AddTransactionForm addTransaction={addTransaction} /> */}
        <TransactionList transactions={transactions} />
      </main>
    </div>
  );
}
