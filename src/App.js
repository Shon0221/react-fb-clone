import React from 'react';
import './App.css';
import { useStateVal } from './StateProvider';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  // eslint-disable-next-line 
  const [{ user }, dispatch] = useStateVal();
  
  return (
    // BEM name convention
    <div className="app">
      {!user ? 
        (
          <Login />
        ) 
        : 
        (
          <>
            <Header />

            <div className="app__body">

              <Sidebar />
              {/* Sidebar */}
              <Feed />
              {/* Feed */}
              {/* Widgets */}
            </div>
          </>
        )
      }


      
    </div>
  );
}

export default App;
