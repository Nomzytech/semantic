module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Nomzytech/gitactions",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/git',
        '@semantic-release/github']
    
}
