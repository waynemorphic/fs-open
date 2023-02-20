### Single page App Diagram

Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at `https://studies.cs.helsinki.fi/exampleapp/spa`.

    sequenceDiagram
        participant browser
        participant server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_notes_spa
        activate server
        server-->>browser: {"message":"note created"}
        deactivate server

        Note left of browser: Browser executes the callback function that renders the notes
        Note bottom of developer tools: Console renders the json data 

    