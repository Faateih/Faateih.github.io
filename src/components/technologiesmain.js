import React from "react";
import Queries from "../Pages/Queries/Queries";
import SingleTech from "./singletech";
import graph from "../assets/images/GraphQL.png";
import rea from "../assets/images/ReactJs.png";
import rean from "../assets/images/React_Native.jpg";
import aws from "../assets/images/AWS.jpg";
import node from "../assets/images/Node-js.jpg";
import type from "../assets/images/TypeScript.jpg";

import mail from "../assets/umairbhai.jpg";
import mobil from "../assets/phone.svg";
import fb from "../assets/frazbhai.jpg";
import { FiSend } from "react-icons/fi";
import db from "../firebase.config";
import { useState } from "react";
import { useEffect } from "react";
const TechnologiesMain = (props) => {
  return (
    <div className="technologiesmain">
      <div className="technologiesmain__two">
        <SingleTech
          id="ReactJs"
          description="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
          heading="React Js"
          src={rea}
        />
        <SingleTech
          id="GraphQL"
          description="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools."
          heading="Graph QL"
          src={graph}
        />
        <SingleTech
          id="NodeJs"
          description="As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop."
          heading="Node Js"
          src={node}
        />
        <SingleTech
          id="TypeScript"
          description="TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript."
          heading="TypeScript"
          src={type}
        />
        <SingleTech
          id="ReactNative"
          description="React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities."
          heading="React Native"
          src={rean}
        />
        <SingleTech
          id="AWS"
          description="Amazon Web Services, Inc. is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services"
          heading="AWS"
          src={aws}
        />
      </div>
    </div>
  );
};
export default TechnologiesMain;
