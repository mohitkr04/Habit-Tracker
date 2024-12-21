import { useState } from 'react';

const useHabitSuggestions = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSuggestions = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/generate-habit-suggestions');
            const data = await response.json();
            setSuggestions(data.suggestions);
            setError(null);
        } catch (err) {
            setError('Failed to fetch habit suggestions');
            console.error('Error fetching suggestions:', err);
        } finally {
            setLoading(false);
        }
    };

    return { suggestions, loading, error, fetchSuggestions };
};

export default useHabitSuggestions; 