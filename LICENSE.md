# function licenseJargon(License){
    let x;
    switch(License) {
        case "MIT":
         x = {choices: "MIT", jargon: "insert MIT legal jargon here"};
        break;
        case "Apache 2.0":
        x = {choices: "Apache 2.0", jargon: "insert APACHE legal jargon here"};
        break;
        case "GNU GPL 3.0":
        x = {choices: "GNU GPL 3.0", jargon: "insert GNU legal jargon here"};
        break;      
    }
    return `#${x.choices}  ##${x.jargon}`;
}