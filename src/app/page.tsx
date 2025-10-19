"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Lightbulb, Award } from "lucide-react";

const assetMap = [
  {"id":"hero-background","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern office workspace - Photo by Pew Nguyen"},
  {"id":"feature-image-one","url":"https://images.pexels.com/photos/5253950/pexels-photo-5253950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A group of three diverse adults reviewing content on a laptop together indoors."},
  {"id":"testimonial-image-one","url":"https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A man enjoying a hair wash with his eyes closed, experiencing relaxation at a barber shop."},
  {"id":"testimonial-image-two","url":"https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businessman in suit shaking hands at office desk, symbolizing successful partnership."},
  {"id":"testimonial-image-three","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},
  {"id":"testimonial-image-four","url":"https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A man enjoying a hair wash with his eyes closed, experiencing relaxation at a barber shop."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarStyleMinimal
            logoSrc="/path/to/logo.svg"
            brandName="Webild"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Your Website"
            description="Create impactful experiences with our intuitive platform."
            imageSrc={assetMap.find(a => a.id === "hero-background")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              {text: "Get Started", href: "https://yourlink.com"},
              {text: "Learn More", href: "about"}
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover our mission and values."
            bulletPoints={[
              {title: "Innovation", description: "Leading the way with cutting-edge technology.", icon: Lightbulb},
              {title: "Excellence", description: "Committed to the highest quality in everything we do.", icon: Award}
            ]}
            imageSrc={assetMap.find(a => a.id === "feature-image-one")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            description="Explore the capabilities that set us apart."
            features={[
              {title: "Advanced Analytics", description: "Get detailed insights into your business performance.", imageSrc: assetMap.find(a => a.id === "feature-image-one")?.url ?? "/public/images/placeholder.webp"}
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="What Our Clients Say"
            description="Hear from those who've worked with us."
            testimonials={[
              {id: "1", name: "Sarah Johnson", role: "CEO", testimonial: "Working with Webild has been a game changer for our business.", imageSrc: assetMap.find(a => a.id === "testimonial-image-one")?.url ?? "/public/images/placeholder.webp"},
              {id: "2", name: "Michael Chen", role: "CTO", testimonial: "The insights provided are invaluable.", imageSrc: assetMap.find(a => a.id === "testimonial-image-two")?.url ?? "/public/images/placeholder.webp"},
              {id: "3", name: "Emily Rodriguez", role: "Marketing Director", testimonial: "Their team is proactive and results-driven.", imageSrc: assetMap.find(a => a.id === "testimonial-image-three")?.url ?? "/public/images/placeholder.webp"},
              {id: "4", name: "David Kim", role: "Product Manager", testimonial: "We've significantly increased our efficiency.", imageSrc: assetMap.find(a => a.id === "testimonial-image-four")?.url ?? "/public/images/placeholder.webp"}
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Connect"
            title="Stay in Touch"
            description="We would love to hear from you. Let's discuss how we can help your business."
            inputPlaceholder="Your email address"
            buttonText="Send Message"
            termsText="We respect your privacy. Unsubscribe anytime."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {title: "Product", items: [{label: "Features", href: "features"}, {label: "Pricing", href: "pricing"}]},
              {title: "Company", items: [{label: "About", href: "about"}, {label: "Careers", href: "careers"}]},
              {title: "Support", items: [{label: "Contact", href: "contact"}, {label: "Help Center", href: "help"}]}
            ]}
            copyrightText="© 2025 | Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
