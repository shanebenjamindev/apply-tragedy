import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function GetUser() {

    const userData = JSON?.parse(localStorage.getItem("USER_LOGIN"));
    const user = userData?.user;

    return user
}
