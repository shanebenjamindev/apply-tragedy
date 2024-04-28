import { useEffect } from "react";

export function GetUser() {
    const user = JSON?.parse(localStorage?.getItem("USER"));
    return user
}
export function SetLocalUser(user) {
    return localStorage.setItem("USER", JSON.stringify(user));
}

export function LogoutLocalUser(navigate) {
    navigate("/sign-in", { replace: true })
    return localStorage.removeItem("USER");
}
