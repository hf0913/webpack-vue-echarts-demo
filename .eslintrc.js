module.exports = {
    root: true,
    env: {
        node: true,
        jquery: true
    },
    extends: ['standard', 'plugin:vue/recommended', 'prettier'],
    rules: {
        'vue/require-default-prop': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-case-declarations': 'off',
        'max-classes-per-file': ['error', 1],
        'max-lines': [
            'error',
            { max: 600, skipBlankLines: false, skipComments: false }
        ],
        'max-nested-callbacks': ['error', 3],
        'max-statements-per-line': ['error', { max: 2 }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'newline-after-var': ['error', 'always'],
        'prettier/prettier': 'off',
        semi: ['error', 'always'],
        'one-var': [
            'error',
            { var: 'never', let: 'consecutive', const: 'consecutive' }
        ],
        'arrow-body-style': [
            'error',
            'as-needed',
            { requireReturnForObjectLiteral: true }
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ]
    }
};
