#!/bin/bash

echo "🔧 Setting up multiple GitHub accounts..."

# Function to setup SSH keys
setup_ssh_keys() {
    echo "📝 Generating SSH keys..."
    
    # Check if keys already exist
    if [ ! -f ~/.ssh/id_ed25519_personal ]; then
        echo "Creating personal SSH key..."
        ssh-keygen -t ed25519 -C "dhruv.singhal96@gmail.com" -f ~/.ssh/id_ed25519_personal -N ""
    else
        echo "Personal SSH key already exists"
    fi
    
    if [ ! -f ~/.ssh/id_ed25519_work ]; then
        echo "Creating work SSH key..."
        echo "Enter your work email: "
        read work_email
        ssh-keygen -t ed25519 -C "$work_email" -f ~/.ssh/id_ed25519_work -N ""
    else
        echo "Work SSH key already exists"
    fi
    
    # Start ssh-agent and add keys
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519_personal
    ssh-add ~/.ssh/id_ed25519_work
    
    echo "✅ SSH keys generated!"
    echo ""
    echo "📋 Copy these keys to your GitHub accounts:"
    echo ""
    echo "PERSONAL GitHub SSH Key:"
    echo "------------------------"
    cat ~/.ssh/id_ed25519_personal.pub
    echo ""
    echo "WORK GitHub SSH Key:"
    echo "--------------------"
    cat ~/.ssh/id_ed25519_work.pub
    echo ""
}

# Function to create SSH config
create_ssh_config() {
    echo "📝 Creating SSH config..."
    
    # Backup existing config if it exists
    if [ -f ~/.ssh/config ]; then
        cp ~/.ssh/config ~/.ssh/config.backup
        echo "Backed up existing SSH config to ~/.ssh/config.backup"
    fi
    
    # Create new config
    cat > ~/.ssh/config << 'EOF'
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

# Default GitHub (personal)
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes
EOF
    
    chmod 600 ~/.ssh/config
    echo "✅ SSH config created!"
}

# Function to create git switch script
create_switch_script() {
    echo "📝 Creating git account switch script..."
    
    mkdir -p ~/bin
    
    cat > ~/bin/git-account << 'EOF'
#!/bin/bash

case "$1" in
    personal)
        git config user.name "Dhruv Singhal"
        git config user.email "dhruv.singhal96@gmail.com"
        echo "🏠 Switched to personal account"
        ;;
    work)
        echo "Enter your work name: "
        read work_name
        echo "Enter your work email: "
        read work_email
        git config user.name "$work_name"
        git config user.email "$work_email"
        echo "🏢 Switched to work account"
        ;;
    status)
        echo "Current git configuration:"
        echo "Name: $(git config user.name)"
        echo "Email: $(git config user.email)"
        ;;
    *)
        echo "Usage: git-account [personal|work|status]"
        echo ""
        echo "Commands:"
        echo "  personal - Switch to personal GitHub account"
        echo "  work     - Switch to work GitHub account"
        echo "  status   - Show current configuration"
        ;;
esac
EOF
    
    chmod +x ~/bin/git-account
    
    # Add to PATH if not already there
    if ! echo $PATH | grep -q "$HOME/bin"; then
        echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc
        echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bash_profile
    fi
    
    echo "✅ Git account switch script created!"
}

# Main setup
echo "This script will help you set up multiple GitHub accounts"
echo ""

# Setup SSH keys
setup_ssh_keys

echo ""
echo "⚠️  IMPORTANT: Add the SSH keys above to your GitHub accounts:"
echo "1. Go to GitHub → Settings → SSH and GPG keys"
echo "2. Click 'New SSH key'"
echo "3. Paste the appropriate key for each account"
echo ""
echo "Press Enter when you've added both keys to continue..."
read

# Create SSH config
create_ssh_config

# Create switch script
create_switch_script

# Test connections
echo ""
echo "🧪 Testing SSH connections..."
echo "Personal account:"
ssh -T git@github.com-personal 2>&1 | grep -E "Hi|authenticated"
echo ""
echo "Work account:"
ssh -T git@github.com-work 2>&1 | grep -E "Hi|authenticated"

echo ""
echo "✅ Setup complete!"
echo ""
echo "📚 How to use:"
echo ""
echo "1. Clone repositories:"
echo "   Personal: git clone git@github.com-personal:username/repo.git"
echo "   Work: git clone git@github.com-work:company/repo.git"
echo ""
echo "2. Switch accounts in current directory:"
echo "   git-account personal"
echo "   git-account work"
echo "   git-account status"
echo ""
echo "3. For this portfolio project:"
echo "   cd /Users/dhruv.singhal/practice/test"
echo "   git-account personal"
echo "   git init"
echo "   git remote add origin git@github.com-personal:dhruv-singhal96/portfolio.git"
echo ""

# Configure current project
echo "Would you like to configure this portfolio project for your personal account? (y/n)"
read configure_portfolio

if [ "$configure_portfolio" = "y" ]; then
    git config user.name "Dhruv Singhal"
    git config user.email "dhruv.singhal96@gmail.com"
    echo "✅ Portfolio project configured for personal account!"
fi