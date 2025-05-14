import { useState } from "react"
import links from "../utils/db";

const Link = ({linkid,linkname,linkaddress}) => {

    
  let [error,setError] =useState(""); 
  

  
   
  const deleteHandler = async ()=>{
    try {
      await links.delete(linkid); 
      window.location.href="/";
    } catch (error) {
      setError(error) 
    }
  }


  return (
    <div className="bg-[#313244] p-8 space-y-3 m-3 text-center lg:flex space-x-10 rounded-md">
    <div>
        <a href={linkaddress} target="_blank"><h1 className="text-2xl">{linkname}</h1></a>
        <h3>{linkaddress}</h3>
     </div> 
    <div className="hidden lg:block">
                   <button onClick={deleteHandler} className="px-3 py-2 bg-[#f38ba8] rounded-md text-black cursor-pointer text-2xl"> 󰆴 </button>
    </div>
        </div>
  
  )
}

export default Link
