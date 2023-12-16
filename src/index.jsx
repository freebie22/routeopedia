import ReactDOM from "react-dom/client";
import Header from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import CreateProduct from "./Pages/CreateProduct";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./NotFound";
import CryptoDetail from "./CryptoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/cryptoDetail/:cryptoSymbol/:id" element={<CryptoDetail></CryptoDetail>}></Route>
        <Route path="/cryptoDetail/:cryptoSymbol" element={<CryptoDetail></CryptoDetail>}></Route>
        <Route path="/product">
          <Route index element={<Product></Product>}></Route>
           {/*index == ""*/} 
          <Route
            path="list"
            element={<ProductList></ProductList>}
          ></Route>
          <Route
            path="create"
            element={<CreateProduct></CreateProduct>}
          ></Route>
          <Route
            path="details"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route
            path="details/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>
);
