"use strict";

function Carousel() {
  const arrCarousel = [
    {
      name: "Susan Smith",
      job: "Web Developer",
      image: "/imgs/person1.jpg",
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
      image: "/imgs/person2.jpg",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          enim, laudantium quam cum, reprehenderit veritatis, possimus vel
          excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
          nobis officiis aliquid! lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          enim, laudantium quam cum, reprehenderit veritatis, possimus vel
          excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
          nobis officiis aliquid! lo`,
    },
    {
      name: "Chris Anderson",
      job: "Student",
      image: "/imgs/person3.jpg",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          enim, laudantium quam cum, reprehenderit veritatis, possimus vel
          excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
          nobis officiis aliquid! lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          enim, laudantium quam cum, reprehenderit veritatis, possimus vel
          excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
          nobis officiis aliquid! lo`,
    },
    {
      name: "Andrew Huberman",
      job: "Soldier",
      image: "/imgs/person4.jpg",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          enim, laudantium quam cum, reprehenderit veritatis, possimus vel
          excepturi dolores debitis a culpa distinctio eligendi ipsum quisquam
         `,
    },
  ];

  const getCarouselArr = () => arrCarousel;
  let totalNum = getCarouselArr().length - 1;

  const moveLeft = () => {
    if (totalNum <= 0) {
      return (totalNum = getCarouselArr().length - 1);
    } else return (totalNum -= 1);
  };
  const moveRight = () => {
    if (totalNum >= getCarouselArr().length - 1) {
      return (totalNum = 0);
    } else return (totalNum += 1);
  };

  const randomReview = () => {
    return (totalNum = Math.floor(Math.random() * getCarouselArr().length));
  };

  const getTotalNum = () => {
    return totalNum;
  };

  return { getCarouselArr, moveLeft, moveRight, randomReview, getTotalNum };
}

function displayCarousel() {
  const image = document.querySelector(".image-file");
  const name = document.querySelector(".name");
  const job = document.querySelector(".job");
  const description = document.querySelector(".description");
  const newCarousel = Carousel();
  const moveLeft = document.querySelector(".left-nav");
  const moveRight = document.querySelector(".right-nav");
  const randomBtn = document.querySelector(".random");

  const renderCarousel = (x) => {
    image.src = "";
    name.textContent = "";
    job.textContent = "";
    description.textContent = "";
    let value = x;
    image.src = newCarousel.getCarouselArr()[value].image;
    name.textContent = newCarousel.getCarouselArr()[value].name;
    job.textContent = newCarousel.getCarouselArr()[value].job;
    description.textContent = newCarousel.getCarouselArr()[value].description;
  };
  renderCarousel(newCarousel.getTotalNum());

  moveLeft.addEventListener("click", () => {
    newCarousel.moveLeft();
    console.log(newCarousel.getTotalNum());
    renderCarousel(newCarousel.getTotalNum());
  });

  moveRight.addEventListener("click", () => {
    newCarousel.moveRight();
    renderCarousel(newCarousel.getTotalNum());
  });

  randomBtn.addEventListener("click", () => {
    newCarousel.randomReview();
    renderCarousel(newCarousel.getTotalNum());

    renderCarousel(newCarousel.getTotalNum());
    renderCarousel(newCarousel.getTotalNum());
  });


}

displayCarousel();
