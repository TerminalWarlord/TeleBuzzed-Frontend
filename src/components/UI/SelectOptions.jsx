import { useParams } from "react-router-dom"

const SelectOptions = ({ name, options, onSelectOption }) => {
    const params = useParams();

    return (
        <select className="select select-bordered select-sm" name={name} defaultValue={params.categorySlug} onChange={(e) => {
            onSelectOption(e.target.value)

        }}
        >
            {options.map(item => <option key={item._id} value={item._id}>{item.name}</option>)}
        </select>
    )
}

export default SelectOptions