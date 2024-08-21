import './App.scss';
import "./App_media.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';

function Salam() {

    const array = [
        {
            title: "Customized Solutions",
            text: "We understand that every business is unique, and so are its needs. We offer bespoke software solutions that are tailored to fit your specific requirements."
        },
        {
            title: "Expertise",
            text: "With years of experience in the industry, we have honed our skills and knowledge to provide the best possible service."
        },
        {
            title: "Client-Focused",
            text: "We prioritize our clients’ needs and work diligently to ensure their success."
        },
        {
            title: "End-to-End Service",
            text: "From initial consultation to deployment and maintenance, we provide comprehensive support throughout the software development lifecycle."
        },
        {
            title: "Experience in Gamification",
            text: "We have extensive experience in integrating gamification elements into software solutions to enhance user engagement and motivation."
        }
    ]

    const [close, setClose] = useState(false);

    const [submit, setSubmit] = useState(true)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        if (!name || !phone || !message) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        setSubmit(false)
        console.log('Form submitted:', { name, phone, message });
    };

    useEffect(() => {
        const handleScroll = (e) => {
          e.preventDefault();
          const targetId = e.currentTarget.getAttribute('href');
          const targetElement = document.querySelector(targetId);
    
          if (targetElement) {
            const scrollDuration = 1000; 
            const start = window.pageYOffset;
            const distance = targetElement.offsetTop - 50 - start; 
            let startTime = null;
    
            const smoothScrollStep = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const progress = Math.min(timeElapsed / scrollDuration, 1);
              window.scrollTo(0, start + distance * progress);
    
              if (timeElapsed < scrollDuration) {
                window.requestAnimationFrame(smoothScrollStep);
              }
            };
    
            window.requestAnimationFrame(smoothScrollStep);
          }
        };
    
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
          anchor.addEventListener('click', handleScroll);
        });
    
        return () => {
          anchors.forEach(anchor => {
            anchor.removeEventListener('click', handleScroll);
          });
        };
      }, []);



    return (
        <>
            <header className="header">
                <nav className="nav">
                    <ul>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                        <li><a href="#careers">Careers</a></li>
                    </ul>
                    <div className="logo">8BeIT</div>
                </nav>

                <nav className="nav_mobile">
                    <div className="logo" style={{ backgroundColor: close ? 'gray' : 'black' }} >
                        <p>8BeIT</p>
                        {close ? (
                            <IoMdClose
                                className='hamburger_icon'
                                onClick={() => setClose(false)}  // Correctly setting to false
                            />
                        ) : (
                            <GiHamburgerMenu
                                className='hamburger_icon'
                                onClick={() => setClose(true)}  // Correctly setting to true
                            />
                        )}
                    </div>
                    {close &&
                        <div className="lists" >
                            <h2>8BeIt</h2>
                            <ul>
                                <li><a href="#second_part">About us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contacts">Contacts</a></li>
                                <li><a href="#careers">Careers</a></li>
                            </ul>
                        </div>}
                </nav>

                <div className="beIt">

                    <h1>8BeIT</h1>
                    <p>Welcome to 8beit.az, your trusted partner in software
                        development, based in the vibrant city of Baku, Azerbaijan.</p>
                    <a href="#second_part"> <svg className='arrow' role="presentation" class="t-cover__arrow-svg" x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z" fill="white"></path></g></svg>
                    </a></div>
            </header>


            <div id="second_part">
                <div className="photo">
                    <img src="https://static.tildacdn.info/tild3638-3037-4937-b932-363836373135/rawpixelcom256641.jpg" alt="" />
                </div>
                <div className="about_us">
                    <h1>About Us</h1>
                    <p className='play'>Play. Work. Together. </p>
                    <hr />

                    <p className='sentence'>  Founded with a vision to innovate and transform the digital landscape, we specialize in
                        creating custom software solutions tailored to meet the unique needs of businesses
                        across various industries.</p>
                </div>
            </div>




            <div className="third_part">
                <div className="our_products">

                    <h1>Our Products</h1>
                    <p>At 8beit.az , our mission is to deliver cutting-edge software
                        solutions that empower businesses to achieve their goals. We
                        are committed to excellence, innovation, and customer satisfaction.
                        Our team of skilled developers, designers, and strategists work
                        collaboratively to turn your ideas into reality, ensuring that each
                        project is delivered on time and within budget.</p>
                </div>


                <div className="services">
                    <div className="service_part1">
                        <div className="services_1" >
                            <img src="https://optim.tildacdn.pub/tild6262-6437-4331-a331-613334616638/-/resize/600x/-/format/webp/ks3chim5046_1.jpg" alt="" />
                        </div>
                        <div className="services_2">
                            <h1>Talumi</h1>
                            <p>Delivery Block Productivity Measurement Platform</p>
                        </div>
                    </div>

                    <div className="service_part1">
                        <div className="services_2">
                            <h1>Pay&Play</h1>
                            <p> Payments Service with Integrated Gaming Platform</p>
                        </div>
                        <div className="services_1">
                            <img src="https://optim.tildacdn.pub/tild6263-3863-4661-a532-626365323333/-/resize/600x/-/format/webp/1db9ab9d89c449c59d14.jpg" alt="" />
                        </div>
                    </div>

                </div>


                <div className="call_action">
                    <div className="call_actions">
                        <p>Feel free to reach out to us for more information or to discuss your project requirements. Let’s build something amazing together!</p>
                        <button>Call to action</button>
                    </div>
                </div>
            </div>

            <div className="fourth_part">
                <h1>Why Choose Us?</h1>
                <div className="fourth_part_grid">

                    {
                        array.map((value, index) => (
                            <div key={index} className="choose_1">
                                <div className='choose_1_flexx'>
                                    <img src="https://static.tildacdn.info/lib/tildaicon/33376436-6634-4231-b732-306331373662/17bu_27.svg" alt="" />
                                    <h2> {value.title}</h2>
                                </div>
                                <p>{value.text}</p>
                            </div>
                        ))
                    }


                </div>
            </div>


            <div className="fifth_part">
                <div className="join_our">
                    <h1>Join our dynamic team and be a part of a forward-thinking software development company</h1>
                    <p>If you are passionate about technology and excited to contribute to innovative projects,
                        we would love to hear from you. Please send your resume and a cover letter to careers@8beit.az
                        with the job title in the subject line. Join us at 8beit.az and be a part of something amazing!</p>
                </div>

                <div className="input_field">
                    {submit ? <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Your Full Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Your Phone Number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <textarea
                            placeholder='Type in your message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {error && <button type="submit" className='error_msg'>{error}</button>}
                        <button type="submit">Send</button>
                    </form> :
                        <p className='thank_you'>Thank you! Your data has been submitted.</p>

                    }
                    <div className="hello">
                        <h1>hello@8beit.az</h1>
                        <p>Baku, Azerbaijan</p>
                    </div>
                    <div className="icons">
                        <a href="https://google.com" target="_blank" rel="nofollow noopener" aria-label="facebook" ><svg class="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z" fill="#038c5c"></path></svg></a>
                        <a href="https://google.com" target="_blank" rel="nofollow noopener" aria-label="twitter" ><svg class="t-sociallinks__svg" role="presentation" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 48 48"><g clip-path="url(#clip0_3697_102)"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM33.3482 14L25.9027 22.4686H25.9023L34 34H28.0445L22.5915 26.2348L15.7644 34H14L21.8082 25.1193L14 14H19.9555L25.119 21.3532L31.5838 14H33.3482ZM22.695 24.1101L23.4861 25.2173V25.2177L28.8746 32.7594H31.5847L24.9813 23.5172L24.1902 22.4099L19.1103 15.2997H16.4002L22.695 24.1101Z" fill="#038c5c"></path></g><defs><clipPath id="clip0_3697_102"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg></a>
                        <a href="https://google.com" target="_blank" rel="nofollow noopener" aria-label="instagram" ><svg class="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#038c5c"></path></svg></a>
                    </div>
                </div>
            </div>



            <div className="sixth_part">

                <p>All text, photo, and video materials belong to their owners and are for
                    demonstration purposes only. Please do not use them in commercial projects.</p>
                <div className="hover_text">
                    <img alt="" src="https://static.tildacdn.info/img/tildacopy.png" fetchpriority="low" />
                    <p className='tilda'>This site was made on Tilda — a website builder that helps to create a website without any code</p>
                    <button>Create website</button>
                </div>

                <div className="question">
                    <ul>
                        <li>How to remove this block?	</li>
                        <li>About platform	</li>
                        <li>Submit a complaint</li>
                    </ul>
                </div>

            </div>
        </>

    );

}

export default Salam;
