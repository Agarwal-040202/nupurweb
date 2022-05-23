import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Accordion } from "react-bootstrap";
import ScreenHeading from "../../Utilites/ScreenHeading/ScreenHeading";
import "./Paper.css";
import data from "./PaperData";

const Paper = () => {
  return (
    <div>
      <section id="paper">
        <ScreenHeading title={"Published Papers"} />
      </section>

      <div className="Paper-container">
        <div className="paper-card">
          <List
            sx={{
              width: "100%",

              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 540,

              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            <ListItem>
              <ListItemText>
                <Accordion defaultActiveKey="0">
                  {data.map((img) => {
                    return (
                      <>
                        <Accordion.Item eventKey={img.id} >
                          <Accordion.Header >
                            <div key={img.id}>
                            <b style={{fontFamily: "serif"}}>{img.id}. </b>
                            <b
                              style={{
                                fontFamily: "serif",
                                color: "#800000",
                                marginLeft: "6px",
                                marginRight: "6px",
                                fontSize:"16px",
                                fontWeight:"lighter",
                                // textTransform: "lowercase"
                              }}
                              
                            >
                              {img.paperTitle}
                            </b>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body style={{height:"40px",display:"flex",alignItems:"center"}}>
                            {/* <span className="sub-heading">Authors:</span> <span className="sub-hading-details">{img.authors}</span><br/>
                            <span>Journal: {img.description}</span><br/>
                            <span>Issue and Page No: {img.issuepage}</span><br/> */}
                            <a href={img.paperlink} 
                            target="_blank"
                            style={{ textDecoration: "none", color: "#0E4ACA" }}>Paper Link</a>
                            <a
                              href="#"
                              style={{ textDecoration: "none", color: "#237D09",marginLeft:"40px" }}
                            >
                              {img.download}
                            </a>
                          </Accordion.Body>
                        </Accordion.Item>
                      </>
                    );
                  })}
                </Accordion>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Paper;
