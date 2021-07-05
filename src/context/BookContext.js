import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: "name of the wind", id: 1 },
        { title: "the way of the kings", id: 2},
        { title: "king auther", id: 3 },
        { title: "hero of ages", id: 4 },
    ]);
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
