import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import PrinciplesList from '../../components/PrinciplesList';
import '../../styles/views.scss';

function Dashboard (props) {
  const [data, setData] = useState(false);
  useEffect(() => {
    axios.post(getServerURL() + '/principles/read', {
      uid: props.user.uid
    })
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
        setData(false);
      });
  }, []);

  return (
    <div className='view'>
      <div className='view-header-container'>
        <div className='view-header'>
          <h1 className='view-header-text'>Dashboard</h1>
        </div>
      </div>
      <div className='view-content-container'>
        <div className='view-content' id='welcome-text'>
          <PrinciplesList data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
