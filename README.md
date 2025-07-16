# 🧑‍💻 User Dashboard

A responsive **User Dashboard** built with **React**, **Bootstrap 5**, and **HTML/CSS**. It provides a modern admin panel to manage users, view login activities, capture webcam images, link mobile devices, and poll login status.

---

## 🌟 Features

- 📊 **Dashboard Overview**
  - View user list with join dates and active/inactive statuses
  - Display login activities including time, location, device, browser, and success/failure status

- 📷 **Capture Page**
  - Capture image from webcam and submit it as base64 encoded string

- 🔗 **Link Device**
  - Generate and display a 6-digit alphanumeric code and a QR code
  - Code expires after 5 minutes

- ⏳ **Waiting for Approval**
  - Periodically poll for login approval, denial, or expiration

- 📂 **Sidebar Navigation**
  - Navigate between pages using a clean, collapsible sidebar

- 🎯 Fully responsive design using **Bootstrap 5**

---

## 📁 Folder Structure

user-dashboard/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Sidebar.js # Sidebar navigation
│ │ ├── Dashboard.js # Users and login activity display
│ │ ├── Capture.js # Webcam capture page
│ │ ├── LinkDevice.js # QR code and manual code linking
│ │ ├── Login.js # Login form UI
│ │ └── WaitingApproval.js # Polling UI for login approval
│ ├── App.js # App routes and layout
│ └── index.js # React entry point
├── package.json
└── README.md

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm (comes with Node.js)

### 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/user-dashboard.git
cd user-dashboard
