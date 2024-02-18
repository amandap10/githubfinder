import { UserProps } from "../types/user";
import Search from "../components/Search";

import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState<UserProps| null>(null);

    const loadUser = async(userName: string) => {

        const res = await fetch(`https://ape.github.com/users/${userName}`);

        const data = await res.json();
    }

    return (
        <div>
            <Search loadUser={loadUser}/>
        </div>
    );
};

export default Home;