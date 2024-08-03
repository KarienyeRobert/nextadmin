import Card from '../ui/dashboard/card/card.jsx';
import Rightbar from '../ui/dashboard/rightbar/rightbar.jsx';
import styles from '../ui/dashboard/dashboard.module.css'
import Appointments from '../ui/dashboard/appointments/appointments.jsx';
import Chart from '../ui/dashboard/chart/chart.jsx';

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Appointments/>
                <Chart/>
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>

    );
}

export default Dashboard;