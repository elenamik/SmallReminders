import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import ViewTemplate from '../../components/ViewTemplate';
import PrinciplesList from '../../components/PrinciplesList';

function Dashboard ({ user }) {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const readPrinciples = async () => {
      const uid = await user.uid;
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
    if (user && loading) {
      readPrinciples();
    }
  });

  const handleUpdate = async () => {
    try {
      const uid = user.uid;
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

  return (
    <ViewTemplate title='Dashboard'>
      {loading
        ? <div id='loading-content'> loading ... </div>
        : <div id='dashboard-content'><PrinciplesList data={data} handleUpdate={handleUpdate} /></div>}
    </ViewTemplate>
  );
}

export default Dashboard;
