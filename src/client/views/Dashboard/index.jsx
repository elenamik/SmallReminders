import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import PrinciplesList from '../../components/PrinciplesList';

function Dashboard () {
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
      This is the Dashboard - you will only see it if you are logged in.
      <PrinciplesList data={data} />
    </div>
  );
}

export default Dashboard;
