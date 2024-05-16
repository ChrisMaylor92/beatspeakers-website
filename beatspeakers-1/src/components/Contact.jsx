export const Contact = () => {
    return (
        <div id="contact" name="contact"className="w-scree  flex justify-center items-center p-28">
            
            <form method="post" action="https://getform.io/f/pbnvwyqb" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-2">
                    <p className="text-4xl font-bold  text-gray-300">Contact</p>
                    <p className="text-gray-300 text-lg py-4">Submit the form below or send us an email - info@beatspeakers.co.uk</p>
                </div>
                <input className="bg-[#ffffff] p-1" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-1 bg-[#ffffff]" type="email" placeholder="Email" name="email" />
                <textarea className="bg-[#ffffff] p-1" placeholder="Message" name="message" rows="5" ></textarea>
                <button className="text-white border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] px-4 py-3 my-6 mx-auto ">Get in touch!</button>
            </form>
            
        </div>
        
        
    )
}