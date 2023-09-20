import Image from "next/image";
import styles from "./page.module.css";

// IMAGES
import designBubble from "../../public/images/designBubble.png";
import functionBubble from "../../public/images/functionBubble.png";
import intuitiveBubble from "../../public/images/intuitiveBubble.png";
import heartBubble from "../../public/images/heartbubble.png"
import getStartedButton from "../../public/images/getstartedbutton.png"
import infoBar from "../../public/images/infobar.png"
import resultsBubble from "../../public/images/resultsBubble.png"
import handbubble from "../../public/images/handbubble.png"
import ideabubble from "../../public/images/ideabubble.png"
import startnowbutton from "../../public/images/startnowbutton.png"
import facebook from "../../public/images/facebook.png"
import instagram from "../../public/images/insta.png"
import tiktok from "../../public/images/tiktok.png"



export default function Home() {
  const pillars = [
    {
      title: "Design",
      img: designBubble,
      description:
        "Unique designs not only stand out but also breathe life into your vision!",
    },
    {
      title: "Intuitiveness",
      img: intuitiveBubble,
      description:
        "Intuitive solutions not only simplify tasks but also infuse clarity into your objectives!",
    },
    {
      title: "Functionality",
      img: functionBubble,
      description:
        "Functionality is about adding purpose to your goals, without any limitations holding you back!",
    },
  ];



  const process = [
    {
      title: "Getting to know you.",
      img: handbubble,
      description:
        "We begin by understanding your unique needs and challenges. Listening to your goals and aspirations is the first step in crafting a personalized solution.",
    },
    {
      title: "Ways to boost your success.",
      img: ideabubble,
      description:
        "Next, we explore various strategies and technologies, offering intuitive solutions to elevate your success. Our focus is on practical steps that align with your objectives.",
    },
    {
      title: "Unique Solutions.",
      img: resultsBubble,
      description:
        "With your input and our expertise, we tailor a unique solution designed specifically for you. This customized approach ensures that our efforts resonate with your vision.",
    },
  ];


  const instagramProfileURL = 'https://www.instagram.com/_pixelchromatic';
  

  return (
    <main className={styles.mainHome}>
      <div className={styles.home}>
        <div className={styles.playfulBox} />
        <br />
        <br />
        <h2>Pixelchromatic</h2>
        <p className={styles.statementText}>
          Boost Your Success with <span style={{ color: "gray" }}>Unique</span>{" "}
          & <span style={{ color: "gray" }}>Intuitive</span> Solutions
        </p>
        <br />
      
        <div className={styles.pillarsContainer}>
          {pillars.map((pillar, index) => (
            <div className={styles.pillarCard} key={index}>
              <Image
                style={{ width: 80, height: "auto" }}
                src={pillar.img}
                alt={pillar.title}
              />
              <h3>{pillar.title}</h3>

              <p>{pillar.description}</p>
            </div>
          ))}
        </div>

       
      </div>
      <br />
      <div className={styles.home}>
        <br />
        <Image
                style={{ width: 80, height: "auto" }}
                src={heartBubble}
                alt={"heart "}
              />
        <h1>What we believe in!</h1>
        <h2 style={{fontWeight:300}}>
          At Pixelchromatic, we believe in the transformative power of intuitive
          technology and digital tools that drive success. We are committed to
          creating innovative, intuitive solutions, no matter the scale, that
          address real-world problems and empower people and organizations to
          reach their full potential. Our mission is to harness the digital
          landscape to foster growth, inspire creativity, and create custom
          solutions that fit your unique goals. Reaching out to us is the
          beginning of our journey to boost your success.
        </h2>
        <Image className={styles.buttonStyle} onClick={() => window.open(instagramProfileURL, '_blank')} src={getStartedButton} alt="getStartedButton" />
      </div> 
      <br />
      <div className={styles.home}>
        <br />
        
        <p className={styles.statementText}>Simple process with powerful results</p>
        <div className={styles.pillarsContainer}>
          {process.map((process, index) => (
            <div className={styles.pillarCard} key={index}>
              <Image
                style={{ width: 80, height: "auto" }}
                src={process.img}
                alt={process.title}
              />
              <h3>{process.title}</h3>

              <p>{process.description}</p>
            </div>
          ))}
        

        </div>
        <Image className={styles.buttonStyle} onClick={() => window.open(instagramProfileURL, '_blank')} src={startnowbutton} alt="startnow" />
      </div>

          <br />
      <div className={styles.home}>
        <br />
        <h2></h2>
        <h1>More exciting website content coming soon!</h1>
        <h3>Follow us for news and updates</h3>
        <div className={styles.socialButtonCont}>
          <Image className={styles.socialButton} onClick={() => window.open(instagramProfileURL, '_blank')} src={instagram} alt="instagram" />
          <Image className={styles.socialButton} src={facebook} alt="facebook" />
          <Image className={styles.socialButton} src={tiktok} alt="tiktok" />
        </div> 
      </div>
    </main>
  );
}
