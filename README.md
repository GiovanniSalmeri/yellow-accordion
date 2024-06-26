# Accordion 0.9.1

Accordion-style lists.

<p align="center"><img src="SCREENSHOT.png" alt="Screenshot"></p>

## How to install an extension

[Download ZIP file](https://github.com/GiovanniSalmeri/yellow-accordion/archive/refs/heads/main.zip) and copy it into your `system/extensions` folder. [Learn more about extensions](https://github.com/annaesvensson/yellow-update).

## How to create an accordion

This extension will automatically present in an accordion style so-called definition lists: the "term" will be treated as the visible part, the "definition" as the expandable part. See the [documentation of PHP Markdown Extra](https://michelf.ca/projects/php-markdown/extra/#def-list) for further details about writing definition lists in Markdown. (Note that this extension does not support more terms for the same definition nor more definitions for the same term.)

Accordions are commonly used for names and definitions, FAQs and answers, categories and topics.

## Examples

Creating a simple accordion:

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

`AccordionType` = behaviour of accordion, `auto` for one panel open at the same time, `manual` for each panel independent form the others, `none` to disable  

## Developer

Giovanni Salmeri. [Get help](https://datenstrom.se/yellow/help/).
