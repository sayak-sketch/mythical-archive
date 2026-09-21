export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        <div>
          <h3 className="font-serif text-2xl text-accent mb-4">Reimagining Memory</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Democratizing history, one voice at a time. A project exploring the intersections of institutional power and vernacular knowledge at the Mythic Society.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white tracking-wide">Ethical Commitment</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            All oral histories and artifacts were collected via community-based participatory research with explicit informed consent. We respect community protocols and licensing rights.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold mb-1 text-white tracking-wide">Navigation</h4>
          <a href="#voices" className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-wider">Interviews & Voices</a>
          <a href="#archive" className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-wider">The Counter-Archive Collection</a>
          <a href="#ethics" className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-wider">Ethics & Access Protocol</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center pt-8 text-gray-500 text-xs tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Abhipsa Ghosh. Built for CHRIST (Deemed to be University) Academic Archive Project.
      </div>
    </footer>
  );
}