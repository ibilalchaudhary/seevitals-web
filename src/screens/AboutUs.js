import React from "react";
import main__background__img from "../assets/main__background__img.png";
import about__illustration from "../assets/about__illustration.png";
import OurStoryBg from "../assets/OurStoryBg.png";
import VisionBg from "../assets/VisionBg.png";
import visionPic from "../assets/visionPic.png";
export default function AboutUs() {
  return (
    <>
      <div className="about__us__container__jumbotron">
        <img
          src={main__background__img}
          alt="main__background__img"
          className="about__us__container__jumbotron__main__bg"
        />
        <div className="about__us__container__jumbotron__overlay">
          <img
            src={about__illustration}
            alt="about__illustration"
            className="about__illustration"
          />
          <div className="about__us__container__jumbotron__overlay__heading">
            We Want to See you <span>Technology </span>in
            <span> Healthcare</span>
          </div>
          <div className="about__us__container__jumbotron__overlay__para">
            Like You've Never Seen
          </div>
        </div>
      </div>
      <div className="our__story__container">
        <img
          src={OurStoryBg}
          alt="OurStoryBg"
          className="our__story__container__img"
        />
        <div className="our__story__container__overlay">
          <div className="our__story__container__overlay__wrapper">
            <div className="our__story__container__overlay__content">
              <div className="our__story__container__overlay__content__para">
                <div className="our__story__container__overlay__content__para__heading">
                  Our Story
                </div>
                SeeVITALS Technologies is an ambitious project brought to life
                by 3 friends that have recognized the dire need of technological
                interventions in the healthcare industry. 2 doctors having
                worked in numerous healthcare setups from around the world
                understood that the need to optimize the role of nurses and
                allied hospital staff remained crucial. Especially in ICUs
                (Intensive Care Units) and HDUs (High Dependency Units), where
                time was of the essence. While shifting their focus from their
                individual clinical practices to a solution best fit for both
                hospital staff and their patients, the idea started taking shape
                during a mutual hospital management degree.
              </div>
              <div className="our__story__container__overlay__content__para">
                We felt that the time taken for clerical work (patient charting,
                hourly recordings, etc.) could be better utilized and patient
                care can thus be improved. Here’s where our computer scientist
                came in. With thorough experience in the field and an existing
                network with the health industry alike, Dayyan proposed to
                introduce a technology that could cater to the nurses and
                doctors as well as improve patient risk assessment and bed
                throughput time.
              </div>
            </div>
          </div>
          <div className="our__story__container__overlay__heading">
            Our Story
          </div>
        </div>
      </div>
      <div className="our__vision__container">
        <img
          src={VisionBg}
          alt="VisionBg"
          className="our__vision__container__img"
        />
        <div className="our__vision__container__overlay">
          <div className="our__vision__container__overlay__container">
            <div className="why__choose__us__container__content__heading__container">
              <div
                className="why__choose__us__container__content__heading"
                style={{ color: "#4AB493" }}
              >
                Our Vision
              </div>
              <div className="why__choose__us__container__content__border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="11"
                  viewBox="0 0 100 11"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#0d645d" />
                      <stop offset="1" stop-color="#4ab493" />
                    </linearGradient>
                  </defs>
                  <g
                    id="Group_35"
                    data-name="Group 35"
                    transform="translate(-921 -4991)"
                  >
                    <line
                      id="Line_2"
                      data-name="Line 2"
                      x2="31"
                      transform="translate(987.5 4996.5)"
                      fill="none"
                      stroke="#1a1717"
                      stroke-linecap="round"
                      stroke-width="5"
                    />
                    <line
                      id="Line_3"
                      data-name="Line 3"
                      x2="30.46"
                      transform="translate(923.5 4996.5)"
                      fill="none"
                      stroke="#1a1717"
                      stroke-linecap="round"
                      stroke-width="5"
                    />
                    <circle
                      id="Ellipse_2"
                      data-name="Ellipse 2"
                      cx="5.5"
                      cy="5.5"
                      r="5.5"
                      transform="translate(965 4991)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="our__vision__container__overlay__container__content">
              <div className="our__vision__container__overlay__container__content__img__card">
                <img
                  src={visionPic}
                  alt="visionPic"
                  className="our__vision__container__overlay__container__content__img"
                />
              </div>
              <div className="our__vision__container__overlay__container__content__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="67"
                  height="439.606"
                  viewBox="0 0 67 439.606"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#0d645d" />
                      <stop offset="1" stop-color="#4ab493" />
                    </linearGradient>
                  </defs>
                  <g id="Group_3746" data-name="Group 3746">
                    <g id="Group_5741" data-name="Group 5741">
                      <g
                        id="Rectangle_1495"
                        data-name="Rectangle 1495"
                        fill="#fff"
                        stroke="#30927c"
                        stroke-width="1"
                      >
                        <rect width="67" height="64" rx="18" stroke="none" />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="66"
                          height="63"
                          rx="17.5"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Group_3745"
                        data-name="Group 3745"
                        transform="translate(19.69 14.205)"
                      >
                        <path
                          id="Path_32"
                          data-name="Path 32"
                          d="M86.419,610.537a.943.943,0,0,1-.55-.957c.012-1.713-.039-3.427.014-5.138a12.858,12.858,0,0,1,7.1-11.547c.039-.021.081-.037.172-.078-.226.663-.448,1.277-.645,1.9a37.368,37.368,0,0,0-1.307,5.655.411.411,0,0,1-.339.389A3.052,3.052,0,0,0,88.8,604a3.059,3.059,0,0,0,6,.416,3.022,3.022,0,0,0-1.822-3.579c-.3-.116-.326-.226-.278-.518a33.843,33.843,0,0,1,2.311-8.07.464.464,0,0,1,.332-.3,12.618,12.618,0,0,1,3.37-.487,23.72,23.72,0,0,1,3.906.135c.469.079.933.187,1.4.277a.231.231,0,0,1,.214.191,23.9,23.9,0,0,1,.726,4.393.459.459,0,0,1-.305.5,11.684,11.684,0,0,0-4.076,3.1,4.558,4.558,0,0,0-1.02,2.257,3.341,3.341,0,0,0,1.324,3.124,2.543,2.543,0,0,0,.34.244.727.727,0,0,0,.969-.171.735.735,0,0,0-.1-1.005c-.086-.078-.185-.141-.274-.215a1.907,1.907,0,0,1-.576-2.487,5.469,5.469,0,0,1,1.5-1.858,12.462,12.462,0,0,1,2.468-1.628c.115-.059.211-.112.339.01a10.279,10.279,0,0,1,2.732,3.7,3.526,3.526,0,0,1,.227.945,1.878,1.878,0,0,1-1.23,2.047c-.127.056-.264.094-.384.162a.744.744,0,0,0-.311.939.736.736,0,0,0,.9.4,3.479,3.479,0,0,0,2.326-4.573,9.7,9.7,0,0,0-2.342-3.789,2.763,2.763,0,0,0-.441-.447,1.45,1.45,0,0,1-.613-1.391,15.478,15.478,0,0,0-.513-3.58c-.014-.066-.025-.132-.045-.244a10.751,10.751,0,0,1,1.988,1.047,12.941,12.941,0,0,1,5.834,9.032,12.492,12.492,0,0,1,.146,2.054c0,1.643-.008,3.286,0,4.929a.962.962,0,0,1-.553.991Z"
                          transform="translate(-85.858 -574.736)"
                          fill="url(#linear-gradient)"
                        />
                        <path
                          id="Path_33"
                          data-name="Path 33"
                          d="M113.741,552.949a7.782,7.782,0,1,1,7.772-7.8A7.787,7.787,0,0,1,113.741,552.949Z"
                          transform="translate(-99.755 -537.385)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                  </g>
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    y2="120"
                    transform="translate(33.672 64.5)"
                    fill="none"
                    stroke="#2b8b77"
                    stroke-width="1"
                  />
                  <g
                    id="Group_5742"
                    data-name="Group 5742"
                    transform="translate(-888 -1674)"
                  >
                    <g
                      id="Rectangle_1495-2"
                      data-name="Rectangle 1495"
                      transform="translate(888 1858)"
                      fill="#fff"
                      stroke="#2c8c78"
                      stroke-width="1"
                    >
                      <rect width="67" height="64" rx="18" stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="66"
                        height="63"
                        rx="17.5"
                        fill="none"
                      />
                    </g>
                    <g
                      id="Group_3745-2"
                      data-name="Group 3745"
                      transform="translate(907.69 1872.313)"
                    >
                      <path
                        id="Path_32-2"
                        data-name="Path 32"
                        d="M86.419,610.537a.943.943,0,0,1-.55-.957c.012-1.713-.039-3.427.014-5.138a12.858,12.858,0,0,1,7.1-11.547c.039-.021.081-.037.172-.078-.226.663-.448,1.277-.645,1.9a37.368,37.368,0,0,0-1.307,5.655.411.411,0,0,1-.339.389A3.052,3.052,0,0,0,88.8,604a3.059,3.059,0,0,0,6,.416,3.022,3.022,0,0,0-1.822-3.579c-.3-.116-.326-.226-.278-.518a33.843,33.843,0,0,1,2.311-8.07.464.464,0,0,1,.332-.3,12.618,12.618,0,0,1,3.37-.487,23.72,23.72,0,0,1,3.906.135c.469.079.933.187,1.4.277a.231.231,0,0,1,.214.191,23.9,23.9,0,0,1,.726,4.393.459.459,0,0,1-.305.5,11.684,11.684,0,0,0-4.076,3.1,4.558,4.558,0,0,0-1.02,2.257,3.341,3.341,0,0,0,1.324,3.124,2.543,2.543,0,0,0,.34.244.727.727,0,0,0,.969-.171.735.735,0,0,0-.1-1.005c-.086-.078-.185-.141-.274-.215a1.907,1.907,0,0,1-.576-2.487,5.469,5.469,0,0,1,1.5-1.858,12.462,12.462,0,0,1,2.468-1.628c.115-.059.211-.112.339.01a10.279,10.279,0,0,1,2.732,3.7,3.526,3.526,0,0,1,.227.945,1.878,1.878,0,0,1-1.23,2.047c-.127.056-.264.094-.384.162a.744.744,0,0,0-.311.939.736.736,0,0,0,.9.4,3.479,3.479,0,0,0,2.326-4.573,9.7,9.7,0,0,0-2.342-3.789,2.763,2.763,0,0,0-.441-.447,1.45,1.45,0,0,1-.613-1.391,15.478,15.478,0,0,0-.513-3.58c-.014-.066-.025-.132-.045-.244a10.751,10.751,0,0,1,1.988,1.047,12.941,12.941,0,0,1,5.834,9.032,12.492,12.492,0,0,1,.146,2.054c0,1.643-.008,3.286,0,4.929a.962.962,0,0,1-.553.991Z"
                        transform="translate(-85.858 -574.736)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_33-2"
                        data-name="Path 33"
                        d="M113.741,552.949a7.782,7.782,0,1,1,7.772-7.8A7.787,7.787,0,0,1,113.741,552.949Z"
                        transform="translate(-99.755 -537.385)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                  <line
                    id="Line_6-2"
                    data-name="Line 6"
                    y2="127"
                    transform="translate(33.5 248.5)"
                    fill="none"
                    stroke="#31947d"
                    stroke-width="1"
                  />
                  <g
                    id="Group_5743"
                    data-name="Group 5743"
                    transform="translate(-888 -1674)"
                  >
                    <g
                      id="Rectangle_1495-3"
                      data-name="Rectangle 1495"
                      transform="translate(888 2049.606)"
                      fill="#fff"
                      stroke="#3aa085"
                      stroke-width="1"
                    >
                      <rect width="67" height="64" rx="18" stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="66"
                        height="63"
                        rx="17.5"
                        fill="none"
                      />
                    </g>
                    <g
                      id="Group_3745-3"
                      data-name="Group 3745"
                      transform="translate(907.69 2063.812)"
                    >
                      <path
                        id="Path_32-3"
                        data-name="Path 32"
                        d="M86.419,610.537a.943.943,0,0,1-.55-.957c.012-1.713-.039-3.427.014-5.138a12.858,12.858,0,0,1,7.1-11.547c.039-.021.081-.037.172-.078-.226.663-.448,1.277-.645,1.9a37.368,37.368,0,0,0-1.307,5.655.411.411,0,0,1-.339.389A3.052,3.052,0,0,0,88.8,604a3.059,3.059,0,0,0,6,.416,3.022,3.022,0,0,0-1.822-3.579c-.3-.116-.326-.226-.278-.518a33.843,33.843,0,0,1,2.311-8.07.464.464,0,0,1,.332-.3,12.618,12.618,0,0,1,3.37-.487,23.72,23.72,0,0,1,3.906.135c.469.079.933.187,1.4.277a.231.231,0,0,1,.214.191,23.9,23.9,0,0,1,.726,4.393.459.459,0,0,1-.305.5,11.684,11.684,0,0,0-4.076,3.1,4.558,4.558,0,0,0-1.02,2.257,3.341,3.341,0,0,0,1.324,3.124,2.543,2.543,0,0,0,.34.244.727.727,0,0,0,.969-.171.735.735,0,0,0-.1-1.005c-.086-.078-.185-.141-.274-.215a1.907,1.907,0,0,1-.576-2.487,5.469,5.469,0,0,1,1.5-1.858,12.462,12.462,0,0,1,2.468-1.628c.115-.059.211-.112.339.01a10.279,10.279,0,0,1,2.732,3.7,3.526,3.526,0,0,1,.227.945,1.878,1.878,0,0,1-1.23,2.047c-.127.056-.264.094-.384.162a.744.744,0,0,0-.311.939.736.736,0,0,0,.9.4,3.479,3.479,0,0,0,2.326-4.573,9.7,9.7,0,0,0-2.342-3.789,2.763,2.763,0,0,0-.441-.447,1.45,1.45,0,0,1-.613-1.391,15.478,15.478,0,0,0-.513-3.58c-.014-.066-.025-.132-.045-.244a10.751,10.751,0,0,1,1.988,1.047,12.941,12.941,0,0,1,5.834,9.032,12.492,12.492,0,0,1,.146,2.054c0,1.643-.008,3.286,0,4.929a.962.962,0,0,1-.553.991Z"
                        transform="translate(-85.858 -574.736)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_33-3"
                        data-name="Path 33"
                        d="M113.741,552.949a7.782,7.782,0,1,1,7.772-7.8A7.787,7.787,0,0,1,113.741,552.949Z"
                        transform="translate(-99.755 -537.385)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="our__vision__container__overlay__container__content__text__container">
                <div className="our__vision__container__overlay__container__content__text__container__content">
                  <div className="our__vision__container__overlay__container__content__heading">
                    Heading
                  </div>
                  <div className="our__vision__container__overlay__container__content__text">
                    Timesaving, cost-saving, and patient-saving. Our solutions
                    are the umbrella under which a hospital can operate
                    efficiently and allow your patients to experience the
                    highest level of patient care through integrated
                    technologies there is to offer in Pakistan. our services
                    stretch beyond a sales invoice and a huge part of our
                    customized solutions involve redesigning them to your needs
                    so we are always in touch.
                  </div>
                </div>
                <div className="our__vision__container__overlay__container__content__text__container__content">
                  <div className="our__vision__container__overlay__container__content__heading">
                    Heading
                  </div>
                  <div className="our__vision__container__overlay__container__content__text">
                    Timesaving, cost-saving, and patient-saving. Our solutions
                    are the umbrella under which a hospital can operate
                    efficiently and allow your patients to experience the
                    highest level of patient care through integrated
                    technologies there is to offer in Pakistan. our services
                    stretch beyond a sales invoice and a huge part of our
                    customized solutions involve redesigning them to your needs
                    so we are always in touch.
                  </div>
                </div>
                <div className="our__vision__container__overlay__container__content__text__container__content">
                  <div className="our__vision__container__overlay__container__content__heading">
                    Heading
                  </div>
                  <div className="our__vision__container__overlay__container__content__text">
                    Timesaving, cost-saving, and patient-saving. Our solutions
                    are the umbrella under which a hospital can operate
                    efficiently and allow your patients to experience the
                    highest level of patient care through integrated
                    technologies there is to offer in Pakistan. our services
                    stretch beyond a sales invoice and a huge part of our
                    customized solutions involve redesigning them to your needs
                    so we are always in touch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
