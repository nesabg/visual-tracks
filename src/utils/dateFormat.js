const dateFormat = (date) => {
    const parts = date.split(' ')
    const time = parts[4].split(':')
    const hour = Number(time[0]) + 3

    return `${hour}:${time[1]}:${time[2]} - ${parts[2]}:${parts[1]}:${parts[3]}`
}

export default dateFormat

//Sat Mar 26 2022 08:31:55 GMT+0000 (Coordinated Universal Time)