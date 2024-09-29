
const ProfilePicture = () => {
    return (
        <div className="w-full mb-1">
            <div className="rounded-md bg-contain bg-center aspect-square flex justify-center items-center" style={{ backgroundImage: "url('https://telegramic.org/static/assets/img/avatar/shattered-island.jpg')" }}>
                <img src="https://telegramic.org/media/avatars/bots/179662323.jpg" alt="" className="border-[5.5px] border-base-200 w-[170px] rounded-full" />
            </div>
        </div>
    )
}

export default ProfilePicture