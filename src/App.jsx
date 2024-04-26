import React from "react";
import PageHomeWrapper from "./pages/PageHome";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import NotFound404Page from "./pages/NotFound404Page";
import PageDetailNotesWrapper from "./pages/PageDetailNotes";
import PageArchiveWrapper from "./pages/PageArchive";
import PageAddNote from "./pages/PageAddNote";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<NotFound404Page />}></Route>
          <Route path="/" element={<PageHomeWrapper />} />
          <Route path="/notes/:id" element={<PageDetailNotesWrapper />} />
          <Route path="/archives" element={<PageArchiveWrapper />} />
          <Route path="/notes/new" element={<PageAddNote />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
