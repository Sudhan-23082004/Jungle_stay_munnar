import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderStory = () => {
  const founderData = {
    name: "Rajesh Kumar",
    title: "Founder & Nature Enthusiast",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    story: `My journey into eco-tourism began during a transformative trek through the Western Ghats in 2018. Witnessing the pristine beauty of untouched forests and the warmth of local communities, I realized the urgent need to create sustainable tourism experiences that benefit both nature and people.\n\nAfter years in corporate life, I left my job to pursue this dream. Junglestay was born from a simple belief: that travel should leave places better than we found them. Every tent pitched, every cottage built, and every guest welcomed is part of our commitment to responsible tourism.\n\nToday, we're not just providing accommodation; we're creating a movement where travelers become guardians of the wilderness they explore.`,
    highlights: [
      { icon: "TreePine", text: "15+ Years in Nature Conservation" },
      { icon: "Award", text: "Eco-Tourism Excellence Award 2023" },
      { icon: "Users", text: "5000+ Happy Guests" },
      { icon: "Leaf", text: "Carbon Neutral Operations" }
    ]
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Our Founder's Story
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover the passion and vision behind Junglestay's commitment to sustainable eco-tourism
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Founder Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-organic-pronounced">
                <Image
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-organic-medium">
                <Icon name="Heart" size={32} />
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-2">
                {founderData.name}
              </h3>
              <p className="text-lg text-accent font-medium mb-6">
                {founderData.title}
              </p>
              
              <div className="prose prose-lg max-w-none">
                {founderData.story.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {founderData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon name={highlight.icon} size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;