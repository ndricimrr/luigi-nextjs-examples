import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const LuigiClient = require('@luigi-project/client');

    LuigiClient.addInitListener(function(context) {
      console.log('Luigi Client initialised in Home');
    });
  }, []);

  return (
    <>
      <section>
        <div>
          <h1>Welcome to Luigi Hosted with Next.js</h1>
        </div>
      </section>
    </>
  );
}
