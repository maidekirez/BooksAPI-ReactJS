import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Books(props) {
  // https://www.abibliadigital.com.br/api/books ->API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const URL = "https://www.abibliadigital.com.br/api/books";
      fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        });
    }, 1000);
  }, []);

  const loadingReturnInfo = <h1>Yukleniyor ...</h1>;

  if (loading) {
    return loadingReturnInfo;
  }

  return (
    <>
      {
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <Link to={`/books/${item.abbrev.en}`}>{item.name}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}

export default Books;
