function TagEmAllCase() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 text-center">
          Visual Onboarding – Tag 'Em All Case Study Excerpt
        </h2>
        
        <div className="space-y-8">
          {/* Comic Strip Image */}
          <div className="relative">
            <img 
              src="/images/comic.png" 
              alt="Comic strip showing game onboarding sequence"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          {/* Caption Image */}
          <div className="relative">
            <img 
              src="/images/text_side_comic.png" 
              alt="Caption text for the comic strip"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
            After launching our 48h game jam prototype, I realized most players were confused for the first 30 seconds. 
            I proposed a 5-panel onboarding strip to solve this — no need for walls of text or clunky tutorials. 
            This small UX improvement could radically improve clarity, especially for new players.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TagEmAllCase 