export default{
    props: ['therapist', 'time'],
    template: `
        <form>
            Therapeut: {{this.therapist}} <br/>
            Zeit: {{this.time}}

        </form>
    `
}