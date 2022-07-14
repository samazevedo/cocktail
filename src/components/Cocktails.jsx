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

    return (
        <Row xs={1} sm={2} md={3} className='cocktail-list'>
            {cocktails.map((cocktail) => {
                const { idDrink, strDrink, strDrinkThumb } = cocktail
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
                            <Card.Body>
                                <Card.Title>{strDrink}</Card.Title>
                                <Card.Text></Card.Text>
                                <Button
                                    variant='dark'
                                    className='m-1 '
                                    onClick={handleClick}
                                >
                                    View
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
