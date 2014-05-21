test:
	clear && mocha --require chai --recursive --reporter spec --slow 1

.PHONY: test