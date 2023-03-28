module.exports = {
	plugins: ["stylelint-order"],
	extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],
	rules: {
	"order/order": [
		"custom-properties",
		"declarations"
	],
	"order/properties-alphabetical-order": true,
	"at-rule-no-unknown": null,
	"scss/at-rule-no-unknown": true,
	"scss/at-function-named-arguments": null,
	"scss/at-function-pattern": "^[_a-z]+([_a-z0-9-]+[a-z0-9]+)?$",
	"function-calc-no-unspaced-operator": null,
	"declaration-empty-line-before": null,
	"no-descending-specificity": null
	}
};