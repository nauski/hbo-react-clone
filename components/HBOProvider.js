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
    const [searchOpen, setSearchOpenAction] = useState(false)

    const genrePaths = {
        Movies: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&primary_release_year=2021",
        Series: "https://api.themoviedb.org/3/discover/tv?primary_release_year=2021",
        Action: "https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2021",
        Horror: "https://api.themoviedb.org/3/discover/movie?with_genres=27&primary_release_year=2021",
        Animations: "https://api.themoviedb.org/3/discover/movie?with_genres=16&primary_release_year=2021",
        Scifi: "https://api.themoviedb.org/3/discover/movie?with_genres=878&primary_release_year=2021",
    }


    return (
        <StateContext.Provider
            value={{
                user,
                createUserAction,
                defaultUserImage,
                sideNavOpen,
                setSideNavOpenAction,
                accountModalOpen,
                setAccountModalOpenAction,
                searchOpen,
                setSearchOpenAction,
                genrePaths
            }}>
            {children}
        </StateContext.Provider>
    )
}

