import React from "react";
import { Link } from "react-router-dom";
import { Github, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/browse" className="hover:text-primary transition-colors">
                Browse
              </Link>
              <Link
                to="/categories"
                className="hover:text-primary transition-colors"
              >
                Categories
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2">
              <p>Questions or feedback?</p>
              <a
                href="mailto:contact@ianslist.org"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@ianslist.org
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/eosdev-x/ians-list"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/IanCarrollShow"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Attribution */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Data Attribution</h3>
            <p className="text-sm">
              Data sourced from{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1pUSqZg83LvuTHBvcvoPnsDRfF8i4D3B97lIdcUMzdLE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ian Carroll's research
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ian's List. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
