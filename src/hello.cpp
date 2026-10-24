#include <emscripten/bind.h>
#include <string>

std::string hello(std::string name) { return "Hello, " + name + "! (from C++)"; }

EMSCRIPTEN_BINDINGS(app) { emscripten::function("hello", &hello); }
