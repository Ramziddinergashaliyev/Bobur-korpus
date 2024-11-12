import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Devon = lazy(() => import("./pages/devon/Devon"));
import Layout from "./components/layout/Layout";
import Single from "./pages/single/Single";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route for "/" */}
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="devon" element={<Devon />} />
          <Route path="contact" element={<Contact />} />
          <Route path="single/:id" element={<Single />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
