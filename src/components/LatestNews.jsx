import React from 'react';

const news = [
  {
    category: 'SEO',
    date: 'July 5, 2020',
    author: 'Diane McCoy',
    title: '',
    desc: '',
    image: '/Foto/pic1.png',
  },
  {
    category: 'Marketing',
    date: 'July 2, 2020',
    author: 'Diane McCoy',
    title: 'The Basics of Blogging Search Engine Optimization.',
    desc: 'Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...',
    image: '/Foto/pic.png',
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Text Block */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Latest news</h2>
          <p className="text-gray-600 mb-6">
            Check more posts in our blog for featured news and advertising insights
          </p>
          <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow">
            Go to blog
          </button>
        </div>

        {/* News Cards */}
        {news.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img src={item.image} alt={item.title} className="rounded-xl mb-4 w-full object-cover h-48" />

            <div className="text-sm text-gray-500 flex flex-wrap items-center gap-2 mb-2">
              <span>{item.category}</span>
              <span>•</span>
              <span>{item.date}</span>
              <span>•</span>
              <span>By {item.author}</span>
            </div>

            {item.title && (
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            )}

            {item.desc && (
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            )}

            <a href="#" className="text-indigo-600 hover:underline text-sm font-medium">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
