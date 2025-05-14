import { useState } from "react";
import links from "../utils/db.js";
const Navbar = () => {
  
  const [linkDetails,setLinkDetails] = useState({
    linkname:"",
    linkaddress:""
  })

  let [error,setError]=useState("");

  const handleInput = (e)=>{
    const {name,value}=e.target;
    setLinkDetails((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }
  
  const submitHandler = async ()=>{
    try {
       await links.create(linkDetails);
      setLinkDetails({
        linkname:"",
        linkaddress:""
      })
        window.location.href="/";
      } catch (error) {
      setError(error)
    }
  }

  return (
    <nav className="bg-[#313244] text-[#cdd6f4] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#f5c2e7]">DashBoard</div>
        <div className=" flex space-x-6">
          <button onClick={() => document.getElementById("addLinkModal").showModal()} className="lg:block hidden text-black bg-[#a6e3a1]  transition p-2 cursor-pointer ">Add Link</button>

          <dialog className="bg-tertiary w-xl p-3 text-primary rounded-md m-auto bg-[#45475a] text-[#cdd6f4] " id="addLinkModal">

      
            <h1 className="text-xl font-bold text-center">Add Link</h1>
            <form method="dialog" className=" mt-3'">
              
                <label htmlFor="linkname">Enter Linkname :</label><br/>
                <input type="text" onChange={handleInput} className="w-full bg-[#585b70] text-xl rounded-md " name="linkname" id="linkname" value={linkDetails.linkname} required /><br/>
                <label htmlFor="linkaddress">Enter the URL :</label><br/>
                <input type="url" onChange={handleInput} className="w-full bg-[#585b70] text-xl rounded-md " name="linkaddress" id="linkaddress" value={linkDetails.linkaddress} required />
             
              <div className="flex justify-between mt-3">
                
                <button className="px-3 py-2 bg-[#f38ba8] rounded-md text-black" onClick={() => document.getElementById("addLinkModal").close()}>Close</button>
    <button className="px-3 py-2 bg-[#a6e3a1] text-black rounded-md" onClick={submitHandler}>Add Link</button>
              </div>
            </form>
          </dialog>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

