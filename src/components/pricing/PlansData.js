import FreeIcon from "../../Assets/Free.svg";
import StandardIcon from "../../Assets/Standard.svg";
import PremiumIcon from "../../Assets/Premium.svg";

function card(title, points, price, icon, quality) {
  this.title = title;
  this.points = points;
  this.price = price;
  this.icon = icon;
  this.quality = quality;
}

const PlansData = [
  new card(
    "Free",
    [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    "Free",
    FreeIcon,
    "Good"
  ),
  new card(
    "Standard",
    [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
    "$9",
    StandardIcon,
    "Better"
  ),
  new card(
    "Premium",
    [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
    "$12",
    PremiumIcon,
    "Best"
  ),
];

export default PlansData;
