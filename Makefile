DIST=./dist/

default: build

build:
	tsc

clean:
	-rm -rf $(DIST)/*