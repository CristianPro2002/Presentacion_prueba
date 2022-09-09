import React, {useState} from "react";

export const usePageConsultas = (data) => {

    const itemsPage = 1;
    
    const [items, setItems] = useState([...data].splice(0,itemsPage));
    const [currentPage, setCurrentPage] = useState(0);

    const nextHandler = () => {
        const totalElementos = data.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemsPage;

        if(firstIndex === totalElementos){
           return;
        }
        setItems([...data].splice(firstIndex, itemsPage));
        setCurrentPage(nextPage);
    }

    const prevHandler = () => {
       const prevPage = currentPage - 1;

       if(prevPage < 0){
          return;
       }

       const firstIndex = prevPage * itemsPage;

       setItems([...data].splice(firstIndex, itemsPage));
    setCurrentPage(prevPage);

    }

    const consultasActions = {
        nextHandler,
        prevHandler,

    }

    return {
        consultasActions,
        currentPage,
        items,
    }
}

export const usePageConsultas2 = (data) => {
    const itemsPage = 1;

    const [items, setItems] = useState([...data].splice(0, itemsPage));
    const [currentPage, setCurrentPage] = useState(0);

    const nextHandler = () => {
        const totalElementos = data.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemsPage;

        if (firstIndex === totalElementos) {
            return;
        }
        setItems([...data].splice(firstIndex, itemsPage));
        setCurrentPage(nextPage);
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) {
            return;
        }

        const firstIndex = prevPage * itemsPage;

        setItems([...data].splice(firstIndex, itemsPage));
        setCurrentPage(prevPage);

    }

    const consultasActions2 = {
        nextHandler,
        prevHandler,

    }

    return {
        consultasActions2,
        currentPage,
        items,
    }
}