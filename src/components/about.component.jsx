import React from 'react';

const About = () => {
  return (
    <div className="about-page inner-container">
      <h2>About me</h2>
      <p>Hi there! My name's Nick Smith. I'm a front-end developer.</p>

      <p>
        This is a demo/personal project that uses React.js, Redux, React Router,
        localStorage (to save favourite cats between sessions) and
        TheCatApi.com. No cats were harmed in the making of this web app.
      </p>

      <p>
        You can find the code for this project on Github{' '}
        <a
          href="https://github.com/njpsmith/Catstagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>

      <p>
        Find me on LinkedIn{' '}
        <a
          href="https://www.linkedin.com/in/nicholas-smith-97a90829/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>

      <p>
        Or email me{' '}
        <a href="mailto:smith.nicholasjp@gmail.com">
          smith.nicholasjp@gmail.com
        </a>
      </p>

      <hr />

      <p>
        Examples of my work:
        <br />
        <a
          href="https://cornerstone.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cornerstone
        </a>
        , <br />
        <a
          href="https://www.phocafe.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pho
        </a>
        , <br />
        <a
          href="https://homehouse.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home House
        </a>
        , <br />
        <a
          href="https://southplacehotel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          South Place Hotel
        </a>
      </p>

      <hr />

      <p>
        Personal/demo projects:
        <br />
        <a
          href="https://nick-smith-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio website
        </a>
        , <br />
        <a
          href="https://wookiepedia.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wookiepedia
        </a>
      </p>

      <br />
    </div>
  );
};

export default About;
