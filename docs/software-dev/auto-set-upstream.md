---
title: Automatic Set Upstream for New Git Branches
tags: [git]
---

Git supports automatically setting the upstream for new branches. Enabling this will cause `git push` to automatically create a remote branch with the same name as the local branch and push to it.

## Enable Automatic Set Upstream

Run the following in your terminal to enable automatic upstream setup:

```bash
git config --global --add --bool push.autoSetupRemote true
```
