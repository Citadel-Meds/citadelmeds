import "./globals.css";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL("https://citadelmeds.co.uk"),
  title: {
    default:
      "Citadel Meds - Reliable, Fully Vetted Healthcare Staff & Clinical Cleaning Services - Available 24/7",
    template: "%s | Citadel Meds",
  },
  description:
    "Citadel Meds provides compliant healthcare staffing and clinical cleaning services across the UK. Reliable, fully vetted professionals available 24/7.",
  applicationName: "Citadel Meds",
  keywords: [
    "Citadel Meds",
    "healthcare staffing",
    "nurses",
    "healthcare assistants",
    "support workers",
    "clinical cleaning",
    "CQC compliant",
    "UK",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Citadel Meds",
    title:
      "Citadel Meds - Reliable, Fully Vetted Healthcare Staff & Clinical Cleaning Services - Available 24/7",
    description:
      "Compliant healthcare staffing and clinical cleaning services across the UK. Reliable, fully vetted professionals available 24/7.",
    images: [
      {
        url: "/images/logo-icon-transparent.png",
        width: 512,
        height: 512,
        alt: "Citadel Meds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Citadel Meds - Reliable, Fully Vetted Healthcare Staff & Clinical Cleaning Services - Available 24/7",
    description:
      "Compliant healthcare staffing and clinical cleaning services across the UK. Reliable, fully vetted professionals available 24/7.",
    images: ["/images/logo-icon-transparent.png"],
  },
  icons: {
    icon: [{ url: "/images/logo-icon-dark.png" }],
    shortcut: [{ url: "/images/logo-icon-dark.png" }],
    apple: [{ url: "/images/logo-icon-transparent.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={``} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
