type InputProps = {
    value: string
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <input type='text' value={props.value} onChange={handleInputChange} />
    )
}