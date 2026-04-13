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
import dockerLogo from '../assets/docker.svg';
import nginxLogo from '../assets/nginx.svg';
import fastapiLogo from '../assets/fastapi.svg';
import pythonLogo from '../assets/python.svg';
import angularLogo from '../assets/angular.svg';
import rabbitmqLogo from '../assets/rabbitmq.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GROUPS = [
    {
        label: 'Frontend',
        logos: [
            { src: htmlLogo, alt: 'HTML' },
            { src: cssLogo, alt: 'CSS' },
            { src: jsLogo, alt: 'JavaScript' },
            { src: typescriptLogo, alt: 'TypeScript' },
            { src: reactLogo, alt: 'React' },
            { src: angularLogo, alt: 'Angular' },
            { src: sassLogo, alt: 'Sass' },
            { src: tailwindLogo, alt: 'Tailwind' },
        ],
    },
    {
        label: 'Backend',
        logos: [
            { src: nodeLogo, alt: 'Node.js' },
            { src: pythonLogo, alt: 'Python' },
            { src: fastapiLogo, alt: 'FastAPI' },
            { src: javaLogo, alt: 'Java' },
            { src: springBoot, alt: 'SpringBoot' },
            { src: csharp, alt: 'C#' },
            { src: dotNetLogo, alt: '.NET' },
        ],
    },
    {
        label: 'Bases de datos',
        logos: [
            { src: sqlLogo, alt: 'SQL Server' },
            { src: postgresqlLogo, alt: 'PostgreSQL' },
            { src: mongoLogo, alt: 'MongoDB' },
            { src: firebaseLogo, alt: 'Firebase' },
        ],
    },
    {
        label: 'DevOps & Herramientas',
        logos: [
            { src: dockerLogo, alt: 'Docker' },
            { src: nginxLogo, alt: 'Nginx' },
            { src: rabbitmqLogo, alt: 'RabbitMQ' },
            { src: gitLogo, alt: 'Git' },
            { src: gitHubLogo, alt: 'GitHub' },
        ],
    },
];

export default function Tecnologies() {
    const titleRef = useScrollReveal({ threshold: 0.2 });

    return (
        <section id="tecn-web" className='flex flex-col bg-whiteMag w-full m-auto mb-[-1px] mt-[-1px] pb-4'>
            <div className='w-[90%] sm:w-[70%] m-auto'>
                <h2 ref={titleRef} className='reveal text-center text-3xl font-bold mb-8 text-oceanBlue'>
                    Tecnologías
                </h2>
            </div>
            <div className='w-[90%] sm:w-[70%] m-auto flex flex-col gap-6'>
                {GROUPS.map((group, gi) => (
                    <TechGroup key={gi} group={group} groupIndex={gi} />
                ))}
            </div>
        </section>
    );
}

function TechGroup({ group, groupIndex }) {
    const labelRef = useScrollReveal({ threshold: 0.1, delay: groupIndex * 60 });

    return (
        <div>
            <h3 ref={labelRef} className='reveal text-oceanBlue font-semibold text-lg mb-3 border-b border-oceanBlue/30 pb-1'>
                {group.label}
            </h3>
            <ul className='flex flex-wrap'>
                {group.logos.map((logo, i) => (
                    <LogoItem key={i} logo={logo} delay={groupIndex * 60 + i * 40} />
                ))}
            </ul>
        </div>
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
                absolute -top-8 left-1/2 -translate-x-1/2
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
