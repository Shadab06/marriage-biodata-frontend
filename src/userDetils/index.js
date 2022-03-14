import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Footer from "./Footer";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Index = () => {

    const [user, setUser] = useState("");

    let { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await axios.get(`http://167.71.231.193:2001/api/user/get/${id}`)
            console.log(data)
            setUser(data)
        }
        fetchUser();
    }, [])

    return (
        <div className="main_cotainer">
            <Header />
            <Section1 user={user} />
            <Section2 user={user} />
            <Section3 user={user} />
            <Section4 user={user} />
            <Footer />
        </div>
    );
}

export default Index;