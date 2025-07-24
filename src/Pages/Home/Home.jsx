import React, { useState } from "react";
import"./Home.css"
import Header from "../../Components/Navbar/Header/Header"
import ExploreMenu from "../../Components/Navbar/ExploreMenu/ExploreMenu";

const Home = () => {
    const [category, setCategory]= useState("All")
    return (

        <div>
            <Header></Header>
            <ExploreMenu category = {category} setCategory={setCategory}></ExploreMenu>
        </div>
    )
}
export default Home