export default function CaseStudy({ title, description, imageUrl, link }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="aspect-video bg-muted-gray">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <a 
            href={link} 
            className="text-gray-900 hover:underline inline-flex items-center"
          >
            View case study
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
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