import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/whitepaper.css';

gsap.registerPlugin(ScrollTrigger);

function Whitepaper() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            if (logoRef.current) {
                tl.from(logoRef.current, {
                    y: -50,
                    opacity: 0,
                    duration: 1,
                    delay: 0.2,
                });
            }

            if (titleRef.current) {
                tl.from(titleRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    scale: 0.8,
                }, '-=0.6');
            }

            if (subtitleRef.current) {
                tl.from(subtitleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                }, '-=0.8');
            }

            tl.from('.cta-text', {
                y: 30,
                opacity: 0,
                duration: 0.8,
            }, '-=0.6');

            shapeRefs.current.forEach((shape, index) => {
                if (shape) {
                    gsap.to(shape, {
                        y: 'random(-30, 30)',
                        x: 'random(-20, 20)',
                        rotation: 'random(-15, 15)',
                        duration: 'random(3, 5)',
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        delay: index * 0.2,
                    });
                }
            });

            if (contentRef.current) {
                gsap.to(contentRef.current, {
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    },
                    y: -50,
                    ease: 'none',
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="whitepaper-container">
            <div className="background-gradient"></div>

            <div className="floating-shapes">
                <div ref={(el: HTMLDivElement | null) => { shapeRefs.current[0] = el }} className="shape shape-1"></div>
                <div ref={(el: HTMLDivElement | null) => { shapeRefs.current[1] = el }} className="shape shape-2"></div>
                <div ref={(el: HTMLDivElement | null) => { shapeRefs.current[2] = el }} className="shape shape-3"></div>
                <div ref={(el: HTMLDivElement | null) => { shapeRefs.current[3] = el }} className="shape shape-4"></div>
            </div>

            <div className="content-wrapper" ref={contentRef}>
                <div className="logo" ref={logoRef}>
                    <div className="logo-text">MFM</div>
                </div>

                <h1 className="main-title" ref={titleRef}>
                    Whitepaper<br />
                    <span className="highlight">Coming Soon</span>
                </h1>

                <p className="subtitle" ref={subtitleRef}>
                    We're crafting something extraordinary. Our comprehensive whitepaper will unveil
                    innovative solutions and groundbreaking insights that will reshape the future.
                </p>

                <div className="cta-text">
                    Stay tuned for the official release
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                </div>
            </div>
        </div>
    );
}

export default Whitepaper;