import { useEffect, useRef, useState } from 'react';
import '../styles/whitepaper.css';

interface WhitePaper {
    id: number;
    title: string;
    description: string;
    extended: string;
    facts: { value: string; label: string }[];
    date: string;
    readTime: string;
    image: string;
    category: string;
}

const PLACEHOLDER_IMG = 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800';

// ──── White Paper Data for MFM Marketing Company ────
const whitepaperData: WhitePaper[] = [
    {
        id: 1,
        title: 'Digital Trends: A Comprehensive Guide to Modern Marketing',
        description: 'A comprehensive guide exploring the latest trends in digital marketing and the factors shaping modern company strategies toward success.',
        extended: 'In this white paper, we dive deep into the fundamental digital trends for 2026 and beyond. We discuss how artificial intelligence impacts personalized marketing strategies, the importance of data in smart decision-making, and how brands can build genuine trust with their audience. The guide covers effective social media strategies, user experience optimization, and accurate ROI measurement techniques that drive real business results.',
        facts: [{ value: '89%', label: 'Digital Growth' }, { value: '2.5B', label: 'Global Users' }, { value: 'AI', label: 'Top Tech' }, { value: '4.2x', label: 'ROI Increase' }],
        date: 'May 10, 2026',
        readTime: '8 min read',
        image: PLACEHOLDER_IMG,
        category: 'Digital Strategy',
    },
    {
        id: 2,
        title: 'Branding Strategies in the Digital Competition Era',
        description: 'How brands build strong identity and maintain genuine engagement with their audience in a crowded marketplace.',
        extended: 'Today\'s successful brands are not just about the product, but about the story and values they represent. This section explains how companies can build consistent visual identity, create content that resonates with their audience, and use data to understand consumer behavior more deeply. We review examples of global companies that succeeded in building lasting relationships with their customers.',
        facts: [{ value: '73%', label: 'Influenced by Trust' }, { value: '5+', label: 'Touchpoints' }, { value: '82%', label: 'Trust Recommendations' }],
        date: 'May 3, 2026',
        readTime: '6 min read',
        image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Branding Strategy',
    },
    {
        id: 3,
        title: 'SEO Optimization: The Practical Implementation Guide',
        description: 'A comprehensive practical guide to understanding search engines and improving your website visibility in organic search results.',
        extended: 'This section covers SEO fundamentals and advanced strategies, from keyword research to backlink building. We discuss the latest Google algorithm changes, the importance of user experience optimization, and how to measure your strategy\'s success through clear metrics. The guide also includes real case studies from companies that achieved significant growth through smart SEO strategies.',
        facts: [{ value: '68%', label: 'Traffic from Search' }, { value: '3+ years', label: 'Sustainable Results' }, { value: '250%', label: 'Average Growth' }],
        date: 'May 1, 2026',
        readTime: '10 min read',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Search Optimization',
    },
    {
        id: 4,
        title: 'Social Media Marketing: The Art and Science',
        description: 'A comprehensive guide to maximizing social media platforms to build engaged communities and drive real sales.',
        extended: 'Social media marketing is no longer optional but essential. This guide explores how to select the right platforms, create engaging content, and build a loyal community around your brand. We cover paid advertising strategies, performance measurement, and effective customer comment responses. We also provide practical tips on the best posting times and content types that achieve the highest engagement rates.',
        facts: [{ value: '4.8B', label: 'Active Users' }, { value: '2:30 hrs', label: 'Daily Time' }, { value: '56%', label: 'Conversion Rate' }],
        date: 'April 28, 2026',
        readTime: '7 min read',
        image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Social Media',
    },
    {
        id: 5,
        title: 'Data Analytics and Business Intelligence',
        description: 'How to transform raw data into actionable insights that drive strategic business decisions.',
        extended: 'Data is the new gold of the digital age. This chapter explains how to effectively collect, clean, and analyze data in meaningful ways. We review popular analytics tools and business intelligence platforms that help companies understand customer behavior more deeply. We also explain how to use forecasting and predictive models to make better decisions and improve revenue.',
        facts: [{ value: '78%', label: 'Data-Driven' }, { value: '5.2M', label: 'Data Sources' }, { value: '340%', label: 'ROI' }],
        date: 'April 20, 2026',
        readTime: '9 min read',
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Business Intelligence',
    },
    {
        id: 6,
        title: 'Email Marketing: Effective ROI Strategy',
        description: 'How to build an effective email list and use it to convert subscribers into loyal customers.',
        extended: 'Email marketing delivers the highest ROI compared to all other digital marketing channels. This section explains how to ethically and legally collect subscriber emails, segment your list based on behavior and interests, and send personalized messages that achieve high open and click rates. We also cover email automation and sequential campaigns that are highly effective.',
        facts: [{ value: '$4,400', label: 'Per $1' }, { value: '21%', label: 'Open Rate' }, { value: '47%', label: 'Click Rate' }],
        date: 'April 12, 2026',
        readTime: '6 min read',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Email Marketing',
    },
    {
        id: 7,
        title: 'Content Marketing: Building an Integrated Strategy',
        description: 'A comprehensive guide to creating valuable content that attracts your audience and achieves your business goals.',
        extended: 'Good content is the foundation of any successful marketing strategy. This guide covers understanding your audience\'s needs, choosing appropriate content types (blogs, videos, podcasts, infographics), and creating a consistent editorial calendar. We also address how to distribute content across different channels, measure its impact, and continuously improve it based on data.',
        facts: [{ value: '72%', label: 'Content Preference' }, { value: '3:44 hrs', label: 'Avg Time' }, { value: '53%', label: 'Direct Impact' }],
        date: 'April 5, 2026',
        readTime: '8 min read',
        image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Content Marketing',
    },
    {
        id: 8,
        title: 'Marketing Automation: Efficiency at Scale',
        description: 'How to use automation tools to scale your marketing efforts without increasing resources.',
        extended: 'Marketing automation enables improved efficiency and performance. This chapter explains how to set up automated customer journeys, track digital behavior, and use data to send the right message at the right time. We review popular tools like HubSpot, Marketo, and Drip, explaining how to build automation scenarios that improve conversion and customer retention.',
        facts: [{ value: '451%', label: 'Lead Growth' }, { value: '6x', label: 'Faster Growth' }, { value: '75%', label: 'Time Saved' }],
        date: 'March 28, 2026',
        readTime: '7 min read',
        image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Marketing Automation',
    },
    {
        id: 9,
        title: 'Measuring Success: KPIs and Measurement Tools',
        description: 'How to define the right KPIs and measure the success of your marketing strategy.',
        extended: 'You can\'t improve what you don\'t measure. This section explains how to choose KPIs that reflect your actual business goals, not just big numbers. We cover popular measurement tools like Google Analytics, heatmaps, and time-series analysis. We also explain how to create dashboards that visualize data clearly, making informed decision-making easier.',
        facts: [{ value: '15+', label: 'Key Metrics' }, { value: '80%', label: 'Forecast Accuracy' }, { value: '44x', label: 'Check Rate' }],
        date: 'March 20, 2026',
        readTime: '8 min read',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Measurement & Analytics',
    },
];

