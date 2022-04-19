import { useEffect, useState } from 'react';


export default function Sample1() {
  const [test, setTest] = useState(0);
  useEffect(() => {
    setTest(window.location.href);
    const LuigiClient = require('@luigi-project/client');
    LuigiClient.addInitListener(function(context) {
      console.log('Luigi Client initialised in Next JS microfrontend');
    });
  }, []);

  return (
    <>
      <h1 >Next Microfrotend App is running</h1>
      <br/>
      {/* <div>Current Microfronted URL:</div> */}
      <br/>
      <p  style={{color: 'red'}}>Current Microfrontend URL: <b>{test}</b></p>
    </>
  );
}
