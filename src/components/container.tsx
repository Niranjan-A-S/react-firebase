//TODO change the name of this component
import { FC, memo } from "react";
import { IContainerProps } from "../types";

export const Container: FC<IContainerProps> = memo(({ children }) => {
    return <div className="expense-tracker">
        <div className="container">
            {children}
        </div>
    </div>
}) 