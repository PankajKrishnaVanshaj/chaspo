import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./NextAuthProviders";
import "./globals.css";
import { UserSubscriptionProvider } from "./(context)/UserSubscriptionContext";
import { UpdateCreditUsageProvider } from "./(context)/UpdateCreditUsageContext";
import { TotalUsageProvider } from "./(context)/TotalUsageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "PK ChaSpo | AI-Powered Content Generator",
  description:
    "Create engaging content effortlessly with PK ChaSpo. Powered by advanced AI, it generates high-quality content for blogs, social media, and websites in seconds. No items detected. No rich results detected in this URL. Learn more.",
  keywords:
    "AI content generator, PK ChaSpo, content creation, AI writing tool, blog generator, social media content, website copy, content automation",
  openGraph: {
    title: "PK ChaSpo | AI-Powered Content Generator",
    description:
      "Unleash creativity with PK ChaSpo! Our AI-driven platform creates compelling content tailored to your needs. Perfect for blogs, social media, and websites. No items detected. No rich results detected in this URL. Learn more.",
    url: "http://chaspo.pankri.com",
    type: "website",
    images: [
      {
        url: "/chaspo.png",
        width: 1200,
        height: 630,
        alt: "PK ChaSpo AI Content Generator",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK ChaSpo | AI-Powered Content Generator",
    description:
      "Generate top-notch content effortlessly with PK ChaSpo. Tailored for bloggers, marketers, and creatives. No items detected. No rich results detected in this URL. Learn more.",
    images: ["/chaspo.png"],
    creator: "pankri",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PK ChaSpo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0", // Adjust if there's a price
      priceCurrency: "USD",
    },
    description:
      "PK ChaSpo is an AI-powered content generator that creates high-quality content for blogs, social media, and websites in seconds.",
    url: "http://chaspo.pankri.com",
    image: "http://chaspo.pankri.com/chaspo.png",
    publisher: {
      "@type": "Organization",
      name: "Pankri",
      url: "http://chaspo.pankri.com",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          <UserSubscriptionProvider>
            <UpdateCreditUsageProvider>
              <TotalUsageProvider>{children}</TotalUsageProvider>
            </UpdateCreditUsageProvider>
          </UserSubscriptionProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
