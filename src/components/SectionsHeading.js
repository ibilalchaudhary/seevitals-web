import React from "react";

export default function SectionsHeading({ heading }) {
  return (
    <div className="containers__heading__wrapper">
      <div className="containers__heading">{heading}</div>
      <div className="containers__heading__line"></div>
    </div>
  );
}
