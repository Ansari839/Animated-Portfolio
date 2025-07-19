import emailjs from "@emailjs/browser";

export const sendContactForm = async (formRef) => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  if (!serviceID || !templateID || !userID) {
    throw new Error("Missing EmailJS config.");
  }

  return await emailjs.sendForm(serviceID, templateID, formRef, userID);
};
