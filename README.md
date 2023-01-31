# JalapenoHotties
Repo for Cheesesteak App

# First Time Installation Steps:

1. Make sure you have this repository cloned into an area that you have write access.
2. Download the 'node_modules.tar.gz' tar file. <br />
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

3. Untar the node module dependencies and remove the tar file.
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


# Build steps:
Before pushing your build to GitHub, do the following commands so Git does not yell at you for tracking a bajillion react dependencies. 

1. Tar up the node modules directory.
```
tar czf node_modules.tar.gz node_modules
```

