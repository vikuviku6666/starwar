import React from "react";
import styles from "../styles/Styles.module.css";
import { Accordion, Card, ListGroup, Pagination, Spinner } from "react-bootstrap";

const Gallery = ({ characters, loading, paginate, changePage }) => {
  const handleClick = (page) => {
    paginate(page);
  }
  const stars = (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0" className={styles.toggle}>
        {characters[0] && characters[0].name}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Height : {characters[0] && characters[0].height}
              </ListGroup.Item>
              <ListGroup.Item>
                Mass : {characters[0] && characters[0].mass}
              </ListGroup.Item>
              <ListGroup.Item>
                HairColor :
                {characters[0] && characters[0].hair_color === "n/a"
                  ? "black"
                  : characters[0] && characters[0].hair_color}
              </ListGroup.Item>
              <ListGroup.Item>
                SkinColor : {characters[0] && characters[0].skin_color}
              </ListGroup.Item>
              <ListGroup.Item>
                EyeColor : {characters[0] && characters[0].eye_color}
              </ListGroup.Item>
              <ListGroup.Item>
                BirthYear :{" "}
                {characters[0] && characters[0].birth_color ? 1978 : 1986}
              </ListGroup.Item>
              <ListGroup.Item>
                Gender :
                {characters[0] && characters[0].gender === "n/a"
                  ? "male"
                  : characters[0] && characters[0].gender}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );

  if (loading) {
    return (
      <Spinner animation="border" role="status" className={styles.loading}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div className={styles.accordiondiv}>
      <Accordion defaultActiveKey="0">{stars}</Accordion>

      <Pagination>
        <Pagination.Prev  onClick={() => handleClick(changePage - 1 )} />

        <Pagination.Next  onClick={() => handleClick(changePage + 1)} />
      </Pagination>
    </div>
  );
};

export default Gallery;
