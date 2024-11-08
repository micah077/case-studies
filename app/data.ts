import { Images } from "@/assests/GardenCase";
import { Images2 } from "@/assests/Yuslord";
import { StaticImageData } from "next/image";

export const pageData = [
    {
        id: 1,
        brandColor: "#056CF2",
        heroRightImage: Images.heroRightImage,
        heroLeftTitle: "The Garden",
        heroLeftIcon: Images.heroRightIcon,
        heroLeftDescription: "The client launched an innovative consumer engagement website where users earn rewards by completing various missions. The platform gamifies consumer interactions, encouraging users to participate in tasks and earn points redeemable for rewards.",
        heroLeftSiteLink: "",
        heroLeftWebsiteIcon: Images.heroLeftWebsiteIcon,
        PlatformIcon: Images.platformIcon,
        DeliverablesIcon: Images.deliverablesIcon,
        heroRightPlaformBorder: Images.heroRightPlaformBorder,
        platformText: "Website",
        deliverablesText: "UI Design, Development",
        VisionImage: Images.animatedLaptop,
        visionTitle: ["The client required a dynamic and engaging platform that motivates user participation through a rewards-based system. They needed to integrate shopping missions to boost user engagement and increase revenue via affiliate marketing partnerships. Additionally, the client wanted the platform to provide personalized shopping experiences, making it easy for users to find products that match their interests and preferences.", "By fostering a sense of achievement and offering tangible rewards, the client aimed to create a user-centric environment that continuously motivates participation and drives sustainable growth for the platform. This vision was centered on ensuring that users feel valued and engaged, ultimately contributing to the platform's long-term success."],
        visionProblem: ["Integrating shopping as a mission within the existing framework.", "Setting up affiliate integrations with Impact.com to earn commissions from user purchases.", "Balancing robust security needs with a smooth and intuitive user interface.", "Continuously updating and maintaining the platform to keep up with evolving market trends and user expectations."],
        providedSoltuionDescription: "The platform offers a range of innovative features designed to enhance user experience and streamline operations. With Magic Link integration, users can simplify the login process via links sent directly to their email. The customizable referral links feature allows users to personalize their referral links, making it easier to share and engage with others. The mobile-optimized profile management ensures a seamless experience on mobile devices, allowing users to manage their profiles on the go. An admin dashboard is also provided to facilitate efficient management of users and missions. The integration of NCTR cryptocurrency rewards users for completing missions, adding an incentive layer to engagement. Additionally, Impact.com integration enables the platform to add shops and create shopping missions, expanding its functionality. With SendGrid, users receive timely email notifications, while real-time notifications, powered by WebSockets, keep them updated within the app. These features combine to create a robust, user-friendly ecosystem.",
        providedSolutionLaptop: Images.providedSolutionLaptop,
        providedSolutionBackground: Images.providedSolutionBackground,
        providedSolutionLaptopDescription: "We collaborated with our client to launch an innovative platform that reimagines consumer engagement. By gamifying interactions, we created a system where users complete various missions, earning points that can be redeemed for rewards, driving participation and loyalty.",
        featureNumber: 20,
        featuresAdded: [
            { title: "Magic Link Integration" },
            { title: "Customizable Referral Links" },
            { title: "Mobile-Optimized Profile Management" },
            { title: "Admin Dashboard with Search Functionality" },
            { title: "Referral Program with 100% NCTR Rewards" },
            { title: "'How it Works' Page with Animations" },
            { title: "Flip a Coin Feature" },
            { title: "Video and Content Missions" },
            { title: "Optimized Backend APIs" }
        ],
        imageSlide: [{ showColor: false, bgImage: Images.ImageSliderBg, color: '#ffffff', image: Images.slideImage1 }, { showColor: true, color: '#2C82E1', image: Images.slideImage2 }, { bgImage: Images.ImageSliderBg, showColor: false, color: '#ffffff', image: Images.slideImage3 }],
        results: [
            { title: "Enhanced User Engagement", description: "Missions, real-time notifications, and email updates boost user interaction.", img: Images.result1 },
            { title: "Improved User Experience", description: "Mobile-optimized functionalities ensure a seamless user experience. ", img: Images.result2 },
            { title: "Effective Referral Program", description: "Significantly boosts user acquisition.", img: Images.result3 },
            { title: "Streamlined Admin Control", description: "Comprehensive dashboard for efficient management. ", img: Images.result4 },
            { title: "Scalable and Performant Backend", description: "Ensures robust performance and scalability.", img: Images.result5 },
            { title: "Reward-Based Engagement", description: "Encourages user participation through NCTR rewards.", img: Images.result6 },
        ],
        resultVideo: "https://s3-figma-videos-production-sig.figma.com/video/1186580512184340810/TEAM/f0bd/9d28/-5b85-49da-ae03-de666e2e28f4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bqmmabzkmgf-WFKYD45~qITJtiag~74Kq0Rj15nabaR5hY1AerAH1bKX1DWQHCgN9Rdau2~WP618fZC~rcbMlQ9hoqnwhDj6bcvsACfeWV6l6ZdQZA7w2Xh4JDFbUZk3KgimJ35sXx~Sed~umuQ7GeE8pyfPtVYCqk6It7QOHcT9GHMKCT~cjlnKo39F2hOyk9UOxRwZuaEduk77W2pEs0bcl28rNhoMkwFQQftLH9ev21lAL4Xk8COi1~uK5OVR14UlCK1XW9d1fCf76hvODzrKKtxUUkv34Yk2IxeU-SGWHXKCTxAUp0l6Q9zQde325ws~pry1Bz2UJQKLZq0DiQ__",
        techStackColor: "#EBFFFCB2",
        techStack: [
            { img: Images.tech1, title: "Frameworks", text: "Next.js for the front-end development." },
            { img: Images.tech2, title: "Server-Side", text: "Node.js for backend operations." },
            { img: Images.tech3, title: "Hosting", text: "AWS S3 for reliable and scalable hosting." },
            { img: Images.tech4, title: "APIs", text: "Impact.com affiliate APIs for commission tracking." },
            { img: Images.tech5, title: "Design Tool", text: "Figma." },
        ],
        endResultTopRight: Images.engResultTopRight,
        endResultBottomRight: Images.engResultBottomRight,
        endResultBottomLeft: Images.engResultBottomLeft,
        endResultDescription: "The Garden App provides an engaging platform for users to earn rewards through various missions and activities. The seamless integration of user engagement and earning mechanisms ensures high performance and scalability. The admin dashboard empowers administrators to manage and monitor the platform effectively, while real-time notifications and email updates enhance user interaction. The successful integration of various APIs and the   provision of a rewarding user experience highlight the app&apos;s potential for continued growth and user satisfaction.",
        typography: {
            weight: ["Bold", "Semi Bold", "Medium", "Regular"],
            family: ["Inter", "Poppins"],
            colorScheme: ["#056CF2", "#6e45eb", "#121212"],

        },
        typographyLaptop: {
            mobileScreen: Images.typographyMobileScreen,
            mobileLeft: Images.typographyMobileLeft,
            laptopScreen: Images.typographylaptopScreen,
            laptopEight: Images.typographylaptopRight,
        }
    },

    {
        id: 2,
        brandColor: "#FFBD59",
        heroRightImage: Images2.heroRightImage,
        heroLeftTitle: "Yuslord",
        heroLeftIcon: Images2.heroRightIcon,
        heroLeftDescription: "Yuslord is a comprehensive car marketplace designed to connect car dealers, auto transport service providers, and car buyers. The platform facilitates the buying and selling of cars, offers auto-shipping services, and provides car inspection services. The primary goal is to create a seamless experience for all users involved in the car trading ecosystem.",
        heroLeftSiteLink: "",
        heroLeftWebsiteIcon: Images2.heroLeftWebsiteIcon,
        PlatformIcon: Images2.platformIcon,
        DeliverablesIcon: Images2.deliverablesIcon,
        heroRightPlaformBorder: Images2.heroRightPlaformBorder,
        platformText: "Website",
        deliverablesText: "UI Design, Development",
        VisionImage: Images2.animatedLaptop,
        visionTitle: ["The vision for Yuslord is to streamline the car trading process by creating a unified platform where car dealers can list their vehicles, shippers can offer transportation services, and buyers can easily find and purchase cars. The platform aims to enhance transparency and efficiency in the automotive market, providing a reliable service akin to pakwheels.com, with additional features inspired by carvana.com."],
        visionProblem: ["Integrating multiple services (car sales, auto shipping, inspections) on a single platform.", "Managing a large database with over 30,000 products.", "Ensuring fast and responsive performance despite heavy data loads.", "Implementing a 3D-360° view for cars to provide a detailed visual experience for buyers."],
        providedSoltuionDescription: "We developed a multi-functional platform, focusing on seamless integration of car listings, auto transport services, and car inspection features. The platform supports car dealers and shippers in creating communities and posting their offerings, while buyers can explore detailed car listings, including 3D-360° views.",
        providedSolutionLaptop: Images2.providedSolutionLaptop,
        providedSolutionBackground: Images2.providedSolutionBackground,
        providedSolutionLaptopDescription: "Yuslord launched a dynamic car marketplace that streamlines the entire car trading process. By connecting car dealers, auto transport service providers, and buyers, we created a platform that simplifies buying, selling, shipping, and inspecting vehicles, ensuring a seamless and efficient experience for all users.",
        featureNumber: 25,
        featuresAdded: [
            { title: "User Registration", text: "Separate accounts for car dealers, auto transport service providers, and buyers." },
            { title: "Car Search and Listing", text: "Advanced search options and detailed car listings with multiple images." },
            { title: "Auto Transport Services", text: "Shippers can list their services, and users can select and contact shippers." },
            { title: "Car Inspection Services", text: "Users can request inspections, and service providers can upload inspection reports." },
            { title: "3D-360° Car View", text: "Separate accounts for car dealers, auto transport service providers, and buyers." },
            { title: "Community Pages", text: "Separate accounts for car dealers, auto transport service providers, and buyers." },
            { title: "Admin Dashboard", text: "Separate accounts for car dealers, auto transport service providers, and buyers." },
        ],
        imageSlide: [
            { showColor: false, bgImage: Images.ImageSliderBg, color: '#ffffff', image: Images2.slideImage1 },
            { showColor: true, color: '#FFBD59', image: Images2.slideImage2 },
            { bgImage: Images.ImageSliderBg, showColor: false, color: '#ffffff', image: Images2.slideImage3 }
        ],
        results: [
            { title: "User-Friendly Interface", description: "User-Friendly Interface Prioritizes intuitive navigation, allowing users to easily browse through the platform.", img: Images2.result1 },
            { title: "Seamless Interaction", description: "Enables effortless exploration of car sales, shipping options, and inspection services in one place.", img: Images2.result2 },
            { title: "Integrated Marketplace", description: "Combines comprehensive car sales, shipping, and inspection services to enhance efficiency.", img: Images2.result3 },
            { title: "Detailed Car Views", description: "Provides in-depth vehicle information, empowering users to make informed decisions quickly.", img: Images2.result4 },
            { title: "Fast Search Capabilities", description: "Fast Search Capabilities Streamlines the process of finding cars, contributing to a more efficient trading experience.", img: Images2.result5 },
            { title: "Enhanced User Engagement", description: "Enhanced User Engagement Interactive features foster trust and satisfaction, making the marketplace experience more engaging.", img: Images2.result6 },
        ],
        resultVideo: "https://s3-figma-videos-production-sig.figma.com/video/1186580512184340810/TEAM/059d/e665/-79f7-4b2c-be9d-7bb8d9657412?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oPpgbV1HghcpXUS4KBTOrMtI14Cb9mcor67kvwlDFlOZNZUdxZMIWSkyV3bQWe4hjARsRlNSmKyR-x7eDnt1Tygd1zHGPoms5~raLNO8GsuaJbbXDNcWJ~pe7AInbwmtc6m9JN8KZgDUk1ROAsvH63ORhL3xU31Fd6kMfif6919hArS3HT1P8wjN-Hcqe6UBb3Vwb8jUVvNxEQpBJpqTyru~HVpRNrH5M98K654rMk1IwKKwuSasPwO7oYRFpWgVBRC~oSfq-SoVDlCw3gf~uOw-v~pQjV-6qMyiIR1Yl0xKygiX1BfpnsGJa~CVXzWzvZWp8DhWIVaaTl~ilLFUYw__",
        techStackColor: "#FFFAF2",
        techStack: [
            { img: Images2.tech1, title: "Programming Languages", text: "JavaScript, HTML, CSS." },
            { img: Images2.tech2, title: "Frameworks", text: "React for the front-end development." },
            { img: Images2.tech3, title: "Server-Side", text: "Node.js for backend operations." },
            { img: Images2.tech4, title: "APIs", text: "Integrated various APIs for user authentication, car listings, & service postings." },
            { img: Images2.tech5, title: "Design Tool", text: "Figma." },
        ],
        endResultTopRight: Images2.engResultTopRight,
        endResultBottomRight: Images2.engResultBottomRight,
        endResultBottomLeft: Images2.engResultBottomLeft,
        endResultDescription: "Yuslord now offers a unified platform for car trading, shipping, and inspection services. The platform's efficient performance and comprehensive features have made it a valuable tool for car dealers, buyers, and shippers, enhancing their overall trading experience.",

        typography: {
            weight: ["Bold", "Semi Bold", "Medium", "Regular"],
            family: ["Archivo"],
            colorScheme: ["#FFBD59", "#121212"],

        },
        typographyLaptop: {
            mobileScreen: Images2.typographyMobileScreen,
            mobileLeft: Images2.typographyMobileLeft,
            laptopScreen: Images2.typographylaptopScreen,
            laptopEight: Images2.typographylaptopRight,
        }
    },
]

