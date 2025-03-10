export interface Service {
    id: string;
    title: string;
    web: string;
    description: string;
    icon?: string;
    features?: string[];
    benefits?: string[]
    picture: string;
}

export const services: Service[] = [
    {
        id: "1",
        picture: "/service1.jpg",
        title: "technology services",
        web: "technology-services",
        description: "Our team of Subject Matter Experts (SMEs) and technical professionals are dedicated to providing top-notch solutions in the following areas:",
        features: [
            "Procurement of high-performance RF equipment",
            "Antenna Design and Installation",
            "Preventive Maintenance",
            "Troubleshooting, Refurbishment, Corrective Actions"
        ],
        benefits: [
            "Procurement of high-performance RF equipment",
            "Antenna Design and Installation",
            "Preventive Maintenance",
            "Troubleshooting, Refurbishment, Corrective Actions"
        ]
    },
    {
        id: "2",
        picture: "/service2.jpg",
        title: "management",
        web: "management",
        description: "Leverage your know-how and increase your efficiency using a holistic and agile approach.",
        features: [
            "Auditing",
            "Evaluation",
            "Benchmarking",
            "Recommendations, Training"
        ],
        benefits: [
            "Procurement of high-performance RF equipment",
            "Antenna Design and Installation",
            "Preventive Maintenance",
            "Troubleshooting, Refurbishment, Corrective Actions"
        ]
    },
    {
        id: "3",
        picture: "/service3.jpg",
        title: "service support",
        web: "service-support",
        description: "Support for your Customer Facing Functions in effective and efficient service provisioning.",
        features: [
            "Service Desk",
            "Service Reporting",
            "Incident Management",
            "Continuous Improvement"
        ],
        benefits: [
            "Service Desk",
            "Service Reporting",
            "Incident Management",
            "Continuous Improvement"
        ]
    },
    {
        id: "4",
        picture: "/service4.jpg",
        title: "software development",
        web: "software-development",
        description: "Define, design, and develop suitable digital applications and facilitate their integration into your digital landscape.",
        features: [
            "Define your digital application requirements",
            "Create intuitive and user-friendly designs.",
            "Build robust and scalable digital applications.",
            "Application integration in your digital environment"
        ],
        benefits: [
            "User friendly design",
            "Robust and scalable application",
            "Application integration"
        ]
    }
];
