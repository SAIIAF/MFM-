import React, { useEffect, useRef } from "react";
import "../styles/ServicesPage.css";
import Footer from "../components/Footer";

import about1 from "../assets/images/about/abot1.jpg";
import about2 from "../assets/images/about/about2.jpg";
import about3 from "../assets/images/about/about2.jpg";
import about4 from "../assets/images/about/about2.jpg";

import {
    FaAd,
    FaHandshake,
    FaUsersCog,
    FaSeedling,
    FaVideo,
    FaHashtag,
    FaCalendarCheck,
    FaStoreAlt,
    FaConciergeBell,
    FaSearch,
    FaGift,
    FaFilm,
    FaTools,
    FaPenNib,
    FaPrint,
    FaClipboardCheck,
    FaBuilding,
    FaAward,
} from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "Advertising & Rights sales", url: "https://www.facebook.com/", icon: <FaAd /> },
    { title: "Business Unit & Employee Engagement", url: "#", icon: <FaUsersCog /> },
    { title: "Community & Grassroots Programs", url: "#", icon: <FaSeedling /> },
    { title: "Content Production & Distribution", url: "#", icon: <FaVideo /> },
    { title: "CSR", url: "#", icon: <FaHandshake /> },
    { title: "Digital Marketing & Social Media", url: "#", icon: <FaHashtag /> },
    { title: "Event Creation, Management", url: "#", icon: <FaCalendarCheck /> },
    { title: "Exhibitions & Retail Display", url: "#", icon: <FaStoreAlt /> },
    { title: "Hospitality Services", url: "#", icon: <FaConciergeBell /> },
    { title: "Media Monitoring Service", url: "#", icon: <FaSearch /> },
    { title: "Merchandise and Giveaways", url: "#", icon: <FaGift /> },
    { title: "MOVIE and Entertainment Placement", url: "#", icon: <FaFilm /> },
    { title: "Overlay, Fit out & showcasing", url: "#", icon: <FaTools /> },
    { title: "Public Relations Writing", url: "#", icon: <FaPenNib /> },
    { title: "Publishing and Printing production", url: "#", icon: <FaPrint /> },
    { title: "Retail Executions Monitoring", url: "#", icon: <FaClipboardCheck /> },
    { title: "Shopping centres Service", url: "#", icon: <FaBuilding /> },
    { title: "Sponsorship Activation & Rights Management", url: "#", icon: <FaAward /> },
];

const About: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ================= HERO NEW STYLE ================= */

            const heroTl = gsap.timeline();

            heroTl
                .fromTo(
                    ".hero-content h1",
                    {
                        y: 80,
                        scale: 0.95,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        scale: 1,
                        autoAlpha: 1,
                        duration: 1.4,
                        ease: "expo.out",
                    }
                )
                .fromTo(
                    ".hero-content p",
                    {
                        y: 40,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 1.2,
                        ease: "power2.out",
                    },
                    "-=0.8"
                );

            /* ================= SECTION 2 SIDE SLIDE ================= */

            const sectionTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".content-section",
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            // الصور من الشمال
            sectionTl.fromTo(
                ".image-grid",
                {
                    x: -120,
                    autoAlpha: 0,
                },
                {
                    x: 0,
                    autoAlpha: 1,
                    duration: 1.4,
                    ease: "power3.out",
                }
            );

            // النص من اليمين
            sectionTl.fromTo(
                ".text-content",
                {
                    x: 120,
                    autoAlpha: 0,
                },
                {
                    x: 0,
                    autoAlpha: 1,
                    duration: 1.4,
                    ease: "power3.out",
                },
                "-=1.1"
            );

        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="about-page" ref={pageRef}>
                {/* HERO */}
                <section className="hero-section">
                    <video autoPlay muted loop playsInline className="hero-video">
                        <source src="/video/Screen Recording 2025-05-07.mp4" type="video/mp4" />
                    </video>

                    <div className="overlay" />

                    <div className="hero-content">
                        <h1>What we do</h1>
                        <p>
                            SECTOR EXPERTISE From public relations to marketing and social media, from AI to
                            healthcare marketing and from consumer PR to CSR, mfm has the expertise and
                            experience needed to put our clients in the spot light. We advise clients and build
                            bespoke public relations and marketing campaigns designed to enhance reputation
                            and grow volume. Our work spans sectors and organization size.
                        </p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="content-section">
                    <div className="content-grid">
                        <div className="image-grid">
                            <img src={about1} alt="" />
                            <img src={about2} alt="" />
                            <img src={about3} alt="" />
                            <img src={about4} alt="" />
                            <img src={about3} alt="" />
                            <img src={about4} alt="" />
                        </div>

                        <div className="text-content">
                            <h2>Writing remains the key to public relations</h2>
                            <p className="intro">
                                The practice of public relations distinguishes professional communicators from amateurs. All of us know how to write and speak. But public relations professionals
                                should write and speak better than their colleagues. Communication – that is, effective writing and speaking – is the essence of the practice of public relations.  So,
                                writing remains the key to public relations.
                                The News Release: A valuable but much-maligned device, the news release is the granddaddy of public relations writing vehicles, whether for traditional
                                media or digital.
                                The practice of public relations distinguishes professional communicators from amateurs. All of us know how to write and speak. But public relations professionals
                                should write and speak better than their colleagues. Communication – that is, effective writing and speaking – is the essence of the practice of public relations.  So,
                                writing remains the key to public relations.
                                The News Release: A valuable but much-maligned device, the news release is the granddaddy of public relations writing vehicles, whether for traditional
                                media or digital.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="our-services">
                    <h2 className="section-title">Our Services</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <a
                                key={index}
                                href={service.url}
                                className="service-card"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="icon-circle">{service.icon}</div>
                                <h3>{service.title}</h3>
                            </a>
                        ))}
                    </div>
                </section>

                {/* CENTER VIDEO */}
                <section className="center-video-section">
                    <div className="center-video-wrapper">
                        <video autoPlay muted loop playsInline>
                            <source src="/video/Screen Recording 2025-05-07.mp4" type="video/mp4" />
                        </video>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default About;