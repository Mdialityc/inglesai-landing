import React from "react";
import { socialMedia } from "./lib/social-media";

export default function SocialMedia() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold mb-4">Follow us</h3>
      <div className="grid grid-cols-3 gap-5">
        {socialMedia.map((socialMedia) => (
          <a
            key={socialMedia.name}
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200"
          >
            {socialMedia.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
