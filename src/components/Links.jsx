import { useEffect, useState } from "react"
import Link from "./Link"
import links from "../utils/db.js";
const Links = () => {

  const [allLinks, setAllLinks] = useState([]);
  const [error,setError]=useState("");
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let fetchData = async () => {
      try {
        let result = await links.getFullList();
        setAllLinks(result);

      } catch (error) {
        setError(error)
      }
    }

    fetchData();
    setLoading(false);
  }, [])

  if(loading){
    return <h1>Loading...</h1>
  }
      return (
    <div className="flex p-3 flex-wrap justify-center" >
      
      {allLinks.length === 0 ?
        <h1 className="text-3xl font-bold">No Apps Hosted !!!</h1>
        :
        allLinks.map((link)=>{
          return  <Link key={link.id} linkid={link.id} linkname={link.linkname} linkaddress={link.linkaddress} />
        })
       
      }
    </div>
  )
}

export default Links
