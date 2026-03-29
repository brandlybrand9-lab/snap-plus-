import React, { useState, useEffect } from 'react';
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
  Heart,
  Sun,
  Moon,
  Globe
} from 'lucide-react';

type Language = 'fr' | 'ar';

const translations = {
  fr: {
    nav: { features: "Avantages", pricing: "Tarifs", payment: "Paiement", buy: "Acheter maintenant" },
    hero: {
      badge: "Disponible en Algérie",
      title1: "Débloquez",
      title2: "en quelques clics.",
      desc: "Profitez des fonctionnalités exclusives de Snapchat+ en Algérie. Paiement facile par BaridiMob, CCP ou Paysera. Activation rapide et sécurisée.",
      btnOffers: "Voir les offres",
      btnHow: "Comment ça marche ?",
      clients: "+500 clients satisfaits en Algérie",
      cardTitle: "Snapchat+ Activé",
      cardDesc: "Bienvenue dans le club VIP"
    },
    features: {
      title: "Pourquoi nous choisir ?",
      desc: "Le service le plus fiable en Algérie pour obtenir votre abonnement Snapchat+ sans carte bancaire internationale.",
      f1Title: "Activation Rapide",
      f1Desc: "Votre abonnement est activé en moins de 15 minutes après la confirmation de votre paiement.",
      f2Title: "100% Sécurisé",
      f2Desc: "Méthode officielle et légale. Aucun risque de bannissement pour votre compte Snapchat.",
      f3Title: "Paiement Local",
      f3Desc: "Payez facilement avec BaridiMob, CCP, ou même de main en main selon votre région."
    },
    pricing: {
      title: "Nos Tarifs",
      desc: "Choisissez l'abonnement qui vous convient. Prix fixes, sans frais cachés.",
      popular: "Le plus populaire",
      month: "Mois",
      currency: "DA",
      orderInsta: "Commander sur Insta",
      orderSnap: "Commander sur Snap",
      copied: "Message copié !",
      msgTemplate: "Bonjour, je souhaite commander l'offre Snapchat+ :",
      plans: {
        p1: { name: "1 Mois iPhone", f1: "Activation sur iPhone", f2: "Badge Snapchat+", f3: "Voir qui a re-visionné vos Snaps", f4: "Personnalisation de l'icône" },
        p2: { name: "3 Mois Cadeau", f1: "Envoyé sous forme de lien cadeau", f2: "Activation sans mot de passe", f3: "Idéal pour offrir à un ami", f4: "Toutes les options premium" },
        p3: { name: "6 Mois Cadeau", f1: "Envoyé sous forme de lien cadeau", f2: "Activation sans mot de passe", f3: "Économie garantie", f4: "Support prioritaire" },
        p4: { name: "12 Mois Android", f1: "Activation sur Android", f2: "1 an de tranquillité", f3: "Toutes les options premium", f4: "Meilleur prix Android" },
        p5: { name: "12 Mois iPhone", f1: "Activation sur iPhone", f2: "1 an de tranquillité", f3: "Toutes les options premium", f4: "Meilleur prix iPhone" },
        p6: { name: "12 Mois Cadeau", f1: "Le cadeau ultime (1 an)", f2: "Activation sans mot de passe", f3: "Statut VIP garanti", f4: "Support prioritaire 24/7" }
      }
    },
    payment: {
      title: "Moyens de paiement acceptés",
      flexyDesc: "(Mobilis/Djezzy/Ooredoo)"
    },
    how: {
      title: "Comment ça marche ?",
      desc: "Un processus simple et transparent en 3 étapes.",
      s1Title: "Contactez-nous",
      s1Desc: "Envoyez-nous un message sur Instagram ou Snapchat avec l'offre choisie.",
      s2Title: "Paiement",
      s2Desc: "Effectuez le paiement via BaridiMob, Flexy, Binance ou RedotPay et envoyez le reçu.",
      s3Title: "Activation",
      s3Desc: "Recevez votre lien d'activation officiel Snapchat+ en quelques minutes."
    },
    cta: {
      title: "Prêt à upgrader votre Snap ?",
      desc: "Rejoignez des centaines d'Algériens qui profitent déjà des fonctionnalités exclusives de Snapchat+.",
      insta: "Commander sur Instagram",
      snap: "Commander sur Snapchat",
      note: "Le message de commande sera copié automatiquement dans votre presse-papiers.",
      msgTemplate: "Bonjour, je souhaite commander un abonnement Snapchat+."
    },
    footer: {
      rights: "Tous droits réservés.",
      disclaimer: "Ce site n'est pas affilié, associé, autorisé, approuvé par, ou d'aucune façon officiellement lié à Snap Inc. ou Snapchat."
    }
  },
  ar: {
    nav: { features: "المميزات", pricing: "الأسعار", payment: "الدفع", buy: "اشترِ الآن" },
    hero: {
      badge: "متوفر في الجزائر",
      title1: "احصل على",
      title2: "في بضع نقرات.",
      desc: "استمتع بميزات Snapchat+ الحصرية في الجزائر. دفع سهل عبر بريدي موب، CCP أو Paysera. تفعيل سريع وآمن.",
      btnOffers: "شاهد العروض",
      btnHow: "كيف تعمل؟",
      clients: "+500 عميل راضٍ في الجزائر",
      cardTitle: "تم تفعيل Snapchat+",
      cardDesc: "مرحباً بك في نادي VIP"
    },
    features: {
      title: "لماذا تختارنا؟",
      desc: "الخدمة الأكثر موثوقية في الجزائر للحصول على اشتراك Snapchat+ بدون بطاقة بنكية دولية.",
      f1Title: "تفعيل سريع",
      f1Desc: "يتم تفعيل اشتراكك في أقل من 15 دقيقة بعد تأكيد الدفع.",
      f2Title: "آمن 100%",
      f2Desc: "طريقة رسمية وقانونية. لا يوجد خطر حظر حساب Snapchat الخاص بك.",
      f3Title: "دفع محلي",
      f3Desc: "ادفع بسهولة عبر بريدي موب، CCP، أو حتى يداً بيد حسب منطقتك."
    },
    pricing: {
      title: "أسعارنا",
      desc: "اختر الاشتراك الذي يناسبك. أسعار ثابتة، بدون رسوم خفية.",
      popular: "الأكثر شعبية",
      month: "شهر",
      currency: "د.ج",
      orderInsta: "اطلب عبر إنستغرام",
      orderSnap: "اطلب عبر سناب شات",
      copied: "تم نسخ الرسالة!",
      msgTemplate: "مرحباً، أود طلب عرض Snapchat+ :",
      plans: {
        p1: { name: "شهر واحد آيفون", f1: "تفعيل على آيفون", f2: "شارة Snapchat+", f3: "معرفة من أعاد مشاهدة قصصك", f4: "تخصيص أيقونة التطبيق" },
        p2: { name: "3 أشهر هدية", f1: "يُرسل كرابط هدية", f2: "تفعيل بدون كلمة مرور", f3: "مثالي كهدية لصديق", f4: "جميع الميزات المميزة" },
        p3: { name: "6 أشهر هدية", f1: "يُرسل كرابط هدية", f2: "تفعيل بدون كلمة مرور", f3: "توفير مضمون", f4: "دعم ذو أولوية" },
        p4: { name: "12 شهر أندرويد", f1: "تفعيل على أندرويد", f2: "سنة من راحة البال", f3: "جميع الميزات المميزة", f4: "أفضل سعر للأندرويد" },
        p5: { name: "12 شهر آيفون", f1: "تفعيل على آيفون", f2: "سنة من راحة البال", f3: "جميع الميزات المميزة", f4: "أفضل سعر للآيفون" },
        p6: { name: "12 شهر هدية", f1: "الهدية المثالية (سنة)", f2: "تفعيل بدون كلمة مرور", f3: "حالة VIP مضمونة", f4: "دعم ذو أولوية 24/7" }
      }
    },
    payment: {
      title: "طرق الدفع المقبولة",
      flexyDesc: "(موبيليس/جيزي/أوريدو)"
    },
    how: {
      title: "كيف تعمل؟",
      desc: "عملية بسيطة وشفافة في 3 خطوات.",
      s1Title: "اتصل بنا",
      s1Desc: "أرسل لنا رسالة على إنستغرام أو سناب شات مع العرض المختار.",
      s2Title: "الدفع",
      s2Desc: "قم بالدفع عبر بريدي موب، فليكسي، بينانس أو RedotPay وأرسل الإيصال.",
      s3Title: "التفعيل",
      s3Desc: "احصل على رابط تفعيل Snapchat+ الرسمي في غضون دقائق."
    },
    cta: {
      title: "مستعد لترقية سناب شات الخاص بك؟",
      desc: "انضم إلى مئات الجزائريين الذين يستمتعون بالفعل بميزات Snapchat+ الحصرية.",
      insta: "اطلب عبر إنستغرام",
      snap: "اطلب عبر سناب شات",
      note: "سيتم نسخ رسالة الطلب تلقائيًا إلى الحافظة الخاصة بك.",
      msgTemplate: "مرحباً، أود طلب اشتراك Snapchat+."
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      disclaimer: "هذا الموقع غير تابع أو مرتبط أو مصرح به أو معتمد من قبل، أو بأي شكل من الأشكال مرتبط رسميًا بـ Snap Inc. أو Snapchat."
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedPlan, setCopiedPlan] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('fr');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const t = translations[lang];

  const plans = [
    {
      name: t.pricing.plans.p1.name,
      priceBaridi: "900",
      priceFlixy: "1 100",
      duration: t.pricing.currency,
      features: [
        t.pricing.plans.p1.f1,
        t.pricing.plans.p1.f2,
        t.pricing.plans.p1.f3,
        t.pricing.plans.p1.f4
      ],
      popular: false,
      delay: 0.1
    },
    {
      name: t.pricing.plans.p2.name,
      priceBaridi: "2 200",
      priceFlixy: "2 500",
      duration: t.pricing.currency,
      features: [
        t.pricing.plans.p2.f1,
        t.pricing.plans.p2.f2,
        t.pricing.plans.p2.f3,
        t.pricing.plans.p2.f4
      ],
      popular: false,
      delay: 0.2
    },
    {
      name: t.pricing.plans.p3.name,
      priceBaridi: "3 500",
      priceFlixy: "3 900",
      duration: t.pricing.currency,
      features: [
        t.pricing.plans.p3.f1,
        t.pricing.plans.p3.f2,
        t.pricing.plans.p3.f3,
        t.pricing.plans.p3.f4
      ],
      popular: true,
      delay: 0.3
    },
    {
      name: t.pricing.plans.p4.name,
      priceBaridi: "4 500",
      priceFlixy: "5 000",
      duration: t.pricing.currency,
      features: [
        t.pricing.plans.p4.f1,
        t.pricing.plans.p4.f2,
        t.pricing.plans.p4.f3,
        t.pricing.plans.p4.f4
      ],
      popular: false,
      delay: 0.4
    },
    {
      name: t.pricing.plans.p5.name,
      priceBaridi: "5 000",
      priceFlixy: "5 500",
      duration: t.pricing.currency,
      features: [
        t.pricing.plans.p5.f1,
        t.pricing.plans.p5.f2,
        t.pricing.plans.p5.f3,
        t.pricing.plans.p5.f4
      ],
      popular: false,
      delay: 0.5
    },
    {
      name: t.pricing.plans.p6.name,
      priceBaridi: "6 000",
      priceFlixy: "6 600",
      duration: t.pricing.currency,
      features: [
        t.pricing.plans.p6.f1,
        t.pricing.plans.p6.f2,
        t.pricing.plans.p6.f3,
        t.pricing.plans.p6.f4
      ],
      popular: true,
      delay: 0.6
    }
  ];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-white dark:bg-gray-950 selection:bg-snap-pink selection:text-white text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
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
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-snap-black dark:hover:text-white font-medium transition-colors">{t.nav.features}</a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-snap-black dark:hover:text-white font-medium transition-colors">{t.nav.pricing}</a>
              <a href="#payment" className="text-gray-600 dark:text-gray-300 hover:text-snap-black dark:hover:text-white font-medium transition-colors">{t.nav.payment}</a>
              <button 
                onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-snap-black dark:hover:text-white font-medium transition-colors"
              >
                <Globe className="w-5 h-5" />
                {lang === 'fr' ? 'العربية' : 'Français'}
              </button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-snap-black dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a href="#pricing" className="bg-snap-black dark:bg-white text-white dark:text-snap-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
                {t.nav.buy}
              </a>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-snap-black dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-snap-black dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-900 dark:text-white">
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
            className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 px-4 pt-2 pb-6 space-y-4 shadow-xl"
          >
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100">{t.nav.features}</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100">{t.nav.pricing}</a>
            <a href="#payment" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100">{t.nav.payment}</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-snap-pink text-white px-6 py-3 rounded-xl font-bold mt-4">
              {t.nav.buy}
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
              {t.hero.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              {t.hero.title1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-snap-pink to-snap-pink-dark">Snapchat+</span><br/>
              {t.hero.title2}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="inline-flex justify-center items-center gap-2 bg-snap-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-snap-pink-dark transition-all hover:scale-105 active:scale-95 shadow-lg shadow-pink-200 dark:shadow-none">
                {t.hero.btnOffers} <ChevronRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </a>
              <a href="#how-it-works" className="inline-flex justify-center items-center gap-2 bg-gray-100 dark:bg-gray-800 text-snap-black dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                {t.hero.btnHow}
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-950 object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                ))}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                <div className="flex text-snap-pink">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                {t.hero.clients}
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
                    <Heart className={`absolute -top-1 ${lang === 'ar' ? '-left-2' : '-right-2'} w-8 h-8 text-snap-pink-dark fill-snap-pink-dark transform ${lang === 'ar' ? '-rotate-12' : 'rotate-12'}`} />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-2xl mb-2">{t.hero.cardTitle}</h3>
                  <p className="text-gray-400 text-sm">{t.hero.cardDesc}</p>
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
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t.features.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-950 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-snap-pink-dark dark:text-snap-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.features.f1Title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.features.f1Desc}</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-950 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.features.f2Title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.features.f2Desc}</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-950 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.features.f3Title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.features.f3Desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t.pricing.desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay }}
              className={`relative bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border-2 transition-colors duration-300 ${plan.popular ? 'border-snap-pink shadow-2xl shadow-pink-100 dark:shadow-none' : 'border-gray-100 dark:border-gray-800 shadow-lg dark:shadow-none'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-snap-pink text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
                  {t.pricing.popular}
                </div>
              )}
              <div className="mb-6 space-y-3">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium uppercase tracking-wider">BaridiMob / CCP</div>
                  <div className={`flex items-baseline gap-1 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
                    <span dir="ltr" className="text-3xl font-extrabold text-snap-pink-dark dark:text-snap-pink">{plan.priceBaridi}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">{plan.duration}</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium uppercase tracking-wider">Flexy</div>
                  <div className={`flex items-baseline gap-1 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
                    <span dir="ltr" className="text-2xl font-bold text-gray-700 dark:text-gray-300">{plan.priceFlixy}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">{plan.duration}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 bg-pink-100 dark:bg-pink-900/30 p-1 rounded-full shrink-0">
                      <Check className="w-4 h-4 text-snap-pink-dark dark:text-snap-pink" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.instagram.com/snap.plus.dz"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    navigator.clipboard.writeText(`${t.cta.msgTemplate} ${plan.name}.`);
                    setCopiedPlan(`insta-${plan.name}`);
                    setTimeout(() => setCopiedPlan(null), 3000);
                  }}
                  className={`w-full py-3 rounded-2xl font-bold text-base transition-all flex justify-center items-center gap-2 ${
                    plan.popular 
                      ? 'bg-snap-black dark:bg-white text-white dark:text-snap-black hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 active:scale-95' 
                      : 'bg-gray-100 dark:bg-gray-800 text-snap-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {copiedPlan === `insta-${plan.name}` ? (
                    <>{t.pricing.copied} <Check className="w-5 h-5" /></>
                  ) : (
                    <>{t.pricing.orderInsta} <Instagram className="w-5 h-5" /></>
                  )}
                </a>
                
                <a 
                  href="https://www.snapchat.com/@snap-plusdz"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    navigator.clipboard.writeText(`${t.cta.msgTemplate} ${plan.name}.`);
                    setCopiedPlan(`snap-${plan.name}`);
                    setTimeout(() => setCopiedPlan(null), 3000);
                  }}
                  className={`w-full py-3 rounded-2xl font-bold text-base transition-all flex justify-center items-center gap-2 ${
                    plan.popular 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500 hover:scale-105 active:scale-95' 
                      : 'bg-yellow-100 text-yellow-900 hover:bg-yellow-200'
                  }`}
                >
                  {copiedPlan === `snap-${plan.name}` ? (
                    <>{t.pricing.copied} <Check className="w-5 h-5" /></>
                  ) : (
                    <>{t.pricing.orderSnap} <Ghost className="w-5 h-5" /></>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section id="payment" className="py-20 bg-snap-black dark:bg-black text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.payment.title}</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-90">
            
            {/* BaridiMob */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-white dark:bg-gray-900 rounded-3xl flex items-center justify-center p-4 shadow-lg hover:scale-105 transition-transform">
                <div className="flex flex-col items-center justify-center font-black italic tracking-tighter leading-none">
                  <span className="text-yellow-400 text-2xl">Baridi</span>
                  <span className="text-blue-900 dark:text-blue-400 text-2xl">Mob</span>
                </div>
              </div>
              <span className="font-medium text-lg">BaridiMob / CCP</span>
            </div>

            {/* Flexy */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-white dark:bg-gray-900 rounded-3xl flex items-center justify-center p-4 shadow-lg hover:scale-105 transition-transform">
                <div className="flex flex-col items-center justify-center font-black text-green-500 uppercase tracking-widest">
                  <Zap className="w-8 h-8 fill-current mb-1" />
                  <span className="text-sm">FLEXY</span>
                </div>
              </div>
              <span className="font-medium text-lg text-center">Flexy<br/><span className="text-sm text-gray-400 font-normal">{t.payment.flexyDesc}</span></span>
            </div>

            {/* Binance */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-white dark:bg-gray-900 rounded-3xl flex items-center justify-center p-4 shadow-lg hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" fill="#F3BA2F" className="w-14 h-14">
                  <path d="M12 1.333L6.04 7.293l1.88 1.88L12 5.093l4.08 4.08 1.88-1.88L12 1.333zm0 7.52L8.853 12 12 15.147 15.147 12 12 8.853zm-5.027 1.267L1.333 12l5.64 5.64 1.88-1.88L5.093 12l3.76-3.76-1.88-1.88zm10.054 0l-1.88 1.88L18.907 12l-3.76 3.76 1.88 1.88L22.667 12l-5.64-5.64zM12 18.907l-4.08-4.08-1.88 1.88L12 22.667l5.96-5.96-1.88-1.88L12 18.907z"/>
                </svg>
              </div>
              <span className="font-medium text-lg">Binance (USDT)</span>
            </div>

            {/* RedotPay */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-white dark:bg-gray-900 rounded-3xl flex items-center justify-center p-4 shadow-lg hover:scale-105 transition-transform">
                <div className="flex items-center justify-center font-bold text-xl tracking-tight text-black dark:text-white">
                  <span className="text-red-600 text-4xl leading-none mr-0.5">•</span>
                  <span>RedotPay</span>
                </div>
              </div>
              <span className="font-medium text-lg">RedotPay</span>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.how.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t.how.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-snap-black dark:bg-white text-snap-pink rounded-full flex items-center justify-center text-2xl font-black mb-6 border-4 border-white dark:border-gray-950 shadow-lg">1</div>
              <h3 className="text-xl font-bold mb-3">{t.how.s1Title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.how.s1Desc}</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-snap-black dark:bg-white text-snap-pink rounded-full flex items-center justify-center text-2xl font-black mb-6 border-4 border-white dark:border-gray-950 shadow-lg">2</div>
              <h3 className="text-xl font-bold mb-3">{t.how.s2Title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.how.s2Desc}</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-snap-pink text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 border-4 border-white dark:border-gray-950 shadow-lg">3</div>
              <h3 className="text-xl font-bold mb-3">{t.how.s3Title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.how.s3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto bg-snap-pink rounded-[3rem] p-8 md:p-16 text-center shadow-2xl shadow-pink-200 dark:shadow-none">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">{t.cta.title}</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">
            {t.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.instagram.com/snap.plus.dz" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => {
                navigator.clipboard.writeText(t.cta.msgTemplate);
                setCopiedPlan("footer-insta");
                setTimeout(() => setCopiedPlan(null), 3000);
              }}
              className="inline-flex justify-center items-center gap-2 bg-snap-black dark:bg-white text-white dark:text-snap-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105"
            >
              {copiedPlan === "footer-insta" ? (
                <>{t.pricing.copied} <Check className="w-5 h-5" /></>
              ) : (
                <><Instagram className="w-5 h-5" /> {t.cta.insta}</>
              )}
            </a>
            
            <a 
              href="https://www.snapchat.com/@snap-plusdz" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => {
                navigator.clipboard.writeText(t.cta.msgTemplate);
                setCopiedPlan("footer-snap");
                setTimeout(() => setCopiedPlan(null), 3000);
              }}
              className="inline-flex justify-center items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all hover:scale-105"
            >
              {copiedPlan === "footer-snap" ? (
                <>{t.pricing.copied} <Check className="w-5 h-5" /></>
              ) : (
                <><Ghost className="w-5 h-5" /> {t.cta.snap}</>
              )}
            </a>
          </div>
          <p className="text-sm text-white/70 mt-4">{t.cta.note}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Ghost className="w-6 h-6 text-snap-black dark:text-white" strokeWidth={2.5} />
                <Heart className={`absolute -top-1 ${lang === 'ar' ? '-left-1 -rotate-12' : '-right-1 rotate-12'} w-3 h-3 text-snap-pink-dark fill-snap-pink-dark transform`} />
              </div>
              <span className="font-bold text-xl tracking-tight">SnapPlus<span className="text-snap-pink">DZ</span></span>
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.instagram.com/snap.plus.dz" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-snap-black dark:hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.snapchat.com/@snap-plusdz" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 transition-colors">
                <Ghost className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} SnapPlus DZ. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
