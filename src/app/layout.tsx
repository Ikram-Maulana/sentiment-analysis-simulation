import { montserrat, poppins } from "@/assets/fonts";
import Navbar from "@/components/navbar";
import ShowToast from "@/components/show-toast";
import "@/styles/globals.css";

export const metadata = {
  description:
    "Website ini berfungsi sebagai alat untuk mensimulasikan proses klasifikasi sentimen dan aspek dari ulasan pengguna aplikasi MyPertamina menggunakan algoritma Support Vector Machine (SVM).",
  applicationName: "Simulasi Klasifikasi Sentimen Berdasarkan Aspek",
  keywords: [
    "Ikram Maulana",
    "Ikram Maulana Portfolio",
    "Ikram Maulana Website",
    "Ikram Maulana Full Stack Web Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Sentimen Analysis",
    "Sentimen Analisis",
    "Klasifikasi Sentimen",
    "Aspect Based Sentiment Classification",
    "Klasifikasi Sentimen Berdasarkan Aspek",
    "Aspect Based Sentiment Classification Simulation",
    "Simulasi Klasifikasi Sentimen Berdasarkan Aspek",
    "Aspect Based Sentiment Classification Simulation Website",
    "Website Simulasi Klasifikasi Sentimen Berdasarkan Aspek",
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
    title: "Simulasi Klasifikasi Sentimen Berdasarkan Aspek",
    description:
      "Website ini berfungsi sebagai alat untuk mensimulasikan proses klasifikasi sentimen dan aspek dari ulasan pengguna aplikasi MyPertamina menggunakan algoritma Support Vector Machine (SVM).",
    url: "https://sentiment.ikram-maulana.tech",
    site_name: "Simulasi Klasifikasi Sentimen Berdasarkan Aspek",
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
      <body className="overflow-y-scroll antialiased bg-old-500 text-tprimary">
        <Navbar />
        {children}
        <ShowToast />
      </body>
    </html>
  );
}
