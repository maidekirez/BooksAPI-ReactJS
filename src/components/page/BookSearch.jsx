import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function BookSearch(props) {
  let location = useLocation();

  console.log(location);

  const searchName = location.search.split("?q=")[1];
  console.log(searchName);

  const URL = "https://www.abibliadigital.com.br/api/books";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      <h1>BookSearch</h1>

      {data
        .filter((item) => `${searchName}`.includes(item.name))
        .map((item, index) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
              <p className="card-text">Group of the book : {item.group}</p>
              <p className="card-text">Chapters : {item.chapters}</p>
              <p className="card-text">Testament : {item.testament}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default BookSearch;
