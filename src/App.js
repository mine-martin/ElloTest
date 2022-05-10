import { React } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Books = gql`
  query {
    book {
      author
      title
      pages {
        tokens {
          position
          value
        }
        content
        pageIndex
      }
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(Books);
  const history = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  // console.log(data);

  const handleClick = (value) => {
    history(`/token/${value}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Book 1</h1>
        <h4>Author: {data.book.author}</h4>
        <h4>Title: {data.book.title}</h4>
        {data.book.pages.map((page) => {
          return (
            <div key={page.pageIndex}>
              <h4>Page: {page.pageIndex}</h4>

              <p> Content: {page.content}</p>

              <p>
                {
                  //return tokn value from page.tokens with spaces between each token with a link to the token
                  page.tokens.map((token) => {
                    return (
                      <a
                        className="Links"
                        href={`/token/${token.value}`}
                        onClick={() => handleClick(token.value)}
                      >
                        {token.value}{" "}
                      </a>
                    );
                  })
                }
              </p>
            </div>
          );
        })}
      </div>
      <div className="card2 card">
        <h1>Book 2</h1>

        <p>Author:</p>
        <p>Title:</p>
        <p>Page:</p>
        <p>Page Content:</p>
        <p>Token Value:</p>
      </div>
    </div>
  );
};

export default App;
