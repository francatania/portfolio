import { useEffect, useState } from "react";

const SECTIONS = ['inicio', 'tecn-web', 'educacion-web', 'proyectos-web', 'contacto-web'];

const NAV_ITEMS = [
    { label: 'Inicio',       href: '#inicio',        hrefMobile: '#inicio',       sectionId: 'inicio' },
    { label: 'Tecnologías',  href: '#tecn-web',      hrefMobile: '#tecn',         sectionId: 'tecn-web' },
    { label: 'Educación',    href: '#educacion-web', hrefMobile: '#educacion',    sectionId: 'educacion-web' },
    { label: 'Proyectos',    href: '#proyectos-web', hrefMobile: '#proyectos',    sectionId: 'proyectos-web' },
    { label: 'Contacto',     href: '#contacto-web',  hrefMobile: '#contacto',     sectionId: 'contacto-web' },
];

export function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const middle = window.scrollY + window.innerHeight * 0.4;
            let current = 'inicio';
            for (const id of SECTIONS) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= middle) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navBase = isScrolled && !isOpen
        ? 'bg-darkBlue'
        : 'bg-oceanBlue';

    const linkClass = (sectionId) =>
        `transition-all duration-200 pb-[2px] ${
            activeSection === sectionId
                ? 'border-b-2 border-whiteMag font-semibold'
                : 'border-b-2 border-transparent hover:border-whiteMag/60'
        }`;

    return (
        <nav className={`${navBase} w-full h-[3rem] mb-[-1px] font-montserrat fixed z-40 transition duration-200`}>
            <div className="flex justify-around w-full sm:w-[70%] h-full m-auto text-whiteMag">

                {isMobile ? (
                    <>
                        <div className="w-full h-full flex justify-start items-center pl-3">
                            <i className="fa-solid fa-bars hover:cursor-pointer" onClick={() => setIsOpen(true)}></i>
                        </div>

                        <div className={`h-[100vh] ${isOpen ? 'w-1/2 left-0' : 'w-0 left-[-100%]'} absolute bg-darkBlue overflow-hidden transition-all duration-200 flex flex-col gap-6 p-2 z-50`}>
                            <div className="flex items-center">
                                <i className="fa-solid fa-x hover:cursor-pointer" onClick={() => setIsOpen(false)}></i>
                            </div>
                            {NAV_ITEMS.map(item => (
                                <div key={item.sectionId} className="flex items-center">
                                    <a href={item.hrefMobile} onClick={() => setIsOpen(false)}>
                                        <h3 className={activeSection === item.sectionId ? 'font-semibold' : ''}>{item.label}</h3>
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div
                            className={`w-[100%] h-[100vh] bg-[#302b27b2] absolute top-0 left-0 z-40 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onClick={() => setIsOpen(false)}
                        />
                    </>
                ) : (
                    <div className="w-full flex justify-between">
                        {NAV_ITEMS.map(item => (
                            <div key={item.sectionId} className="flex items-center">
                                <a href={item.href}>
                                    <h3 className={linkClass(item.sectionId)}>{item.label}</h3>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
