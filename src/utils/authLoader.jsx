import { redirect } from "react-router-dom";
import { isLoggedIn } from "./auth";

export default async function authLoader() {
    console.log("hello", isLoggedIn())
    if (!isLoggedIn()) {
        return redirect('/auth/login');
    }
    return null;
}