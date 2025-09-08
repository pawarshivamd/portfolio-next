import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Pawar | Front-End Developer Portfolio",
  description: "Hi, I'm Shivam Pawar — a frontend developer building high-performance, responsive UIs with React, Tailwind, and modern web technologies. Explore my work.",
  keywords: [
    "front-end developer",
    "HTML",
    "CSS", 
    "JavaScript",
    "React",
    "web development",
    "portfolio",
    "UI/UX",
    "responsive design",
    "web developer",
    "Tailwind CSS",
    "Next.js",
    "TypeScript"
  ],
  authors: [{ name: "Shivam Pawar" }],
  creator: "Shivam Pawar",
  publisher: "Shivam Pawar",
  robots: "index, follow",
  alternates: {
    canonical: "https://shivam-pawar-7.vercel.app/",
    languages: {
      'en': "https://shivam-pawar-7.vercel.app/",
    },
  },
  verification: {
    google: "googlea344fc1caa8b90da",
    other: {
      "msvalidate.01": "395B991729C266A71B38016C403E2AAE",
    },
  },
  openGraph: {
    type: "website",
    url: "https://shivam-pawar-7.vercel.app/",
    title: "Shivam Pawar | Front-End Developer Portfolio",
    description: "Shivam Pawar is a Front-End Developer crafting fast, responsive, and accessible web interfaces using React, Tailwind CSS, and modern JavaScript. Explore a portfolio showcasing high-quality UI/UX design, live projects, and development expertise.",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQHNI80KcpoT6w/profile-displayphoto-shrink_800_800/B4DZZ9nBquG8Ak-/0/1745864105782?e=1759968000&v=beta&t=bl69TTy6VZZaviDRLnPT8XINYklnE1TWuPuVkJRws4k",
        width: 800,
        height: 800,
        alt: "Shivam Pawar - Front-End Developer",
      },
    ],
    siteName: "Shivam Pawar Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Pawar | Front-End Developer Portfolio",
    description: "Explore the portfolio of Shivam Pawar, showcasing front-end development skills including HTML, CSS, JavaScript, and React. Check out my projects and expertise.",
    images: ["https://media.licdn.com/dms/image/v2/D4D03AQHNI80KcpoT6w/profile-displayphoto-shrink_800_800/B4DZZ9nBquG8Ak-/0/1745864105782?e=1759968000&v=beta&t=bl69TTy6VZZaviDRLnPT8XINYklnE1TWuPuVkJRws4k"],
    creator: "@shivampawar7",
  },
  other: {
    "theme-color": "#0a192f",
    "msapplication-TileColor": "#0a192f",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Shivam Pawar Portfolio",
    "application-name": "Shivam Pawar Portfolio",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a192f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="author" content="Shivam Pawar" />
        <meta name="copyright" content="Shivam Pawar" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://media.licdn.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Shivam Pawar",
              "url": "https://shivam-pawar-7.vercel.app",
              "image": "https://media.licdn.com/dms/image/v2/D4D03AQHNI80KcpoT6w/profile-displayphoto-shrink_800_800/B4DZZ9nBquG8Ak-/0/1745864105782?e=1759968000&v=beta&t=bl69TTy6VZZaviDRLnPT8XINYklnE1TWuPuVkJRws4k",
              "sameAs": [
                "https://www.linkedin.com/in/shivam-pawar7",
                "https://github.com/shivampawar7"
              ],
              "jobTitle": "Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Open to Work"
              },
              "knowsAbout": [
                "HTML",
                "CSS", 
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Bootstrap",
                "Material UI",
                "SEO",
                "Responsive Design",
                "Git",
                "Figma",
                "Next.js",
                "TypeScript"
              ],
              "description": "Frontend developer specializing in React, modern web technologies, and responsive design",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Web Development"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Shivam Pawar | Front-End Developer Portfolio",
              "url": "https://shivam-pawar-7.vercel.app/",
              "description": "Explore the portfolio of Shivam Pawar, showcasing front-end development skills including HTML, CSS, JavaScript, and React.",
              "inLanguage": "en",
              "author": {
                "@type": "Person",
                "name": "Shivam Pawar"
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://media.licdn.com/dms/image/v2/D4D03AQHNI80KcpoT6w/profile-displayphoto-shrink_800_800/B4DZZ9nBquG8Ak-/0/1745864105782?e=1759968000&v=beta&t=bl69TTy6VZZaviDRLnPT8XINYklnE1TWuPuVkJRws4k"
              },
              "potentialAction": {
                "@type": "ReadAction",
                "target": ["https://shivam-pawar-7.vercel.app/"]
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://shivam-pawar-7.vercel.app/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Skills",
                    "item": "https://shivam-pawar-7.vercel.app/#skills"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Projects",
                    "item": "https://shivam-pawar-7.vercel.app/#projects"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Experience",
                    "item": "https://shivam-pawar-7.vercel.app/#experience"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Contact",
                    "item": "https://shivam-pawar-7.vercel.app/#contact"
                  }
                ]
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I offer front-end development services including HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS, and SEO optimization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you open to freelance work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I'm available for freelance or full-time front-end development opportunities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies do you specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I specialize in React, Next.js, TypeScript, Tailwind CSS, modern JavaScript, and responsive web design."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide SEO optimization?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I implement SEO best practices including semantic HTML, meta tags, structured data, and performance optimization."
                  }
                }
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shivam Pawar Development",
              "url": "https://shivam-pawar-7.vercel.app",
              "logo": "https://media.licdn.com/dms/image/v2/D4D03AQHNI80KcpoT6w/profile-displayphoto-shrink_800_800/B4DZZ9nBquG8Ak-/0/1745864105782?e=1759968000&v=beta&t=bl69TTy6VZZaviDRLnPT8XINYklnE1TWuPuVkJRws4k",
              "description": "Professional front-end development services specializing in React, modern web technologies, and responsive design",
              "foundingDate": "2023",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/in/shivam-pawar7",
                "https://github.com/shivampawar7"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
