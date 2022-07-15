import Button from 'react-bootstrap/Button'
import LoadingPage from '../pages/Loading'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'

const Cocktails = () => {
    const { cocktails, loading, setSelectedCocktail } = useGlobalContext()
    const navigate = useNavigate()

    if (loading) {
        return <LoadingPage />
    }
    if (!cocktails || cocktails.length < 1) {
        return <h2>No Cocktails Found</h2>
    }

    return (
        <Row xs={1} sm={2} md={3} className='cocktail-list'>
            {cocktails.map((cocktail) => {
                const {
                    idDrink,
                    strDrink,
                    strDrinkThumb,
                    strAlcoholic,
                    strGlass,
                } = cocktail
                const handleClick = () => {
                    setSelectedCocktail(cocktail)
                    navigate(`/cocktails/${idDrink}`)
                }
                return (
                    <Stack key={idDrink}>
                        <Card key={idDrink} bg='light' className='mb-3'>
                            <Card.Img
                                variant='top'
                                src={strDrinkThumb}
                                alt={strDrink}
                                width={50}
                            />
                            <Card.Body className='card-body'>
                                <h2>{strDrink}</h2>
                                <h5>{strGlass}</h5>
                                <p>{strAlcoholic}</p>
                                <Button
                                    variant='info'
                                    className='deetails-btn text-white'
                                    onClick={handleClick}
                                >
                                    Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Stack>
                )
            })}
        </Row>
    )
}

export default Cocktails
