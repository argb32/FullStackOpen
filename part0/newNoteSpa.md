```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Writes note and clicks Save
    Browser->>Server: "POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa"

    activate Server

    Server-->>Browser: Sends new note content in a JSON

    Browser->>Browser: Render the new note without reloading the page
```
   