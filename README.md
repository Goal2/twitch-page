# Twitch Profile Web

This project is a web application that compiles and displays information for a Twitch profile. It is built using React and TypeScript, providing a user-friendly interface to showcase Twitch user details.

## Project Structure

```
twitch-profile-web
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── components
│   │   └── ProfileCard.tsx # Component to display Twitch profile information
│   ├── pages
│   │   └── Home.tsx        # Main page of the application
│   ├── styles
│   │   └── main.css        # CSS styles for the application
│   └── utils
│       └── twitchApi.ts    # Functions for interacting with the Twitch API
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd twitch-profile-web
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## Usage

- Navigate to the home page to view the Twitch profile information.
- The application fetches user data from the Twitch API and displays it using the `ProfileCard` component.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.