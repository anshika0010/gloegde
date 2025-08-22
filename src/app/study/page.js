'use client';
import React, { useState, useEffect } from "react";
import { 
  GraduationCap, 
  MapPin, 
  Star, 
  DollarSign, 
  Users, 
  BookOpen, 
  Briefcase, 
  TrendingUp,
  CheckCircle,
  University,
  Globe,
  Award,
  ArrowRight,
  Play
} from "lucide-react";

const CanadaStudyPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const topUniversities = [
    { 
      name: "University of Toronto", 
      rank: "25th Globally", 
      highlight: "World-class education",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&crop=center"
    },
    { 
      name: "University of British Columbia", 
      rank: "28th Globally", 
      highlight: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&crop=center"
    },
    { 
      name: "McGill University", 
      rank: "Top Ranked", 
      highlight: "Notable Alumni including PM Justin Trudeau",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop&crop=center"
    },
    { 
      name: "Concordia University Montreal", 
      rank: "Highly Rated", 
      highlight: "Open & Engaged Environment",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center"
    },
    { 
      name: "Simon Fraser University", 
      rank: "Best in Canada", 
      highlight: "Innovative Education",
      image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400&h=300&fit=crop&crop=center"
    },
    { 
      name: "University of Waterloo", 
      rank: "Premier", 
      highlight: "100+ Courses Available",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const topCourses = [
    { 
      name: "MBA", 
      icon: <Briefcase className="h-6 w-6" />, 
      description: "Master of Business Administration - Most preferred course",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center"
    },
    { 
      name: "Computer Science & IT", 
      icon: <BookOpen className="h-6 w-6" />, 
      description: "488,000+ IT professionals in diverse fields",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop&crop=center"
    },
    { 
      name: "Business & Finance", 
      icon: <DollarSign className="h-6 w-6" />, 
      description: "Financial markets, economics & business management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center"
    },
    { 
      name: "Core Engineering", 
      icon: <University className="h-6 w-6" />, 
      description: "Robust manufacturing & booming industry opportunities",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop&crop=center"
    },
    { 
      name: "Healthcare & Medicine", 
      icon: <Award className="h-6 w-6" />, 
      description: "High demand for healthcare professionals globally",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center"
    },
    { 
      name: "Media & Journalism", 
      icon: <Globe className="h-6 w-6" />, 
      description: "Digital media & online marketing opportunities",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=200&fit=crop&crop=center"
    }
  ];

  const careerOpportunities = [
    "Project Managers", "Software Developers", "Doctors & Surgeons", "Engineers",
    "Data Scientists", "Financial Analysts", "HR Managers", "IT Analysts",
    "Cyber Security Engineers", "Marketing Managers", "Dentists", "Nurses",
    "Business Consultants", "Educators", "Physiotherapists", "Sales Managers"
  ];

  const whyCanadaFeatures = [
    { 
      icon: <DollarSign className="h-8 w-8" />, 
      title: "Affordable Education", 
      description: "Reasonably priced tuition fees with scholarship opportunities",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center"
    },
    { 
      icon: <Users className="h-8 w-8" />, 
      title: "Work While Study", 
      description: "Get work exposure and build career experience",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=center"
    },
    { 
      icon: <Globe className="h-8 w-8" />, 
      title: "Global Recognition", 
      description: "Internationally renowned universities and degrees",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop&crop=center"
    },
    { 
      icon: <MapPin className="h-8 w-8" />, 
      title: "Beautiful Country", 
      description: "Diverse, attractive places with high quality of life",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56cd601?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503614472-8c93d56cd601?w=1200&h=800&fit=crop&crop=center" 
            alt="Canada landscape"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-red-600/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <GraduationCap className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium">Study in Canada</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Canada Study Visa
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Top Universities & Career Prospects - Turn your study abroad dream into reality with world-class education and unlimited opportunities.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="text-3xl font-bold text-white">90%</div>
                  <div className="text-white/80">Job Placement</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="text-3xl font-bold text-white">CAD 100K</div>
                  <div className="text-white/80">Max Salary</div>
                </div>
              </div>

              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop&crop=center"
                  alt="Canadian university campus"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Start Your Journey Today</h3>
                  <p className="text-white/80">Join thousands of international students already studying in Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Canada Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-red-600">Canada?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Canada offers abundant opportunities, social benefits, low cost of living, and world-class education with modern technology and supreme infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCanadaFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-red-600/20 group-hover:bg-red-600/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 text-white bg-red-600 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Universities Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top <span className="text-red-600">Universities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Globally recognized institutions offering world-class education and guaranteed positive returns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topUniversities.map((university, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={university.image} 
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                      {university.rank}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <University className="h-8 w-8 text-red-600 flex-shrink-0" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                  <p className="text-gray-600">{university.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Courses Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular <span className="text-red-600">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a wide range of courses designed to build successful careers in high-demand fields
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 text-white bg-red-600 p-3 rounded-lg">
                    {course.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Career <span className="text-red-600">Opportunities</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                90% of students land full-time jobs within 6 months of course completion. 
                Earn CAD 30,000 to CAD 100,000 depending on your occupation.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {careerOpportunities.slice(0, 8).map((career, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:border-red-300 hover:bg-red-50 transition-all duration-300"
                  >
                    <CheckCircle className="h-5 w-5 text-red-600 mx-auto mb-2" />
                    <span className="text-gray-900 font-medium text-sm">{career}</span>
                  </div>
                ))}
              </div>

              <button className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center">
                View All Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=500&fit=crop&crop=center"
                alt="Career opportunities"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-red-600/10 rounded-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="bg-white text-red-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-red-600 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop&crop=center" 
            alt="Canada graduation"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your dreams into reality with Canada's world-class education system. Join thousands of successful international students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center">
              <GraduationCap className="mr-2 h-6 w-6" />
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-colors duration-300 inline-flex items-center justify-center">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <GraduationCap className="h-8 w-8 text-red-600 mr-2" />
            <span className="text-2xl font-bold text-white">Canada Study Visa</span>
          </div>
          <p className="text-gray-400">
            Your trusted partner for studying in Canada. Making dreams come true since 2010.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanadaStudyPage;