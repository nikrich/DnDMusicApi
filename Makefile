REPORTER = list
MOCHA_OPTS = --ui tdd --ignore-leaks

test:
	./node_modules/mocha/bin/mocha \
    --reporter $(REPORTER) \
    $(MOCHA_OPTS) \
    test/*.js

.PHONY: test