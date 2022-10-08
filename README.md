# Accordion 0.8.16

Accordion-style lists.

<p align="center"><img src="accordion-screenshot.png?raw=true" alt="Screenshot"></p>

## How to create an accordion

This extension will automatically present in an accordion style so-called definition lists: the "term" will be treated as the visible part, the "definition" as the expandable part. See the [documentation of PHP Markdown Extra](https://michelf.ca/projects/php-markdown/extra/#def-list) for further details about writing definition lists in Markdown. (Note however that this extension does not support more terms for the same definition nor more definitions for the same term.)

Accordions are commonly used for names and definitions, FAQs and answers, categories and topics.

## Example

A simple accordion:

```
Apple
:   Pomaceous fruit of plants of the genus Malus in 
the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.
```

Including more paragraphs in the expandable part:

```
Term 1

:   This is a definition with two paragraphs. Lorem ipsum 
dolor sit amet, consectetuer adipiscing elit. Aliquam 
hendrerit mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
vitae, risus.
```

## Settings

The following setting can be configured in file `system/extensions/yellow-system.ini`:

`AccordionType` (default: `auto`) = possible values are `auto` (only one panel is open at the same time), `manual` (each panel can be opened and closed independently), `none` (accordion-style presentation is disabled)  

You can also set the `AccordionType` in the [settings](https://github.com/annaesvensson/yellow-core#settings) at the top of a page: this will override the global setting.

## Installation

[Download extension](https://github.com/GiovanniSalmeri/yellow-accordion/archive/main.zip) and copy zip file into your `system/extensions` folder. Right click if you use Safari.

## Developer

Giovanni Salmeri. [Get help](https://datenstrom.se/yellow/help/)
