import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Orders from "./Orders";

import { Routes, Route, Switch } from "react-router-dom";
import "./styles.css";

const NoRouteFound = () => "404-No Route Found";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Switch> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={<Orders type="parent" />}>
          <Route path=":orderId" element={<Orders type="id" />} />
          <Route path="list" element={<Orders type="list" />} />
        </Route>
        <Route path="*" element={<NoRouteFound />} />
      </Routes>
      {/* </Switch> */}
    </div>
  );
}
