import { useContext, useState, createContext, useEffect } from 'react'

const AppContext = createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [searchItem, setSearchItem] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchCocktails = async (searchItem) => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchItem}`)
            const data = await response.json()
            setCocktails(data.drinks)
            console.log(data.drinks)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchCocktails(searchItem)
    }, [searchItem])

    return (
        <AppContext.Provider
            value={{
                loading,
                cocktails,
                setSearchItem,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
