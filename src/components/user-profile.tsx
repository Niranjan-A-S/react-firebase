import { FC, memo } from "react";
import { IUserProfileProps } from "../types";

export const UserProfile: FC<IUserProfileProps> = memo(({ userName, onClick, profilePhoto }) => {
    return <>
        <h1>{userName}'s Expense Tracker</h1>
        <img src={profilePhoto} />
        <button onClick={onClick}>Sign Out</button>
    </>
})