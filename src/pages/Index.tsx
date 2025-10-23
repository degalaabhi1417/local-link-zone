import { Calendar, Users, Building2, Mail, Phone, MapPin, Briefcase, GraduationCap, Heart, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/EventCard";
import { ServiceCard } from "@/components/ServiceCard";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import heroImage from "@/assets/hero-community.jpg";

const Index = () => {
  const upcomingEvents = [
    {
      title: "Community Town Hall Meeting",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "City Hall Auditorium",
      category: "Civic",
      description: "Join us for our monthly town hall to discuss community initiatives and upcoming projects.",
    },
    {
      title: "Spring Festival & Market",
      date: "March 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Central Park",
      category: "Cultural",
      description: "Celebrate spring with local vendors, live music, and family-friendly activities.",
    },
    {
      title: "Youth Sports Registration",
      date: "March 10, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Recreation Center",
      category: "Sports",
      description: "Sign up for summer youth sports leagues including soccer, basketball, and baseball.",
    },
  ];

  const services = [
    {
      title: "Public Services",
      description: "Access utilities, waste management, and essential public services for residents.",
      icon: Briefcase,
      link: "#services",
    },
    {
      title: "Education & Schools",
      description: "Information about local schools, libraries, and educational programs for all ages.",
      icon: GraduationCap,
      link: "#education",
    },
    {
      title: "Health & Wellness",
      description: "Community health resources, clinics, and wellness programs available to residents.",
      icon: Heart,
      link: "#health",
    },
    {
      title: "Infrastructure & Repairs",
      description: "Report issues, request repairs, and stay informed about ongoing infrastructure projects.",
      icon: Wrench,
      link: "#infrastructure",
    },
  ];

  const announcements = [
    {
      title: "Road Closure on Main Street",
      content: "Main Street will be closed between 5th and 8th Avenue from March 5-12 for road repairs. Please use alternate routes.",
      date: "Posted on March 1, 2025",
      priority: "high" as const,
    },
    {
      title: "New Recycling Program Launch",
      content: "Starting April 1st, the city will launch an expanded recycling program. Check your mail for your new recycling schedule.",
      date: "Posted on February 28, 2025",
      priority: "medium" as const,
    },
    {
      title: "Community Garden Sign-ups",
      content: "Limited plots available for the 2025 growing season. Sign up at the Parks Department office by March 20th.",
      date: "Posted on February 25, 2025",
      priority: "low" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">CommunityHub</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#events" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#announcements" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Announcements
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <Button variant="hero" size="sm">
              Get Involved
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(215 85% 35% / 0.95), hsl(195 75% 55% / 0.9)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Community, Connected
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Stay informed about local events, access essential services, and engage with your community—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                View Events
              </Button>
              <Button variant="secondary" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Browse Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join your neighbors at community events, workshops, and activities happening throughout the month.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Community Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access information about the services and resources available to all community members.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Important Announcements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay up to date with the latest news and updates from your local authorities.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {announcements.map((announcement, index) => (
              <AnnouncementCard key={index} {...announcement} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions or need assistance? Our team is here to help.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@communityhub.gov</p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">100 Main Street, City Hall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="font-bold">CommunityHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting residents with local government and community resources.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#announcements" className="hover:text-primary transition-colors">Announcements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-sm text-muted-foreground mb-2">Follow us for updates</p>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Users className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 CommunityHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
