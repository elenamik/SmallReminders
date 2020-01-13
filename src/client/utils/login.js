import axios from 'axios';
import { getServerURL } from '../config/urls';

export const autoLogin = (username, setUser) => {
  axios.post(getServerURL() + '/user/login', {
    email: username + '@me.com',
    password: username
  }).then(res => {
    console.log('got user', res.data.user);
    setUser(res.data.user);
  }).catch(err => {
    console.log(err);
  });
};
