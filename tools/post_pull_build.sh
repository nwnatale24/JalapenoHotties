# Nicholas Natale - 1/30/23
#
# Simple script to untar the dependencies needed for building
# and pushing the React app. 

echo "Untarring the node_modules, ios and android files (removing tars when done) ..."
tar xzf node_modules.tar.gz && rm -rf node_modules.tar.gz
tar xzf ios.tar.gz && rm -rf ios.tar.gz
tar xzf android.tar.gz && rm -rf android.tar.gz
echo "Done!"