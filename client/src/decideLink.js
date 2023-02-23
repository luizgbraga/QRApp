const getTime = () => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    let date = new Date();
    return {
        month: months[date.getMonth()],
        weekDay: weekDays[date.getDay()],
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes()
    }
}

const decideLink = (links, defaultLink, osName, location) => {
    for(let link of links) {
        if(link.osName === osName) {
            return link.link;
        }
    }
    return defaultLink;
}

export default decideLink;