type ButtonProps = {
    handleOnClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.handleOnClick(event, 1)}>Click</button>
    )
}