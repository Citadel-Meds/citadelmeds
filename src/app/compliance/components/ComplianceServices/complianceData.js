import { CheckIcon, GovernanceIcon, PoliciesIcon, RegistrationIcon, WorkforceSafetyIcon } from "../../../../../public/images";

export const complianceItems = [
  {
    id: 1,
    icon: GovernanceIcon?.src ?? GovernanceIcon,
    label: "Governance Framework",
  },
  {
    id: 2,
    icon: RegistrationIcon?.src ?? RegistrationIcon,
    label: "Registration & Insurance",
  },
  {
    id: 3,
    icon: WorkforceSafetyIcon?.src ?? WorkforceSafetyIcon,
    label: "Workforce Safety",
  },
  {
    id: 4,
    icon: PoliciesIcon?.src ?? PoliciesIcon,
    label: "Policies & Quality Monitoring",
  },
];

export const GOVERNANCE_PILLARS = [
  "Safe",
  "Effective",
  "Caring",
  "Responsive",
  "Well-Led",
];
export const CHECK_ICON_URL =
  CheckIcon?.src ?? CheckIcon;

export const REGISTRATION_INTRO =
  "Citadel Meds Ltd operates with full legal compliance and comprehensive insurance coverage, providing peace of mind to our clients and partners.";

export const REGISTRATION_CARDS = [
  {
    id: "companies-house",
    icon: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773343374/company-svgrepo-com_1_1_olz0gq.svg",
    title: "Companies House Registered",
    line1: "Company No: 16918124",
    line2: "Fully registered and compliant with UK company law",
  },
  {
    id: "ico",
    icon: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773343373/lock-alt-svgrepo-com_1_j2wr3m.svg",
    title: "ICO Registered",
    line1: "GDPR Compliant",
    line2: "Full data protection compliance and secure information handling",
  },
  {
    id: "insured",
    icon: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773343360/secure_svgrepocom_copgsj.svg",
    title: "Fully Insured",
    line1: "Comprehensive Coverage",
    line2: "Public liability and professional indemnity insurance in place",
  },
];

export const WORKFORCE_SAFETY_INTRO =
  "Every member of our workforce undergoes rigorous vetting and continuous monitoring to ensure the highest standards of safety and professionalism.";

export const WORKFORCE_SAFETY_CARDS = [
  {
    id: "dbs",
    icon: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773344070/shield-star_svgrepocom_btfiiw.svg",
    title: "Enhanced DBS Checks",
    line1: "All staff undergo Enhanced Disclosure and Barring Service checks, including Adult and Children's Barred List verification, ensuring suitability for healthcare environments.",
  },
  {
    id: "registration",
    icon: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773344071/verified_svgrepo.com_wblajk.svg",
    title: "Professional Registration Verification",
    line1: "Registered nurses are verified through the NMC register, with ongoing monitoring of registration status and professional conduct records.",
  },
  {
    id: "training",
    icon: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773344071/education-svgrepo-com2_oceyzh.svg",
    title: "Mandatory Training & Supervision",
    line1: "Comprehensive induction, mandatory training updates, and ongoing clinical supervision ensure competency and continuous professional development.",
  },
];

export const POLICIES_INTRO =
  "Our operational excellence is supported by 28 CQC-aligned policies covering all aspects of service delivery, staff conduct, and quality assurance.";

export const POLICY_ICON_URL =
  "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773346709/Icon_bwkuoc.svg";
export const POLICY_CHECK_ICON_URL =
  "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773346709/checcIcon_wuqfn0.svg";

export const KEY_POLICY_AREAS_LEFT = [
  "Safeguarding Adults & Children",
  "Whistleblowing & Raising Concerns",
  "Complaints & Feedback Management",
  "Medication Management",
  "Lone Working & Staff Safety",
  "Incident Reporting & Investigation",
];

export const KEY_POLICY_AREAS_RIGHT = [
  "Infection Prevention & Control",
  "Equality, Diversity & Inclusion",
  "Health & Safety",
  "Confidentiality & Data Protection",
  "Continuous Professional Development",
  "Quality Assurance & Audit",
];

export const CONTINUOUS_QUALITY_TITLE = "Continuous Quality Monitoring";
export const CONTINUOUS_QUALITY_TEXT =
  "We conduct regular audits, client feedback reviews, and staff supervision sessions to ensure ongoing compliance and service excellence. All policies are reviewed annually and updated in line with regulatory changes.";
