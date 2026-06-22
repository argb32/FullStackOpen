```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->browser: Writes new note on inmput and click save
    browser->server: Sends info to server
    server->browser: Tells browser to reload notes
    browser->browser: Reloads notes
```
