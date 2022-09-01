# code-artifact-npm-boilerplate
Test project for [AWS CodeArtifact](https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html) npm package

---

## Getting Started

```
# Configure npm to use CodeArtifcact repo
aws codeartifact login --tool npm --repository my-repo --domain my-domain --domain-owner 924586450630

# publish package
cd package-example
npm publish
```

