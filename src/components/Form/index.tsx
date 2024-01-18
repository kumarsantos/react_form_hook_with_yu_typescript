


import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'
import { useAppSelector } from '../../redux/store'

const Form = () => {
    const formData = useAppSelector(state => state.formEnterData); return (
        <div>
            {formData.step === 1 ?
                <FormStep1 /> :
                <FormStep2 />}
        </div>
    )
}

export default Form