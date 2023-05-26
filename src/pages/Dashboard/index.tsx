import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Dashboard = () => {
    const [newUser, setNewUser] = useState();

    // useEffect(() => {
    //     const getClient = async () => {
    //         const response = await api.get(`client`);

    //         setNewUser(response.data[0]);
    //     };
    //     getClient();
    // }, []);

    return <div>{}</div>;
};
