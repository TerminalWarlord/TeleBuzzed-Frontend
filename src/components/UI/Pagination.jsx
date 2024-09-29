
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="my-6">

            <div className="flex items-center">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 font-medium text-base-content bg-base-300 border border-base-content rounded-tl-md rounded-bl-md hover:bg-base-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous

                </button>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-8 py-2 font-medium text-base-content bg-base-300 border border-base-content rounded-tr-md rounded-br-md hover:bg-base-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;