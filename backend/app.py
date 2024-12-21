from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Predefined habit categories and suggestions
habit_suggestions = {
    "health": [
        "Drink 8 glasses of water daily",
        "Take a 15-minute walk",
        "Do 10 minutes of stretching",
        "Eat a piece of fruit daily",
        "Get 7-8 hours of sleep"
    ],
    "productivity": [
        "Read for 20 minutes",
        "Write in a journal",
        "Practice time blocking",
        "Clear inbox to zero",
        "Take regular breaks"
    ],
    "mindfulness": [
        "5-minute meditation",
        "Practice deep breathing",
        "Daily gratitude journal",
        "Mindful eating",
        "Digital detox hour"
    ]
}

def analyze_user_habits(current_habits):
    # Simple rule-based analysis
    missing_categories = []
    
    # Check which categories are underrepresented
    health_keywords = ["water", "exercise", "sleep", "walk", "gym"]
    productivity_keywords = ["work", "study", "read", "write", "learn"]
    mindfulness_keywords = ["meditate", "journal", "gratitude", "mindful", "peace"]
    
    has_health = any(any(keyword in habit.lower() for keyword in health_keywords) 
                    for habit in current_habits)
    has_productivity = any(any(keyword in habit.lower() for keyword in productivity_keywords) 
                         for habit in current_habits)
    has_mindfulness = any(any(keyword in habit.lower() for keyword in mindfulness_keywords) 
                         for habit in current_habits)
    
    if not has_health:
        missing_categories.append("health")
    if not has_productivity:
        missing_categories.append("productivity")
    if not has_mindfulness:
        missing_categories.append("mindfulness")
        
    return missing_categories or ["health", "productivity", "mindfulness"]

@app.route('/generate-habit-suggestions', methods=['GET'])
def generate_suggestions():
    # In a real application, you would get this from the request
    current_habits = []  # This would come from your frontend
    
    # Analyze current habits and get categories to focus on
    categories_to_suggest = analyze_user_habits(current_habits)
    
    # Generate suggestions
    suggestions = []
    for category in categories_to_suggest[:2]:  # Get suggestions from top 2 categories
        suggestions.extend(random.sample(habit_suggestions[category], 2))
    
    # Ensure we return exactly 3 suggestions
    suggestions = suggestions[:3]
    
    return jsonify({
        "suggestions": suggestions,
        "message": "Success"
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000) 