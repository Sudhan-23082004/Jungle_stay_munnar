import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionVision = () => {
  const missionVisionData = {
    mission: {
      title: "Our Mission",
      icon: "Target",
      content: "To provide authentic eco-tourism experiences that connect travelers with nature while supporting local communities and preserving the environment for future generations.",
      features: [
        "Sustainable Tourism Practices",
        "Community Empowerment",
        "Environmental Conservation",
        "Authentic Cultural Experiences"
      ]
    },
    vision: {
      title: "Our Vision",
      icon: "Eye",
      content: "To become India's leading eco-tourism destination, setting the standard for responsible travel that creates positive impact on both nature and local communities.",
      features: [
        "Carbon Neutral Operations",
        "Wildlife Conservation Support",
        "Local Employment Generation",
        "Educational Tourism Programs"
      ]
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Mission & Vision
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our guiding principles that drive every decision and shape every experience at Junglestay
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-background rounded-2xl p-8 shadow-organic-medium hover:shadow-organic-pronounced transition-organic">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                <Icon name={missionVisionData.mission.icon} size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">
                {missionVisionData.mission.title}
              </h3>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-8">
              {missionVisionData.mission.content}
            </p>

            <div className="space-y-3">
              {missionVisionData.mission.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-success" />
                  </div>
                  <span className="text-text-primary font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-background rounded-2xl p-8 shadow-organic-medium hover:shadow-organic-pronounced transition-organic">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                <Icon name={missionVisionData.vision.icon} size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-accent">
                {missionVisionData.vision.title}
              </h3>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-8">
              {missionVisionData.vision.content}
            </p>

            <div className="space-y-3">
              {missionVisionData.vision.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-accent" />
                  </div>
                  <span className="text-text-primary font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;