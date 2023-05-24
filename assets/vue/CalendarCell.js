export default{
    props:['time', 'therapist'], 
    data: function () {
        return {
          status: '',
          disabled: false,
          text: '  '
        }
    },
    methods: {
        emitEvent: function(){
            this.$emit('createAppointment', this.therapist, this.time);
        }
    },
    created() {
        let working = isWorking(this.time, this.therapist.worktimes); 
        let booked = false;
        if (working && !booked){
            this.status = 'btn btn-primary cal free';
            this.text = 'Termin verfügbar'
        }else{
            this.status = 'btn cal not-free';
            this.disabled = true;
        }
    },
    template: '<button :class="status" :disabled="disabled" @click="emitEvent">{{text}}</button>'
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
    
