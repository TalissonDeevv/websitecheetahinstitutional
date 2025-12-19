
import { Youtube, Linkedin, Twitter, Instagram } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { icon: Youtube, url: "https://www.youtube.com/@CheetahNetworkOficial", label: "YouTube" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/cheetahnetwork/", label: "LinkedIn" },
    { icon: Twitter, url: "https://x.com/_CheetahNetwork", label: "Twitter/X" },
    { icon: Instagram, url: "https://instagram.com/cheetah_network", label: "Instagram" },
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#0047ab] transition-colors hover:scale-110 transform duration-300 p-2 rounded-lg hover:bg-[#0047ab]/10"
          title={social.label}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
