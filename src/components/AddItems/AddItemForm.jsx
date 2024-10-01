import InputField from './InputField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { Form, Link, useParams } from 'react-router-dom'



const AddItemForm = () => {
    const params = useParams();
    console.log(params.type)
    const type = params.type || 'bot';
    const contentType = type === 'bot' ? 'Bot' : (type === 'channel' ? 'Channel' : 'Group');
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        // eslint-disable-next-line no-unused-vars
        const res = await fetch('http://localhost:3000/add', {
            method: 'POST',
            body: data
        })
        // TO DO
    }
    return (
        <Form className="border-2 border-base-300  rounded-md" onSubmit={handleSubmit}>
            <input type="hidden" name="type" value={type} />
            <div className="flex items-center space-x-3 w-full bg-base-200 p-3">
                <FontAwesomeIcon icon={faAward} className="text-4xl md:text-5xl" />
                <div>
                    <h4 className="text-sm md:text-base font-bold">Thank you for your contribution!</h4>
                    <p className="text-xs md:text-sm">Please make sure you read <Link to="#guidelines">the rules</Link>. If we like this content and the information you provided is correct, we can publish it on our Telegram channels.</p>
                </div>
            </div>
            <InputField label={`${contentType} Username`} inputId='username' className="mx-4 text-xs md:text-base">
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Type the username"
                    required
                    maxLength={50}
                    className="block flex-1 py-1.5 px-2 text-base-content placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full md:w-3/5 border-2 border-base-300 rounded-md bg-base-100"
                />
            </InputField>
            <InputField label={`${contentType} Language`} inputId='language' className="mx-4 text-xs md:text-base">
                <select
                    id="language"
                    name="language"
                    className="block w-full md:w-3/5 rounded-md border-2 border-base-300 py-1.5 px-2 text-base-content bg-base-100 sm:text-sm sm:leading-6 "
                    required
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
            </InputField>
            <InputField label={`${contentType} Category`} inputId='category' className="mx-4 text-xs md:text-base">
                <select
                    id="category"
                    name="category"
                    className="block w-full md:w-3/5  rounded-md border-2 border-base-300 py-1.5 px-2 text-base-content bg-base-100 sm:text-sm sm:leading-6 "
                    required
                >
                    <option>Media</option>
                    <option>News</option>
                    <option>Mexico</option>
                </select>
            </InputField>
            <InputField label={`${contentType} Description`} inputId='description' className="mx-4 text-xs md:text-base">
                <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-base-content shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="A thing or two about the bot"
                    required
                    minLength={50}
                    maxLength={250}
                />
            </InputField>
            <div className="mx-5 flex items-center my-5 text-xs md:text-base">
                <input type="checkbox" className="toggle mr-2" name='is_nsfw' /><span>is NSFW?</span>
            </div>
            <button className="btn mx-5 mb-5 bg-green-500 bg-opacity-60 hover:bg-green-500 hover:bg-opacity-45">Submit</button>
        </Form>
    )
}

export default AddItemForm