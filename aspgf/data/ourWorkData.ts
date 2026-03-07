export interface WorkItem {
    id: number;
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
    featured?: boolean;
}

export const workCategories = [
    "All Category",
    "Education",
    "Charity",
    "Old Age",
    "Orphanage",
];

export const allWorkItems: WorkItem[] = [
    {
        id: 1,
        image: "/images/waari-image.png",
        category: "Charity",
        date: "26/11/2025",
        title: "Vari Relief Program",
        description:
            "During the sacred Ashadhi Wari pilgrimage, our foundation organized a large-scale relief distribution program to support Warkaris walking long distances in challenging weather conditions.",
        featured: true,
    },
    {
        id: 10,
        image: "/images/christmas-donations.png",
        category: "Education",
        date: "15/11/2025",
        title: "Women Empowerment Seminar",
        description:
            "A seminar focused on skill development and entrepreneurship opportunities for underprivileged women.",
    },

    {
        id: 2,
        image: "/images/donations-new.png",
        category: "Education",
        date: "26/11/2025",
        title: "Scholarship Distribution Program",
        description:
            "To support education for deserving students, the foundation conducted a scholarship distribution program for...",
    },
    {
        id: 3,
        image: "/images/donations-2.png",
        category: "Charity",
        date: "26/11/2025",
        title: "Beggar Rehabilitation Center",
        description:
            "A winter relief and community cleanliness initiative was conducted...",
        // featured: true,
    },
    {
        id: 4,
        image: "/images/donations-3.png",
        category: "Charity",
        date: "26/11/2025",
        title: "Matruchhaya Children's Home",
        description:
            "Support provided to orphaned children for winter preparedness and daily sustenance.",
    },
    {
        id: 5,
        image: "/images/donations-2.png",
        category: "Orphanage",
        date: "26/11/2025",
        title: "Spreading Joy This Christmas",
        description:
            "A heartwarming Christmas celebration by Anuja Sushant Patil Global Foundation featuring stationery kit distribution.",
    },
    {
        id: 6,
        image: "/images/donations-2.png",
        category: "Old Age",
        date: "24/11/2025",
        title: "Old Age Home Support Drive",
        description:
            "Monthly support drive providing essential supplies and companionship to elderly residents at the old age home.",
    },
    {
        id: 7,
        image: "/images/donations-2.png",
        category: "Education",
        date: "20/11/2025",
        title: "Digital Literacy Workshop",
        description:
            "Empowering students with digital skills through hands-on workshops conducted at government schools.",
    },
    {
        id: 8,
        image: "/images/donations-2.png",
        category: "Charity",
        date: "18/11/2025",
        title: "Community Kitchen Initiative",
        description:
            "Free meals served daily to underprivileged families and individuals in need across Pune.",
    },
    {
        id: 9,
        image: "/images/donations-2.png",
        category: "Education",
        date: "15/11/2025",
        title: "Women Empowerment Seminar",
        description:
            "A seminar focused on skill development and entrepreneurship opportunities for underprivileged women.",
    },
];
