import React, { useEffect, useState } from 'react';
import PrinciplesList from './components/PrinciplesList';
import Description from './components/Description';
import Header from './components/Header';
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
      <Header />
      <Description />
      <PrinciplesList data={data} />

      <style jsx global>{`
        body{
          padding:10px 12% 10px 12%;
        }
      `}
      </style>
    </div>
  );
}

export default App;
