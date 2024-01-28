import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './header';
import List from './list';
import View from './view';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <section className='container'>
          <div className='inner'>
            <Routes>
                <Route basename={process.env.PUBLIC_URL} path='/' element={<List/>}/>
                <Route basename={process.env.PUBLIC_URL} path='/view/:id' element={<View/>}/>
            </Routes>
          </div>
        </section>
    </BrowserRouter>
  );
}

export default App;
