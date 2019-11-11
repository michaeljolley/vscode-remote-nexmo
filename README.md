# Think inside the box. Developing inside a container to avoid conflicts, improve security and speed up on-boarding

This repository contains all demo source code used in Michael Jolley's talk on using Visual Studio Code, Docker and the Remote Development extension.

---

## Demo 1 - CLIs & SDKs

Demo 1 walks through the fact that tooling like CLIs, SDKs, libraries, etc. do not have to be installed on the development machine. They can live within the container to be available during development but disappear with the container post-development session.

During the demo we deploy a Google Cloud function that will listen for a webhook from Nexmo SMS messages and send a response back to that caller. In able to run this function for yourself you'll need to replace the `from` variable in the `index.js` with your own Nexmo SMS-capable number and setup the following environment variables in Google Cloud:

| Variable Name    | Description                                          |
| ---------------- | ---------------------------------------------------- |
| NEXMO_API_KEY    | Your Nexmo API key. Found on your Nexmo Dashboard    |
| NEXMO_API_SECRET | Your Nexmo API secret. Found on your Nexmo Dashboard |

---

## Demo 2 - Debugging

Demo 2 shows how to debug your application running inside the container from the host. The demo includes a Node.js express application that we set breakpoints in. We then forward internal ports to the host so we can hit the express endpoint for debugging.

---

## Thanks for stopping by!

Have changes you think would improve this repo? Feel free to fork and submit a pull request.

Have questions getting a demo running? Submit an issue or DM me on Twitter at @michaeljolley.
