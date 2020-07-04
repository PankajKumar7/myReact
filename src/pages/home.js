import React from 'react';
import {useHistory} from 'react-router-dom';

function Home() {

    const history = useHistory();
    const navigateTo = () => history.push('/AboutUs');



  return (<div>
    <h1>home page</h1>
    <button   onClick={navigateTo}>
       about
    </button>
    </div>

  );
}

export default Home;