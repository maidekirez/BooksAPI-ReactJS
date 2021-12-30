import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home(props) {

  const [name, setName] = useState('');
  const searchHandler = (event) => {
    setName(event.target.value);
  };

    return(
    <>
      <h1>Home</h1>
      <form>
        <input
          type="text"
          placeholder="Ara"
          className="form-control"
          onChange={searchHandler}
        />
        <Link to={`arama/?q=${name}`} className="btn btn-primary my-2">
          Search
        </Link>
      </form>
      
    </>
    );
  }
  
  export default Home;