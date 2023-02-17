:: Nicholas Natale - 1/30/23
::
:: Simple script to untar the dependencies needed for building
:: and pushing the React app. 

echo: 
echo "Untarring the node_modules, ios and android files (removing tars when done) ..."
tar xzf node_modules.tar.gz && del node_modules.tar.gz
tar xzf ios.tar.gz && del ios.tar.gz
tar xzf android.tar.gz && del android.tar.gz
echo:
echo "Done!"