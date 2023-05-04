
# Fish on fire eslint configuration

Official fishonfire eslint config

## Installation

Add this package to your packages

Yarn
```bash
  yarn add https://github.com/fishonfire/eslint-config-fishonfire --dev
```

Npm
```bash
  npm install https://github.com/fishonfire/eslint-config-fishonfire --save-dev
```

## Deployment

Install peer dependencies

Yarn
```bash
  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-react eslint-plugin-sonarjs @react-native-community/eslint-config --dev
```

Npm
```bash
  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-react eslint-plugin-sonarjs @react-native-community/eslint-config --save-dev
```

## Implementation

To implement this configuration you need to extend it inside .eslint.js

```javascript
{
    extends: "fishonfire"
}
```


## Authors

- [@Menno Jongejan](https://www.github.com/mennolpFoF)

