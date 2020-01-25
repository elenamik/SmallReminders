import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import PrinciplesList from '../../components/PrinciplesList';
import '../../styles/views.scss';

function Dashboard (props) {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const readPrinciples = async () => {
      const uid = await props.user.uid;
      try {
        const res = await axios.post(getServerURL() + '/principles/read', {
          uid
        });
        console.log(res.data);
        setData(res.data.result);
        setLoading(false);
      } catch (err) {
        console.log('error loading principles in dashboard', err);
        setData(false);
        setLoading(false);
      }
    };
    if (props.user && loading) {
      readPrinciples();
    }
  });

  return (
    <div className='view'>
      <div className='view-header-container'>
        <div className='view-header'>
          <h1 className='view-header-text'>Dashboard</h1>
        </div>
      </div>
      <div className='view-content-container'>
        <div className='view-content'>
          {loading
            ? <div id='loading-content'> loading ... </div>
            : <div id='dashboard-content'><PrinciplesList data={data} /></div>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
