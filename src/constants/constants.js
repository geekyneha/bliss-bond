import { v4 as uuidv4 } from "uuid";
import {
  GiLovers,
  GiWinterGloves,
  GiLoveLetter,
  GiBigDiamondRing,
  GiVineFlower,
} from "react-icons/gi";
import {
  MdFastfood,
  MdEmojiTransportation,
  MdPlace,
  MdFace2,
} from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";
export const services = [
  { id: uuidv4(), icon: GiLovers, label: "Wedding" },
  { id: uuidv4(), icon: GiBigDiamondRing, label: "Engagement" },
  { id: uuidv4(), icon: GiWinterGloves, label: "Haldi" },
  { id: uuidv4(), icon: GiLoveLetter, label: "Invitations" },
  { id: uuidv4(), icon: MdFastfood, label: "Food" },
  { id: uuidv4(), icon: FaHotel, label: "Stay" },
  { id: uuidv4(), icon: MdEmojiTransportation, label: "Transportation" },
  { id: uuidv4(), icon: MdPlace, label: "Destination" },
  { id: uuidv4(), icon: BsFillCameraReelsFill, label: "Casset" },
  { id: uuidv4(), icon: MdFace2, label: "Beautician" },
  { id: uuidv4(), icon: GiVineFlower, label: "Henna" },
];
