import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Productpage from "./ProductPage";
import { useEffect, useState } from "react";
import OrderPAge from "./OrderPage";
import Catagoryhomepage from "./Catagoryhomepage";
import Orderlistpage from "./OrderList";
import NewsPage from "./Newspage";
import Baseurl from "./BaseUrl";
import Delivery from "./Delivary";
import Signup from "./Signup";

function App() {
  const [baseUrl] = useState("http://127.0.0.1:8000");

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Baseurl.Provider value={baseUrl}>
      <div className="FullPage">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/products/:SearchParameter"
            element={<HomePage />}
          />
          <Route exact path="/" element={<Catagoryhomepage />} />
          <Route exact path="/:productId" element={<Productpage />} />

          <Route
            exact
            path="/products/:SearchParameter/:productId"
            element={<Productpage />}
          />
          <Route exact path="/:productId" element={<Productpage />} />
          <Route exact path="/Order" element={<OrderPAge />} />
          <Route exact path="/news" element={<NewsPage />} />
          <Route exact path="/orders" element={<Orderlistpage />} />

          <Route exact path="/delivery" element={<Delivery />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Baseurl.Provider>
  );
}

export default App;
