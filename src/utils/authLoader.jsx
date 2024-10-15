import { redirect } from "react-router-dom";
import { isLoggedIn } from "./auth";

export default async function authLoader() {
    const isAuthed = await isLoggedIn();
    if (!isAuthed) {
        return redirect('/auth/login');
    }
    return null;
}