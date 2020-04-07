# How to Submit Your PhD Thesis
Have you finished writing and correcting your thesis but don't know how to fulfill all those formal requirements, print and submit the thesis?
I will help you get over that final hump by detailing my experiences with submitting my thesis.
I assume that you write it in LaTeX and have a Linux command line available.

## Prepare for Printing

### One-sided vs Two-sided
You can choose either one-sided or two-sided printing, which is a personal choice.
One-sided printing is the easiest because you have the same margin on all pages.
Two-sided printing is more compact and looks more professional in my opinion but you need to take care that the margins are mirrored.
With the `classicthesis` package, this is done by adding the `twoside` argument to the `sccreprt` document class, in my case:

    \documentclass[twoside,openright,titlepage,numbers=noenddot,
                   headinclude,footinclude,cleardoublepage=empty,abstract=on,
                   BCOR=5mm,paper=a4,fontsize=11pt
                  ]{scrreprt}


The title page and the first page of each chapter needs to be on the right side by adding empty pages if necessary, which is provided by the `openright` option.
View the PDF in two-sided mode and check if those pages are all on the right side and have odd page numbers.
The title page is the first page in the document, so the PDF starts at the right side.
If you perform any changes here, check if the formatting in your document is still correct, as changing margins could move things around or destroy a table layout.

### LaTeX Warnings
Of course there should never be any errors when compiling a LaTeX document but what about all those hundreds of warnings that you collected and ignored over the years?
The log can have a thousand lines or more because pdflatex is very verbose but some nasty surprises can be hidden there so I recommend you to go through it at least once, even though you cannot fix all of them.
You can remove some of the clutter in vim via `:%s/^.*\/usr\/share\:q/texmf-dist\/.*$\n//` (adapt to your LaTeX installation path).

#### Overful Hboxes
Overful hboxes are elements going over your right margin, which should not happen.
Overful and underful hboxes are included in your log but you can visualize overful hboxes using `\setlength{\overfullrule}{20pt}` (don't forget to take this out afterwards).
Sometimes an overful hbox is reported but not actually visible because only the invisible part of an element, such as a table, runs over the margin, in which case you can ignore it.

## Color
Colored pages are about ten times more expensive than grayscale, so you need to find them, reduce the number of them as much as possible and then tell the printing studio how many there are for calculating the price.

### Colored Text Elements 
At first I had a huge number of colored pages because all my links and listings were colored, which looks great on paper but is very costly.
However you can still keep a screen version with all the nice colors intact.
Bonus points if you can implement a switch between a print and a screen version.
I didn't have the time left for that and you probably don't and shouldn't, but if you do, please tell me!

#### Links 
    \hypersetup{%
     colorlinks=false, % print version
     %colorlinks=true, % screen version
     [...]
     pdfborder={0 0 0}, % I don't like link borders but if you do those are perfect for that purpose as they are only shown on screen, not in print! Requires colorlinks=false to be shown.

#### Listings

    \definecolor{listkeyword}{gray}{0.3}
    \lstset{
     %keywordstyle=\color{cyan}, % screen version
     keywordstyle=\color{listkeyword}, % print version
     [...]
    }
  
### Colorcheck script
The colorcheck script will tell you, how many colored and grayscale pages your document has and show you the pages with color on it and the average values for the CMYK channels in that order. The `tail -n +6` may break in the future and removes the ghostscript version and license information.

    gs -o - -sDEVICE=inkcov $1 | tail -n +6 | sed ':a;N;$!ba;s/\n / /g' > /tmp/colorlog # each page on one line
    echo -n "Black and white pages: "
    grep -e "0.00000  0.00000  0.00000  [01]." /tmp/colorlog | wc -l
    echo -n "Colored pages: "
    grep -v -e "0.00000  0.00000  0.00000  [01]." /tmp/colorlog | wc -l
    grep -v -e "0.00000  0.00000  0.00000  [01]." /tmp/colorlog

#### Example

    $ colorcheck main.pdf
    Black and white pages: 128
    Colored pages: 7
    Page 1 0.00000  0.00264  0.00264  0.01284 CMYK OK
    Page 21 0.03851  0.03842  0.03844  0.03065 CMYK OK
    Page 22 0.07243  0.06588  0.07243  0.10790 CMYK OK
    Page 66 0.01619  0.01619  0.01399  0.05655 CMYK OK
    Page 81 0.09786  0.11218  0.10922  0.02548 CMYK OK
    Page 82 0.15376  0.15006  0.14548  0.06880 CMYK OK
    Page 84 0.04707  0.04707  0.03834  0.03834 CMYK OK

### CMYK Color Space
You only need to know three things about CMYK:

1. it stands for Cyan, Magenta, Yellow and Key (black)
2. black pages need to only use the key channel
3. not all RGB values can be represented in CMYK, such as a bright red (255,0,0)

A page that gets reported by colorcheck may contain a PDF picture that looks perfectly grayscale to the human eye but that has its black value mixed from the other colors, not the black channel.
If it is a picture that you didn't produce yourself from within LaTeX, you can convert it using Ghostscript:

    gs \
     -sOutputFile=output.pdf \
     -sDEVICE=pdfwrite \
     -sColorConversionStrategy=Gray \
     -dProcessColorModel=/DeviceGray \
     -dCompatibilityLevel=1.4 \
     -dNOPAUSE \
     -dBATCH \
     input.pdf 

To ensure better looking colors, prefer CYMK primary colors to RGB.
The following lines are an excerpt from a Tikz picture of a Venn diagram:

    % CMYK
    \node[venn circle = magenta] (SW) at (0,0) {};
    \node[venn circle = cyan] (QA) at (60:0.17\textwidth) {};
    \node[venn circle = yellow] (QB) at (0:0.17\textwidth) {};
    +% RBG
    +% \node[venn circle = red] (SW) at (0,0) {};
    +% \node[venn circle = blue] (QA) at (60:0.17\textwidth) {};
    +% \node[venn circle = green] (QB) at (0:0.17\textwidth) {};

## Printing
Communicate very clearly whether you want one-sided or two-sided printing!
Most students print one-sided in copy shops, so in my case I wasn't clear enough about it and they printed it one-sided and it needed to be printed again.

## Final Thoughts
The form templates are made for the Faculty of Mathematics and Computer Science at Leipzig University, adapt to your own if you want to submit somewhere else.
Many thanks to Nathanael Arndt for providing me with templates, scripts and many answers.
If you have additional advice or questions, contact me at...
