import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-screen  w-full flex justify-center items-center bg-black bg-opacity-40 '">
            <div className="w-[90%] h-[500px] mt-16 md:mt-0 flex items-center  justify-center border-black border-2">
                <div className="flex-col flex h-full justify-center items-center w-full lg:max-w-[40%] px-4 bg-black bg-opacity-70 rounded-xl   text-gray-300 ">
                    <div className='my-4'>
                        <h1>Contact Us</h1>
                        <p>We'll back to you as soon as possible</p>
                    </div>
                    <form
                        method="POST"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        className="flex px-8 md:px-0 flex-col w-full max-w-[600px]"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input
                            className="bg-transparent border-b-2 border-[#185818a1] p-2 text-[#ccd6f6]"
                            type="text"
                            placeholder="Name"
                            name="name"
                        />
                        <input
                            className="my-4 bg-transparent border-b-2 border-[#185818a1] p-2 text-[#ccd6f6]"
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                        <textarea
                            className="bg-transparent border-b-2 border-[#185818a1] p-2 text-[#ccd6f6] resize-none"
                            name="message"
                            rows="8"
                            placeholder="Message"
                        ></textarea>
                        <div className="flex justify-center pt-2">
                            <button
                                type="submit"
                                className=" p-3 my-2 items-center rounded font-medium bg-gradient-to-r from-[#185818a1] to-[#008000A1] hover:bg-gradient-to-l "
                            >
                                Let's Collaborate
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact