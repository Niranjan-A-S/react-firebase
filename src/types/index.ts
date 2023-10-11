import { ChangeEvent, ReactNode } from "react";

export type TransactionType = 'expense' | 'income';

//TODO: Change the type name
export type TransactionFormData = Omit<ITransactionDetails, 'userId' | 'createdAt'>

export interface IRadioButtonProps {
    id: string;
    label: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: string;
    checked: boolean;
}

export interface IAddTransactionFormProps {
    onSubmit(params: TransactionFormData): void;
}

export interface IBalanceProps {
    balance: number;
}


export interface IContainerProps {
    children: ReactNode;
}

export interface IUserProfileProps {
    onClick(): void;
    profilePhoto: string;
    userName: string;
}
export interface IFinanceCardProps {
    className: string;
    title: string;
    value: number;
}

export interface ITransactionDetails {
    userId: string;
    amount: number;
    type: TransactionType;
    description: string;
    createdAt: string;
}

export interface ITransactionData extends ITransactionDetails {
    id: string;
}

export interface ITransactionProps {
    transactions: ITransactionData[];
}
export interface ITransactionItemProps extends Omit<ITransactionData, 'createdAt' | 'userId'> {
}

export interface ITotalTransactions {
    balance: number;
    income: number;
    expenses: number;
}
