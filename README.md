Accordion 0.8.10
=============
Accordion-style lists.

<p align="center"><img src="accordion-screenshot.png?raw=true" width="795" height="836" alt="Screenshot"></p>

## How to install extension

1. [Download and install Datenstrom Yellow](https://github.com/datenstrom/yellow/).
2. [Download extension](../../archive/master.zip). If you are using Safari, right click and select 'Download file as'.
3. Copy `master.zip` into your `system/extensions` folder.

To uninstall delete the [extension files](extension.ini).

## How to create an accordion

This extension will automatically present in an accordion style so-called definitions list. See the [documentation of PHP Markdown Extra](https://michelf.ca/projects/php-markdown/extra/#def-list) for further details about writing definition lists in Markdown: the "term" will be treated as the visible part, the "definition" as the expandable part. (Note however that this extension does not support more terms for the same definition nor more definitions for the same term.)

Accordions are commonly used for names and definitions, FAQs and answers, categories and topics.

## Settings

The following setting can be configured in file `system/settings/system.ini`:

`AccordionType` (default: `auto`) = possible values are `auto` (only one panel is open at the same time), `manual` (each panel can be opened and closed independently), `none` (accordion-style presentation is disabled)  

You can also set the `AccordionType` in the [settings](https://github.com/datenstrom/yellow-extensions/tree/master/features/core#settings) at the top of a page: this will override the global setting.

## Examples

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

## Developer

Giovanni Salmeri. [Get support](https://github.com/GiovanniSalmeri/yellow-accordion/issues).
