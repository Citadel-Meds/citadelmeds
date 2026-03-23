import { CallReceiveIcon, CQCShieldIcon, EmailIcon, hospitalIcon, LockIcon, lockIcon } from "../../../../../public/images";

export const GET_IN_TOUCH_TITLE = "Get in Touch";
export const GET_IN_TOUCH_INTRO =
  "Our team is ready to discuss your staffing needs and provide immediate support. Contact us through any of the channels below.";

export const PHONE_ICON =
  CallReceiveIcon?.src ?? CallReceiveIcon;
export const EMAIL_ICON =
  EmailIcon?.src ?? EmailIcon;

export const CONTACT_PHONE = "07310 086 696";
export const CONTACT_PHONE_SUB = "Available 24/7 for urgent requests";

export const CONTACT_EMAIL_PRIMARY = "info@citadelmeds.co.uk";
export const CONTACT_EMAIL_SECONDARY = "citadelmeds@outlook.com";
export const CONTACT_EMAIL_SUB = "We respond instantly - active 24/7";

export const TRUSTED_TITLE = "Trusted & Compliant";
export const TRUSTED_BADGES = [
  {
    id: "cqc",
    label: "CQC-aligned",
    icon: CQCShieldIcon?.src ?? CQCShieldIcon,
  },
  {
    id: "nhs",
    label: "NHS standards",
    icon: hospitalIcon?.src ?? hospitalIcon,
  },
  {
    id: "dbs",
    label: "Enhanced DBS",
    icon: LockIcon?.src ?? LockIcon,
  },
  {
    id: "insured",
    label: "Fully insured",
    icon: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773443826/shield-star_svgrepo_v68lfv.svg",
  },
];

export const QUOTE_TITLE = "Request a Free Quote";
export const QUOTE_INTRO =
  "Fill out the form below and we'll get back to you immediately.";

export const FORM_LABELS = {
  fullName: "Full Name *",
  organization: "Organization *",
  email: "Email Address *",
  phone: "Phone Number *",
  service: "Service Required *",
  details: "Additional Details",
};

export const FORM_PLACEHOLDERS = {
  fullName: "John Smith",
  organization: "Hospital or Care Home Name",
  email: "john.smith@example.com",
  phone: "07310 086 696",
  service: "Select a Service",
  details:
    "Tell us about your staffing needs, urgency and any specific requirements...",
};

export const SERVICE_OPTIONS = [
  { value: "", label: "Select a Service" },
  { value: "healthcare-staffing", label: "Healthcare Staffing" },
  { value: "clinical-cleaning", label: "Clinical Cleaning" },
  { value: "compliance", label: "Compliance & Quality" },
  { value: "other", label: "Other" },
];

export const DETAILS_MAX_LENGTH = 500;
export const SUBMIT_LABEL = "Submit";
