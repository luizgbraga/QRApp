const getTime = () => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    let date = new Date();
    return {
        month: months[date.getMonth()],
        weekDay: weekDays[date.getDay() - 1],
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes()
    }
}

const decideLink = (links, osName, location) => {
    const time = getTime();
    let defaultLink = links.filter(el => el.default)[0];
    links = links.filter(el => !el.default);
    for(let link of links) {
        let hours = link.hourRestriction.split('-').map(el => Number(el.replace('h', '')));
        let osCheck = link.osName.includes(osName) || !link.osName;
        let timeCheck = 
        (link.timeRestriction.includes(time.month) && 
        link.timeRestriction.includes(time.weekDay) && 
        time.hour > hours[0] && time.hour < hours[1]) || !link.timeRestriction;
        let locCheck = link.locRestriction.includes(location.split(",")[1]) || !link.locRestriction;
        console.log(osCheck, timeCheck, locCheck)
        if(osCheck && timeCheck && locCheck) {
            return [link.url, true];
        }
    }
    return [defaultLink.url, false];
}

export default decideLink;