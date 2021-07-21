var UserProfile = (function() {
    let email = "";
    let list = [];
  
    let getEmail = function() { return email; };
    let setEmail = function(m) { email = m; };

    let getList = function() { return list; };
    let setList = function(l) { list = l; };
  
    return {
        getEmail: getEmail,
        setEmail: setEmail,
        getList: getList,
        setList: setList
    }
  
  })();
  
  export default UserProfile;