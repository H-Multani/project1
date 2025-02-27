# Google Sheets-like Web Application

## Project Overview
This project is a web application that closely mimics the core functionalities and user interface of Google Sheets. It was developed as part of the Zeotap Software Engineer Intern Assignment (Jan 2025). The application focuses on implementing key spreadsheet features such as data entry, basic formatting, mathematical functions, and data quality tools.

## Features Implemented
- **Spreadsheet Interface**: A UI resembling Google Sheets with support for:
  - Toolbar, formula bar, and cell grid layout
  - Drag functionality for cell content and formulas
  - Cell dependencies for accurate formula updates
  - Basic formatting (bold, italics, font size, color)
  - Adding, deleting, and resizing rows and columns

- **Mathematical Functions**:
  - `SUM`, `AVERAGE`, `MAX`, `MIN`, `COUNT`

- **Data Quality Functions**:
  - `TRIM`, `UPPER`, `LOWER`
  - (Pending) `REMOVE_DUPLICATES`, `FIND_AND_REPLACE`

- **Data Entry and Validation**:
  - Support for numbers, text, and dates
  - Basic validation to ensure data integrity

- **Bonus Features**:
  - Ability to save and load spreadsheets
  - Potential for future data visualization support

## Tech Stack
- **React with Syncfusion Spreadsheet Component**: The Syncfusion library was chosen due to its rich spreadsheet functionality out-of-the-box, allowing rapid development within the short 2-day deadline. It provided essential features like cell formatting, formula support, and spreadsheet UI, minimizing the need to build complex features from scratch.
- **TypeScript**: Added type safety and helped maintain code quality and readability.

## Challenges & Workarounds
- **Limited Timeframe**: With only 2 days to complete the project, using Syncfusion's pre-built spreadsheet component accelerated development significantly.
- **Unimplemented Functions**: `REMOVE_DUPLICATES` and `FIND_AND_REPLACE` were not fully implemented due to time constraints but are planned for future updates.

## Installation & Usage
1. Clone the repository:
```bash
git clone <repository_url>
cd <repository_folder>
```
2. Install dependencies:
```bash
npm install
```
3. **Important:** Add your registered Syncfusion license key in `src/index.tsx` before starting the project.
```tsx
// src/index.tsx
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('YOUR_LICENSE_KEY');
```

4. Run the application:
```bash
npm start
```
5. Open `http://localhost:3000` in a browser to view the app.

## Future Improvements
- Complete `REMOVE_DUPLICATES` and `FIND_AND_REPLACE` functionalities.
- Introduce advanced data visualization (charts/graphs).
- Enhance formula support and introduce complex cell referencing.

## Evaluation Criteria Coverage
- **UI Fidelity**: The application strives to closely resemble Google Sheets.
- **Functionality**: Core spreadsheet and mathematical functions are in place.
- **Code Quality**: TypeScript and modular component-based architecture.
- **Usability**: Designed to be intuitive and user-friendly.

