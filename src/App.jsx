/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const AppBar = lazy(() => import("components/AppBar"));
const CategoryPage = lazy(() => import("pages/CategoryPage"));
const ProductPage = lazy(() => import("pages/ProductPage"));
const Cart = lazy(() => import("pages/Cart"));
const NoLoadPage = lazy(() => import("pages/NoLoadPage"));
const HomePage = lazy(() => import("pages/HomePage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index element={<HomePage />} />
              <Route path="category/:categoryId" element={<CategoryPage />}>
                <Route path="*" element={<NoLoadPage />} />
              </Route>
              <Route path="product/:productId" element={<ProductPage />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoLoadPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
