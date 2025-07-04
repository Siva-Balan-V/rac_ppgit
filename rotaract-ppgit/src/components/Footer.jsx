const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center text-sm py-4 text-gray-700 dark:text-gray-300 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">Rotaract Club of PPG Institute of Technology</span> |
          RI District 3206 | Club ID: <strong>882398</strong>
        </p>
        <p className="mt-1">
          <span className="text-rose-600 dark:text-rose-400 font-medium">Fellowship Through Service</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
