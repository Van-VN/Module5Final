import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import AllTour from "./components/AllTour/AllTour";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail/PostDetail";
import EditTour from "./components/EditTour";
import AddTour from "./components/AddTour/AddTour";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<AllTour />} />
        <Route path="/add" element={<AddTour />} />
        <Route path="/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<EditTour />} />
      </Routes>
    </>
  );
}

export default App;
