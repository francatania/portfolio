import image from '../assets/imagen_cv.jpg'
import { useState, useEffect, useRef } from 'react'

const ROLES = ['Desarrollador Full Stack', 'Desarrollador Frontend', 'Desarrollador Backend'];

export default function Description() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const imageContainerRef = useRef(null);
    const heroTextRef = useRef(null);

    const [typedText, setTypedText] = useState('');
    const [roleIdx, setRoleIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [phase, setPhase] = useState('typing'); // 'typing' | 'deleting'

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            imageContainerRef.current?.classList.add('active');
            heroTextRef.current?.classList.add('active');
        });
        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        const role = ROLES[roleIdx];

        if (phase === 'typing') {
            if (charIdx < role.length) {
                const t = setTimeout(() => {
                    setTypedText(role.slice(0, charIdx + 1));
                    setCharIdx(c => c + 1);
                }, 100);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setPhase('deleting'), 1800);
                return () => clearTimeout(t);
            }
        }

        if (phase === 'deleting') {
            if (charIdx > 0) {
                const t = setTimeout(() => {
                    setTypedText(role.slice(0, charIdx - 1));
                    setCharIdx(c => c - 1);
                }, 55);
                return () => clearTimeout(t);
            } else {
                setPhase('typing');
                setRoleIdx(i => (i + 1) % ROLES.length);
            }
        }
    }, [charIdx, phase, roleIdx]);

    return (
        <section id='inicio' className='w-full flex justify-around items-center m-auto pt-10 bg-oceanBlue'>
            <div className='w-[90%] sm:w-[70%] flex flex-col sm:flex-row'>

                <div
                    ref={heroTextRef}
                    className={`hero-text w-full sm:w-[70%] flex flex-col justify-center ${isMobile ? 'order-2' : 'order-1'}`}
                >
                    <h2 className={`text-whiteMag text-center ${isMobile ? 'text-[2rem]' : 'text-[3rem]'}`}>
                        Franco Catania
                    </h2>
                    <h3 className={`text-whiteMag text-center ${isMobile ? 'text-[1.5rem]' : 'text-[2rem]'} min-h-[2.5rem]`}>
                        {typedText}
                        <span className='typing-cursor' style={{ height: isMobile ? '1.4rem' : '1.8rem' }}>&nbsp;</span>
                    </h3>
                    <div className={`text-center text-whiteMag ${isMobile ? 'text-[1rem] pt-[4px]' : ''}`}>
                        <p>
                            Soy un joven profesional y estudiante apasionado de la tecnología con muchas ganas de aprender y aportar mis conocimientos.
                            Tengo experiencia con diversos lenguajes de programación, bases de datos SQL y no SQL y metodologías ágiles.
                        </p>
                    </div>
                </div>

                <div
                    ref={imageContainerRef}
                    className={`right-container h-[25rem] p-6 sm:p-0 sm:h-[20rem] ${isMobile ? 'order-1' : 'order-2'} flex flex-col justify-center`}
                >
                    <img src={image} alt="CV" className="animate-right rounded-full w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
}
