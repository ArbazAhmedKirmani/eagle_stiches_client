import Form from 'react-bootstrap/Form';

function SidebarSearch() {
  return (
    <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='mb-3'>SEARCH</Form.Label>
        <Form.Control type="email" placeholder="Search Products..." />
      </Form.Group>
    </Form>
  );
}

export default SidebarSearch;