"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeInterview, setActiveInterview] = useState(0);
  const [selectedId, setSelectedId] = useState(null); // Tracks the clicked card for the Lightbox Modal

  // All 20 Curated Items with Image Paths
  const archiveItems = [
    { title: "Quarterly Journal – Early Issue", desc: "Documenting the Society's scholarly work.", category: "Institutional", format: "Print", access: "Public", color: "bg-accent", image: "/assets/item-1.jpg" },
    { title: "Quarterly Journal – Recent Issue", desc: "Continuation of the research tradition.", category: "Institutional", format: "Print", access: "Public", color: "bg-accent", image: "/assets/item-2.jpg" },
    { title: "Old Card Catalogue", desc: "Handwritten catalogue card to organise books.", category: "Classification", format: "Document", access: "Public", color: "bg-accent", image: "/assets/item-3.jpg" },
    { title: "Rare Book Title Page", desc: "Older book showing author, publisher and date.", category: "Institutional", format: "Print", access: "Public", color: "bg-accent", image: "/assets/item-4.jpg" },
    { title: "Annotated Book Page", desc: "Handwritten marginalia by an earlier reader.", category: "Institutional", format: "Document", access: "Public", color: "bg-accent", image: "/assets/item-5.jpg" },
    { title: "Sanskrit Text/Manuscript", desc: "Record of an older literary tradition.", category: "Institutional", format: "Manuscript", access: "Research", color: "bg-red-500", image: "/assets/item-6.jpg" },
    { title: "Kannada Historical Text", desc: "Regional literary and historical knowledge.", category: "Institutional", format: "Print", access: "Public", color: "bg-accent", image: "/assets/item-7.jpg" },
    { title: "Epigraphia Carnatica Volume", desc: "Inscriptions and epigraphic records.", category: "Classification", format: "Print", access: "Public", color: "bg-accent", image: "/assets/item-8.jpg" },
    { title: "Inscription Photograph", desc: "Preserved through scholarly archival practices.", category: "Institutional", format: "Visual", access: "Public", color: "bg-accent", image: "/assets/item-9.jpg" },
    { title: "Historical Map of Bengaluru", desc: "Geographical organisation of the region.", category: "Classification", format: "Visual", access: "Public", color: "bg-accent", image: "/assets/item-10.jpg" },
    { title: "Archaeological Report", desc: "Documenting archaeological sites or objects.", category: "Classification", format: "Document", access: "Public", color: "bg-accent", image: "/assets/item-11.jpg" },
    { title: "Historical Gazetteer", desc: "Administrative information about a region.", category: "Classification", format: "Print", access: "Public", color: "bg-accent", image: "/assets/item-12.jpg" },
    { title: "Old Newspaper Record", desc: "Documenting a historical event or local issue.", category: "Counter-Archive", format: "Print", access: "Public", color: "bg-green-500", image: "/assets/item-13.jpg" },
    { title: "Historical Photograph", desc: "Event or place connected to Karnataka.", category: "Institutional", format: "Visual", access: "Public", color: "bg-accent", image: "/assets/item-14.jpg" },
    { title: "Mythic Society Building", desc: "Documentation of the physical archival space.", category: "Institutional", format: "Visual", access: "Public", color: "bg-accent", image: "/assets/item-15.jpg" },
    { title: "Library Classification Label", desc: "How materials are physically arranged.", category: "Classification", format: "Object", access: "Public", color: "bg-accent", image: "/assets/item-16.jpg" },
    { title: "Old Dictionary/Encyclopaedia", desc: "How knowledge was organised earlier.", category: "Classification", format: "Print", access: "Public", color: "bg-accent", image: "/assets/item-17.jpg" },
    { title: "Annual Institutional Record", desc: "Documenting the Society's activities.", category: "Institutional", format: "Document", access: "Public", color: "bg-accent", image: "/assets/item-18.jpg" },
    { title: "Local Bengaluru Record", desc: "Connected to the cultural development of the city.", category: "Counter-Archive", format: "Document", access: "Community", color: "bg-blue-500", image: "/assets/item-19.jpg" },
    { title: "Overlooked Archival Item", desc: "Vernacular knowledge outside the institution.", category: "Counter-Archive", format: "Object", access: "Public", color: "bg-green-500", image: "/assets/item-20.jpg" }
  ];

  // The 5 Interviews with Q&A
  const interviews = [
    { 
      name: "Dr. Venkatesh Rao", role: "Senior Archivist",
      q1: "How are the materials arranged and organised?",
      a1: "The arrangement largely follows systems established during the early 20th century. We use a traditional wooden card catalogue system divided by author, subject matter, and collection numbers. While efficient, it inherently reflects colonial taxonomic methods—categorizing vast regional histories into very rigid, predefined compartments.",
      q2: "Who decides how an old document or object should be classified?",
      a2: "Historically, the governing board made these decisions based on British archival standards. Today, it's a collaborative effort among historians, though we still struggle with items that defy standard categorization—like local folk manuscripts."
    },
    { 
      name: "Kavitha Krishnan", role: "Independent Historian",
      q1: "Are there stories or communities that are missing from the collection?",
      a1: "Absolutely. If you look at the shelves, you see grand histories of empires and census statistics. What is glaringly absent are the voices from below. The daily lives of the mill workers, domestic narratives of women, and the lived experiences of marginalized castes are rarely found in these leather-bound volumes.",
      q2: "Are there materials here that show a different side of history?",
      a2: "Yes, but you have to read between the lines. Sometimes a colonial officer's diary complaining about a local festival inadvertently gives us the only surviving record of that community's cultural practice."
    },
    { 
      name: "Suresh Kumar", role: "Digitisation Expert",
      q1: "How do you protect and preserve very old materials?",
      a1: "It is a battle against time, temperature, and humidity. We use acid-free folders and climate-controlled storage for the most fragile manuscripts. Every crease or yellowed page is a tactile record of time.",
      q2: "Are the materials being digitised or preserved online?",
      a2: "Yes, we are in a transitional phase to ensure global accessibility. However, digital preservation cannot capture the smell of the old paper or the physical weight of history you feel when you hold a century-old book."
    },
    { 
      name: "Prof. Rajendra Prasad", role: "Urban Sociologist",
      q1: "Have you ever found a material that changed the way people understood an event?",
      a1: "Indeed. We once uncovered a stack of hand-written pamphlets from the 1970s belonging to a local textile workers' union. It proved that official archives often sanitize history, ignoring the severe displacement that funded industrial booms.",
      q2: "What is the biggest challenge in preserving the archive today?",
      a2: "Beyond physical decay, the biggest challenge is ethical cataloging. How do we digitize indigenous or marginalized knowledge without stripping it of its cultural context? The challenge isn't just saving the paper; it's saving the truth of the people."
    },
    { 
      name: "Ananya Desai", role: "Cultural Studies Researcher",
      q1: "If you could change one thing about the way the archive is organised, what would it be?",
      a1: "I would decentralize the classification system. Right now, colonial-era categories dictate how we search for knowledge. I would implement a community-tagging system—a participatory archive where descendants can add their own metadata and stories."
    }
  ];

  const filteredItems = activeFilter === "All" ? archiveItems : archiveItems.filter(item => item.category === activeFilter);
  const filters = ["All", "Institutional", "Classification", "Counter-Archive"];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white pb-20">
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto border-b border-[var(--border-color)]">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent uppercase tracking-widest text-sm font-bold mb-6">
          Beyond the Shelves — A Counter-Archive
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl text-foreground font-bold leading-tight max-w-4xl"
        >
          An archive that classifies <br/>
          <span className="italic opacity-70">what</span>, but rarely <span className="italic text-accent">who</span>.
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 max-w-2xl text-lg text-foreground/80 space-y-6 leading-relaxed">
          <p>Every manuscript on the shelves of the Mythic Society is catalogued by its taxonomy. The lived experiences, the marginalized voices, and the conditions that shaped the city's history are often excluded from the official record.</p>
          <p>This counter-archive collects that second account—from workers, women, and local communities in Bengaluru—and retains it under strict consent models.</p>
        </motion.div>
      </section>

      {/* Interactive Voices Section */}
      <section id="voices" className="py-20 px-8 max-w-7xl mx-auto border-b border-[var(--border-color)]">
        <h2 className="font-serif text-4xl text-foreground mb-4">Voices from the Archive</h2>
        <p className="text-foreground/70 mb-12 max-w-2xl">Interviews conducted with archivists, historians, and researchers on the domiciliation of memory and the limits of institutional archives.</p>
        
        <div className="flex flex-col md:flex-row gap-10 min-h-[400px]">
          <div className="md:w-1/3 flex flex-col gap-3 border-r border-[var(--border-color)] pr-6">
            {interviews.map((person, index) => (
              <button 
                key={index}
                onClick={() => setActiveInterview(index)}
                className={`text-left p-4 rounded-lg transition-all duration-300 border border-transparent ${
                  activeInterview === index 
                    ? "bg-accent/10 border-accent/30 shadow-sm" 
                    : "hover:bg-foreground/5"
                }`}
              >
                <h3 className={`font-serif text-xl mb-1 ${activeInterview === index ? "text-accent" : "text-foreground"}`}>
                  {person.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-foreground/60 font-bold">{person.role}</p>
              </button>
            ))}
          </div>

          <div className="md:w-2/3 bg-card border border-[var(--border-color)] rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <span className="absolute top-4 right-8 font-serif text-8xl text-accent opacity-10">"</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInterview}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="mb-10">
                  <p className="text-sm font-bold tracking-wider text-accent mb-3 uppercase">Question</p>
                  <p className="text-xl font-serif text-foreground leading-snug">"{interviews[activeInterview].q1}"</p>
                  <div className="mt-4 pl-4 border-l-2 border-accent/50">
                    <p className="text-foreground/80 leading-relaxed">{interviews[activeInterview].a1}</p>
                  </div>
                </div>

                {interviews[activeInterview].q2 && (
                  <div>
                    <p className="text-sm font-bold tracking-wider text-accent mb-3 uppercase">Question</p>
                    <p className="text-xl font-serif text-foreground leading-snug">"{interviews[activeInterview].q2}"</p>
                    <div className="mt-4 pl-4 border-l-2 border-accent/50">
                      <p className="text-foreground/80 leading-relaxed">{interviews[activeInterview].a2}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Interactive Image Gallery */}
      <section id="archive" className="py-20 px-8 max-w-7xl mx-auto border-b border-[var(--border-color)]">
        <h2 className="font-serif text-4xl text-foreground mb-8">The Collection</h2>
        
        <div className="flex flex-wrap gap-4 mb-12 items-center">
          <span className="text-sm text-foreground/60 mr-2 uppercase tracking-widest font-semibold">Filter by Theme:</span>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-accent border-accent text-white shadow-lg" 
                  : "border-[var(--border-color)] text-foreground/70 hover:border-foreground/30 hover:bg-foreground/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                layoutId={`card-${item.title}`} // Connects the grid item to the Modal
                onClick={() => setSelectedId(item)} // Opens the Modal
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-[var(--border-color)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="h-48 w-full overflow-hidden bg-foreground/5 relative border-b border-[var(--border-color)]">
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Missing' }} 
                   />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-foreground/70 mb-8 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
                
                <div className="p-6 pt-0 mt-auto flex justify-between items-center text-[10px] text-foreground/60 uppercase tracking-widest font-bold">
                  <span>{item.format}</span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${item.color} shadow-sm`}></span>
                    {item.access}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Access & Ethics Section */}
      <section id="ethics" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-foreground mb-6">Who can see what</h2>
        <p className="text-foreground/70 max-w-2xl mb-16 text-lg leading-relaxed">Not a public-or-private switch. Access follows the relationship a person has to the material, adhering to community-based participatory research protocols.</p>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="border-t-4 border-green-500/70 pt-6">
            <h3 className="font-serif text-2xl text-foreground mb-4">Public</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">Institutional records and anonymized oral histories. Edited with the contributor's approval to remove sensitive identifying detail. Open to any visitor.</p>
          </div>
          <div className="border-t-4 border-blue-500/70 pt-6">
            <h3 className="font-serif text-2xl text-foreground mb-4">Community</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">Fuller, named accounts visible only to the contributing community, family, and anyone they authorize. Material can move outward later, never automatically.</p>
          </div>
          <div className="border-t-4 border-red-500/70 pt-6">
            <h3 className="font-serif text-2xl text-foreground mb-4">Research</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">Fragile manuscripts or deeply personal histories available only to accredited researchers under an ethics agreement a community advisory board can revoke.</p>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg shadow-inner">
          <p className="text-sm text-foreground/80 leading-relaxed mb-4 font-medium">
            Consent to record an oral history is not consent to have a life permanently publicized. Participation here is a separate agreement, opt-in, open to anyone connected to Bengaluru's marginalized history — and it can be narrowed or withdrawn at any point.
          </p>
          <p className="text-sm text-foreground/80 leading-relaxed font-medium">
            An advisory board of local historians, community members, and caregivers holds standing authority to restrict or remove contributed material.
          </p>
        </div>
      </section>

      {/* THE EXPANDING MODAL OVERLAY */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-md cursor-pointer" onClick={() => setSelectedId(null)}>
            <motion.div 
              layoutId={`card-${selectedId.title}`}
              className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl cursor-default flex flex-col md:flex-row border border-[var(--border-color)]"
              onClick={(e) => e.stopPropagation()} // Stop click from closing when clicking inside card
            >
              {/* Modal Image */}
              <div className="md:w-1/2 bg-foreground/5 h-64 md:h-auto relative">
                <img src={selectedId.image} alt={selectedId.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=Image+Missing' }} />
              </div>
              
              {/* Modal Text & Metadata */}
              <div className="p-8 md:p-12 flex flex-col md:w-1/2 justify-center">
                <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2">{selectedId.category}</span>
                <h3 className="font-serif text-3xl text-foreground mb-4">{selectedId.title}</h3>
                <p className="text-foreground/80 mb-8 leading-relaxed text-lg">{selectedId.desc}</p>
                
                <div className="mt-auto space-y-4 border-t border-[var(--border-color)] pt-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/50 uppercase tracking-wider font-bold">Format</span>
                    <span className="text-foreground font-medium">{selectedId.format}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/50 uppercase tracking-wider font-bold">Access Tier</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${selectedId.color}`}></span>
                      <span className="text-foreground font-medium">{selectedId.access}</span>
                    </div>
                  </div>
                </div>
                
                <button onClick={() => setSelectedId(null)} className="mt-8 bg-foreground/10 hover:bg-foreground/20 text-foreground py-3 rounded-lg transition-colors font-medium w-full text-center tracking-widest uppercase text-sm">
                  Close Record
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}