import React from 'react';

const Contact = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-500 to-green-500 w-full'>

        <section className=" py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contact
                    Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-6 h-6 text-blue-500 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25v2.25m0-9l-3-3m3 3l3-3m-3 3h6m-6 3v-2.25M12 12h.008v.008H12V12z" />
                        </svg>
                        <a href="https://www.linkedin.com/in/ashutosh-kumar-jha-9b0799237/" className="text-gray-700 hover:text-blue-500">LinkedIn</a>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-6 h-6 text-green-500 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 00-5.516-5.517l-1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.947H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        </svg>
                        <a href="" className="text-gray-700 hover:text-green-500">9717289427</a>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-6 h-6 text-red-500 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.468v6.934m0-3l3 3m-3-3l3-3m-3 3h6m-6 3v6.934m0-3l3 3m-3-3l3-3m-3 3H6" />
                        </svg>
                        <a href="mailto:ashutoshashu4091@gmail.com" className="text-gray-700 hover:text-red-500">ashutoshashu4091@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-6   
                            h-6 text-black mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.75l-3-3m0 0l3-3m-3 3h6m-6 3v-3M9 12h6m-6 3v-3" />
                        </svg>
                        <a href="https://github.com/ashutoshashu99" className="text-gray-700 hover:text-black">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
     </div>
    );
};

export default Contact;