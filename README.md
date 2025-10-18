# Git & GitHub Workshop

A hands-on workshop to learn Git, GitHub, and collaborative development workflows.

## 🎯 Learning Objectives

By the end of this workshop, you'll be able to:
- Create and manage branches
- Make meaningful commits
- Open and review Pull Requests
- Resolve merge conflicts
- Set up CI/CD with GitHub Actions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account

### Setup

1. Clone this repository:
```bash
git clone https://github.com/YOUR-USERNAME/git-workshop.git
cd git-workshop
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📚 Workshop Structure

### Part 1: Git Basics (15 min)
- What is version control?
- Understanding commits, staging, and pushing
- Basic Git commands

### Part 2: Branching (20 min)
- Creating feature branches
- Working in isolation
- Branch naming conventions

### Part 3: Collaboration (25 min)
- Pull Requests
- Code review
- Merge conflicts (and how to resolve them!)

### Part 4: Best Practices (15 min)
- Commit message conventions
- Protected branches
- Continuous Integration

### Part 5: Hands-on Exercise (30 min)
- Build features together as a team
- Practice the full workflow
- Ship code!

## 🌿 Branch Structure

- `main` - Production-ready code
- `feat/*` - Feature branches
- `fix/*` - Bug fix branches
- `chore/*` - Maintenance tasks

## 📝 Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `chore:` Maintenance tasks
- `refactor:` Code refactoring

Example:
```bash
git commit -m "feat: add user authentication"
```

## 🔧 Useful Commands

```bash
# Check status
git status

# Create new branch
git checkout -b feat/my-feature

# Stage changes
git add .

# Commit
git commit -m "feat: add new feature"

# Push to remote
git push origin feat/my-feature

# Update from main
git checkout main
git pull
git checkout feat/my-feature
git merge main
```

## 🤝 Contributing

1. Create a new branch from `main`
2. Make your changes
3. Commit with a descriptive message
4. Push your branch
5. Open a Pull Request
6. Request review from teammates
7. Address feedback
8. Merge when approved!

## 📖 Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Learn Git Branching](https://learngitbranching.js.org/)

## 💡 Tips

- Commit early and often
- Write meaningful commit messages
- Pull from main regularly to stay updated
- Ask for help when stuck!

## 🐛 Troubleshooting

**Merge conflict?**
1. Don't panic!
2. Open the conflicted file
3. Look for `<<<<<<<`, `=======`, `>>>>>>>`
4. Decide what to keep
5. Remove the markers
6. Save, add, commit

**Committed to wrong branch?**
```bash
git branch feat/correct-branch
git reset --hard origin/main
git checkout feat/correct-branch
```


