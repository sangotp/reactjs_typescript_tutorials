type ButtonProps = {
    varient: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const Button = ({varient, children, ...rest}: ButtonProps) => {
    return (
        <button className={ `class-with-${varient}` } {...rest}>{children}</button>
    )
}