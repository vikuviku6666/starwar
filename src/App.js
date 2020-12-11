import React from "react";
import Gallery from "./components/Gallery";
import axios from "axios";
import Search from './components/Search';
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
      <Search/> 
<Gallery characters={characters}  loading={loading} paginate = {paginate} changePage={currentPage}/>;
</>
  ); 
}

export default App;
