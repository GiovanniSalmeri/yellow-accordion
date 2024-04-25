<?php
// Accordion extension, https://github.com/GiovanniSalmeri/yellow-accordion

class YellowAccordion {
    const VERSION = "0.9.1";
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
            $accordionType = $this->yellow->system->get("accordionType");
            $assetLocation = $this->yellow->system->get("coreServerBase").$this->yellow->system->get("coreAssetLocation");
            $output .= "<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"{$assetLocation}accordion.css\" />\n";
            $output .= "<script type=\"text/javascript\">var accordionType = ".json_encode($accordionType)."</script>\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\"  src=\"{$assetLocation}accordion.js\"></script>\n";
        }
        return $output;
    }
}
