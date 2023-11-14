// App.js
import React from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Auctions from './Auctions';
import { Discover } from './Discover'; // Note the use of curly braces for named import
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Auctions />
      <Discover />
      {/* Your other components/content */}
      <Footer />
    </div>
  );
}

export default App;
