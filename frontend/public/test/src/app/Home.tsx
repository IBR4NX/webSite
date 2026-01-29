import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/assets/logo/logo.png";
import { useTranslation } from 'react-i18next';
export default function Home() {

  const { t } = useTranslation("home");
  
  return (
    <>
   <section className="relative overflow-hidden  bg-linear-to-b h-screen ">
      <div className="max-w-7xl bg mx-auto px-6 py-10 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full max-lg:p-0 lg:w-2/3   ">
        <motion.p
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-gray-600 dark:text-gray-300 text-3xl mx-auto lg:mx-0 "
          >
                {t('welcome')}
                      </motion.p>
          <motion.p
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 "
          >
                {t('subtitle')}
                      </motion.p>
                <p>{t('home')}</p>

          {/* example: you can use `bodyClass` in the component */}
          {/* <div className="mt-2 text-xs text-gray-500">Body class: {bodyClass}</div> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-20 flex justify-center lg:justify-end gap-4"
          >
            <Link to="/agents" className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-md">
            {t('cta.explore')}            </Link>
            <Link to="/home" className="inline-flex items-center gap-2 px-4 py-3 border border-gray-200 dark:border-white/10 rounded-lg text-gray-700 dark:text-gray-300">
            {t('cta.start')}
            </Link>
          </motion.div>

          <motion.div className="mt-6 flex items-center justify-center lg:justify-end gap-4 text-sm text-gray-500"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.36 }}>
            <span> تجريبي </span>
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-6 opacity-80" />
              <div className="h-6 w-px bg-gray-200 dark:bg-white/10" />
              <span>تحت التطوير</span>
            </div>
          </motion.div>
        </div>

        <div className=" hidden w-full lg:w-1/2  justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration:64, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl bg-linear-to-tr from-amber-100 to-amber-200 dark:from-gray-800 dark:to-gray-700 p-8 shadow-xl"
            >
              <div className="w-72 h-44 bg-white/90 dark:bg-black/50 rounded-lg flex flex-col items-center justify-center text-2xl font-semibold text-gray-800 dark:text-white">
                <div>معاينة المحفظة</div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">رصيد: <span className="font-bold text-gray-900 dark:text-white">1,254.00 SAR</span></div>
              </div>
              <div className="mt-4 text-xs text-gray-600 dark:text-gray-300">تحويلات سريعة، متابعة حالة، وإشعارات فورية.</div>
            </motion.div>

            <motion.svg className="absolute -right-8 -top-8 opacity-30" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 0 }} animate={{ rotate: 15 }} transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}>
              <circle cx="80" cy="80" r="80" fill="url(#g)" />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F59E0B" />
                  <stop offset="1" stopColor="#F97316" />
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  
    </>
    
  )
}