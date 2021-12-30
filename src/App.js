import Footer from "./components/base/Footer";
import Nav from "./components/base/Nav";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="row">
          <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
