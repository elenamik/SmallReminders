const getServerURL = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080';
  } else {
    return 'https://small-reminders-prod.herokuapp.com';
  }
};

module.exports = { getServerURL };
