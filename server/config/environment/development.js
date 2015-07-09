'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://localhost/testconf-dev'
    uri: 'mongodb://mongo:27017/testconf-dev'
  },

  seedDB: true
};
