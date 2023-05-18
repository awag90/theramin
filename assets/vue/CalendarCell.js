export default{
    props:['time', 'therapist'], 
    data: function () {
        return {
          status: '',
          disabled: false
        }
    },
    created() {
        let working = isWorking(this.time, this.therapist.worktimes); 
        let booked = false;
        if (working && !booked){
            this.status = 'cal free';
        }else{
            this.status = 'cal notWorking';
            this.disabled = true;
        }
    },
    template: '<div :class="status" :disabled="disabled"></div>'
}

function isWorking(time,worktimes){
    let date = time.toISOString().split('T')[0] +'T'
    let worktime = worktimes.find(e => e.weekday === getWeekdayForDatetime(time))
    return (worktime && time >= new Date(date + worktime.from) && time < new Date(date +worktime.till))
}

function getWeekdayForDatetime(time){
    let dayNum = time.getDay();
    switch (dayNum){
        case 1:
            return 'monday'
        case 2:
            return 'tuesday'
        case 3:
            return 'wednesday'
        case 4:
            return 'thursday'
        case 5:
            return 'friday'
    }

}
    