/* ── Intersection observer hook ── */
function useVisible(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, visible };
}

/* ── NewsCard ── */
interface NewsCardProps {
    article: WhitePaper;
    delay?: number;
    onReadMore: (article: WhitePaper) => void;
}

function NewsCard({ article, delay = 0, onReadMore }: NewsCardProps) {
    const { ref, visible } = useVisible();

    return (
        <div
            ref={ref}
            className={`news-card${visible ? ' news-card--visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="news-card__image-wrap">
                <img src={article.image} alt={article.title} className="news-card__image" loading="lazy" />
                <span className="news-card__category">{article.category}</span>
            </div>
            <div className="news-card__body">
                <div className="news-card__date">
                    <CalendarIcon />
                    <span>{article.date}</span>
                </div>
                <h3 className="news-card__title">{article.title}</h3>
                <p className="news-card__desc">{article.description}</p>
                <button className="news-card__btn" onClick={() => onReadMore(article)}>
                    <span>Learn More</span>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
}

/* ── NewsModal ──
   Fix: a single backdrop div handles close-on-click.
   The panel calls e.stopPropagation() so clicks inside
   never bubble to the backdrop.
── */
interface NewsModalProps {
    article: WhitePaper | null;
    isOpen: boolean;
    onClose: () => void;
}

function NewsModal({ article, isOpen, onClose }: NewsModalProps) {
    /* Lock body scroll while open */
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    /* Close on Escape */
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    if (!isOpen || !article) return null;

    const facts = article.facts;

    return (
        /* Backdrop: clicking it closes the modal */
        <div className="news-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
            {/* Panel: stops propagation so clicks inside don't hit the backdrop */}
            <div
                className="news-modal-panel"
                onClick={(e: MouseEvent) => e.stopPropagation()}
            >
                {/* Hero image */}
                <div className="news-modal-panel__hero">
                    <img src={article.image} alt={article.title} />
                    <div className="news-modal-panel__hero-overlay" />
                    <span className="news-modal-panel__category">{article.category}</span>
                    <button
                        className="news-modal-panel__close"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="news-modal-panel__body">
                    <div className="news-modal-panel__meta">
                        <div className="news-modal-panel__date">
                            <CalendarIcon />
                            <span>{article.date}</span>
                        </div>
                        <div className="news-modal-panel__divider" />
                        <span className="news-modal-panel__read-time">{article.readTime}</span>
                    </div>

                    <h2 className="news-modal-panel__title">{article.title}</h2>
                    <div className="news-modal-panel__sep" />

                    <p className="news-modal-panel__lead">{article.description}</p>
                    <p className="news-modal-panel__text">{article.extended}</p>

                    {facts.length > 0 && (
                        <div className="news-modal-panel__facts">
                            {facts.map((f, i) => (
                                <div className="news-modal-panel__fact" key={i}>
                                    <span className="news-modal-panel__fact-value">{f.value}</span>
                                    <span className="news-modal-panel__fact-label">{f.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="news-modal-panel__footer">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span className="news-modal-panel__share-label">Share</span>
                        <div className="news-modal-panel__share-btns">
                            <button className="news-modal-panel__share-btn" aria-label="Twitter/X">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /></svg>
                            </button>
                            <button className="news-modal-panel__share-btn" aria-label="LinkedIn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                            </button>
                            <button className="news-modal-panel__share-btn" aria-label="Copy link">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                            </button>
                        </div>
                    </div>
                    <button className="news-modal-panel__close-text" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ── Icon helpers ── */
function CalendarIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

/* ── Main White Paper page ── */
export default function WhitePaper() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [heroVisible, setHeroVisible] = useState(false);
    const featuredRef = useRef<HTMLDivElement>(null);
    const [featuredVisible, setFeaturedVisible] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<WhitePaper | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const el = featuredRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setFeaturedVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const handleReadMore = (article: WhitePaper) => {
        setSelectedArticle(article);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedArticle(null), 300);
    };

    const [featured, ...rest] = whitepaperData;

    return (
        <main className="news-page">
            {/* Hero */}
            <section className={`news-hero${heroVisible ? ' news-hero--visible' : ''}`} ref={heroRef}>
                <div className="news-hero__overlay" />
                <div className="news-hero__content">
                    <span className="news-hero__eyebrow">MFM Marketing</span>
                    <h1 className="news-hero__title">White Papers</h1>
                    <p className="news-hero__subtitle">
                        Explore our latest research and comprehensive guides on digital marketing and branding. Valuable insights to develop effective marketing strategies.
                    </p>
                    <div className="news-hero__divider" />
                </div>
                <div className="news-hero__shapes">
                    <div className="news-hero__shape news-hero__shape--1" />
                    <div className="news-hero__shape news-hero__shape--2" />
                    <div className="news-hero__shape news-hero__shape--3" />
                </div>
            </section>

            {/* Featured */}
            <section className="news-section">
                <div className="news-container">
                    <div className="section-header">
                        <span className="section-header__label">Featured White Paper</span>
                        <h2 className="section-header__title">Latest Research</h2>
                        <div className="section-header__line" />
                    </div>
                    <div ref={featuredRef} className={`featured-card${featuredVisible ? ' featured-card--visible' : ''}`}>
                        <div className="featured-card__image-wrap">
                            <img src={featured.image} alt={featured.title} className="featured-card__image" />
                            <span className="featured-card__category">{featured.category}</span>
                        </div>
                        <div className="featured-card__body">
                            <div className="featured-card__date">
                                <CalendarIcon />
                                <span>{featured.date}</span>
                            </div>
                            <h2 className="featured-card__title">{featured.title}</h2>
                            <p className="featured-card__desc">{featured.description}</p>
                            <div className="featured-card__actions">
                                <button className="btn-primary" onClick={() => handleReadMore(featured)}>
                                    <span>Download White Paper</span>
                                    <ArrowIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="news-section news-section--grid">
                <div className="news-container">
                    <div className="section-header">
                        <span className="section-header__label">All White Papers</span>
                        <h2 className="section-header__title">Research Library</h2>
                        <div className="section-header__line" />
                    </div>
                    <div className="news-grid">
                        {rest.map((article, i) => (
                            <NewsCard key={article.id} article={article} delay={i * 80} onReadMore={handleReadMore} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            {/* <section className="news-cta">
                <div className="news-container">
                    <div className="news-cta__inner">
                        <h2 className="news-cta__title">{t('ابقَ على اطّلاع دائم', 'Stay Updated')}</h2>
                        <p className="news-cta__text">
                            {t(
                                'اشترك في نشرتنا الإخبارية ليصلك كل جديد من مزارع شهيلا مباشرةً إلى بريدك الإلكتروني',
                                'Subscribe to our newsletter and receive the latest updates from Shehaila Farms directly in your email'
                            )}
                        </p>
                        <div className="news-cta__form">
                            <input
                                type="email"
                                placeholder={t('أدخل بريدك الإلكتروني', 'Enter your email address')}
                                className="news-cta__input"
                                dir={language === 'ar' ? 'rtl' : 'ltr'}
                            />
                            <button className="news-cta__submit">{t('اشتراك', 'Subscribe')}</button>
                        </div>
                    </div>
                </div>
            </section> */}

            <NewsModal article={selectedArticle} isOpen={isModalOpen} onClose={handleCloseModal} />
        </main>
    );
}
