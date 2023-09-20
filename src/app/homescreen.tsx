import Image from "next/image";
import styles from "./page.module.css";

// IMAGES
import designBubble from "../../public/images/designBubble.png";
import functionBubble from "../../public/images/functionBubble.png";
import intuitiveBubble from "../../public/images/intuitiveBubble.png";
import heartBubble from "../../public/images/heartbubble.png"
import getStartedButton from "../../public/images/getstartedbutton.png"
import infoBar from "../../public/images/infobar.png"

export default function Home() {
  const pillars = [
    {
      title: "Design",
      img: designBubble,
      description:
        "Unique designs not only stand out but also breathe life into your vision!",
    },
    {
      title: "Intuitivness",
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

  return (
    <main className={styles.mainHome}>
      <div className={styles.home}>
        <div className={styles.playfulBox} />
        <br />
        <br />
        <h2>Welcome to Pixelchromatic</h2>
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
        <h2>What we believe in!</h2>
        <p>
          At Pixelchromatic, we believe in the transformative power of intuitive
          technology and digital tools that drive success. We are committed to
          creating innovative, intuitive solutions, both large and small, that
          address real-world problems and empower people and organizations to
          reach their full potential. Our mission is to harness the digital
          landscape to foster growth, inspire creativity, and create custom
          solutions that fit your unique goals. Reaching out to us is the
          beginning of our journey to boost your success.
        </p>
        <Image className={styles.buttonStyle} src={getStartedButton} alt="getStartedButton" />
      </div>
    </main>
  );
}
