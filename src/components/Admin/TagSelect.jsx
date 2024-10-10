import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


// TODO: Implement Tags and Categories


const TagSelect = () => {
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if (value.includes(',')) {
            const newTags = value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
            setTags([...tags, ...newTags]);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            setTags([...tags, input.trim()]);
            setInput('');
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="w-full max-w-md">
            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center justify-center">
                        {tag}
                        <button onClick={() => removeTag(index)} className="ml-1 focus:outline-none">
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </span>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Add tags (separate with comma)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default TagSelect;