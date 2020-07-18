import React from "react";
import "./xp.css";
function Research() {
  return (
    <div className="xp cont">
      <div className="econt">
        <div className="erow">
          <h3 className="ecomph1"> Leda Health </h3>
          <div className="jobinfo">
            <div className="subjobinfo">
              <h4 className="jtitle"> SWE Researcher</h4>
              <h4 class="joblocation">
                Brooklyn, NY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May 2020
                - Present
              </h4>
            </div>
          </div>
          <div className="edetails">
            <p className="epdetails">
              {" "}
              - Working on a confidential cutting edge technology to help the
              survivors and are in attempts to get a patent for it.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="econt">
        <div className="erow">
          <h3 className="ecomph1">Vellore Insitute of Technology </h3>
          <div className="jobinfo">
            <div className="subjobinfo">
              <h4 className="jtitle">Undergraduate Researcher</h4>
              <h4 class="joblocation">
                Chennai, India &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jan
                2019 - Apr 2019
              </h4>
            </div>
          </div>
          <div className="edetails">
            <p className="epdetailss">
              {" "}
              - I worked as an active member and a research fellow, I worked in
              a team consisting of a Professor and three of my classmates.{" "}
            </p>
            <p className="epdetailss">
              {" "}
              - Engineered a new design for 6T SRAM which presented a 9.103%
              reduction in power with multi-threshold technique and reduced
              variability factor by 4.7% for 2000 runs using Monte Carlo
              analysis
            </p>
            <p className="epdetailss">
              {" "}
              - Simulated all SRAM designs and proved that the newly engineered
              SRAM is both power efficient and process variation tolerant,
              implemented the designed system in FPGA board
            </p>
            <p className="epdetailss">
              {" "}
              - Succesfully documented the achievements and converted them into
              two research articles and Undergraduate Thesis.
            </p>
            <p className="epdetailss">
              {" "}
              - Presented and Published the paper titled "SRAM - A Comparative
              Study" in the Institute of Electrical and Electronics Engineers
              (IEEE) at UC yearly student magazine.
            </p>
          </div>
        </div>
      </div>

      <div className="econt">
        <div className="erow">
          <h3 className="ecomph1"> University of Cincinnati </h3>
          <div className="jobinfo">
            <div className="subjobinfo">
              <h4 className="jtitle"> Graduate Researcher</h4>
              <h4 class="joblocation">
                Cincinnati, OH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jan
                2020 - Apr 2020
              </h4>
            </div>
          </div>
          <div className="edetails">
            <p className="epdetails">
              {" "}
              - Presented and published the paper titled "SDLC methodologies and
              strategies" in the Institute of Electrical and Electronics
              Engineers (IEEE) at UC yearly student magazine.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
