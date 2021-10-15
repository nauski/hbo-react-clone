import React, { useContext, useState } from 'react';

export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
}

export function HBOProvider({ children }) {
    const [user, setUser] = useState('')
    const defaultUserImage = 'https://randomuser.me/api/portraits/women/95.jpg'
    const createUserAction = (e) => {
        setUser(e.target.value)
        console.log(user)
    }

    const [sideNavOpen, setSideNavOpenAction] = useState(false)
    const [accountModalOpen, setAccountModalOpenAction] = useState(false)

    return (
        <StateContext.Provider
            value={{
                user,
                createUserAction,
                defaultUserImage,
                sideNavOpen,
                setSideNavOpenAction,
                accountModalOpen,
                setAccountModalOpenAction
            }}>
            {children}
        </StateContext.Provider>
    )
}
