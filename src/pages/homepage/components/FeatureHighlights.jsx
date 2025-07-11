import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const FeatureHighlights = () => {
  const features = [
    {
      id: 1,
      icon: "Leaf",
      title: "Eco-Friendly Living",
      description: "Experience sustainable tourism with our solar-powered accommodations, rainwater harvesting systems, and zero-waste practices that protect the natural ecosystem.",
      image: "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1525170424/Tea_plantations_in_Munnar_1525170411.jpg",
      color: "success"
    },
    {
      id: 2,
      icon: "Mountain",
      title: "Adventure Camps",
      description: "Embark on thrilling adventures with guided jungle treks, wildlife spotting, river rafting, and campfire storytelling under the starlit sky.",
      image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "accent"
    },
    {
      id: 3,
      icon: "Home",
      title: "Premium Accommodations",
      description: "Choose from luxury safari tents with modern amenities or rustic cottages that blend comfort with authentic wilderness living experiences.",
      image: "https://images.trvl-media.com/lodging/19000000/18360000/18352900/18352806/6ca3b895.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      color: "primary"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      success: {
        bg: "bg-success/10",
        text: "text-success",
        border: "border-success/20",
        hover: "hover:bg-success/20"
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20",
        hover: "hover:bg-accent/20"
      },
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        hover: "hover:bg-primary/20"
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Why Choose Junglestay?
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover what makes our eco-tourism experience unique and unforgettable
          </p>
        </div>

        {/* Equal-height Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => {
            const colors = getColorClasses(feature.color);

            return (
              <div key={feature.id} className="h-full">
                <div className="group bg-background rounded-2xl transition-all duration-500 ease-in-out shadow-organic-subtle hover:shadow-organic-pronounced overflow-hidden transform hover:-translate-y-2 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Icon Overlay */}
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 ${colors.bg} ${colors.border} border rounded-full flex items-center justify-center backdrop-blur-sm`}
                    >
                      <Icon name={feature.icon} size={24} className={colors.text} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-grow p-6 lg:p-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                          <Icon name={feature.icon} size={20} className={colors.text} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Ready for Your Nature Adventure?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Book your stay today and immerse yourself in the beauty of sustainable eco-tourism
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="shadow-organic-medium hover:shadow-organic-pronounced"
              >
                <Link to="/booking" className="text-primary-foreground">
                  Book Now
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
              >
                <Link to="/accommodations">
                  View Accommodations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
