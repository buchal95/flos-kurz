import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaLeaf, FaHeart, FaBug, FaSun, FaHome, FaSeedling, FaPlay, FaShieldAlt, FaClock, FaTools, FaSeedling as FaPlant, FaWater, FaArrowRight, FaStar, FaLock, FaInstagram, FaFacebook, FaCreditCard, FaDownload, FaQuestionCircle } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Header = () => (
  <motion.header 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="bg-white/80 backdrop-blur-sm shadow-soft sticky top-0 z-40"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaLeaf className="text-flos-light text-2xl" />
          <div className="text-2xl font-bold text-flos-dark">Zahradnictví Flos</div>
        </div>
      </div>
    </div>
  </motion.header>
);

const FixedCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-hover z-50 py-4 transform translate-y-0 transition-transform">
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

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="section-padding bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-flos-dark mb-8"
            >
              <FaShieldAlt className="text-flos-light" />
              <span>100% záruka spokojenosti</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-flos-dark mb-8 leading-tight">
              Vypěstujte si vlastní <span className="text-flos-light">zdravou zeleninu</span>
            </h1>
            <p className="text-xl text-flos-gray mb-8 leading-relaxed">
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
                  className="flex items-center gap-3 text-flos-gray card p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaCheck className="text-flos-light flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="card p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          </motion.div>
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div 
              className="card p-8 aspect-video overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg" 
                alt="Vyvýšený záhon" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-hover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay className="text-flos-light text-4xl" />
                </motion.button>
              </div>
            </motion.div>
            <p className="text-center text-flos-gray mt-4">
              Podívejte se na ukázku: 30 s z lekce „Jak naplnit záhon".
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl font-bold text-flos-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Proč si zamilujete vyvýšené záhony?
          </motion.h2>
          <motion.p 
            className="text-flos-gray text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Objevte všechny výhody, které vám přinese pěstování ve vyvýšeném záhonu.
            Jednoduchá cesta k vlastní bio zelenině.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="card p-8 group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="text-flos-light text-3xl mb-4"
                animate={{ rotate: inView ? 360 : 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-flos-dark">{benefit.title}</h3>
              <p className="text-flos-gray leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Instructor = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <h2 className="text-3xl font-bold text-flos-dark">O Václavu Maříkovi</h2>
            <p className="text-lg text-flos-gray leading-relaxed">
              Václav Mařík je zakladatel a majitel Zahradnictví Flos, které funguje od roku 1991.
            </p>
            <p className="text-lg text-flos-gray leading-relaxed">
              Během více než 33 let praxe vypěstoval přes milion rostlin ročně a pomohl tisícům začínajících i pokročilých zahrádkářů.
            </p>
            <p className="text-lg text-flos-gray leading-relaxed">
              Ve videokurzu sdílí ryze praktické postupy, které sám ověřil ve své produkci.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="relative"
          >
            <motion.div 
              className="card overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg" 
                alt="Zahradník při práci" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Bonus = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl font-bold text-flos-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Bonusové výhody
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="card p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-3xl text-flos-light mb-6">
              <FaDownload />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-flos-dark">
              Plán pěstebního kalendáře
            </h3>
            <p className="text-flos-gray mb-4 leading-relaxed">
              Ke stažení zdarma: „Plán pěstebního kalendáře" (A4), který ti pomůže naplánovat setbu a sklizeň po celý rok.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl font-bold text-flos-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Co říkají naši zákazníci
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="card p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex text-flos-light mb-6 gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xl" />
              ))}
            </div>
            <p className="text-lg text-flos-gray mb-6 leading-relaxed">
              „Tenhle kurz mi ukázal, jak jednoduše začít. Už po pár týdnech mám na záhoně první ředkvičky!"
            </p>
            <p className="font-medium text-flos-dark">– Jana, Brno</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="card p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex text-flos-light mb-6 gap-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-xl" />
              ))}
              <FaStar className="text-gray-300 text-xl" />
            </div>
            <p className="text-lg text-flos-gray mb-6 leading-relaxed">
              „Skvělý přístup, praktické tipy a okamžitý výsledek. Doporučuji všem, kteří chtějí pěstovat bez zbytečných komplikací."
            </p>
            <p className="font-medium text-flos-dark">– Petr, Praha</p>
          </motion.div>
        </div>
        <motion.div 
          className="flex justify-center gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <a href="https://instagram.com/zahradnictviflos" className="text-flos-dark hover:text-flos-light transition-colors flex items-center gap-2">
            <FaInstagram className="text-2xl" />
            <span>@zahradnictviflos</span>
          </a>
          <a href="https://facebook.com/ZahradnictviFlos" className="text-flos-dark hover:text-flos-light transition-colors flex items-center gap-2">
            <FaFacebook className="text-2xl" />
            <span>Zahradnictví Flos</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Guarantee = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="card p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="text-4xl text-flos-light mb-8"
              animate={{ rotate: inView ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaShieldAlt />
            </motion.div>
            <h2 className="text-2xl font-bold text-flos-dark mb-4">30 dní na vrácení peněz</h2>
            <p className="text-lg text-flos-gray mb-8 leading-relaxed">
              Pokud kurz nesplní vaše očekávání, napište nám do 30 dní a my vám bez otázek vrátíme peníze.
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <FaCreditCard className="text-4xl text-flos-muted" title="Visa" />
              <FaCreditCard className="text-4xl text-flos-muted" title="Mastercard" />
              <FaCreditCard className="text-4xl text-flos-muted" title="Maestro" />
              <FaCreditCard className="text-4xl text-flos-muted" title="Bankovní převod" />
            </div>
            <div className="flex items-center justify-center gap-2 text-flos-muted">
              <FaLock />
              <span>Bezpečná platba SSL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'Jak kurz funguje technicky?',
      answer: 'Kurz je dostupný jako online video, ke kterému se přihlásíte přes libovolný prohlížeč. Žádná instalace, žádné aplikace – stačí internet a můžete sledovat opakovaně.'
    },
    {
      question: 'Co když nemám vlastní zahradu?',
      answer: 'Kurz můžete využít i na balkon, terasu nebo do vyvýšeného záhonu v květináči. Všechny postupy fungují i v menších prostorech.'
    },
    {
      question: 'Jak dlouho mám k videu přístup?',
      answer: 'Přístup je neomezený – video si můžete pouštět kdykoli a kolikrát chcete.'
    },
    {
      question: 'Potřebuji nějaké speciální nástroje?',
      answer: 'Stačí základní zahradnické nářadí: lopatka, hrábě, nůžky a rukavice. Detailní seznam najdete ve staženém PDF Kalendáře.'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl font-bold text-flos-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Často kladené otázky
          </motion.h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="card p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-4">
                <FaQuestionCircle className="text-flos-light text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-flos-dark mb-3">{faq.question}</h3>
                  <p className="text-flos-gray leading-relaxed">{faq.answer}</p>
                </div>
              </div>
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl font-bold text-flos-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Co se v kurzu naučíte?
          </motion.h2>
          <motion.p 
            className="text-flos-gray text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Kompletní video průvodce založením vyvýšeného záhonu v 5 praktických lekcích
          </motion.p>
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="card p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-green-100 p-4 rounded-xl text-flos-light text-2xl">
                  {lesson.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
      <Instructor />
      <Curriculum />
      <Bonus />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <FixedCTA />
    </div>
  );
};

export default App;