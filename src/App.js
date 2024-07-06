import "./App.css";
import Apropos from "./a propos/apropos";
import Home from "./acceuil/page-home";
import Navbar from "./acceuil/navbar";
import Footer from "./acceuil/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./article/details";
import FormulairePage from "./ajouter/page-Formulaire";
import Table from "./ajouter/page-dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchArticle } from "./redux/articleSlice";
import Login from "./login/login";
import PrivateRoute from "./privateRoute/privateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticle());
  }, []);
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
      </div>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/ajouter"
          element={
            <PrivateRoute>
              <FormulairePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/afficher"
          element={
            <PrivateRoute>
              <Table />
            </PrivateRoute>
          }
        />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/article/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
