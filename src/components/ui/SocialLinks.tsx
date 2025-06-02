import { Instagram, Atom as Tiktok, Youtube, Mail } from 'lucide-react';

interface SocialLinksProps {
  size?: number;
  className?: string;
}

const SocialLinks = ({ size = 18, className = '' }: SocialLinksProps) => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/karuvainsta',
      icon: Instagram,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@karuva2025',
      icon: Tiktok,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@karuhd21',
      icon: Youtube,
    },
    {
      name: 'Email',
      url: 'mailto:karuhearthd@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={social.name}
        >
          <social.icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;