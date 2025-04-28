// app/travel-guide-list/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Tag {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Record<string, unknown>;
}

interface Post {
  ID: number;
  title: string;
  URL: string;
  excerpt: string;
  featured_image: string;
  categories: Record<string, string>;
  tags: Record<string, Tag>;
  date: string;
  slug: string;
}

interface CountryGuides {
  [country: string]: {
    cities: Tag[];
    posts: Post[];
  };
}

interface ContinentGuides {
  [continent: string]: {
    countries: {
      [country: string]: {
        cities: Tag[];
        posts: Post[];
      };
    };
  };
}

// Map of countries to continents
const countryToContinentMap: Record<string, string> = {
  // Africa
  'algeria': 'Africa', 'angola': 'Africa', 'benin': 'Africa', 'botswana': 'Africa', 
  'burkina faso': 'Africa', 'burundi': 'Africa', 'cameroon': 'Africa', 'cape verde': 'Africa',
  'central african republic': 'Africa', 'chad': 'Africa', 'comoros': 'Africa', 
  'democratic republic of the congo': 'Africa', 'republic of the congo': 'Africa', 
  'djibouti': 'Africa', 'egypt': 'Africa', 'equatorial guinea': 'Africa', 
  'eritrea': 'Africa', 'eswatini': 'Africa', 'ethiopia': 'Africa', 'gabon': 'Africa', 
  'gambia': 'Africa', 'ghana': 'Africa', 'guinea': 'Africa', 'guinea-bissau': 'Africa', 
  'ivory coast': 'Africa', 'kenya': 'Africa', 'lesotho': 'Africa', 'liberia': 'Africa', 
  'libya': 'Africa', 'madagascar': 'Africa', 'malawi': 'Africa', 'mali': 'Africa', 
  'mauritania': 'Africa', 'mauritius': 'Africa', 'morocco': 'Africa', 'mozambique': 'Africa', 
  'namibia': 'Africa', 'niger': 'Africa', 'nigeria': 'Africa', 'rwanda': 'Africa', 
  'sao tome and principe': 'Africa', 'senegal': 'Africa', 'seychelles': 'Africa', 
  'sierra leone': 'Africa', 'somalia': 'Africa', 'south africa': 'Africa', 'south sudan': 'Africa', 
  'sudan': 'Africa', 'tanzania': 'Africa', 'togo': 'Africa', 'tunisia': 'Africa', 
  'uganda': 'Africa', 'zambia': 'Africa', 'zimbabwe': 'Africa',
  
  // Asia
  'afghanistan': 'Asia', 'armenia': 'Asia', 'azerbaijan': 'Asia', 'bahrain': 'Asia', 
  'bangladesh': 'Asia', 'bhutan': 'Asia', 'brunei': 'Asia', 'cambodia': 'Asia', 
  'china': 'Asia', 'cyprus': 'Asia', 'georgia': 'Asia', 'india': 'Asia', 
  'indonesia': 'Asia', 'iran': 'Asia', 'iraq': 'Asia', 'israel': 'Asia', 
  'japan': 'Asia', 'jordan': 'Asia', 'kazakhstan': 'Asia', 'kuwait': 'Asia', 
  'kyrgyzstan': 'Asia', 'laos': 'Asia', 'lebanon': 'Asia', 'malaysia': 'Asia', 
  'maldives': 'Asia', 'mongolia': 'Asia', 'myanmar': 'Asia', 'nepal': 'Asia', 
  'north korea': 'Asia', 'oman': 'Asia', 'pakistan': 'Asia', 'palestine': 'Asia', 
  'philippines': 'Asia', 'qatar': 'Asia', 'saudi arabia': 'Asia', 'singapore': 'Asia', 
  'south korea': 'Asia', 'sri lanka': 'Asia', 'syria': 'Asia', 'taiwan': 'Asia', 
  'tajikistan': 'Asia', 'thailand': 'Asia', 'timor-leste': 'Asia', 'turkey': 'Asia', 
  'turkmenistan': 'Asia', 'united arab emirates': 'Asia', 'uzbekistan': 'Asia', 
  'vietnam': 'Asia', 'yemen': 'Asia',
  
  // Europe
  'albania': 'Europe', 'andorra': 'Europe', 'austria': 'Europe', 'belarus': 'Europe', 
  'belgium': 'Europe', 'bosnia and herzegovina': 'Europe', 'bulgaria': 'Europe', 
  'croatia': 'Europe', 'czech republic': 'Europe', 'denmark': 'Europe', 'estonia': 'Europe', 
  'finland': 'Europe', 'france': 'Europe', 'germany': 'Europe', 'greece': 'Europe', 
  'hungary': 'Europe', 'iceland': 'Europe', 'ireland': 'Europe', 'italy': 'Europe', 
  'kosovo': 'Europe', 'latvia': 'Europe', 'liechtenstein': 'Europe', 'lithuania': 'Europe', 
  'luxembourg': 'Europe', 'malta': 'Europe', 'moldova': 'Europe', 'monaco': 'Europe', 
  'montenegro': 'Europe', 'netherlands': 'Europe', 'north macedonia': 'Europe', 'norway': 'Europe', 
  'poland': 'Europe', 'portugal': 'Europe', 'romania': 'Europe', 'russia': 'Europe', 
  'san marino': 'Europe', 'serbia': 'Europe', 'slovakia': 'Europe', 'slovenia': 'Europe', 
  'spain': 'Europe', 'sweden': 'Europe', 'switzerland': 'Europe', 'ukraine': 'Europe', 
  'united kingdom': 'Europe', 'vatican city': 'Europe',
  
  // North America
  'antigua and barbuda': 'North America', 'bahamas': 'North America', 'barbados': 'North America', 
  'belize': 'North America', 'canada': 'North America', 'costa rica': 'North America', 
  'cuba': 'North America', 'dominica': 'North America', 'dominican republic': 'North America', 
  'el salvador': 'North America', 'grenada': 'North America', 'guatemala': 'North America', 
  'haiti': 'North America', 'honduras': 'North America', 'jamaica': 'North America', 
  'mexico': 'North America', 'nicaragua': 'North America', 'panama': 'North America', 
  'saint kitts and nevis': 'North America', 'saint lucia': 'North America', 
  'saint vincent and the grenadines': 'North America', 'trinidad and tobago': 'North America', 
  'united states': 'North America', 'usa': 'North America', 'caribbean': 'North America',
  
  // South America
  'argentina': 'South America', 'bolivia': 'South America', 'brazil': 'South America', 
  'chile': 'South America', 'colombia': 'South America', 'ecuador': 'South America', 
  'guyana': 'South America', 'paraguay': 'South America', 'peru': 'South America', 
  'suriname': 'South America', 'uruguay': 'South America', 'venezuela': 'South America',
  
  // Oceania
  'australia': 'Oceania', 'fiji': 'Oceania', 'kiribati': 'Oceania', 
  'marshall islands': 'Oceania', 'micronesia': 'Oceania', 'nauru': 'Oceania', 
  'new zealand': 'Oceania', 'palau': 'Oceania', 'papua new guinea': 'Oceania', 
  'samoa': 'Oceania', 'solomon islands': 'Oceania', 'tonga': 'Oceania', 
  'tuvalu': 'Oceania', 'vanuatu': 'Oceania'
};

