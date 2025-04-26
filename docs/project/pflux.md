# Pflux

Pflux lets you analyze the dataflow of a python function, which is focused on the variable value changing. Based on the dataflow testing principles,
it can generate CFG(control flow graph), program slice(all the code lines definitly or possibly affecting the chosen variable value), dc-path(define-clear path),
and then analyze the coverage standard(how many dc-path the test case covers) according to your given test case.

In addition, the ui design draws inspiration from [Electron Fiddle](https://github.com/electron/fiddle).

## Get Started

After cloning the repo,

```bash
cd pflux
npm install
npm start
```

## Features

### Control Flow Graph

The [CFG](https://en.wikipedia.org/wiki/Control-flow_graph) divides the function into blocks. Each line of code must be executed only once when the program running into the block.

![Control Flow Graph](/project-images/pflux/control-flow.png)

### Program Slice

Program slice is a collection of code lines which may affect the value of chosen variable. For example, `sum = a + b` affects the value of `sum` and `if sign > 0: sum = a + b` possibly
possibly affect the value of `sum`, both are program slice of `sum`.

![Program Slice](/project-images/pflux/slice.png)

### Def-Clear Path

Pflux gives the def-clear path but not def-use path. The only difference is that def-clear path has only one defining point at the beginning of the path but def-use path does not.
_Clear_ can alse be regarded as killing a value of the variable, more accuratedly, reassgining a variable.

![Def-Clear Path](/project-images/pflux/dc-path.png)
