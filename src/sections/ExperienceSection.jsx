import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCards from "../components/GlowCards";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Batch animate timeline cards
    ScrollTrigger.batch(".timeline-card", {
      onEnter: (batch) =>
        gsap.from(batch, {
          xPercent: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.15,
        }),
      start: "top 80%",
      once: true,
    });

    // Batch animate expText elements
    ScrollTrigger.batch(".expText", {
      onEnter: (batch) =>
        gsap.from(batch, {
          xPercent: 0,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.15,
        }),
      start: "top 60%",
      once: true,
    });

    // Optimize timeline scaling with a pre-created tween
    const timelineTween = gsap.to(".timeline", {
      scaleY: 0,
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: ".timeline",
      start: "top center",
      end: "70% center",
      onUpdate: (self) => {
        timelineTween.progress(self.progress);
      },
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Academic Background"
          sub="🎒 My academic path from school to specialization."
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCards card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCards>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
