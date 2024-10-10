import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SelectOptions = ({ name, options, onSelectOption }) => {
    const [selected, setSelected] = useState("");
    const params = useParams();

    useEffect(() => {
        if (params.categorySlug) {
            setSelected(params.categorySlug);
        }
        else {
            setSelected("");
        }
    }, [params.categorySlug]);

    function handleSelect(e) {
        const value = e.target.value;
        onSelectOption(value);
        setSelected(value);
    }

    return (
        <select
            className="select select-bordered select-sm"
            name={name}
            onChange={handleSelect}
            value={selected}
        >
            {options.map((item) => (
                <option key={item._id} value={item.slug}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default SelectOptions;