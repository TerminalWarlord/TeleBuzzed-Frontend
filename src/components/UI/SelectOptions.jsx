
const SelectOptions = ({ options, onSelectOption }) => {
    return (
        <select className="select select-bordered select-sm" name="sort_by" onChange={(e) => {
            onSelectOption(e.target.value)
        }}>
            {options.map(item => <option key={item} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>)}
        </select>
    )
}

export default SelectOptions