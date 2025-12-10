# Forky App

- **user story**: description of the aplilcation functionality from the user's prespective.
- **Common format**: As a [typeof user], I want [an action] so that [a benefit]

## User story

1. As a user, I want **to search for recipes**, so that i find new ideas for meals
2. As a user, i want to be able to **update the number of servings**, so that ican cook a meal for different number of people
3. As a user, i want a **bookmark recipes**, so that i can review then later.
4. As a user, i want to able to **create my own recepies**, sothat i have them all organized in the same app
5. as a user, i want to able to **see my bookmark and own recipes when i leave the app and comeback later**, so that i can close the app safetly after cooking.

## Implement

### 1. Search for recepies.

- Search Functionality input fields to sendrequest to api with searched keywords
- Display results with pagination
- Display recipe with cooking time , servings and ingredients

### 2. Update the numbers of Servings

- Change servings functionality update all ingredients according to current number of servings

### 3. Bookmark recipes

- Bookmark functionality display list of all bookmark recipes

### 4. Create my own recipes

- User can upload own recipes
- User recipes will automatically be bookmarked
- User can only see their own recipes, not recipes from other users

### 5. See my bookmark after close application

- Store Bookmark data in the browser usin local storage

- On page load , read saved bookmarks from local storage and display

![Flowchart](./public/Untitled%20Diagram.drawio.svg)
