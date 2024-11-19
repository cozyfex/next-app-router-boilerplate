import ESLintConfigs from '@cozyfex/eslint-config/eslint-configs.mjs'
import NamingESLint from '@cozyfex/eslint-config/mixins/naming-eslint.mjs'
import ReactESLint from '@cozyfex/eslint-config/mixins/react-eslint.mjs'

export default [...ESLintConfigs, ...ReactESLint, ...NamingESLint]
