import React from 'react';
import {
  ShoppingCartOutlined,
  WebOutlined,
  BusinessOutlined,
  RocketLaunchOutlined,
} from '@mui/icons-material';

const markets = [
  {
    icon: <ShoppingCartOutlined fontSize="large" />,
    title: 'E-commerce Websites',
    desc: 'Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.',
  },
  {
    icon: <WebOutlined fontSize="large" />,
    title: 'Content-rich Websites',
    desc: 'Culpa nostrud commodo ea consequat reprehenderit aliquip.',
  },
  {
    icon: <BusinessOutlined fontSize="large" />,
    title: 'B2B/B2C Services',
    desc: 'Viverra scelerisque consequat net. Adipisicing esse consequat.',
  },
  {
    icon: <RocketLaunchOutlined fontSize="large" />,
    title: 'Startup Projects',
    desc: 'Aute eiusmod dolore dolore deserunt veniam ad deserunt.',
  },
];

export default function MarketsSection() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Markets in which we operate</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {markets.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="text-indigo-500 mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
