import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './header';
import List from './list';
import View from './view';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <section className='container'>
          <div className='inner'>
            <Routes>
                <Route path='/' element={<List/>}/>
                <Route path='/view/:id' element={<View/>}/>
            </Routes>
          </div>
        </section>
    </BrowserRouter>
  );
}

export default App;
