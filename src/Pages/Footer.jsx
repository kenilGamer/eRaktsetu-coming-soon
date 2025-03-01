function Footer() {
  const footerArray = [
    {
      link: "#",
      text: "Terms of Service",
    },
    {
      link: "#",
      text: "Cookies",
    },
    {
      link: "#",
      text: "Privacy Policy",
    },
    {
      link: "#",
      text: "Cookies",
    },
    {
      link: "#",
      text: "Privacy Policy",
    },
  ];

  const footerArrayButton = [
    {
      link: "#",
      text: "Quick Contact",
    },
    {
      link: "#",
      text: "Mail Us",
      isButton: true,
    },
    {
      link: "#",
      text: "Call Us",
      isButton: true,
    },
    {
      link: "#",
      text: "Cookies",
    },
    {
      link: "#",
      text: "Privacy Policy",
    },
  ];
  return (
    <footer>
      <div className="flex flex-col md:flex-row gap-10 px-5 md:px-0 justify-center items-center my-16">
        <div className="w-full md:w-[40%] items-center md:items-start flex flex-col gap-2">
          <img src="/imgs/rounded-logo.png" alt="" width={150} />
          <h2 className="text-black text-3xl font-bold text-center md:text-start">
            Join us today and <br className="hidden md:block" /> Make an impact
            to the World.
          </h2>
        </div>
        <div className="w-full md:w-[45%] flex justify-center gap-10">
          <ul className="flex flex-col gap-2">
            {footerArray.map((footer, index) => (
              <li key={index}>
                <a href={footer.link}>{footer.text}</a>
              </li>
            ))}
          </ul>
          <ul className="flex-col gap-2 hidden md:flex">
            {footerArray.map((footer, index) => (
              <li key={index}>
                <a href={footer.link}>{footer.text}</a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2">
            {footerArrayButton.map((footer, index) =>
              footer.isButton ? (
                <button
                  key={index}
                  className="border border-black  px-3 py-1 rounded-full"
                >
                  {footer.text}
                </button>
              ) : (
                <li key={index}>
                  <a href={footer.link}>{footer.text}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-3 md:flex-row justify-center py-2 md:py-5 px-5 bg-[#AB1419] text-white">
        <p className="text-center text-white">
          &copy; 2025 <span className="font-bold">eRaktSetu</span> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
