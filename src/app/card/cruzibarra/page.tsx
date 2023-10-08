"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import profilePicture from "../../../../public/vercel.svg";
import nameLogo from "../../../../public/contactLogos/logowhiteletter.png";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

// logos
import locationLogo from "../../../../public/contactLogos/location.png";
import messageBubble from "../../../../public/contactLogos/bubble.png";
import infoIcon from "../../../../public/contactLogos/info.png";
import fb from "../../../../public/contactLogos/fb.png";
import insta from "../../../../public/contactLogos/insta.png";
import tiktok from "../../../../public/contactLogos/tiktok.png";
import shop from "../../../../public/contactLogos/shop.png";
import phone from "../../../../public/contactLogos/phone.png";
import contact from "../../../../public/contactLogos/contact.png";

export default function emailwriter() {
  const fadeIn = {
    hidden: { translateY: 50 }, // Start with opacity 0 and translateY 50px
    visible: { translateY: 0 }, // End with opacity 1 and translateY 0
  };
  const jumpin = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const router = useRouter();
  const addressData = {
    name: "map",
    title: "20100 Hamilton Ave, Torrance CA, 90502",
    logo: locationLogo,
  };
  const messageData = {
    name: "message",
    title: "Send Message",
    logo: messageBubble,
  };
  const aboutData = {
    name: "about",
    title: "About Me",
    logo: infoIcon,
    about: "",
  };

  const sendFeedbackEmail = () => {
    const recipientEmail = "esteban.aguirre@chefstoys.com";
    const subject = "New Message From Web Card";
    const emailBody = "Type Message Here";

    // Construct the mailto link with recipient email, subject, and body
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open a new email window
    window.location.href = mailtoLink;
  };

  const Separator = () => {
    return <div className={styles.separator}></div>;
  };
  const openGoogleMaps = () => {
    const address = "20100 Hamilton Ave, Torrance, CA 90502";
    const encodedAddress = encodeURIComponent(address);
    const mapURL = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    window.open(mapURL, "_blank");
  };

  const downloadContact = () => {
    // Create a VCF (vCard) formatted string for the contact information.
    const contactData = `BEGIN:VCARD
VERSION:3.0
FN:Esteban Aguirre
TEL:3104003550
EMAIL:esteban.aguirre@chefstoys.com
ADR:;;20100 Hamilton Ave;Torrance;CA;90502;USA
PHOTO;VALUE=URL;TYPE=JPEG:"../../../../../public/people/tor/esteban.jpeg"
END:VCARD`;

    // Create a Blob containing the contact data.
    const blob = new Blob([contactData], { type: "text/vcard" });

    // Create a URL for the Blob.
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link element and trigger a click event to download the file.
    const link = document.createElement("a");
    link.href = url;
    link.download = "contact.vcf"; // Specify the file name here with the .vcf extension
    link.click();

    // Release the URL object to free up memory.
    window.URL.revokeObjectURL(url);
  };

  const fblink = "https://www.facebook.com/Chefstoys/";
  const instalink = "https://www.instagram.com/chefstoys/";
  const tiktoklink = "https://www.tiktok.com/@chefstoys";
  const shoplink = "https://chefstoys.com";
  const phoneLink = "tel:${+13104003550}";

  return (
    <motion.main
      className={styles.main}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.8 }} // Adjust the duration as needed
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={jumpin}
        transition={{ duration: 0.3, delay: 0.3 }} // Adjust the duration as needed
      >
        <Separator />
      </motion.div>
      <motion.div
        className={styles.cardContainer}
        initial="hidden"
        animate="visible"
        variants={jumpin}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className={styles.cardTopContent}>
          <Image
            src={profilePicture}
            className={styles.profilePicture}
            alt="img"
          />
          <Image src={nameLogo} className={styles.nameLogo} alt="img" />
        </div>
        <div className={styles.cardBottomContent}>
          <h2>Cruz Ibarrra</h2>
          <h4 style={{ color: "red", fontWeight: "300" }}>SRT</h4>
        </div>
      </motion.div>

      <div className={styles.LinksContainer}>
        <div className={styles.ContactContainer}>
          <motion.div
            className={styles.mediumCard}
            initial="hidden"
            animate="visible"
            variants={jumpin}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div>
              <Image
                className={styles.cardIcons}
                src={addressData.logo}
                alt={addressData.name}
              />
              <br />

              <h4>{addressData.title}</h4>
            </div>
            <p onClick={() => openGoogleMaps()} className={styles.sendButton}>
              Directions
            </p>
          </motion.div>
          <motion.div
            className={styles.mediumCard}
            initial="hidden"
            animate="visible"
            variants={jumpin}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div>
              <Image
                className={styles.cardIcons}
                src={messageData.logo}
                alt={messageData.name}
              />

              <br />
              <h4>
                Send <br /> Message
              </h4>
              <br />
            </div>

            <p
              onClick={() => sendFeedbackEmail()}
              className={styles.sendButton}
            >
              Send
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.mediumCard}
          initial="hidden"
          animate="visible"
          variants={jumpin}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div>
            <Image
              className={styles.cardIcons}
              src={aboutData.logo}
              alt={aboutData.name}
            />
            <h4>{aboutData.title}</h4>
            <p>{aboutData.about}</p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={jumpin}
          transition={{ duration: 0.8, delay: 1.3 }}
          className={styles.mediumCard}
        >
          <Image className={styles.cardIcons} src={contact} alt={"contact"} />
          <h4>Add To Contacts</h4>

          <p onClick={() => downloadContact()} className={styles.sendButton}>
            Save
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={jumpin}
          transition={{ duration: 0.8, delay: 1.4 }}
          className={styles.SocialLinks}
        >
          <Image
            onClick={() => window.open(fblink, "_blank")}
            className={styles.socialButton}
            src={fb}
            alt={"fb"}
          />
          <Image
            onClick={() => window.open(instalink, "_blank")}
            className={styles.socialButton}
            src={insta}
            alt={"insta"}
          />
          <Image
            onClick={() => window.open(tiktoklink, "_blank")}
            className={styles.socialButton}
            src={tiktok}
            alt={"tiktok"}
          />
          <Image
            onClick={() => window.open(shoplink, "_blank")}
            className={styles.socialButton}
            src={shop}
            alt={"shop"}
          />
          <Image
            onClick={() => (window.location.href = phoneLink)}
            className={styles.socialButton}
            src={phone}
            alt={"call"}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={jumpin}
          style={{ alignSelf: "center" }}
          transition={{ duration: 0.3, delay: 1.5 }} // Adjust the duration as needed
        >
          <Separator />
        </motion.div>
        <br />
        <br />
      </div>
    </motion.main>
  );
}