function getContinent(country: string): string {
  const normalizedCountry = country.toLowerCase();
  return countryToContinentMap[normalizedCountry] || 'Other';
}

function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export default function TravelGuideList() {
  const [continentGuides, setContinentGuides] = useState<ContinentGuides>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedContinents, setExpandedContinents] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blogs?per_page=100');
        if (!res.ok) throw new Error('Failed to fetch travel guides');
        const posts = await res.json();

        const groupedByCountry: CountryGuides = {};
        posts.forEach((post: Post) => {
          Object.entries(post.categories || {}).forEach(([, cat]) => {
            const name = typeof cat === 'string' ? cat : cat.name;
            if (!groupedByCountry[name]) {
              groupedByCountry[name] = { cities: [], posts: [] };
            }
            groupedByCountry[name].posts.push(post);
            Object.entries(post.tags || {}).forEach(([, tag]) => {
              if (!groupedByCountry[name].cities.some(c => c.ID === tag.ID)) {
                groupedByCountry[name].cities.push(tag);
              }
            });
          });
        });

        // Group countries by continent
        const groupedByContinents: ContinentGuides = {};
        Object.entries(groupedByCountry).forEach(([country, data]) => {
          const continent = getContinent(country);
          
          if (!groupedByContinents[continent]) {
            groupedByContinents[continent] = {
              countries: {}
            };
          }
          
          groupedByContinents[continent].countries[country] = data;
        });

        // Initially expand all continents
        const initialExpandState: Record<string, boolean> = {};
        Object.keys(groupedByContinents).forEach(continent => {
          initialExpandState[continent] = true;
        });
        
        setContinentGuides(groupedByContinents);
        setExpandedContinents(initialExpandState);
      } catch (err) {
        setError('Failed to load travel guides. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const toggleContinent = (continent: string) => {
    setExpandedContinents(prev => ({
      ...prev,
      [continent]: !prev[continent]
    }));
  };

  if (loading) return <div className="py-8 text-center">Loading travel guides...</div>;
  if (error) return <div className="py-8 text-center text-red-500">{error}</div>;

  // Sort continents alphabetically
  const sortedContinents = Object.keys(continentGuides).sort();

  // Gather all posts and get the 3 most recent
  const allPosts = Object.values(continentGuides)
    .flatMap(continent => 
      Object.values(continent.countries).flatMap(country => country.posts)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Main List */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-center mb-8">Travel Guide List</h1>
        
        {sortedContinents.map(continent => (
          <div key={continent} className="mb-8">
            <button
              onClick={() => toggleContinent(continent)}
              className="flex items-center w-full text-left "
            >
              <h2 className="text-4xl font-bold mb-2 text-gray-800">
                {continent}
              </h2>
              <span className="ml-2">
                {expandedContinents[continent] ? '▼' : '►'}
              </span>
            </button>
            
            {expandedContinents[continent] && (
              <div className="ml-4">
                {/* Sort countries alphabetically within each continent */}
                {Object.keys(continentGuides[continent].countries)
                  .sort()
                  .map(country => (
                    <div key={country} className="mb-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-700">
                        {capitalizeWords(country)}
                      </h3>
                      
                      {continentGuides[continent].countries[country].cities.length > 0 && (
                        <ul className="ml-6 list-disc">
                          {continentGuides[continent].countries[country].cities.map(city => {
                            // Find the most recent post for this city in this country
                            const postsForCity = continentGuides[continent].countries[country].posts
                              .filter(post =>
                                Object.values(post.tags).some(tag => tag.ID === city.ID)
                              )
                              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                            const mostRecent = postsForCity[0];
                        
                            return (
                              <li key={city.ID}>
                                <Link
                                  href={mostRecent ? `/blog/${mostRecent.slug}` : '#'}
                                  className="text-blue-700 hover:underline"
                                >
                                  {city.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sidebar: Recent Posts */}
      <aside className="w-full md:w-80 flex-shrink-0">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map(post => (
            <Link
              key={post.ID}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition p-3"
            >
              {post.featured_image && (
                <div className="w-full h-36 mb-2 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              )}
              <div>
                <h4 className="font-semibold text-lg mb-1">{post.title}</h4>
                <p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}