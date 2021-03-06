import Form from 'react-bootstrap/Form'
import { useGlobalContext } from '../context'

const Searchbar = () => {
    const { setSearchItem } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Form className='m-5 p-5' onSubmit={handleSubmit}>
            <Form.Control
                type='text'
                placeholder='Search'
                className='mr-sm-2'
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </Form>
    )
}

export default Searchbar
