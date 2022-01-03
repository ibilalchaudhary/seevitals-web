import React, { useState } from "react";
import main__background__img from "../assets/main__background__img.png";
import main__illustration from "../assets/main__illustration.png";
import productSvgInactive from "../assets/productSvgInactive.svg";
import productSvgActive from "../assets/productSvgActive.svg";
import healthSvgInactive from "../assets/healthSvgInactive.svg";
import healthSvgActive from "../assets/healthSvgActive.svg";
import consultationsSvgInactive from "../assets/consultationsSvgInactive.svg";
import consultationsSvgActive from "../assets/consultationsSvgActive.svg";
import remoteSvgInactive from "../assets/remoteSvgInactive.svg";
import remoteSvgActive from "../assets/remoteSvgActive.svg";
import TrendSvg from "../assets/TrendSvg.svg";
import patientSaftySvg from "../assets/patientSaftySvg.svg";
import apiSvg from "../assets/apiSvg.svg";
import AddonSectionBg from "../assets/AddonSectionBg.png";
import welcomeBg from "../assets/welcomeBg.png";
import doctorsPic from "../assets/doctorsPic.png";
import parameterBg from "../assets/parameterBg.png";
import whyChooseUsBg from "../assets/whyChooseUsBg.png";
import FooterBg from "../assets/FooterBg.png";
import specilist1 from "../assets/specilist1.png";
import specilist2 from "../assets/specilist2.png";
import specilist3 from "../assets/specilist3.png";
import clinicSvgInactive from "../assets/outcomesSectionSvg/clinicSvgInactive.svg";
import clinicSvgActive from "../assets/outcomesSectionSvg/clinicSvgActive.svg";
import icuInactive from "../assets/outcomesSectionSvg/icuInactive.svg";
import icuActive from "../assets/outcomesSectionSvg/icuActive.svg";
import careInactive from "../assets/outcomesSectionSvg/careInactive.svg";
import careActive from "../assets/outcomesSectionSvg/careActive.svg";
import monitorInactive from "../assets/outcomesSectionSvg/monitorInactive.svg";
import monitorActive from "../assets/outcomesSectionSvg/monitorActive.svg";
import nursingInactive from "../assets/outcomesSectionSvg/nursingInactive.svg";
import nursingActive from "../assets/outcomesSectionSvg/nursingActive.svg";
import adoptInactive from "../assets/outcomesSectionSvg/adoptInactive.svg";
import adoptActive from "../assets/outcomesSectionSvg/adoptActive.svg";
import historyInactive from "../assets/outcomesSectionSvg/historyInactive.svg";
import historyActive from "../assets/outcomesSectionSvg/historyActive.svg";
import easeInactive from "../assets/outcomesSectionSvg/easeInactive.svg";
import easeActive from "../assets/outcomesSectionSvg/easeActive.svg";
import why__choose__us__container__content__card__svg1 from "../assets/why__choose__us__container__content__card__svg1.png";
import why__choose__us__container__content__card__svg2 from "../assets/why__choose__us__container__content__card__svg2.png";
import why__choose__us__container__content__card__svg3 from "../assets/why__choose__us__container__content__card__svg3.png";

