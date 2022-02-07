import { Card , CardBody,CardTitle,CardSubtitle,CardLink, CardText } from "reactstrap";
import ItemCount from './ItemCount'

export default function itemContainer({greeting}) 
{  
    return (
        <div>
  <Card>
    <CardBody>
      <CardTitle tag="h5">
        {greeting} !!
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
    </CardBody>
    <img
      className="mx-auto d-block"
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      width="75%"
      
    />
    <CardBody>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <CardLink href="#">
        <ItemCount stock={5} initial={1}></ItemCount>
      </CardLink>
      <CardLink href="#">
        Another Link
      </CardLink>
    </CardBody>
  </Card>
</div>
    );
}