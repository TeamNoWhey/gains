# Git Workflow

## Welcome
Hello and welcome to our Github work flow page! Github makes it possible for multiple people to work on a single
project in an organized and managable way so no progress is lost. Any and all conflicts can be handled in a safe manner. I'm sure you can imagine how crazy things could get without version control, The key to a healthy Git-flow is communication, and I would like to stress this as much as I can going forward. Use Slack to communicate when you are doing anything. In the next section I will walk you through exactly what you need to do to make this github work flow as fluid as possible!

## Getting Started
In this section I will walk you through the steps necessary to make sure you are setup properly for work on the project.
We will be making forks of the original repository. Doing things this way adds an extra layer of protection on the master
repository, and helps ensure nobody deletes or accidentally pushes straight to the master.

### Step 1: Find our Project
Begin at our organization's github page:

```sh
  https://github.com/<organization name>
```

### Step 2: Clone your version locally
Navigate to the repository. This is the version you will want to clone onto your local machine. Copy the Link associated with your forked version, and clone locally.

```sh
$ git clone https://github.com/<yourUsernameHere>/responsible.git
```

### Step 3: Add upstream remote
cd into the project folder locally through your terminal, and add an upstream remote.

```sh
$ git remote add upstream <repository link>
```

After you create an upstream remote, make sure you double check that your remotes are setup properly

```sh
$ git remote -v
```

You should see two different remotes, origin (your personal fork) and upstream (Script Invaders original)

### Step 4: Create a branch

```sh
$ git checkout -b <branch or feature name>
```
Note: You always want to be working on a branch. Never be working on your master.


### Step 5: Staging your commits
One does not simply type "git add ." into your terminal every time you want to add files. Instead:

```sh
$ git diff <fileName>
```

Check out the changes made to certain files, and then add them individually:

```sh
$ git add <fileName>
```

Only add the files that you have made crucial changes to. Meaning that if you open the README file and add a space somewhere unintnetionally, use the following command to reset unwanted changes:

```sh
$ git checkout <unwantedFile>
```

### Step 7: On your Commits
ALWAYS BE COMMITING!
Keyword Starters at the beginning of any commit message:

1. close, closes, closed
2. fix, fixes, fixed
3. resolve, resolves, resolved
4. feat
5. docs
6. cleanup

It is good practice to put these words inside parenthesis. e.g. "(fix) changed all instances of foo into bar"
Some things to think about when making a commit:

1. Why is it necessary? It may fix a bug, it may add a feature, it may improve performance, reliability, stability, or just be a change for the sake of correctness.

2. How does it address the issue? For short obvious patches this part can be omitted, but it should be a high level description of what the approach was.

3. What effects does the patch have? (In addition to the obvious ones, this may include benchmarks, side effects, etc.)

On your final commit, before submitting a pull request, check on waffle.io and find the issue that this pull request will complete. If it you are working on issue #5, make your last commit message:

```sh
$ git commit -m "(feat) completed feature closes #5"
```

This will automatically close the issue on our konbon once the final pull request is merged. 

### Step 8: Rebasing

```sh
$ git pull --rebase <remote name>  <branch name>
```

For this project, we will use rebasing. Rebasing is a way to keep your commit history clean and organized. It is also important to remember to commit changes before pulling. When you rebase, it adds all the commits added to the main repo's master branch to your branch. This will ensure that you are keeping up with all the other work that other contributors have successfully merged into the master branch. PULL BEFORE YOU PUSH!! Communicating to your team when something has been changed and merged into the master is crutial. Make a note in the group Slack channel and everyone use the pull rebase when necessary.

### Step 9: Pushing to the repository
Once again, going to reiterate that you PULL before you PUSH. This is not only good practice, but will also save you a lot of unnecessary headache.

```sh
$ git push origin <branchName>
```

 Make sure you push to the proper branch name! (Do not push to master)

### Step 10: Submitting a Pull Request
Once you have pushed all of your changes for a feature to a branch into your personal repository, and you have a complete,
functioning addition to the project, it is time to submit a pull request! Navigate to your the repository on github.com and locate your branch which you pushed to. click the New Pull Request button. Make sure you are submitting the correct branch! It should look like this:

