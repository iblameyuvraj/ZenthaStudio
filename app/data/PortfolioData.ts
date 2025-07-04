export enum PortfolioItemType {
  Image = "image",
  Text = "text",
  Testimonial = "testimonial",
}

export enum PortfolioItemSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

type BasePortfolioItem = {
  size: PortfolioItemSize;
  type: PortfolioItemType;
  baseX: number;
  baseY: number;
  mobileX: number;
  mobileY: number;
  followStrength: number;
  scrollSpeed: number;
};

type ImagePortfolioItem = BasePortfolioItem & {
  type: PortfolioItemType.Image;
  imageUrl: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
};

type TextPortfolioItem = BasePortfolioItem & {
  type: PortfolioItemType.Text;
  text: string;
};

type TestimonialPortfolioItem = BasePortfolioItem & {
  type: PortfolioItemType.Testimonial;
  text: string;
  author: string;
  title: string;
  width: number;
  mobileWidth: number;
};

type PortfolioItem = ImagePortfolioItem | TextPortfolioItem | TestimonialPortfolioItem;

export const getPortfolioItems = (isMobile: boolean): PortfolioItem[] => [
  {
    type: PortfolioItemType.Image,
    size: PortfolioItemSize.Medium,
    imageUrl: "/images/logo.png",
    baseX: 500,
    baseY: 110,
    mobileX: 50,
    mobileY: 120,
    width: 200,
    height: 80,
    mobileWidth: 120,
    mobileHeight: 50,
    followStrength: isMobile ? 0.01 : 0.04,
    scrollSpeed: 0.3,
  },
  {
    type: PortfolioItemType.Image,
    size: PortfolioItemSize.Large,
    imageUrl: "/images/Saas.png",
    baseX: 128,
    baseY: 150,
    mobileX: -20,
    mobileY: 700,
    width: 270,
    height: 140,
    mobileWidth: 150,
    mobileHeight: 80,
    followStrength: isMobile ? 0.015 : 0.08,
    scrollSpeed: 0.7,
  },
  {
    type: PortfolioItemType.Image,
    size: PortfolioItemSize.Small,
    imageUrl: "/images/portfolio.png",
    baseX: 1390,
    baseY: 720,
    mobileX: 200,
    mobileY: 800,
    width: 240,
    height: 100,
    mobileWidth: 130,
    mobileHeight: 60,
    followStrength: isMobile ? 0.02 : 0.05,
    scrollSpeed: 0.5,
  },
  {
    type: PortfolioItemType.Image,
    size: PortfolioItemSize.Small,
    imageUrl: "/images/web-gallery.png",
    baseX: 600,
    baseY: 740,
    mobileX: 270,
    mobileY: 100,
    width: 300,
    height: 180,
    mobileWidth: 160,
    mobileHeight: 100,
    followStrength: isMobile ? 0.015 : 0.05,
    scrollSpeed: 0.4,
  },
  {
    type: PortfolioItemType.Text,
    size: PortfolioItemSize.Small,
    text: "TECH CONSULTING",
    baseX: 474,
    baseY: 600,
    mobileX: 20,
    mobileY: 270,
    followStrength: isMobile ? 0.02 : 0.06,
    scrollSpeed: 0.6,
  },
  {
    type: PortfolioItemType.Text,
    size: PortfolioItemSize.Small,
    text: "BRANDING",
    baseX: 1294,
    baseY: 600,
    mobileX: 220,
    mobileY: 520,
    followStrength: isMobile ? 0.02 : 0.04,
    scrollSpeed: 0.8,
  },
  {
    type: PortfolioItemType.Text,
    size: PortfolioItemSize.Medium,
    text: "WEB DEVELOPMENT",
    baseX: 1400,
    baseY: 200,
    mobileX: 250,
    mobileY: 350,
    followStrength: isMobile ? 0.01 : 0.06,
    scrollSpeed: 0.3,
  },
  {
    type: PortfolioItemType.Text,
    size: PortfolioItemSize.Small,
    text: "SOCIAL MEDIA",
    baseX: 200,
    baseY: 500,
    mobileX: 30,
    mobileY: 550,
    followStrength: isMobile ? 0.015 : 0.07,
    scrollSpeed: 0.9,
  },
  {
    type: PortfolioItemType.Testimonial,
    size: PortfolioItemSize.Medium,
text: "Zentha Studio delivered a stunning website for our jewellery, 'joulree', giving us a remarkable online presence that exceeded our expectations.",
    author: "Rashi Katta",
    title: "Jaipur, Rajasthan",
    baseX: 829,
    baseY: 95,
    mobileX: 20,
    mobileY: 1050,
    width: 300,
    mobileWidth: 280,
    followStrength: isMobile ? 0.015 : 0.04,
    scrollSpeed: 0.4,
  },
  {
    type: PortfolioItemType.Testimonial,
    size: PortfolioItemSize.Medium,
    text: "Zentha Studio created an amazing website for Fluffwalks, our pet hiring startup. The site truly captures our brand’s playful spirit and makes it easy for pet lovers to connect. Professional, innovative, and always attentive to our needs.",
    author: "Adhitya",
    title: "Founder, Mysore",
    baseX: 70,
    baseY: 580,
    mobileX: 20,
    mobileY: 1300,
    width: 280,
    mobileWidth: 280,
    followStrength: isMobile ? 0.02 : 0.06,
    scrollSpeed: 0.6,
  },
  {
    type: PortfolioItemType.Testimonial,
    size: PortfolioItemSize.Medium,
    text: "Zentha Studio delivered a comprehensive full-stack solution for our company with the 'Car Part Detection System' project. Their expertise, professionalism, and dedication exceeded our expectations!",
    author: "prakash Bengani",
    title: "Cheif Executive Officer, Adaccurate digital service",
    baseX: 950,
    baseY: 600,
    mobileX: 20,
    mobileY: 1550,
    width: 290,
    mobileWidth: 280,
    followStrength: isMobile ? 0.015 : 0.05,
    scrollSpeed: 0.5,
  },
];
