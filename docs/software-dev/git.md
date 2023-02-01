---
title: Git
description: Git tips and tricks.
tags: [git]
---

Git is an open-source distributed version control system.

## Resources

- [Official docs](https://git-scm.com/docs)
- [Cheat sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
- [Visual cheat sheet](https://ndpsoftware.com/git-cheatsheet.html#loc=index)

## Notes

### Automatic Set Upstream for New Branches

Git supports automatically setting the upstream for new branches. Enabling this will cause `git push` to automatically create a remote branch with the same name as the local branch and push to it.

#### Enable Automatic Set Upstream

Run the following in your terminal to enable automatic upstream setup:

```bash
git config --global --add --bool push.autoSetupRemote true
```
