

## what is create-langchainjs-app

This CLI tool create a pure TypeScript project used for langchainjs

The stack includes 
- pre-commit hooks
- esLint configuration
- prettier
- commit Lint 
- git init
- install dependencies
- gitignore
- typescript(ESM)
- typescript alias using @


## Getting Started

1. create project
```
npx create-langchainjs-app@latest my-langchainjs-app
```
2. set up your OpenAI key in .env

### how to debug in vscode

1. npm run dev

2. change .launch.json like these
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "tsup-node debug",
            "cwd": "${workspaceFolder}",
            "program": "${workspaceFolder}/src/index.ts"
        }
    ]
}
```

### how to debug in vscode

1. npm run dev

2. change .launch.json like these
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "tsup-node debug",
            "cwd": "${workspaceFolder}",
            "program": "${workspaceFolder}/src/index.ts"
        }
    ]
}
```

### how to debug in vscode

1. npm run dev

2. change .launch.json like these
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "tsup-node debug",
            "cwd": "${workspaceFolder}",
            "program": "${workspaceFolder}/src/index.ts"
        }
    ]
}
```
