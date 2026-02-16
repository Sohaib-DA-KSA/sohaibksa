import { Github } from "lucide-react";

const SocialGithub = ({ size = 18, className = "" }) => (
  <a
    href="https://github.com/Sohaib-DA-KSA"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center ${className}`}
  >
    <Github size={size} className="text-primary" />
  </a>
);

export default SocialGithub;
