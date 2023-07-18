
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    //BEM class naming convention (search)
    <div className="app">
      {/*<h1>Let's Start 🚀</h1>*/}

      <Header />


      <div className='app_page'>
        <Sidebar />
        <RecommendedVideos />
      </div>

      {/*Header*/}
      {/*Sidebar*/}
      {/*Recommended video*/}
    </div>
  );
}

export default App;
