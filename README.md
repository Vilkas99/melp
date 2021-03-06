


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Melp</h3>

  <p align="center">
     - Project submission by Victor Mancera for the Front end Developer role at Intelimetrica
    <a href="https://vilkas99.github.io/melp/">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>    
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

My goal was to complete each one of the requeriments added in the document of instructions based on a strong architecture that would allow me to finish the main objectives, but as well the bonus indications. I'm really proud for acomplishing all of them in time and with professional quality (At least the one you can ask in just 24 hours of development! haahaha). 

Main Features:
* Filtering & Searching of restaurants
* Dinamic Data based on the connection with a Node-Express API made as a proxy between the front-end and the API for the restaurants data
* Data analysis based on the position of the user in a google-maps interface
* Social media sharing button & functionality
* Responsiveness

### Built With
* [React](https://es.reactjs.org/)
* [Redux - Toolkit](https://redux-toolkit.js.org/)
* [Lodash](https://lodash.com/)
* [Axios](https://github.com/axios/axios)
* [MathJS](https://mathjs.org/)
* [Google Maps](https://www.npmjs.com/package/@react-google-maps/api)
* [Spherical Geometry](https://www.npmjs.com/package/spherical-geometry-js)
* [Styled Components](https://styled-components.com/)
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/es/)



<!-- GETTING STARTED -->
## Getting Started

Fork the repo and start coding!:)

### Prerequisites

npm install for all the libraries


<!-- ROADMAP -->
## Roadmap

I wanted to apply an "Engineering" approach to the resolution of this challenge, and for that, I've applied a set of steps to guarantee a robust architecture. I started by creating "Use-Case" [diagrams](https://lucid.app/lucidchart/e243bee5-eb12-40ff-b4cc-3a2ed5e0eb31/view) in LucidChart that allowed me to see the application as a whole, and to identify potential dangers, and connections between the interactions in the front-end and the data processing. After that, I spent a considerable amount of time creating ["mockups"](https://www.figma.com/file/tx0eV2gHzJ264ShEgPj1Qj/Untitled?node-id=1%3A295) using Figma and applying a "mobile-first" mindset. With all the preparation completed, I started coding by first creating all the visual components for every instance of the application (Both in mobile and desktop), once I finished I then moved to create the connection with the API provided in the instructions; soon I discovered that CORS errors where being presented by trying to fetch the data directly in the client-side. For that, I decided to create an API-Proxy application with Express and Heroky to apply the necessary headers to the client and to return data to the front. After that final step, I uploaded the page to Github.




<!-- CONTACT -->
## Contact

Víctor Alfonso Mancera Osorio - [@your_twitter](https://twitter.com/VictorMancera99) - vmanceraosorio@gmail.com

Project Link: [https://github.com/Vilkas99/melp](https://github.com/Vilkas99/melp)







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/victormancera/
[product-screenshot]: images/screenshot.png
