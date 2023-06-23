# Freelancers Listing Web App Documentation

## Overview

The Freelancers Listing Web App is a web application that allows users to browse and search for freelancers available with Dealflow. The app provides a user-friendly interface to view a list of freelancers, apply search filters, and navigate through the list using pagination.

## Features

1. **Freelancer Listing**: Displays a list of freelancers available with Dealflow, showcasing their relevant details and skills.
2. **Search Filtering**: Allows users to search for specific freelancers based on their name, skills, or any other relevant criteria.
3. **Pagination**: Enables users to navigate through the list of freelancers using pagination controls, such as previous and next buttons.
4. **Mock REST API**: Fetches freelancer data from a mock REST API endpoint to simulate real-world data retrieval.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing the application's state.
- Axios: A JavaScript library for making HTTP requests to fetch data from the mock REST API.
- Tailwind CSS: Used for structuring and styling the web app.
- JavaScript ES6: The programming language used for building the app's logic.

## Installation and Setup

1. Clone the repository from `https://github.com/davdtheemonk/dealflow`.
2. Set up your env file with the following environment variables `API_KEY` and `BASE_URL` from `https://mockaroo.com`
3. Install the required dependencies by running the command `npm install`.
4. Start the development server using `npm start`.
5. Access the app through the browser at `http://localhost:3000`.

## Usage

1. Upon accessing the app, you will be presented with an overview of the total number of freelancers on dealflow,number of verified freelancers on dealflow and number of unverified freelancers on dealflow.
2. Use the search filter to narrow down the list by entering specific search criteria.
3. Navigate through the list of freelancers using the pagination controls.
4. Interact with the app, explore different search queries, and navigate through pages to find freelancers matching your requirements.

## Testing

To ensure the app functions correctly and performs optimally, the following testing method were conducted:

1. **Performance Testing**: Measured and analyzed the app's performance metrics, such as loading time, memory usage, and responsiveness, to ensure optimal performance.
2. **Cross-Browser Testing**: Tested the app in different web browsers (e.g.Firefox, Edge) to ensure compatibility and consistent behavior.

## Known Issues and Limitations

1. **Search Accuracy**: The search functionality may not always yield accurate results,because the search algorithm is not robust and it can't address potential issues such as handling case sensitivity, partial matches, or handling special characters.

2. **Limited Search Functionality**: The search functionality is limited to specific fields, name and verification. Users may expect more advanced search options like filtering by availability, or rating.

3. **Incomplete or Inaccurate Freelancer Data**: The data source for the freelancers generates the data,so its not real and its may also be inconsistent since the data is regenerated for each refresh request on the app and API.

4. **Security Concerns**: The web app has no appropriate security measures in place to protect user data and prevent unauthorized access. The web does not address any potential vulnerabilities that may be caused by not implementing secure authentication and authorization mechanisms.

## Future Enhancements

Here are some potential future enhancements that you can consider adding to the Dealflow Freelancers Listing web app:

1. **User Authentication and Profiles**: Implement user authentication to allow freelancers to create accounts, log in, and manage their profiles. This can include features like updating their skills, availability, portfolio, and contact information.

2. **Sorting and Filtering Options**: Provide more advanced sorting and filtering options for freelancers. For example, users could sort freelancers by their ratings, hourly rates, or years of experience. Additional filters can be added to refine the search results further based on location, availability, or specific skill sets.

3. **Detailed Freelancer Pages**: Enhance the freelancer detail pages to display more comprehensive information about each freelancer. This can include their work history, client reviews and ratings, past projects, and any relevant certifications or qualifications.

4. **Messaging and Collaboration**: Implement a messaging or chat feature that enables users to communicate directly with freelancers to discuss project requirements, negotiate terms, or ask questions. This can facilitate better collaboration and streamline the hiring process.

5. **Recommendation System**: Develop a recommendation system that suggests freelancers based on a user's search history, saved freelancers, or previous interactions. This can help users discover relevant freelancers they may not have considered before.

