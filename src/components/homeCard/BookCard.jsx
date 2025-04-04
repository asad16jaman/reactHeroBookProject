import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ImStarEmpty } from "react-icons/im";
import "./bookCard.css"


function BookCard({book}) {
  return (
    <Card className='p-3'>
      
      <Card.Img variant="top" src={book.image} style={{height:"200px", objectFit:"cover"}} />
      <Card.Body  style={{padding:"30px 0px",borderBottom:"2px dotted gray"}}>
        <div>
          <span className='bg-secondary-subtle px-3 py-1 rounded-pill text-primary'>{book.tags[0]}</span>
          <span className='bg-secondary-subtle px-3 py-1 rounded-pill ms-3 text-primary'>{book.tags[1]}</span>
        </div>
        <h4 className='firfont fw-semibold mt-3'><Link to={`/${book.bookId}`} className='stretched-link card-title text-decoration-none'>{book.bookName.slice(0,20)}..</Link></h4>
        <Card.Text className='mt-3'>
          By : {book.publisher}
        </Card.Text>
      </Card.Body>
        
      <Card.Body className='d-flex justify-content-between'>
        <p>{book.category.slice(0,5)}</p>
        <p >
          <span style={{margin:"8px 12px 0px 0px"}}>{book.rating}</span>
          <ImStarEmpty />
          
        </p>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
