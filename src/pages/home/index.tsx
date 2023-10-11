import { signOut } from "firebase/auth";
import { memo, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AddTransactionForm } from "../../components/add-transaction-form";
import { Balance } from "../../components/balance";
import { Container } from "../../components/container";
import { FinanceCard } from "../../components/finance-card";
import { Transactions } from "../../components/transactions";
import { UserProfile } from "../../components/user-profile";
import { auth } from "../../config/firebase-config";
import { useAddTransaction } from "../../hooks/use-add-transaction";
import { useGetTransactions } from "../../hooks/use-get-transactions";
import { useGetUserInfo } from "../../hooks/use-get-user-info";
import { ITransactionData, TransactionFormData } from "../../types";
import './styles.css';

export const HomePage = memo(() => {
    const navigate = useNavigate();
    const { transactions, totalTransactions: { balance, expenses, income } } = useGetTransactions();
    const userInfo = useGetUserInfo();
    const { addTransaction } = useAddTransaction();

    const onSubmit = useCallback(({ amount, description, type }: TransactionFormData) => {
        addTransaction({ amount, description, type });
    }, [addTransaction]);

    const onSignOut = useCallback(async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }, [navigate]);



    return userInfo?.isAuthenticated ? (
        <>
            <Container>
                <UserProfile
                    onClick={onSignOut}
                    profilePhoto={userInfo.profilePhoto}
                    userName={userInfo.name}
                />
                <Balance balance={balance} />
                <div className="summary">
                    <FinanceCard className="income" title="Income" value={income} />
                    <FinanceCard className="expenses" title="Expenses" value={expenses} />
                </div>
                <AddTransactionForm onSubmit={onSubmit} />
            </Container>
            <Transactions transactions={transactions as unknown as ITransactionData[]} />
        </>
    ) : <Navigate to='/login' />;
});