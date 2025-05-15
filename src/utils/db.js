import Pocketbase from "pocketbase";

const pb=new Pocketbase("/");
pb.autoCancellation(false);

const links = pb.collection('links');



export default links;
