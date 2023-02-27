const groupScans = (scans) => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    scans = scans.map(scan => {
        let date = new Date(scan.scanDate);
        return {
            osName: scan.osName,
            country: scan.scanLocation.split(',')[0],
            state: scan.scanLocation.split(',')[1],
            city: scan.scanLocation.split(',')[2],
            month: months[date.getMonth()],
            weekDay: weekDays[date.getDay()],
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes()
    }});
}

groupScans(scans)

