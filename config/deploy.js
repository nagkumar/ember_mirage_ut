module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'mirage',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
