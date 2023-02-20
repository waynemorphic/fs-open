### New Note Diagram
Diagram depicting the situation where the user creates a new note on the page `https://studies.cs.helsinki.fi/exampleapp/notes` by writing something onto the text field and clicking the submit button

    sequenceDiagram
        participant browser
        participant server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        activate server
        server-->>browser: Failed to load response data: No content available becuase this request was redirected
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: css file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: javascript file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{"content":"stan stray kids","date":"2023-02-19T20:13:26.890Z"}, ...]
        deactivate server

        Note left of browser: Browser executes the callback function that renders the notes
        Note bottom of developer tools: Console renders the json data as an array