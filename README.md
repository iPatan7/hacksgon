# Hacksgon
# Web Application Project

A full-stack web application with user authentication, profile management, and responsive UI built with HTML/CSS/JavaScript frontend and Python backend.

## 🚀 Quick Start (TL;DR)

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd <project-folder>

# 2. Setup Backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install flask firebase-admin python-dotenv  # or your requirements
python main.py

# 3. Setup Frontend (in new terminal)
cd frontend
python -m http.server 8000  # or open index.html directly

# 4. Access Application
# Frontend: http://localhost:8000
# Backend API: http://localhost:5000
```

**Prerequisites:** Python 3.7+, Web Browser, Internet (for Firebase)

## 🚀 Features

- User authentication and authorization
- Responsive user interface
- Real-time data processing
- Performance optimization
- Secure backend API
- Interactive user menu system


### Required h5 file
```
After running the cnn.py convert it into .h5 file so it can be linked to the FastAPI
```
## 🛠️ Tech Stack

**Frontend:** HTML5, CSS3, JavaScript | **Backend:** Python | **Database:** Firebase | **Authentication:** Firebase Auth

## 📁 Key Files

```
project-root/
├── frontend/
│   ├── index.html          # 🏠 Main application page
│   ├── auth.html           # 🔐 Login/Register page
│   ├── profile.html        # 👤 User profile page
│   ├── styles.css          # 🎨 All styling
│   └── script.js           # ⚡ Main functionality
├── backend/
│   ├── main.py            # 🚀 Start server here
│   └── agents/            # 📂 Backend modules
└── Configuration Files     # 🔧 Firebase, Performance docs
```

## 📁 Project Structure

```
project-root/
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # CSS styles
│   ├── script.js           # JavaScript functionality
│   ├── auth.html           # Authentication page
│   ├── change-password.html # Password change functionality
│   └── profile.html        # User profile page
├── backend/
│   ├── main.py            # Main backend application
│   ├── __init__.py        # Package initialization
│   ├── agents/            # Backend agents/modules
│   └── __pycache__/       # Python cache files
├── static/                # Static assets
├── templates/             # Template files
├── vscode/               # VS Code configuration
├── FIREBASE_AUTH_README.md # Firebase setup guide
├── PERFORMANCE_OPTIMIZATION.md # Performance docs
├── PROFILE_SYSTEM_README.md # Profile system docs
└── README.md             # This file
```

## 🔧 Detailed Setup

### Step 1: Clone Repository
```bash
git clone <your-repository-url>
cd <project-name>
```

### Step 2: Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate
pip install flask firebase-admin python-dotenv requests
python main.py              # Server starts on http://localhost:5000
uvicorn backend.main:app --reload  #Use in the root directory 
```

### Step 3: Frontend Setup
```bash
# Open new terminal/command prompt
cd frontend    #use live server 
python -m http.server 8000  # Or double-click index.html
```

### Step 4: Firebase Configuration (Optional)
1. Create Firebase project at https://console.firebase.google.com/
2. Enable Authentication & Firestore
3. Copy config to your JavaScript files
4. Update API keys in frontend code

**That's it! Your app should be running on:**
- Frontend: http://localhost:8000
- Backend API: http://localhost:5000

## 📋 Project Structure

```
project-root/
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # CSS styles
│   ├── script.js           # JavaScript functionality
│   ├── auth.html           # Authentication page
│   ├── change-password.html # Password change functionality
│   └── profile.html        # User profile page
├── backend/
│   ├── main.py            # Main backend application
│   ├── __init__.py        # Package initialization
│   ├── agents/            # Backend agents/modules
│   └── __pycache__/       # Python cache files
├── static/                # Static assets
├── templates/             # Template files
├── vscode/               # VS Code configuration
├── FIREBASE_AUTH_README.md # Firebase setup guide
├── PERFORMANCE_OPTIMIZATION.md # Performance docs
├── PROFILE_SYSTEM_README.md # Profile system docs
└── README.md             # This file
```

## 🔐 Firebase Setup (Detailed)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project
3. Enable Authentication → Sign-in method → Email/Password
4. Create Firestore Database
5. Copy Firebase config object
6. Paste config in your frontend JavaScript files
7. Update security rules as needed

For more details, check `FIREBASE_AUTH_README.md`

## 🚦 How to Use

1. **Start Backend:** Run `python backend/main.py` 
2. **Start Frontend:** Open `frontend/index.html` or run `python -m http.server 8000`
3. **Register/Login:** Use the authentication system
4. **Explore:** Navigate through the responsive interface

## ⚠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Check if Python 3.7+ installed, install dependencies |
| Frontend not loading | Try different browser, check console for errors |
| Authentication issues | Verify Firebase configuration |
| Port already in use | Change port in `main.py` or kill existing process |

## 🚀 Features

- ✅ User Authentication (Login/Register)
- ✅ Responsive Design (Mobile-friendly)
- ✅ Profile Management
- ✅ Real-time Data with Firebase
- ✅ Secure Password Management
- ✅ Interactive UI Components

## 🔧 Development & Contributing

### Development Mode
```bash
# Backend (auto-reload)
python backend/main.py

# Frontend (live server)
python -m http.server 8000  # or use Live Server extension in VS Code
```

### Contributing
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License & Contact

**License:** MIT License  
**Contact:** [your.email@example.com](mailto:your.email@example.com)  
**Repository:** [GitHub Link](https://github.com/yourusername/repo-name)

---

⭐ **Star this repo if it helped you!** | 🐛 **Report issues** | 🤝 **Contribute**
