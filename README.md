# High-Steaks
The best app ever made in existence. 


## Development Workflow
The process for building this app should be as follows:
1. Do this
2. Do that

## First Time Installation Steps:

1. Download Node.js from the following link for your appropriate OS and follow the instructions. Default choices are fine. Make sure to install Chocolatey when prompted: https://nodejs.org/en/download/
---

2. Download Git Bash for your appropriate OS. If you are using a Mac or Linux device, the terminal emulator is fine, and you may omit: https://git-scm.com/downloads
---

3. Setup SSH keys in Git Bash or terminal using GitHub's instructions for your appropriate OS.   
```
* Cick and open Git Bash terminal or terminal emulator *
```
```
cd .ssh
```
Follow the guided instructions to create the key after pasting and running this next command:
```
ssh-keygen -t ed25519 -C "<your_github_account_email>"
```
Once created, open the id_ed25519.pub file. _**MAKE SURE TO OPEN THE '.pub' FILE ONLY.**_
```
vi id_ed25519.pub
```
Copy the entire line in the file to your clipboard. Then open a separate web browser and navigate to https://github.com/settings/keys:   
Click on the green "New SSH Key" button. For title, put whatever. Ex: School Laptop   
Paste the line copied from your clipboard into the 'Key' section. Leave 'Key type' alone.   
Press the green "Add SSH Key" button.
<br />

---



4. Using Git Bash or terminal, clone this repository in a desired directory where you have write access:   
Navigate to: https://github.com/nwnatale24/JalapenoHotties and sign in to your GitHub account.   
Press green 'Code' button.   
Copy the SSH link.   
Open Git Bash or terminal.   
Run command:
```
git clone <copied_ssh_clone_link_from_github>
```
---
5. Download the 'node_modules.tar.gz' tar file. <br />
- For Windows, paste this link into a web browser, and move the file into the root directory of this repository.
```
https://github.com/nwnatale24/JalapenoHotties/releases/download/v1.0-node-module-deps/node_modules.tar.gz
```
- For Linux/macOS, in a terminal:
```
cd <root_directory_of_this_repository>
```
```
wget https://github.com/nwnatale24/JalapenoHotties/releases/download/v1.0-node-module-deps/node_modules.tar.gz
```
 **Note**: This must be downloaded elsewhere since the file size too big for git to track.

<br />

5. Untar the node module dependencies and remove the tar file.
- For Linux/macOS, run the 'post_pull_build.sh' script:
```
cd <root_directory_of_this_repository>
```
```
bash post_pull_build.sh
```
- For Windows, open a cmd prompt, and run the script:
```
cd <root_directory_of_this_repository>
```
```
post_pull_build-windows.bat
```


## Build steps:
Before pushing your build to GitHub, do the following commands so Git does not yell at you for tracking a bajillion react dependencies. 

1. Tar up the node modules directory.
```
tar czf node_modules.tar.gz node_modules
```

