import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

interface Service {
    title: string;
    icon: React.ReactNode;
    path?: string;
}

const services: Service[] = [
    { title: "Advertising & Rights sales", icon: <FaAd /> },
    { title: "Business Unit & Employee Engagement", icon: <FaUsersCog /> },
    { title: "Community & Grassroots Programs", icon: <FaSeedling /> },
    { title: "Content Production & Distribution", icon: <FaVideo /> },
    { title: "CSR", icon: <FaHandshake /> },
    { title: "Digital Marketing & Social Media", icon: <FaHashtag /> },
    { title: "Event Creation, Management", icon: <FaCalendarCheck /> },
    { title: "Exhibitions & Retail Display", icon: <FaStoreAlt /> },
    { title: "Hospitality Services", icon: <FaConciergeBell /> },

    // ✅ الخدمة المطلوبة
    {
        title: "Media Monitoring Service",
        icon: <FaSearch />,
        path: "/media-monitoring",
    },

    { title: "Merchandise and Giveaways", icon: <FaGift /> },
    { title: "MOVIE and Entertainment Placement", icon: <FaFilm /> },
    { title: "Overlay, Fit out & showcasing", icon: <FaTools /> },
    { title: "Public Relations Writing", icon: <FaPenNib /> },
    { title: "Publishing and Printing production", icon: <FaPrint /> },
    { title: "Retail Executions Monitoring", icon: <FaClipboardCheck /> },
    { title: "Shopping centres Service", icon: <FaBuilding /> },
    { title: "Sponsorship Activation & Rights Management", icon: <FaAward /> },
];

const ServicesPage: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ================= HERO ================= */

            const heroTl = gsap.timeline();

            heroTl
                .fromTo(
                    ".hero-content h1",
                    { y: 80, scale: 0.95, autoAlpha: 0 },
                    { y: 0, scale: 1, autoAlpha: 1, duration: 1.4, ease: "expo.out" }
                )
                .fromTo(
                    ".hero-content p",
                    { y: 40, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" },
                    "-=0.8"
                );

            /* ================= SECTION 2 ================= */

            const sectionTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".content-section",
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            sectionTl.fromTo(
                ".image-grid",
                { x: -120, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 1.4, ease: "power3.out" }
            );

            sectionTl.fromTo(
                ".text-content",
                { x: 120, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 1.4, ease: "power3.out" },
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
                            SECTOR EXPERTISE From public relations to marketing and social media,
                            from AI to healthcare marketing and from consumer PR to CSR, mfm
                            has the expertise and experience needed to put our clients in the spotlight.
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
                                Writing remains the key to public relations.
                                Communication – effective writing and speaking –
                                is the essence of the practice of public relations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="our-services">
                    <h2 className="sectionservices-title">Our Services</h2>
                    <div className="services-grid">
                        {services.map((service, index) =>
                            service.path ? (
                                <Link
                                    key={index}
                                    to={service.path}
                                    className="service-card"
                                >
                                    <div className="icon-circle">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </Link>
                            ) : (
                                <div key={index} className="service-card">
                                    <div className="icon-circle">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </div>
                            )
                        )}
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

export default ServicesPage;