import dhoklaimg from "../images/dhokla.jpg";
import dosaimg from "../images/dosa.jpeg";
import kebabimg from "../images/kebab.jpeg";
import momosimg from "../images/momos.jpeg";
import Pastaimg from "../images/Pasta.JPG";
import Pizzaimg from "../images/pizza.jpeg";
import riceimg from "../images/rice.jpg";
import rollimg from "../images/Rolls.jpg";
import saladimg from "../images/salad.jpeg";
import samosaimg from "../images/samosa.jpg";
import thaliimg from "../images/thali.jpeg";

export function getData() {
  return [
    { title: "Dhokla", price: 179, Image: dhoklaimg,id:1 },
    { title: "Dosa", price: 150, Image: dosaimg,id:2 },
    { title: "Kebab", price: 350, Image: kebabimg ,id:3},
    { title: "Momos", price: 139, Image: momosimg,id:4 },
    { title: "Pasta", price: 255, Image: Pastaimg,id:5 },
    { title: "Pizza", price: 199, Image: Pizzaimg,id:6 },
    { title: "Rice", price: 399, Image: riceimg,id:7 },
    { title: "Rolls", price: 189, Image: rollimg,id:8 },
    { title: "Salad", price: 321, Image: saladimg,id:9 },
    { title: "Samosa", price: 90, Image: samosaimg,id:10 },
    { title: "Thali - Veg", price: 459, Image: thaliimg,id:11 },
  ];
}
