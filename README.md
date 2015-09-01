## Usage

grunt --theme="default/base" <br/>

## Components:
https://github.com/thanpolas/grunt-closure-tools

## Dependancies

### Closure Compiler installation from source

Install dependencies:
```bash
$ sudo apt-get install git ant openjdk-7-jdk
```

Then checkout the source from Git and build:
```bash
$ git clone https://github.com/google/closure-compiler
$ cd closure-compiler
$ ant
```

To refresh your build, simply call:
```bash
$ git pull
$ ant clean
$ ant
```
