function Time() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let period;
    if (hour >=12){
        period ="PM"
        if(hour>12){
            hour-=12
        }
    }else{
        period = "AM"
    }
    return(
        <h2>
            {hour}:
            {minute}:
            {second}
            {period}
        </h2>
    );
}

export default Time;