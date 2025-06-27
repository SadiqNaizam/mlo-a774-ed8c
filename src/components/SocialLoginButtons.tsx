import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';

// A simple SVG component for the Google icon, as it's not in lucide-react
const GoogleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
    <path
      fill="currentColor"
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.9 2.04-6.11 2.04-4.62 0-8.38-3.77-8.38-8.38s3.76-8.38 8.38-8.38c2.6 0 4.38 1.02 5.4 2.04l2.6-2.6C18.96 1.87 15.9 0 12.48 0 5.6 0 0 5.6 0 12.48s5.6 12.48 12.48 12.48c7.2 0 12.08-4.82 12.08-12.08v-1.1z"
    />
  </svg>
);

const SocialLoginButtons: React.FC = () => {
  console.log('SocialLoginButtons loaded');

  const handleGoogleLogin = () => {
    console.log("Attempting login with Google...");
    // In a real application, this would trigger the OAuth flow
  };

  const handleGitHubLogin = () => {
    console.log("Attempting login with GitHub...");
    // In a real application, this would trigger the OAuth flow
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
        <GoogleIcon />
        Continue with Google
      </Button>
      <Button variant="outline" className="w-full" onClick={handleGitHubLogin}>
        <Github className="mr-2 h-4 w-4" />
        Continue with GitHub
      </Button>
    </div>
  );
};

export default SocialLoginButtons;