export type IData = {
    id: number;
    heroRightImage: StaticImageData;
    heroLeftTitle: string;
    heroLeftIcon: any;
    heroLeftDescription: string;
    heroLeftSiteLink: string;
    heroLeftWebsiteIcon: any;
    PlatformIcon: any;
    DeliverablesIcon: any;
    heroRightPlaformBorder: any;
    deliverablesText: string;
    platformText: string;
    VisionImage: StaticImageData;
    visionTitle: string[];
    visionProblem: string[];
    brandColor: string;
    providedSoltuionDescription: string;
    providedSolutionBackground: StaticImageData;
    providedSolutionLaptop: StaticImageData;
    providedSolutionLaptopDescription: string;
    featureNumber: number;
    featuresAdded: {
        title: string;
        text?: string
    }[];
    imageSlide: {
        color: string;
        image: StaticImageData;
        bgImage?: StaticImageData;
        showColor: boolean
    }[];
    results: {
        title: string;
        description: string;
        img: StaticImageData;
    }[];
    resultVideo: string;
    techStackColor: string;
    techStack: {
        img: StaticImageData;
        title: string;
        text: string;
    }[];
    endResultTopRight: StaticImageData;
    endResultBottomRight: StaticImageData;
    endResultBottomLeft: StaticImageData;
    endResultDescription: string;
    typography: {
        weight: string[];
        family: string[];
        colorScheme: string[];
    };
    typographyLaptop: {
        mobileScreen: StaticImageData;
        mobileLeft: StaticImageData;
        laptopScreen: StaticImageData;
        laptopEight: StaticImageData;
    }

}