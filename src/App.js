import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostListPage />}></Route>
          <Route path=":id" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
