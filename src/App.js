import React from "react";
import Gallery from "./components/Gallery";
import axios from "axios";
import {  Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";
function App() {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [ currentPage, setCurrentPage] = React.useState(1);

  const paginate = (page) => {
    if(page > 0 && page < 10 )
    setCurrentPage(page);
} 

  React.useEffect(() => {
    const fetchChar = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      setCharacters(response.data.results);
      setLoading(false);
    };
    fetchChar();
  }, [currentPage]);

  return(
    <>
      <Navbar  bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">STAR-WAR</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
     </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-secondary">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Gallery characters={characters}  loading={loading} paginate = {paginate} changePage={currentPage}/>;
</>
  ); 
}

export default App;
