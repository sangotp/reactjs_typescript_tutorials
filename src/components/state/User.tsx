import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Le Sang',
            email: 'example@abc.com'
        })
    }

    const handleLogout = () => {
       setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is <strong>{user?.name}</strong></div>
            <div>User email is <strong>{user?.email}</strong></div>
        </div>
    )
}