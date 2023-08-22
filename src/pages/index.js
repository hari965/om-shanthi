import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AsideBar from "../components/AsideBar";

export default function Home({ location }) {
  const aboutref = useRef();
  const visionRef = useRef();
  const missionRef = useRef();
  return (
    <div>
      <Header path={location.pathname} />
      <main>
        <div className="sticky top-[172px]">
          <section className="relative flex p-4 ">
            <AsideBar>
              <span
                className="cursor-pointer"
                onClick={() => aboutref.current.scrollIntoView()}
              >
                About Us
              </span>
              <span
                className="cursor-pointer"
                onClick={() => missionRef.current.scrollIntoView()}
              >
                Our Mission
              </span>
              <span
                className="cursor-pointer"
                onClick={() => visionRef.current.scrollIntoView()}
              >
                Our Vision
              </span>
              <span className="cursor-pointer">Our Team</span>
              <span className="cursor-pointer">Partners</span>
              <span className="cursor-pointer">Locations</span>
            </AsideBar>
            <section className="flex basis-4/5 flex-col px-10 py-8 ">
              <div className="mr-16">
                <article className="mb-8" ref={aboutref}>
                  <div className="text-3xl font-semibold mb-8">About Us</div>
                  <p className=" mb-6 text-justify">
                    We are a group of passionate and committed Hindu faith
                    practitioners as Founding Members, with experience in
                    establishing and running not-for-profit organisations and
                    community services.​
                  </p>
                  <p className=" mb-6 text-justify">
                    We are highly skilled professionals from varied fields of
                    work, from project management and delivery, operations
                    management, to community leaders, legal, finance and
                    accounts professionals with experience in community service,
                    regulatory compliance, and reporting. Our skills and
                    expertise cover the breadth and depth of cultural,
                    technical, operational, and management aspects of the
                    organisation.​
                  </p>
                  <p className=" mb-6 text-justify">
                    We will cooperate with a wide network of community
                    organisations and partners willing to contribute and support
                    the services.​
                  </p>
                </article>
                <article className="mb-8" ref={missionRef}>
                  <div className="text-3xl font-semibold mb-8">Our Mission</div>
                  <p className=" mb-6 text-justify">
                    We commence our one-stop Antyeshti (final rites) service in
                    Melbourne by establishing comprehensive facilities and
                    services for Hindu faith practitioners in Australia to
                    perform the final rites and ongoing rituals in Australia and
                    India, through a holistic, structured, and comforting
                    process adhering to authentic Hindu traditions and customs,
                    fulfilling the spiritual and emotional well-being of the
                    family and the community. We will establish a library with
                    diverse and authentic literature and resources on Sanatana
                    Dharma and offer teaching and coaching to younger generation
                    on the principles and practices of Sanatana Dharma.
                  </p>
                  <p className=" mb-6 text-justify">
                    Our services shall be expanded to other locations in
                    Australia in due course.
                  </p>
                </article>
                <article className="mb-8" ref={visionRef}>
                  <div className="text-3xl font-semibold mb-8">Our Vision</div>
                  <p className=" mb-6 text-justify">
                    We envision to be a one-stop service for the final rites of
                    Hindu faith followers in Australia and establish a wealth of
                    diverse and authentic resources to understand and follow the
                    principles of Sanatana Dharma by successive generations of
                    Hindu faith followers and help sustain its heritage.
                  </p>
                </article>
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
