import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetail(props) {
  const params = useParams();
 

  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = `https://www.abibliadigital.com.br/api/books/${params.abbrev}`;

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [params.abbrev]);

 


  return (
    <>
      <h1 className="text-center my-3">BookDetail</h1>
      <p>{JSON.stringify(data)};</p>


    </>
  );
}

export default BookDetail;
