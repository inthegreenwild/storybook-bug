# Storybook Compositions bug

In this repo, assume that each package is actually a separate project. They are all composed together under one main storybook. 

Run commands: 

npm i
npm run extract 
npm run preview

Open browser: 
http://localhost:6001

Expected behavior
As I move across storybooks, the addons tab should reflect what the storybook collection uses.

Actual behavior: 
As I move across storybooks, only the master storybook addons are available in all storybooks. 

System:
OS: macOS 10.15.6
CPU: (6) x64 Intel(R) Core(TM) i5-8500B CPU @ 3.00GHz
Binaries:
Node: 14.10.1 - ~/.nvm/versions/node/v14.10.1/bin/node
Yarn: 1.22.5 - ~/.nvm/versions/node/v14.10.1/bin/yarn
npm: 6.14.8 - ~/.nvm/versions/node/v14.10.1/bin/npm
Browsers:
Chrome: 85.0.4183.102
Firefox: 80.0
Safari: 13.1.2

Additional context
Add any other context about the problem here.
