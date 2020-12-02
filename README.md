# </>DevConnect

A MERN FullStack application assignment by Brandon Robertson & Jessica Sole

# Table of Contents

- [Purpose](#purpose)
- [Features](#features)
- [Target Audience](#target-audience)
- [Tech Stack](#tech-stack)
- [Wireframes](#wireframes)
- [Mobile Prototype](#mobile-prototype)
- [Colour Pallete](#app-colour-pallete)
- [User Stories](#user-stories)
- [Dataflow Diagram](#dataflow-diagram)
- [Applicatioin Architecture Diagram](#applicatioin-architecture-diagram)
- [Project Management](#project-management)

## Purpose

Gone are the days of the stereotyped socially awkward developer. Developers are amongst the most active users of social networks. The purpose of this application is to create a space where developers can learn from colleagues, connect with local and non local developers and find solutions to problems. The application creates a network of like minded individuals that can be connected easily. This app caters to all levels of developer. This can be very useful for those who are starting their coding journey. It allows them to connect with a developer more senior for mentorship or advice. The vice versa is true, the app gives senior developers access to juniors for the intent of mentorship.By connecting developers in one platform the application makes it easier for these developers to find each other in one network. This eliminates the need to connect on different platforms for various reasons.

## Features

<details><summary>User Authentication</summary>

    1. Register
    2. Login
    3. Logout
    4. Edit Profile ( if current user)
    5. Delete Profile ( if current user)
    6. Edit Posts ( if creator of post)

</details>

<details><summary>Navigation</summary>

    1. When User is not logged in and registered the user can view:

    - Developer Profiles
    - Register Page
    - Home Page
    - Login Page

    2. When user is signed in they can:

    - Create Posts
    - Edit Profiles
    - Delete Profiles
    - Delete Posts
    - Access Dashboard

</details>

<details><summary>Profiles Page</summary>

    1. User can view a list of developer profiles
    2. Indivdual developer profile displays on click of profile

</details>

<details><summary>Posts</summary>

    1. Display most current developer posts
    2. Users can:

    - Like a post
    - Reply to a post
    - Delete a post

    3. Most current replies are displayed on post
    4. User can leave a comment under the post

</details>

<details><summary>Dashboard</summary>

    1. User can edit their info
    2. User can create a profile from this page

</details>
  ​
<details><summary>Nice to Have Features</summary>

    1. Page to search and filter developers by name or skillset
    2. Add user as a friend or colleague
    3. Image Upload
    4. User can rate their experience working with a developer.

</details>

## Target Audience

The apps target demographic is professional developers. This includes anyone who has worked in the development realm or those that are studying. The application aims to create a social network for these developers, so it would not be necessary for the developer to have a large online presence to join.

| Target Demographic | Result                                     |
| ------------------ | ------------------------------------------ |
| Age                | Any age                                    |
| Gender             | Any gender                                 |
| Occupation         | Professional Developer / Student Developer |
| Primary Language   | English                                    |

## Tech Stack

<details><summary>Design</summary>

    1. Framer
    2. Miro
    3. Lucid Chart

</details>

<details>
  <summary>Collaboration</summary>
  
    1. Trello
    2. Slack
    3. Github
</details>

<details>
  <summary>Frontend</summary>

    1. HTML5
    2. CSS
    3. Javascript
    4. React JS
    5. Gravatar
    6. Axios

</details>

<details>
  <summary>Encryption</summary>

    1. Bcrypt

</details>

<details>
  <summary>Backend</summary>

    1. Express
    2. Node
    3. JSON Web Token

</details>

<details>
  <summary>Database</summary>
  
    1. Mongoose
    2. MongoDB
</details>

## Wireframes

### Desktop & Site Navigation

![](/images/Desktop.png)

### Tablet View

![](/images/Tablet-1.png)
![](/images/Tablet-2.png)

### Mobile View

![](/images/Iphone.png)

### Mobile Prototype

[App Prototype](https://framer.com/share/MERN-App--aOoctOf3oCSczjnL0RpE/qhjn1oSbM#qhjn1oSbM)

### App Colour Pallete

![Colour Gradient](/images/Pallete-Gradient.png)
![Pallete](/images/Colour-Pallete2.png)

## User Stories

![](/images/chester.png)

##### Chester (Registered User)

<details>
  <summary>Click to expand!</summary>

Chester is an experienced Developer that wants to connect with his fellow co-workers outside of work and his other developer friends in his spare time.

###### As Chester I want:

- To see what other users are posting and being able to interact with them by commenting and liking those posts.
- Make my own posts that other users can interact with.
- Connect to other users via private message or adding the user as a friend.
- Edit my profile and update my email and/or password.
- Delete my posts or comments from other users posts.
- View my own profile and other users profiles.
- Delete my profile, posts and user account if I no longer wish to be on the website anymore.
- Log in to my account and log out of it when I want to.
</details>

##### Sarah (Admin)

<details>
  <summary>Click to expand!</summary>

Sarah works at DevConnect moderating the app making sure that users aren't having any issues, she doesn't have a profile but she has total control over the app, all users and all content using the Admin dashboard that she access through a specially assigned Admin account.

###### As Sarah I want:

- The right to edit, create and remove users from the database if they are posting inappropriate content, harassing other users or there is any issue with a users account.
- The right to edit and remove posts and comments from the database if it has inappropriate content or is harassing another user.

###### She should not:

- Be able to edit other users profiles, posts, comments or likes.
- Be able to remove other users profiles, posts, comments or likes.
</details>

##### Robert (Non-Registered User)

<details>
  <summary>Click to expand!</summary>

Robert is a new Developer studying Ruby on Rails looking to find a mentor or other new developers to connect with on a new project to show of his newly learnt skills.

###### As Robert I want:

- To see what other users are posting if I get sent a link to a post.
- To see other users profiles, skills and previous experience.
- A nice user interface that is easy for me to navigate on my tablet.
- Easy access to the register page so if I decided to sign up I don't need to search for it.
- To be able to sign up using my Google account or Github account.

###### He should not:

- Be able to interact with those posts he sees.
- Connect with other users without being registered/logged in.
</details>

### Dataflow Diagram

![](/images/diagram-3.png)

### Applicatioin Architecture Diagram

![](/images/diagram-1.png)

### Project Management

![](/images/trello2.png)

<a href="#top">Back to top</a>
