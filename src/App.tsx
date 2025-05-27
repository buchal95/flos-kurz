import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaLeaf, FaHeart, FaBug, FaSun, FaHome, FaSeedling } from 'react-icons/fa';

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-flos-dark">Zahradnictví Flos</div>
        <div className="text-right text-sm text-flos-muted">
          <div>Pěstujeme rostliny od roku 1991</div>
          <a href="mailto:info@zahradnictvi-flos.cz" className="text-flos-light hover:text-flos-dark transition-colors">
            info@zahradnictvi-flos.cz
          </a>
        </div>
      </div>
    </div>
  </header>
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
          <h1 className="text-4xl md:text-5xl font-bold text-flos-dark mb-6">
            Jak založit vyvýšený záhon za 10 minut
          </h1>
          <p className="text-xl text-flos-gray mb-8">
            Chcete si vypěstovat vlastní zeleninu, ale nevíte, kde začít? 
            Ukážeme vám to jednoduše a prakticky.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Video návod krok za krokem',
              'Vhodné pro úplné začátečníky',
              'Založíte záhon, který vydrží roky',
              'Kombinace zeleniny s bylinkami pro zdravou úrodu'
            ].map((benefit, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-3 text-flos-gray"
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
              <span className="bg-flos-light text-white px-2 py-1 rounded text-sm">-40 %</span>
            </div>
            <button className="btn-primary w-full mb-4">
              Objednat videokurz
            </button>
            <p className="text-sm text-flos-muted text-center">
              Přístup ke kurzu získáte ihned po zaplacení
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 aspect-video flex items-center justify-center"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-flos-light rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLeaf className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Náhled videokurzu</h3>
            <p className="text-flos-muted">10 minut praktických rad</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const benefits = [
    { icon: <FaLeaf />, title: 'Lepší půda', description: 'Namíchejte ideální substrát bez jílu či písku.' },
    { icon: <FaHeart />, title: 'Šetří záda', description: 'Praktická výška 50-60 cm pro pohodlnou práci.' },
    { icon: <FaBug />, title: 'Méně škůdců', description: 'Slimáci se hůř dostanou a ochráníte i před hraboši.' },
    { icon: <FaSun />, title: 'Dřívější úroda', description: 'Rychle se prohřeje půda, můžete sázet dřív.' },
    { icon: <FaHome />, title: 'Vejde se kamkoliv', description: 'Na dvorek, terasu i mezi dlažbu.' },
    { icon: <FaSeedling />, title: 'Méně plevele', description: 'Semen plevele zasáhne do záhonu méně.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-flos-dark mb-12">
          Proč jsou vyvýšené záhony tak oblíbené?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-flos-light text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-flos-muted">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
    </div>
  );
};

export default App;