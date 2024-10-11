import Quill from "quill";
import { useCallback, useState } from "react";


export const useQuill = (initialContent = '') => {
    const [quill, setQuill] = useState(null);

    const quillRef = useCallback((element) => {
        if (element && !quill) {
            const quillInstance = new Quill(element, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                    ]
                }
            });
            quillInstance.root.innerHTML = initialContent;
            setQuill(quillInstance);
        }
    }, [initialContent]);

    return { quill, quillRef };
};