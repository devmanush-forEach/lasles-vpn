import "./Slider.css";
import SliderData from "./SliderData";
import Star from "../../Assets/Star.svg";
import { useEffect, useState } from "react";
import { Arrow } from "../../Assets/Arrow";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(440);

  const moveBack = () => {
    const items = SliderData.length;
    if (currentIndex - 1 <= -items) return;
    console.log(items);
    console.log(currentIndex);
    setCurrentIndex(currentIndex - 1);
  };

  const moveForward = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const card = document.querySelector(".slider-card");
    if (card) {
      setCardWidth(card.offsetWidth + 10);
    }
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider-cad-container">
        <div
          className="image-container"
          style={{ transform: `translateX(${currentIndex * cardWidth}px)` }}
        >
          {SliderData?.map((user, index) => (
            <div
              className="slider-card"
              key={user.name}
              style={{
                borderColor: -currentIndex === index ? "#F53838" : "#dddddd",
              }}
            >
              <div className="slider-user-info">
                <img src={user?.image} alt="" className="userImage" />
                <div className="slider-user-detail">
                  <div className="slider-userName">{user?.name}</div>
                  <div className="slider-userPlace">{user?.place}</div>
                </div>
                <div className="slider-star">
                  {user?.star}{" "}
                  <img src={Star} alt="star" style={{ marginLeft: "10px" }} />
                </div>
              </div>
              <div className="slider-userDescription">{user?.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-bottom">
        <div className="slider-dots-div">
          {SliderData?.map((ele, index) => (
            <div
              className="slider-dots"
              style={{
                background: index === -currentIndex ? "#F53838" : "#dde0e4",
              }}
            ></div>
          ))}
        </div>
        <div className="slider-btn-box">
          <button
            onClick={() => {
              moveForward();
            }}
            style={{
              background: currentIndex === 0 ? "#FFFFFF" : "#F53838",
              borderColor: currentIndex !== 0 ? "#FFFFFF" : "#F53838",
            }}
            className="slider-prvs-btn"
          >
            <Arrow color={currentIndex !== 0 ? "#FFFFFF" : "#F53838"} />
          </button>
          <button
            onClick={() => {
              moveBack();
            }}
            className="slider-next-btn"
            style={{
              background:
                -currentIndex === SliderData.length - 1 ? "#FFFFFF" : "#F53838",
              borderColor:
                -currentIndex !== SliderData.length - 1 ? "#FFFFFF" : "#F53838",
            }}
          >
            <Arrow
              color={
                -currentIndex !== SliderData.length - 1 ? "#FFFFFF" : "#F53838"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
