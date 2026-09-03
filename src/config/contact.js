export const tourismAgent = {
  name: "Explore India Tourism Agent",
  phone: "+91 XXXXX XXXXX",
  tel: "+91XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "info@exploreindia.com"
};

export const getWhatsAppUrl = (message = "Hello, I want help planning my trip to India.") =>
  `https://wa.me/${tourismAgent.whatsapp}?text=${encodeURIComponent(message)}`;
