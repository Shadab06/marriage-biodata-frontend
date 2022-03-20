import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'

const Home = () => {

    const [user, setUser] = useState("");

    let { id } = useParams();

    console.log("id", id);

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await axios.get(`http://142.93.218.129:2001/api/user/get/${id}`)
            console.log("data", data)
            setUser(data)
        }
        fetchUser();
    }, [])

    return (
        <div>
            <Section1 user={user} />
            <Section2 user={user} />
            <Section3 user={user} />
            <Section4 user={user} />
        </div>
    )
}

export default Home