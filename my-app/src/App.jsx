import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import ContactUs from "./ContactUs";
import TeamSection from "./TeamSection";
import NotFound from "./NotFound";
import Card from "./Card";

const products = [
  {
    name: "Producto A",
    properties: "Descripción A",
    b64Image: "https://via.placeholder.com/150",
    model: "A1"
  },
  {
    name: "Producto B",
    properties: "Descripción B",
    b64Image: "https://via.placeholder.com/150",
    model: "B1"
  },
  {
    name: "Producto C",
    properties: "Descripción C",
    b64Image: "https://via.placeholder.com/150",
    model: "C1"
  }
];

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-orange-500 p-8 grid grid-cols-3 gap-4">
              {products.map((e) => (
                <div key={e.model + "div"}>
                  <Card
                    title={e.name}
                    paragraph={e.properties}
                    image={e.b64Image}
                    model={e.model}
                  />
                </div>
              ))}
            </div>
          }
        />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Team" element={<TeamSection />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
