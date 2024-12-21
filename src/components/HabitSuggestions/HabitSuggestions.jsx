import React from 'react';
import styles from './HabitSuggestions.module.css';
import useHabitSuggestions from '../../hooks/useHabitSuggestions';
import { MdLightbulb, MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function HabitSuggestions() {
    const { suggestions, loading, error, fetchSuggestions } = useHabitSuggestions();
    const navigate = useNavigate();

    const handleAddHabit = (suggestion) => {
        navigate(`${process.env.PUBLIC_URL}/modal/habitEditor`, {
            state: { 
                modalTitle: 'Create new habit',
                initialData: { title: suggestion }
            }
        });
    };

    return (
        <div className={styles.suggestionsContainer}>
            <div className={styles.header}>
                <h3>
                    <MdLightbulb /> AI Suggestions
                </h3>
                <button 
                    onClick={fetchSuggestions}
                    disabled={loading}
                    className={styles.refreshButton}
                >
                    Refresh
                </button>
            </div>

            {loading && <p>Loading suggestions...</p>}
            {error && <p className={styles.error}>{error}</p>}
            
            <div className={styles.suggestions}>
                {suggestions.map((suggestion, index) => (
                    <div key={index} className={styles.suggestion}>
                        <span>{suggestion}</span>
                        <button 
                            onClick={() => handleAddHabit(suggestion)}
                            className={styles.addButton}
                        >
                            <MdAdd /> Add
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HabitSuggestions; 