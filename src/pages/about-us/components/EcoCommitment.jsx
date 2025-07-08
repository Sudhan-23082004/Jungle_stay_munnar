import React from 'react';
import Icon from '../../../components/AppIcon';


const EcoCommitment = () => {
  const commitmentData = {
    title: "Our Eco-Tourism Commitment",
    subtitle: "Leading the way in sustainable tourism practices that protect our planet for future generations",
    initiatives: [
      {
        icon: "Leaf",
        title: "Carbon Neutral Operations",
        description: "100% renewable energy, carbon offset programs, and sustainable transportation options",
        impact: "Zero net carbon emissions since 2022",
        color: "success"
      },
      {
        icon: "Droplets",
        title: "Water Conservation",
        description: "Rainwater harvesting, greywater recycling, and water-efficient fixtures throughout the property",
        impact: "40% reduction in water consumption",
        color: "primary"
      },
      {
        icon: "Recycle",
        title: "Waste Management",
        description: "Zero waste to landfill policy with comprehensive recycling and composting programs",
        impact: "95% waste diversion from landfills",
        color: "accent"
      },
      {
        icon: "TreePine",
        title: "Biodiversity Protection",
        description: "Native species conservation, habitat restoration, and wildlife corridor maintenance",
        impact: "200+ native trees planted annually",
        color: "success"
      }
    ],
    certifications: [
      {
        name: "Green Tourism Certification",
        issuer: "Ministry of Tourism, India",
        year: "2023",
        icon: "Award"
      },
      {
        name: "Eco-Tourism Excellence",
        issuer: "Sustainable Tourism Council",
        year: "2023",
        icon: "Shield"
      },
      {
        name: "Carbon Neutral Certified",
        issuer: "Climate Action Reserve",
        year: "2022",
        icon: "Leaf"
      }
    ],
    stats: [
      { value: "100%", label: "Renewable Energy", icon: "Zap" },
      { value: "5000+", label: "Trees Protected", icon: "TreePine" },
      { value: "Zero", label: "Plastic Waste", icon: "Trash2" },
      { value: "50+", label: "Local Partners", icon: "Users" }
    ]
  };

  const getColorClasses = (color) => {
    const colorMap = {
      success: "bg-success-100 text-success border-success-200",
      primary: "bg-primary-100 text-primary border-primary-200",
      accent: "bg-accent-100 text-accent border-accent-200"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            {commitmentData.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            {commitmentData.subtitle}
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {commitmentData.initiatives.map((initiative, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-organic-medium hover:shadow-organic-pronounced transition-organic">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(initiative.color)}`}>
                  <Icon name={initiative.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {initiative.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="text-sm font-medium text-success">
                      {initiative.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary-foreground mb-2">
              Our Impact in Numbers
            </h3>
            <p className="text-primary-100">
              Measurable results of our commitment to sustainable tourism
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {commitmentData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-8">
            Recognized Excellence
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {commitmentData.certifications.map((cert, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-organic-subtle">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-bold text-text-primary mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-text-secondary mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-accent font-medium">
                  Certified {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoCommitment;