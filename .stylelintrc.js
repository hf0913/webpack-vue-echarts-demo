module.exports = {
    extends: ['stylelint-config-standard'],
    ignoreFiles: ['**/dist/**', '**/test/**'],
    rules: {
        'declaration-block-trailing-semicolon': [
            'always',
            { ignore: ['single-declaration'] }
        ],
        'color-hex-case': 'lower', // 颜色值为小写字母(stylelint-config-standard)
        'color-no-invalid-hex': true, // 颜色值不能为无效值(stylelint-config-standard)
        'font-family-name-quotes': 'always-where-recommended', // 字体系列中命名时带引号
        'function-url-quotes': 'always', // 地址一定要写引号
        'number-leading-zero': 'never', // 要求或分数低于1的数字禁止前导零
        'number-no-trailing-zeros': true, // 禁止在数量尾随零
        'string-quotes': 'double', // 指定字串，双引号
        'length-zero-no-unit': true, // 禁止单位零长度。
        'number-leading-zero': 'always',
        'value-keyword-case': 'lower', // 指定小写关键字的值
        'value-list-comma-newline-after': 'always-multi-line', // 在值列表的逗号后指定一个换行符或禁止留有空格
        'shorthand-property-no-redundant-values': true, // 不允许在简写属性冗余值
        'property-case': 'lower', // 为属性指定小写(stylelint-config-standard)
        'keyframe-declaration-no-important': true, // 不允许!important在关键帧声明
        'block-closing-brace-empty-line-before': 'never', // 不允许关闭括号前空一行(stylelint-config-standard)
        'block-closing-brace-newline-after': 'always', // 需要一个换行符关闭括号后的空白(stylelint-config-standard)
        'block-opening-brace-newline-after': 'always-multi-line', // 开括号的块之后需要新的一行(stylelint-config-standard)
        'selector-class-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$', // 指定一个模式类选择符，限制选择器名称写法
        'selector-id-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$', // 指定一个模式，id选择器，限制选择器名称写法
        'value-keyword-case': 'lower', // 属性值小写
        'no-empty-source': null, // 不允许空的来源
        'at-rule-no-unknown': null, // 不允许at-rules不明
        indentation: 4, // 指定缩进(stylelint-config-standard)
        'max-nesting-depth': 3, // 允许嵌套的深度为3
        'no-duplicate-selectors': true, // 不允许重复的选择器
        'no-eol-whitespace': true, // 不允许行尾空白(stylelint-config-standard)
        'no-invalid-double-slash-comments': true, // 不允许双斜杠注释(/ /…)不支持CSS(stylelint-config-standard)
        'rule-empty-line-before': 'never'
    }
};
