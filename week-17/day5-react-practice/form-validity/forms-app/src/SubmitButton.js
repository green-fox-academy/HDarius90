

export default function SubmitButton({enable}){
    return(
        <button
            className='btn'
            type='submit'
            disabled={!enable}
        >
            Submit
        </button>
    )
}