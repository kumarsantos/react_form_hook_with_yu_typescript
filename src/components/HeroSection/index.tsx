import { Form, Table } from "..";
import { tableHeading } from "../../constants";
import { useAppSelector } from "../../redux/store";
import './index.css';
import "datatables.net-dt/css/jquery.dataTables.css";

const HeroSection = () => {
    const allData = useAppSelector(state => state.allData);

    return (
        <div className='form_wrapper'>
            <h2>Personal Details</h2>
            <Form />
            <div style={{ marginTop: '2rem' }}>
                <Table data={allData.record} columns={tableHeading} />
            </div>
        </div>
    )
}

export default HeroSection