import { FC, memo } from "react";
import { IFinanceCardProps } from "../types";

export const FinanceCard: FC<IFinanceCardProps> = memo(({ className, title, value }) => {
    return <div className={className}>
        <h4>{title}</h4>
        <p>Rs. {value}</p>
    </div>
})