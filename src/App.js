import "./App.css";
import { TopBar } from "./Components/Header/TopBar/TopBar";
import useShowPanels from "./CustomHooks/useShowPanels";
import Header from "./Pages/Layout/Header";
import MobileHeader from "./Pages/Layout/MobileHeader";
import Main from "./Pages/Main/Main";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  const { cs } = useShowPanels();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeInOut",
          delay: 0,
        },
      }}
      className="default wid-100-p hei-100-p bac-col-lig-blu fle-dir-row"
    >
      <div className="default wid-100-p fle-ali-cnt">
        <div
          className={`default max-wid-1920-px wid-100-p ${
            !(cs === "vlw" || cs === "lw" || cs === "aw") && "fle-dir-row"
          }`}
        >
          <header className="default fle-ali-end" style={{ zIndex: 2 }}>
            {(cs === "vlw" || cs === "lw" || cs === "aw") && <MobileHeader />}
            <Header />
          </header>
          <div className="default fle-gro-1">
            <TopBar />
            <Main />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
