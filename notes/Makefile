templates := $(shell find ../../latex-templates -type f -name "*.tex" -depth 1)
tex := $(shell find . -type f -name "*.tex")
source := $(shell find . -type f -name "*.jsx" -o -name "*.js")

notes.pdf: $(templates) $(tex) $(source)
	xelatex -file-line-error --halt-on-error --shell-escape notes.tex
	open -g notes.pdf
	terminal-notifier -message "Rendered" -title "XeLaTeX" -activate com.googlecode.iterm2
