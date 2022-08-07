import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './Accordion.css';
import image from '../../../Assets/Images/img1.jpg';
// import { useLocation } from "react-router-dom";

function AccordionProfile() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion className="acc-container my-3 p-2"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }} className="d-flex align-items-center justify-content-center acc-img-container">
            <img src={image} className="img-fluid acc-image"/>
          </Typography>
          <Typography sx={{ color: "text.secondary" }} className='d-flex align-items-center justify-content-center text-white'>
            Ahsan Sayeed Saad
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionProfile;
