import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SearchPage from './pages/SearchPage/SearchPage'
import SinglePostPage from './pages/SinglePostPage/SinglePostPage'
import MakeNewPost from "./pages/MakeNewPost/MakeNewPost"
import Header from './components/Header/Header'
import NewComment from './pages/NewComment/NewComment';

function App() {
  return (

   <div className='body'>
    <BrowserRouter>
   
    <div className='body-div'>
    <Header/>
      <Routes>
      
          <Route  path='/' element={<MainPage />}/>
          <Route path='/loginPage' element={<LoginPage/>}/>
          <Route path='/registerPage' element={<RegisterPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/newComment' element={<NewComment/>}/>
          <Route path='/singlePostPage' element={<SinglePostPage />}/>
          
          <Route path='/makeNewPost' element={<MakeNewPost/>}/>
      </Routes>
     </div>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
