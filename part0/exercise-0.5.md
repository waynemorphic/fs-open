### Single page App Diagram

Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at `https://studies.cs.helsinki.fi/exampleapp/spa`.

    sequenceDiagram
        participant browser
        participant server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: CSS file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
        activate server
        server-->>browser: javascript file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{"content":"asda","date":"2023-02-19T22:52:52.156Z"}, ...]
        deactivate server

        Note left of browser: Browser executes the callback function that renders the notes

    