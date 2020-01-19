import React, { useState, useEffect } from 'react';
import PrinciplesList from '../../components/PrinciplesList';
import Description from './Description';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import './Welcome.scss';

function Welcome () {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get(getServerURL() + '/principles/read')
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
        setData(false);
      });
  }, []);

  return (
    <div className='container'>
      <Description />
      <PrinciplesList data={data} />
    </div>
  );
}

export default Welcome;
