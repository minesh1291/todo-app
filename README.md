# Ubuntu-themed Todo App

A modern web application that provides a feature-rich todo list with Ubuntu's design language.

![Ubuntu Theme](https://assets.ubuntu.com/v1/a7e3c509-Aubergine_suru_background.png)

## Features

### Todo List
- ✅ Create, read, update, and delete todo items
- 📅 Set due dates for tasks
- ✨ Mark tasks as complete
- 💾 Persistent storage using localStorage
- 🎨 Ubuntu-themed interface

## Technical Stack

- **Frontend Framework**: Vue.js 3
- **Styling**: 
  - Bootstrap 5
  - Custom Ubuntu theme
  - CSS animations
- **Storage**: Browser's localStorage
- **Server**: Python SimpleHTTPServer with CORS support

## Project Structure

```
todo-app/
├── index.html          # Main HTML file
├── app.js             # Vue.js application logic
├── server.py          # Development server
└── README.md          # Documentation
```

## Components

### Todo List Component
- Responsive design
- Real-time updates
- Smooth animations
- Date picker integration
- Persistent storage

## Styling

The application uses Ubuntu's official color palette:
- `--ubuntu-purple`: #2c001e
- `--ubuntu-orange`: #E95420
- `--ubuntu-warm-grey`: #AEA79F
- `--ubuntu-light`: #f7f7f7

Features a modern, glass-morphism design with:
- Frosted glass effects
- Responsive layouts
- Animated components
- High contrast for accessibility

## Running the Application

### Local Development

1. Start the server:
   ```bash
   python3 server.py
   ```

2. Access the application:
   - URL: http://localhost:8081
   - Supports cross-origin requests
   - Works in modern browsers

### Docker Deployment

1. Using Docker Compose (recommended):
   ```bash
   docker-compose up --build
   ```

2. Using Docker directly:
   ```bash
   docker build -t todo-app .
   docker run -p 8081:8081 todo-app
   ```

3. Access points:
   - Local machine: http://localhost:8081
   - Network access: http://[your-ip-address]:8081
   - Docker host: http://[docker-host]:8081

### Environment Variables

The application supports the following environment variables:
- `HOST`: Server host (default: 0.0.0.0)
- `PORT`: Server port (default: 8081)

## Development

The application is structured for easy maintenance and extension:
- Modular JavaScript code
- CSS variables for theming
- Responsive design principles

## Browser Support

Tested and working in:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Future Enhancements

Planned features:
- [ ] Todo categories and filters
- [ ] Dark/Light theme toggle
- [ ] Mobile-optimized views
- [ ] Task priorities
- [ ] Subtasks support
- [ ] Task sharing

## Contributing

Feel free to contribute by:
1. Forking the repository
2. Creating a feature branch
3. Submitting a pull request

## License

This project is open source and available under the MIT License.