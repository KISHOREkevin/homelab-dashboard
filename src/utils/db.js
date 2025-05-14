import Pocketbase from "pocketbase";

const pb=new Pocketbase("http://localhost:8090");
pb.autoCancellation(false);

const links = pb.collection('links');



export default links;
