import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaLeaf, FaHeart, FaBug, FaSun, FaHome, FaSeedling, FaPlay, FaShieldAlt, FaClock, FaTools, FaSeedling as FaPlant, FaWater, FaArrowRight } from 'react-icons/fa';

const Header = () => (
  <motion.header 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="bg-white shadow-sm sticky top-0 z-40"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaLeaf className="text-flos-light text-2xl" />
          <div className="text-2xl font-bold text-flos-dark">Zahradnictví Flos</div>
        </div>
        <div className="text-right">
          <a href="mailto:info@zahradnictvi-flos.cz" 
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-flos-dark hover:bg-green-100 transition-colors">
            <span className="hidden sm:inline">Napište nám:</span>
            <span className="font-medium">info@zahradnictvi-flos.cz</span>
          </a>
        </div>
      </div>
    </div>
  </motion.header>
);

const FixedCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-lg z-50 py-4 transform translate-y-0 transition-transform">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="hidden sm:block">
        <div className="font-semibold text-flos-dark">Videokurz: Jak založit vyvýšený záhon</div>
        <div className="text-flos-light">Pouze 299 Kč (sleva 40%)</div>
      </div>
      <a 
        href="https://www.forendors.cz/p/809432646554884130"
        className="btn-primary flex items-center gap-2"
      >
        <span>Začít s kurzem</span>
        <FaPlay className="text-sm" />
      </a>
    </div>
  </div>
);

const Hero = () => (
  <section className="bg-gradient-to-b from-green-50 to-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-flos-dark mb-6"
          >
            <FaShieldAlt className="text-flos-light" />
            <span>100% záruka spokojenosti</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-flos-dark mb-6">
            Vypěstujte si vlastní <span className="text-flos-light">zdravou zeleninu</span>
          </h1>
          <p className="text-xl text-flos-gray mb-8">
            Naučíme vás, jak si založit vyvýšený záhon krok za krokem. 
            Jednoduše, prakticky a s radostí ze zahradničení.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Kompletní video návod pro začátečníky',
              'Tipy pro výběr rostlin a jejich kombinace',
              'Péče o záhon během celého roku',
              'Bonus: Plán výsadby pro celoroční sklizeň'
            ].map((benefit, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-3 text-flos-gray bg-white p-3 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FaCheck className="text-flos-light flex-shrink-0" />
                {benefit}
              </motion.li>
            ))}
          </ul>
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-sm">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-flos-muted line-through text-lg">499 Kč</span>
              <span className="text-3xl font-bold text-flos-dark">299 Kč</span>
              <span className="bg-flos-light text-white px-3 py-1 rounded-full text-sm font-medium">-40 %</span>
            </div>
            <a 
              href="https://www.forendors.cz/p/809432646554884130"
              className="btn-primary w-full mb-4 flex items-center justify-center gap-2"
            >
              <span>Začít s kurzem</span>
              <FaPlay className="text-sm" />
            </a>
            <p className="text-sm text-flos-muted text-center">
              Okamžitý přístup po zaplacení
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 aspect-video">
            <img 
              src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg" 
              alt="Vyvýšený záhon" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-lg hover:scale-105 transition-transform">
                <FaPlay className="text-flos-light text-4xl" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const benefits = [
    { 
      icon: <FaLeaf />, 
      title: 'Zdravější půda', 
      description: 'Vytvořte ideální prostředí pro růst vašich rostlin bez chemie.' 
    },
    { 
      icon: <FaHeart />, 
      title: 'Pohodlné pěstování', 
      description: 'Perfektní výška pro práci bez bolesti zad.' 
    },
    { 
      icon: <FaBug />, 
      title: 'Přirozená ochrana', 
      description: 'Minimalizujte problémy se škůdci přirozenou cestou.' 
    },
    { 
      icon: <FaSun />, 
      title: 'Rychlejší růst', 
      description: 'Začněte pěstovat dříve díky lepšímu prohřívání.' 
    },
    { 
      icon: <FaHome />, 
      title: 'Flexibilní umístění', 
      description: 'Ideální řešení pro zahradu i městské prostředí.' 
    },
    { 
      icon: <FaSeedling />, 
      title: 'Minimální údržba', 
      description: 'Ušetřete čas díky menšímu výskytu plevele.' 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-flos-dark mb-6">
            Proč si zamilujete vyvýšené záhony?
          </h2>
          <p className="text-flos-gray text-lg">
            Objevte všechny výhody, které vám přinese pěstování ve vyvýšeném záhonu.
            Jednoduchá cesta k vlastní bio zelenině.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-flos-light text-3xl mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-flos-dark">{benefit.title}</h3>
              <p className="text-flos-gray">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const lessons = [
    {
      title: 'Úvod a výhody',
      duration: '1 min',
      icon: <FaLeaf />,
      topics: [
        'Proč vyvýšený záhon',
        'Co přesně tenhle kurz nabídne'
      ]
    },
    {
      title: 'Výběr místa a materiálu',
      duration: '2 min',
      icon: <FaHome />,
      topics: [
        'Kam postavit (slunce, stín, vítr)',
        'Z čeho ho postavit (dřevo vs. cihly vs. palety)'
      ]
    },
    {
      title: 'Rám a drenáž',
      duration: '2,5 min',
      icon: <FaTools />,
      topics: [
        'Stavba rámu krok za krokem',
        'Spodní vrstva: drenáž'
      ]
    },
    {
      title: 'Náplň a finální zemina',
      duration: '2 min',
      icon: <FaPlant />,
      topics: [
        'Vrstvení kompostu, listovky, substrátu',
        'Základ hnojení'
      ]
    },
    {
      title: 'Výsadba a závěr',
      duration: '2,5 min',
      icon: <FaWater />,
      topics: [
        'Tip na rychle rostoucí plodiny',
        'Základní rozestupy a zálivka'
      ]
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-flos-dark mb-6">
            Co se v kurzu naučíte?
          </h2>
          <p className="text-flos-gray text-lg">
            Kompletní video průvodce založením vyvýšeného záhonu v 5 praktických lekcích
          </p>
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="bg-green-100 p-4 rounded-lg text-flos-light text-2xl">
                  {lesson.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-flos-dark">{lesson.title}</h3>
                    <div className="flex items-center gap-1 text-flos-muted">
                      <FaClock className="text-sm" />
                      <span className="text-sm">{lesson.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {lesson.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-flos-gray">
                        <FaArrowRight className="text-flos-light text-sm flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://www.forendors.cz/p/809432646554884130"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Získat přístup ke kurzu</span>
            <FaPlay className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      <Hero />
      <Benefits />
      <Curriculum />
      <FixedCTA />
    </div>
  );
};

export default App;