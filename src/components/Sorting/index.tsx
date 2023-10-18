import { Form } from "react-bootstrap";

export default function Sorting() {
    return (
        <>
            <Form.Select aria-label="Default select example" className="pagination">
                <option>Default Sorting</option>
                <option value="1">Sort by popularity</option>
                <option value="1">Sort by average rating</option>
                <option value="1">Sort by latest</option>
            </Form.Select>
        </>
    )
}