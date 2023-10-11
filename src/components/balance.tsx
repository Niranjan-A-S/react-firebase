import { FC, memo } from "react";
import { IBalanceProps } from "../types";

export const Balance: FC<IBalanceProps> = memo(({ balance }) => {
    return <div className="balance">
        <h3>Your Balance</h3>
        <h2>Rs. {balance}</h2>
    </div>
})