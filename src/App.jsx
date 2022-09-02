import Home from "./Pages/Home"
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route
          exact
          path="/login"
          element={
            user ? (
              <Home />
            ) : (
              <Login />
            )
          }
        />
        <Route
          exact
          path="/register"
          element={
            user ? (
              <Home />
            ) : (
              <Register />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;