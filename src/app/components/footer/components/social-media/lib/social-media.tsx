import TelegramIcon from "@/components/assets/telegram-icon";
import TikTokIcon from "@/components/assets/tiktok-icon";
import TwitterIcon from "@/components/assets/twitter-icon";
import { Facebook, Instagram } from "lucide-react";
import { ReactNode } from "react";

export interface SocialMedia {
  name: string;
  url: string;
  icon: ReactNode;
}

export const socialMedia: SocialMedia[] = [
  {
    name: "Facebook",
    url: "https://m.facebook.com/inglesaiai/",
    icon: <Facebook className="w-6 h-6" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/inglesaiai",
    icon: <TelegramIcon />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/inglesaiai/",
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@inglesaiai?_t=ZP-8slv0AAWGCM&_r=1",
    icon: <TikTokIcon />,
  },
  {
    name: "Twitter",
    url: "https://x.com/inglesaiai?s=21",
    icon: <TwitterIcon />,
  },
];
