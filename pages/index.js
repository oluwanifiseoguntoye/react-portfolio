import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertCircle, 
  Target, 
  Users, 
  TrendingUp, 
  Map, 
  CheckSquare, 
  BarChart2 
} from 'lucide-react';

const ProductWorkbench = () => {
  const [activeSections, setActiveSections] = useState({
    vision: '',
    customer: '',
    market: '',
    roadmap: '',
    metrics: ''
  });

  // Framework templates and guidance
  const frameworks = {
    vision: {
      title: 'Product Vision & Strategy',
      sections: [
        {
          name: 'Vision Statement',
          placeholder: 'In 5 years, our product will...',
          helper: 'Define your ambitious yet achievable long-term vision'
        },
        {
          name: 'Strategic Pillars',
          placeholder: 'Key strategic areas of focus...',
          helper: 'Identify 3-5 core pillars that support your vision'
        },
        {
          name: 'Value Proposition',
          placeholder: 'Our unique value proposition is...',
          helper: 'Clearly articulate your products unique value'
        }
      ]
    },
    customer: {
      title: 'Customer & Market Analysis',
      sections: [
        {
          name: 'User Personas',
          placeholder: 'Describe your key user personas...',
          helper: 'Define detailed profiles of your target users'
        },
        {
          name: 'Pain Points',
          placeholder: 'List key customer pain points...',
          helper: 'Identify problems your product solves'
        },
        {
          name: 'Jobs to be Done',
          placeholder: 'What jobs do users hire your product for?',
          helper: 'Define core user needs and jobs'
        }
      ]
    },
    market: {
      title: 'Market Analysis',
      sections: [
        {
          name: 'Market Size',
          placeholder: 'TAM, SAM, SOM analysis...',
          helper: 'Define your target market size and segments'
        },
        {
          name: 'Competitive Analysis',
          placeholder: 'Key competitors and differentiation...',
          helper: 'Analyze competition and positioning'
        },
        {
          name: 'Market Trends',
          placeholder: 'Key market trends affecting product...',
          helper: 'Identify important market dynamics'
        }
      ]
    },
    roadmap: {
      title: 'Product Roadmap',
      sections: [
        {
          name: 'Strategic Themes',
          placeholder: 'Key themes for next 12 months...',
          helper: 'Define major strategic focus areas'
        },
        {
          name: 'Key Initiatives',
          placeholder: 'Major projects and initiatives...',
          helper: 'List key projects that support themes'
        },
        {
          name: 'Timeline & Milestones',
          placeholder: 'Key dates and deliverables...',
          helper: 'Define timeline and success metrics'
        }
      ]
    },
    metrics: {
      title: 'Success Metrics',
      sections: [
        {
          name: 'North Star Metric',
          placeholder: 'Your primary success metric...',
          helper: 'Define your most important metric'
        },
        {
          name: 'Key Performance Indicators',
          placeholder: 'Supporting metrics and KPIs...',
          helper: 'List metrics that track success'
        },
        {
          name: 'Health Metrics',
          placeholder: 'Product health indicators...',
          helper: 'Define metrics that show product health'
        }
      ]
    }
  };

  const handleInputChange = (section, field, value) => {
    setActiveSections(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const renderFrameworkSection = (framework, sectionKey) => {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{framework.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {framework.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium mb-2">
                {section.name}
                <span className="text-gray-500 text-xs ml-2">
                  <AlertCircle className="inline w-4 h-4 mr-1" />
                  {section.helper}
                </span>
              </label>
              <textarea
                className="w-full p-2 border rounded-md min-h-24"
                placeholder={section.placeholder}
                value={activeSections[sectionKey]?.[section.name] || ''}
                onChange={(e) => handleInputChange(sectionKey, section.name, e.target.value)}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Product Workbench</h1>
        <p className="text-gray-600">
          A comprehensive toolkit for product strategy and planning
        </p>
      </div>

      <Tabs defaultValue="vision" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="vision" className="flex items-center">
            <Target className="w-4 h-4 mr-2" />
            Vision
          </TabsTrigger>
          <TabsTrigger value="customer" className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Customer
          </TabsTrigger>
          <TabsTrigger value="market" className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Market
          </TabsTrigger>
          <TabsTrigger value="roadmap" className="flex items-center">
            <Map className="w-4 h-4 mr-2" />
            Roadmap
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex items-center">
            <BarChart2 className="w-4 h-4 mr-2" />
            Metrics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vision">
          {renderFrameworkSection(frameworks.vision, 'vision')}
        </TabsContent>
        <TabsContent value="customer">
          {renderFrameworkSection(frameworks.customer, 'customer')}
        </TabsContent>
        <TabsContent value="market">
          {renderFrameworkSection(frameworks.market, 'market')}
        </TabsContent>
        <TabsContent value="roadmap">
          {renderFrameworkSection(frameworks.roadmap, 'roadmap')}
        </TabsContent>
        <TabsContent value="metrics">
          {renderFrameworkSection(frameworks.metrics, 'metrics')}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductWorkbench;