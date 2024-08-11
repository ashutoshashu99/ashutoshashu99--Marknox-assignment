import React from 'react'




const CustomnavLink = ({ title }) => {
    return (
        <a href={`#${title.toLocaleLowerCase()}`} className=" text-lg">
            {title}
        </a>
    );
};

function Navbar() {
    return (
        <>
            <header className=" sticky top-6 shadow-2xl flex items-center justify-around h-[92px] bg-white rounded-2xl mx-12   ">

                <div >
                    <nav className="inline-flex gap-12 pr-40">
                        {["Home", "Projects", "Contact"].map(
                            (title, index) => (
                                <CustomnavLink title={title} key={index} />

                            )
                        )}
                    </nav>
                </div>
                <div>
                    <div className=" flex p-4 gap-8 sm:hidden">
                        <a
                            href="tel: +91 0000000000"
                            className=" flex items-center  text-[#88A855] ml-8"
                        >
                            {/* <img src="contact-icon.png" alt="phone-icon" className=" w-8 " /> */}
                            9717289427
                        </a>
                        <a
                            href="mailto:ashutoshashu4091@gmail.com"
                            className=" flex items-center text-[#88A855]"
                            type="mail"
                        >
                            {/* <img
                src="mail-icon.png"
                alt="mail-icon"
                className=" w-8 mr-2 fill-current"
              /> */}
                            Ashutoshashu@gmail.com
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
