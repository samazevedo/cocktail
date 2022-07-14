import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const ErrorPage = () => {
    return (
        <Container align='center'>
            <Card.Text as='h1' className='m-4 text-info'>
                404
            </Card.Text>
            <Card.Text as='h3' className='text-info'>
                Page not found
            </Card.Text>
        </Container>
    )
}
export default ErrorPage
