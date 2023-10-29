import React, { useEffect } from 'react';

import './styles.css'
// import 'restaurant/src/components/styles.css' // Import your CSS file

function App() {
//   useEffect(() => {
//     // Add your jQuery logic here
//     $(document).ready(function () {
//       $('#icon').click(function () {
//         $('ul').toggleClass('show');
//       });
//     });
//   }, []);

  return (
    <div>
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <title>Vite + React</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <nav>
          <label className="logo">NITTE</label>
          <ul>
            <li>
              <a className="Active" href="">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
          <label id="icon">
            <i className="fa fa-bars"></i>
          </label>
        </nav>
        <section></section>
        <script type="module" src="scjs"></script>
      </body>
    </html>
    </div>
  );
}

export default App;
