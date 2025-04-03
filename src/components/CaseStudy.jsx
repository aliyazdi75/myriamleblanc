export default function CaseStudy({ title, description, imageUrl, link, featured = false }) {
  return (
    <article 
      className={`bg-white ${featured ? 'rounded-2xl' : 'rounded-lg'} shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in`}
      role="article"
      aria-labelledby={`case-study-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`${featured ? 'aspect-[16/9]' : 'aspect-video'} bg-muted-gray relative overflow-hidden`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${title} - Visual representation`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
        )}
      </div>
      <div className={`${featured ? 'p-8' : 'p-6'}`}>
        <h3 
          id={`case-study-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className={`${featured ? 'text-2xl' : 'text-xl'} font-medium text-text-primary mb-3`}
        >
          {title}
        </h3>
        <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>
        {link && (
          <a 
            href={link} 
            className="inline-flex items-center text-accent hover:text-text-secondary transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label={`View case study for ${title}`}
          >
            View case study
            <svg 
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  )
} 