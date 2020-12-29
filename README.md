# Tracks App in React Native with MongoDB

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Run](#run)

## General info

Application for learning React Native with MongoDB.

## Technologies

- React Native
- MongoDB

## Setup

To run this project, install it locally for both - <a href="https://github.com/PrzemekCraker/Tracks-App">app</a> and <a href="https://github.com/PrzemekCraker/track-app-server">server</a> - using npm:

```
$ cd ../tracks-app
$ npm install

```

```
$ cd ../tracks-app-server
$ npm install

```

## Run

To run the application, we need the 'track-server' folder in which we enable nodemon listening via the command

```
$ cd ../tracks-app-server
$ npm run dev

```

<img src="nodemonExp.png" alt="nodemon.png">

In app directory run the ngrok (public URL) via command

```
$ cd ../tracks-app
$ ngrok http 3000

```

Then copy forwarding link url to tracker.js -> baseURL

<img src="ngrokExp.png" alt="ngrok.png">

Finally, launch the application

```
$ cd ../tracks-app
$ npm start

```
