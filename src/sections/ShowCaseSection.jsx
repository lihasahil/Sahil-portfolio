import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in the entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Collect card refs
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    // Batch animate cards using ScrollTrigger
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * index, // Reduced stagger delay for snappier animation
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none", // Avoid re-triggering
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://github.com/lihasahil/Food_Delivery_App"
                target="_blank"
              >
                <img src="/images/project1.png" alt="Ryde App Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>A Full Stack Food Delivery Website called FeastWave.</h2>
              <p className="text-white-50 md:text-xl">
                A website built using MERN stack for fast and user-friendly
                experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://github.com/lihasahil/Final_Year_Project"
                  target="_blank"
                >
                  <img src="/images/project2.png" alt="FindMe" />
                </a>
              </div>
              <h2>
                FindME: ML Project using Face Recognition and Gait Pattern
                analysis.
              </h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://github.com/lihasahil/social-book"
                  target="_blank"
                >
                  <img src="/images/project3.png" alt="SocialBook" />
                </a>
              </div>
              <h2>SocialBook - A Social Platform built on Next.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
