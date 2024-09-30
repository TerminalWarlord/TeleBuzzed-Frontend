import { Form, Link, useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    async function handleSignup(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const formDataObject = {};
        data.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log(formDataObject);
        console.log(navigate)
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
                    Sign up to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form method="POST" className="space-y-6" onSubmit={handleSignup}>
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

                    <div className="flex justify-between">
                        <div><label htmlFor="first_name" className="block text-sm font-medium leading-6 text-base-content">
                            First Name
                        </label>
                            <div className="mt-2">
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    required
                                    autoComplete="given-name"
                                    className="px-3 block w-full rounded-md border-1 border-blue-200  py-1.5 text-base-content shadow-sm ring-1  placeholder:text-base-content  focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  focus:outline-none"
                                />
                            </div>  </div>

                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-base-content">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    required
                                    autoComplete="family-name"
                                    className="px-3 block w-full rounded-md border-1 border-blue-200  py-1.5 text-base-content shadow-sm ring-1  placeholder:text-base-content  focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-base-content">
                            Gender
                        </label>
                        <div className="mt-2">
                            <select
                                className="select px-3 block w-full rounded-md border-1 border-blue-200  py-1.5 text-base-content shadow-sm ring-1  placeholder:text-base-content  focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  focus:outline-none"
                                name="gender"
                                id="gender"
                            >
                                <option disabled selected>Choose your gender</option>
                                <option value={'male'}>Male</option>
                                <option value={'female'}>Female</option>
                                <option value={'non_binary'}>Non-Binary</option>
                            </select>
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
                        <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-base-content">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="confirm_password"
                                name="confirm_password"
                                type="password"
                                required
                                className="px-3 block w-full rounded-md border-1 border-blue-200  py-1.5 text-base-content shadow-sm ring-1  placeholder:text-base-content  focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  focus:outline-none"
                            />
                        </div>
                    </div>
                    {/* <div>
                        <div className="mt-2">
                            <input type="file" name="image" id="image" className="file-input file-input-bordered w-full " />
                        </div>
                    </div> */}

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </Form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <Link to="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}
