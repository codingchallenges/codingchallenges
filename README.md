Whiteboarding
============
Welcome to whiteboarding codingchallenges. This repository will be updated every morning with a new code challenge.

Using this Repository
---------------------
You'll find each day's whiteboard problem in its own folder.

Getting a Copy of the Repo
--------------------------
If you haven't already, fork the repository on GitHub and clone your newly created repo down to your computer.

Adding a whiteboard problem
---------------------------
To add a problem to the whiteboard codingchallenges you can contact the owners or submit a pull request from your repository with only the changes to add a file to the codingchallenges' **master** branch

Submitting your Solutions
-------------------------
Once you're done, push your changes to GitHub and issue a pull request from your repository's master branch to **your** codingchallenges branch.

Updating the Repository
-----------------------
Every morning, when a new whiteboard problem is added, you'll need to sync your version of the repo with codingchallenges. Git won't automatically pull in upstream changes for you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to codingchallenges's version of the repo:

    git remote add upstream https://github.com/codingchallenges/codingchallenges.git

After you've done that, updating your repo is as simple as running the following:

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

This will check out your master branch and tell git to grab any changes made to the main repository and merge them into your branch.
