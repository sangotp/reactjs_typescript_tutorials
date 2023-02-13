import { Greet } from "../Greet"

export const CustomComponent = (props: Omit<React.ComponentProps<typeof Greet>, 'isLoggedIn'>) => {
    return (
        <div>{props.name}</div>
    )
}