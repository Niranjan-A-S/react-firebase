import { FC, memo } from "react"
import { IRadioButtonProps } from "../../types"

export const RadioButton: FC<IRadioButtonProps> = memo(({ id, label, value, onChange, checked, name }) => {
    return <>
        <input type="radio" value={value} id={id} name={name} onChange={onChange} checked={checked} />
        <label htmlFor={id}>{label}</label>
    </>
})