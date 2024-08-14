import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-4 mt-2">
      <div className="flex justify-between mx-10 ">
        <p>&copy; 2024 PK ChaSpo. All rights reserved.</p>
        <p>
          <Link href="/contact-us" className=" hover:text-gray-500 ml-4">
            Contact Us
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
