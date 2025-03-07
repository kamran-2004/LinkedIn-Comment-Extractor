# LinkedIn Comment Extractor

![LinkedIn Logo](https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png)

A Chrome extension that extracts comments from LinkedIn posts and saves them as CSV files.

## Features
- Extracts comments from any LinkedIn post
- Saves data in CSV format
- Includes commenter name, comment text, profile link, and timestamp

## Installation

### Prerequisites
- Python 3.8+ installed
- Chrome browser

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/kamran-2004/LinkedIn-Comment-Extractor.git
   ```
2. Navigate to the project directory:
   ```bash
   cd LinkedIn-Comment-Extractor
   ```
3. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Install ChromeDriver matching your Chrome version

## Usage
1. Run the script:
   ```bash
   python script_fixed.py your_email@example.com your_password https://www.linkedin.com/feed/update/example
   ```
2. The CSV file will be saved in the `output` directory.

## Requirements
- Selenium
- ChromeDriver
- Python 3.8+

## Troubleshooting
- **Login Issues**: Ensure your LinkedIn credentials are correct
- **ChromeDriver Errors**: Verify ChromeDriver version matches your Chrome version

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

## License
[MIT](https://choosealicense.com/licenses/mit/)
