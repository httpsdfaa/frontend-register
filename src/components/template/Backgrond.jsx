import './Background.css';
import bgMobile from '../../assets/lighthouse.jpg';

export default function Background(){
    return (
        <section className="bg">
            <img src={bgMobile} alt="Background" className="bg-photo" />
        </section>
    )
}