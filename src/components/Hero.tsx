import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/hero.css';

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );

        timeline.fromTo(
            paragraphRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.5'
        );

        gsap.to(scrollIndicatorRef.current, {
            y: 10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    }, []);

    const scrollToLatestSection = () => {
        const targetSection = document.getElementById('our-latest');

        if (targetSection) {
            const navbarOffset = 80; // عدلها لو ارتفاع الناف بار مختلف
            const top =
                targetSection.getBoundingClientRect().top +
                window.scrollY -
                navbarOffset;

            window.scrollTo({
                top,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="hero">
            <video
                className="hero-video"
                src="/video/Screen Recording 2025-05-07.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="hero-overlay" />

            <div className="hero-content">
                <h1 ref={titleRef} className="hero-heading">
                    Marketing Facility Management
                </h1>

                <p ref={paragraphRef} className="hero-subheading">
                    The company with more than 30 years experience in Egypt, Qatar, and KSA
                    as an integrated marketing communications and public relations firm.
                </p>
            </div>

            <div
                ref={scrollIndicatorRef}
                className="scroll-indicator"
                onClick={scrollToLatestSection}
                style={{ cursor: 'pointer' }}
            >
                <div className="scroll-arrow" />
            </div>
        </section>
    );
};

export default Hero;