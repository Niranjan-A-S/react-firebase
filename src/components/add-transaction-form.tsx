import { FC, FormEvent, memo, useCallback } from "react";
import { RadioButton } from "./parts/radio-button";
import { IAddTransactionFormProps, TransactionFormData } from "../types";
import { useFormData } from "../hooks/use-form-data";

const initialValue: TransactionFormData = { amount: 0, description: '', type: 'expense' }
export const AddTransactionForm: FC<IAddTransactionFormProps> = memo(({ onSubmit }) => {

    const { formData: { amount, description, type }, onChange, resetForm } = useFormData<TransactionFormData>(initialValue)

    const _onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit({ amount, description, type });
        resetForm()
    }, [amount, description, onSubmit, resetForm, type])

    return <form onSubmit={_onSubmit}>
        <input
            name="description"
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={onChange} />
        <input
            name="amount"
            type="number"
            placeholder="Amount"
            required
            value={amount}
            onChange={onChange} />
        {/* {TODO: Remove the type props from radio button} */}
        <RadioButton
            name="type"
            value="expense"
            id="expense"
            onChange={onChange}
            label={"Expense"}
            checked={type === "expense"} />
        <RadioButton
            name="type"
            value="income"
            id="income"
            onChange={onChange}
            label={"Income"}
            checked={type === "income"} />
        <button type="submit">Add Transaction</button>
    </form>
})