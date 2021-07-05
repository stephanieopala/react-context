import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./context/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>          
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
     
    </div>
  );
}

export default App;
