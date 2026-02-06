import { Nav } from "../../Nav/Nav";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function BookPage() {

  const { isbn } = useParams<{ isbn: string }>();

  const [bookData, setBookData] = useState<any>(null);

  function fetchBookData() {
    fetch(`https://bibby-app-production.up.railway.app/api/v1/books/search/${isbn}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBookData(data);
      });
  }

  useEffect(() => { fetchBookData(); }, []);


  return (
    <div>
      <Nav />
      <div className=" align-center w-25 flex-col p-20 m-175px mt-50px gap-15px">
        <h1>{bookData?.title}</h1>
        <p>Authors: {bookData?.authors}</p>
        <p>ISBN: {bookData?.isbn}</p>
        <p>Publisher: {bookData?.publisher}</p>
        <p>Year: {bookData?.publicationYear}</p>
        <p>Description: {bookData?.description}</p>
      </div>

    </div>
  );
}

export { BookPage };