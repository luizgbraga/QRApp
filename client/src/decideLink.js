import getOperatingSystem from "./decideOs";

const getHour = () => {
    let date = new Date();
    return date.getHours();
}

const decideLink = (links, defaultLink) => {
    const os = getOperatingSystem();
    console.log(links, os)
    const hour = getHour();
    for(let link of links) {
        if(link.osName === os) {
            return link.link;
        }
    }
    return defaultLink;
}

export default decideLink;