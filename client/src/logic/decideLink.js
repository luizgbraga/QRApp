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

const decideLink = (links, defaultLink, osName, location) => {
    const time = getTime();
    for(let link of links) {
        let hours = link.hourRestriction.split('-').map(el => Number(el.replace('h', '')));
        let osCheck = link.osName.includes(osName);
        let timeCheck = 
        link.timeRestriction.includes(time.month) && 
        link.timeRestriction.includes(time.weekDay) && 
        time.hour > hours[0] && time.hour < hours[1];
        let locCheck = link.locRestriction.includes(location.split(",")[1]);
        if(osCheck && timeCheck && locCheck) {
            return link.link;
        }
    }
    return defaultLink;
}

export default decideLink;