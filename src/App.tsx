import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Ghost, 
  Check, 
  Shield, 
  Zap, 
  CreditCard, 
  MessageCircle, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  Instagram,
  Phone,
  Heart
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const plans = [
    {
      name: "1 Mois",
      price: "1 500",
      duration: "DA / mois",
      features: [
        "Badge Snapchat+",
        "Voir qui a re-visionné vos Snaps",
        "Personnalisation de l'icône de l'app",
        "Épingler votre #1 Best Friend",
        "Arrière-plans Bitmoji exclusifs"
      ],
      popular: false,
      delay: 0.1
    },
    {
      name: "6 Mois",
      price: "8 000",
      duration: "DA / 6 mois",
      features: [
        "Toutes les fonctionnalités 1 Mois",
        "Économie de 1000 DA",
        "Priorité sur les réponses aux Stories",
        "Boost de visibilité",
        "Support prioritaire"
      ],
      popular: true,
      delay: 0.2
    },
    {
      name: "12 Mois",
      price: "15 000",
      duration: "DA / an",
      features: [
        "Toutes les fonctionnalités 6 Mois",
        "Économie de 3000 DA",
        "Accès anticipé aux nouvelles options",
        "Statut VIP",
        "Cadeau surprise"
      ],
      popular: false,
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-snap-pink selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-snap-pink p-2 rounded-xl relative">
                <Ghost className="w-8 h-8 text-white" strokeWidth={2.5} />
                <Heart className="absolute -top-1 -right-1 w-4 h-4 text-snap-pink-dark fill-snap-pink-dark transform rotate-12" />
              </div>
              <span className="font-bold text-2xl tracking-tight">SnapPlus<span className="text-snap-pink drop-shadow-sm">DZ</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-snap-black font-medium transition-colors">Avantages</a>
              <a href="#pricing" className="text-gray-600 hover:text-snap-black font-medium transition-colors">Tarifs</a>
              <a href="#payment" className="text-gray-600 hover:text-snap-black font-medium transition-colors">Paiement</a>
              <a href="#pricing" className="bg-snap-black text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
                Acheter maintenant
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-xl"
          >
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900">Avantages</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900">Tarifs</a>
            <a href="#payment" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900">Paiement</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-snap-pink text-white px-6 py-3 rounded-xl font-bold mt-4">
              Acheter maintenant
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snap-pink/20 text-snap-pink-dark font-semibold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-snap-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-snap-pink-dark"></span>
              </span>
              Disponible en Algérie
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Débloquez <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-snap-pink to-snap-pink-dark">Snapchat+</span><br/>
              en quelques clics.
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Profitez des fonctionnalités exclusives de Snapchat+ en Algérie. Paiement facile par BaridiMob, CCP ou Paysera. Activation rapide et sécurisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="inline-flex justify-center items-center gap-2 bg-snap-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-snap-pink-dark transition-all hover:scale-105 active:scale-95 shadow-lg shadow-pink-200">
                Voir les offres <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="inline-flex justify-center items-center gap-2 bg-gray-100 text-snap-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all">
                Comment ça marche ?
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                ))}
              </div>
              <div className="text-sm font-medium text-gray-600">
                <div className="flex text-snap-pink">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                +500 clients satisfaits en Algérie
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-snap-pink rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-snap-black rounded-[3rem] p-8 shadow-2xl border-8 border-gray-900 w-full max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
              <div className="bg-gray-900 rounded-2xl p-6 h-[450px] flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-snap-pink/20 to-transparent"></div>
                <div className="bg-snap-pink p-4 rounded-2xl relative z-10 shadow-xl shadow-snap-pink-dark/20">
                  <div className="relative">
                    <Ghost className="w-16 h-16 text-white" strokeWidth={2} />
                    <Heart className="absolute -top-1 -right-2 w-8 h-8 text-snap-pink-dark fill-snap-pink-dark transform rotate-12" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-2xl mb-2">Snapchat+ Activé</h3>
                  <p className="text-gray-400 text-sm">Bienvenue dans le club VIP</p>
                </div>
                <div className="w-full space-y-3 relative z-10 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 bg-gray-800 rounded-xl w-full animate-pulse flex items-center px-4 gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                      <div className="h-3 bg-gray-700 rounded-full w-24"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-gray-600 text-lg">Le service le plus fiable en Algérie pour obtenir votre abonnement Snapchat+ sans carte bancaire internationale.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-snap-pink-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Activation Rapide</h3>
              <p className="text-gray-600">Votre abonnement est activé en moins de 15 minutes après la confirmation de votre paiement.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Sécurisé</h3>
              <p className="text-gray-600">Méthode officielle et légale. Aucun risque de bannissement pour votre compte Snapchat.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Paiement Local</h3>
              <p className="text-gray-600">Payez facilement avec BaridiMob, CCP, ou même de main en main selon votre région.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Tarifs</h2>
          <p className="text-gray-600 text-lg">Choisissez l'abonnement qui vous convient. Prix fixes, sans frais cachés.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay }}
              className={`relative bg-white rounded-[2.5rem] p-8 border-2 ${plan.popular ? 'border-snap-pink shadow-2xl shadow-pink-100' : 'border-gray-100 shadow-lg'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-snap-pink text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
                  Le plus populaire
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 font-medium">{plan.duration}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 bg-pink-100 p-1 rounded-full shrink-0">
                      <Check className="w-4 h-4 text-snap-pink-dark" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/213000000000" // Placeholder WhatsApp link
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex justify-center items-center gap-2 ${
                  plan.popular 
                    ? 'bg-snap-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95' 
                    : 'bg-gray-100 text-snap-black hover:bg-gray-200'
                }`}
              >
                Commander <MessageCircle className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section id="payment" className="py-20 bg-snap-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Moyens de paiement acceptés</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Alg%C3%A9rie_Poste_logo.svg/1200px-Alg%C3%A9rie_Poste_logo.svg.png" alt="CCP" className="object-contain" />
              </div>
              <span className="font-medium">CCP / BaridiMob</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-4">
                <span className="text-blue-600 font-black text-xl">Paysera</span>
              </div>
              <span className="font-medium">Paysera (Euro)</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-4">
                <span className="text-green-500 font-black text-xl">Wise</span>
              </div>
              <span className="font-medium">Wise</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-4">
                <span className="text-yellow-500 font-black text-xl">Binance</span>
              </div>
              <span className="font-medium">USDT / Crypto</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-gray-600 text-lg">Un processus simple et transparent en 3 étapes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-snap-black text-snap-pink rounded-full flex items-center justify-center text-2xl font-black mb-6 border-4 border-white shadow-lg">1</div>
              <h3 className="text-xl font-bold mb-3">Contactez-nous</h3>
              <p className="text-gray-600">Envoyez-nous un message sur WhatsApp ou Instagram avec l'offre choisie.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-snap-black text-snap-pink rounded-full flex items-center justify-center text-2xl font-black mb-6 border-4 border-white shadow-lg">2</div>
              <h3 className="text-xl font-bold mb-3">Paiement</h3>
              <p className="text-gray-600">Effectuez le paiement via BaridiMob, CCP ou Paysera et envoyez le reçu.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-snap-pink text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 border-4 border-white shadow-lg">3</div>
              <h3 className="text-xl font-bold mb-3">Activation</h3>
              <p className="text-gray-600">Recevez votre lien d'activation officiel Snapchat+ en quelques minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-snap-pink rounded-[3rem] p-8 md:p-16 text-center shadow-2xl shadow-pink-200">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Prêt à upgrader votre Snap ?</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">
            Rejoignez des centaines d'Algériens qui profitent déjà des fonctionnalités exclusives de Snapchat+.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/213000000000" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-snap-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105">
              <MessageCircle className="w-5 h-5" /> Commander sur WhatsApp
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-white text-snap-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105">
              <Instagram className="w-5 h-5" /> Nous DM sur Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Ghost className="w-6 h-6 text-snap-black" strokeWidth={2.5} />
                <Heart className="absolute -top-1 -right-1 w-3 h-3 text-snap-pink-dark fill-snap-pink-dark transform rotate-12" />
              </div>
              <span className="font-bold text-xl tracking-tight">SnapPlus<span className="text-snap-pink">DZ</span></span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-snap-black transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-snap-black transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-snap-black transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} SnapPlus DZ. Tous droits réservés.</p>
            <p className="text-xs text-center md:text-right max-w-md">
              Ce site n'est pas affilié, associé, autorisé, approuvé par, ou d'aucune façon officiellement lié à Snap Inc. ou Snapchat.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
