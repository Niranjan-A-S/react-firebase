import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { useGetUserInfo } from './use-get-user-info';
import { TransactionFormData } from '../types';

export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, 'transactions');
    const userInfo = useGetUserInfo();

    const addTransaction = async ({ amount, description, type }: TransactionFormData) => {
        await addDoc(transactionCollectionRef, {
            userId: userInfo?.userId,
            amount,
            type,
            description,
            createdAt: serverTimestamp(),
        })
    }
    return { addTransaction }
}