import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = (props) => {
  const [progress, setProgress] = useState(0);
  // const [articles, setArticles] = useState([])
  // const [searchTerm, setSearchTerm] = useState("")
  // const [searchResults, setSearchResults] = useState([])

  // const searchHandler = (searchTerm) => {
  //   // console.log(searchTerm);
  //   setSearchTerm(searchTerm);
  //   if (searchTerm !== "") {
  //     const oneNews = articles.filter((element) => {
  //       return Object.values(element).join("").toLowerCase().includes(searchTerm.toLowerCase());
  //     })
  //     setSearchTerm(oneNews);
  //   }
  //   else {
  //     searchResults(articles)
  //   }

  // }
  return (

    <Router>
      <div >

        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar /> {/*term={searchTerm} searchKey={searchHandler} */}

        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" country="in" category="general" />}> </Route>
          <Route path="/business" element={<News setProgress={setProgress} key="business" country="in" category="business" />}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" category="entertainment" />}> </Route>
          <Route path="/general" element={<News setProgress={setProgress} key="general" country="in" category="general" />}></Route>
          <Route path="/health" element={<News setProgress={setProgress} key="health" country="in" category="health" />}> </Route>
          <Route path="/science" element={<News setProgress={setProgress} key="science" country="in" category="science" />}> </Route>
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" country="in" category="sports" />} ></Route>
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" country="in" category="technology" />}> </Route>

        </Routes>
      </div>
    </Router>






  )

}
export default App;