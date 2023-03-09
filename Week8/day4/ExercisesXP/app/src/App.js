import React, { useState } from 'react';

function App() {
  const [responseData, setResponseData] = useState(null);

  const postData = async () => {
    const url = 'https://webhook.site/fb1375ef-fff2-4a1a-b1eb-5404712cfb1a';
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });
    const json = await response.json();
    setResponseData(json);
  };

  const handleButtonClick = () => {
    postData();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Data</button>
      {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
    </div>
  );
}

export default App;
