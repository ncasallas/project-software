import { useState, useEffect, useMemo, createContext } from "react";

export const AuthContext = createContext({
    login: () => { },
    logout: () => { },
    user: {
        usuario: '',
        rol: '',
        password: '',
        nombre: ''
    }
});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const auth = useMemo(
        () => ({
            login: (userLogged) => setUser(userLogged),
            logout: () => setUser(null),
        }),
        []
    )

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <AuthContext.Provider value={{ ...auth, user }}>
            {children}
        </AuthContext.Provider>
    )
}