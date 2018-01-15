import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBOXqy0xZfIHZcQR9liH_p5AUnrOVaanDo';

/* 
 * create a new component, which produces some html
 */
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take the html and put it onto the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));