function ServicesCard({ img, hoverImg, text }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="new__services__container__content__card"
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <img
        src={hovered ? hoverImg : img}
        alt="services img"
        className="new__services__container__content__card__img"
      />

      <div className="new__services__container__content__card__content">
        {text}
      </div>
      <div className="new__services__container__content__card__info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        itaque minus asperiores atque suscipit rem recusandae officiis eius
        dignissimos velit quia, alias, harum molestiae consectetur!
      </div>
    </div>
  );
}
function AddonsCard({ img, hoverImg, text }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="new__addons__container__content__card"
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <img
        src={hovered ? hoverImg : img}
        alt="addons img"
        className="new__addons__container__content__card__img"
      />

      <div className="new__addons__container__content__card__content">
        {text}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="main__container__jumbotron">
        <img
          src={main__background__img}
          alt="main__background__img"
          className="main__container__jumbotron__main__bg"
        />
        <div className="main__container__jumbotron__overlay">
          <img
            src={main__illustration}
            alt="main__illustration"
            className="main__illustration"
          />
          <div className="main__container__jumbotron__overlay__heading">
            Technology in <span>Healthcare</span>
          </div>
          <div className="main__container__jumbotron__overlay__para">
            Like You've Never Seen
          </div>
        </div>
      </div>
      <div className="new__services__container">
        <div className="new__services__container__heading">Services</div>
        <div className="new__services__container__content">
          <ServicesCard
            img={healthSvgInactive}
            hoverImg={healthSvgActive}
            text="Customized Health Tech Solutions"
          />
          <ServicesCard
            img={productSvgInactive}
            hoverImg={productSvgActive}
            text="Product Development"
          />
          <ServicesCard
            img={consultationsSvgInactive}
            hoverImg={consultationsSvgActive}
            text="Technical Consultations"
          />
          <ServicesCard
            img={remoteSvgInactive}
            hoverImg={remoteSvgActive}
            text="Remote Patient Monitoring"
          />
        </div>
      </div>
      <div className="new__addons__container">
        <img
          src={AddonSectionBg}
          alt="AddonSectionBg"
          className="new__addons__container__img"
        />
        <div className="new__addons__container__overlay">
          <div className="new__addons__container__heading">VALUE ADDONS</div>
          <div className="new__addons__container__content">
            <AddonsCard
              img={TrendSvg}
              hoverImg={TrendSvg}
              text="Health Trends"
            />
            <AddonsCard
              img={apiSvg}
              hoverImg={apiSvg}
              text="Integration with HIMS with API & SDK"
            />
            <AddonsCard
              img={patientSaftySvg}
              hoverImg={patientSaftySvg}
              text="Improved Patient Safety with DEWS"
            />
          </div>
        </div>
      </div>
      <div className="welcome__container">
        <img src={welcomeBg} alt="" className="welcome__container__img" />
        <div className="welcome__container__content">
          <img
            src={doctorsPic}
            alt=""
            className="welcome__container__content__img"
          />
          <div className="welcome__container__content__gradiant">
            <div className="welcome__container__content__gradiant__content">
              <div className="welcome__container__content__gradiant__content__heading">
                Welcome To SeeVitals
              </div>
              <div className="welcome__container__content__gradiant__content__sub__heading">
                Contactless patient monitoring & Early Warning System for Step
                down ICU & HDU Units
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outcomes__container">
        <div className="outcomes__container__content">
          <div className="outcomes__container__content__headings__container">
            <div className="outcomes__container__content__heading">
              Improve Patient Outcomes
            </div>
            <div className="outcomes__container__content__para">
              In Your Hospital With SeeVitals Early Warning System
            </div>
          </div>
          <div className="outcomes__container__content__cards__container">
            <div className="outcomes__container__content__card">
              <img
                src={clinicSvgInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={clinicSvgActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Improved Clinical Outcomes & Patient Safety
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={icuInactive}
                alt="icuInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={icuActive}
                alt="icuActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Maximize ICU bed throughput
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="careInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="careActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Critical Care Outreach automation
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={monitorInactive}
                alt="monitorInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={monitorActive}
                alt="monitorActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Digitalization of vitals monitoring
              </div>
            </div>
          </div>
          <div className="outcomes__container__content__cards__container">
            <div className="outcomes__container__content__card">
              <img
                src={nursingInactive}
                alt="nursingInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={nursingActive}
                alt="nursingActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Nursing efficiency
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={adoptInactive}
                alt="adoptInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={adoptActive}
                alt="adoptActivehh"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Convenient & Easy to adopt
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={historyInactive}
                alt="historyInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={historyActive}
                alt="historyActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Patient History
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={easeInactive}
                alt="easeInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={easeActive}
                alt="easeActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Doctors ease
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parameters__container">
        <img
          src={parameterBg}
          alt="parameter__container__bg"
          className="parameter__container__bg"
        />
        <div className="parameters__container__content">
          <div className="parameters__container__content__headings__container">
            <div className="parameters__container__content__headings">
              Parameters Monitored By SeeVitals
            </div>
            <div className="parameters__container__content__para">
              Contactless Blood Pressure, Heart Rate, Respiration Rate & Sleep
              Monitor
            </div>
          </div>
          <div className="parameters__container__content__entries__wrapper">
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
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
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_79"
                        data-name="Ellipse 79"
                        cx="34"
                        cy="34"
                        r="34"
                        transform="translate(-0.165 0.378)"
                        stroke="#707070"
                        stroke-width="1"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Mask_Group_3"
                    data-name="Mask Group 3"
                    transform="translate(0.165 -0.378)"
                    clip-path="url(#clip-path)"
                  >
                    <g
                      id="Group_1741"
                      data-name="Group 1741"
                      transform="translate(-5.462 -5.462)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-316.785,389.157a1.515,1.515,0,0,1,1,1.638c-.023,3.275-.036,6.55,0,9.825.013,1.172-.545,1.6-1.624,1.6q-7.739,0-15.479,0c-1.143,0-1.752-.485-1.745-1.694q.027-4.837,0-9.676a1.49,1.49,0,0,1,1.116-1.694c1.385.137,2.777.112,4.166.15a3.606,3.606,0,0,0,2.484-.781c.792-.171,1.3-.832,2-1.157.451-.21.859-.724,1.46-.349.433,2.768,2.552,2.243,4.4,2.274C-318.262,389.31-317.531,389.116-316.785,389.157Z"
                        transform="translate(363.721 -367.625)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-333.58,428.046a.663.663,0,0,0-.26-.516c-2.04-1.342-2.381-3.316-2.337-5.594.1-4.966.054-9.935.016-14.9-.013-1.853-.467-2.292-2.291-2.35-1.439-.047-2.88.007-4.321-.021-2.87-.054-4.151-1.258-4.1-4.1.083-4.249-.426-8.521.428-12.745-.237-.322-.491-.182-.779-.063-4.282,1.773-8.643,3.341-12.895,5.2-3.924,1.717-7.971,3.153-11.964,4.714a7.771,7.771,0,0,0-1.21,3.255,10.7,10.7,0,0,0-.191,3.957,4.549,4.549,0,0,1-.049,2.061c-.467,1.842.08,3.589.473,5.352a56.935,56.935,0,0,0,1.57,7.116c.176.846.016,1.817.889,2.405v.006a5.155,5.155,0,0,0,1.5,3.285l2.964,4.8c.294,1.041,1.216,1.585,1.86,2.349l.234.307a29.189,29.189,0,0,0,3.667,3.985,7.3,7.3,0,0,0,3.166,2.307,1.143,1.143,0,0,1,.285.022,3.306,3.306,0,0,0,.887-.072q5.194-1.915,10.375-3.869c3.124-1.182,6.238-2.393,9.357-3.589q3.577-1.373,7.155-2.743a7.115,7.115,0,0,0-1.592-.207C-331.684,428.266-332.709,428.766-333.58,428.046Z"
                        transform="translate(373.706 -367.811)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-315.251,422.8c-1.941,2.322-1.984,4.538-.171,6.341a3.98,3.98,0,0,0,1.929.981c-.75.564-.354,1.364-.383,2.05-.056,1.333-.675,2.056-2,1.973-1.219-.077-2.576.489-3.6-.66a33.568,33.568,0,0,0-.036-4.449c-.389-2.882,1.633-4.335,3.284-6.038A1.129,1.129,0,0,1-315.251,422.8Z"
                        transform="translate(359.869 -376.797)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-295.159,394.75l-.072-.564c-.207-1.845-.161-3.746-1.216-5.4q-.147-.413-.3-.827c-.267-.732.121-1.706-.814-2.19l-.347-.868a4.285,4.285,0,0,0-1.415-3l-3.041-4.8c-.252-.25-.141-.756-.605-.856l-1.506-1.769a43.192,43.192,0,0,0-4.762-5.014,4.319,4.319,0,0,0-1.781-.98l-4.2-2.646a12.737,12.737,0,0,0-6.272-2.713,53.242,53.242,0,0,0-10.117-1.909c-1.586-.521-3.169.179-4.755.007l-.32.019a36.748,36.748,0,0,0-4.441.309,1.44,1.44,0,0,0-.638.36.2.2,0,0,1-.214.055c-1.689.582-3.669.154-5.142,1.484l-4.155,1.775c-.746.319-1.7.241-2.135,1.146l-.545.345a13.581,13.581,0,0,0-6.028,4.4l-.336.333c-1.391.564-1.87,2.076-3.008,2.9A3.9,3.9,0,0,0-365,376.568l.01,0a12.051,12.051,0,0,0-3.582,5.7l-2.127,4.721a5.383,5.383,0,0,0-.99,3.838c.613.39,1.149.019,1.685-.19,6.613-2.583,13.178-5.288,19.789-7.877a24.7,24.7,0,0,1,4.344-1.54,20.528,20.528,0,0,1,3.127-1.231,7.5,7.5,0,0,1,3.326-.339c2.27-.016,2.271,0,2.856,2.165.447.511.913.232,1.306-.034a17.537,17.537,0,0,1,2.376-1.282c0-.027,0-.054-.005-.081.047-.521.189-1.1.762-1.133a25.353,25.353,0,0,1,5.179.053c.255.036.47.345.7.529v.281c.056.025.112.041.167.068,2.262.77,3.167,1.786,3.225,3.919q.135,4.995,0,9.994a3.628,3.628,0,0,1-3.811,3.732c-1.54.051-3.083-.011-4.624.024-1.912.043-2.253.364-2.263,2.3q-.041,7.907,0,15.814c0,.63-.08,1.315.536,1.775.721-.21.569-.844.6-1.338.063-1.178.041-2.36.02-3.54-.048-2.71,1.658-4.231,3.7-5.536.523-.164,1.015-.407,1.542-.557a3.752,3.752,0,0,1,4.5,1.7,3.646,3.646,0,0,1-.865,4.589c-.427.406-.99.685-1.209,1.283a7.307,7.307,0,0,0-.145,2.052c-.028,3.144-1.325,4.4-4.516,4.481-1.213.029-2.461-.267-3.636.287-.207.8.438.724.858.778a9.1,9.1,0,0,0,2.614-.082,8.276,8.276,0,0,0-1.663.456c-7.6,2.865-15.147,5.864-22.769,8.672a6.68,6.68,0,0,0-2.421,1.07,36,36,0,0,0,3.922,2.624,13.124,13.124,0,0,0,6.272,2.713,1.176,1.176,0,0,1,.882.3,17.12,17.12,0,0,0,7.166,1.494l-.005,0c2.083.673,4.225-.073,6.289.217,2.108.3,3.97-.46,5.936-.788l.1-.06.116.005c1.686-.588,3.671-.147,5.138-1.489l4.158-1.769a12.521,12.521,0,0,0,5.973-3.634l.27-.259a3.91,3.91,0,0,0,2.463-2.017l.634-.614c1.063-.311,1.437-1.309,2.055-2.063.508-1.131,1.774-1.635,2.285-2.763a10.762,10.762,0,0,0,3.62-5.651q1.083-2.53,2.168-5.06c1.137-1.071.9-2.551,1.153-3.884l0-.006c.1-1.216.709-2.291.916-3.513.3-1.789-.164-3.571.185-5.268C-294.285,398.536-294.827,396.675-295.159,394.75Z"
                        transform="translate(373.193 -361.011)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Blood Pressure
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  id="Group_1738"
                  data-name="Group 1738"
                  xmlns="http://www.w3.org/2000/svg"
                  width="93.641"
                  height="56.145"
                  viewBox="0 0 93.641 56.145"
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
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M-217.971,259.5l-.035-.007-.034.012a.947.947,0,0,1,0-.969.066.066,0,0,0,.069.005Z"
                    transform="translate(311.612 -226.273)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M-302.39,229.412v.969a4.666,4.666,0,0,1-3.22,3.971,4.641,4.641,0,0,1-5.288-1.84.587.587,0,0,0-.557-.3q-5.142.017-10.284,0a.56.56,0,0,0-.557.3q-2.438,3.932-4.9,7.849a2.307,2.307,0,0,1-2.376,1.2,2.309,2.309,0,0,1-1.944-1.623q-2.349-6.3-4.716-12.585a1.147,1.147,0,0,0-.1-.158c-.42,1.085-.826,2.13-1.229,3.175q-2.829,7.339-5.656,14.679c-.865,2.243-1.741,4.481-2.589,6.731a2.4,2.4,0,0,1-2.441,1.5,2.4,2.4,0,0,1-2.066-1.984c-.525-2.916-1.067-5.828-1.6-8.743-.455-2.507-.9-5.017-1.353-7.524-.428-2.35-.869-4.7-1.3-7.047-.408-2.242-.8-4.487-1.209-6.729-.377-2.074-.765-4.146-1.146-6.219-.189-1.03-.371-2.061-.6-3.1q-.341,1.645-.682,3.291-.789,3.847-1.577,7.694-.942,4.582-1.889,9.162c-.52,2.528-1.033,5.058-1.557,7.585a2.4,2.4,0,0,1-2.1,1.9,2.388,2.388,0,0,1-2.444-1.562q-2.479-6.632-4.957-13.265c-.033-.087-.079-.169-.122-.259-.128.053-.14.173-.187.265-.69,1.368-1.373,2.739-2.068,4.1a2.319,2.319,0,0,1-2.236,1.368c-3.121-.012-6.242,0-9.362-.013a.8.8,0,0,0-.783.394,4.613,4.613,0,0,1-4.762,1.872,4.53,4.53,0,0,1-3.622-3.689,4.608,4.608,0,0,1,2.877-5.258,4.641,4.641,0,0,1,5.609,1.8c.083.13.142.274.382.261,1.73-.1,3.462-.028,5.194-.044.921-.008,1.843-.01,2.764,0a.47.47,0,0,0,.5-.3q1.9-3.828,3.816-7.644a2.268,2.268,0,0,1,2.4-1.376,2.177,2.177,0,0,1,1.949,1.49c1.361,3.589,2.7,7.185,4.054,10.778.029.077.06.153.116.3.366-1.761.719-3.453,1.07-5.145q.735-3.544,1.466-7.088c.5-2.422.986-4.847,1.485-7.269q1.059-5.133,2.126-10.264a18.032,18.032,0,0,1,.518-2.347,2.3,2.3,0,0,1,2.447-1.524,2.376,2.376,0,0,1,2.048,1.879c.524,2.878,1.036,5.76,1.559,8.639.476,2.617.961,5.233,1.437,7.85.409,2.246.808,4.494,1.217,6.74.4,2.216.817,4.43,1.219,6.647.359,1.978.707,3.957,1.066,5.935.377,2.074.762,4.146,1.142,6.219.07.383.136.766.217,1.227.253-.657.481-1.251.71-1.845l7.264-18.83c.253-.656.5-1.313.766-1.965a2.3,2.3,0,0,1,2.167-1.459,2.349,2.349,0,0,1,2.17,1.478c.892,2.349,1.771,4.7,2.652,7.057.894,2.389,1.785,4.778,2.693,7.209a8.988,8.988,0,0,0,.783-1.18c.836-1.315,1.657-2.639,2.477-3.964a2.5,2.5,0,0,1,2.293-1.252c3.907.01,7.814,0,11.721.01a.64.64,0,0,0,.614-.325,4.675,4.675,0,0,1,4.855-1.917,4.771,4.771,0,0,1,3.6,3.739A3.13,3.13,0,0,1-302.39,229.412Z"
                    transform="translate(395.962 -197.145)"
                    fill="url(#linear-gradient)"
                  />
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                ECG
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82.576"
                  height="74.368"
                  viewBox="0 0 82.576 74.368"
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
                    id="Group_1744"
                    data-name="Group 1744"
                    transform="translate(-672.966 -4365.741)"
                  >
                    <g
                      id="Group_1742"
                      data-name="Group 1742"
                      transform="translate(881 -478.538)"
                    >
                      <path
                        id="Path_4781"
                        data-name="Path 4781"
                        d="M-330.292,663.286c.27,1.13-.6.938-1.1,1a30.694,30.694,0,0,0-11.769,3.78,32.406,32.406,0,0,0-14.294,16.864c-.3.753-.4,2.022-1.632,1.585-1.373-.487-.534-1.566-.22-2.33,4.552-11.087,12.356-18.5,24.212-21.286,1.208-.283,2.459-.378,3.675-.628C-330.432,662.065-330.127,662.453-330.292,663.286Z"
                        transform="translate(156.2 4184.318)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4782"
                        data-name="Path 4782"
                        d="M-269.43,705.768a4.522,4.522,0,0,1-4.643,4.32,4.585,4.585,0,0,1-4.341-4.652,4.545,4.545,0,0,1,4.607-4.376A4.471,4.471,0,0,1-269.43,705.768Z"
                        transform="translate(138.308 4175.783)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4783"
                        data-name="Path 4783"
                        d="M-310.9,662.312a32.187,32.187,0,0,1,19.721,9.7,36.08,36.08,0,0,1,4.645,5.845c.368.574.968,1.217.08,1.76-.8.485-1.33,0-1.8-.712-4.079-6.2-9.428-10.822-16.554-13.2a25.323,25.323,0,0,0-6.064-1.337c-.873-.067-.862-.53-.78-1.227C-311.58,662.512-311.476,662.141-310.9,662.312Z"
                        transform="translate(145.619 4184.306)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4785"
                        data-name="Path 4785"
                        d="M-317.7,665.243a2.941,2.941,0,0,1-2.941-3.012,3.008,3.008,0,0,1,3.084-2.9,3.054,3.054,0,0,1,2.889,2.975A3,3,0,0,1-317.7,665.243Z"
                        transform="translate(147.585 4184.953)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4786"
                        data-name="Path 4786"
                        d="M-318,747.053a2.988,2.988,0,0,1,2.967,3,3.058,3.058,0,0,1-3.087,2.912A2.983,2.983,0,0,1-320.983,750,2.9,2.9,0,0,1-318,747.053Z"
                        transform="translate(147.661 4165.677)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4787"
                        data-name="Path 4787"
                        d="M-277.129,682.441q-.352,3.061-.7,6.123c-.044.389-.211.662-.616.4-1.763-1.131-3.51-2.289-5.278-3.677,2.715.18,4.846-.676,6.192-3.145Z"
                        transform="translate(139.475 4179.939)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4789"
                        data-name="Path 4789"
                        d="M-277.1,698.042c-.008.46-.172.737-.5.847a.709.709,0,0,1-.878-.178c-.451-.684-.884-1.381-1.278-2.1a.694.694,0,0,1,.321-.941.675.675,0,0,1,.89.026A8.323,8.323,0,0,1-277.1,698.042Z"
                        transform="translate(138.621 4177)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4790"
                        data-name="Path 4790"
                        d="M-262.628,707.253a7.056,7.056,0,0,1-1.106-.012.744.744,0,0,1-.653-.773.721.721,0,0,1,.611-.807,14.7,14.7,0,0,1,2.487-.012.722.722,0,0,1,.6.817.8.8,0,0,1-.7.755,11.738,11.738,0,0,1-1.243.064Z"
                        transform="translate(135.225 4174.785)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4791"
                        data-name="Path 4791"
                        d="M-269.932,717.447c.036.587-.1,1.005-.68,1.083a.745.745,0,0,1-.89-.662c-.147-.675-.309-1.348-.414-2.03a.792.792,0,0,1,.623-.943.744.744,0,0,1,.942.6C-270.17,716.157-270.06,716.84-269.932,717.447Z"
                        transform="translate(136.883 4172.749)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4792"
                        data-name="Path 4792"
                        d="M-272.176,696.648c.1-.673.176-1.22.276-1.763.1-.563.391-.951,1.035-.815.571.122.684.557.605,1.062-.084.545-.211,1.083-.289,1.629-.081.57-.321,1.01-.957.911A.78.78,0,0,1-272.176,696.648Z"
                        transform="translate(136.942 4177.324)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4793"
                        data-name="Path 4793"
                        d="M-263.472,698.742c0,.624-1.894,2.3-2.488,2.191-.718-.127-.986-.654-.549-1.2a7.284,7.284,0,0,1,1.859-1.621C-264.09,697.777-263.583,698.055-263.472,698.742Z"
                        transform="translate(135.738 4176.461)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4794"
                        data-name="Path 4794"
                        d="M-283.656,701.987c.5.188,1.206.413,1.873.718a.678.678,0,0,1,.416.906c-.172.432-.492.713-.968.573-.7-.208-1.392-.477-2.079-.74a.738.738,0,0,1-.46-1.011C-284.715,701.941-284.3,701.89-283.656,701.987Z"
                        transform="translate(139.739 4175.588)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4795"
                        data-name="Path 4795"
                        d="M-281.227,710c-.318.961-1.314.886-2.008,1.252-.436.23-.972.409-1.4-.075a.653.653,0,0,1,0-.993,4.685,4.685,0,0,1,2.791-1.014C-281.436,709.176-281.257,709.563-281.227,710Z"
                        transform="translate(139.725 4174)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4796"
                        data-name="Path 4796"
                        d="M-263.282,713.91c-.149.588-.563.925-1.181.537a8.989,8.989,0,0,1-1.81-1.486c-.5-.536-.234-1.057.4-1.291C-265.286,711.453-263.25,713.184-263.282,713.91Z"
                        transform="translate(135.697 4173.456)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4797"
                        data-name="Path 4797"
                        d="M-276.843,714.74a6.84,6.84,0,0,1-1.44,2.467c-.275.266-.592.165-.882-.044a.668.668,0,0,1-.279-.85,19.346,19.346,0,0,1,1.207-2.165.771.771,0,0,1,.889-.185C-276.947,714.086-276.929,714.4-276.843,714.74Z"
                        transform="translate(138.547 4172.959)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4798"
                        data-name="Path 4798"
                        d="M-292.794,710.557c-1.425-.589-1.441.9-1.774,1.7-4.412,10.568-12.164,17.282-23.212,20.239-.887.238-1.161.012-1.131-.883.048-1.433-.072-2.873.037-4.3.083-1.084-.347-1.455-1.341-1.541a15.3,15.3,0,0,1-2.453-.42c-2.608-.665-5.208-1.33-6.815-3.826-1.5-2.329-3.085-4.6-4.616-6.912-.263-.4-.794-.909-.2-1.313.7-.471.933.293,1.213.726,1.554,2.4,3.1,4.816,4.817,7.108a5.914,5.914,0,0,0,2.837,2.112,36.009,36.009,0,0,0,15.446,1.645,3.225,3.225,0,0,0,2.817-2.7,30.034,30.034,0,0,0,.875-6.578c.15-4.189-.917-4.2,4.106-5.513,1.317-.343,1.473-.783.822-2-1.3-2.444-2.566-4.914-3.976-7.295a6.835,6.835,0,0,1-.821-4.369,17.88,17.88,0,0,0-2.779-11.909c-4.657-6.937-11.6-9.167-19.448-8.351-8.594.893-14.684,5.7-17.587,13.876-2.816,7.929-1.156,15.192,4.479,21.484a14.682,14.682,0,0,1,2.773,4.435c1.127,2.852.719,5.833.8,8.535,0,1.9-.066,3.571.022,5.231.066,1.234-.257,1.362-1.342.874a33.187,33.187,0,0,1-14.55-12.422c-.431-.666-.941-1.118-1.688-.694-.884.5-.413,1.155-.017,1.757,5.714,8.7,13.794,13.8,23.929,15.815,1.111.221,1.731.181,1.872-1.255a3.86,3.86,0,0,1,3.725-3.311,4.126,4.126,0,0,1,4.055,2.773c.246.667-.3,1.733.58,1.955a5.8,5.8,0,0,0,2.291-.394c.36-.075.716-.172,1.074-.26,12.058-2.967,20.506-10.158,25.249-21.643C-292.408,712.186-291.495,711.094-292.794,710.557Zm-46.774-9.769c-.386,0-.811-.149-1.188.145.129.543.688.586.983.913a.66.66,0,0,1,.137.872c-.229.337-.57.265-.854.069-.872-.6-1.763-1.188-2.585-1.855-.649-.528-.52-1.139.11-1.618.735-.558,1.495-1.084,2.256-1.607.338-.232.742-.538,1.075-.052.3.441-.017.762-.363,1.042-.265.215-.705.262-.753.876,3.788,0,7.551,0,11.316,0a.63.63,0,0,0,.632-.441,3.3,3.3,0,0,1,2.1-2.053c.387-.133.4-.459.4-.793q0-5.039,0-10.076l-.287-.108c-.407.551-.809,1.107-1.225,1.653-.253.331-.566.495-.938.174-.309-.266-.238-.566-.029-.861.747-1.054,1.449-2.146,2.257-3.151.556-.692,1.22-.559,1.731.135.712.966,1.4,1.952,2.09,2.932.229.322.379.662-.016.968s-.687.065-.938-.236a7.276,7.276,0,0,0-1.479-1.738v4.22c0,1.617.034,3.235-.012,4.85-.03,1.085-.034,1.927,1.255,2.511a2.756,2.756,0,0,1,1.389,3.2,3.225,3.225,0,0,1-2.848,2.64,2.919,2.919,0,0,1-3.124-1.593,1.668,1.668,0,0,0-1.807-1.057C-333.376,700.812-336.473,700.772-339.568,700.788Z"
                        transform="translate(155.35 4181.285)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_4799"
                        data-name="Path 4799"
                        d="M-315.745,706.36a1.961,1.961,0,0,1-1.933,2.076,1.981,1.981,0,0,1-2.108-2.045,1.976,1.976,0,0,1,2.005-2.011A1.979,1.979,0,0,1-315.745,706.36Z"
                        transform="translate(147.398 4175.053)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                    <path
                      id="Path_4800"
                      data-name="Path 4800"
                      d="M-356.839,712.61c-2.356,1.133-5.546.208-7.476-2.083a7.239,7.239,0,0,1-.425-8.714,6.874,6.874,0,0,1,7.961-2.7c-2.534,1.634-4.094,3.82-4.072,6.8A7.674,7.674,0,0,0-356.839,712.61Z"
                      transform="translate(1038.962 3697.887)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_4801"
                      data-name="Path 4801"
                      d="M-351.949,727.151a6.4,6.4,0,0,0-6.893,3.288l-.386-.288c.188-1.687.353-3.377.571-5.059.34-2.608.354-2.6,2.6-1.124q2.036,1.343,4.08,2.677Z"
                      transform="translate(1038.072 3694.698)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Sleep Cycle
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="79.441"
                  height="65.367"
                  viewBox="0 0 79.441 65.367"
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
                    id="Group_1743"
                    data-name="Group 1743"
                    transform="translate(209.97 -4956.884)"
                  >
                    <path
                      id="Path_4776"
                      data-name="Path 4776"
                      d="M-296.932,859.064q-6.913,0-13.824,0c-2.982,0-4.332-1.338-4.3-4.314.046-5,.125-10.009.2-15.013.005-.392-.18-.978.628-.7,1.861.638,3.306-.029,4.592-1.4,2.712-2.891,5.47-5.74,8.214-8.6.279-.29.441-.626,1.061-.439,5.63,1.7,11.327,3.174,16.883,5.1a7.244,7.244,0,0,1,4.747,6.942q.016,7.153,0,14.306c0,2.693-1.4,4.1-4.132,4.112C-287.557,859.074-292.244,859.064-296.932,859.064Z"
                      transform="translate(140.441 4144.984)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_4777"
                      data-name="Path 4777"
                      d="M-326.642,878.359a8.5,8.5,0,0,0,3.917.749c3.528-.034,7.057.017,10.584-.03.822-.011,1.092.168,1.065,1.036-.053,1.652.007,1.656,1.72,1.656,6.254,0,12.508-.014,18.763.007,2.955.01,4.846,2.661,3.721,5.213a3.464,3.464,0,0,1-3.272,2.231q-2.7.05-5.41.007c-.54-.009-.734.129-.608.672.459,1.976-1.639,3.971-3.542,3.885a3.521,3.521,0,0,1-3.387-3.947c.1-.9-.434-.582-.774-.584q-5.892-.035-11.784-.03c-5.933,0-11.865.022-17.8.009-.817,0-1.315-.142-1.171,1.121.221,1.933-1.8,3.58-3.791,3.408-2.131-.184-3.524-2.131-3.088-4.534-2.043,0-4.057.04-6.07-.011a3.582,3.582,0,0,1-3.547-3.62,3.731,3.731,0,0,1,4-3.821c6.334-.013,12.669-.039,19,.029,1.214.013,1.67-.276,1.482-1.5A13.941,13.941,0,0,1-326.642,878.359Z"
                      transform="translate(152.397 4128.463)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_4778"
                      data-name="Path 4778"
                      d="M-333.66,830.75c2.059.974,3.8,1.825,5.563,2.615a.971.971,0,0,1,.719,1.048c-.04,2.359-.017,4.72-.017,7.19a11.333,11.333,0,0,1-2.583-1.555q-4.916-3.2-9.789-6.464c-2.592-1.732-3.038-4.327-1.162-6.793,1.476-1.942,2.972-3.87,4.51-5.762a4.293,4.293,0,0,1,5.721-.861c.334.217.651.464.966.71,1.287,1.005,2.569,2.015,4.076,3.2l-6.805.612.01.15q4.176.774,8.35,1.552c.517.1.789-.206,1.106-.542,2.09-2.214,4.177-4.432,6.312-6.6a2.9,2.9,0,0,1,4.983.856,2.75,2.75,0,0,1-.617,3.093c-2.7,2.847-5.442,5.662-8.154,8.5-1.011,1.059-2.258.874-3.477.664-2.945-.5-5.879-1.071-8.818-1.6A7.2,7.2,0,0,0-333.66,830.75Z"
                      transform="translate(149.4 4148.417)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_4780"
                      data-name="Path 4780"
                      d="M-255.375,851.364c0-.96.025-1.922-.01-2.881-.02-.553.208-.651.7-.621a3.546,3.546,0,0,1,3.5,3.524,3.546,3.546,0,0,1-3.393,3.621c-.632.063-.847-.12-.814-.763C-255.339,853.287-255.375,852.325-255.375,851.364Z"
                      transform="translate(120.652 4138.579)"
                      fill="url(#linear-gradient)"
                    />
                    <rect
                      id="Rectangle_67"
                      data-name="Rectangle 67"
                      width="33.165"
                      height="3.902"
                      rx="1.951"
                      transform="translate(-207.595 4974.798) rotate(37.482)"
                      opacity="0.99"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_4802"
                      data-name="Path 4802"
                      d="M-350.224,808.536a8.379,8.379,0,0,1,8.241,8.383,8.483,8.483,0,0,1-8.4,8.259,8.466,8.466,0,0,1-8.237-8.426A8.386,8.386,0,0,1-350.224,808.536Z"
                      transform="translate(151.587 4148.348)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Bed Vacancy
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  id="Group_1736"
                  data-name="Group 1736"
                  xmlns="http://www.w3.org/2000/svg"
                  width="63.648"
                  height="57.711"
                  viewBox="0 0 63.648 57.711"
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
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M-349.509-55.681v-4.355a17.042,17.042,0,0,1,1-4.964c2.115-5.761,5.922-9.9,11.779-11.882,5.576-1.884,10.733-.835,15.4,2.725a19.366,19.366,0,0,1,3.2,3.108c.38.462.461.46.846-.009a18.02,18.02,0,0,1,8.606-5.964,15.948,15.948,0,0,1,12.346,1.11,18.5,18.5,0,0,1,8.176,8.079,18,18,0,0,1,2.242,7.885,30.312,30.312,0,0,1-.26,6.626,29.835,29.835,0,0,1-3.51,9.259,43.89,43.89,0,0,1-5.724,7.8A68.533,68.533,0,0,1-307.051-26.22c-2.936,2.059-6.007,3.9-9.121,5.672a2.855,2.855,0,0,1-3.091,0,99.59,99.59,0,0,1-13.507-8.934,54.787,54.787,0,0,1-11.584-12.3,37.888,37.888,0,0,1-2.285-3.919,6.775,6.775,0,0,1-.328-.739c-.24-.659-.144-.808.574-.826.641-.016,1.283,0,1.925,0,2.152,0,4.306-.041,6.457.018a2.044,2.044,0,0,0,2.062-1.275q.877-1.752,1.753-3.5c.127-.253.2-.639.514-.645s.4.383.522.634q2.852,5.7,5.7,11.405A2.293,2.293,0,0,0-326.4-39.39a1.6,1.6,0,0,0,1.96-.445,5.516,5.516,0,0,0,.669-1.117q2.717-5.455,5.446-10.905c.144-.286.215-.73.583-.74.417-.013.48.46.633.758.565,1.108,1.128,2.218,1.67,3.336a2.04,2.04,0,0,0,2.072,1.252c4.533-.038,9.066-.02,13.6-.012a1.6,1.6,0,0,0,1.628-.9,1.61,1.61,0,0,0-1.231-2.343,5.035,5.035,0,0,0-.744-.024c-3.871,0-7.741-.016-11.611.013a1.333,1.333,0,0,1-1.388-.87c-.956-2-1.969-3.975-2.958-5.96a1.794,1.794,0,0,0-1.378-1.128,1.676,1.676,0,0,0-1.864,1.034c-.579,1.124-1.138,2.258-1.7,3.39q-2.049,4.121-4.109,8.237c-.027.055-.052.113-.084.166-.137.222-.207.559-.53.537-.277-.019-.348-.328-.456-.544q-2.823-5.646-5.64-11.294a5.94,5.94,0,0,0-.482-.869,1.67,1.67,0,0,0-2.715-.009,5.281,5.281,0,0,0-.459.811c-.943,1.893-1.9,3.777-2.823,5.68a1.27,1.27,0,0,1-1.305.816c-2.669-.025-5.339-.007-8.009-.012-.833,0-.968-.088-1.195-.875a15.46,15.46,0,0,1-.627-3.853C-349.451-55.4-349.4-55.554-349.509-55.681Z"
                    transform="translate(349.509 77.805)"
                    fill="url(#linear-gradient)"
                  />
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Heart Rate
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  id="Group_1737"
                  data-name="Group 1737"
                  xmlns="http://www.w3.org/2000/svg"
                  width="73.042"
                  height="71.285"
                  viewBox="0 0 73.042 71.285"
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
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M-311.365,52.905c-.015-.4-.03-.813-.03-1.222,0-.343.015-.716.03-1.088a4.46,4.46,0,0,1-1.751.425,4.191,4.191,0,0,1-1.878-.365c.075.834.127,1.669.149,2.5a11.006,11.006,0,0,0,1.648.03A10.179,10.179,0,0,0-311.365,52.905Z"
                    transform="translate(349.179 -42.948)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M-313.357,64.906a7.865,7.865,0,0,0,2.049-.365,3.9,3.9,0,0,0,.991-.507,17.73,17.73,0,0,1-.88-2.668,4.631,4.631,0,0,1-.5.268,4.928,4.928,0,0,1-1.9.417,4.657,4.657,0,0,1-1.93-.335.025.025,0,0,1-.015-.008,14,14,0,0,1-.738,2.8,6.661,6.661,0,0,0,.835.253A8.165,8.165,0,0,0-313.357,64.906Z"
                    transform="translate(349.629 -46.721)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M-305.8,65.744a5.4,5.4,0,0,1-1.192,1.021c.641.552,1.342,1.088,2.079,1.715a30.621,30.621,0,0,1,1.93-2.422,18.1,18.1,0,0,0,3.287-4.576,6.36,6.36,0,0,0,.447-2.609,11.406,11.406,0,0,0-.09-1.357,2.232,2.232,0,0,0-.342-1c-.067-.06-.038-.082-.134-.075a.763.763,0,0,0-.387.223,2.653,2.653,0,0,0-.685,1.043,2.524,2.524,0,0,0,.35,2.609,2.292,2.292,0,0,1-.977-1.192,3.217,3.217,0,0,1-.12-1.617,3.375,3.375,0,0,1,.686-1.543,1.877,1.877,0,0,1,.827-.6,1.3,1.3,0,0,1,1.245.238,3.022,3.022,0,0,1,.857,1.654,8.317,8.317,0,0,1,.2,1.587,7.043,7.043,0,0,1-.529,3.182,9.779,9.779,0,0,1-1.714,2.653,26.211,26.211,0,0,1-2.124,2.139c-1.081,1-2.147,1.975-3.152,3.041a18.46,18.46,0,0,0-1.2,3.905,42.815,42.815,0,0,0-.53,6.059,26.18,26.18,0,0,0,6.626,1.618,30.2,30.2,0,0,0,8.153-.283,31.216,31.216,0,0,0,7.81-2.37,22.78,22.78,0,0,0,5.552-3.54,63.753,63.753,0,0,0-9.145-13.474c-3.831-5.478-6.767-10.106-10.039-10.106-2.042,0-5.231,1.557-5.231,7.162,0,.917.045,1.886.045,2.855a15.3,15.3,0,0,1-.253,3.063c-.068.291-.134.581-.209.857a16.611,16.611,0,0,1-1.147-1.289A5.528,5.528,0,0,1-305.8,65.744Z"
                    transform="translate(346.402 -43.325)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M-314.844,58.871a12.583,12.583,0,0,0,1.677.06,14.287,14.287,0,0,0,1.684-.142c.2-.03.4-.067.6-.112a23.458,23.458,0,0,1-.425-3.093,5.123,5.123,0,0,1-1.811.439,5.477,5.477,0,0,1-1.7-.164,24.556,24.556,0,0,1-.149,2.989Z"
                    transform="translate(349.171 -44.695)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M-313.435,47.26a8.1,8.1,0,0,0,1.737-.253.625.625,0,0,0,.112-.037c.1-1.312.261-2.69.432-3.964a.949.949,0,0,0-.1.082,4.184,4.184,0,0,1-2.1.656,3.752,3.752,0,0,1-2.161-.552,2.334,2.334,0,0,1-.276-.2c.142,1.341.305,2.7.432,4.061a2.023,2.023,0,0,0,.2.06A6.715,6.715,0,0,0-313.435,47.26Z"
                    transform="translate(349.46 -40.284)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M-315.146,40.778a5.708,5.708,0,0,0,1.669.164,7.489,7.489,0,0,0,1.7-.268c.238-.068.469-.149.708-.238v-.008a.36.36,0,0,0,.015-.09c0-2.34-5.254-1.669-4.933,0,.007.038.007.083.015.12A3.833,3.833,0,0,0-315.146,40.778Z"
                    transform="translate(349.532 -38.824)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M-299.629,119.444a42.316,42.316,0,0,0,5.836-2.7,50.39,50.39,0,0,0,8-5.574,48.12,48.12,0,0,0,6.782-6.991,34.527,34.527,0,0,0,3.883-6.118,54.541,54.541,0,0,0-3.674-9.592A17.678,17.678,0,0,1-284,92.712a25.67,25.67,0,0,1-8.086,2.794,24.971,24.971,0,0,1-8.555-.037,19.283,19.283,0,0,1-6.469-2.414c-.044,1.7-.037,3.383-.037,4.9C-307.17,109.875-303.936,116.046-299.629,119.444Z"
                    transform="translate(346.431 -56.215)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M-358.218,77.444a35.508,35.508,0,0,0,3.913,1.677,49.8,49.8,0,0,0,8.213,2.169,40.123,40.123,0,0,0,4.2.559,33.511,33.511,0,0,0,4.226.12,19.773,19.773,0,0,0,4.174-.567,11.265,11.265,0,0,0,2.318-.865,45.083,45.083,0,0,0-.552-6.767,19.536,19.536,0,0,0-1.371-4.315c-1.043-.782-2.079-1.565-3.078-2.429a15.459,15.459,0,0,1-3.9-4.584,6.8,6.8,0,0,1-.767-3.108,7.2,7.2,0,0,1,.172-1.58A4.175,4.175,0,0,1-340,56.189a2.323,2.323,0,0,1,.723-.641,1.59,1.59,0,0,1,1.051-.179,1.744,1.744,0,0,1,1.3,1.326,3.5,3.5,0,0,1-.819,2.922,3.813,3.813,0,0,0,.089-2.668.855.855,0,0,0-.708-.566c-.231-.008-.463.179-.641.492a4.91,4.91,0,0,0-.425,2.444,6.093,6.093,0,0,0,.648,2.482,19.888,19.888,0,0,0,3.354,4.434c.835.9,1.714,1.8,2.542,2.75.663-.775,1.3-1.58,1.908-2.407-.075-.03-.142-.053-.209-.083a4.173,4.173,0,0,1-1.267-.827,3.565,3.565,0,0,1-.895-1.267c-.015-.037-.03-.082-.044-.127a11.324,11.324,0,0,1-1.163,1.23c-.06-.238-.119-.5-.179-.753a14.7,14.7,0,0,1-.253-3.063c0-.969.045-1.938.045-2.855,0-5.6-3.19-7.162-5.232-7.162-3.271,0-6.208,4.628-10.039,10.106a62.471,62.471,0,0,0-9.718,14.7C-359.373,76.826-358.8,77.146-358.218,77.444Z"
                    transform="translate(364.918 -43.325)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M-311.6,71.311l1.021-1.155,1.014-1.193.179-.223a14.986,14.986,0,0,1-1.409-2.429,3.062,3.062,0,0,1-.85.737,4.987,4.987,0,0,1-2.369.693,5.185,5.185,0,0,1-2.415-.44,3.832,3.832,0,0,1-.8-.477,11.214,11.214,0,0,1-1.088,1.93c.089.112.186.224.283.328.291.32.6.619.917.909.38.358.775.715,1.185,1.1.685-.961,1.342-1.937,1.945-2.929A10.443,10.443,0,0,0-311.6,71.311Z"
                    transform="translate(350.344 -48.452)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M-270.6,104.347a26.654,26.654,0,0,1-3.145,6.066,37.874,37.874,0,0,1-6.752,7.43,39.633,39.633,0,0,1-8.421,5.471,30.551,30.551,0,0,1-5.806,2.1c4.963,3.592,11.194,3.779,15.546,4.867,2.251.559,3.95,2.772,6.372,2.772,1.379,0,3.771-9.241,3.771-16.768A47.76,47.76,0,0,0-270.6,104.347Z"
                    transform="translate(342.079 -61.777)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M-335.332,95.676A16.829,16.829,0,0,1-339.64,96.7a30.959,30.959,0,0,1-8.779-.38,36.367,36.367,0,0,1-8.384-2.557,25.05,25.05,0,0,1-3.846-2.117c-.529-.365-1.043-.76-1.535-1.177a53.446,53.446,0,0,0-3.637,10.65,44.02,44.02,0,0,0,2.675,3.525,64.616,64.616,0,0,0,7.036,7.1,70.759,70.759,0,0,0,7.967,6.059,46.553,46.553,0,0,0,5.992,3.324c4.979-3.145,8.928-9.293,8.928-22.485,0-1.274.008-2.675-.022-4.1A9.733,9.733,0,0,1-335.332,95.676Z"
                    transform="translate(366.983 -56.914)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M-349.351,125.152a50.453,50.453,0,0,1-8.347-5.932,47.5,47.5,0,0,1-6.968-7.5,36.582,36.582,0,0,1-2.027-3.078,46.824,46.824,0,0,0-.917,9.159c0,7.527,2.392,16.768,3.771,16.768,2.415,0,4.121-2.221,6.372-2.772,3.942-.991,9.434-1.23,14.13-3.95A34.247,34.247,0,0,1-349.351,125.152Z"
                    transform="translate(367.61 -63.279)"
                    fill="url(#linear-gradient)"
                  />
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Respiration Rate
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  id="Group_1739"
                  data-name="Group 1739"
                  xmlns="http://www.w3.org/2000/svg"
                  width="67.834"
                  height="73.792"
                  viewBox="0 0 67.834 73.792"
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
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M-302.982,549.884q3.024-.009,6.047,0a9.378,9.378,0,0,0,8-4.214,10.582,10.582,0,0,0,1.76-6.415c.013-8.757,0-17.515.01-26.272a27.977,27.977,0,0,0-.17-3.662,9.333,9.333,0,0,0-3.066-5.864,8.164,8.164,0,0,0-5.2-2.317h-50.972a.263.263,0,0,1-.129.064,8.186,8.186,0,0,0-6.015,3.243,10.339,10.339,0,0,0-2.282,7.1q-.008,13.388,0,26.777c0,.935.049,1.866.121,2.8a9.705,9.705,0,0,0,9.655,8.763c1.726-.054,3.455-.009,5.183-.008.408,0,.816-.007,1.224.009a.471.471,0,0,1,.507.484c.306,3-1.207,4.512-3.757,4.534-1.2.011-2.4,0-3.6,0a7.62,7.62,0,0,0-7.6,7.608,7.744,7.744,0,0,0,7.69,7.657c2.424.03,4.847,0,7.271.008.406,0,.842-.048,1.132.321a3.794,3.794,0,0,0,3.583,1.4c.608-.057.878.2,1.053.793a2.874,2.874,0,0,0,3.043,2.226q1.079,0,2.16,0a2.123,2.123,0,0,0,2.412-2.247c.081-2.518.068-5.039,0-7.557a2.437,2.437,0,0,0-2.391-2.417,12.447,12.447,0,0,0-2.157.008,3.285,3.285,0,0,0-3.017,2.2c-.31.9-.242.968-1.378.931a3.682,3.682,0,0,0-3.15,1.261,1.019,1.019,0,0,1-.842.325c-2.663,0-5.328.067-7.99-.02a4.874,4.874,0,0,1-4.677-4.758,4.887,4.887,0,0,1,4.46-5.019c1.607-.178,3.211-.1,4.816-.115a4.8,4.8,0,0,0,2.022-.435A6.186,6.186,0,0,0-335.553,551c.007-1.118.009-1.12,1.119-1.12h26.706c.168,0,.336.007.5,0,.428-.008.6.215.6.623,0,.36,0,.72.009,1.08a5.983,5.983,0,0,0,6.132,5.936c.953-.076,1.919-.027,2.878-.007a9.712,9.712,0,0,1,2.423.281,4.831,4.831,0,0,1,3.5,5.35,4.875,4.875,0,0,1-4.766,4.274c-2.591.053-5.183.012-7.775.015a1.3,1.3,0,0,1-1.074-.471,3.223,3.223,0,0,0-2.555-1.11c-.288-.005-.577-.016-.863,0a.756.756,0,0,1-.872-.638,3.425,3.425,0,0,0-3.3-2.523c-.431-.02-.864-.009-1.3-.008-2.164.005-3.082.905-3.094,3.056-.012,2.111,0,4.223,0,6.334a4.214,4.214,0,0,0,.188,1.348,1.954,1.954,0,0,0,2.028,1.5c.767.014,1.536,0,2.3,0a2.9,2.9,0,0,0,3.163-2.354.775.775,0,0,1,.92-.666c.215.016.432-.008.647,0a3.133,3.133,0,0,0,2.847-1.227,1.425,1.425,0,0,1,1.275-.507q3.563.014,7.126,0a8.02,8.02,0,0,0,4.6-1.419,7.665,7.665,0,0,0,2.942-8.458,7.568,7.568,0,0,0-7.136-5.392c-1.319-.006-2.64.026-3.959-.009a3.389,3.389,0,0,1-3.547-3.6c0-.168,0-.336,0-.5C-303.861,549.943-303.815,549.886-302.982,549.884Zm4.061-11.191a3.641,3.641,0,0,1-3.6-3.691,3.624,3.624,0,0,1,3.656-3.627,3.631,3.631,0,0,1,3.6,3.683A3.646,3.646,0,0,1-298.921,538.693Zm4.273-13.286c0,.652-.481,1.074-1.25,1.083-.886.009-1.771,0-2.657,0-.91,0-1.82.009-2.729,0a1.1,1.1,0,0,1-1.229-1.094,1.1,1.1,0,0,1,1.241-1.083q2.692-.012,5.385,0A1.1,1.1,0,0,1-294.648,525.406Zm-4.246-13.3a3.664,3.664,0,0,1,3.633,3.669,3.621,3.621,0,0,1-3.63,3.652,3.614,3.614,0,0,1-3.631-3.649A3.66,3.66,0,0,1-298.894,512.105Zm-9.533,24.6c-.018,2.612-2.249,4.554-5.1,4.559q-9.319.013-18.638,0c-3.046,0-6.093.013-9.139-.005a4.805,4.805,0,0,1-4.9-3.809,5.944,5.944,0,0,1-.1-1.355q.007-10.794.029-21.586a4.724,4.724,0,0,1,4.667-4.909c3.02-.087,6.043-.009,9.065,0q2.626,0,5.253,0v.037q6.98,0,13.96,0a4.742,4.742,0,0,1,4.963,4.835Q-308.348,525.584-308.428,536.7Z"
                    transform="translate(355.002 -501.14)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M-310.414,514.786q-6.875-.007-13.749,0v-.045c-4.582,0-9.164.016-13.747-.006-2.05-.01-3.144,1.011-3.146,3.048q-.006,10.8-.013,21.593a2.453,2.453,0,0,0,.2,1.114,2.94,2.94,0,0,0,2.951,1.609q10.329-.013,20.659,0c2.255,0,4.511.013,6.766,0a2.713,2.713,0,0,0,2.97-2.7q.023-10.868.022-21.737A2.642,2.642,0,0,0-310.414,514.786Zm-1.858,13.961c-1.584,0-3.168-.027-4.75.013a1.307,1.307,0,0,1-1.43-1.016c-.372-1.123-.766-2.239-1.145-3.359-.046-.136-.048-.287-.254-.366q-1.1,4.139-2.206,8.266c-.275,1.028-.581,2.049-.82,3.085a1.088,1.088,0,0,1-1.008.957c-.622.041-.979-.381-1.193-.943q-1.794-4.718-3.6-9.431c-.211-.552-.425-1.1-.658-1.7a5,5,0,0,0-.85,1.227c-.564.884-1.12,1.774-1.648,2.679a1.339,1.339,0,0,1-1.327.768c-1.1-.043-2.207-.005-3.311-.015a1.018,1.018,0,0,1-1.135-.934,1,1,0,0,1,.993-1.162,17.726,17.726,0,0,1,2.443-.024.991.991,0,0,0,1.016-.58c.953-1.6,1.942-3.173,2.9-4.769a1.231,1.231,0,0,1,1.253-.76c.569.062.772.467.952.935q1.841,4.81,3.7,9.612c.042.108.1.209.217.431.469-1.735.914-3.357,1.346-4.983q.875-3.3,1.733-6.6c.152-.588.443-1,1.1-1.032.626-.026.918.336,1.108.9.688,2.042,1.423,4.068,2.114,6.109.133.395.3.556.74.544,1.247-.035,2.5-.016,3.743-.011.84,0,1.294.39,1.291,1.091S-311.41,528.746-312.271,528.747Z"
                    transform="translate(351.94 -504.127)"
                    fill="url(#linear-gradient)"
                  />
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Heart Rate Variability
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why__choose__us__container">
        <img
          src={whyChooseUsBg}
          alt="why__choose__us__bg"
          className="why__choose__us__bg"
        />
        <div className="why__choose__us__container__wrapper">
          <div className="why__choose__us__container__content">
            <div className="why__choose__us__container__content__heading__container">
              <div
                className="why__choose__us__container__content__heading"
                style={{ color: "#4AB493" }}
              >
                Why choose us
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
            <div className="why__choose__us__container__content__wrapper">
              <div className="why__choose__us__container__content__card">
                <img
                  src={why__choose__us__container__content__card__svg1}
                  alt="why__choose__us__container__content__card__svg"
                  className="why__choose__us__container__content__card__svg"
                />
                <div className="why__choose__us__container__content__card__heading">
                  Benefits to Hospitals
                </div>
                <div className="why__choose__us__container__content__card__para">
                  Timesaving, cost-saving, and patient-saving. Our solutions are
                  the umbrella under which a hospital can operate efficiently
                  and allow your patients to experience the highest level of
                  patient care through integrated technologies there is to offer
                  in Pakistan. our services stretch beyond a sales invoice and a
                  huge part of our customized solutions involve redesigning them
                  to your needs so we are always in touch.
                </div>
              </div>

              <div className="why__choose__us__container__content__card">
                <img
                  src={why__choose__us__container__content__card__svg2}
                  alt="why__choose__us__container__content__card__svg"
                  className="why__choose__us__container__content__card__svg"
                />

                <div className="why__choose__us__container__content__card__heading">
                  Benefits to Patients
                </div>
                <div className="why__choose__us__container__content__card__para">
                  There is comfort in knowing your or your loved one’s health is
                  being monitored continuously to mitigate risk and reduce
                  collateral damage. SEEVITALS recognizes your priorities and
                  puts you first. Your data is safe with us and can be accessed
                  by you wherever and whenever.
                </div>
              </div>
              <div className="why__choose__us__container__content__card">
                <img
                  src={why__choose__us__container__content__card__svg3}
                  alt="why__choose__us__container__content__card__svg"
                  className="why__choose__us__container__content__card__svg"
                />
                <div className="why__choose__us__container__content__card__heading">
                  Benefits to healthcare staff
                </div>
                <div className="why__choose__us__container__content__card__para">
                  Nobody takes care of the care-providers like we do. We
                  recognize your struggles and how simple operational changes
                  can ease the burden on our dedicated workers. After all, these
                  are the people that need most support so they can be optimal
                  in their frontline duties.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__container">
        <img
          src={FooterBg}
          alt="footer__container__bg"
          className="footer__container__bg"
        />
        <div className="footer__container__overlay">
          <div className="footer__container__overlay__specialist">
            <div className="why__choose__us__container__content__heading__container">
              <div className="why__choose__us__container__content__heading">
                Specialist Industry Experts
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
            <div className="footer__container__overlay__specialist__wrapper">
              <div className="footer__container__overlay__specialist__card">
                <div className="footer__container__overlay__specialist__card__img__wrapper">
                  <img
                    src={specilist1}
                    alt="footer__container__overlay__specialist__card__img"
                    className="footer__container__overlay__specialist__card__img"
                  />
                </div>
                <div className="footer__container__overlay__specialist__card__heading">
                  Dr. Aimon B. Malik
                </div>
                <div className="footer__container__overlay__specialist__card__para">
                  COO | Operations Head | Surgeon
                </div>
                <div className="footer__container__overlay__specialist__card__socials__container">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.636"
                      height="25.46"
                      viewBox="0 0 13.636 25.46"
                    >
                      <path
                        id="Icon_awesome-facebook-f"
                        data-name="Icon awesome-facebook-f"
                        d="M14.352,14.322l.707-4.608H10.638V6.724a2.3,2.3,0,0,1,2.6-2.489h2.01V.311A24.511,24.511,0,0,0,11.678,0C8.037,0,5.657,2.207,5.657,6.2V9.714H1.609v4.608H5.657V25.46h4.981V14.322Z"
                        transform="translate(-1.609)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.16"
                      height="21.16"
                      viewBox="0 0 21.16 21.16"
                    >
                      <path
                        id="Icon_awesome-linkedin-in"
                        data-name="Icon awesome-linkedin-in"
                        d="M4.736,21.16H.35V7.033H4.736ZM2.541,5.106A2.553,2.553,0,1,1,5.081,2.541,2.562,2.562,0,0,1,2.541,5.106ZM21.155,21.16H16.778V14.283c0-1.639-.033-3.741-2.281-3.741-2.281,0-2.63,1.781-2.63,3.623v7H7.484V7.033h4.207V8.96h.061A4.61,4.61,0,0,1,15.9,6.679c4.44,0,5.256,2.924,5.256,6.721v7.76Z"
                        transform="translate(0 0)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.183"
                      height="24.183"
                      viewBox="0 0 24.183 24.183"
                    >
                      <path
                        id="Icon_simple-instagram"
                        data-name="Icon simple-instagram"
                        d="M12.091,0C8.807,0,8.4.015,7.107.073A8.916,8.916,0,0,0,4.172.635,5.921,5.921,0,0,0,2.029,2.029,5.9,5.9,0,0,0,.635,4.172,8.89,8.89,0,0,0,.073,7.107C.012,8.4,0,8.807,0,12.091s.015,3.695.073,4.985a8.922,8.922,0,0,0,.562,2.935,5.93,5.93,0,0,0,1.395,2.142,5.913,5.913,0,0,0,2.142,1.395,8.927,8.927,0,0,0,2.935.562c1.29.06,1.7.073,4.985.073s3.695-.015,4.985-.073a8.948,8.948,0,0,0,2.935-.562,6.179,6.179,0,0,0,3.537-3.537,8.921,8.921,0,0,0,.562-2.935c.06-1.29.073-1.7.073-4.985S24.168,8.4,24.11,7.107a8.942,8.942,0,0,0-.562-2.935,5.934,5.934,0,0,0-1.395-2.142A5.891,5.891,0,0,0,20.011.635,8.9,8.9,0,0,0,17.076.073C15.786.012,15.376,0,12.091,0Zm0,2.176c3.227,0,3.612.016,4.887.072a6.662,6.662,0,0,1,2.244.418,3.979,3.979,0,0,1,2.3,2.294A6.676,6.676,0,0,1,21.934,7.2C21.991,8.48,22,8.863,22,12.091s-.015,3.612-.075,4.887a6.8,6.8,0,0,1-.424,2.244,3.839,3.839,0,0,1-.906,1.393,3.772,3.772,0,0,1-1.391.9,6.725,6.725,0,0,1-2.252.416c-1.284.057-1.662.071-4.9.071s-3.613-.015-4.9-.075a6.856,6.856,0,0,1-2.253-.424A3.744,3.744,0,0,1,3.523,20.6a3.671,3.671,0,0,1-.907-1.391,6.862,6.862,0,0,1-.423-2.252c-.045-1.27-.061-1.662-.061-4.881s.016-3.613.061-4.9a6.854,6.854,0,0,1,.423-2.251,3.584,3.584,0,0,1,.907-1.392,3.576,3.576,0,0,1,1.389-.9A6.692,6.692,0,0,1,7.15,2.207c1.285-.045,1.663-.06,4.9-.06l.045.03Zm0,3.706A6.209,6.209,0,1,0,18.3,12.091,6.208,6.208,0,0,0,12.091,5.882Zm0,10.239a4.03,4.03,0,1,1,4.03-4.03A4.029,4.029,0,0,1,12.091,16.122ZM20,5.638a1.451,1.451,0,1,1-1.451-1.45A1.452,1.452,0,0,1,20,5.638Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="footer__container__overlay__specialist__card">
                <div className="footer__container__overlay__specialist__card__img__wrapper">
                  <img
                    src={specilist2}
                    alt="footer__container__overlay__specialist__card__img"
                    className="footer__container__overlay__specialist__card__img"
                  />
                </div>
                <div className="footer__container__overlay__specialist__card__heading">
                  Dr. Nimra Qureshi
                </div>
                <div className="footer__container__overlay__specialist__card__para">
                  CEO | Entrepreneur | Dentist | Community Engager | Health-tech
                  Enthusiast
                </div>
                <div className="footer__container__overlay__specialist__card__socials__container">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.636"
                      height="25.46"
                      viewBox="0 0 13.636 25.46"
                    >
                      <path
                        id="Icon_awesome-facebook-f"
                        data-name="Icon awesome-facebook-f"
                        d="M14.352,14.322l.707-4.608H10.638V6.724a2.3,2.3,0,0,1,2.6-2.489h2.01V.311A24.511,24.511,0,0,0,11.678,0C8.037,0,5.657,2.207,5.657,6.2V9.714H1.609v4.608H5.657V25.46h4.981V14.322Z"
                        transform="translate(-1.609)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.16"
                      height="21.16"
                      viewBox="0 0 21.16 21.16"
                    >
                      <path
                        id="Icon_awesome-linkedin-in"
                        data-name="Icon awesome-linkedin-in"
                        d="M4.736,21.16H.35V7.033H4.736ZM2.541,5.106A2.553,2.553,0,1,1,5.081,2.541,2.562,2.562,0,0,1,2.541,5.106ZM21.155,21.16H16.778V14.283c0-1.639-.033-3.741-2.281-3.741-2.281,0-2.63,1.781-2.63,3.623v7H7.484V7.033h4.207V8.96h.061A4.61,4.61,0,0,1,15.9,6.679c4.44,0,5.256,2.924,5.256,6.721v7.76Z"
                        transform="translate(0 0)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.183"
                      height="24.183"
                      viewBox="0 0 24.183 24.183"
                    >
                      <path
                        id="Icon_simple-instagram"
                        data-name="Icon simple-instagram"
                        d="M12.091,0C8.807,0,8.4.015,7.107.073A8.916,8.916,0,0,0,4.172.635,5.921,5.921,0,0,0,2.029,2.029,5.9,5.9,0,0,0,.635,4.172,8.89,8.89,0,0,0,.073,7.107C.012,8.4,0,8.807,0,12.091s.015,3.695.073,4.985a8.922,8.922,0,0,0,.562,2.935,5.93,5.93,0,0,0,1.395,2.142,5.913,5.913,0,0,0,2.142,1.395,8.927,8.927,0,0,0,2.935.562c1.29.06,1.7.073,4.985.073s3.695-.015,4.985-.073a8.948,8.948,0,0,0,2.935-.562,6.179,6.179,0,0,0,3.537-3.537,8.921,8.921,0,0,0,.562-2.935c.06-1.29.073-1.7.073-4.985S24.168,8.4,24.11,7.107a8.942,8.942,0,0,0-.562-2.935,5.934,5.934,0,0,0-1.395-2.142A5.891,5.891,0,0,0,20.011.635,8.9,8.9,0,0,0,17.076.073C15.786.012,15.376,0,12.091,0Zm0,2.176c3.227,0,3.612.016,4.887.072a6.662,6.662,0,0,1,2.244.418,3.979,3.979,0,0,1,2.3,2.294A6.676,6.676,0,0,1,21.934,7.2C21.991,8.48,22,8.863,22,12.091s-.015,3.612-.075,4.887a6.8,6.8,0,0,1-.424,2.244,3.839,3.839,0,0,1-.906,1.393,3.772,3.772,0,0,1-1.391.9,6.725,6.725,0,0,1-2.252.416c-1.284.057-1.662.071-4.9.071s-3.613-.015-4.9-.075a6.856,6.856,0,0,1-2.253-.424A3.744,3.744,0,0,1,3.523,20.6a3.671,3.671,0,0,1-.907-1.391,6.862,6.862,0,0,1-.423-2.252c-.045-1.27-.061-1.662-.061-4.881s.016-3.613.061-4.9a6.854,6.854,0,0,1,.423-2.251,3.584,3.584,0,0,1,.907-1.392,3.576,3.576,0,0,1,1.389-.9A6.692,6.692,0,0,1,7.15,2.207c1.285-.045,1.663-.06,4.9-.06l.045.03Zm0,3.706A6.209,6.209,0,1,0,18.3,12.091,6.208,6.208,0,0,0,12.091,5.882Zm0,10.239a4.03,4.03,0,1,1,4.03-4.03A4.029,4.029,0,0,1,12.091,16.122ZM20,5.638a1.451,1.451,0,1,1-1.451-1.45A1.452,1.452,0,0,1,20,5.638Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="footer__container__overlay__specialist__card">
                <div className="footer__container__overlay__specialist__card__img__wrapper">
                  <img
                    src={specilist3}
                    alt="footer__container__overlay__specialist__card__img"
                    className="footer__container__overlay__specialist__card__img"
                  />
                </div>
                <div className="footer__container__overlay__specialist__card__heading">
                  Muhammad Dayyan
                </div>
                <div className="footer__container__overlay__specialist__card__para">
                  CTO | Co-Founder | Technology Consultant | Product Manager
                </div>
                <div className="footer__container__overlay__specialist__card__socials__container">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.636"
                      height="25.46"
                      viewBox="0 0 13.636 25.46"
                    >
                      <path
                        id="Icon_awesome-facebook-f"
                        data-name="Icon awesome-facebook-f"
                        d="M14.352,14.322l.707-4.608H10.638V6.724a2.3,2.3,0,0,1,2.6-2.489h2.01V.311A24.511,24.511,0,0,0,11.678,0C8.037,0,5.657,2.207,5.657,6.2V9.714H1.609v4.608H5.657V25.46h4.981V14.322Z"
                        transform="translate(-1.609)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.16"
                      height="21.16"
                      viewBox="0 0 21.16 21.16"
                    >
                      <path
                        id="Icon_awesome-linkedin-in"
                        data-name="Icon awesome-linkedin-in"
                        d="M4.736,21.16H.35V7.033H4.736ZM2.541,5.106A2.553,2.553,0,1,1,5.081,2.541,2.562,2.562,0,0,1,2.541,5.106ZM21.155,21.16H16.778V14.283c0-1.639-.033-3.741-2.281-3.741-2.281,0-2.63,1.781-2.63,3.623v7H7.484V7.033h4.207V8.96h.061A4.61,4.61,0,0,1,15.9,6.679c4.44,0,5.256,2.924,5.256,6.721v7.76Z"
                        transform="translate(0 0)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.183"
                      height="24.183"
                      viewBox="0 0 24.183 24.183"
                    >
                      <path
                        id="Icon_simple-instagram"
                        data-name="Icon simple-instagram"
                        d="M12.091,0C8.807,0,8.4.015,7.107.073A8.916,8.916,0,0,0,4.172.635,5.921,5.921,0,0,0,2.029,2.029,5.9,5.9,0,0,0,.635,4.172,8.89,8.89,0,0,0,.073,7.107C.012,8.4,0,8.807,0,12.091s.015,3.695.073,4.985a8.922,8.922,0,0,0,.562,2.935,5.93,5.93,0,0,0,1.395,2.142,5.913,5.913,0,0,0,2.142,1.395,8.927,8.927,0,0,0,2.935.562c1.29.06,1.7.073,4.985.073s3.695-.015,4.985-.073a8.948,8.948,0,0,0,2.935-.562,6.179,6.179,0,0,0,3.537-3.537,8.921,8.921,0,0,0,.562-2.935c.06-1.29.073-1.7.073-4.985S24.168,8.4,24.11,7.107a8.942,8.942,0,0,0-.562-2.935,5.934,5.934,0,0,0-1.395-2.142A5.891,5.891,0,0,0,20.011.635,8.9,8.9,0,0,0,17.076.073C15.786.012,15.376,0,12.091,0Zm0,2.176c3.227,0,3.612.016,4.887.072a6.662,6.662,0,0,1,2.244.418,3.979,3.979,0,0,1,2.3,2.294A6.676,6.676,0,0,1,21.934,7.2C21.991,8.48,22,8.863,22,12.091s-.015,3.612-.075,4.887a6.8,6.8,0,0,1-.424,2.244,3.839,3.839,0,0,1-.906,1.393,3.772,3.772,0,0,1-1.391.9,6.725,6.725,0,0,1-2.252.416c-1.284.057-1.662.071-4.9.071s-3.613-.015-4.9-.075a6.856,6.856,0,0,1-2.253-.424A3.744,3.744,0,0,1,3.523,20.6a3.671,3.671,0,0,1-.907-1.391,6.862,6.862,0,0,1-.423-2.252c-.045-1.27-.061-1.662-.061-4.881s.016-3.613.061-4.9a6.854,6.854,0,0,1,.423-2.251,3.584,3.584,0,0,1,.907-1.392,3.576,3.576,0,0,1,1.389-.9A6.692,6.692,0,0,1,7.15,2.207c1.285-.045,1.663-.06,4.9-.06l.045.03Zm0,3.706A6.209,6.209,0,1,0,18.3,12.091,6.208,6.208,0,0,0,12.091,5.882Zm0,10.239a4.03,4.03,0,1,1,4.03-4.03A4.029,4.029,0,0,1,12.091,16.122ZM20,5.638a1.451,1.451,0,1,1-1.451-1.45A1.452,1.452,0,0,1,20,5.638Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="addons__container">
        <img
          src={AddonSectionBg}
          alt="addons__container__img"
          className="addons__container__img"
        />
        <div className="addons__container__content">
          <div className="addons__container__content__heading">
            Value Addons
          </div>
          <div className="addons__container__content__cards">
            <div className="addons__container__content__card">
              <img
                src={TrendSvg}
                alt="TrendSvg"
                className="addons__container__content__card__svg"
              />
              <img
                src={TrendSvg}
                alt="TrendSvg"
                className="addons__container__content__card__svg__hover"
              />
              <div className="addons__container__content__card__text">
                Health Trends
              </div>
            </div>
            <div className="addons__container__content__card">
              <img
                src={apiSvg}
                alt="apiSvg"
                className="addons__container__content__card__svg"
              />
              <img
                src={apiSvg}
                alt="apiSvg"
                className="addons__container__content__card__svg__hover"
              />
              <div className="addons__container__content__card__text">
                Integration with HIMS with API & SDK
              </div>
            </div>
            <div className="addons__container__content__card">
              <img
                src={patientSaftySvg}
                alt="patientSaftySvg"
                className="addons__container__content__card__svg"
              />
              <img
                src={patientSaftySvg}
                alt="patientSaftySvg"
                className="addons__container__content__card__svg__hover"
              />
              <div className="addons__container__content__card__text">
                Improved Patient Safety with DEWS
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
       */}
    </>
  );
}
