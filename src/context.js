import { useContext, useState, createContext, useEffect } from 'react'

const AppContext = createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [searchItem, setSearchItem] = useState('a')
    const [cocktails, setCocktails] = useState([])
    const [selectedCocktail, setSelectedCocktail] = useState({})

    const fetchCocktails = async (searchItem) => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchItem}`)
            const data = await response.json()
            const { drinks } = data
            if (drinks) {
                setCocktails(drinks)
            } else {
                setCocktails([])
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
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
                selectedCocktail,
                setSelectedCocktail,
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
