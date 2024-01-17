import { people01, people02, people03, facebook, instagram, linkedin, twitter, coinbase, dropbox, send, shield, star } from "public/assets";
import { FaPhone, FaEnvelope } from "react-icons/fa"
// export const navLinks = [
//     {
//         id: "qwikio",
//         title: "We are Qwikio",
//     },
//     {
//         id: "features",
//         title: "Features",
//     },
//     {
//         id: "product",
//         title: "Product",
//     },
//     {
//         id: "clients",
//         title: "Clients",
//     },
// ];
interface ContactInfo {
    id: string;
    icon: React.ElementType; // Use React.ElementType here
    link: string;
    title: string;
}
export const navLinks = [
    {
        id: "qwikio",
        title: "We are Qwikio",
        link: "/who-we-are"
    },
    
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Rewards",
        content:
            "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "100% Secured",
        content:
            "We take proactive steps make sure your information and transactions are secure.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Balance Transfer",
        content:
            "A balance transfer credit card can save you a lot of money in interest charges.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: people03,
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "User Active",
        value: "3800+",
    },
    {
        id: "stats-2",
        title: "Trusted by Company",
        value: "230+",
    },
    {
        id: "stats-3",
        title: "Transaction",
        value: "$230M+",
    },
];

export const footerLinks = [
    // {
    //     id: "footerLinks-1",
    //     title: "Useful Links",
    //     links: [
    //         {
    //             name: "Content",
    //             link: "https://www.qwikio.com/content/",
    //         },
    //         {
    //             name: "How it Works",
    //             link: "https://www.qwikio.com/how-it-works/",
    //         },
    //         {
    //             name: "Create",
    //             link: "https://www.qwikio.com/create/",
    //         },
    //         {
    //             name: "Explore",
    //             link: "https://www.qwikio.com/explore/",
    //         },
    //         {
    //             name: "Terms & Services",
    //             link: "https://www.qwikio.com/terms-and-services/",
    //         },
    //     ],
    // },
    // {
    //     id: "footerLinks-2",
    //     title: "Community",
    //     links: [
    //         {
    //             name: "Help Center",
    //             link: "https://www.qwikio.com/help-center/",
    //         },
    //         {
    //             name: "Partners",
    //             link: "https://www.qwikio.com/partners/",
    //         },
    //         {
    //             name: "Suggestions",
    //             link: "https://www.qwikio.com/suggestions/",
    //         },
    //         {
    //             name: "Blog",
    //             link: "https://www.qwikio.com/blog/",
    //         },
    //         {
    //             name: "Newsletters",
    //             link: "https://www.qwikio.com/newsletters/",
    //         },
    //     ],
    // },
    // {
    //     id: "footerLinks-3",
    //     title: "Partner",
    //     links: [
    //         {
    //             name: "Our Partner",
    //             link: "https://www.qwikio.com/our-partner/",
    //         },
    //         {
    //             name: "Become a Partner",
    //             link: "https://www.qwikio.com/become-a-partner/",
    //         },
    //     ],
    // },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [
    // {
    //     id: "client-1",
    //     logo: airbnb,
    // },
    // {
    //     id: "client-2",
    //     logo: binance,
    // },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];

export const contactInfo: ContactInfo[] = [
    {
        id: "contact-info-1",
        title: "info@qwikio.com",
        icon: FaEnvelope,
        link: "mailto:info@qwikio.com",
    },
    {
        id: "contact-info-2",
        title: '+17735303799',
        icon: FaPhone,
        link: "tel:+17735303799",
    },
];
