import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

const LoadingPage = () => {
    return (
        <Container fluid='sm' align='center'>
            <Spinner
                animation='grow'
                variant='info'
                size='sm'
                className='m-4'
            />
            <Spinner
                animation='grow'
                variant='info'
                size='sm'
                className='m-4'
            />
            <Spinner
                animation='grow'
                variant='info'
                size='sm'
                className='m-4'
            />
        </Container>
    )
}

export default LoadingPage
