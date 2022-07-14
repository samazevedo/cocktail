import Form from 'react-bootstrap/Form'
const Searchbar = () => {
    return (
        <Form className='m-4 p-2'>
            <Form.Control
                type='text'
                placeholder='Search'
                className='mr-sm-2'
            />
        </Form>
    )
}

export default Searchbar
