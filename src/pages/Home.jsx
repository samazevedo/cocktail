import Searchbar from '../components/Searchbar'
import Cocktails from '../components/Cocktails'
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <Container fluid='sm' align='center'>
            <Searchbar />
            <Cocktails />
        </Container>
    )
}

export default Home
