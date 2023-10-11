import { Unsubscribe, collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useGetUserInfo } from "./use-get-user-info";
import { db } from "../config/firebase-config";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ITotalTransactions } from "../types";

export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState<Array<unknown>>([])
    const [totalTransactions, setTotalTransactions] = useState<ITotalTransactions>({ balance: 0, expenses: 0, income: 0 });
    const transactionCollectionRef = useMemo(() => collection(db, 'transactions'), []);
    const userInfo = useGetUserInfo();

    const getTransactions = useCallback(async () => {
        let unsubscribe: Unsubscribe;
        try {
            const queryTransactions = query(
                transactionCollectionRef,
                where('userId', '==', userInfo?.userId),
                orderBy('createdAt'));

            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                const docs: unknown[] = [];
                let expenses = 0;
                let income = 0;
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    docs.push({ ...data, id });
                    data.type === 'expense' ? expenses += +data.amount : income += +data.amount
                })
                const balance = income - expenses;
                setTransactions(docs);
                setTotalTransactions({ balance, expenses, income });
            })
        } catch (error) {
            //TODO: handle this error
            console.error();
        }
        return () => unsubscribe();
    }, [transactionCollectionRef, userInfo?.userId])

    useEffect(() => {
        getTransactions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { transactions, totalTransactions }
}