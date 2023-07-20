// App.js
import Header from './components/Header';
import './App.css';
import Sidebar from './components/sidebar';
import Link1 from './components/link1';
import Link2 from './components/link2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="link1" element={<Link1 />} />
          <Route path="link2" element={<Link2 />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}



export default App;
