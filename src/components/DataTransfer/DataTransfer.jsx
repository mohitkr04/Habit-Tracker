import styles from '../../css/DataTransfer.module.css';

// components
import Placeholder from '../Placeholder';

// utils
import exportAllData from '../../utils/exportAllData';
import importAllData from '../../utils/importAllData';

// icons
import { MdUpload, MdDownload } from "react-icons/md";
import { BsDatabaseFillUp } from "react-icons/bs";
import { BsDatabaseFillDown } from "react-icons/bs";

function DataTransfer() {
	return (
		<div className={styles.dataTransfer}>
			<div className={styles.placeholderWrapper}>
				<Placeholder
					image={<MdUpload size={64} />}
					title="Export"
					desc="Save a backup of your habits data to your device."
					textOnButton="Export Now"
					buttonIcon={<BsDatabaseFillUp />}
					onClick={exportAllData}
					accentColor="#57a639"
				/>
			</div>

			<div className={styles.placeholderWrapper}>
				<Placeholder
					image={<MdDownload size={64} />}
					title="Import"
					desc="Upload your habits data from a backup file."
					textOnButton="Import Now"
					buttonIcon={<BsDatabaseFillDown />}
					onClick={importAllData}
				/>
			</div>
		</div>
	);
}

export default DataTransfer;