import "./about.scss";
import HeroSection from '../../components/HeroSection/HeroSection';

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <HeroSection 
                Title='About Us'
                imgUrl='/assets/images/20210709_120150.jpg'
            />
            <div className="statements">
                <h1>YGF Statements</h1>
                <div className="visionStatement">
                    <div className="imgContainer">
                        <img src="/assets/images/20210709_121940.jpg" alt="Our Vision" />
                    </div>
                    <div className="statement">
                        <div className='titleArea'>
                            <div></div>
                            <h2>Our Vision</h2>
                            <div></div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, pariatur. Accusamus voluptate enim perspiciatis corporis fuga ipsa dolor, aliquam facilis ullam eum, quis autem perferendis aut quo quidem, minima tempore itaque provident? Accusantium error aliquam quae molestias reprehenderit ipsam inventore culpa fugiat commodi voluptate! Quisquam, optio repellat. Dolorum, quam iste.</p>
                    </div>
                </div>
                <div className="missionStatement">
                    <div className="imgContainer">
                        <img src="/assets/images/20210709_121714.jpg" alt="Our Mission" />
                    </div>
                    <div className="statement">
                        <div className='titleArea'>
                            <div></div>
                            <h2>Our Mission</h2>
                            <div></div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, pariatur. Accusamus voluptate enim perspiciatis corporis fuga ipsa dolor, perferendis aut quo quidem, minima optio repellat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quos pariatur error veritatis, minus esse iste atque reiciendis enim corrupti ducimus fugiat, cupiditate in quam asperiores voluptas, obcaecati cum placeat. Voluptates, voluptate natus.</p>
                    </div>
                </div>
                <div className="coreValues">
                    <div className="imgContainer">
                        <img src="/assets/images/20210709_123040.jpg" alt="Core Values" />
                    </div>
                    <div className="statement">
                        <div className='titleArea'>
                            <div></div>
                            <h2>Core Values</h2>
                            <div></div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, pariatur. Accusamus voluptate enim perspiciatis corporis fuga ipsa dolor, aliquam facilis ullam eum, quis autem perferendis aut quo quidem, minima tempore itaque provident? Accusantium error aliquam quae molestias optio repellat. Dolorum, quam iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo quis laboriosam ad alias voluptatem ipsa nobis similique?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
