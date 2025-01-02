import React, { useEffect, useState } from 'react';
import './Activity.scss';
import ad from '../../assets/ad insertion.png';
import a from '../../assets/11.png';
import b from '../../assets/12.png';
import c from '../../assets/13.png';
import d from '../../assets/14.png';
import e from '../../assets/15.png';
import f from '../../assets/16.png';
import g from '../../assets/17.png';


const Activity = () => {
    const buttons = [
        {
            id: 1,
            label: "Ad Insertion and Targeting",
            Content: {
                heading: "Unlocking Audience Engagement :",
                spanText: "Precision Ad Insertion & Targeting",
                para: "Precision-targeted ad insertion to optimize audience engagement and ROI by delivering tailored messages to specific demographics. Dynamic insertion technology dynamically adjusts ad content based on real-time data, maximizing ad effectiveness and viewer retention.",
                btnText: "Discover More",
                img: ad,
            },
        },
        {
            id: 2,
            label: "QoS/Qc For VOD OTT Platforms",
            Content: {
                heading: "Elevating Quality Assurance for VOD OTT Platforms",
                spanText: "Delivering Tailored Content:",
                para: "Streamlining content delivery, our QoS/QC solution ensures flawless viewing experiences on VOD OTT platforms, enhancing customer satisfaction and retention.",
                btnText: "Discover More",
                img: a,
            },
        },
        {
            id: 3,
            label: "Transcoding and Adaptive Streaming",
            Content: {
                heading: "Transformative Transcoding for Adaptive Streaming",
                spanText: "Empowering Seamless Viewing:",
                para: "Revolutionizing content delivery, our transcoding solution optimizes media for flawless playback across devices, ensuring a seamless streaming experience. With adaptive streaming, content dynamically adjusts to network conditions, guaranteeing uninterrupted viewing for audiences worldwide.",
                btnText: "Discover More",
                img: b,
            },
        },
        {
            id: 4,
            label: "Smart Meta Data",
            Content: {
                heading: "Enhance Engagement, Enrich Experience: Elevating OTT Content with Metadata",
                spanText: "Mastery",
                para: "Empower your OTT platform with enriched metadata, unlocking deeper engagement and personalized user experiences. Our solution ensures seamless content discovery and relevance, driving viewer satisfaction and retention.",
                btnText: "Discover More",
                img: c,
            },
        },
        {
            id: 5,
            label: "CRA",
            Content: {
                heading: "Transforming Social Analytics into Actionable Strategies.",
                spanText: "Unleash Insights, Amplify Impact:",
                para: "Gain unparalleled understanding of audience sentiments and trends with our social analytics tool. Harness data-driven insights to optimize engagement, elevate brand presence, and drive meaningful interactions.",
                btnText: "Discover More",
                img: d,
            },
        },
        {
            id: 6,
            label: "VR OTT Watch",
            Content: {
                heading: "Dive into a New Reality:",
                spanText: "Transforming Entertainment with VR OTT Watch.",
                para: "Immerse yourself in virtual worlds with our VR OTT Watch technology, delivering high-resolution content and seamless streaming experiences. Harnessing advanced VR capabilities, it ensures compatibility across a range of devices for immersive entertainment anytime, anywhere.",
                btnText: "Discover More",
                img: e,
            },
        },
        {
            id: 7,
            label: "Personalization and Recommendation",
            Content: {
                heading: "Tailored Experiences, Endless Discoveries:",
                spanText: "Redefining Engagement Through Personalization and Recommendation",
                para: "Elevate user satisfaction with our cutting-edge personalization and recommendation engine. Harnessing AI, it delivers curated content, enhancing engagement and driving retention.",
                btnText: "Discover More",
                img: f,
            },
        },
        {
            id: 8,
            label: "SetTop Box",
            Content: {
                heading: "Versatile Entertainment Hub:",
                spanText: "Enhancing Home Viewing Experience with Smart Set-Top Boxes",
                para: "An all-in-one device offering diverse entertainment options and seamless connectivity for an enhanced viewing experience at the comfort of your home.",
                btnText: "Discover More",
                img: g,
            },
        },
    ];

    const [currentId, setCurrentId] = useState(buttons[0].id);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentId((prevId) => {
                const nextIndex = (buttons.findIndex((button) => button.id === prevId) + 1) % buttons.length;
                return buttons[nextIndex].id;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [buttons]);

    const currentContent = buttons.find((button) => button.id === currentId)?.Content;

    return (
        <>
            <section className="activity">
                <h1>Accelerate to a digital future with our products</h1>
                <h2>
                    Customer centricity, innovation, and ethical corporate governance are at our core.
                </h2>
                <div className="container">
                    <div className="btncontainer">
                        {buttons.map((button) => (
                            <button
                                key={button.id}
                                onClick={() => {
                                    setCurrentId(button.id);
                                }}
                                className={currentId === button.id ? "active" : ""}
                                aria-label={button.label}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                    <div className="content">
                        <div className="contentdata">
                            <h1>{currentContent.heading}</h1>
                            <span>{currentContent.spanText}</span>
                            <p>{currentContent.para}</p>
                            <button>{currentContent.btnText}</button>
                        </div>
                        <div className="contentimage">
                            <img src={currentContent.img} alt={currentContent.heading} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Activity;
