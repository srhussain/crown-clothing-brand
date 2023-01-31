import "./categories.styles.scss";
import Home from "./routes/home/home";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/signin";




const Shop = () => {
  return <div>I am A Shop Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
