import React from "react";
import "./box.css";
import Vpol from "../img/polly archi.jpg";
import VIIIcalc from "../img/dribbble.png";
import IVjfull from "../img/jfull.png";
import VIIchcklist from "../img/chck.jpg";
import VIsbot from "../img/sbot.png";
import IIsane from "../img/sane.png";
import IIIledaoff from "../img/leda off.png";
import Xpicscart from "../img/Pics Cart.png";
import IIIIcicd from "../img/cicd.png";
import IXcrud from "../img/crud.png";
import Iserverless from "../img/serverlesss.png";
import XIstyper from "../img/styper.png";

function Xp() {
  return (

    <div className='b'>

      <div class="card">
        <div class="imgbx">
          <img src={Iserverless}></img>
        </div>
        <div class="details">
          <h2>
            AWS Serverless architectures for Leda
      </h2>
          <h3> Project Type - AWS Architecture</h3>
          <p>
            - Created 2 serverless architectures for Leda Health, this architecture involves API gateway, Lambda and DynamoDB.  </p>
          <p> - Came in and rearchitected the main architectures in to serverless, scalable, elastic and highly available architectures. Automated the deployment process into AWS by following the CICD DevOps pipeline and CodePipeline.
        </p>
        </div>
      </div>

      <div class="card">
        <div class="imgbx">
          <img src={IIsane}></img>
        </div>
        <div class="details">
          <h2>
            Leda.co/SANE - Interactive Map
</h2>
          <h3>Project Type - Software/Web Development</h3>
          <p>
            - Helped the Data team build an interactive map which actively shows SANE Certified Nurses for each state. </p>
          <p>- Used R to analyze data, used Tableu on the data collected by Data team and leaflet JS library for the frontend.</p>
        </div>
      </div>

      <div class="card">
        <div class="imgbx">
          <img src={IIIledaoff}></img>
        </div>
        <div class="details">
          <h2>
            Leda Official Website
      </h2>
          <h3>Project Type - Web Development </h3>
          <p>
            - Build the company's official web page, maintained people's database and major component features of the company site.</p>
        </div>
      </div>


      <div class="card">
        <div class="imgbx">
          <img src={Vpol}></img>
        </div>
        <div class="details">
          <h2>
            Slack Chatbot using AWS Polly
      </h2>
          <h3>Project Type - Personal</h3>
          <p>
            - Created an application that converts text to speech in dozens of languages and voices.</p>
          <p> - The application is completely serverless and highly available as it uses AWS lambda, API gateway, and DynamoDB.</p>
          <p>- Exposing the lambda function as RESTful web service so it can be accessed over an HTTP request.</p>
        </div>
      </div>



      <div class="card">
        <div class="imgbx">
          <img src={IVjfull}></img>
        </div>
        <div class="details">
          <h2>
            Java Fullstack application using SpringBoot
      </h2>
          <h3>Project Type- Personal</h3>
          <p>
            - Developed an application which allows user to enter data as tables and stores the data in a PostgreSQL database located in
a docker container and exposed it as a REST app.</p>
          <p>- Created front end UI using React.js forms and hooks and deployed the application in Amazon Elastic Beanstalk.</p>
        </div>
      </div>

      <div class="card">
        <div class="imgbx">
          <img src='data:image/jpeg;base64,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'></img>
        </div>
        <div class="details">
          <h2>
            Covid Tracker
      </h2>
          <h3>Project Type - Working on it</h3>
          <p>
            - Plan is to utilize JS api parsing and displaying it in frontend, using some dataviz tools like heatmap etc.</p>
        </div>
      </div>


      <div class="card">
        <div class="imgbx">
          <img src={VIsbot}></img>
        </div>
        <div class="details">
          <h2>
            SnatchBot
      </h2>
          <h3>Project Type - Professional</h3>
          <p>
            - Created an automatic text assistant to automate replies and store user inputs using Amazon Lex and Snatchbot.</p>
        </div>
      </div>



      <div class="card">
        <div class="imgbx">
          <img src={IIIIcicd}></img>
        </div>
        <div class="details">
          <h2>
            API Testing using AWS DevOps CICD pipeline
      </h2>
          <h3>Project Type - Professional</h3>
          <p>
            - Performed loadtesting using loadrunner and API testing with Postman as Backend and AWS as
            frontend.
           <p> - Tested the robustness of the application by simulating 1000's of multiple concurrent user sessions using Postman.</p>
            <p>- Automated deployment to AWS using the DevOps CICD pipeline, CodeBuild, Jenkins and CloudFormation .</p>
          </p>
        </div>
      </div>


      <div class="card">
        <div class="imgbx">
          <img src={IXcrud}></img>
        </div>
        <div class="details">
          <h2>
            CRUD application
      </h2>
          <h3>Project Type - Personal Web App</h3>
          <p>
            - A simple CRUD application using SpringBoot's rest controller and PostGres as Database.</p>
          <p>  - Used Postman to simulate user interaction with the API.
            </p>
        </div>
      </div>


      <div class="card">
        <div class="imgbx">
          <img src={VIIIcalc}></img>
        </div>
        <div class="details">
          <h2>
            Calculator - Android App
      </h2>
          <h3> Project Type - Personal Android App</h3>
          <p>
            - Implemented a calculator using Kotlin, with all basic features.</p>
          <p> - Handled smooth UI and implemented a togglable dark mode in the app.
            </p>

        </div>
      </div>


      <div class="card">
        <div class="imgbx">
          <img src={Xpicscart}></img>
        </div>
        <div class="details">
          <h2>
            Ecommerce Site
      </h2>
          <h3>Project Type - Personal Website</h3>
          <p>
            - Much bigger react project, a culmination of all the stuff I learnt, used every concept including API parsing, react hooks (componentmount, didupdate), proptypes, state management.</p>
          <p>- Includes basic css tricks to make it look better, assign different style to every fifth box.</p>
        </div>
      </div>


      <div class="card">
        <div class="imgbx">
          <img src={XIstyper}></img>
        </div>
        <div class="details">
          <h2>
            Speed Typer
      </h2>
          <h3>Project Type - Personal Website</h3>
          <p>
            - Fun game to test myself, to get familarized with state management in react.</p>
        </div>
      </div>


      <div class="card">
        <div class="imgbx">
          <img src={VIIchcklist}></img>
        </div>
        <div class="details">
          <h2>
            Simple Checklist
      </h2>
          <h3>Project Type - Personal Website</h3>
          <p> - A very basic todolist, just to start off with react and understanding core concepts like hooks and proptypes.</p>
        </div>
      </div>


    </div >







  );
}

export default Xp;
