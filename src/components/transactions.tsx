import { FC, memo } from "react"
import { ITransactionProps } from "../types"
import { TransactionItem } from "./transaction-item"

export const Transactions: FC<ITransactionProps> = memo(({ transactions }) => {
    return <div className="transactions">
        <h3>Transactions</h3>
        <ul>
            {transactions.map(({ amount, description, type, id }) => {
                return <TransactionItem key={id} amount={amount} description={description} type={type} id={id} />
            })}
        </ul>
    </div>
})