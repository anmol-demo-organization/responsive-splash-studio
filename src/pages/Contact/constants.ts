// Contact information - ready for database migration
// Field names match future database schema

export interface ContactInfo {
  phone: string;
  availability: string;
  emailDescription: string;
  emails: {
    customer: string;
    support: string;
  };
}

export const contactInfo: ContactInfo = {
  phone: "Phone: +1 234 567 890",
  availability: "We are available 24/7, 7 days a week.",
  emailDescription: "Fill out our form and we will contact you within 24 hours.",
  emails: {
    customer: "customer@exclusive.com",
    support: "support@exclusive.com",
  },
};
