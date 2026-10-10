import CareersContent from "./careers-content";
export const metadata = {
  title: "Careers",
  description: "Join Citadel Meds Ltd for flexible healthcare shifts, competitive pay, ongoing training and dedicated support across the UK.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers | Citadel Meds", url: "/careers" },
};
export default function CareersPage() { return <CareersContent />; }
