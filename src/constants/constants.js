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
  {
    id: uuidv4(),
    icon: GiLovers,
    label: "Wedding",
    path: "/weddingDecoration",
  },
  {
    id: uuidv4(),
    icon: GiBigDiamondRing,
    label: "Engagement",
    path: "/engagementDecoration",
  },
  {
    id: uuidv4(),
    icon: GiWinterGloves,
    label: "Haldi",
    path: "/haldiDecoration",
  },
  {
    id: uuidv4(),
    icon: GiLoveLetter,
    label: "Invitations",
    path: "/invitation",
  },
  { id: uuidv4(), icon: MdFastfood, label: "Catering", path: "/catering" },
  { id: uuidv4(), icon: FaHotel, label: "Stay", path: "/stay" },
  {
    id: uuidv4(),
    icon: MdEmojiTransportation,
    label: "Transportation",
    path: "/transportation",
  },
  { id: uuidv4(), icon: MdPlace, label: "Venues", path: "/venues" },
  {
    id: uuidv4(),
    icon: BsFillCameraReelsFill,
    label: "filmer",
    path: "/videoGrapher",
  },
  { id: uuidv4(), icon: MdFace2, label: "Beautician", path: "/makeupArtist" },
  { id: uuidv4(), icon: GiVineFlower, label: "Henna", path: "/mehendiArtist" },
];
