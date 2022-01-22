import React from "react";
import SidebarOption from "./SidebarOption";
import './Sidebar.css';
// import FiberManualRecordIcons from "@material-ui/icons/FiberManualRecordIcons"
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import EditOutlined from "@material-ui/icons/EditOutlined";
import InsertComment from "@material-ui/icons/InsertComment";


function Sidebar(){
    return(
        <div className="sidebar">
          <div className="sidebar_header">
              <div className="sidebar_info">
                   <h2>Clever Programmer</h2>
              <h3>
                  <FiberManualRecord/>
                  Nikhil Kumar
              </h3>

              </div>
            < EditOutlined/>
         

          </div>
           <SidebarOption Icon={InsertComment} title="Threads"/>
        </div>
    )
}
export default Sidebar