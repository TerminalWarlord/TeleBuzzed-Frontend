import { Form, Link, useNavigate } from "react-router-dom"
import { authActions } from "../../store/authStore";
import { useDispatch } from "react-redux";
import { login } from "../../utils/http";
import { useState } from "react";

export default function SignIn() {
    const [errors, setErrors] = useState();
    const [isFetching, setIsFetching] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        setIsFetching(true);
        try {
            const res = await login(data);
            localStorage.setItem('token', res.token);
            dispatch(authActions.login({ userId: res.id }));
            navigate('/');
        }
        catch (err) {
            console.log(err);
            setErrors({
                message: err.message || "Failed!",
            });
        }
        setIsFetching(false);
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-base-content">
                    Sign in to your account
                </h2>

            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-base-content">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="px-3 block w-full rounded-md border-1 border-blue-200  py-1.5 text-base-content shadow-sm ring-1  placeholder:text-base-content  focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-base-content">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="px-3 block w-full rounded-md border-1 border-blue-200  py-1.5 text-base-content shadow-sm ring-1  placeholder:text-base-content  focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
                            disabled={isFetching}
                        >
                            Sign in
                        </button>
                    </div>
                    {errors?.message && <h3 className="text-center text-red-400">{errors.message}</h3>}
                </Form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}




// export async function SigninAction() {
//     // const data = await request.formData();
//     localStorage.setItem('token', 'abc');
//     authActions.login({
//         userId: 1
//     })
//     return redirect('/');

// }