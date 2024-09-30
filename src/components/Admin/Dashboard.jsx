
const Dashboard = () => {
    return (
        <div className="flex justify-center mx-5 w-full">

            <div className="overflow-x-auto my-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="p-1">User</th>
                            <th className="p-1">Content Added</th>
                            <th className="p-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className="p-1">
                                <div className="flex items-center">

                                    <div>
                                        <div className="font-bold text-xs md:text-sm">Joy Biswas</div>
                                        <div className=" text-xs  opacity-50">@jaybeedev</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-1 w-6 sm:w-[30rem] xl:w-[70rem]">
                                <div className="flex">
                                    <div className="hidden  md:flex avatar">
                                        <div className="mask mask-squircle h-12 w-12 mr-4">
                                            <img
                                                src="https://cdn5.cdn-telegram.org/file/GgladjDAJ3-wUtT0iL7VEX27a_poswmUG6WRLYsJf6wn8drCbsvFj7w0ZCJ1MMBonyL3ArMtUP8lylfujqY_usAZI26gaxR_fk8EDNG-GEV-JVUiFCbYKhYFSP-RRVsnqytjlVYZWY90qEkQQXTZNscTtzIx78Ta5k4iGuckMbduOBJQtpjqDgcgypVyplQG3VNyPDPVfFK7NpaTZm621cewYo2bJ3hD3Nqf5dd944oMYKQ_dG7W7E8IiJ9jvi-v-R0McgZUfjqE7G7KAjGEt7UdVFWcR6QYbokSfzVCSCjteSRxBKuss2Z5nJDE93D4filUsE3U4op9dxXYwygxGA.jpg"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <a href="https://t.me/JayBeeAnimeDLBot">Anime Downloader Bot</a>
                                        <br />
                                        <div className=" text-xs md:text-xs"><span>This bot can search and download your favourite Animes.
                                            ⚙ Developer : @JayBeeDev
                                            A project of @JayBeeBots</span></div>
                                    </div>
                                </div>
                            </td>
                            <th className="p-1 flex flex-col items-center space-y-2">
                                <select name="" id="" className="select text-xs md:text-sm select-sm  px-2 border-1 border-base-200">
                                    <option disabled selected>Category</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Entertainment">Ulitity</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Entertainment">Entertainment</option>
                                </select>
                                <div className="flex flex-col space-y-1 sm:flex-row sm:space-x-1 text-xs ">
                                    <button className="px-2 py-2 bg-red-200 rounded-md">Reject</button>
                                    <button className="px-2 py-2 bg-green-200 rounded-md">Approve</button>
                                </div>
                            </th>
                        </tr>
                        {/* row 2 */}

                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    )
}

export default Dashboard