import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/aboutpage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroVideo from "../../public/video/Screen Recording 2025-05-07.mp4";

import img1 from "../assets/images/about/abot1.jpg";
import img2 from "../assets/images/about/about2.jpg";
import img3 from "../assets/images/about/about3.jpg";

import g1 from "../assets/images/about/abot1.jpg";
import g2 from "../assets/images/about/about2.jpg";
import g3 from "../assets/images/about/about3.jpg";
import g4 from "../assets/images/about/about3.jpg";
import g5 from "../assets/images/لوجو/لوجو.webp";
import g6 from "../assets/images/لوجو/لوجو2.webp";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);
    const mainImageRef = useRef<HTMLImageElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const galleryImages = [g1, g2, g3, g4, g5, g6];

    const changeSlide = (index: number) => {
        if (!mainImageRef.current) return;

        gsap.to(mainImageRef.current, {
            opacity: 0,
            scale: 1.05,
            duration: 0.4,
            onComplete: () => {
                setActiveIndex(index);
                gsap.fromTo(
                    mainImageRef.current,
                    { opacity: 0, scale: 1.1 },
                    { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
                );
            },
        });
    };

    const nextSlide = () => {
        const newIndex =
            activeIndex === galleryImages.length - 1 ? 0 : activeIndex + 1;
        changeSlide(newIndex);
    };

    const prevSlide = () => {
        const newIndex =
            activeIndex === 0 ? galleryImages.length - 1 : activeIndex - 1;
        changeSlide(newIndex);
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // HERO
            gsap.from(".hero-title", {
                y: -80,
                opacity: 0,
                duration: 1.2,
            });

            gsap.from(".hero-text p", {
                y: 40,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
            });

            gsap.to(".hero-video", {
                y: 100,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // SECTION 2
            gsap.from(section2Ref.current?.querySelectorAll(".image-box"), {
                x: -100,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: section2Ref.current,
                    start: "top 80%",
                },
            });

            gsap.from(section2Ref.current?.querySelectorAll(".text-content > *"), {
                x: 100,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: section2Ref.current,
                    start: "top 80%",
                },
            });

            // SECTION 3
            gsap.from(section3Ref.current?.querySelector(".experience-box"), {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section3Ref.current,
                    start: "top 80%",
                },
            });

            gsap.fromTo(
                section3Ref.current?.querySelectorAll(".experience-text > *"),
                { x: 80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.3,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section3Ref.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            if (countRef.current) {
                gsap.fromTo(
                    countRef.current,
                    { innerText: 0 },
                    {
                        innerText: 30,
                        duration: 2,
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: section3Ref.current,
                            start: "top 80%",
                        },
                    }
                );
            }

            // SECTION 4
            gsap.fromTo(
                projectsRef.current?.querySelectorAll(".thumb"),
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="about-page" ref={containerRef}>
            <Navbar />

            {/* HERO */}
            <section className="hero" ref={heroRef}>
                <video className="hero-video" src={heroVideo} autoPlay muted loop playsInline />
                <div className="overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Our Team</h1>
                    <div className="hero-text">
                        <p>mfm (Marketing Facility Management– the company with more than 30 years’ experience in Egypt, Qatar, UAE, and KSA as
                            an Integrated marketing communications and Public Relations firm.</p>
                        <p>We have an enviable list of clients across many sectors, all with one thing in common – the desire to maximize thei
                            returns through relevant, engaging, results-driven marketing.</p>
                        <p>Our aim is simple: to win trust and business with original ideas that excite and engage through Business, Sports
                            Entertainment, and CSR initiatives.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="section-two" ref={section2Ref}>
                <div className="images">
                    <div className="image-box"><img src={img1} alt="" /></div>
                    <div className="image-box"><img src={img2} alt="" /></div>
                    <div className="image-box"><img src={img3} alt="" /></div>
                </div>
                <div className="text-content">
                    <h2>Marketing Facility Management</h2>
                    <h3>Our Approach</h3>
                    <p>In today’s world, change is constant and complexity
                        is ever-growing. Organizations need
                        communications partners to provide senior
                        counsel and data-driven solutions to protect their
                        brands and drive business results. mfm agency
                        SAVE model was created to do just that.</p>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="section-three" ref={section3Ref}>
                <div className="experience-box">
                    <h1>+<span ref={countRef}>0</span></h1>
                    <p>Years of Experience</p>
                </div>

                <div className="experience-text">
                    <span>Why Choose Us?</span>
                    <h2>Focus On Getting Our Jobs Done Quickly</h2>
                    <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                    </p>
                </div>
            </section>

            {/* SECTION 4 */}
            <section className="projects-section" ref={projectsRef}>
                <h2 className="projects-title">Our Projects</h2>

                <div className="main-slider">
                    <button className="nav left" onClick={prevSlide}>‹</button>
                    <img ref={mainImageRef} src={galleryImages[activeIndex]} className="main-image" alt="" />
                    <button className="nav right" onClick={nextSlide}>›</button>
                </div>

                <div className="thumbnail-row">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className={`thumb ${index === activeIndex ? "active" : ""}`}
                            onClick={() => changeSlide(index)}
                        >
                            <img src={img} alt="" />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;