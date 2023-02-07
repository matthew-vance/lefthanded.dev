---
title: Bash Script Best Practices
tags: [bash]
---

When writing Bash scripts these are a few best practices to follow:

1. **Shebang**

   All bash scripts should start with a shebang. This tells the OS what binary to use as the script interpreter.

   :::tip

   `#!/usr/bin/env bash` is more portable than `#!/bin/bash`.

   :::

1. **Prefer long parameter notation**

   Using the full names of parameters makes the script easier to read.

   ```bash
   # Avoid:
   rm -rf -- "${dir}"

   # Good:
   rm --recursive --force -- "${dir}"
   ```

1. **Fail fast**

   Set the following options at the top of scripts:

   - `set -o errexit` causes the script to exit when a command fails.
   - `set -o nounset` will exit the script when it attempts to use an unset variable.
   - `set -o pipefail` makes it so the exit code of the failing command is the exit code reterned from the script.

   :::tip

   Add `|| true` to the end of any commands that are allowed to fail to prevent the script from exiting.

   :::

   :::tip

   If you need to access a variable that may not have been set, use `${VARNAME-}` instead of `$VARNAME` to safely reference it.

   :::

1. **Debugging**

   Use `set -o xtrace` to get trace output as the script executes.

1. **Provide help text**

   Every script should provide a help flag that prints descriptive text about the script and how to use it.

## Example Boilerplate

```bash
#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

usage() {
  cat <<EOF
Usage: $(basename "${BASH_SOURCE[0]}") [-h] [-v] [-f] -p param_value arg1 [arg2...]

Script description here.

Available options:

-h, --help      Print this help and exit
-v, --verbose   Print script debug info
-f, --flag      Some flag description
-p, --param     Some param description
EOF
  exit
}

main() {
    # script logic goes here
}

main "$@"

:::tip

Grant executable permissions for the script by running `chmod u+x this_script.sh`

:::
```
