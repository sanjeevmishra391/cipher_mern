import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AddExpense({addExpense}) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior which would refresh the page

    if (!title.trim() || !amount) {
      return alert("Please fill in both fields.");
    }

    const newExpense = {
      title: title,
      amount: parseFloat(amount),
      date: date
    }

    addExpense(newExpense);
    setTitle('');
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formTitleText">
          <Form.Label column sm="2">
            Title
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => {
              setTitle(e.target.value);
            }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAmountNumber">
          <Form.Label column sm="2">
            Amount
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Amount" value={amount} onChange={(e) => {
              setAmount(e.target.value);
            }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAmountNumber">
          <Form.Label column sm="2">
            Date
          </Form.Label>
          <Col sm="10">
            <Form.Control type="date" value={date} onChange={(e) => {
              setDate(e.target.value);
            }} />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary" className="add-expense-btn">
          Add Expense
        </Button>
      </Form>
    </>
  )
}

export default AddExpense;