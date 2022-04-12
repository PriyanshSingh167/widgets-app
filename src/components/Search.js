import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  // We cannot mark the arrow function that we're passing to useEffect as async or any other
  // function.
  // i.e
  // useEffect(
  //   (async) => {
  //     await axios("Url");
  //   },
  //   [term]
  // );    is wrong. To solve this we can use three ways
  // Method 1

  // useEffect(() => {
  //   const search = async () => {
  //     await axios.get(url);
  //   };
  // }, [term]);

  // Method 2

  // useEffect(() => {
  //   (async () => {
  //     await axios.get(url);
  //   })();
  // }, [term]);

  // Method 3: Using promises

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     console.log(response);
  //   });
  // }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result, index) => {
    return (
      <div className="item" key={index}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  function handleChange(event) {
    const newTerm = event.target.value;
    setTerm(newTerm);
  }
  return (
    <div>
      <div className="ui form">
        <div className="label">
          <label>Enter Search Term</label>
          <input className="input" value={term} onChange={handleChange} />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
