MAKEFLAGS += -j 2


serve:
	python -m SimpleHTTPServer 8000 > /tmp/python-server.log 2> /tmp/python-server-error.log

riot:
	riot --watch --ext=html --compact tags/ components.js > /tmp/riot-compiler.log 2> /tmp/riot-compiler-error.log

run: serve riot
