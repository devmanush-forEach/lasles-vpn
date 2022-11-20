import FreeIcon from "../../Assets/Free.svg";
import StandardIcon from "../../Assets/Standard.svg";
import PremiumIcon from "../../Assets/Premium.svg";

function card(title, points, price, icon) {
  this.title = title;
  this.points = points;
  this.price = price;
  this.icon = icon;
}

const PlansData = [
  new card(
    "Free Plan",
    [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    "Free",
    FreeIcon
  ),
  new card(
    "Standard Plan",
    [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
    "$9",
    StandardIcon
  ),
  new card(
    "Premium Plan",
    [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
    "$12",
    PremiumIcon
  ),
];

export default PlansData;
