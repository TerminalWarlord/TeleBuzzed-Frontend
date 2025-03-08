import { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-router-dom';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import LineBreak from '../../UI/LineBreak';
import { putChangePassword, putEditProfile } from '../../../utils/user';
import { authActions } from '../../../store/authStore';

const EditProfile = forwardRef(({ onUserUpdate }, ref) => {
    const [errors, setErrors] = useState(null);
    const [passwordChangeErrors, setPasswordChangeErrors] = useState(null);
    const dispatcher = useDispatch();
    const user = useSelector(state => state.auth.user);

    function closeEditProfile() {
        ref.current.close();
    }

    async function handleProfileUpdate(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        try {
            const res = await putEditProfile(data);
            dispatcher(authActions.login(res));
            setErrors(null);
            onUserUpdate(res);
            closeEditProfile();
            // const
        }
        catch (err) {
            console.log(err);
            setErrors({
                message: err.message || 'Failed to update!'
            })
        }

    }

    async function handlePasswordChange(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const formDataObj = Object.fromEntries(data.entries());
        if (formDataObj.new_password !== formDataObj.confirm_password) {
            setPasswordChangeErrors({
                message: 'New password doesn\'t match!'
            })
            return;
        }
        try {
            await putChangePassword(formDataObj);
            setPasswordChangeErrors(null);
            closeEditProfile();
        }
        catch (err) {
            console.log(err);
            setPasswordChangeErrors({
                message: err.message || 'Failed to update!'
            })
        }
    }


    return (
        <>
            <div className="w-full flex justify-center">
                <LineBreak icon={faPenToSquare} text="Edit Profile" classes="mb-8 " />
            </div>
            {
                (errors || passwordChangeErrors) && <div className='mb-4'>
                    <h4 className='text-sm italic text-red-500'>{passwordChangeErrors.message}</h4>
                </div>
            }
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab whitespace-nowrap" aria-label="User Details"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Form onSubmit={handleProfileUpdate} className="my-2">
                        <div className="w-full flex space-x-2 items-center my-2">
                            <label htmlFor="first_name" className="font-semibold text-md text-left flex-auto">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                className="px-1.5 py-1.5 w-64 border-2 border-base-200 rounded-lg focus:border-base-300 outline-none"
                                defaultValue={user?.result?.first_name}
                            />
                        </div>

                        <div className="w-full flex space-x-2 items-center my-2">
                            <label htmlFor="last_name" className="font-semibold text-md text-left flex-auto">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                className="px-1.5 py-1.5 w-64 border-2 border-base-200 rounded-lg focus:border-base-300 outline-none"
                                defaultValue={user?.result?.last_name}
                            />
                        </div>

                        <div className="w-full flex space-x-2 items-center my-2">
                            <label htmlFor="tg_username" className="font-semibold text-md text-left flex-auto">
                                Telegram Username
                            </label>
                            <input
                                type="text"
                                id="tg_username"
                                name="tg_username"
                                className="px-1.5 py-1.5 w-64 border-2 border-base-200 rounded-lg focus:border-base-300 outline-none"
                                defaultValue={user?.result?.tg_username}
                            />
                        </div>
                        <div className='w-full flex justify-start my-4'>
                            <label htmlFor="tg_username" className="font-semibold text-md text-left flex-auto">
                                Avatar
                            </label>
                            <input
                                type="file"
                                name="avatar"
                                className="file-input file-input-bordered file-input-sm w-64"
                            />
                            {/* <input type="file" className="file-input file-input-bordered file-input-sm w-full" /> */}

                        </div>
                        <div className="w-full flex justify-end mb-2 mt-6 space-x-2">
                            <button onClick={closeEditProfile} className="px-3 py-1.5 bg-black text-white rounded-md">Close</button>
                            <button type="submit" className="px-3 py-1.5 bg-black text-white rounded-md">Save Changes</button>
                        </div>

                    </Form>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab whitespace-nowrap"
                    aria-label="Change Password"
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Form onSubmit={handlePasswordChange} className="my-2">
                        <div className="w-full flex space-x-2 items-center my-2 justify-start">
                            <label htmlFor="old_password" className="font-semibold text-md flex-grow text-left">
                                Current Password
                            </label>
                            <input
                                type="password"
                                id="old_password"
                                name="old_password"
                                autoComplete='current-password'
                                className="px-1.5 py-1.5 w-56 border-2 border-base-200 rounded-lg focus:border-base-300 outline-none"
                            />
                        </div>

                        <div className="w-full flex space-x-2 items-center my-2">
                            <label htmlFor="new_password" className="font-semibold text-md flex-grow text-left">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="new_password"
                                name="new_password"
                                className="px-1.5 py-1.5  w-56 border-2 border-base-200 rounded-lg focus:border-base-300 outline-none"
                            />
                        </div>

                        <div className="w-full flex space-x-2 items-center my-2">
                            <label htmlFor="confirm_password" className="font-semibold text-md flex-grow text-left">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                className="px-1.5 py-1.5 w-56 border-2 border-base-200 rounded-lg focus:border-base-300 outline-none"
                            />
                        </div>
                        <div className="w-full flex justify-end mb-2 mt-6 space-x-2">
                            <button onClick={closeEditProfile} className="px-3 py-1.5 bg-black text-white rounded-md">Close</button>
                            <button type="submit" className="px-3 py-1.5 bg-black text-white rounded-md">Save Changes</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
});
EditProfile.displayName = "EditProfile";

export default EditProfile;