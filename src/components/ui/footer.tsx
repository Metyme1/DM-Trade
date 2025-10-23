import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            DM Trade & Investment PLC
          </h3>
          <p className="text-sm text-blue-100">
            Bridging global commerce with digital innovation. Based in Dire
            Dawa, Ethiopia.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-blue-100">
            <li>
              <Link href="/trade">Trade & Investment</Link>
            </li>
            <li>
              <Link href="/software">Software Solutions</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-blue-100 text-sm">
            📍 Dire Dawa, Ethiopia <br />
            📧 info@dmtradeplc.com <br />
            📞 +251 9XX XXX XXX
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-blue-200 mt-10 border-t border-blue-300 pt-4">
        © {new Date().getFullYear()} DM Trade & Investment PLC. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
