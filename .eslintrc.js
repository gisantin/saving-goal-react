module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "plugin:react/recommended",
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    "react/prop-types": [0],
    "react/jsx-filename-extension": 0,
    "import/no-named-as-default": 0,
    "react/no-unescaped-entities": 0,
    }
};
