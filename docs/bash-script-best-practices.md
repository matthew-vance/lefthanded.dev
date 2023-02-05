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
trap cleanup SIGINT SIGTERM ERR EXIT

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

cleanup() {
  trap - SIGINT SIGTERM ERR EXIT
  # script cleanup here
}

setup_colors() {
  if [[ -t 2 ]] && [[ -z "${NO_COLOR-}" ]] && [[ "${TERM-}" != "dumb" ]]; then
    NOFORMAT='\033[0m' RED='\033[0;31m' GREEN='\033[0;32m' ORANGE='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' YELLOW='\033[1;33m'
  else
    NOFORMAT='' RED='' GREEN='' ORANGE='' BLUE='' PURPLE='' CYAN='' YELLOW=''
  fi
}

msg() {
  echo >&2 -e "${1-}"
}

die() {
  local msg=$1
  local code=${2-1} # default exit status 1
  msg "$msg"
  exit "$code"
}

parse_params() {
  # default values of variables set from params
  flag=0
  param=''

  while :; do
    case "${1-}" in
    -h | --help) usage ;;
    -v | --verbose) set -o xtrace ;;
    --no-color) NO_COLOR=1 ;;
    -f | --flag) flag=1 ;; # example flag
    -p | --param) # example named parameter
      param="${2-}"
      shift
      ;;
    -?*) die "Unknown option: $1" ;;
    *) break ;;
    esac
    shift
  done

  args=("$@")

  # check required params and arguments
  [[ -z "${param-}" ]] && die "Missing required parameter: param"
  [[ ${#args[@]} -eq 0 ]] && die "Missing script arguments"

  return 0
}

parse_params "$@"
setup_colors

# script logic here

msg "${RED}Read parameters:${NOFORMAT}"
msg "- flag: ${flag}"
msg "- param: ${param}"
msg "- arguments: ${args[*]-}"

```

:::tip

Grant executable permissions for the script by running `chmod u+x this_script.sh`

:::
