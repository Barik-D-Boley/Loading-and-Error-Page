import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon/ditto',
      );
      const json = await res.json();
      setData(json.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.ObjectId}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}

export default App;