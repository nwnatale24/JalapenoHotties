# Nicholas Natale - 1/30/23
#
# Simple script to tar up the dependencies needed for building
# and pushing the React app. 

echo "\nTarring up the node_modules, ios and android folders (removing folders) ..."
tar czf node_modules.tar.gz node_modules && rm -rf node_modules
tar czf ios.tar.gz ios && rm -rf ios
tar czf android.tar.gz android && rm -rf android
echo "\nDone!\n"