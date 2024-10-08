const Waves = ({up, color, id}) => (
    <div id={id}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={ up ? '' : "transform rotate-180" } >
        <path fill={color} fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        
    </div>

  );
  
  export default Waves;
  