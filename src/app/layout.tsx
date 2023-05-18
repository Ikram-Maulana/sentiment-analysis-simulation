import { montserrat, poppins } from "@/assets/fonts";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export const metadata = {
  description:
    "This website serves as a tool to simulate the sentiment classification process and aspects of user reviews of the MyPertamina application using the Support Vector Machine (SVM) algorithm.",
  applicationName: "Aspect Based Sentiment Classification Simulation",
  keywords: [
    "Ikram Maulana",
    "Ikram Maulana Portfolio",
    "Ikram Maulana Website",
    "Ikram Maulana Full Stack Web Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Sentimen Analysis",
    "Aspect Based Sentiment Classification",
    "Aspect Based Sentiment Classification Simulation",
    "Aspect Based Sentiment Classification Simulation Website",
  ],
  authors: [
    {
      name: "Ikram Maulana",
      url: "https://ikram-maulana.tech",
    },
  ],
  creator: "Ikram Maulana",
  openGraph: {
    type: "website",
    title: "Aspect Based Sentiment Classification Simulation",
    description:
      "This website serves as a tool to simulate the sentiment classification process and aspects of user reviews of the MyPertamina application using the Support Vector Machine (SVM) algorithm.",
    url: "https://sentiment.ikram-maulana.tech",
    site_name: "Aspect Based Sentiment Classification Simulation",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  themeColor: "#F9F5EB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="overflow-y-scroll bg-old-500">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
