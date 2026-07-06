const cards = [
  // -------------------------
  // Setup + Repo Basics
  // -------------------------
  {
    id: 1,
    category: 'Setup',
    difficulty: 'Beginner',
    prompt: 'You want to create a new Git repository in the current folder.',
    answers: ['git init', 'init'],
    command: 'git init',
    explanation: 'git init creates a new local Git repository in the current directory.',
  },
  {
    id: 2,
    category: 'Setup',
    difficulty: 'Beginner',
    prompt: 'You want to copy an existing remote repository onto your computer.',
    answers: ['git clone', 'clone'],
    command: 'git clone <repo-url>',
    explanation: 'git clone downloads a remote repository and sets it up locally.',
  },
  {
    id: 3,
    category: 'Status',
    difficulty: 'Beginner',
    prompt: 'You want to check which files have been changed, staged, or committed.',
    answers: ['git status', 'status'],
    command: 'git status',
    explanation: 'git status shows the current state of your working directory and staging area.',
  },

  // -------------------------
  // Staging + Committing
  // -------------------------
  {
    id: 4,
    category: 'Staging',
    difficulty: 'Beginner',
    prompt: 'You want to stage all current changes before committing.',
    answers: ['git add .', 'git add -A', 'add .', 'add -A'],
    command: 'git add .',
    explanation: 'git add . stages changes in the current directory so they can be committed.',
  },
  {
    id: 5,
    category: 'Staging',
    difficulty: 'Beginner',
    prompt: 'You want to stage only one specific path instead of every changed file.',
    answers: ['git add <path>', 'git add path', 'add <path>', 'add path'],
    command: 'git add <path>',
    explanation: 'git add <path> stages a specific file or folder.',
  },
  {
    id: 6,
    category: 'Committing',
    difficulty: 'Beginner',
    prompt: 'You want to save staged changes with a short commit message.',
    answers: ['git commit -m', 'git commit -m "message"', 'commit -m', 'commit'],
    command: 'git commit -m "message"',
    explanation: 'git commit saves staged changes to your local repository with a message describing the change.',
  },
  {
    id: 7,
    category: 'Committing',
    difficulty: 'Intermediate',
    prompt: 'You want to update the most recent commit instead of creating a new one.',
    answers: ['git commit --amend', 'commit --amend'],
    command: 'git commit --amend',
    explanation: 'git commit --amend lets you modify the previous commit, often to fix its message or add forgotten staged changes.',
  },

  // -------------------------
  // History + Inspection
  // -------------------------
  {
    id: 8,
    category: 'History',
    difficulty: 'Beginner',
    prompt: 'You want to see the commit history for the repository.',
    answers: ['git log', 'log'],
    command: 'git log',
    explanation: 'git log displays the commit history for the current branch.',
  },
  {
    id: 9,
    category: 'History',
    difficulty: 'Intermediate',
    prompt: 'You want to see a shorter, one-line version of the commit history.',
    answers: ['git log --oneline', 'log --oneline'],
    command: 'git log --oneline',
    explanation: 'git log --oneline displays each commit on one compact line.',
  },
  {
    id: 10,
    category: 'Inspection',
    difficulty: 'Beginner',
    prompt: 'You want to see what changed in your unstaged files.',
    answers: ['git diff', 'diff'],
    command: 'git diff',
    explanation: 'git diff shows unstaged changes in your working directory.',
  },
  {
    id: 11,
    category: 'Inspection',
    difficulty: 'Intermediate',
    prompt: 'You want to see what changes are staged and ready to be committed.',
    answers: ['git diff --staged', 'git diff --cached', 'diff --staged', 'diff --cached'],
    command: 'git diff --staged',
    explanation: 'git diff --staged shows the changes that are currently staged.',
  },
  {
    id: 12,
    category: 'Inspection',
    difficulty: 'Intermediate',
    prompt: 'You want to inspect the details of one specific commit.',
    answers: ['git show', 'git show <commit>', 'show', 'show <commit>'],
    command: 'git show <commit>',
    explanation: 'git show displays information and changes from a specific commit.',
  },

  // -------------------------
  // Branching
  // -------------------------
  {
    id: 13,
    category: 'Branches',
    difficulty: 'Beginner',
    prompt: 'You want to list all local branches.',
    answers: ['git branch', 'branch'],
    command: 'git branch',
    explanation: 'git branch lists local branches and shows which branch you are currently on.',
  },
  {
    id: 14,
    category: 'Branches',
    difficulty: 'Beginner',
    prompt: 'You want to create a new branch and switch to it immediately.',
    answers: [
      'git switch -c <branch-name>',
      'git switch -c branch',
      'git checkout -b <branch-name>',
      'git checkout -b branch',
      'switch -c <branch-name>',
      'checkout -b <branch-name>',
    ],
    command: 'git switch -c <branch-name>',
    explanation: 'git switch -c creates a new branch and checks it out in one step.',
  },
  {
    id: 15,
    category: 'Branches',
    difficulty: 'Beginner',
    prompt: 'You want to move to an existing branch.',
    answers: ['git switch <branch-name>', 'git switch branch', 'switch <branch-name>', 'switch branch'],
    command: 'git switch <branch-name>',
    explanation: 'git switch changes your working directory to another existing branch.',
  },
  {
    id: 16,
    category: 'Branches',
    difficulty: 'Intermediate',
    prompt: 'You want to rename your current branch.',
    answers: ['git branch -m <new-branch-name>', 'git branch -m branch', 'branch -m <new-branch-name>'],
    command: 'git branch -m <new-branch-name>',
    explanation: 'git branch -m renames the current branch.',
  },
  {
    id: 17,
    category: 'Branches',
    difficulty: 'Intermediate',
    prompt: 'You want to delete a local branch that has already been merged.',
    answers: ['git branch -d <branch-name>', 'git branch -d branch', 'branch -d <branch-name>'],
    command: 'git branch -d <branch-name>',
    explanation: 'git branch -d safely deletes a local branch if Git knows it has already been merged.',
  },

  // -------------------------
  // Merging + Rebasing
  // -------------------------
  {
    id: 18,
    category: 'Merging',
    difficulty: 'Intermediate',
    prompt: 'You want to combine another branch into your current branch.',
    answers: ['git merge <branch-name>', 'git merge branch', 'merge <branch-name>', 'merge branch'],
    command: 'git merge <branch-name>',
    explanation: 'git merge brings changes from another branch into your current branch.',
  },
  {
    id: 19,
    category: 'Merging',
    difficulty: 'Intermediate',
    prompt: 'You started a merge but want to cancel it and return to the previous state.',
    answers: ['git merge --abort', 'merge --abort'],
    command: 'git merge --abort',
    explanation: 'git merge --abort cancels an in-progress merge and restores the branch to its pre-merge state.',
  },
  {
    id: 20,
    category: 'Rebase',
    difficulty: 'Advanced',
    prompt: 'You want to replay your current branch commits on top of another branch.',
    answers: ['git rebase <branch-name>', 'git rebase branch', 'rebase <branch-name>', 'rebase branch'],
    command: 'git rebase <branch-name>',
    explanation: 'git rebase moves or reapplies commits from your current branch onto another base branch.',
  },
  {
    id: 21,
    category: 'Rebase',
    difficulty: 'Advanced',
    prompt: 'You are in the middle of a rebase and want to cancel it.',
    answers: ['git rebase --abort', 'rebase --abort'],
    command: 'git rebase --abort',
    explanation: 'git rebase --abort cancels an in-progress rebase and returns to the previous state.',
  },
  {
    id: 22,
    category: 'Rebase',
    difficulty: 'Advanced',
    prompt: 'You resolved conflicts during a rebase and want to continue.',
    answers: ['git rebase --continue', 'rebase --continue'],
    command: 'git rebase --continue',
    explanation: 'git rebase --continue resumes a rebase after conflicts have been resolved and staged.',
  },

  // -------------------------
  // Remotes
  // -------------------------
  {
    id: 23,
    category: 'Remote',
    difficulty: 'Beginner',
    prompt: 'You want to see which remote repositories are connected to your project.',
    answers: ['git remote -v', 'remote -v'],
    command: 'git remote -v',
    explanation: 'git remote -v lists remote repositories and their fetch/push URLs.',
  },
  {
    id: 24,
    category: 'Remote',
    difficulty: 'Intermediate',
    prompt: 'You want to connect your local repository to a remote repository.',
    answers: ['git remote add origin <url>', 'git remote add <name> <url>', 'remote add origin'],
    command: 'git remote add origin <repo-url>',
    explanation: 'git remote add creates a connection between your local repository and a remote repository.',
  },
  {
    id: 25,
    category: 'Remote',
    difficulty: 'Beginner',
    prompt: 'You want to download new commits from a remote repository without merging them yet.',
    answers: ['git fetch', 'fetch'],
    command: 'git fetch',
    explanation: 'git fetch downloads remote changes but does not automatically merge them into your current branch.',
  },
  {
    id: 26,
    category: 'Remote',
    difficulty: 'Beginner',
    prompt: 'You want to download commits from a remote repository and merge them into your current branch.',
    answers: ['git pull', 'pull'],
    command: 'git pull',
    explanation: 'git pull fetches remote changes and integrates them into your current branch.',
  },
  {
    id: 27,
    category: 'Remote',
    difficulty: 'Beginner',
    prompt: 'You want to send your local commits to a remote repository.',
    answers: ['git push', 'push'],
    command: 'git push',
    explanation: 'git push uploads your local commits to a remote repository.',
  },
  {
    id: 28,
    category: 'Remote',
    difficulty: 'Intermediate',
    prompt: 'You want to push your current branch and set its upstream remote branch.',
    answers: ['git push -u origin <branch-name>', 'git push --set-upstream origin <branch-name>', 'push -u origin'],
    command: 'git push -u origin <branch-name>',
    explanation: 'git push -u uploads the branch and sets the default remote tracking branch for future pushes and pulls.',
  },

  // -------------------------
  // Undoing Changes
  // -------------------------
  {
    id: 29,
    category: 'Undo',
    difficulty: 'Beginner',
    prompt: 'You accidentally staged changes and want to unstage them without deleting your work.',
    answers: ['git restore --staged <path>', 'git restore --staged', 'restore --staged <path>', 'restore --staged'],
    command: 'git restore --staged <path>',
    explanation: 'git restore --staged removes changes from the staging area but keeps them in your working directory.',
  },
  {
    id: 30,
    category: 'Undo',
    difficulty: 'Intermediate',
    prompt: 'You want to discard unstaged changes in your working directory.',
    answers: ['git restore <path>', 'git restore .', 'restore <path>', 'restore .'],
    command: 'git restore <path>',
    explanation: 'git restore <path> discards unstaged changes. This can permanently remove local edits.',
  },
  {
    id: 31,
    category: 'Undo',
    difficulty: 'Intermediate',
    prompt: 'You want to create a new commit that undoes a previous commit.',
    answers: ['git revert <commit>', 'git revert', 'revert <commit>', 'revert'],
    command: 'git revert <commit>',
    explanation: 'git revert creates a new commit that reverses the changes from an earlier commit.',
  },
  {
    id: 32,
    category: 'Undo',
    difficulty: 'Advanced',
    prompt: 'You want to move your branch pointer back to a previous commit and keep changes unstaged.',
    answers: ['git reset <commit>', 'git reset --mixed <commit>', 'reset <commit>', 'reset --mixed <commit>'],
    command: 'git reset <commit>',
    explanation: 'git reset moves the branch pointer. The default mixed reset keeps changes in the working directory but unstaged.',
  },
  {
    id: 33,
    category: 'Undo',
    difficulty: 'Advanced',
    prompt: 'You want to reset to a previous commit and discard all later local changes.',
    answers: ['git reset --hard <commit>', 'reset --hard <commit>'],
    command: 'git reset --hard <commit>',
    explanation: 'git reset --hard moves the branch pointer and discards changes from the working directory and staging area.',
  },

  // -------------------------
  // Stashing
  // -------------------------
  {
    id: 34,
    category: 'Stash',
    difficulty: 'Intermediate',
    prompt: 'You want to temporarily save uncommitted work without making a commit.',
    answers: ['git stash', 'git stash push', 'stash', 'stash push'],
    command: 'git stash',
    explanation: 'git stash temporarily shelves uncommitted changes so you can return to a clean working directory.',
  },
  {
    id: 35,
    category: 'Stash',
    difficulty: 'Intermediate',
    prompt: 'You want to see the list of saved stashes.',
    answers: ['git stash list', 'stash list'],
    command: 'git stash list',
    explanation: 'git stash list displays saved stashes.',
  },
  {
    id: 36,
    category: 'Stash',
    difficulty: 'Intermediate',
    prompt: 'You want to reapply the most recent stash and remove it from the stash list.',
    answers: ['git stash pop', 'stash pop'],
    command: 'git stash pop',
    explanation: 'git stash pop reapplies the latest stash and removes it from the stash list.',
  },
  {
    id: 37,
    category: 'Stash',
    difficulty: 'Intermediate',
    prompt: 'You want to reapply the most recent stash but keep it saved in the stash list.',
    answers: ['git stash apply', 'stash apply'],
    command: 'git stash apply',
    explanation: 'git stash apply reapplies a stash without deleting it from the stash list.',
  },

  // -------------------------
  // Tags
  // -------------------------
  {
    id: 38,
    category: 'Tags',
    difficulty: 'Intermediate',
    prompt: 'You want to list all tags in the repository.',
    answers: ['git tag', 'tag'],
    command: 'git tag',
    explanation: 'git tag lists tags, which are often used to mark release versions.',
  },
  {
    id: 39,
    category: 'Tags',
    difficulty: 'Intermediate',
    prompt: 'You want to create a tag for the current commit.',
    answers: ['git tag <tag-name>', 'git tag tag', 'tag <tag-name>', 'tag tag'],
    command: 'git tag <tag-name>',
    explanation: 'git tag <tag-name> creates a lightweight tag at the current commit.',
  },
  {
    id: 40,
    category: 'Tags',
    difficulty: 'Intermediate',
    prompt: 'You want to push tags to the remote repository.',
    answers: ['git push --tags', 'push --tags'],
    command: 'git push --tags',
    explanation: 'git push --tags uploads local tags to the remote repository.',
  },

  // -------------------------
  // Collaboration + Sync
  // -------------------------
  {
    id: 41,
    category: 'Collaboration',
    difficulty: 'Intermediate',
    prompt: 'You want to see all branches, including remote-tracking branches.',
    answers: ['git branch -a', 'branch -a'],
    command: 'git branch -a',
    explanation: 'git branch -a lists both local branches and remote-tracking branches.',
  },
  {
    id: 42,
    category: 'Collaboration',
    difficulty: 'Intermediate',
    prompt: 'You want to remove references to remote branches that no longer exist.',
    answers: ['git fetch --prune', 'fetch --prune'],
    command: 'git fetch --prune',
    explanation: 'git fetch --prune cleans up stale remote-tracking branches.',
  },
  {
    id: 43,
    category: 'Collaboration',
    difficulty: 'Intermediate',
    prompt: 'You want to compare your current branch with another branch.',
    answers: ['git diff <branch-name>', 'diff <branch-name>'],
    command: 'git diff <branch-name>',
    explanation: 'git diff <branch-name> shows differences between your current branch and another branch.',
  },

  // -------------------------
  // Cleanup + Maintenance
  // -------------------------
  {
    id: 44,
    category: 'Cleanup',
    difficulty: 'Intermediate',
    prompt: 'You want to remove untracked files from your working directory.',
    answers: ['git clean -f', 'clean -f'],
    command: 'git clean -f',
    explanation: 'git clean -f removes untracked files. Use carefully because deleted files may not be recoverable.',
  },
  {
    id: 45,
    category: 'Cleanup',
    difficulty: 'Intermediate',
    prompt: 'You want to preview which untracked files would be removed before deleting them.',
    answers: ['git clean -n', 'git clean --dry-run', 'clean -n', 'clean --dry-run'],
    command: 'git clean -n',
    explanation: 'git clean -n performs a dry run and shows what would be deleted without actually deleting anything.',
  },

  // -------------------------
  // Help + Configuration
  // -------------------------
  {
    id: 46,
    category: 'Help',
    difficulty: 'Beginner',
    prompt: 'You want help understanding how a Git command works.',
    answers: ['git help <command>', 'git <command> --help', 'git help', 'help'],
    command: 'git help <command>',
    explanation: 'git help opens documentation for a Git command.',
  },
  {
    id: 47,
    category: 'Config',
    difficulty: 'Beginner',
    prompt: 'You want to see your Git configuration settings.',
    answers: ['git config --list', 'config --list'],
    command: 'git config --list',
    explanation: 'git config --list shows Git configuration values, including user info and aliases.',
  },
  {
    id: 48,
    category: 'Config',
    difficulty: 'Beginner',
    prompt: 'You want to set your Git username globally.',
    answers: ['git config --global user.name', 'config --global user.name'],
    command: 'git config --global user.name "Your Name"',
    explanation: 'git config --global user.name sets the author name used for commits on your machine.',
  },
  {
    id: 49,
    category: 'Config',
    difficulty: 'Beginner',
    prompt: 'You want to set your Git email globally.',
    answers: ['git config --global user.email', 'config --global user.email'],
    command: 'git config --global user.email "you@example.com"',
    explanation: 'git config --global user.email sets the author email used for commits on your machine.',
  },

  // -------------------------
  // Advanced Useful Commands
  // -------------------------
  {
    id: 50,
    category: 'Advanced',
    difficulty: 'Advanced',
    prompt: 'You want to find which commit introduced a bug by testing commits step by step.',
    answers: ['git bisect', 'bisect'],
    command: 'git bisect',
    explanation: 'git bisect helps locate the commit that introduced a bug using a binary search through history.',
  },
  {
    id: 51,
    category: 'Advanced',
    difficulty: 'Advanced',
    prompt: 'You want to apply one specific commit from another branch onto your current branch.',
    answers: ['git cherry-pick <commit>', 'git cherry-pick', 'cherry-pick <commit>', 'cherry-pick'],
    command: 'git cherry-pick <commit>',
    explanation: 'git cherry-pick applies the changes from a specific commit onto your current branch.',
  },
  {
    id: 52,
    category: 'Advanced',
    difficulty: 'Advanced',
    prompt: 'You want to see who last changed each line of a tracked file.',
    answers: ['git blame <path>', 'git blame', 'blame <path>', 'blame'],
    command: 'git blame <path>',
    explanation: 'git blame shows line-by-line commit and author information for a tracked file.',
  },
];

export default cards;