import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./context";

function Content() {
    let [count, setCount] = useState(0);
    let [displayContent, setDisplayContent] = useState(true)
    let {theme, setTheme} = useContext(MyContext)

    useEffect(() => {
        alert("Content Button Is Clicked")
    }, [displayContent])

    function changeTheme() {
        setTheme(theme => theme ? false : true)
    }

    function changeContent() {
        setDisplayContent(displayContent => displayContent ? false : true)
    }


  return (
    <>
      <button onClick={changeTheme}>Toggle</button>
      <div style={{
        width:"50vw",
        padding:"10px",
        margin:'20px',
        backgroundColor: theme ? "black" : "grey",
        color:"white"
        }}>
        <p style={{
          display:displayContent?"block":'none'  
        }}> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          pariatur fugiat! Fugiat, expedita voluptatibus omnis sed neque nobis
          est quae non sit, ipsum amet ex? Reiciendis consequatur cum et
          numquam!
        </p>
        <button onClick={changeContent}>Content</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count => count+1)}>Like</button>
      </div>
    </>
  );
}

export default Content;
