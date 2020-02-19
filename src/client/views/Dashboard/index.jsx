import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import ViewTemplate from '../ViewTemplate';
import PrinciplesList from '../../components/PrinciplesList';
import { ADD_PRINCIPLE, DELETE_PRINCIPLE_BY_ID, UPDATE_PRINCIPLE_BY_ID } from '../../redux/constants';

function Dashboard ({ user }) {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    if (user && loading) {
      readPrinciples();
    }
  });

  const handleRequest = async (payload, action) => {
    try {
      const uid = user.uid;
      console.log(`/principles/${action}`);
      const res = await axios.post(getServerURL() + `/principles/${action}`, {
        content: payload.content,
        id: payload.id,
        uid
      });
      console.log(res.data);
      readPrinciples();
    } catch (err) {
      console.log('error loading principles in dashboard', err);
    }
  };

  const update = (action, payload) => {
    // types of actions -- delete, add, update
    switch (action) {
      case ADD_PRINCIPLE:
        handleRequest(payload, 'add');
        break;
      case DELETE_PRINCIPLE_BY_ID:
        handleRequest(payload, 'delete');
        break;
      case UPDATE_PRINCIPLE_BY_ID:
        handleRequest(payload, 'update');
        break;
    }
  };

  return (
    <ViewTemplate title='Dashboard'>
      {loading
        ? <div id='loading-content'> loading ... </div>
        : <div id='dashboard-content'><PrinciplesList data={data} update={update} /></div>}
    </ViewTemplate>
  );
}

export default Dashboard;
