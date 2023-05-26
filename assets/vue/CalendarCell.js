export default{
    props:['time', 'therapist'], 
    emits: ['createAppointment'],
    data: function () {
        return {
          status: 'btn cal not-free',
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
        let free = false;
        if (working){
            free =  isFree(this.time, this.therapist);
        }
        if (working && free){
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

function isFree(utcTime, therapist){
    let datetime = new Date(Number(utcTime)); 
    let date = datetime.toLocaleDateString()
    let time = datetime.toLocaleTimeString()
    let appointments = therapist.appointments.filter((e) => (new Date(e.date).toLocaleDateString() == date && new Date('1970-01-01T'+e.from).toLocaleTimeString() == time));
    return (appointments.length == 0)

}
    
