import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
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
            <Container align='center' className='mt-5'>
                <div>
                    <header>
                        <h1>{strDrink}</h1>
                        <div className='cocktail-image'>
                            <img src={strDrinkThumb} alt={strDrink} />
                        </div>
                    </header>
                    <section>
                        <article className='cocktail-info'>
                            <p>Type: {strCategory}</p>
                            <p>Alcoholic: {strAlcoholic}</p>
                        </article>
                        <div>
                            <h4>Ingredients</h4>

                            <div className='ingredients-list'>
                                <ul>
                                    {Object.keys(selectedCocktail).map(
                                        (key) => {
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
                                        }
                                    )}
                                </ul>
                                <ul>
                                    {Object.keys(selectedCocktail).map(
                                        (key) => {
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
                                        }
                                    )}
                                </ul>
                            </div>
                            <h4>Instructions</h4>
                            <p>{strInstructions}</p>
                        </div>
                    </section>
                    <Button
                        variant='dark'
                        className='m-1'
                        onClick={handleClick}
                    >
                        Back
                    </Button>
                </div>
            </Container>
        )
    }
}

export default CocktailItem
