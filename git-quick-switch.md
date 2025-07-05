# Quick GitHub Account Switching Guide

## Option 1: Quick Local Config (Simplest)

### For this portfolio project (Personal):
```bash
cd /Users/dhruv.singhal/practice/test
git config user.name "Dhruv Singhal"
git config user.email "dhruv.singhal96@gmail.com"
```

### For work projects:
```bash
cd /path/to/work/project
git config user.name "Your Work Name"
git config user.email "your.work@email.com"
```

## Option 2: SSH Setup (One-time setup)

### 1. Generate SSH keys:
```bash
# Personal
ssh-keygen -t ed25519 -C "dhruv.singhal96@gmail.com" -f ~/.ssh/github_personal

# Work
ssh-keygen -t ed25519 -C "work@email.com" -f ~/.ssh/github_work
```

### 2. Add to SSH agent:
```bash
ssh-add ~/.ssh/github_personal
ssh-add ~/.ssh/github_work
```

### 3. Create ~/.ssh/config:
```
Host personal.github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_personal

Host work.github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_work
```

### 4. Add keys to GitHub:
- Copy: `cat ~/.ssh/github_personal.pub`
- Go to GitHub (personal) → Settings → SSH Keys → New SSH key
- Repeat for work account

### 5. Clone repos:
```bash
# Personal
git clone git@personal.github.com:username/repo.git

# Work
git clone git@work.github.com:company/repo.git
```

## Option 3: HTTPS with Token

### Personal account:
```bash
git remote set-url origin https://personal_token@github.com/username/repo.git
```

### Work account:
```bash
git remote set-url origin https://work_token@github.com/company/repo.git
```

## Quick Commands

### Check current user:
```bash
git config user.name
git config user.email
```

### List all remotes:
```bash
git remote -v
```

### Change remote URL:
```bash
git remote set-url origin NEW_URL
```

## For Your Portfolio - Complete Setup:

```bash
# 1. Initialize git
cd /Users/dhruv.singhal/practice/test
git init

# 2. Set personal account
git config user.name "Dhruv Singhal"
git config user.email "dhruv.singhal96@gmail.com"

# 3. Add files
git add .
git commit -m "Initial portfolio commit"

# 4. Create repo on GitHub (personal account)
# Then add remote:
git remote add origin https://github.com/dhruv-singhal96/portfolio.git
# OR with SSH:
git remote add origin git@personal.github.com:dhruv-singhal96/portfolio.git

# 5. Push
git push -u origin main
```

## Pro Tip: Create Aliases

Add to ~/.zshrc or ~/.bashrc:
```bash
alias gitpersonal='git config user.name "Dhruv Singhal" && git config user.email "dhruv.singhal96@gmail.com"'
alias gitwork='git config user.name "Work Name" && git config user.email "work@email.com"'
```

Then just run `gitpersonal` or `gitwork` in any repo!