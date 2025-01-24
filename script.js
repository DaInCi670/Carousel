"use strict";

function Carousel() {
  const arrCarousel = [
    {
      name: "Susan Smith",
      job: "Web Developer",
      image: `url("/imgs/person1.jpg")`,
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
            enim, laudantium quam cum, reprehenderit veritatis, possimus vel
            excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
            nobis officiis aliquid! lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
            enim, laudantium quam cum, reprehenderit veritatis, possimus vel
            excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
            nobis officiis aliquid! lo`,
    },

    {
      name: "Jesse Norway",
      job: "Engineer",
      image: "person2",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          enim, laudantium quam cum, reprehenderit veritatis, possimus vel
          excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
          nobis officiis aliquid! lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          enim, laudantium quam cum, reprehenderit veritatis, possimus vel
          excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
          nobis officiis aliquid! lo`,
    },
  ];

  const getCarouselArr = () => arrCarousel;

  return { getCarouselArr };
}

function displayCarousel() {
  const image = document.querySelector(".image-file");
  const name = document.querySelector(".name");
  const job = document.querySelector(".job");
  const description = document.querySelector(".description");
  const newCarousel = Carousel();

//   image.style.backgroundImage = newCarousel.getCarouselArr()[0].image;

//   console.log(newCarousel.getCarouselArr());
}

displayCarousel();
