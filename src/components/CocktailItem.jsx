import Button from 'react-bootstrap/Button'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
function CocktailItem() {
    const { selectedCocktail } = useGlobalContext()

    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/')
    }

    if (selectedCocktail) {
        console.log(selectedCocktail)
        const {
            strDrink,
            strDrinkThumb,
            strCategory,
            strAlcoholic,
            strInstructions,
        } = selectedCocktail
        return (
            <div className='cocktail-item-container'>
                <header className='cocktail-item-header'>
                    <h1>{strDrink}</h1>
                    <div className='cocktail-image'>
                        <img src={strDrinkThumb} alt={strDrink} />
                    </div>
                </header>
                <section>
                    <article className='cocktail-info'>
                        <p>
                            <span className='titles'>Type:</span> {strCategory}
                        </p>
                        <p>
                            <span className='titles'>Alcoholic:</span>{' '}
                            {strAlcoholic}
                        </p>
                    </article>
                    <div className='ingredients-container'>
                        <h4>Ingredients</h4>

                        <div className='ingredients-list'>
                            <ul>
                                {Object.keys(selectedCocktail).map((key) => {
                                    if (
                                        key.includes('strIngredient') &&
                                        selectedCocktail[key] !== null
                                    ) {
                                        return (
                                            <li key={key}>
                                                {selectedCocktail[key]}
                                            </li>
                                        )
                                    }

                                    return null
                                })}
                            </ul>
                            <ul>
                                {Object.keys(selectedCocktail).map((key) => {
                                    if (
                                        key.includes('strMeasure') &&
                                        selectedCocktail[key] !== null
                                    ) {
                                        return (
                                            <li key={key}>
                                                {selectedCocktail[key]}
                                            </li>
                                        )
                                    }

                                    return null
                                })}
                            </ul>
                        </div>
                        <h4>Instructions</h4>
                        <p>{strInstructions}</p>
                    </div>
                    <div className='btn-container'>
                        <Button
                            variant='info'
                            className='back-btn text-white'
                            onClick={handleClick}
                        >
                            Back
                        </Button>
                    </div>
                </section>
            </div>
        )
    }
}

export default CocktailItem
