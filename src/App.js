import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'swiper/css';

import styles from './App.module.scss';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Project from './pages/Project/Project';
import Post from './pages/Post/Post';
import Blog from './pages/Blog/Blog';
import Loader from './components/Loader/Loader';
import CursorFollower from './components/CursorFollower/CursorFollower';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <div className={styles.noise}></div>
          <div className={styles.app}>
            <Loader />

            <ScrollToTop />
            {/* <Header /> */}
            <Routes>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/projects/:id" element={<Project />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/blog/:id" element={<Post />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
            </Routes>
            <CursorFollower />
            {/* <div
              className={styles.cursorFollower}
              ref={(el) => (cursor = el)}
            ></div> */}
          </div>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
