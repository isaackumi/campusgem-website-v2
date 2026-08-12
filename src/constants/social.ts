export type SocialLink = {
  label: string;
  href: string;
  platform: "facebook" | "telegram" | "whatsapp" | "email";
};

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook", href: "https://web.facebook.com/share/g/1K3tafbxzc/", platform: "facebook", }, {
    label: "Telegram", href: "https://t.me/campusgem", platform: "telegram", }, {
    label: "Love Feast WhatsApp", href: "https://chat.whatsapp.com/HEZ3eFw8GaQ8pIbyH7QUQu", platform: "whatsapp", }, {
    label: "Eagles Camp WhatsApp", href: "https://chat.whatsapp.com/GxCT3JwzESnH3VjZvUNDK3", platform: "whatsapp", },
];
