import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import EmbeddedIDE from "../components/EmbeddedIDE/EmbeddedIDE";
import "./LearningModule.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import "highlight.js/styles/base16/zenburn.css";
import "./LearningModule.css";
import ModuleData from "../data/ModuleData";
import TabPanel from "../components/TabPanel";
import allyProps from "../components/allyProps";
import DUMMY_TEXT from "../data/placeholdertext";

function LearningModule(props) {
  //dynamically route user back to module starting point
  const [moduleDirector, setModuleDirector] = useState("");
  const [value, setValue] = useState(0);

  const params = useParams();
  // TODO replace by API call once we have a back-end
  const moduleDatum = ModuleData.find((data) => data.id == params.moduleId);
  const checkParams = params.moduleId;

  //back button logic here
  useEffect(() => {
    if (checkParams < 8) {
      setModuleDirector("javascript");
    } else if (checkParams == 8) {
      setModuleDirector("java");
    } else {
      setModuleDirector("csharp");
    }
  }, [checkParams]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Link to={`/main-content/learning-modules/${moduleDirector}`}>
        <Button>
          <ArrowBack /> Back
        </Button>
      </Link>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="module tabs">
            <Tab label="Guide" {...allyProps(0)} />
            <Tab label="Engagement" {...allyProps(1)} />
            <Tab label="Exercises" {...allyProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="learning-module-header">
            <div className="lm-leftcolumn">
              <ReactMarkdown
                children={moduleDatum.markdown}
                rehypePlugins={[rehypeHighlight]}
              ></ReactMarkdown>
              <Typography paragraph>{DUMMY_TEXT}</Typography>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div style={{ display: "flex", height: "800px" }}>
            <div className="lm-rightcolumn">
              <EmbeddedIDE
                embedURL={moduleDatum.embeddedIDEURL}
                customIFrameStyle={moduleDatum.embedIDEStyle}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography paragraph>{DUMMY_TEXT}</Typography>
        </TabPanel>
      </Box>
    </>
  );
}

export default LearningModule;
