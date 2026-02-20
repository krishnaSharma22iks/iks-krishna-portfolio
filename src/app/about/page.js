"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center 
                       opacity-0 animate-fadeIn edu-hand">
          About Me
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="flex justify-center opacity-0 animate-fadeIn delay-200">
            <img
              src="/profile.jpg"
              alt="Krishna Sharma"
              className="w-72 h-72 object-cover rounded-xl border border-gray-700
                         transition duration-500 hover:scale-105 hover:shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="opacity-0 animate-fadeIn delay-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-6 
                          transition duration-300 hover:text-white">
              Hi, I'm <span className="text-white font-medium">Krishna Sharma</span>, 
              a frontend developer who enjoys building clean and user-friendly websites. 
              I like turning ideas into simple, responsive, and modern web interfaces.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6 
                          transition duration-300 hover:text-white">
              I started with HTML, CSS, and JavaScript, and gradually moved into 
              working with React and Next.js. I focus on writing clean code and 
              creating smooth user experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 
                          transition duration-300 hover:text-white">
              I have completed my graduation (BA) from S.D. Government College, Beawar, 
              and also done courses like RSCIT, Web Development, Digital Marketing, 
              and Graphic Design.
            </p>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-400">
              {[
                "Name: Krishna Sharma",
                "Email: flashm683@gmail.com",
                "Role: Frontend Developer",
                "Education: BA - S.D. Govt College, Beawar"
              ].map((item, i) => (
                <p
                  key={i}
                  className="transition duration-300 hover:text-white hover:translate-x-2"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}