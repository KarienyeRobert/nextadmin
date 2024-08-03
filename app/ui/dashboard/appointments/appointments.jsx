import styles from './appointments.module.css'
import Image from 'next/image'

const Appointments = () => {
    return (
        <div className={styles.container}>
          <h2 className={styles.title}>Latest Appointments</h2>
          <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Time</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                       <div className={styles.user}>
                       <Image src="/noavatar.png" alt="avatar" width={40} height={40} className={styles.userImage} />
                       Collins Kiprotich
                       </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                    </td>
                    <td>
                        19/08/2024
                    </td>
                    <td> 1100hrs</td>
                </tr>
                <tr>
                    <td>
                    <div className={styles.user}>
                        <Image src="/noavatar.png" alt="avatar" width={40} height={40} className={styles.userImage} />
                        Emmanuel Kipruto
                    </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                    </td>
                    <td>
                        19/08/2024
                    </td>
                    <td> 1100hrs</td>
                </tr>
                <tr>
                    <td>
                    <div className={styles.user}>
                        <Image src="/noavatar.png" alt="avatar" width={40} height={40} className={styles.userImage} />
                        Hakima 
                    </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.inProgress}`}>In Progress</span>
                    </td>
                    <td>
                        19/08/2024
                    </td>
                    <td> 1100hrs</td>
                </tr>
                <tr>
                    <td>
                    <div className={styles.user}>
                        <Image src="/noavatar.png" alt="avatar" width={40} height={40} className={styles.userImage} />
                        Robert Karienye
                    </div> 
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.completed}`}>Completed</span>
                    </td>
                    <td>
                        19/08/2024
                    </td>
                    <td> 1100hrs</td>
                </tr>
            </tbody>
          </table>
        </div>
    )
}

export default Appointments