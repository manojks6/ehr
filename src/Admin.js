import React from "react";
import "./Admin.css";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Card from "./Card";
function Admin() {
   return (
      <div className="admin">
         <div className="Admintop">
            <TopNav />
         </div>
         <div className="AdminBody">
            <div className="Adminleft">
               <SideNav a="Dashboard" b="Doctors" c="Appointments" />
            </div>
            <div className="Adminright">
               <div className="cards">
                  <Card
                     title={"Patients"}
                     description={"Total Patients"}
                     metricValue={"140"}
                     color={"red"}
                  />
                  <Card
                     title={"Doctors"}
                     description={"Active Doctors"}
                     metricValue={"10"}
                     color={"green"}
                  />
                  <Card
                     title={"Nurses"}
                     description={"No of Nurses"}
                     metricValue={"254"}
                     color={"orange"}
                  />
               </div>
               <div className="cards2">
               <Card
                     title={"Account Balance"}
                     description={"ETH 99.99"}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Admin;
