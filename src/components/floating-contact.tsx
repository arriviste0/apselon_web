
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
import Link from 'next/link';
import { WhatsAppIcon } from './whatsapp-icon';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const googleMapsUrl = `https://maps.app.goo.gl/c2pAcN1nyDF36GHq8`;

  const contactLinks = [
    { href: 'tel:+917861811970', icon: <Phone className="h-6 w-6" />, 'aria-label': 'Call us' },
    { href: 'mailto:apseloninfo@gmail.com', icon: <Mail className="h-6 w-6" />, 'aria-label': 'Email us' },
    { href: 'https://wa.me/917861811970', icon: <WhatsAppIcon className="h-6 w-6" />, 'aria-label': 'Message us on WhatsApp' },
    { href: googleMapsUrl, icon: <MapPin className="h-6 w-6" />, 'aria-label': 'Find us on Google Maps' },
  ];

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative flex flex-col items-center gap-3">
        {contactLinks.map((link, index) => (
           <Link
             key={index}
             href={link.href}
             target="_blank"
             rel="noopener noreferrer"
             aria-label={link['aria-label']}
             className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
             style={{ transitionDelay: `${isOpen ? (contactLinks.length - 1 - index) * 70 : index * 50}ms` }}
           >
             <Button
                variant="default"
                size="icon"
                className="rounded-full h-12 w-12 bg-card text-primary shadow-lg hover:bg-secondary"
                style={{ transition: 'none' }}
              >
               {link.icon}
             </Button>
           </Link>
        ))}

        <Button
          variant="default"
          size="icon"
          className="rounded-full h-14 w-14 bg-accent text-accent-foreground shadow-xl hover:bg-accent/90"
          aria-label="Open contact menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MessageSquare className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
        </Button>
      </div>
    </div>
  );
}
