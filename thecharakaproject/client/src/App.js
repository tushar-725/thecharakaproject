import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Home from './components/home/Home';
import Header from './components/header/Header';
import Blog from './components/blog/Blog';
import Vivaad from './components/programs/vivaad/Vivaad';
import Samvaad from './components/programs/samvaad/Samvaad';
import Compendium from './components/programs/compendium/Compendium';
import Research from './components/programs/compendium-sub/Research';
import Narration from './components/programs/compendium-sub/Narration';
import Team from './components/team/team';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Routes>  
          <Route path='/' element={ <Home /> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/vivaad' element={ <Vivaad /> } />
          <Route path='/samvaad' element={ <Samvaad />} />
          <Route path='/compendium' element={ <Compendium />} />
          <Route path='/research-101' element={ <Research /> } />
          <Route path='/monthly-narration' element={ <Narration /> } />
          <Route path='/our-team' element={ <Team /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
