import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import ViewTemplate from '../../components/ViewTemplate';
import PrinciplesList from '../../components/PrinciplesList';

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
    <ViewTemplate title='Dashboard'>
      {loading
        ? <div id='loading-content'> loading ... </div>
        : <div id='dashboard-content'><PrinciplesList data={data} /></div>}
    </ViewTemplate>
  );
}

export default Dashboard;
