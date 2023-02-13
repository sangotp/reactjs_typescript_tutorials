type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

type AuthUser = {
    id: number
    name: string
    email: string
}

export const List = <T extends AuthUser>({items, onClick}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {
                items.map((item, index) => {
                    return (
                        <div key={item.id} onClick={() => onClick(item)}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}