import { useState, useEffect } from 'react';
import 'quill/dist/quill.snow.css';
import { getToken } from '../../utils/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostDetails } from '../../utils/http';
import { useQuill } from '../../hooks/useQuill';

const PostEditor = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [postContent, setPostContent] = useState('');
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [isPost, setIsPost] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState('');
    const [error, setError] = useState(null);

    const postSlug = params.postSlug;

    const { quill, quillRef } = useQuill(postContent);

    useEffect(() => {
        async function fetchFn() {
            try {
                const res = await getPostDetails(postSlug);
                setTitle(res.result.title);
                setIsPost(res.result.is_post);
                setPostContent(res.result.content);
                setImagePreview('http://localhost:3000/image/' + res.result.featured_image);
            } catch (err) {
                console.error(err);
            }
        }
        if (postSlug) {
            fetchFn();
        }
    }, [postSlug]);

    useEffect(() => {
        if (quill && postContent) {
            quill.root.innerHTML = postContent;
        }
    }, [quill, postContent]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            if (!quill) throw new Error("Editor not initialized");
            if (!title.trim()) throw new Error("Title is required");
            if (!file && !postSlug && !imagePreview) throw new Error("Featured image is required for new posts");

            const content = quill.root.innerHTML;

            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            if (file) formData.append('file', file);
            formData.append('isPost', isPost.toString());

            const url = postSlug
                ? `http://localhost:3000/post/edit/${postSlug}`
                : 'http://localhost:3000/post';

            const method = postSlug ? 'PUT' : 'POST';

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

            navigate('/dashboard/posts', { state: { postUpdated: true } });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            setImagePreview(URL.createObjectURL(selectedFile));
        }
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
                <div ref={quillRef} className="bg-base-100 border-gray-300 rounded-lg" style={{ height: '300px' }} />
            </div>

            <div className='my-4'>
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-w-xs max-h-48 object-contain mb-2"
                    />
                )}
                <input
                    type="file"
                    className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                    name='featured_image'
                    onChange={handleFileChange}
                    required={!postSlug && !imagePreview}
                />
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
                {isSubmitting ? 'Submitting...' : (postSlug ? 'Update' : 'Create')}
            </button>
        </form>
    );
};

export default PostEditor;