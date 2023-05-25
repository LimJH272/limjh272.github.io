const birthday = '02 July 2002 00:00:00 GMT+0800';

const age = setInterval(function() {
    const birth_date = new Date(birthday);
    const current_date = new Date();

    const birth_array = birth_date.toString().split(" ");
    const current_array = current_date.toString().split(" ");

    if (birth_array[1] == current_array[1] && birth_array[2] == current_array[2]) {
        document.querySelector("#birthday").classList.add("text-primary");
        document.querySelector("#age").innerHTML = parseInt(current_array[3]) - parseInt(birth_array[3]);
    } else {
        document.querySelector("#birthday").classList.remove("text-primary");

        const birth_time = birth_date.getTime();
        const current_time = current_date.getTime();
        const diff = current_time - birth_time;
        const year_diff = diff / (1000*60*60*24*365.25);

        document.querySelector("#age").innerHTML = Math.trunc(year_diff);
    }
}, 1000);