import { ReplyIcon, TrashIcon } from '@heroicons/react/outline'

const ItemReview = () => {
  return (
        <div>
            <div className="flex space-x-4 items-center py-2">
                <div className="flex">
                    <img className="h-10 w-10 object-cover rounded-full"
                        src="/assets/images/ava.jpg"
                    />
                </div>
                <div>
                    <span className="block font-medium">Ahmad Fanani</span>
                    <span className="block font-light text-sm">fananiapps@gmail.com</span>
                </div>
            </div>
            <div className="mt-2">
                <div className="px-4 py-2 w-full lg:w-3/5 bg-secondary rounded-md">
                    <p className=" font-light">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    </p>
                </div>
                <div className="flex space-x-4">
                    <button className="mt-4 px-2 py-0.5 flex items-center font-medium rounded-md">
                        <ReplyIcon className="h-5 w-5 mr-2" fill="none" stroke="currentColor"/>
                        Reply
                    </button>
                    <button className="mt-4 px-2 py-0.5 flex items-center font-medium rounded-md">
                        <TrashIcon className="h-5 w-5 mr-2" fill="none" stroke="currentColor"/>
                        Delete
                    </button>
                </div>
                <div className="ml-14 mt-6">
                    <div className="flex space-x-2">
                        <input placeholder="Enter Your Reply"
                            className="w-full lg:w-3/5 px-4 py-2 outline-none border border-primary rounded-md"
                        />
                        <button className="px-4 py-2 bg-primary text-secondary font-medium rounded-md">
                            Submit
                        </button>
                    </div>
                    <div className="flex space-x-4 items-center mt-2 py-2">
                        <div className="flex justify-center">
                            <img className="h-10 w-10 object-cover rounded-full"
                                src="/assets/images/ava.jpg"
                            />
                        </div>
                        <div>
                            <span className="block font-medium">Ahmad Fanani</span>
                            <span className="block font-light text-sm">fananiapps@gmail.com</span>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="px-4 py-2 w-full lg:w-3/5 bg-secondary rounded-md">
                            <p className=" font-light">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <button className="mt-4 px-2 py-0.5 flex items-center font-medium rounded-md">
                                <ReplyIcon className="h-5 w-5 mr-2" fill="none" stroke="currentColor"/>
                                Reply
                            </button>
                            <button className="mt-4 px-2 py-0.5 flex items-center font-medium rounded-md">
                                <TrashIcon className="h-5 w-5 mr-2" fill="none" stroke="currentColor"/>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ItemReview