6. **Advanced Pagination**: Enhance the pagination feature to provide more efficient and seamless navigation through the list of freelancers. Implement infinite scrolling or dynamic loading to load freelancers as the user scrolls down, reducing the need for manual pagination clicks.

## Coding Best Practices

To ensure code quality, readability, and maintainability, I followed these coding best practices when developing and the Dealflow Freelancers Listing web app:

### Consistent Code Style

- Maintained a consistent code style throughout the project.
- I used a code formatter, Prettier, to ensure consistent formatting, indentation, and naming conventions.

### Meaningful Variable and Function Names

- I used descriptive and meaningful names for variables, functions, and components.
- Clear and self-explanatory names that improve code readability and understanding.

### Proper Commenting

- Added comments to explain complex logic, document important decisions, and provide context where necessary.
- Well-placed comments will help other developers understand the codebase.

### Code Documentation

- I Documented my code to provide clear explanations of functions, components, and modules to assist other developers in using and extending the codebase.

### Code Version Control

- I utilized the version control system, Git, to manage the codebase.
- I Committed changes regularly with descriptive commit messages.

### Error Handling and Validation

- Implement proper error handling and validation mechanisms.
- Handle unexpected scenarios gracefully and validate user inputs on both the client and server sides.

### Performance Optimization

- Optimize code and algorithms for improved performance.
- Minimize unnecessary operations, reduce network requests, and implement caching strategies where applicable.

### Documentation and Issue Tracking

- Maintained comprehensive project documentation, including setup instructions, deployment guides, and API documentation.

### Continuous Integration and Deployment

- I Set up a CI/CD pipeline to automate testing, code linting, and deployment processes.
- Ensured that code changes are thoroughly tested and deployed efficiently.

# Deployment

# Continuous Integration and Deployment (CI/CD) Integration with Vercel and Checkly

## Overview

In order to ensure the reliability and quality of my application deployments on the Vercel platform, I have integrated a CI/CD pipeline in the repository to automate deployments. I have also included Checkly that seamlessly integrates with Vercel to provide automated monitoring and testing of my deployed applications. With this integration, I can identify and address issues early, guaranteeing that my apps are always deployed without errors.

## Integration Steps

1. **Logged In to Vercel**

   - Logged in to Vercel using Vercel CLI
   - Used `Vercel link` to generate VERCEL_ORG_ID and VERCEL_PROJECT_ID variables.
   -

2. **Connected Checkly to Vercel**

   - From my Vercel project dashboard, I navigated to the build checks section.
   - Looked for the Checkly integration and click on the Connect button.
   - Followed the authentication process to connect my Vercel account with Checkly.

3. **Configure Checkly Monitors**

   - Once the Vercel integration is set up, I navigated to the Checkly dashboard.
   - Create new monitors or select existing ones to run against my deployed Vercel applications.
   - Configure the monitors to perform checks or End-to-End (E2E) tests on the relevant URLs or endpoints of my Vercel deployments.

4. **Set Up GitHub Actions for VERCEL**

   - In my GitHub repository, I navigated to the Settings tab.
   - Added the Vercel variables `VERCEL_TOKEN, VERCEL_ORG_ID, and VERCEL_PROJECT_ID` as secrets to link my github repository to the vercel project.
   - Created the preview.yaml file in `.github/workflows/preview.yaml`
   - Configured the workflow file to trigger on events such as push, pull request, or deployment to the main branch.

5. **Verification of the Integration**
   - All checks passed and the successfully deployed to production branch.
   - Checkly monitors will automatically run against my deployed Vercel application, performing the specified checks and tests.
   - Monitor results will be available in the Checkly dashboard, allowing me to track the health and performance of my deployments.

With the integration of Vercel and Checkly in my CI/CD pipeline, I can ensure that my application is continuously monitored and tested, providing confidence in the reliability and quality of my deployments.
