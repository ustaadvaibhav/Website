/******************************************************************************
START Glitch hello-app default styles

The styles in this section do some minimal CSS resets, set default fonts and 
colors, and handle the layout for our footer and "Remix on Glitch" button. If
you're new to CSS they may seem a little complicated, but you can scroll down
to this section's matching END comment to see page-specific styles.
******************************************************************************/


/* 
  The style rules specify elements by type and by attributes such as class and ID
  Each section indicates an element or elements, then lists the style properties to apply
  See if you can cross-reference the rules in this file with the elements in index.html
*/

/* Our default values set as CSS variables */
:root {
  --color-bg: #69F7BE;
  --color-text-main: #000000;
  --color-primary: #FFFF00;
  --wrapper-height: 87vh;
  --image-max-width: 300px;
  --image-margin: 3rem;
  --font-family: "HK Grotesk";
  --font-family-header: "HK Grotesk";
}

/* Basic page style resets */
* {
  box-sizing: border-box;
}
[hidden] {
  display: none !important;
}

/* Import fonts */
@font-face {
  font-family: HK Grotesk;
  src: url("https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Regular.otf?v=1603136326027")
    format("opentype");
}
@font-face {
  font-family: HK Grotesk;
  font-weight: bold;
  src: url("https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Bold.otf?v=1603136323437")
    format("opentype");
}

/* Our remix on glitch button */
.btn--remix {
  font-family: HK Grotesk;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  line-height: 1rem;
  font-weight: 500;
  height: 2.75rem;
  align-items: center;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
  margin-left: auto;
}
.btn--remix img {
  margin-right: 0.5rem;
}
.btn--remix:hover {
  background-color: #D0FFF1;
}

/* Navigation grid */
.footer {
  display: flex;
  justify-content: space-between;
  margin: 1rem auto 0;
  padding: 1rem 0 0.75rem 0;
  width: 100%;
  flex-wrap: wrap;
  border-top: 4px solid #fff;
}

.footer a:not(.btn--remix):link,
a:not(.btn--remix):visited {
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  color: #000;
  text-decoration: none;
  border-style: none;
}
.footer a:hover {
  background: var(--color-primary);
}

.footer .links {
  padding: 0.5rem 1rem 1.5rem;
  white-space: nowrap;
}

.divider {
  padding: 0 1rem;
}
/******************************************************************************
END Glitch hello-app default styles
******************************************************************************/

body {
  font-family: HK Grotesk;
  background-color: var(--color-bg);
}

/* Page structure */
.wrapper {
  min-height: var(--wrapper-height);
  display: grid;
  place-items: center;
  margin: 0 1rem;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Very light scaling for our illustration */
.title {
  color: #2800FF;
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 105%;
  margin: 0;
}

/* Very light scaling for our illustration */
.illustration {
  max-width: 100%;
  max-height: var(--image-max-width);
  margin-top: var(--image-margin);
}

/* Instructions */
.instructions {
  margin: 1rem auto 0;
}

/* Button - Add it from the README instructions */
button,
input {
  font-family: inherit;
  font-size: 100%;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  transition: 500ms;
}

/* Subheading */
h2 {
  color: #2800FF;
}

/* Interactive image */
.illustration:active {
  transform: translateY(5px);
}

/* Button dip
- Toggling this class on and off will move it down and up again
- The button transition property above determines the speed of the translate (500ms)
*/
.dipped {
  transform: translateY(5px);
}




/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/




<!DOCTYPE html>
<html lang="en">
  <head>
    <!--
      This is the page head - it contains info the browser uses to display the page
      You won't see what's in the head in the page
      Scroll down to the body element for the page content
    -->

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://glitch.com/favicon.ico" />

    <!-- 
      This is an HTML comment
      You can write text in a comment and the content won't be visible in the page
    -->

    <title>Hello World!</title>

    <!-- Meta tags for SEO and social sharing -->
    <link rel="canonical" href="https://glitch-hello-website.glitch.me/" />
    <meta
      name="description"
      content="A simple website, built with Glitch. Remix it to get your own."
    />
    <meta name="robots" content="index,follow" />
    <meta property="og:title" content="Hello World!" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://glitch-hello-website.glitch.me/" />
    <meta
      property="og:description"
      content="A simple website, built with Glitch. Remix it to get your own."
    />
    <meta
      property="og:image"
      content="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-website-social.png?v=1616712748147"
    />
    <meta name="twitter:card" content="summary" />

    <!-- Import the webpage's stylesheet -->
    <link rel="stylesheet" href="/style.css" />

    <!-- Import the webpage's javascript file -->
    <script src="/script.js" defer></script>
  </head>
  <body>
    <!--
      This is the body of the page
      Look at the elements and see how they appear in the rendered page on the right
      Each element is defined using tags, with < and > indicating where each one opens and closes
      There are elements for sections of the page, images, text, and more
      The elements include attributes referenced in the CSS for the page style
    -->

    <!-- The wrapper and content divs set margins and positioning -->
    <div class="wrapper">
      <div class="content" role="main">
        <!-- This is the start of content for our page -->
        <h1 class="title">Hello World!</h1>

        <img
          src="https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2Fillustration.svg?v=1618177344016"
          class="illustration"
          alt="Editor illustration"
          title="Click the image!"
        />
        <!-- Instructions on using this project -->
        <div class="instructions">
          <h2>
            Using this project
          </h2>
          <p>
            This is the Glitch <strong>Hello Website</strong> project. You can
            use it to build your own site. Check out README.md in the editor for
            more info and next steps you can take!
          </p>
          <!-- ADD BUTTON HERE -->
          
          <!-- Once you've added the button from the readme, click it in the page -->
          <!-- Check out the function in script.js to see how it works -->
        </div>
      </div>
    </div>
    <!-- The footer holds our remix button — you can use it for structure or cut it out ✂ -->
    <footer class="footer">
      <div class="links"></div>
      <a
        class="btn--remix"
        target="_top"
        href="https://glitch.com/edit/#!/remix/glitch-hello-website"
      >
        <img
          src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
          alt=""
        />
        Remix on Glitch
      </a>
    </footer>
  </body>
</html>



"This is my first go on a website" 
