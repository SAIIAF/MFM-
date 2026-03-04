import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/MediaMonitoring.css";
import Footer from "../components/Footer";
import presentationAR from "../assets/images/presentaion/MFM-eMM Ar brief.pdf";
import presentationEN from "../assets/images/presentaion/mfm-eMM.pdf";
import partnerLogo from "../assets/images/لوجو/eMM-Logo - Copy.png";

gsap.registerPlugin(ScrollTrigger);

const MediaMonitoring: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const nextSectionRef = useRef<HTMLDivElement>(null);
    const [lang, setLang] = useState<"en" | "ar">("en");

    /* ===============================
       HERO + SCROLL ANIMATIONS
    =============================== */

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* HERO INTRO */
            const tl = gsap.timeline();

            tl.from(".hero-title", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            })
                .from(".hero-subtitle", {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.8")
                .from(".lang-toggle", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                }, "-=0.7")
                .from(".scroll-indicator", {
                    opacity: 0,
                    y: -20,
                    duration: 0.8,
                    ease: "power2.out",
                }, "-=0.6");


            /* GENERIC SECTION REVEAL */
            gsap.utils.toArray<HTMLElement>(".reveal").forEach((section) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 80,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                });
            });

            /* STAGGER ITEMS */
            gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((item) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 60,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                });
            });

            /* PARTNER LOGO SCALE */
            gsap.from(".partner-logo-wrapper", {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".partner-logo-wrapper",
                    start: "top 80%",
                }
            });

            /* PARALLAX HERO EFFECT */
            gsap.to(".hero", {
                backgroundPosition: "50% 70%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });

        }, pageRef);

        return () => ctx.revert();
    }, []);

    /* ===============================
       LANGUAGE SWITCH ANIMATION
    =============================== */

    const switchLanguage = (newLang: "en" | "ar") => {
        if (lang === newLang) return;

        gsap.to(contentRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                setLang(newLang);
                gsap.fromTo(
                    contentRef.current,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                );
            },
        });
    };

    const scrollToNextSection = () => {
        nextSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handlePresentationView = (url: string) => {
        window.open(url, "_blank");
    };

    /* ===============================
       TEXT CONTENT
    =============================== */

    const englishText = `Media monitoring is the starting point for Public Relations work...
    After more than forty years of working in public relations, I've found that planning public relations programs must begin with measurement and media analysis, but not end, with media monitoring. It tracks what was said, where it was published, who said it, and sometimes how clear or widespread the message was. This information is useful and essential. However, simply mentioning a brand doesn't explain the impact of that mention on perceptions, trust, or behaviour. Public relations measurement begins when we move beyond simply counting outputs and start interpreting meaning and impact. This distinction is evident in the Barcelona Principles, which emphasize that measurement should focus on results and impact rather than outputs alone. Monitoring provides data, while measurement provides insights. They feed into each other.

One of the most common mistakes among public relations agencies and brand teams is confusing quantity with value. A comprehensive report filled with clips, impressions, reach, and graphs may seem reassuring, suggesting progress and effort. However, decades of evaluation research show that activity does not equal impact, and outputs do not automatically translate into results. You may have previously worked with a well-known brand that enjoyed months of sustained media exposure. On the surface, the numbers were positive. However, deeper analysis revealed a gradual, negative shift in the attitudes of a key consumer segment. While monitoring and observation suggested stability, measurement revealed a slow decline in reputation that could have escalated into a major crisis if ignored.

This isn't a competition between monitoring and measurement; they are partners, not rivals. Monitoring provides the raw data, while measurement transforms it into reliable evidence for decision-makers. When the two are mixed, public relations loses credibility. When they work together, public relations proves its worth. This isn't theory; it's practical experience supported by research and practice across various sectors and markets.

So, let's be clear, calmly, and without exaggeration. Media monitoring is data; public relations measurement is in-depth understanding. One tells you what happened, while the other tells you what it means and what needs to be done next. If we continue to treat them as one and the same, we will keep demanding that public relations prove its worth using the wrong tools. This is a habit the profession can no longer afford.
`;

    const arabicText = `رصد وسائل الإعلام بداية عمل العلاقات العامة...
    بعد أكثر من أربعين  عامًا من العمل في مجال قياس العلاقات العامة وتحليل وسائل الإعلام،  وجدت أن العمل في التخطيط لبرامج العلاقات العامة لابد أن يبدأ  برصد وسائل الإعلام، ولا ينتهي عنده. فهو يرصد ما قيل، وأين نُشر، ومن قاله، وأحيانًا مدى وضوح الرسالة أو انتشارها. هذه المعلومات مفيدة وضرورية. مع ذلك، فإن مجرد ذكر علامة تجارية لا يفسر تأثير هذا الذكر على التصورات أو الثقة أو السلوك. يبدأ قياس العلاقات العامة عندما نتجاوز مجرد إحصاء المخرجات ونبدأ في تفسير المعنى والأثر. هذا التمييز واضح في مبادئ برشلونة، التي تؤكد على ضرورة تركيز القياس على النتائج والأثر بدلاً من المخرجات وحدها, حيث  يوفر الرصد البيانات، بينما يوفر القياس رؤى ثاقبة. يغذي أحدهما الآخر.

من أكثر الأخطاء شيوعاً بين وكالات العلاقات العامة وفرق العلامات التجارية هو الخلط بين الكم والقيمة. قد يبدو التقرير الشامل المليء بالمقاطع والانطباعات والوصول والرسوم البيانية مطمئناً، إذ يوحي بالتقدم والجهد المبذول. مع ذلك، تُظهر عقود من أبحاث التقييم أن النشاط لا يساوي الأثر، وأن المخرجات لا تُترجم تلقائياً إلى نتائج ،). قد تكون عملت سابقاً مع علامة تجارية شهيرة, والتي احتفت بظهور إعلامي مستمر لأشهر. ظاهرياً، وكانت الأرقام إيجابية. ومع ذلك، كشف تحليل معمق عن تحول سلبي تدريجي في توجهات شريحة رئيسية من المستهلكين. وفي حين أشارت المراقبة والرصد إلى استقرار الوضع، بينما كشف القياس عن تدهور بطيء في السمعة، كان من الممكن أن يتفاقم إلى أزمة كبيرة لو تم تجاهله.

ليست هذه مُنافسة بين الرصد والقياس، بل هما شريكان لا مُتنافسان. يُوفر الرصد المادة الخام، بينما يُحوّلها القياس إلى أدلة يُمكن لصناع القرار الوثوق بها. عندما يختلط الأمر بينهما، تفقد العلاقات العامة مصداقيتها. وعندما يعملان معًا، تُثبت العلاقات العامة جدارتها. هذه ليست نظرية، بل تجربة عملية مدعومة بالبحث والممارسة في مختلف القطاعات والأسواق.

إذن، دعونا نكون واضحين، بهدوء ودون تهويل. رصد وسائل الإعلام هو بيانات، وقياس العلاقات العامة هو فهم عميق. يُخبرك أحدهما بما حدث، بينما يُخبرك الآخر بما يعنيه وما يجب فعله لاحقًا. إذا استمرينا في التعامل معهما على أنهما شيء واحد، فسنظل نطالب العلاقات العامة بإثبات قيمتها باستخدام أدوات خاطئة. هذه عادة لم يعد بإمكان المهنة تحملها.
`;

    return (
        <div className="media-page" ref={pageRef}>
            <section className="hero">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Media Monitoring</h1>
                    <p className="hero-subtitle">
                        Measure, Analyze, and Optimize Your PR Impact
                    </p>

                    <div className="lang-toggle">
                        <button
                            className={lang === "en" ? "active" : ""}
                            onClick={() => switchLanguage("en")}
                        >
                            English
                        </button>
                        <button
                            className={lang === "ar" ? "active" : ""}
                            onClick={() => switchLanguage("ar")}
                        >
                            العربية
                        </button>
                    </div>

                    <div
                        className="scroll-indicator"
                        onClick={scrollToNextSection}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="scroll-arrow"></div>
                    </div>
                </div>
            </section>

            <section className="content-section reveal" ref={nextSectionRef}>
                <div className="container">
                    <div
                        ref={contentRef}
                        className={`content-text ${lang === "ar" ? "arabic" : ""}`}
                    >
                        <h2 className="section-title">
                            {lang === "en"
                                ? "The Foundation of Strategic Communications"
                                : "أساس الاتصالات الاستراتيجية"}
                        </h2>

                        <div className="text-content">
                            {lang === "en" ? englishText : arabicText}
                        </div>
                    </div>
                </div>
            </section>

            <section className="partner-section reveal">
                <div className="container">
                    <h2 className="section-title">Our Strategic Partner</h2>

                    <div className="partner-content">
                        <div className="partner-logo-wrapper">
                            <img
                                src={partnerLogo}
                                alt="Partner Logo"
                                className="partner-logo"
                            />
                        </div>

                        <div className="partner-description">
                            <p>
                                We proudly collaborate with strategic partners who enhance our ability to deliver data-driven PR insights and cutting-edge monitoring solutions across multiple markets. Together, we leverage advanced analytics, comprehensive media coverage, and deep industry expertise to help organizations navigate the complex media landscape with confidence and precision.
                            </p>
                        </div>
                    </div>

                    <div className="partner-features">
                        <div className="feature-item stagger-item">
                            <div className="feature-icon">📊</div>
                            <h4>Advanced Analytics</h4>
                            <p>Real-time insights and reporting</p>
                        </div>

                        <div className="feature-item stagger-item">
                            <div className="feature-icon">🌍</div>
                            <h4>Global Coverage</h4>
                            <p>Media monitoring across regions</p>
                        </div>

                        <div className="feature-item stagger-item">
                            <div className="feature-icon">🎯</div>
                            <h4>Strategic Intelligence</h4>
                            <p>Actionable insights</p>
                        </div> </div> </div> </section> <section className="presentations-section reveal"> <div className="container"> <h2 className="section-title">Resources & Presentations</h2> <p className="section-subtitle"> Explore our comprehensive materials and insights </p> <div className="presentation-cards"> <div className="presentation-card stagger-item"> <div className="card-header"> <div className="card-icon">📄</div> <span className="card-badge">AR</span> </div> <h3>نظرة شاملة عن الخدمة</h3> <p className="card-description"> عرض تقديمي مفصل باللغة العربية يوضح خدمات الرصد الإعلامي والقيمة المضافة لعملك </p> <div className="card-footer"> <button className="btn-primary" onClick={() => handlePresentationView(presentationAR)} > عرض التقديم </button> </div> </div> <div className="presentation-card stagger-item"> <div className="card-header"> <div className="card-icon">📄</div> <span className="card-badge">EN</span> </div> <h3>Comprehensive Service Overview</h3> <p className="card-description"> Detailed English presentation showcasing our media monitoring services and the value we bring to your organization </p> <div className="card-footer"> <button className="btn-primary" onClick={() => handlePresentationView(presentationEN)} > View Presentation </button> </div> </div> </div> </div> </section>

            <Footer />
        </div>
    );
};

export default MediaMonitoring;