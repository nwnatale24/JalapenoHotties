<center><h1>High-Steaks</h1></center>
<center><h3>A social app for sharing reviews and info about cheesesteaks around you!</h3></center>
<br></br>
<center><img src=./cheesesteak.png height=250 width=250 ></img></center>
<br></br>

# General Information
This is the source repository for the senior project web application named "High-Steaks". The contributors to this project are:
- Sean Davies
- Nicholas Natale
- Daniel Ortiz
- Lorenzo Semprevivo
- Nikolas Vasiliadis
- Felipe Viana. 

# Development Workflow
The general workflow for this project, using git, should be as follows. These instructions use terminal commands, but should be fairly similar when using GitHub Desktop:

1. Check what branch you are on with the command below. The result will be green with an asterisk (*) next to it. 
```
git branch --all
```
2. If you are not already on master, checkout the master branch
```
git checkout master
```
3. Update your local copy of the master branch
```
git pull
```
4. Create a branch off of the current master branch to create a new feature. 
```
git checkout -b <desired_name_of_branch>
<branch_to_base_off>

example:
git checkout -b add-login-screen-natale master

```

5. Do some programming/work/design. Edit some files, make some changes, work on what you want to add into the project. When you are done with the changes you created/the feature you made, do the following commands. These command will stage your changes for a commit, and then commit them:
```
git add -A
```
```
git commit -m "<short message about change>".

example:
git commit -m "added login screen feature."
```
6. Push your changes. Your changes exist on your local machine, but they do not exist on your remote branch so everybody can see them yet. Push them to your remote branch. ***MAKE SURE YOU ARE NOT ON THE MASTER BRANCH!***  
```
git push -u origin <your_branch_name>

example:
git push -u origin prototype-natale
```

# Standards / Naming Conventions
For naming the branches that are created, we should follow the following convention: 
"<short_description_of_feature>-<last_name>".   

This is so we can keep track of who created what branch and for organizational purposes.   

A couple example branch names are below:
- add-main-login-screen-natale
- add-grease-meter-davies
- bugfix-on-database-linking-valiliadis

# To Run the Front End UI
From the root directory of the project:
```
npm start
```
It should output: "webpack compiled successfully".

# To Run the FastAPI with the DB
From the root directory of the project:   

For Linux/macOS:
```
cd backend/fastapi/
```
```
./run_linux.sh
```
For Windows:
```
cd .\backend\fastapi\
```
```
.\run_windows.ps1
```
# First Time Repo Installation

***NOTE:*** The following code below must be used in a shell that cooresponds with your OS (macOS terminal, Microsoft Powershell, Git Bash, Terminal Emulator, etc).


1. Install the most recent LTS version of Node.js from this link (v18.14.1):
```
https://nodejs.org/en/download/
```

2. Make sure you have v9.5.0 of npm. 
```
npm install -g npm@9.5.0
```

3. Install all of the dependencies needed for the project. ***NOTE:*** This command must be run from the root directory of the project. <folder_path>..***/JalapenoHotties/***
```
npm install package.json
```