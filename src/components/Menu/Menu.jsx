import styles from '../../css/Menu.module.css';
import packageJson from '../../../package.json';

// components
import MenuItemList from './MenuItemList';
import MenuItem from './MenuItem';

// utils
import clearLocalStorage from '../../utils/clearLocalStorage';

// icons
import { BsFillDatabaseFill } from "react-icons/bs";
import { FaGithub, FaPaintBrush } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImFire } from "react-icons/im";
import { HiArchiveBox } from "react-icons/hi2";

function Menu() {

	const publicUrl = process.env.PUBLIC_URL;

	return (
		<section className={styles.menu}>
			<MenuItemList title="App">
				<MenuItem
					icon={<HiArchiveBox />}
					iconColor="#7b68ee"
					title="Archive"
					desc="View or manage archived habits"
					to={`${publicUrl}/modal/archive`}
					state={{ modalTitle: 'Archive' }}
					arrow
				/>

				<MenuItem
					icon={<FaPaintBrush />}
					iconColor="#ffa420"
					title="Appearance"
					desc="Customize the app's look"
					to={`${publicUrl}/modal/appearance`}
					state={{ modalTitle: 'Appearance' }}
					arrow
				/>

				<MenuItem
					icon={<BsFillDatabaseFill />}
					iconColor="#77dd77"
					title="Export / Import Data"
					desc="Backup or restore your data"
					to={`${publicUrl}/modal/dataTransfer`}
					state={{ modalTitle: 'Export/Import Data' }}
					arrow
				/>
			</MenuItemList>

			<MenuItemList title="Other">
				<MenuItem
					icon={<FaGithub />}
					iconColor="#7fc7ff"
					title="GitHub Repository"
					desc="View or contribute to the project"
					onClick={() => window.open('https://github.com/mohitkr04', '_blank')}
					link
				/>

				<MenuItem
					icon={<IoIosMail />}
					iconColor="#ffb841"
					title="Send Feedback"
					desc="Share your thoughts or report an issue"
					onClick={() => window.location.href = 'mailto:mohitgupta.araria@gmail.com?subject=Feedback%20on%20Habit-Tracker'}
					link
				/>
			</MenuItemList>

			<MenuItemList
				title="Danger Zone"
				titleStyle={{ color: 'IndianRed' }}
				listStyle={{ border: '1px solid IndianRed' }}
			>
				<MenuItem
					icon={<ImFire style={{ color: 'IndianRed' }} />}
					title="Clear Data"
					desc="Delete all application data"
					onClick={() => clearLocalStorage(publicUrl)}
				/>
			</MenuItemList>

			<div className={`${styles.category} ${styles.footer}`}>
				<small>Version: {packageJson.version}</small>
			</div>
		</section>
	);
}

export default Menu;