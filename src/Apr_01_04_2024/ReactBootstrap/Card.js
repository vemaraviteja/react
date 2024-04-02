import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomSpinner from '../Spinner/spinner';

function Customcard({name,designation,Image,visible}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        {
            visible?<CustomSpinner></CustomSpinner>:null
        }
        <Card.Title>{name}</Card.Title>
        <Card.Text>{designation}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Customcard;