import React from "react";
import {
  Accordion,
  Card,
  ListGroup,
  Nav,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
import styles from "../styles/Styles.module.css";
function Search() {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const fetchChar = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      setCharacters(response.data.results);
      setLoading(false);
    };
    fetchChar();
  }, [searchTerm]);
  console.log(characters);
  const stars =
    characters &&
    characters.map((star, index) => {
      return (
        <Card key={index}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey={`${index}`}
            className={styles.toggle}
          >
            {star.name}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`${index}`}>
            <Card.Body>
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>Height : {star.height}</ListGroup.Item>
                  <ListGroup.Item>Mass : {star.mass}</ListGroup.Item>
                  <ListGroup.Item>
                    HairColor :{" "}
                    {star.hair_color === "n/a" ? "black" : star.hair_color}
                  </ListGroup.Item>
                  <ListGroup.Item>SkinColor : {star.skin_color}</ListGroup.Item>
                  <ListGroup.Item>EyeColor : {star.eye_color}</ListGroup.Item>
                  <ListGroup.Item>
                    BirthYear : {star.birth_color ? 1978 : 1986}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Gender : {`${star.gender === "n/a" ? "male" : star.gender}`}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    });

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">STAR-WAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Name"
              className="mr-sm-2"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {searchTerm === "" ? (
        <span></span>
      ) : (
        <div>
          <Accordion className={styles.accordiondiv}>{stars}</Accordion>
        </div>
      )}
    </>
  );
}

export default Search;
