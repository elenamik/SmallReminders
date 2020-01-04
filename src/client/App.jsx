import React, { useEffect, useState } from 'react';
import PrinciplesList from './components/PrinciplesList';
import axios from 'axios';

const url = 'http://localhost:8080/principles/read';

function App () {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
        setData(false);
      });
  }, []);

  return (
    <div id='app'>
      <PrinciplesList data={data} />
    </div>
  );
}

export default App;
