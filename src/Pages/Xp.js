import React from "react";
import "./xp.css";
function Xp() {
  return (
    <div className="xp cont">
      <div className="econt">
        <div className="erow">
          <h3 className="ecomph1">Leda Health </h3>
          <div className="jobinfo">
            <div className="subjobinfo">
              <h4 className="jtitle">SWE Analyst</h4>
              <h4 class="joblocation">
                Brooklyn, New York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                May 2020 - Present
              </h4>
            </div>
          </div>
          <div className="edetails">
            <p className="epdetails"> - Worked as a Software Engineering Team Lead, as a lead developer on multiple projects utilizing frontend frameworks, python and JS libraries.</p>
            <p className="epdetails"> - Helped the Data team build an interactive map which actively shows SANE Certified Nurses ineach state. Used R to analyze data and utilized vizualization tools and leaflet JS library on the data collected by Data team.</p>
            <p className="epdetails"> - Help build the company's official web page, maintained people's database and major component features of the company site.</p>
          </div>
        </div>
      </div>

      <div className="econt">
        <div className="erow">
          <h3 className="ecomph1">Leda Health </h3>
          <div className="jobinfo">
            <div className="subjobinfo">
              <h4 className="jtitle">AWS Architect Intern</h4>
              <h4 class="joblocation">
                Brooklyn, New York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                May 2020 - Present
              </h4>
            </div>
          </div>
          <div className="edetails">
            <p className="epdetails">

              - Rearchitected two AWS architectures into highly scalable and
              available serverless architecture using API Gateway, AWS Lambda
              and DynamoDB.
</p>
            <p className='epdetails'>
              - Exposed the endpoint as a RESTful feature, Performed
              Loadtesting and API testing with Postman as Backend and AWS as
              frontend.
              </p>
            <p className='epdetails'>
              - Tested the robustness of the application by simulating 1000's of multiple concurrent user sessions using Postman.
            </p>
            <p className="epdetails"> - Automated deployment to AWS using the DevOps CICD pipeline, CodeBuild, Jenkins and CloudFormation .</p>

          </div>
        </div>
      </div>

      <div className="econt">
        <div className="erow">
          <h3 className="ecomph1">Electronics Corporation of India Ltd </h3>
          <div className="jobinfo">
            <div className="subjobinfo">
              <h4 className="jtitle">Embedded Systems Intern</h4>
              <h4 class="joblocation">
                Hyderabad, India &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                June 2018 - July 2018
              </h4>
            </div>
          </div>
          <div className="edetails">
            <p className="epdetails"> - Designed and created a two-factor authentication access control system.</p>
            <p className="epdetails"> - Developed and submitted a working prototype of a Digital Door Lock System using AT89C51 using an Arduino
            interfaced with a motor driver, keypad and GSM SIM900A</p>
            <p className="epdetails"> - Worked in a team to build a Digital Door Lock System. Successfully implemented 2 step verification, every time the user wants to access the safe, the user needs to input both the PIN and the random OTP which is sent to the admin's phone.</p>

          </div>
        </div>
      </div>


    </div>
  );
}

export default Xp;
