import TUP from "./TUP.jsx";
import CODER from "./CODER.jsx";
import ING from "./ING.jsx";
import ARGProg from "./ARGProg.jsx";
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Education = () => {
    const titleRef = useScrollReveal({ threshold: 0.2 });
    const tup = useScrollReveal({ threshold: 0.08, delay: 0 });
    const coder = useScrollReveal({ threshold: 0.08, delay: 80 });
    const ing = useScrollReveal({ threshold: 0.08, delay: 160 });
    const arg = useScrollReveal({ threshold: 0.08, delay: 240 });

    return (
        <section id="educacion-web" className="flex flex-col bg-oceanBlue w-full m-auto text-whiteMag">
            <div className="w-[90%] sm:w-[70%] m-auto">
                <h2 ref={titleRef} className="reveal text-center text-3xl font-bold mb-8">Educación</h2>
            </div>
            <div ref={tup} className="reveal"><TUP /></div>
            <div ref={coder} className="reveal"><CODER /></div>
            <div ref={ing} className="reveal"><ING /></div>
            <div ref={arg} className="reveal"><ARGProg /></div>
        </section>
    );
};

export default Education;
