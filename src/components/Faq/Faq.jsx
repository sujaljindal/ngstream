import React, { useState } from 'react';
import './Faq.scss';

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const quescont = [
        {
            id: 1,
            content: {
                ques: "What is Quality of Service (QoS) and Quality of Experience (QoE), and how does NGStreams improve them?",
                ans: {
                    pt1: "Our products enhance QoS by optimizing network performance, ensuring efficient bandwidth usage and minimizing latency. QoE is improved through adaptive streaming and enhanced video quality, providing a superior user experience.",
                    pt2: "Our solutions are designed to balance network load effectively, ensuring consistent and high-quality service delivery.",
                },
            },
        },
        {
            id: 2,
            content: {
                ques: "How does NGStreams Transcoding enhance the media streaming experience across different devices and platforms?",
                ans: {
                    pt1: "Transcoding is the process of converting media files into various formats suitable for different devices. ",
                    pt2: "It is crucial for streaming as it ensures compatibility across various platforms and devices, enhancing accessibility. Our transcoding solutions offer high-speed processing with minimal quality loss, supporting a wide range of media formats.",
                },
            },
        },
        {
            id: 3,
            content: {
                ques: "How does Content Enrichment by NGStreams enhance content discoverability?",
                ans: {
                    pt1:"Content enrichment involves adding detailed information to media files, making them easier to categorize and search. It enhances content discoverability by improving accuracy in search queries and recommendations. ",
                    pt2: "Our solutions use advanced algorithms to automatically generate rich, relevant metadata, streamlining content management and user navigation.",
                },
            },
        },
        {
            id: 4,
            content: {
                ques: "What makes our Set-Top Boxes amazing?",
                ans: {
                    pt1:"Our Set-Top Boxes are equipped with high-definition streaming capabilities, user-friendly interfaces, and support for a wide range of apps and services. They offer features like voice control, personalized recommendations, and seamless integration with various streaming platforms.",
                    pt2: "Enhanced security and regular software updates ensure a consistently high-quality viewing experience.",
                },
            },
        },
        {
            id: 5,
            content: {
                ques: "How does our Social Analytics service help in content strategy?",
                ans: {
                    pt1:"Our Social Analytics service provides insights into audience preferences and trends by analyzing social media data.",
                    pt2: "This information helps in tailoring content strategies to align with viewer interests and engagement patterns. It aids in making data-driven decisions to optimize content creation and distribution.",
                },
            },
        },
        {
            id: 6,
            content: {
                ques: "What Traffic Management Solutions do we offer and how do they benefit ISPs?",
                ans: {
                    pt1:"Our Traffic Management Solutions include bandwidth allocation, peak time management, and quality of service prioritization. ",
                    pt2:"These tools help ISPs manage network traffic efficiently, reducing congestion and improving overall service quality. They enable ISPs to offer reliable, high-speed internet services to their customers.",
                },
            },
        },
        {
            id: 7,
            content: {
                ques: "How does CloudTV differ from traditional television broadcasting?",
                ans: {
                    pt1:"CloudTV streams content over the internet, offering greater flexibility and a wider range of features compared to traditional broadcasting. It allows for on-demand content access, personalized viewing experiences, and integration with other online services.",
                    pt2:"Our CloudTV solution provides a scalable, cost-effective alternative to traditional TV infrastructure.",
                },
            },
        },
        {
            id: 8,
            content: {
                ques: "What are the advantages of our IPTV services?",
                ans: {
                    pt1:"Our IPTV services offer high-definition streaming, extensive content libraries, and interactive features like video on demand and time-shifted TV.",
                    pt2:"They provide a seamless viewing experience with personalized content recommendations and multi-device support. Enhanced user interfaces and reliable content delivery set our IPTV services apart.",
                },
            },
        },
        {
            id: 9,
            content: {
                ques: "How do NGStreams OTT services stand out in the competitive market?",
                ans: {
                    pt1:"Our OTT services stand out through exceptional content variety, superior streaming quality, and cross-platform compatibility. We focus on user-centric features, such as personalized recommendations and interactive interfaces.",
                    pt2:"Continuous innovation and customer-focused strategies keep us ahead in the competitive OTT market.",
                },
            },
        },
        {
            id: 10,
            content: {
                ques: "Can NGStreams products and services be integrated into existing systems?",
                ans: {
                    pt1:"That's the best part, our products and services are designed for easy integration with existing systems and platforms. We provide comprehensive support and customizable solutions to ensure smooth integration and minimal disruption.",
                    pt2: "Our aim is to enhance existing infrastructures with our advanced technology while ensuring user-friendliness and cost-effectiveness.",
                },
            },
        },
    ];

    const handleToggle = (id) => {
        setActiveQuestion((prev) => (prev === id ? null : id)); 
    };

    return (
        <div className='faq'>
            <div className="head">
                <h1>FAQs, <span>Simplified</span></h1>
                <h3>Curious about NGStreams? Let's clarify all your questions!</h3>
                <h3>Discover our unique approach, project timelines, and what sets us apart in the NGStreams.</h3>
            </div>
            <div className="questions">
                {quescont.map((item) => (
                    <div key={item.id} className="questionanswer">
                        <div className="ques-header">
                            <div className="ques">{item.content.ques}</div>
                            <button
                                className="toggle-btn"
                                onClick={() => handleToggle(item.id)}
                            >
                                {activeQuestion === item.id ? "▲" : "▼"}
                            </button>
                        </div>
                        {activeQuestion === item.id && (
                            <div className="ans">
                                <ul>
                                    <li>{item.content.ans.pt1}</li>
                                    <li>{item.content.ans.pt2}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
