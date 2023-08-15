import React from "react";
import style from "./menu.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useFetchData from "../../hooks/useFetchData";

const Menu = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  console.log(info);

  return (
    <menu className={style["menu"]}>
      <h1>YOU CELEBRATE, WE CATER!</h1>
      {info.map((item, index) => (
        <div key={index}>
          <Accordion className={style["accordion"]}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item?.dishes?.vegetarian?.map((food, index) => (
                  <div key={index}>{food}</div>
                ))}

                {item?.dishes?.non_vegetarian?.map((food, index) => (
                  <div key={index}>{food}</div>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </menu>
  );
};

export default Menu;
