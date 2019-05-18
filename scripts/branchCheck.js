const branchName = require('current-git-branch');

const MAIN_BRANCH_NAMES = [
    'develop',
    'master'
];

const BRANCH_PREFIX_NAMES = [
    'bugfix',
    'feature',
    'hotfix',
    'release',
    'test'
];

(function checkBranchNaming() {
    const branchRegex = new RegExp(`^(${MAIN_BRANCH_NAMES.join('|')})|((${BRANCH_PREFIX_NAMES.join('|')})/(([a-z]+((-[a-z]+)+)?)|(\\d+\\.\\d+\\.\\d+)))$`);

    const currentBranchName = branchName();

    if (!branchRegex.test(currentBranchName)) {
        console.error(`\nBranch naming convention must adhere to ${branchRegex}\n`);

        process.exit(1);
    }
}());
