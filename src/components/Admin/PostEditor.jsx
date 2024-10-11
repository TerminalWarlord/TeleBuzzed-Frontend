import { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { getToken } from '../../utils/auth';
import { useParams } from 'react-router-dom';

const PostEditor = () => {
    const params = useParams();
    const [postContent, setPostContent] = useState('');
    useEffect(() => {
        if (!params.postId) {
            // 
        }
    }, [params.postId]);
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [isPost, setIsPost] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const editorRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                    ]
                }
            });

            // Set initial content if provided
            if (postContent) {
                quillRef.current.root.innerHTML = postContent;
            }
        }

        return () => {
            if (quillRef.current) {
                quillRef.current = null;
            }
        };
    }, [postContent]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            if (!quillRef.current) throw new Error("Editor not initialized");
            if (!title.trim()) throw new Error("Title is required");
            if (!file && !postId) throw new Error("Featured image is required for new posts");

            const content = quillRef.current.root.innerHTML;

            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            if (file) formData.append('file', file);
            formData.append('isPost', isPost.toString());

            const url = postId
                ? `http://localhost:3000/admin/post/${postId}`
                : 'http://localhost:3000/admin/post';

            const method = postId ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Authorization': getToken()
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to submit post');
            }

            alert(postId ? "Post updated successfully!" : "Post created successfully!");
            // Reset form or redirect here if needed
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    return (
        <form onSubmit={handleSubmit} className="container mx-auto p-4">
            <div className='my-2'>
                <label htmlFor="title" className='text-xl font-bold'>Title</label>
                <input
                    type="text"
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='bg-base-100 py-2 rounded-md w-full border-2 border-base-300 px-2 focus:border-gray-300 outline-none'
                    required
                />
            </div>
            <div>
                <div id="content" ref={editorRef} className="bg-base-100 border-gray-300 rounded-lg" style={{ height: '300px' }} />
            </div>
            <div className='my-4'>
                <input
                    type="file"
                    className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                    name='featured_image'
                    onChange={handleFileChange}
                    required={!postId}
                />
                {featuredImage && <p>Current image: {featuredImage}</p>}
            </div>
            <div className='flex space-x-1.5 items-center my-4'>
                <input
                    type="checkbox"
                    checked={isPost}
                    onChange={(e) => setIsPost(e.target.checked)}
                    className="checkbox checkbox-sm"
                    name='isPost'
                    id='isPost'
                />
                <label htmlFor="isPost">Is a Post?</label>
            </div>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <button
                type="submit"
                className='px-4 py-1.5 bg-black mt-2 rounded-lg text-white text-sm font-bold'
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Submitting...' : (postId ? 'Update' : 'Create')}
            </button>
        </form>
    );
};

export default PostEditor;