```sh
base fork: ScriptInvaders/responsible   base: master ... base fork: <yourUsername>/responsible   base: <branchName>
```

## Communication is key:
Slack @username (whoever is SCRUM Master) and infrom them that you submitted a pull request. As the SCRUM master, once merged, you respond to @username (whoever submitted pull request) "merged". If there is anything that may be conflicting, it is often important to tag whoever else might want to review this code before it is submitted. Sometimes people can be working in the same files, and it is important to keep a communication line open and know where everyone else is working, this includes letting others know what files you are working in.

### SCRUM Master Workflow
As SCRUM Master, it is your duty to review all submitted pull requests and resolve merge conflicts. Sometimes this might require another set of eyes, so don't feel bad if you aren't sure which code to keep when trying to resolve merge conflicts. Do not be afraid to ask for a second opinion! 

Consider the following:

1. Even though the pull request can be automatically merged, doesn't mean you automatically should. Read the code. Love the code.
2. Merge conflicts can get a bit tricky, and it is highly likely mistakes will be made somewhere along the line. Don't stress it.
3. If a anyone decides to not follow the style guide, wants to merge unnecessary things, or somehow creates funkiness with their contribution, don't be afraid to close the pull request and send it back with a detailed comment on what needs to be changed, just be constructive and let them know in a comment on the pull request exactly what was wrong with their request.

### How to resolve Merge Conflicts

### Step 1: Clone the master repo
Clone the original Script Invaders repository onto your local machine

```sh
$ git clone https://github.com/ScriptInvaders/responsible.git
```

### Step 2: Create a new branch

```sh
-- $ git checkout -b merge-conflict
```

### Step 3: Pull in user branch conflicts from submitted pull request

```sh
$ git pull http://github.com/<username>/responsible.git <conflictBranchName>
```

From here, you should be seeing some errors about merge conflicts in your terminal. This is a good thing! you have to see the conflicts before you can fix them!

Open the project in sublime. From here you are going to want to:

```sh
shift + command + f
```
Then search for:
```sh
>>>> or <<<<
```

The reason for this is because when you try to merge a branch that has conflicts, it presents you with this:
```sh
<<<<<<<
Between the less than signs and equal signs are changes made on the branch that is being merged into. In most cases,
this is the branch that I have currently checked out (i.e. HEAD).
The common ancestor version.
=======
Between the equal signs and the greater than signs are changes made on the branch that is being merged in. This is often a
feature/topic branch.
>>>>>>>
```
Once you decide what code to keep, make sure you delete the <, >, and = signs and save each file.
Keep going down the find results until you resolve all merge conflicts.

### Step 3: Add Changes
To start, type:
```sh
$ git status
```
You will see all the files which you have resolved merge conflicts which need to be added. As an extra saftey net, make sure you use:
```sh
git diff <fileName>
```
As opposed to typing "git add .". Review the changes you have made to ensure the correct code is all that remains.

### Step 4: Push
After you take care of merge conflicts, push the merged master back to the origin master. This can be the scary part.
Before you push back to the origin master of the original repository after fixing all conflicts, you may want to make sure
that your program is still working and still performing as expected. If there are tests, run the tests. Now is the time to
exercise caution, because it is often times very tough to go back from here. It isn't impossible, but it definitely creates a headache. Once pushed, this will close the pull request.


# Keys for Success
1. Communication is key for establishing a working github flow. Over communicate, through Slack, github, verbally, and any other means you feel necessary.
2. Never push origin master. It is easy to get in a habit of this, but just don't. The only exception is when you are resolving merge conflicts as a SCRUM master, and even then, you want to exercise extreme caution.
3. Make sure you are always on a branch, not on the master branch.
4. Even though you have permission, do not close your own pull requests. Have someone else look over your code.
5. As SCRUM Master, comment on others pull requests. This makes your github contributions go up, also it shows that you are a communicating part of a successful team! Respond to comments on your pull requests. Comment everywhere, even if it doesn't seem necessary, just do it, but stay professional.


