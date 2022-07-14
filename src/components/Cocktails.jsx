import Button from 'react-bootstrap/Button'
import LoadingPage from '../pages/Loading'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import { useGlobalContext } from '../context'
import { Col } from 'react-bootstrap'

const Cocktails = () => {
    const { cocktails, loading } = useGlobalContext()

    if (loading) {
        return <LoadingPage />
    }

    return (
        <Row xs={1} sm={2} md={3} className='cocktail-list'>
            {cocktails.map((cocktail) => {
                const { idDrink, strDrink, strDrinkThumb } = cocktail
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
                                    href={`/cocktails/${idDrink}`}
                                    className='m-1 '
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
