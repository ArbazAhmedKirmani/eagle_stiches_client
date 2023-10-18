import { Form } from "react-bootstrap";

export default function HoopSize() {
    return (
        <>
            <Form className="mt-5">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="mb-3">Hoop Size</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Any Hoop Size</option>
                        <option value="1">4x4 inches</option>
                        <option value="1">5x5 inches</option>
                        <option value="1">5x7 inches</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </>
    )
}