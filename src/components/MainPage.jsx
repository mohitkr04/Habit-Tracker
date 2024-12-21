import { motion } from 'framer-motion';
import Header from './Header';
import HabitList from './HabitList';
import Placeholder from './Placeholder';
import HabitSuggestions from './HabitSuggestions/HabitSuggestions';
import { MdAddToPhotos, MdCalendarToday } from "react-icons/md";
import { useHabitsStore } from '../stores/habitsStore';

const mainVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: .3, ease: 'easeOut' }
};

function MainPage() {
	const habits = useHabitsStore((s) => s.habits);
	const filteredHabits = habits.filter((h) => !h.isArchived);

	return (
		<motion.div {...mainVariants}>
			<Header />
			<HabitSuggestions />
			<HabitList habits={filteredHabits} />
			{filteredHabits.length === 0 && (
				<Placeholder
					image={<MdCalendarToday size={64} />}
					title="No active habits found"
					desc="Why not create one now?"
					textOnButton="Create First Habit"
					buttonIcon={<MdAddToPhotos />}
					to={`${process.env.PUBLIC_URL}/modal/habitEditor`}
					state={{ modalTitle: 'Create new habit' }}
					/>
			)}
		</motion.div>
	);
}

export default MainPage;