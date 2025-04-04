import Form from 'react-bootstrap/Form';

function SortForm({handleShort}) {


  const handleSort = (e) =>{
    handleShort(e.target.value)
    
  }


  return (
    <Form.Select onChange={handleSort} aria-label="Default select example" className='bg-primary text-white'>
      <option>Short By</option>
      <option value="rating">Rating</option>
      <option value="page">Number Of Page</option>
      <option value="year">Publisher Year</option>
    </Form.Select>
  );
}

export default SortForm;