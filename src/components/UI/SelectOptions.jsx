import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SelectOptions = ({ name, options, onSelectOption }) => {
    const [selected, setSelected] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const currentPath = pathname.split('/')[1]

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
        if (value != 'All') {
            navigate(`/${currentPath}/${value}`);
        }
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