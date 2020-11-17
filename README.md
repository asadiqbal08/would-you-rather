# Project Overview
In the "Would You Rather?" Project, you'll build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

# Why this project?
This project will solidify your understanding of React and Redux while giving you a chance to express your creativity. You’ll practice improving the predictability of your application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components.

# How to install

Open a terminal and move to project directory and run the following commands
- `npm install`
- `npm start`

# Screens:

<a href="https://postimg.cc/YGvg2f95" target="_blank"><img src="https://i.postimg.cc/YGvg2f95/Screen-Shot-2020-11-17-at-11-06-34-PM.png" alt="Screen-Shot-2020-11-17-at-11-06-34-PM"/></a> <a href="https://postimg.cc/Vr2tJr0d" target="_blank"><img src="https://i.postimg.cc/Vr2tJr0d/Screen-Shot-2020-11-17-at-11-06-43-PM.png" alt="Screen-Shot-2020-11-17-at-11-06-43-PM"/></a> <a href="https://postimg.cc/GHFDppLm" target="_blank"><img src="https://i.postimg.cc/GHFDppLm/screencapture-localhost-3000-2020-11-17-23-06-57.png" alt="screencapture-localhost-3000-2020-11-17-23-06-57"/></a> <a href="https://postimg.cc/bZL2QF2X" target="_blank"><img src="https://i.postimg.cc/bZL2QF2X/screencapture-localhost-3000-addquestion-2020-11-17-23-07-30.png" alt="screencapture-localhost-3000-addquestion-2020-11-17-23-07-30"/></a><br/><br/>
<a href="https://postimg.cc/B8VLzLgM" target="_blank"><img src="https://i.postimg.cc/B8VLzLgM/screencapture-localhost-3000-leaderboard-2020-11-17-23-07-21.png" alt="screencapture-localhost-3000-leaderboard-2020-11-17-23-07-21"/></a> <a href="https://postimg.cc/PLxvKzmC" target="_blank"><img src="https://i.postimg.cc/PLxvKzmC/screencapture-localhost-3000-questions-am8ehyc8byjqgar0jgpub9-2020-11-17-23-07-43.png" alt="screencapture-localhost-3000-questions-am8ehyc8byjqgar0jgpub9-2020-11-17-23-07-43"/></a> <a href="https://postimg.cc/sM3hGRx9" target="_blank"><img src="https://i.postimg.cc/sM3hGRx9/screencapture-localhost-3000-questions-h1cwznjo3l5lofq5hyt43c-2020-11-17-23-07-13.png" alt="screencapture-localhost-3000-questions-h1cwznjo3l5lofq5hyt43c-2020-11-17-23-07-13"/></a> 

# App Functionality
The person using your application should have a way of impersonating/logging in as an existing user. (This could be as simple as having a login box that appears at the root of the application that lets the user select a name from the list of existing users. Alternatively, you could create your own account creation process to allow a user to sign up for an account.) Your application should work correctly regardless of which user is selected. Once the user logs in, the home page should be shown.

We always want to make sure we know who the logged in user is, so information about the logged in user should appear on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions should be shown by default, and the name of the logged in user should be visible on the page.

What would be the point of seeing answered and unanswered polling questions if we couldn’t actually vote or see the results? Each polling question should link to the details of that poll. The details of each poll should be available at questions/:question_id.

When a poll is clicked on the home page, the following is shown:

Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.
For answered polls, each of the two options contains the following:

Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.
The option selected by the logged-in user should be clearly marked.

Since we want to make sure our application creates a good user experience, the application should show a 404 page if the user is trying to access a poll that does not exist. (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.) It should also display a navigation bar so that the user can easily navigate anywhere in the application.

So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll should be displayed. The user’s response should be recorded and clearly visible on the poll details page. Users can only vote once per poll; they shouldn’t be allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question should appear in the “Answered” column.

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions should be available at the /add route. The application should show the text “Would You Rather” and have a form for creating two options. Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.

But how can we know how many questions each user has asked and answered? Let’s get some healthy competition going here! The application should have a leaderboard that’s available at the /leaderboard route. Each entry on the leaderboard should contain the following:

User’s name;
User’s picture;
Number of questions the user asked; and
Number of questions the user answered
Users should be ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions you ask and answer, the higher up you move.

The user should be able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both from within the app and by typing in the address into the address bar. To make sure we’re showing the data that is relevant to the user, the application should require the user to be signed in order to access those pages.
