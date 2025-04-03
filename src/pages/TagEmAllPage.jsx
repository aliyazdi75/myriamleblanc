import { motion } from 'framer-motion'

function TagEmAllPage() {
  return (
    <div className="min-h-screen">
      {/* Project Intro */}
      <section className="py-24">
        <div className="container">
          <h1 className="heading-1 mb-6">Tag 'Em All</h1>
          <p className="body-text mb-12">
            A visual onboarding experience designed to help users understand and use tags effectively in a collaborative environment.
          </p>
        </div>
      </section>

      {/* Comic Strip Section */}
      <section className="py-24">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="space-y-8">
            <img 
              src="/images/comic.png" 
              alt="Visual onboarding comic strip showing tag usage" 
              className="w-full rounded-xl"
            />
            <p className="body-text text-center">
              This comic strip illustrates the key moments in our user research where we discovered how users naturally think about and use tags.
            </p>
            <p className="body-text">
              Through playful visuals and clear examples, we guide users to understand that tags are more than just labels — they're tools for connection and discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <section className="py-24">
        <div className="container">
          <h2 className="heading-2 mb-8">Project Overview</h2>
          <p className="body-text mb-12">
            In this 48-hour design sprint, I focused on creating an intuitive and engaging onboarding experience that helps users understand the power of tagging.
          </p>
          {/* Add more sections as needed */}
        </div>
      </section>
    </div>
  )
}

export default TagEmAllPage 