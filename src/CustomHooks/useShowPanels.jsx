import { useEffect, useState } from "react";
import useFetchWindowSize from "./FetchWindowSize";

const useShowPanels = (ss) => {
  const { windowSize } = useFetchWindowSize();
  const [cs, setState] = useState(ss);
  useEffect(() => {
    if (windowSize.winWidth <= 499) {
      setState("vlw");
    }
    if (windowSize.winWidth <= 976 && windowSize.winWidth > 600) {
      setState("lw");
    }
    if (windowSize.winWidth <= 1214 && windowSize.winWidth > 976) {
      setState("aw");
    }
    if (windowSize.winWidth <= 1384 && windowSize.winWidth > 1214) {
      setState("mw");
    }
    if (windowSize.winWidth < 1700 && windowSize.winWidth > 1384) {
      setState("hw");
    }
    if (windowSize.winWidth >= 1700 && windowSize.winWidth < 1900) {
      setState("vhw");
    }
    if (windowSize.winWidth >= 1900) {
      setState("fw");
    }
  }, [windowSize]);

  return { cs };
};
export default useShowPanels;
