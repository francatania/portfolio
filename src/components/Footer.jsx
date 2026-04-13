import WavesDown from './reusable/WavesDown.jsx'

const Footer = () =>{
        const dark = '#1B264F'
    return(<>
        <footer className="w-full h-[10rem] bg-darkBlue flex flex-row justify-center items-center">
            <div className="flex gap-3">                
                <a href="https://www.linkedin.com/in/franco-catania-6758691a3/" target='_BLANK'><i className="fa-brands fa-linkedin-in  text-whiteMag text-3xl transition 150 ease-in hover:scale-110" ></i>
                </a>

                <a href="https://github.com/francatania" target='_BLANK'>
                <i className="fa-brands fa-github  text-whiteMag text-3xl transition 150 ease-in hover:scale-110" ></i></a>
                
            </div>

        </footer>
        </>)
}

export default Footer;