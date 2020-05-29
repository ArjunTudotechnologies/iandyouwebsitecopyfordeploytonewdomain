import React from "react";
import Lightbox from "react-lightbox-component";

const images = [
  {
    src: "https://images.unsplash.com/photo-1590598857192-3f6db8279868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "image title",
    description: "image description",
  },{
    src: "https://images.unsplash.com/photo-1590598857192-3f6db8279868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "image title",
    description: "image description",
  },
];

export default function Gallery() {
  return (
    <div>
      <Lightbox images={images}   showImageModifiers={false} />
    </div>
  );
}
