# Contributing

Add more CSS animations!

## What to contribute

- Add a CSS animation to this folder ("emotion + animal")
  - Check out the animation ideas at the bottom of this file.

Other things to contribute:

- getting the CSS animations to GIF button working
- making a prettier header
- maybe some unit tests
- Check the issues tab in github for more. I'll add some tasks broken down into issues

## Questions?

Here's a [discord](https://discord.gg/Tg48qMGF5f), jump in and ask me your technical questions. There's only a few days left of hacktoberfest, we got this!

## Step by Step Guide To Adding Your Code to this repo

(for beginners - or people who forget (like me))

1. fork this repo
2. clone it down to your local computer
3. commandline: yarn install
4. create a new branch in your local computer (like 'confused-cow'), commandline: git branch -b confused-cow
5. make code changes like this one (example is to add a new animation)
   1. create 2 new files in workspaces/animals/animations folder
      1. ConfusedCow.jsx
         1. Make sure your first div in the return statement has two classes, "animation" and "your-new-animation"
      2. confused-cow.css
         1. Please make all classes start with your animation name - that way they will be unique throughout other people's animations. (I imagine by the time you're done with this file, any CSS preprocessor will look amazing to you)
         2. Try using [BEM](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/) if you want, not required.
   2. Edit workspaces/animals/listOfanimals.js
      1. import your ConfusedCow at the top
      2. Add this react component to the list
         1. (Note, I added a few components in there to start, you only need to add one of yours)
6. save your code, then: git add ., git commit -m 'Added confused cow animation', git push --set-upstream origin confused-cow
7. somehow make a pull request using github -- I'm more familiar with gitlab, I need to look up the steps again for this....
8. then most likely I'll approve it and it'll be merged.

## Ideas for CSS Animations

You're more than welcome to take ideas from this list and go with it. Though you don't need to use animals or emotions from these lists, just keep it pg. As always in life, you get extra (fake and useless) points for alliteration.

1. Find an emotion
2. Find an animal
3. Put them together.
4. Double check someone hasn't already taken that combination
5. Profit??? (ha! no, that's not it)

### Some emotions

- excited
- happy
- sad
- confused
- cranky
- tired
- exhausted
- intrigued
- scared
- prideful
- amused
- stressed
- nervous
- annoyed
- mad
- delighted
- calm
- bored
- pleased
- content
- surprised
- guilty
- embarrassed
- amazed
- confident
- determined
- courageous
- gleeful

### Some animals

- dog
- cat
- dinosaur
- tiger
- snake
- horse
- chicken
- sloth
- sugar glider
- kangaroo
- dolphin
- otter
- seahorse
- raccoon (A.K.A. trash panda)
- panda
- octopus
- walrus
- coyote
- elephant
- cow
- shark
- turtle
- hampster
- turkey
- ducks
- pig
- deer
