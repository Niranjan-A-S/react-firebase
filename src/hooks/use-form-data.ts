import { ChangeEvent, useCallback, useState } from "react";

export const useFormData = <T>(initialValue: T) => {
    const [formData, setFormData] = useState<T>(initialValue);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }, [formData]);

    const resetForm = useCallback(() => {
        setFormData(initialValue);
    }, [initialValue]);

    return { formData, onChange, resetForm }
}