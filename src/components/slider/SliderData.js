import ViezhImage from "../../Assets/Veizh.png";
import YessicaImage from "../../Assets/Yessica.png";
import KimImage from "../../Assets/kim.png";

function user(name, place, description, star, image) {
  this.name = name;
  this.place = place;
  this.description = description;
  this.star = star;
  this.image = image;
}

const SliderData = [
  new user(
    "Viezh Robert",
    "Warsaw, Poland",
    "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    "4.5",
    ViezhImage
  ),
  new user(
    "Yessica Christy",
    "Shanxi, China",
    "“I like it because I like to travel far and still can connect with high speed.”.",
    "4.5",
    YessicaImage
  ),
  new user(
    "Kim Young Jou",
    "Seoul, South Korea",
    "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    "4.5",
    KimImage
  ),
  new user(
    "Kim Young Jou",
    "Seoul, South Korea",
    "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    "4.5",
    KimImage
  ),
  new user(
    "Kim Young Jou",
    "Seoul, South Korea",
    "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    "4.5",
    KimImage
  ),
];

export default SliderData;
