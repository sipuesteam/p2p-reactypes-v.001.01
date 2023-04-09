import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

const FbkGraphApi = () => {
  const [userData, setUserData] = useState(null);

  const responseFacebook = (response) => {
    console.log(response);
    setUserData(response);
  };

  useEffect(() => {
    // Make API call to fetch data
    if (userData !== null) {
      fetch(`https://graph.facebook.com/${userData.id}?fields=id,name,email,picture&access_token=${userData.accessToken}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // Process the data
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [userData]);

  return (
    <div>
      {userData === null ?
        <FacebookLogin
          appId="YOUR_APP_ID"
          fields="name,email,picture"
          callback={responseFacebook}
        /> :
        <div>
          <p>{userData.name}</p>
          <p>{userData.email}</p>
          <img src={userData.picture.data.url} alt={userData.name} />
        </div>
      }
    </div>
  );
};

export default FbkGraphApi;
