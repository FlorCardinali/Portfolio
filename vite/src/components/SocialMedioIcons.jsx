import './SocialMediaIcons.css';


const SocailMediaIcons = ({ ruta, alt, link }) => {
    return (
        <a href={link} target="_blank">
            <img className="hero-social-icon" src={ruta} alt={alt}></img>
        </a>
    );
}

export default SocailMediaIcons;