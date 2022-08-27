import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
    const [element, view] = useInView({ threshold: 0.5 });
    const controls = useAnimation();
  
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }

    return [element, controls];
}