<?php
// Accordion extension
// Copyright (c) 2020 Giovanni Salmeri, https://github.com/GiovanniSalmeri/yellow-accordion
// This file may be used and distributed under the terms of the public license.

class YellowAccordion {
    const VERSION = "0.8.10";
    const TYPE = "feature";
    public $yellow;         //access to API
    
    // Handle initialisation
    public function onLoad($yellow) {
        $this->yellow = $yellow;
        $this->yellow->system->setDefault("accordionType", "auto");
    }
    
    // Handle page extra data
    public function onParsePageExtra($page, $name) {
        $output = null;
        if ($name == "header") {
            $accordionType = $this->yellow->page->get("accordionType") ? $this->yellow->page->get("accordionType") : $this->yellow->system->get("accordionType");
            $extensionLocation = $this->yellow->system->get("coreServerBase").$this->yellow->system->get("coreExtensionLocation");
            $output .= "<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"{$extensionLocation}accordion.css\" />\n";
            $output .= "<script type=\"text/javascript\">var accordionType = ".json_encode($accordionType)."</script>";
            $output .= "<script type=\"text/javascript\" src=\"{$extensionLocation}accordion.js\"></script>\n";
        }
        return $output;
    }
}
