
import { FC, memo, useMemo } from "react";
import { ITransactionItemProps, TransactionType } from "../types";

const getColorFromType = (type: TransactionType) => type === 'expense' ? 'red' : 'green'

export const TransactionItem: FC<ITransactionItemProps> = memo(({ amount, type, description }) => {
    const color = useMemo(() => getColorFromType(type), [type])
    return <li>
        <h4>{description}</h4>
        <p>
            {" "}
            {amount} . <label style={{ color }}>{type}</label>
        </p>
    </li>
})