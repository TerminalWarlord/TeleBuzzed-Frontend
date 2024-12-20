import { ImageViewer } from '../../UI/Image';

const apiUrl = import.meta.env.VITE_API_URL;

const ProfilePicture = ({ image, isFetching = false, error = null }) => {
    console.log(error);

    return (
        <div className="w-full mb-1">
            <div
                className="rounded-md bg-contain bg-center aspect-square flex justify-center items-center"
                style={{ backgroundImage: `url('${apiUrl}/image/bg_avatar.png')` }}
            >
                {error?.message && (
                    <div className="bg-base-100 flex justify-center items-center aspect-square w-[170px] sm:w-[280px] md:w-[170px] rounded-full">
                        <h1 className="text-4xl sm:text-5xl font-bold">404!</h1>
                    </div>
                )}
                {!error && isFetching && (
                    <div className="skeleton aspect-square w-[170px] sm:w-[280px] md:w-[170px] rounded-full"></div>
                )}
                {!error && !isFetching && image && (
                    <ImageViewer
                        imageUrl={`${apiUrl}/image/${image}`}
                        caption='Profile Picture'
                        classes="border-[5.5px] object-cover aspect-square border-base-200 w-[170px] sm:w-[280px] md:w-[170px] rounded-full"
                        onError={(e) => {
                            e.target.style.display = 'none'; // Hide image if it fails to load
                        }}
                    />
                    // <img
                    //     src=
                    //     alt="Bot"
                    //     className="border-[5.5px] border-base-200 w-[170px] sm:w-[280px] md:w-[170px] rounded-full"
                    //     onError={(e) => {
                    //         e.target.style.display = 'none'; // Hide image if it fails to load
                    //     }}
                    // />
                )}
            </div>
        </div>
    );
};

export default ProfilePicture;
