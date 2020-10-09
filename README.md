# CircleCI sample integration - NodeJS

- Run tests on PR
- Deploy to development environment upon merging to master
- Deploy to staging when making a release
- 3rd party services with different deployment keys

- split tests??? (maybe not if they're not big enough)
- https://github.com/datapunkz/circle-cli-node/blob/main/.circleci/config.yml


## Questions

Do we have any autocomplete feature for writing YML files?
What's the best way to check versions for orbs? GitHub?
Does the order of orbs matter at all?


Why is this name discrepancy:

https://circleci.com/developer/orbs/orb/circleci/heroku

Usage Examples
use_heroku_commands <- why not just write this normally?
Why underscores?
https://github.com/CircleCI-Public/node-orb/blob/master/src/examples/install_nodejs.yml <- it's from here, would be nice to have some frontmatter to provide actual name...



