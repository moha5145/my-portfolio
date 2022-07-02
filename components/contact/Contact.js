const Contact = () => {
  return (
    <div id="contact" className="bg-contact h-screen w-full text-center p-2 flex flex-col  justify-center">
      <h2>Contact me</h2>

      <form className="container flex flex-col  gap-3 md:2/3 lg:w-1/2 mx-auto pt-20 text-contactDark">
        <input type="text" placeholder="Your name" className="p-4 rounded-md placeholder:text-contact outline-red-400" />
        <input type="email" placeholder="Your Email" className="p-4 rounded-md outline-red-400" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className="p-4 rounded-md outline-red-400"></textarea>
        <input type="submit" value="Send message" className="p-4 rounded-md bg-red-400 text-green-100 hover:opacity-70 active:opacity-50 font-bold  text-lg" />
      </form>
    </div>
  );
};
export default Contact;
