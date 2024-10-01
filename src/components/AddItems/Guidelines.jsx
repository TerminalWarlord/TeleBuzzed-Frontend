
const Guidelines = () => {
    return (
        <div id="guidelines" className="text-sm md:text-base">
            <h1 className="text-2xl font-bold mb-4">Content Submission Guidelines</h1>

            <p className="mb-6">Before proceeding, please ensure you understand and follow these guidelines:</p>

            <div>
                <h2 className="font-semibold text-gray-700">1. Accuracy</h2>
                <p className="text-gray-600">All information you provide (description, supported languages, category, NSFW status) must be accurate. Incorrect details will result in rejection, and it may negatively impact your reputation score.</p>
            </div>

            <div>
                <h2 className="font-semibold text-gray-700">2. Description</h2>
                <p className="text-gray-600">We usually retrieve the content description directly from Telegram, so you can leave this field blank. However, if Telegram lacks an appropriate description, you must write one. It should clearly explain the content without using links, usernames, or unnecessary characters. In specific cases, we may allow descriptions with one essential link or username.</p>
            </div>

            <div>
                <h2 className="font-semibold text-gray-700">3. Language</h2>
                <p className="text-gray-600">The description must be written in the same language as the content. If the content supports multiple languages, and one of them is English, the description should be written in English.</p>
            </div>

            <div>
                <h2 className="font-semibold text-gray-700">4. Category</h2>
                <p className="text-gray-600">If the available categories do not fit your content, do not select a random one. Instead, inform us so we can add a suitable category.</p>
            </div>

            <div>
                <h2 className="font-semibold text-gray-700">5. NSFW Content</h2>
                <p className="text-gray-600">Be cautious about content that could be classified as NSFW. We do not accept content with explicit graphic material (pornography, violence, drug use, etc.).</p>
            </div>

            <div>
                <h2 className="font-semibold text-gray-700">6. Content Quality</h2>
                <p className="text-gray-600">We may reject content with excessive advertising, low quality, or irrelevant internal content. If you&apos;re uncertain about the quality, avoid submitting it. Consider creating an alternative version with better quality, and we&apos;ll gladly review it for publication.</p>
            </div>

            <div>
                <h2 className="font-semibold text-gray-700">7. Ownership</h2>
                <p className="text-gray-600">If you cannot prove ownership of the content, you will not be allowed to delete it.</p>
            </div>
        </div>
    )
}

export default Guidelines