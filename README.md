# SmallReminders
You may be familiar with Ray Dalio's famous concept of principles - lessons you learn in life, and keep with you to influence your future decisions.

The challenge that our media-rich culture presents is the fact that we may discover such a lesson, and forget it after a few days. Despite having written it down in your notes, maybe even hung it up on your wall, it eventually fades into the background and you forget.

I found myself wishing I had occasional reminders to think about something differently, so I began working on Small Reminders.

## What Is Small Reminders?
It is web app to let you keep a list of your own principles, and let you send yourself random reminders via text.

## The Technology
The app runs on Node.js, server rendered React. The infrastructure includes a MongoDB database and is continuously intergrated with Circle CI, jest, git, and automatic deployments on Heroku.

## Current State

## Contribute
To contribute to the project, you can take a look at the Projects section. The Road Map section is a high-level view of the current progress, and the seperate issues are broken down into projects.

### Get started
```
git clone <your fork of this repo>
cd SmallReminders
npm install
npm start
<make your changes>
open pull request (will automatically run tests)
```
*note*: you will need to create a ```.env``` file in your root directory with the below values. This will make the connection string for MongoDB.
```
MONGO_URL=<url to MongoDB>
MONGO_USER=<database username>
MONGO_PW=<database user password>
MONGO_DBNAME=<database name>
```
