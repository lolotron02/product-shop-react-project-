import { Route, Routes } from "react-router-dom";
import "./global.scss";

import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

import BlogProvider from "../context/BlogContext/BlogContext";
import ProductProvider from "../context/ProductContext/ProductContext";

function App() {
  return (
    <>
        <BlogProvider>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />\
                <Route path="Shop" element={<Shop />} />\
              </Route>
            </Routes>
          </ProductProvider>
        </BlogProvider>
    </>
  );
}

export default App;
