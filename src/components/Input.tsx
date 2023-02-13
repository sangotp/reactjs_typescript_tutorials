type InputProps = {
    value: string
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, handleOnChange}: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <input type='text' value={value} onChange={handleOnChange} />
    )
}