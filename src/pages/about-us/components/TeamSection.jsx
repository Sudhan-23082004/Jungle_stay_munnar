import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "With 8 years in hospitality management, Priya ensures every guest experience exceeds expectations.",
      fullBio: `Priya brings extensive experience in luxury hospitality and sustainable tourism operations. She holds a Master's in Hotel Management and has worked with leading eco-resorts across India.\n\nHer expertise in guest relations and operational efficiency has been instrumental in maintaining Junglestay's high service standards while adhering to our eco-friendly practices.`,
      expertise: ["Guest Relations", "Sustainable Operations", "Team Leadership"],
      contact: { linkedin: "#", email: "priya@junglestay.com" }
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "Adventure Guide & Safety Expert",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "A certified wilderness guide with 12 years of experience leading adventure expeditions across India.",
      fullBio: `Arjun is our lead adventure guide with certifications in wilderness first aid, rock climbing, and wildlife tracking. His deep knowledge of local flora and fauna makes every jungle trek an educational adventure.\n\nHe has successfully guided over 2000 guests through safe and memorable wilderness experiences, earning recognition as one of India's top eco-tourism guides.`,
      expertise: ["Wilderness Guiding", "Safety Protocols", "Wildlife Education"],
      contact: { linkedin: "#", email: "arjun@junglestay.com" }
    },
    {
      id: 3,
      name: "Meera Reddy",
      role: "Sustainability Coordinator",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Environmental scientist passionate about implementing sustainable practices in tourism operations.",
      fullBio: `Meera holds a PhD in Environmental Science and specializes in sustainable tourism development. She leads our carbon neutrality initiatives and community engagement programs.\n\nUnder her guidance, Junglestay has achieved multiple sustainability certifications and has become a model for eco-friendly tourism operations in the region.`,
      expertise: ["Environmental Science", "Carbon Footprint Management", "Community Development"],
      contact: { linkedin: "#", email: "meera@junglestay.com" }
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Local Community Liaison",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Born and raised locally, Vikram bridges the gap between traditional knowledge and modern tourism.",
      fullBio: `Vikram represents the voice of our local community and ensures that tourism benefits reach the grassroots level. His deep understanding of local customs and traditions enriches every guest experience.\n\nHe coordinates with local artisans, farmers, and service providers to create authentic cultural experiences while ensuring fair economic distribution.`,
      expertise: ["Cultural Heritage", "Community Relations", "Local Partnerships"],
      contact: { linkedin: "#", email: "vikram@junglestay.com" }
    }
  ];

  const toggleExpanded = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The passionate individuals who make your Junglestay experience unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-surface rounded-2xl p-6 shadow-organic-medium hover:shadow-organic-pronounced transition-organic">
              {/* Member Photo */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground p-2 rounded-lg shadow-organic-subtle">
                  <Icon name="Star" size={16} />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.expertise.slice(0, 2).map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-primary-100 text-primary text-xs font-medium rounded-full">
                    {skill}
                  </span>
                ))}
                {member.expertise.length > 2 && (
                  <span className="px-2 py-1 bg-surface-hover text-text-secondary text-xs font-medium rounded-full">
                    +{member.expertise.length - 2} more
                  </span>
                )}
              </div>

              {/* Expand Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded(member.id)}
                className="w-full mb-4"
                iconName={expandedMember === member.id ? "ChevronUp" : "ChevronDown"}
                iconPosition="right"
              >
                {expandedMember === member.id ? "Show Less" : "Learn More"}
              </Button>

              {/* Expanded Content */}
              {expandedMember === member.id && (
                <div className="border-t border-border-muted pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">About</h4>
                    <div className="text-sm text-text-secondary leading-relaxed">
                      {member.fullBio.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-2">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-primary-100 text-primary text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <a
                      href={member.contact.linkedin}
                      className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-organic-fast"
                    >
                      <Icon name="Linkedin" size={16} />
                    </a>
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-organic-fast"
                    >
                      <Icon name="Mail" size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;