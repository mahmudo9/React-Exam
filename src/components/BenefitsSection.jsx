import React from 'react';
import {
  ThumbUpAltOutlined,
  VisibilityOutlined,
  ForumOutlined,
  CampaignOutlined,
  ChecklistOutlined,
  TrackChangesOutlined,
} from '@mui/icons-material';

const benefitsLeft = [
  {
    icon: <CampaignOutlined fontSize="large" />,
    title: "Social Advertising Experts",
    desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
  },
  {
    icon: <TrackChangesOutlined fontSize="large" />,
    title: "Goal Oriented",
  },
  {
    icon: <ChecklistOutlined fontSize="large" />,
    title: "Detailed Planning",
  },
];

const benefitsRight = [
  {
    icon: <ForumOutlined fontSize="large"  />,
    title: "Effective Communication",
  },
  {
    icon: <VisibilityOutlined fontSize="large" />,
    title: "Brand Visibility",
  },
  {
    icon: <ThumbUpAltOutlined fontSize="large" />,
    title: "High Engagement",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col gap-6">
            {benefitsLeft.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white border border-gray-200 rounded-lg shadow text-left"
              >
                <div className="text-indigo-500 mb-2">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                {item.desc && (
                  <p className="text-sm text-gray-600">{item.desc}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="/Foto/illustration5.png"
              alt="Illustration"
              className="w-64 h-auto object-contain"
            />
          </div>

          <div className="flex flex-col gap-6">
            {benefitsRight.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white border border-gray-200 rounded-lg shadow text-left"
              >
                <div className="text-indigo-500 mb-2">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
