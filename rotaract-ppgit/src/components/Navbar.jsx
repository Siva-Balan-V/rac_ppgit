import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-rose-600">Rotaract PPGIT</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-rose-600">Home</Link>
          <Link to="/about" className="hover:text-rose-600">About</Link>
          <Link to="/board" className="hover:text-rose-600">Board</Link>
          <Link to="/projects" className="hover:text-rose-600">Projects</Link>
          <Link to="/gallery" className="hover:text-rose-600">Gallery</Link>
          <Link to="/join" className="hover:text-rose-600">Join</Link>
          <Link to="/contact" className="hover:text-rose-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
