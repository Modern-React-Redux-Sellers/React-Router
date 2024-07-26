import Header from "../components/Header";
//Outlet reaches into browserRouter to find which component to display
import {Outlet} from "react-router-dom";

export default function Root(){
    return <div className="container mx-auto px-20">
        <Header />
        <Outlet/>
    </div>
}