import getOperatingSystem from "./decideOs";

const getHour = () => {
    let date = new Date();
    return date.getHours();
}

const decideLink = (links) => {
    const os = getOperatingSystem();
    console.log(links)
    const hour = getHour();
    for(let link of links) {
        if(link.osName === os) {
            return link.link;
        }
    }
}

export default decideLink;