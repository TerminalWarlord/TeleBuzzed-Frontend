
const InputField = ({ label, inputId, children, className }) => {
    return (
        <div className={`my-2 ${className}`}>
            <label htmlFor={inputId} className="block text-xs md:text-sm font-medium leading-6 text-base-content">
                {label} <span className="text-red-500 text-lg">*</span>
            </label>
            <div className="">
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default InputField