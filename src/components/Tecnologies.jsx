import reactLogo from '../assets/pngegg.png';
import jsLogo from '../assets/js_logo.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import firebaseLogo from '../assets/firebase.png';
import nodeLogo from '../assets/node.png';
import csharp from '../assets/csharp_logo.png';
import mongoLogo from '../assets/mongodb.png';
import sqlLogo from '../assets/sql.png';
import gitLogo from '../assets/git_logo.png';
import gitHubLogo from '../assets/github.png';
import tailwindLogo from '../assets/tailwind.png';
import sassLogo from '../assets/sass.png';
import typescriptLogo from '../assets/typescript.png';
import dotNetLogo from '../assets/dotnet.png.png';
import javaLogo from '../assets/java.png';
import springBoot from '../assets/springboot.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Tecnologies() {
    const logos = [
        { src: htmlLogo, alt: 'HTML' },
        { src: cssLogo, alt: 'CSS' },
        { src: jsLogo, alt: 'JavaScript' },
        { src: typescriptLogo, alt: 'TypeScript' },
        { src: reactLogo, alt: 'React' },
        { src: sassLogo, alt: 'Sass' },
        { src: tailwindLogo, alt: 'Tailwind' },
        { src: nodeLogo, alt: 'Node.js' },
        { src: csharp, alt: 'C#' },
        { src: dotNetLogo, alt: '.NET' },
        { src: firebaseLogo, alt: 'Firebase' },
        { src: mongoLogo, alt: 'MongoDB' },
        { src: sqlLogo, alt: 'SQL' },
        { src: gitLogo, alt: 'GIT' },
        { src: gitHubLogo, alt: 'GitHub' },
        { src: javaLogo, alt: 'Java' },
        { src: springBoot, alt: 'SpringBoot' },
    ];

    const titleRef = useScrollReveal({ threshold: 0.2 });

    return (
        <section id="tecn-web" className='flex flex-col bg-whiteMag w-full m-auto mb-[-1px] mt-[-1px]'>
            <div className='w-[90%] sm:w-[70%] m-auto'>
                <h2 ref={titleRef} className='reveal text-center text-3xl font-bold mb-8 text-oceanBlue'>
                    Tecnologías
                </h2>
            </div>
            <div className='m-auto flex flex-wrap justify-center items-center w-[90%] sm:w-[70%]'>
                <ul className='flex flex-wrap justify-center'>
                    {logos.map((logo, index) => (
                        <LogoItem key={index} logo={logo} delay={index * 40} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

function LogoItem({ logo, delay }) {
    const ref = useScrollReveal({ threshold: 0.1, delay });

    return (
        <li ref={ref} className='reveal m-2 relative group'>
            <img
                src={logo.src}
                alt={logo.alt}
                className='w-22 h-20 object-cover transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg cursor-default'
            />
            <span className='
                absolute -bottom-6 left-1/2 -translate-x-1/2
                bg-darkBlue text-whiteMag text-xs rounded px-2 py-1
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                whitespace-nowrap pointer-events-none z-10
            '>
                {logo.alt}
            </span>
        </li>
    );
}
