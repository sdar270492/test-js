// string.js
function formatEmail(email) {
    return email.toLowerCase();
  }

  function getNameUndefined(name) {
    if (name) {
      return name;
    } else {
      return undefined;
    }
  }  

  function getNameNull(name) {
    if (name) {
      return name;
    } else {
      return null;
    }
  }

  function getName(name) {
    return name;
  }
  
  function getNames() {
    return ['John', 'Jane', 'Jim'];
  }

  module.exports = {
    formatEmail,
    getNameUndefined,
    getNameNull,
    getName,
    getNames
  };
  