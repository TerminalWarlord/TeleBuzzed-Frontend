
const SelectOptions = ({ options }) => {
    return (
        <select className="select select-bordered select-sm">
            {options.map(item => <option key={item}>{item}</option>)}
        </select>
    )
}

export default SelectOptions