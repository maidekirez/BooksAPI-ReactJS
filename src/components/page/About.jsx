function About(props) {
  return (
    <>
      <div className="container">
        <h1 className="text-center my-3">About</h1>
        <p>
          An API containing information about books is used in this project.
        </p>
        <p>The information contained in the API is:</p>
        <ul className="mx-3">
          <li>Abbreviation of the title of the book</li>
          <li>Book name</li>
          <li>The author of the book</li>
          <li>The group of the book</li>
          <li>The version of the book</li>
          <li>Chapter of the book</li>
        </ul>

        <p>
          The purpose of the project is to have a component that allows
          searching for books on the homepage, list all books in api in books
          page, list the search results on the book search page and to show all
          the features of the desired book on the book detail page.
        </p>
      </div>
    </>
  );
}

export default About;
