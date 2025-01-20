import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import car4 from "../assets/images/car4.png";
import car5 from "../assets/images/car5.png";
import car6 from "../assets/images/car6.png";
import car7 from "../assets/images/car7.png";
import car8 from "../assets/images/car8.png";
import car9 from "../assets/images/car9.png";
import car10 from "../assets/images/car10.png";
import car11 from "../assets/images/car11.png";
import car12 from "../assets/images/car12.png";

export const validInviteCodes = ["austin234", "alvin145", "karthik321"];

const carImage = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
  car9,
  car10,
  car11,
  car12,
];

export const getRandomCar = () => {
  const randomIndex = Math.floor(Math.random() * carImage.length);
  return carImage[randomIndex];
};

export const waitingListData = [
  { name: "John Doe", hasInviteCode: true, position: 1, car: getRandomCar() },
  {
    name: "Jane Smi",
    hasInviteCode: false,
    position: 2,
    car: getRandomCar(),
  },
];
