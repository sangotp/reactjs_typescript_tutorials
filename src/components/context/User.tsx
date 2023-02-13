import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        userContext.setUser({
            name: 'Le Sang',
            email: 'example@abc.com'
        })
    }

    const handleLogout = () => {
        userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is <strong>{userContext.user?.name}</strong></div>
            <div>User email is <strong>{userContext.user?.email}</strong></div>
        </div>
    )
}