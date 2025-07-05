# GitHub Multiple Account Setup Guide

## Method 1: SSH Configuration (Recommended)

### Step 1: Generate SSH keys for each account

```bash
# Personal account
ssh-keygen -t ed25519 -C "dhruv.singhal96@gmail.com" -f ~/.ssh/id_ed25519_personal

# Work account
ssh-keygen -t ed25519 -C "your.work.email@company.com" -f ~/.ssh/id_ed25519_work
```

### Step 2: Add SSH keys to ssh-agent

```bash
# Start ssh-agent
eval "$(ssh-agent -s)"

# Add personal key
ssh-add ~/.ssh/id_ed25519_personal

# Add work key
ssh-add ~/.ssh/id_ed25519_work
```

### Step 3: Add SSH keys to GitHub accounts

```bash
# Copy personal key
pbcopy < ~/.ssh/id_ed25519_personal.pub
# Go to GitHub (personal) → Settings → SSH Keys → Add new

# Copy work key
pbcopy < ~/.ssh/id_ed25519_work.pub
# Go to GitHub (work) → Settings → SSH Keys → Add new
```

### Step 4: Create SSH config file

Create/edit `~/.ssh/config`:

```
# Personal GitHub
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes

# Work GitHub
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes

# Default GitHub (optional - set to your most used account)
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes
```

### Step 5: Clone repositories using different accounts

```bash
# Personal repository
git clone git@github.com-personal:username/repo.git

# Work repository
git clone git@github.com-work:company/repo.git
```

### Step 6: Configure git for each repository

```bash
# For personal projects
cd /path/to/personal/project
git config user.name "Dhruv Singhal"
git config user.email "dhruv.singhal96@gmail.com"

# For work projects
cd /path/to/work/project
git config user.name "Your Work Name"
git config user.email "your.work.email@company.com"
```

## Method 2: Git Config with Different Directories

### Create a global .gitconfig structure

Edit `~/.gitconfig`:

```ini
[user]
    name = Dhruv Singhal
    email = dhruv.singhal96@gmail.com

[includeIf "gitdir:~/work/"]
    path = ~/.gitconfig-work

[includeIf "gitdir:~/personal/"]
    path = ~/.gitconfig-personal
```

### Create work config file `~/.gitconfig-work`:

```ini
[user]
    name = Your Work Name
    email = your.work.email@company.com
```

### Create personal config file `~/.gitconfig-personal`:

```ini
[user]
    name = Dhruv Singhal
    email = dhruv.singhal96@gmail.com
```

## Method 3: Using Git Credential Manager

### For macOS:

```bash
# Install GCM
brew tap microsoft/git
brew install --cask git-credential-manager-core

# Configure to use different accounts
git config --global credential.useHttpPath true
```

## Quick Switching Script

Create `~/bin/git-switch-account.sh`:

```bash
#!/bin/bash

if [ "$1" = "personal" ]; then
    git config --global user.name "Dhruv Singhal"
    git config --global user.email "dhruv.singhal96@gmail.com"
    echo "Switched to personal account"
elif [ "$1" = "work" ]; then
    git config --global user.name "Your Work Name"
    git config --global user.email "your.work.email@company.com"
    echo "Switched to work account"
else
    echo "Usage: git-switch-account [personal|work]"
fi

# Show current configuration
echo "Current git user:"
git config --global user.name
git config --global user.email
```

Make it executable:
```bash
chmod +x ~/bin/git-switch-account.sh
alias gitswitch='~/bin/git-switch-account.sh'
```

## Useful Commands

### Check current configuration
```bash
# Global config
git config --global user.name
git config --global user.email

# Local repo config
git config user.name
git config user.email

# List all configs
git config --list
```

### Change remote URL for existing repo
```bash
# From HTTPS to SSH (personal)
git remote set-url origin git@github.com-personal:username/repo.git

# From HTTPS to SSH (work)
git remote set-url origin git@github.com-work:company/repo.git
```

### Test SSH connections
```bash
# Test personal
ssh -T git@github.com-personal

# Test work
ssh -T git@github.com-work
```

## For Your Portfolio Project

Since this is a personal project, configure it:

```bash
cd /Users/dhruv.singhal/practice/test
git config user.name "Dhruv Singhal"
git config user.email "dhruv.singhal96@gmail.com"
```

Then when you push:
```bash
git remote add origin git@github.com-personal:dhruv-singhal96/portfolio.git
# or if using HTTPS with personal account
git remote add origin https://github.com/dhruv-singhal96/portfolio.git
```