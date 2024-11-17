import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Devon = lazy(() => import("./pages/devon/Devon"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Single = lazy(() => import("./pages/single/Single"));
const Group = lazy(() => import("./pages/group/Group"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="devon" element={<Devon />} />
          <Route path="contact" element={<Contact />} />
          <Route path="single/:id" element={<Single />} />
          <Route path="group/:id" element={<Group />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
