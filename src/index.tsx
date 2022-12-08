import React from 'react';
import ReactDOM from 'react-dom/client';
import rootReducer from './store';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import 'antd/dist/antd.min.css'
import SiteHeader from './components/main/SiteHeader';
import NavBar from './components/main/NavBar';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReadArticle from './components/article/ReadArticle';
import ArticlesOfCategory from './components/category/ArticlesOfCategory';
import ErrorPage from './components/main/ErrorPage';
import Contact from './components/contact/Contact';


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>

      <SiteHeader />      
      <div className="main">
            <div className="container">
                <div className="mainContent">
                    <NavBar />
                      <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/kategori/:category' element={<ArticlesOfCategory />} />
                        <Route path='/kategori/:category/:subCategory' element={<ArticlesOfCategory />} />
                        <Route path='/makale/:category/:article' element={<ReadArticle />} />
                        <Route path='/mesaj' element={<Contact />} />
                        <Route path='*' element={<ErrorPage />} />
                      </Routes>
                </div>
            </div>
      </div>

      </BrowserRouter>
    </Provider>
  </React.Fragment>
);

