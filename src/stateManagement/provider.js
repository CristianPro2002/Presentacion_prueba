import React, {createContext,useState} from "react";

const MyProvider = (props) =>{
    const [data,setData]= useState({});
    const [data2,setData2]= useState([]);
    const [dataUser,setDataUser]= useState([]);
    return (
        <AppContext.Provider value={[data,setData,data2,setData2, dataUser, setDataUser]}>
            {props.children}
        </AppContext.Provider>
    );
}

export default MyProvider;
export const AppContext = createContext();