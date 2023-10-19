import { Form } from "react-bootstrap";

export default function Pagination() {
    return (
        <>
            <Form.Select aria-label="Default select example" className="pagination">
                <option value="1">Show 12 On Page</option>
                <option value="1">Show 24 On Page</option>
                <option value="1">Show 48 On Page</option>
            </Form.Select>
        </>
    )
}