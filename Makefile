install:
	npm i
lint:
	npx eslint .
publish:
	npm publish --dry-run
	npm link