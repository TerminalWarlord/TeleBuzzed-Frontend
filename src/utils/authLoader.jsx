import { redirect } from "react-router-dom";
import { isLoggedIn } from "./auth";
import { getMe } from "./http";

export default async function authLoader() {
    const isAuthed = await isLoggedIn();
    if (!isAuthed) {
        return redirect('/auth/login');
    }
    return null;
}


export async function dashboardAuthLoader() {
    const user = await getMe();
    if (!user) {
        return redirect('/auth/login');
    }
    if (user.result.role !== 'admin') {
        return redirect('/');
    }
    return null;
}