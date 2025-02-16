FROM python:3.12-slim

WORKDIR /app

# Copy application files
COPY . .

# Expose port
EXPOSE 8081

# Set host to 0.0.0.0 to make it accessible from outside the container
ENV HOST=0.0.0.0
ENV PORT=8081

# Run the server
CMD ["python3", "server.py"]