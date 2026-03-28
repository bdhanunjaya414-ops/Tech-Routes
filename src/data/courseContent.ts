export interface Topic {
  id: string;
  title: string;
  definition: string;
  keyPoints: string[];
  example: string;
  realTimeExample?: string;
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface CourseContent {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export const courseContentData: Record<string, CourseContent> = {
  "python-fs": {
    id: "python-fs",
    title: "Python Full Stack",
    description: "Master Python from basics to advanced web development with React and MySQL.",
    modules: [
      {
        id: "html",
        title: "1. HTML (Structure of Web Pages)",
        topics: [
          {
            id: "html-basics",
            title: "HTML Basics",
            definition: "1. HTML is the standard Hyper Text markup language for creating the structure of web pages.\n2. It uses a series of elements to tell the browser how to display content.\n3. Every HTML document starts with a doctype declaration for cross-browser compatibility.\n4. It acts as the skeleton of any website, providing the foundation for styling.\n5. HTML elements are represented by tags that label pieces of content like headings and paragraphs.",
            keyPoints: ["What is HTML", "Structure of HTML document", "Tags, Elements, Attributes", "Head, Body, Title", "Comments"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <!-- This is a comment -->\n  <h1>Hello World</h1>\n</body>\n</html>",
            realTimeExample: "Think of HTML as the blueprint of a house, defining where the walls, doors, and windows go before any paint (CSS) is added."
          },

          {
            id: "Feature of HTML",
            title: "Features of HTML",
            definition: "1. HTML is a markup language that defines the structure of web pages.\n2. It is platform-independent and can be used on any device with a web browser.\n3. HTML is easy to learn and use, making it accessible to beginners.\n4. It supports multimedia elements like images, videos, and audio.\n5. HTML documents can be easily shared and published on the web.",
            keyPoints: ["Markup Language", "Platform-Independent", "Easy to Learn", "Multimedia Support", "Web Publishing"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <p>This is a simple paragraph.</p>\n</body>\n</html>",
            realTimeExample: "Think of HTML as the foundation of a building; it provides the basic structure upon which everything else is built."
          },
          {
            id: "Html versions",
            title: "HTML Versions",
            definition: "1. HTML has evolved through several versions, each introducing new features and improvements.\n2. HTML4.01 was a major milestone, introducing better support for multimedia and styling.\n3. XHTML is a stricter version of HTML that follows XML rules.\n4. HTML5 is the latest version, offering enhanced semantic elements and improved support for multimedia content.",
            keyPoints: ["HTML4.01", "XHTML", "HTML5"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <p>This is a simple paragraph.</p>\n</body>\n</html>",
            realTimeExample: "Think of HTML versions as different generations of a language, each building upon the previous one to offer more functionality and better user experience."
          },
          {
            id: "html editors",
            title: "HTML Editors",
            definition: "1. HTML editors are software applications used to create and edit HTML documents.\n2. They provide a user-friendly interface for writing HTML code without needing to remember all the syntax.\n3. Many editors offer features like syntax highlighting, auto-completion, and preview options.\n4. Some editors are specifically designed for web development and include additional tools for managing websites.\n5. Popular HTML editors include Visual Studio Code, Sublime Text, and Atom.",
            keyPoints: ["User-Friendly Interface", "Syntax Highlighting", "Auto-Completion", "Preview Options", "Web Development Tools"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <p>This is a simple paragraph.</p>\n</body>\n</html>",
            realTimeExample: "Think of HTML editors as the tools of a carpenter; they make the process of building a website more efficient and accurate."
          },
          {
            id: "Basic structure of HTML",
            title: "Basic Structure of HTML",
            definition: "1. Every HTML document has a basic structure that includes the DOCTYPE declaration, html, head, and body elements.\n2. The DOCTYPE declaration specifies the version of HTML being used.\n3. The html element is the root element of the HTML document.\n4. The head element contains meta information about the document, such as the title and character encoding.\n5. The body element contains the visible content of the webpage.",
            keyPoints: ["DOCTYPE Declaration", "html Element", "head Element", "body Element"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <p>This is a simple paragraph.</p>\n</body>\n</html>",
            realTimeExample: "Think of the basic structure as the skeleton of a building; it provides the framework upon which all other elements are built."
          },
          {
            id: "Html elements",
            title: "HTML Elements",
            definition: "1. HTML elements are the building blocks of an HTML document.\n2. They define the structure and content of the webpage.\n3. Elements can be nested within each other to create complex layouts.\n4. Some elements are self-closing, while others require opening and closing tags.\n5. Common HTML elements include headings, paragraphs, links, images, and lists.",
            keyPoints: ["Self-Closing Elements", "Nested Elements", "Opening and Closing Tags"],
            example: "<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n<a href='https://example.com'>This is a link</a>",
            realTimeExample: "Think of HTML elements as the components of a house; they are the fundamental parts that make up the structure."
          },
          {
            id: "opening tags and closing tags ",
            title: "Opening and Closing Tags",
            definition: "1. HTML tags are used to define the structure and content of an HTML document.\n2. Opening tags indicate the start of an element, while closing tags indicate the end.\n3. Some elements are self-closing and do not require a separate closing tag.\n4. Properly nested tags ensure the correct rendering of the webpage.\n5. Misplaced or missing tags can cause layout issues or prevent the page from displaying correctly.",
            keyPoints: ["Opening Tags", "Closing Tags", "Self-Closing Tags", "Nested Tags"],
            example: "<p>This is a paragraph.</p>\n<h1>This is a heading</h1>\n<img src='image.jpg' alt='An image'>",
            realTimeExample: "Think of opening and closing tags as the brackets in a sentence; they define the boundaries of each element."
          },
          {
            id: "html headings",
            title: "HTML Headings",
            definition: "1. HTML headings are used to define the structure and hierarchy of content on a webpage.\n2. There are six levels of headings, from <h1> (the most important) to <h6> (the least important).\n3. Headings should be used in a logical order to create a clear outline of the page.\n4. Search engines use headings to understand the content and structure of a webpage.\n5. Proper use of headings improves accessibility for users with disabilities.",
            keyPoints: ["Heading Hierarchy", "Semantic Meaning", "Accessibility"],
            example: "<h1>Main Title</h1>\n<h2>Section Title</h2>\n<h3>Subsection Title</h3>",
            realTimeExample: "Using heading tags to create a logical structure for a blog post, making it easier for readers and search engines to navigate."
          },
          {
            id: "html-paragraphs",
            title: "HTML Paragraphs",
            definition: "1. HTML paragraphs are used to define blocks of text in an HTML document.\n2. The <p> tag is used to create a paragraph element.\n3. Paragraphs are block-level elements, meaning they start on a new line and take up the full width available.\n4. Proper use of paragraphs helps organize content and improve readability.\n5. Avoid using <br> tags for spacing; instead, use CSS for styling purposes.",
            keyPoints: ["Block-Level Element", "Text Organization", "Readability"],
            example: "<p>This is the first paragraph.</p>\n<p>This is the second paragraph.</p>",
            realTimeExample: "Using paragraph tags to structure the main content of a webpage, ensuring that each idea is clearly separated and easy to read."

          },
          {
            id: "paragraph tags",
            title: "Paragraph Tags",
            definition: "1. The <p> tag is used to define a paragraph in HTML.\n2. Paragraphs are block-level elements, meaning they start on a new line and take up the full width available.\n3. Each paragraph should contain related information and be separated from other paragraphs.\n4. Proper use of paragraph tags helps organize content and improve readability.\n5. Avoid using <br> tags for spacing; instead, use CSS for styling purposes.",
            keyPoints: ["Block-Level Element", "Text Organization", "Readability"],
            example: "<p>This is the first paragraph.</p>\n<p>This is the second paragraph.</p>",
            realTimeExample: "Using paragraph tags to structure the main content of a webpage, ensuring that each idea is clearly separated and easy to read."
          },
          {
            id : "line breaks",
            title: "Line Breaks",
            definition: "1. The <br> tag is used to insert a single line break in an HTML document.\n2. It is an empty tag, meaning it has no closing tag.\n3. Line breaks are useful for creating a new line within a paragraph or other block-level element.\n4. However, excessive use of <br> tags can make the code harder to maintain and less semantic.\n5. It's generally better to use CSS for controlling spacing and layout.",
            keyPoints: ["Empty Tag", "Single Line Break", "Semantic HTML"],
            example: "<p>This is the first line.<br>This is the second line.</p>",
            realTimeExample: "Using line breaks to create a simple poem or address format within a webpage."
          },
          {
            id: "horizontal rule",
            title: "Horizontal Rule",
            definition: "1. The <hr> tag is used to insert a horizontal rule in an HTML document.\n2. It is an empty tag, meaning it has no closing tag.\n3. Horizontal rules are used to separate sections of content visually.\n4. They are block-level elements and typically render as a horizontal line across the page.\n5. Like other semantic elements, <hr> should be used for its intended purpose rather than for styling purposes.",
            keyPoints: ["Empty Tag", "Section Separator", "Semantic HTML"],
            example: "<p>This is the first section.</p>\n<hr>\n<p>This is the second section.</p>",
            realTimeExample: "Using a horizontal rule to separate different sections of a blog post or article."
          },
          {
            id: "html text formatting tags",
            title: "HTML Text Formatting Tags",
            definition: "1. HTML provides several tags for formatting text, including <strong>, <em>, <u>, and <s>.\n2. These tags are semantic and provide meaning to the text they wrap.\n3. <strong> is used to indicate strong importance or urgency.\n4. <em> is used to indicate emphasis or stress.\n5. <u> is used to underline text.\n6. <s> is used to indicate deleted or incorrect text.",
            keyPoints: ["Semantic Tags", "Text Emphasis", "Text Decoration"],
            example: "<p>This is <strong>bold</strong> text.</p>\n<p>This is <em>italic</em> text.</p>\n<p>This is <u>underlined</u> text.</p>\n<p>This is <s>strikethrough</s> text.</p>",
            realTimeExample: "Using semantic text formatting tags to improve the accessibility and SEO of a webpage."
          },
          {
            id: "html attributes",
            title: "HTML Attributes",
            definition: "1. HTML attributes provide additional information about HTML elements.\n2. They are specified within the opening tag of an element.\n3. Attributes consist of a name and a value, separated by an equals sign.\n4. Common attributes include id, class, src, href, and alt.\n5. Attributes help in styling, scripting, and providing metadata about the content.",
            keyPoints: ["Attribute Syntax", "id Attribute", "class Attribute", "src Attribute"],
            example: "<img src=\"image.jpg\" alt=\"Description of image\">\n<a href=\"https://example.com\">Link Text</a>",
            realTimeExample: "Using the id attribute to create anchor links within a webpage."
          },
          {
            id: "html images",
            title: "HTML Images",
            definition: "1. The <img> tag is used to embed images in an HTML page.\n2. It is an empty tag, meaning it has no closing tag.\n3. The src attribute specifies the path to the image file.\n4. The alt attribute provides alternative text for the image, which is displayed if the image cannot be loaded.\n5. Images can be styled using CSS to control their size, position, and appearance.",
            keyPoints: ["Image Tag", "src Attribute", "alt Attribute", "Image Styling"],
            example: "<img src=\"image.jpg\" alt=\"Description of image\">",
            realTimeExample: "Adding a responsive image to a webpage that adjusts its size based on the device screen width."
          },
          {
            id : "html lists",
            title: "HTML Lists",
            definition: "1. HTML provides three types of lists: ordered (ol), unordered (ul), and description (dl).\n2. Ordered lists are used to display items in a numbered sequence.\n3. Unordered lists are used to display items in a bulleted format.\n4. Description lists are used to display terms and their descriptions.\n5. List items (li) are used to define each item within a list.",
            keyPoints: ["Ordered Lists", "Unordered Lists", "Description Lists"],
            example: "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n</ol>\n<ul>\n  <li>First item</li>\n  <li>Second item</li>\n</ul>",
            realTimeExample: "Creating a recipe with an ordered list of steps and an unordered list of ingredients."
          },
          {
            id: "html tables",
            title: "HTML Tables",
            definition: "1. The <table> tag is used to create tables in an HTML page.\n2. Tables are made up of rows (<tr>) and columns (<td> or <th>).\n3. <th> tags are used for header cells, while <td> tags are used for data cells.\n4. Tables can be styled using CSS to control their appearance, spacing, and layout.",
            keyPoints: ["Table Tag", "Row and Column Tags", "Header Cells", "Data Cells"],
            example: "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>",
            realTimeExample: "Displaying a list of products with their details in a tabular format on an e-commerce website."
          },
          {
            id: "html forms",
            title: "HTML Forms",
            definition: "1. The <form> tag is used to create an HTML form for user input.\n2. Forms can contain various input elements like text fields, checkboxes, radio buttons, and submit buttons.\n3. The action attribute specifies where to send the form data when submitted.\n4. The method attribute defines how to send the form data (GET or POST).\n5. Forms are essential for collecting user information and interacting with web servers.",
            keyPoints: ["Form Tag", "Input Elements", "Action Attribute", "Method Attribute"],
            example: "<form action=\"/submit\" method=\"post\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\">\n  <input type=\"submit\" value=\"Submit\">\n</form>",
            realTimeExample: "Creating a contact form on a website that allows users to submit their details and messages."

          },
          {
            id: "html inputs",
            title: "HTML Inputs",
            definition: "1. The <input> tag is used to create interactive elements for user input in HTML forms.\n2. Different types of input fields can be created using the type attribute (e.g., text, email, password, checkbox, radio).\n3. Input fields can have various attributes like name, value, placeholder, and required.\n4. The name attribute is important for identifying the input field when the form is submitted.\n5. Input fields can be styled using CSS to improve their appearance and user experience.",
            keyPoints: ["Input Tag", "Input Types", "Input Attributes", "Form Submission"],
            example: "<input type=\"text\" name=\"username\" placeholder=\"Enter your username\">\n<input type=\"email\" name=\"email\" placeholder=\"Enter your email\">\n<input type=\"password\" name=\"password\" placeholder=\"Enter your password\">",
            realTimeExample: "Creating a login form with text inputs for username and password."
          },
          {
            id: "html semantic elements",
            title: "HTML Semantic Elements",
            definition: "1. Semantic elements provide meaning to the structure of an HTML document.\n2. They help improve accessibility and SEO by clearly indicating the purpose of different sections.\n3. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>.",
            keyPoints: ["Header", "Navigation", "Main Content", "Article", "Section", "Aside", "Footer"],
            example: "<header>\n  <h1>My Website</h1>\n</header>\n<nav>\n  <ul>\n    <li><a href=\"#home\">Home</a></li>\n    <li><a href=\"#about\">About</a></li>\n  </ul>\n</nav>",
            realTimeExample: "Structuring a webpage with a clear header, navigation menu, main content area, and footer."
          },
          {
            id: "html multimedia",
            title: "HTML Multimedia",
            definition: "1. The <img> tag is used to embed images in an HTML page.\n2. The <audio> and <video> tags are used to embed audio and video content respectively.\n3. These elements can have various attributes for controlling their display and behavior.\n4. Accessibility features like alt text for images and captions for videos should be included.\n5. Properly handling multimedia content enhances the user experience and makes the content more engaging.",
            keyPoints: ["Image Embedding", "Audio Embedding", "Video Embedding", "Accessibility"],
            example: "<img src=\"image.jpg\" alt=\"Description of the image\">\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n</audio>\n<video controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video>",
            realTimeExample: "Adding an image gallery with play buttons for audio and video content."

          },
          {
            id: "html iframes",
            title: "HTML Iframes",
            definition: "1. The <iframe> tag is used to embed another HTML page within the current page.\n2. It allows for the integration of external content, such as maps, videos, or other web pages.\n3. The src attribute specifies the URL of the page to embed.\n4. Iframes can have various attributes for controlling their size and behavior.\n5. Security considerations should be taken into account when using iframes, as they can potentially introduce vulnerabilities.",
            keyPoints: ["Embedding External Content", "src Attribute", "Size Control", "Security Considerations"],
            example: "<iframe src=\"https://www.example.com\" width=\"600\" height=\"400\"></iframe>",
            realTimeExample: "Embedding a Google Map or a YouTube video within a webpage."
          
          },
          {
            id: "html entities",
            title: "HTML Entities",
            definition: "1. HTML entities are used to represent characters that have special meaning in HTML.\n2. They are written as &name; or &#number;.\n3. Common entities include &lt; for <, &gt; for >, &amp; for &, &quot; for \", and &apos; for '.\n4. Entities are useful for displaying characters that would otherwise be interpreted as HTML code.\n5. They help ensure proper rendering of text across different browsers and platforms.",
            keyPoints: ["Entity Syntax", "Common Entities", "Special Characters"],
            example: "<p>This is a paragraph with a less than sign: &lt;</p>\n<p>This is a paragraph with an ampersand: &amp;</p>",
            realTimeExample: "Displaying code snippets or special characters in HTML content."
          },
          {
            id: "html comments",
            title: "HTML Comments",
            definition: "1. HTML comments are used to add notes or explanations within the HTML code that are not displayed in the browser.\n2. They are written as <!-- comment -->.\n3. Comments can be used for debugging, documentation, or temporarily disabling code.\n4. They help other developers understand the purpose of specific sections of code.\n5. Comments should be used judiciously to avoid cluttering the code with unnecessary information.",
            keyPoints: ["Comment Syntax", "Usage for Documentation", "Debugging", "Disabling Code"],
            example: "<!-- This is a comment -->\n<p>This is a paragraph.</p>",
            realTimeExample: "Adding a note to explain a complex section of HTML code."
          },
          {
            id: "html blocks and inline elements",
            title: "HTML Blocks and Inline Elements",
            definition: "1. HTML elements can be categorized as either block-level or inline elements.\n2. Block-level elements start on a new line and take up the full width available.\n3. Inline elements do not start on a new line and only take up as much width as necessary.\n4. Understanding the difference is crucial for proper layout and styling of web pages.\n5. Common block-level elements include <div>, <p>, <h1>-<h6>, while common inline elements include <span>, <a>, <strong>, and <em>.",
            keyPoints: ["Block-level Elements", "Inline Elements", "Layout Control"],
            example: "<div>This is a block-level element.</div>\n<span>This is an inline element.</span>",
            realTimeExample: "Creating a navigation menu with block-level links and inline text within each link."
          },
          {
            id: "html div and span",
            title: "HTML div and span",
            definition: "1. The <div> element is a block-level container used to group other HTML elements together.\n2. The <span> element is an inline container used to mark up a part of a text or a part of a document.\n3. Both elements are commonly used for styling and layout purposes.\n4. <div> elements are often used to create sections or divisions within a webpage.\n5. <span> elements are typically used to apply styles or scripts to specific parts of the text.",
            keyPoints: ["div Element", "span Element", "Usage for Grouping", "Layout Control"],
            example: "<div>This is a div element.</div>\n<p>This is a paragraph with a <span>highlighted</span> section.</p>",
            realTimeExample: "Using <div> elements to create distinct sections on a webpage and <span> elements to apply unique styling to specific words or phrases."
          },

          {
            id: "html classes and ids",
            title: "HTML Classes and IDs",
            definition: "1. Classes and IDs are attributes used to identify and target specific HTML elements.\n2. Classes can be applied to multiple elements, allowing for consistent styling across several items.\n3. IDs are unique identifiers for individual elements, ensuring no duplicates within a page.\n4. Both classes and IDs are commonly used in CSS to apply targeted styles.\n5. Using classes and IDs effectively can improve the maintainability and organization of HTML and CSS code.",
            keyPoints: ["Classes", "IDs", "Unique Identification", "Styling Targeting"],
            example: "<div class=\"container\" id=\"main-content\">\n  <p class=\"text\">This is a paragraph with a class.</p>\n</div>",
            realTimeExample: "Applying a specific background color to the main content area using an ID, while using a class to style all paragraphs within that area."
          },
          {
            id: "html meta tags",
            title: "HTML Meta Tags",
            definition: "1. Meta tags are used to provide metadata about an HTML document.\n2. They are placed in the <head> section of the document.\n3. Common meta tags include charset, viewport, description, and keywords.\n4. Meta tags do not display content directly but provide information to browsers and search engines.\n5. Proper use of meta tags can improve SEO and user experience.",
            keyPoints: ["Meta Tags", "Charset", "Viewport", "Description", "Keywords"],
            example: "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"description\" content=\"A brief description of the page\">",
            realTimeExample: "Setting the character encoding and viewport for a responsive webpage."
          },
          {
            id: "html seo basics",
            title: "HTML SEO Basics",
            definition: "1. SEO (Search Engine Optimization) involves techniques to improve a website's visibility in search engine results.\n2. HTML elements play a crucial role in SEO, including title tags, meta descriptions, and heading structures.\n3. Proper use of HTML tags can help search engines understand the content and context of a webpage.\n4. Alt text for images and semantic HTML elements also contribute to better SEO performance.\n5. Implementing these practices can lead to higher rankings and increased organic traffic.",
            keyPoints: ["Title Tags", "Meta Descriptions", "Heading Structure", "Alt Text", "Semantic HTML"],
            example: "<title>My Awesome Website</title>\n<meta name=\"description\" content=\"A brief description of the page\">\n<h1>Main Heading</h1>\n<h2>Subheading</h2>",
            realTimeExample: "Optimizing the title tag and meta description for a blog post to improve its search engine visibility."
          },
          {
            id: "html accessibility",
            title: "HTML Accessibility",
            definition: "1. HTML accessibility involves creating web content that can be used by people with disabilities.\n2. Semantic HTML elements provide meaningful structure and context to assistive technologies.\n3. Proper use of attributes like 'alt' for images and 'label' for form elements enhances accessibility.\n4. Ensuring sufficient color contrast and keyboard navigability is crucial for accessible design.\n5. Implementing these practices ensures that all users, regardless of their abilities, can effectively interact with the website.",
            keyPoints: ["Semantic HTML", "Alt Text", "Form Labels", "Color Contrast", "Keyboard Navigability"],
            example: "<img src=\"image.jpg\" alt=\"A description of the image\">\n<label for=\"email\">Email:</label>\n<input type=\"email\" id=\"email\" name=\"email\">",
            realTimeExample: "Adding descriptive alt text to images and using proper form labels to improve accessibility for screen reader users."
          },
          {
            id: "html best practices",
            title: "HTML Best Practices",
            definition: "1. Using semantic HTML elements improves code readability and maintainability.\n2. Properly structuring content with headings and paragraphs enhances accessibility.\n3. Implementing responsive design ensures the website functions well on various devices.\n4. Optimizing images for the web improves loading times and user experience.\n5. Following these practices leads to more robust, accessible, and user-friendly websites.",
            keyPoints: ["Semantic HTML", "Content Structure", "Responsive Design", "Image Optimization", "User Experience"],
            example: "<header>\n  <h1>My Website</h1>\n</header>\n<main>\n  <p>Welcome to my website!</p>\n</main>",
            realTimeExample: "Using semantic elements like <header>, <main>, and <footer> to improve the structure and accessibility of a webpage."

          },
          {
            id: "html5 mini projects",
            title: "HTML5 Mini Projects",
            definition: "1. Building a simple landing page with modern HTML5 semantic elements.\n2. Creating a responsive navigation menu using HTML5 and CSS3.\n3. Implementing a contact form with proper HTML5 validation.\n4. Developing a multimedia presentation using HTML5 video and audio elements.\n5. Designing a mobile-friendly website with responsive design principles.",
            keyPoints: ["Semantic Elements", "Responsive Design", "Form Validation", "Multimedia Integration", "Mobile-Friendly Layout"],
            example: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Website</title>\n</head>\n<body>\n  <header>\n    <h1>My Website</h1>\n  </header>\n  <main>\n    <p>Welcome to my website!</p>\n  </main>\n</body>\n</html>",
            realTimeExample: "Creating a simple landing page with a header, main content area, and footer using semantic HTML5 elements"
          }
        ]  
      },
{
  id: "css",
  title: "2. CSS (Styling)",
  topics: [
    {
      id: "css-introduction",
      title: "1. Introduction to CSS",
      definition: "1. CSS stands for Cascading Style Sheets.\n2. It is used to style and design HTML elements.\n3. CSS controls colors, spacing, layout, and fonts.\n4. It separates structure from design.\n5. CSS makes websites attractive and responsive.",
      keyPoints: ["What is CSS", "History of CSS", "Advantages of CSS", "CSS Versions", "How CSS Works"],
      example: "body {\n  background-color: lightblue;\n}",
      realTimeExample: "Changing a plain HTML page into a colorful modern website."
    },

    {
      id: "css-syntax",
      title: "2. CSS Syntax",
      definition: "1. CSS syntax defines how styles are written.\n2. A selector targets an HTML element.\n3. Property defines what to style.\n4. Value sets style result.\n5. Declarations are written inside curly braces.",
      keyPoints: ["Selector", "Property", "Value", "Declaration Block", "Comments"],
      example: "p {\n  color: red;\n}",
      realTimeExample: "Changing all paragraph text color in a website."
    },

    {
      id: "css-apply-methods",
      title: "3. Ways to Apply CSS",
      definition: "1. CSS can be added inline, internal, or external.\n2. Inline CSS affects one element.\n3. Internal CSS affects one page.\n4. External CSS affects full project.\n5. External CSS is best for large websites.",
      keyPoints: ["Inline CSS", "Internal CSS", "External CSS"],
      example: "<p style='color:blue;'>Hello</p>",
      realTimeExample: "Using one stylesheet for entire website."
    },

    {
      id: "css-selectors",
      title: "4. CSS Selectors",
      definition: "1. Selectors target elements for styling.\n2. Universal selector styles all elements.\n3. Class targets multiple elements.\n4. ID targets one unique element.\n5. Advanced selectors improve precise styling.",
      keyPoints: ["Universal Selector", "Element Selector", "Class Selector", "ID Selector", "Group Selector", "Descendant Selector", "Child Selector", "Adjacent Sibling Selector", "General Sibling Selector"],
      example: ".card {\n  border: 1px solid black;\n}",
      realTimeExample: "Styling all cards in product section."
    },

    {
      id: "css-colors",
      title: "5. CSS Colors",
      definition: "1. CSS colors style text and backgrounds.\n2. Named colors are simple words.\n3. HEX uses hexadecimal values.\n4. RGB mixes red green blue.\n5. RGBA adds transparency.",
      keyPoints: ["Color Names", "HEX Colors", "RGB Colors", "RGBA Colors", "HSL Colors", "HSLA Colors"],
      example: "h1 {\n  color: #ff0000;\n}",
      realTimeExample: "Applying company brand colors."
    },

    {
      id: "css-backgrounds",
      title: "6. CSS Backgrounds",
      definition: "1. Background styles page surfaces.\n2. Colors create simple backgrounds.\n3. Images create rich visual design.\n4. Position controls placement.\n5. Size controls fit.",
      keyPoints: ["Background Color", "Background Image", "Background Repeat", "Background Position", "Background Size", "Background Attachment", "Background Shorthand"],
      example: "body {\n  background-image: url('bg.jpg');\n}",
      realTimeExample: "Website hero section background image."
    },

    {
      id: "css-borders",
      title: "7. CSS Borders",
      definition: "1. Borders define edges around elements.\n2. Width sets thickness.\n3. Style sets line type.\n4. Radius creates rounded corners.\n5. Borders improve UI clarity.",
      keyPoints: ["Border Width", "Border Style", "Border Color", "Border Radius", "Border Shorthand"],
      example: "div {\n  border: 2px solid blue;\n}",
      realTimeExample: "Card border design."
    },

    {
      id: "css-margin",
      title: "8. CSS Margin",
      definition: "1. Margin creates outside spacing.\n2. Top margin creates upper gap.\n3. Bottom margin creates lower gap.\n4. Auto centers elements.\n5. Shorthand saves code.",
      keyPoints: ["Margin Top", "Margin Right", "Margin Bottom", "Margin Left", "Margin Shorthand", "Auto Margin"],
      example: "div {\n  margin: 20px auto;\n}",
      realTimeExample: "Centering website container."
    },

    {
      id: "css-padding",
      title: "9. CSS Padding",
      definition: "1. Padding creates inner spacing.\n2. Padding improves readability.\n3. Top padding adds upper space.\n4. Horizontal padding widens content.\n5. Shorthand simplifies writing.",
      keyPoints: ["Padding Top", "Padding Right", "Padding Bottom", "Padding Left", "Padding Shorthand"],
      example: "button {\n  padding: 10px 20px;\n}",
      realTimeExample: "Button spacing in forms."
    },

    {
      id: "css-width-height",
      title: "10. CSS Width and Height",
      definition: "1. Width controls horizontal size.\n2. Height controls vertical size.\n3. Max-width limits expansion.\n4. Min-width prevents shrinking.\n5. Responsive layouts depend on width control.",
      keyPoints: ["Width", "Height", "Max Width", "Min Width", "Max Height", "Min Height"],
      example: "div {\n  width: 300px;\n  height: 200px;\n}",
      realTimeExample: "Responsive image containers."
    }
  ]
},


     {
       id: "css",
       title: "2. CSS (Styling)",
       topics: [
    {
      id: "css-introduction",
      title: "1. Introduction to CSS",
      definition: "1. CSS stands for Cascading Style Sheets.\n2. It is used to style and design HTML elements.\n3. CSS controls colors, spacing, layout, and fonts.\n4. It separates structure from design.\n5. CSS makes websites attractive and responsive.",
      keyPoints: ["What is CSS", "History of CSS", "Advantages of CSS", "CSS Versions", "How CSS Works"],
      example: "body {\n  background-color: lightblue;\n}",
      realTimeExample: "Changing a plain HTML page into a colorful modern website."
    },

    {
      id: "css-syntax",
      title: "2. CSS Syntax",
      definition: "1. CSS syntax defines how styles are written.\n2. A selector targets an HTML element.\n3. Property defines what to style.\n4. Value sets style result.\n5. Declarations are written inside curly braces.",
      keyPoints: ["Selector", "Property", "Value", "Declaration Block", "Comments"],
      example: "p {\n  color: red;\n}",
      realTimeExample: "Changing all paragraph text color in a website."
    },

    {
      id: "css-apply-methods",
      title: "3. Ways to Apply CSS",
      definition: "1. CSS can be added inline, internal, or external.\n2. Inline CSS affects one element.\n3. Internal CSS affects one page.\n4. External CSS affects full project.\n5. External CSS is best for large websites.",
      keyPoints: ["Inline CSS", "Internal CSS", "External CSS"],
      example: "<p style='color:blue;'>Hello</p>",
      realTimeExample: "Using one stylesheet for entire website."
    },

    {
      id: "css-selectors",
      title: "4. CSS Selectors",
      definition: "1. Selectors target elements for styling.\n2. Universal selector styles all elements.\n3. Class targets multiple elements.\n4. ID targets one unique element.\n5. Advanced selectors improve precise styling.",
      keyPoints: ["Universal Selector", "Element Selector", "Class Selector", "ID Selector", "Group Selector", "Descendant Selector", "Child Selector", "Adjacent Sibling Selector", "General Sibling Selector"],
      example: ".card {\n  border: 1px solid black;\n}",
      realTimeExample: "Styling all cards in product section."
    },

    {
      id: "css-colors",
      title: "5. CSS Colors",
      definition: "1. CSS colors style text and backgrounds.\n2. Named colors are simple words.\n3. HEX uses hexadecimal values.\n4. RGB mixes red green blue.\n5. RGBA adds transparency.",
      keyPoints: ["Color Names", "HEX Colors", "RGB Colors", "RGBA Colors", "HSL Colors", "HSLA Colors"],
      example: "h1 {\n  color: #ff0000;\n}",
      realTimeExample: "Applying company brand colors."
    },

    {
      id: "css-backgrounds",
      title: "6. CSS Backgrounds",
      definition: "1. Background styles page surfaces.\n2. Colors create simple backgrounds.\n3. Images create rich visual design.\n4. Position controls placement.\n5. Size controls fit.",
      keyPoints: ["Background Color", "Background Image", "Background Repeat", "Background Position", "Background Size", "Background Attachment", "Background Shorthand"],
      example: "body {\n  background-image: url('bg.jpg');\n}",
      realTimeExample: "Website hero section background image."
    },

    {
      id: "css-borders",
      title: "7. CSS Borders",
      definition: "1. Borders define edges around elements.\n2. Width sets thickness.\n3. Style sets line type.\n4. Radius creates rounded corners.\n5. Borders improve UI clarity.",
      keyPoints: ["Border Width", "Border Style", "Border Color", "Border Radius", "Border Shorthand"],
      example: "div {\n  border: 2px solid blue;\n}",
      realTimeExample: "Card border design."
    },

    {
      id: "css-margin",
      title: "8. CSS Margin",
      definition: "1. Margin creates outside spacing.\n2. Top margin creates upper gap.\n3. Bottom margin creates lower gap.\n4. Auto centers elements.\n5. Shorthand saves code.",
      keyPoints: ["Margin Top", "Margin Right", "Margin Bottom", "Margin Left", "Margin Shorthand", "Auto Margin"],
      example: "div {\n  margin: 20px auto;\n}",
      realTimeExample: "Centering website container."
    },

    {
      id: "css-padding",
      title: "9. CSS Padding",
      definition: "1. Padding creates inner spacing.\n2. Padding improves readability.\n3. Top padding adds upper space.\n4. Horizontal padding widens content.\n5. Shorthand simplifies writing.",
      keyPoints: ["Padding Top", "Padding Right", "Padding Bottom", "Padding Left", "Padding Shorthand"],
      example: "button {\n  padding: 10px 20px;\n}",
      realTimeExample: "Button spacing in forms."
    },

    {
      id: "css-width-height",
      title: "10. CSS Width and Height",
      definition: "1. Width controls horizontal size.\n2. Height controls vertical size.\n3. Max-width limits expansion.\n4. Min-width prevents shrinking.\n5. Responsive layouts depend on width control.",
      keyPoints: ["Width", "Height", "Max Width", "Min Width", "Max Height", "Min Height"],
      example: "div {\n  width: 300px;\n  height: 200px;\n}",
      realTimeExample: "Responsive image containers."
    }
  ],
         topics: [
    {
      id: "css-box-model",
      title: "11. CSS Box Model",
      definition: "1. Every HTML element is treated as a rectangular box in CSS.\n2. The box model consists of content, padding, border, and margin.\n3. Content is the actual text or image area.\n4. Padding adds space inside the border.\n5. Margin adds space outside the border.",
      keyPoints: ["Content", "Padding", "Border", "Margin"],
      example: "div {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n}",
      realTimeExample: "Card components in modern websites use box model spacing."
    },

    {
      id: "css-text-styling",
      title: "12. CSS Text Styling",
      definition: "1. CSS text properties control appearance of written content.\n2. Text color changes font color.\n3. Alignment controls text position.\n4. Decoration adds underline or line-through.\n5. Shadow creates visual depth.",
      keyPoints: ["Text Color", "Text Alignment", "Text Decoration", "Text Transform", "Text Indent", "Letter Spacing", "Word Spacing", "Line Height", "Text Shadow"],
      example: "p {\n  text-align: center;\n  text-transform: uppercase;\n}",
      realTimeExample: "Center aligned headings in portfolio websites."
    },

    {
      id: "css-fonts",
      title: "13. CSS Fonts",
      definition: "1. Fonts define typography style.\n2. Font family changes font type.\n3. Font size controls readability.\n4. Weight changes boldness.\n5. Google Fonts provide professional typography.",
      keyPoints: ["Font Family", "Font Size", "Font Weight", "Font Style", "Google Fonts"],
      example: "body {\n  font-family: Arial;\n  font-size: 16px;\n}",
      realTimeExample: "Using Poppins font in modern UI design."
    },

    {
      id: "css-icons",
      title: "14. CSS Icons",
      definition: "1. Icons improve visual communication.\n2. Font Awesome provides scalable icons.\n3. Bootstrap Icons are lightweight.\n4. Icons can be styled like text.\n5. They improve navigation clarity.",
      keyPoints: ["Font Awesome", "Bootstrap Icons"],
      example: "<i class='fa fa-home'></i>",
      realTimeExample: "Home icon in navigation bar."
    },

    {
      id: "css-links",
      title: "15. CSS Links",
      definition: "1. Links have different states in CSS.\n2. Hover changes appearance on mouse over.\n3. Active styles clicked state.\n4. Visited styles opened links.\n5. Proper styling improves UX.",
      keyPoints: ["Link States", "Hover", "Active", "Visited"],
      example: "a:hover {\n  color: red;\n}",
      realTimeExample: "Navigation links changing color when hovered."
    },

    {
      id: "css-lists",
      title: "16. CSS Lists",
      definition: "1. CSS styles ordered and unordered lists.\n2. List style type changes bullets.\n3. Position controls bullet placement.\n4. Images can replace bullets.\n5. Lists improve menu design.",
      keyPoints: ["List Style Type", "List Style Position", "List Style Image"],
      example: "ul {\n  list-style-type: square;\n}",
      realTimeExample: "Sidebar menu bullets."
    },

    {
      id: "css-tables",
      title: "17. CSS Tables",
      definition: "1. CSS improves table appearance.\n2. Border collapse removes double borders.\n3. Width controls size.\n4. Zebra stripes improve readability.\n5. Hover highlights rows.",
      keyPoints: ["Border Collapse", "Table Width", "Table Alignment", "Zebra Stripes", "Hover Effect"],
      example: "table {\n  border-collapse: collapse;\n}",
      realTimeExample: "Student result table styling."
    },

    {
      id: "css-display",
      title: "18. CSS Display Property",
      definition: "1. Display controls how elements appear.\n2. Block takes full width.\n3. Inline stays same line.\n4. Inline-block combines both.\n5. None hides element.",
      keyPoints: ["Block", "Inline", "Inline-block", "None"],
      example: "span {\n  display: block;\n}",
      realTimeExample: "Navigation menu layout."
    },

    {
      id: "css-position",
      title: "19. CSS Position",
      definition: "1. Position controls exact placement.\n2. Static is default.\n3. Relative shifts from original position.\n4. Absolute positions relative to parent.\n5. Fixed stays on screen.",
      keyPoints: ["Static", "Relative", "Absolute", "Fixed", "Sticky", "z-index"],
      example: "div {\n  position: absolute;\n  top: 20px;\n}",
      realTimeExample: "Sticky navbar."
    },

    {
      id: "css-overflow",
      title: "20. CSS Overflow",
      definition: "1. Overflow controls extra content behavior.\n2. Visible shows overflow.\n3. Hidden cuts extra content.\n4. Scroll adds scrollbar.\n5. Auto shows scrollbar only when needed.",
      keyPoints: ["Visible", "Hidden", "Scroll", "Auto"],
      example: "div {\n  overflow: scroll;\n}",
      realTimeExample: "Scrollable content cards."
    },
{
  topics: [
    {
      id: "css-float-clear",
      title: "21. CSS Float and Clear",
      definition: "1. Float moves elements left or right inside a container.\n2. Left float places element to left side.\n3. Right float places element to right side.\n4. Clear stops floating behavior.\n5. Float was widely used before Flexbox.",
      keyPoints: ["Float Left", "Float Right", "Clear Property"],
      example: "img {\n  float: left;\n}",
      realTimeExample: "Wrapping text around an image."
    },

    {
      id: "css-flexbox",
      title: "22. CSS Flexbox",
      definition: "1. Flexbox creates one-dimensional layouts.\n2. Flex container manages child alignment.\n3. justify-content aligns horizontally.\n4. align-items aligns vertically.\n5. Flexbox simplifies responsive layouts.",
      keyPoints: ["Flex Container", "Flex Items", "flex-direction", "justify-content", "align-items", "flex-wrap", "gap", "order"],
      example: ".container {\n  display: flex;\n  justify-content: center;\n}",
      realTimeExample: "Navigation bars and card rows."
    },

    {
      id: "css-grid",
      title: "23. CSS Grid",
      definition: "1. Grid creates two-dimensional layouts.\n2. Rows and columns define structure.\n3. grid-template-columns sets column size.\n4. grid-row controls row span.\n5. Grid is ideal for dashboards.",
      keyPoints: ["Grid Container", "Grid Items", "grid-template-columns", "grid-template-rows", "gap", "grid-column", "grid-row"],
      example: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n}",
      realTimeExample: "Dashboard layout."
    },

    {
      id: "css-units",
      title: "24. CSS Units",
      definition: "1. Units define measurements in CSS.\n2. px gives fixed pixels.\n3. % gives relative size.\n4. rem scales with root font.\n5. vw and vh depend on viewport.",
      keyPoints: ["px", "%", "em", "rem", "vw", "vh"],
      example: "div {\n  width: 50%;\n}",
      realTimeExample: "Responsive containers."
    },

    {
      id: "css-pseudo-classes",
      title: "25. CSS Pseudo Classes",
      definition: "1. Pseudo classes style element states.\n2. Hover changes on mouse over.\n3. Focus highlights active fields.\n4. nth-child targets specific items.\n5. Improves interaction design.",
      keyPoints: ["hover", "focus", "active", "first-child", "last-child", "nth-child"],
      example: "button:hover {\n  background: blue;\n}",
      realTimeExample: "Button hover effects."
    },

    {
      id: "css-pseudo-elements",
      title: "26. CSS Pseudo Elements",
      definition: "1. Pseudo elements style part of an element.\n2. before inserts content before element.\n3. after inserts content after element.\n4. first-letter styles first letter.\n5. first-line styles first line.",
      keyPoints: ["before", "after", "first-letter", "first-line"],
      example: "p::first-letter {\n  font-size: 30px;\n}",
      realTimeExample: "Magazine style article design."
    },

    {
      id: "css-transitions",
      title: "27. CSS Transitions",
      definition: "1. Transitions create smooth property changes.\n2. Duration controls animation speed.\n3. Delay starts later.\n4. Timing controls motion type.\n5. Improves user experience.",
      keyPoints: ["transition-property", "transition-duration", "transition-delay", "transition-timing-function"],
      example: "button {\n  transition: 0.3s;\n}",
      realTimeExample: "Smooth hover animation."
    },

    {
      id: "css-transform",
      title: "28. CSS Transform",
      definition: "1. Transform changes shape or position.\n2. Translate moves element.\n3. Rotate turns element.\n4. Scale enlarges or shrinks.\n5. Skew tilts element.",
      keyPoints: ["translate", "rotate", "scale", "skew"],
      example: "div {\n  transform: rotate(45deg);\n}",
      realTimeExample: "Rotating icons."
    },

    {
      id: "css-animations",
      title: "29. CSS Animations",
      definition: "1. Animations create movement over time.\n2. Keyframes define stages.\n3. Duration controls speed.\n4. Delay postpones start.\n5. Iteration controls repetition.",
      keyPoints: ["@keyframes", "animation-name", "animation-duration", "animation-delay", "animation-iteration-count"],
      example: "@keyframes move {\n from {left:0;} to {left:100px;}\n}",
      realTimeExample: "Loading animation."
    },

    {
      id: "css-shadows",
      title: "30. CSS Shadows",
      definition: "1. Shadows add depth to UI.\n2. Box shadow styles containers.\n3. Text shadow styles text.\n4. Blur creates softness.\n5. Shadows improve modern look.",
      keyPoints: ["Box Shadow", "Text Shadow"],
      example: "div {\n  box-shadow: 2px 2px 10px gray;\n}",
      realTimeExample: "Card designs in dashboards."
    }
  ]
    
  },
    {
      id: "css-variables",
      title: "31. CSS Variables",
      definition: "1. CSS variables store reusable values.\n2. Variables reduce repeated code.\n3. They are created using custom names.\n4. Global variables are usually placed inside :root.\n5. Variables make theme changes easier.",
      keyPoints: ["Creating Variables", "Using Variables", "Global Variables"],
      example: ":root {\n  --main-color: blue;\n}\nh1 {\n  color: var(--main-color);\n}",
      realTimeExample: "Changing full website theme color from one place."
    },

    {
      id: "css-responsive-design",
      title: "32. CSS Responsive Design",
      definition: "1. Responsive design adapts layout for all screen sizes.\n2. Media queries apply styles for different devices.\n3. Breakpoints define width limits.\n4. Mobile-first design starts from small screens.\n5. Responsive design improves user experience.",
      keyPoints: ["Media Queries", "Breakpoints", "Mobile First Design"],
      example: "@media (max-width:768px) {\n  body {\n    font-size:14px;\n  }\n}",
      realTimeExample: "Website automatically adjusting on mobile."
    },

    {
      id: "css-advanced-selectors",
      title: "33. CSS Advanced Selectors",
      definition: "1. Advanced selectors target elements precisely.\n2. Attribute selectors style based on attributes.\n3. not() excludes elements.\n4. nth-of-type targets specific type order.\n5. Useful for complex UI styling.",
      keyPoints: ["Attribute Selectors", "not()", "nth-of-type()"],
      example: "input[type='text'] {\n  border: 1px solid red;\n}",
      realTimeExample: "Styling only text fields in forms."
    },

    {
      id: "css-gradients",
      title: "34. CSS Gradients",
      definition: "1. Gradients create smooth color transitions.\n2. Linear gradient follows direction.\n3. Radial gradient spreads circularly.\n4. Gradients reduce image usage.\n5. They improve modern UI design.",
      keyPoints: ["Linear Gradient", "Radial Gradient"],
      example: "background: linear-gradient(to right, blue, purple);",
      realTimeExample: "Hero banner backgrounds."
    },

    {
      id: "css-object-fit",
      title: "35. CSS Object Fit",
      definition: "1. Object-fit controls image fitting.\n2. Cover fills container fully.\n3. Contain keeps full image visible.\n4. Fill stretches image.\n5. Important for responsive media.",
      keyPoints: ["cover", "contain", "fill"],
      example: "img {\n  object-fit: cover;\n}",
      realTimeExample: "Profile image cards."
    },

    {
      id: "css-cursor",
      title: "36. CSS Cursor",
      definition: "1. Cursor changes mouse pointer appearance.\n2. Pointer indicates clickable item.\n3. Move shows movable item.\n4. Text shows text selection.\n5. not-allowed blocks action.",
      keyPoints: ["pointer", "move", "text", "not-allowed"],
      example: "button {\n  cursor: pointer;\n}",
      realTimeExample: "Buttons showing hand icon."
    },

    {
      id: "css-filter-effects",
      title: "37. CSS Filter Effects",
      definition: "1. Filters apply visual effects.\n2. Blur softens image.\n3. Brightness changes light.\n4. Contrast changes intensity.\n5. Grayscale removes colors.",
      keyPoints: ["blur", "brightness", "contrast", "grayscale"],
      example: "img {\n  filter: grayscale(100%);\n}",
      realTimeExample: "Black and white gallery effects."
    },

    {
      id: "css-clip-path",
      title: "38. CSS Clip Path",
      definition: "1. Clip-path creates custom shapes.\n2. Circle cuts circular shape.\n3. Polygon creates custom points.\n4. Improves creative design.\n5. Used in advanced UI sections.",
      keyPoints: ["circle", "polygon"],
      example: "div {\n  clip-path: circle(50%);\n}",
      realTimeExample: "Creative profile cards."
    },

    {
      id: "css-scroll-behavior",
      title: "39. CSS Scroll Behavior",
      definition: "1. Scroll behavior controls page scrolling.\n2. Smooth scrolling improves navigation.\n3. It helps anchor links.\n4. Improves UX.\n5. Often used in landing pages.",
      keyPoints: ["smooth scrolling"],
      example: "html {\n  scroll-behavior: smooth;\n}",
      realTimeExample: "Click menu and smoothly move section."
    },

    {
      id: "css-best-practices",
      title: "40. CSS Best Practices",
      definition: "1. Clean CSS improves maintainability.\n2. Naming conventions improve readability.\n3. Reusable classes reduce duplication.\n4. Organized files improve teamwork.\n5. Best practices help scalability.",
      keyPoints: ["Clean Code", "Naming Convention", "Reusable Classes", "Organized File Structure"],
      example: ".btn-primary {\n  background: blue;\n}",
      realTimeExample: "Professional company projects."
    },

    {
      id: "css-mini-projects",
      title: "41. CSS Mini Projects",
      definition: "1. Mini projects improve practical skill.\n2. Login forms teach spacing.\n3. Cards teach shadows and layout.\n4. Landing pages teach responsiveness.\n5. Portfolio builds real project confidence.",
      keyPoints: ["Login Form", "Card Design", "Navigation Bar", "Portfolio Section", "Landing Page", "Responsive Website"],
      example: ".card {\n  box-shadow: 2px 2px 10px gray;\n}",
      realTimeExample: "Building a personal portfolio website."
         }
    ]
  },

  {
    id: "javascript",
        title: "3. JavaScript (Logic)",
        topics: [
          {
            id: "js-intro",
            title: "JavaScript Introduction",
            definition: " 1 JavaScript is a versatile programming language primarily used for web development. \n2 It allows developers to create interactive and dynamic web pages by manipulating the Document Object Model (DOM).\n3 JavaScript can run on both the client-side and server-side, making it a powerful tool for full-stack development. \n4 It supports various programming paradigms, including object-oriented, functional, and event-driven programming.",
            keyPoints: ["What is JavaScript", "History of JavaScript", "Client-side vs Server-side", "Programming Paradigms"],
            example: "console.log('Hello, World!');",
            realTimeExample: "Creating a dynamic to-do list where users can add and remove tasks without refreshing the page."
          
          },
          {
            id: "what is js",
            title: "What is JavaScript?",
            definition: "JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive and dynamic web pages. It is a client-side scripting language, meaning it runs in the user's browser rather than on the server.",
            keyPoints: ["Interpreted Language", "Client-Side", "Dynamic Web Pages"],
            example: "console.log('Hello, World!');",
            realTimeExample: "Displaying a welcome message when a user visits a website."
          },
          {
            id: "js-history",
            title: "History of JavaScript",
            definition: "JavaScript was created in 1995 by Brendan Eich while working at Netscape Communications Corporation. It was initially developed in just 10 days and was originally named Mocha, then renamed to LiveScript, and finally to JavaScript. The language has evolved significantly over the years, with major updates like ECMAScript 6 (ES6) introducing new features and syntax improvements.",
            keyPoints: ["Created by Brendan Eich", "Initial Names", "Evolution of JavaScript"],
            example: "console.log('JavaScript was created in 1995');",
            realTimeExample: "Understanding the evolution of JavaScript helps developers appreciate its current capabilities and future potential."
          },
          {
            id: "features of js",
            title: "Features of JavaScript",
            definition: "JavaScript has several key features that make it a powerful language for web development. These include its ability to manipulate the DOM, support for asynchronous programming, and a rich ecosystem of libraries and frameworks.",
            keyPoints: ["DOM Manipulation", "Asynchronous Programming", "Rich Ecosystem"],
            example: "const greeting = 'Hello, World!';\nconsole.log(greeting);",
            realTimeExample: "Creating a dynamic user interface that responds to user interactions in real-time."
          },
          {
            id: "advantages of js",
            title: "Advantages of JavaScript",
            definition: "JavaScript offers numerous advantages for web development, including its versatility, ease of use, and extensive community support. It enables developers to create engaging user experiences and build scalable applications.",
            keyPoints: ["Versatility", "Ease of Use", "Community Support"],
            example: "console.log('JavaScript is versatile!');",
            realTimeExample: "Utilizing JavaScript's flexibility to implement complex interactions and animations on a webpage."
          },
          {
            id: "how js works",
            title: "How JavaScript Works",
            definition: "JavaScript works by being executed in a runtime environment, typically a web browser or Node.js. It is an interpreted language, meaning the code is read and executed line by line. The browser's JavaScript engine compiles the code into machine-readable instructions, which are then executed to produce the desired output.",
            keyPoints: ["Interpreted Language", "Runtime Environment", "Execution Process"],
            example: "console.log('JavaScript works by being interpreted');",
            realTimeExample: "Observing how JavaScript code is executed in the browser's console."
          },
          {
            id: "js setup",
            title: "JavaScript Setup",
            definition: "Setting up a JavaScript development environment involves installing a code editor, a web browser, and optionally a Node.js runtime. This allows developers to write, test, and run JavaScript code locally or in a browser.",
            keyPoints: ["Code Editor", "Web Browser", "Node.js"],
            example: "console.log('JavaScript setup complete!');",
            realTimeExample: "Configuring a local development environment with VS Code and Chrome."
          },
          {
            id: "internal js",
            title: "Internal JavaScript",
            definition: "JavaScript's internal mechanisms include its execution context, scope chain, and memory management. Understanding these concepts is crucial for debugging and optimizing JavaScript applications.",
            keyPoints: ["Execution Context", "Scope Chain", "Memory Management"],
            example: "console.log('Understanding JavaScript internals');",
            realTimeExample: "Analyzing the call stack and scope during function execution."
          },
          {
            id: "external js",
            title: "External JavaScript",
            definition: "External JavaScript refers to JavaScript code that is stored in separate .js files and linked to an HTML document. This approach promotes code organization, reusability, and maintainability by separating the logic from the markup.",
            keyPoints: ["File Organization", "Code Reusability", "Maintainability"],
            example: "<script src=\"script.js\"></script>",
            realTimeExample: "Linking an external JavaScript file to a webpage and observing its impact on the page's functionality."
          },
          {
  id: "variables",
  title: "Variables",
  definition: "1. Variables are used to store data values in JavaScript. 2. A variable name identifies stored data. 3. Variables make programs dynamic. 4. Values can change during execution. 5. Meaningful names improve readability.",
  keyPoints: ["Store Data", "Variable Naming", "Dynamic Values", "Readable Code"],
  example: "let name = 'JavaScript';",
  realTimeExample: "Storing student name entered in a form."
},
{
  id: "var-let-const",
  title: "var, let, const",
  definition: "1. var declares function-scoped variables. 2. let declares block-scoped variables. 3. const declares constants that cannot be reassigned. 4. let and const are modern standards. 5. const is preferred when value should remain fixed.",
  keyPoints: ["Scope", "Mutable", "Constant", "Modern JavaScript"],
  example: "const course = 'JavaScript';",
  realTimeExample: "Using const for fixed website name."
},
{
  id: "data-types",
  title: "Data Types",
  definition: "1. Data types define the type of value stored in a variable. 2. JavaScript supports primitive and non-primitive types. 3. typeof checks data type. 4. Correct type use prevents errors. 5. JavaScript is dynamically typed.",
  keyPoints: ["Type Checking", "Primitive", "Non-Primitive", "Dynamic Typing"],
  example: "typeof 100",
  realTimeExample: "Checking API response type."
},
{
  id: "primitive-data-types",
  title: "Primitive Data Types",
  definition: "1. Primitive data types store single simple values. 2. Types include string, number, boolean, null, undefined, bigint, and symbol. 3. They are immutable. 4. Stored directly in memory. 5. Common in basic programming.",
  keyPoints: ["String", "Number", "Boolean", "Null", "Undefined"],
  example: "let age = 25;",
  realTimeExample: "Storing student age and login status."
},
{
  id: "non-primitive-data-types",
  title: "Non-Primitive Data Types",
  definition: "1. Non-primitive data types store collections of values. 2. Objects and arrays are main examples. 3. They are mutable. 4. Stored by reference. 5. Used for complex data handling.",
  keyPoints: ["Objects", "Arrays", "Reference Type", "Mutable"],
  example: "let student = { name: 'Ravi' };",
  realTimeExample: "Managing course details."
},
{
  id: "arithmetic-operators",
  title: "Arithmetic Operators",
  definition: "1. Arithmetic operators perform mathematical calculations. 2. Common operators are +, -, *, /, %. 3. Increment and decrement are included. 4. Used in calculations and counters. 5. Essential in program logic.",
  keyPoints: ["Addition", "Subtraction", "Multiplication", "Division", "Modulo"],
  example: "let total = 10 + 5;",
  realTimeExample: "Calculating total fee."
},
{
  id: "comparison-operators",
  title: "Comparison Operators",
  definition: "1. Comparison operators compare two values. 2. Result is true or false. 3. Common operators are ==, ===, !=, >, <. 4. Strict equality checks type also. 5. Used in decision making.",
  keyPoints: ["Comparison", "Boolean Result", "Strict Equality", "Conditions"],
  example: "5 === 5",
  realTimeExample: "Checking password match."
},
{
  id: "logical-operators",
  title: "Logical Operators",
  definition: "1. Logical operators combine multiple conditions. 2. && means AND. 3. || means OR. 4. ! means NOT. 5. Useful in complex validations.",
  keyPoints: ["AND", "OR", "NOT", "Condition Logic"],
  example: "age > 18 && city === 'Hyderabad'",
  realTimeExample: "Checking login eligibility."
},
{
  id: "assignment-operators",
  title: "Assignment Operators",
  definition: "1. Assignment operators assign values to variables. 2. = assigns directly. 3. +=, -=, *= simplify updates. 4. Common in loops and counters. 5. Improves concise coding.",
  keyPoints: ["Assign Value", "Update Variable", "Short Syntax", "Programming Logic"],
  example: "count += 1;",
  realTimeExample: "Updating cart quantity."
},
{
  id: "ternary-operator",
  title: "Ternary Operator",
  definition: "1. Ternary operator is shorthand for if else. 2. Syntax uses condition ? true : false. 3. Useful for short decisions. 4. Improves readability. 5. Common in UI logic.",
  keyPoints: ["Short if else", "Condition", "Readable Syntax", "Decision Making"],
  example: "age >= 18 ? 'Adult' : 'Minor'",
  realTimeExample: "Displaying login status."
},
{
  id: "alert-function",
  title: "alert()",
  definition: "1. alert() displays popup messages in browser. 2. It pauses execution until closed. 3. Used for notifications. 4. Helpful in beginner debugging. 5. Browser built-in function.",
  keyPoints: ["Popup", "Notification", "Browser Function", "Pause Execution"],
  example: "alert('Welcome');",
  realTimeExample: "Showing success message after registration."
},

{
  id: "if-else",
  title: "if else",
  definition: "1. if else provides two possible outcomes. 2. if handles true condition. 3. else handles false condition. 4. Common in validations. 5. Basic branching logic.",
  keyPoints: ["True Case", "False Case", "Branching", "Decision"],
  example: "if(mark > 35){ pass } else { fail }",
  realTimeExample: "Checking exam result."
},
{
  id: "else-if",
  title: "else if",
  definition: "1. else if checks multiple conditions. 2. Conditions are checked in order. 3. First true block executes. 4. Useful for grading systems. 5. Supports multiple branches.",
  keyPoints: ["Multiple Conditions", "Ordered Check", "Branching", "Decision"],
  example: "if(mark>90){A}else if(mark>75){B}",
  realTimeExample: "Calculating student grade."
},
{
  id: "switch-statement",
  title: "switch Statement",
  definition: "1. switch checks exact values against multiple cases. 2. case defines each option. 3. break stops execution after match. 4. default handles unmatched values. 5. Cleaner than many else if statements.",
  keyPoints: ["Multiple Cases", "break", "default", "Value Matching"],
  example: "switch(day){ case 1: break; }",
  realTimeExample: "Displaying weekday names."
},
{
  id: "for-loop",
  title: "for Loop",
  definition: "1. for loop repeats code a fixed number of times. 2. It contains initialization, condition, and increment. 3. Useful when loop count is known. 4. Common in arrays and counters. 5. Core iterative structure.",
  keyPoints: ["Initialization", "Condition", "Increment", "Repeated Execution"],
  example: "for(let i=0; i<5; i++){ console.log(i); }",
  realTimeExample: "Displaying numbers from 1 to 10."
},
{
  id: "while-loop",
  title: "while Loop",
  definition: "1. while loop runs while condition remains true. 2. Condition is checked before execution. 3. Used when loop count is unknown. 4. Can become infinite if condition never changes. 5. Suitable for dynamic repetition.",
  keyPoints: ["Condition Based", "Pre-check", "Dynamic Loop", "Repeated Execution"],
  example: "while(i < 5){ i++; }",
  realTimeExample: "Reading values until user stops."
},
{
  id: "do-while-loop",
  title: "do while Loop",
  definition: "1. do while loop executes code at least once. 2. Condition is checked after execution. 3. Useful when first run is mandatory. 4. Similar to while loop with post-check. 5. Common in menu systems.",
  keyPoints: ["Post-check", "Runs Once Minimum", "Condition Based", "Loop"],
  example: "do { i++; } while(i < 5);",
  realTimeExample: "Showing menu until exit selected."
},
{
  id: "break-statement",
  title: "break",
  definition: "1. break stops loop execution immediately. 2. It exits current loop or switch. 3. Used when condition meets stop point. 4. Prevents unnecessary iterations. 5. Improves control flow.",
  keyPoints: ["Stop Loop", "Immediate Exit", "Control Flow", "Loop Management"],
  example: "if(i === 3) break;",
  realTimeExample: "Stopping search when match found."
},
{
  id: "continue-statement",
  title: "continue",
  definition: "1. continue skips current iteration. 2. Loop continues with next iteration. 3. Used to ignore certain values. 4. Helps selective processing. 5. Improves loop control.",
  keyPoints: ["Skip Iteration", "Next Loop", "Selective Logic", "Control Flow"],
  example: "if(i === 3) continue;",
  realTimeExample: "Skipping invalid entries."
},
{
  id: "function-declaration",
  title: "Function Declaration",
  definition: "1. Function declaration defines reusable code block. 2. It uses function keyword. 3. Functions can be called multiple times. 4. Improves code reuse. 5. Basic program structure.",
  keyPoints: ["Reusable Code", "function Keyword", "Code Block", "Reuse"],
  example: "function greet(){ console.log('Hello'); }",
  realTimeExample: "Creating reusable calculator logic."
},
{
  id: "function-expression",
  title: "Function Expression",
  definition: "1. Function expression stores function inside variable. 2. It can be anonymous. 3. Variable name calls function. 4. Useful in callbacks. 5. Flexible function style.",
  keyPoints: ["Variable Function", "Anonymous Function", "Flexible Syntax", "Reusable"],
  example: "const greet = function(){ console.log('Hi'); };",
  realTimeExample: "Assigning actions dynamically."
},
{
  id: "arrow-functions",
  title: "Arrow Functions",
  definition: "1. Arrow functions provide short syntax for functions. 2. They use => symbol. 3. this behavior differs from regular functions. 4. Popular in modern JavaScript. 5. Cleaner syntax for callbacks.",
  keyPoints: ["Short Syntax", "=> Symbol", "Modern JS", "Callback Friendly"],
  example: "const add = (a,b) => a+b;",
  realTimeExample: "Array filtering logic."
},
{
  id: "parameters-and-arguments",
  title: "Parameters and Arguments",
  definition: "1. Parameters receive values in function definition. 2. Arguments are actual values passed during call. 3. Functions become dynamic. 4. Multiple parameters supported. 5. Essential for reusable logic.",
  keyPoints: ["Input Values", "Dynamic Function", "Function Input", "Reusable Logic"],
  example: "function add(a,b){ return a+b; }",
  realTimeExample: "Calculating total marks."
},
{
  id: "return-statement",
  title: "Return Statement",
  definition: "1. return sends value back from function. 2. Function stops after return. 3. Returned value can be stored. 4. Essential in calculations. 5. Improves reusable outputs.",
  keyPoints: ["Output", "Function Result", "Stops Function", "Reusable Value"],
  example: "return a+b;",
  realTimeExample: "Returning API response data."
},
{
  id: "creating-arrays",
  title: "Creating Arrays",
  definition: "1. Arrays store multiple values in one variable. 2. Values are ordered by index. 3. Arrays can store mixed data types. 4. Square brackets are used. 5. Essential for collections.",
  keyPoints: ["Multiple Values", "Indexed Data", "Square Brackets", "Collections"],
  example: "let nums = [1,2,3];",
  realTimeExample: "Storing course names."
},
{
  id: "accessing-array-elements",
  title: "Accessing Array Elements",
  definition: "1. Array elements are accessed using index. 2. Index starts from zero. 3. Specific values can be modified. 4. Arrays support dynamic access. 5. Important in loops.",
  keyPoints: ["Index", "Zero Based", "Element Access", "Modify Values"],
  example: "nums[0]",
  realTimeExample: "Reading first course name."
},
{
  id: "array-methods",
  title: "Array Methods",
  definition: "1. Array methods perform operations on arrays. 2. Common methods include push, pop, shift, unshift. 3. Arrays become flexible with methods. 4. Useful in data manipulation. 5. Essential in modern JavaScript.",
  keyPoints: ["Built-in Methods", "Modify Arrays", "Flexible Data", "Array Operations"],
  example: "arr.push(5)",
  realTimeExample: "Managing student list."
},
{
  id: "push-method",
  title: "push()",
  definition: "1. push adds element at array end. 2. Array length increases. 3. Common in dynamic lists. 4. Original array changes. 5. Useful in adding records.",
  keyPoints: ["Add End", "Array Update", "Dynamic List", "Length Increase"],
  example: "arr.push('React')",
  realTimeExample: "Adding new course."
},
{
  id: "pop-method",
  title: "pop()",
  definition: "1. pop removes last array element. 2. Removed value is returned. 3. Array length decreases. 4. Useful in undo operations. 5. Original array changes.",
  keyPoints: ["Remove End", "Return Value", "Array Update", "Length Decrease"],
  example: "arr.pop()",
  realTimeExample: "Removing last task."
},
{
  id: "shift-method",
  title: "shift()",
  definition: "1. shift removes first array element. 2. Remaining elements shift left. 3. Array length decreases. 4. Removed value returns. 5. Useful in queue logic.",
  keyPoints: ["Remove First", "Shift Left", "Queue Logic", "Array Update"],
  example: "arr.shift()",
  realTimeExample: "Removing first notification."
},
{
  id: "unshift-method",
  title: "unshift()",
  definition: "1. unshift adds element at array beginning. 2. Existing elements shift right. 3. Array length increases. 4. Useful in priority lists. 5. Original array changes.",
  keyPoints: ["Add First", "Shift Right", "Priority List", "Array Update"],
  example: "arr.unshift('HTML')",
  realTimeExample: "Adding urgent task first."
},
{
  id: "string-methods",
  title: "String Methods",
  definition: "1. String methods manipulate text values. 2. Common methods include length, toUpperCase, toLowerCase. 3. Strings are immutable. 4. Useful in text processing. 5. Essential in forms.",
  keyPoints: ["Text Operations", "Immutable", "Built-in Methods", "Formatting"],
  example: "'hello'.toUpperCase()",
  realTimeExample: "Formatting usernames."
},
{
  id: "concatenation",
  title: "Concatenation",
  definition: "1. Concatenation joins strings together. 2. + operator combines text. 3. Variables can be joined. 4. Useful in output building. 5. Common in messages.",
  keyPoints: ["Join Strings", "Plus Operator", "Dynamic Text", "Output Build"],
  example: "'Hello ' + name",
  realTimeExample: "Building welcome message."
},
{
  id: "template-literals",
  title: "Template Literals",
  definition: "1. Template literals use backticks for strings. 2. Variables embed using ${}. 3. Multi-line strings become easy. 4. Modern string formatting method. 5. Cleaner than concatenation.",
  keyPoints: ["Backticks", "Variable Embed", "Modern Syntax", "Readable"],
  example: "`Hello ${name}`",
  realTimeExample: "Dynamic invoice generation."
},
{
  id: "string-search-methods",
  title: "String Search Methods",
  definition: "1. Search methods find text inside strings. 2. includes checks existence. 3. indexOf returns position. 4. search finds pattern. 5. Useful in validation.",
  keyPoints: ["Find Text", "includes", "indexOf", "Search Pattern"],
  example: "'hello'.includes('he')",
  realTimeExample: "Checking keyword in search box."
},
{
  id: "creating-objects",
  title: "Creating Objects",
  definition: "1. Objects store key-value pairs. 2. Curly braces define objects. 3. Related data stays grouped. 4. Core JavaScript structure. 5. Used in APIs heavily.",
  keyPoints: ["Key Value", "Curly Braces", "Grouped Data", "Structured Values"],
  example: "let user = {name:'Ravi'};",
  realTimeExample: "Student record object."
},
{
  id: "object-properties",
  title: "Object Properties",
  definition: "1. Properties are object values accessed by keys. 2. Dot notation is common. 3. Bracket notation also works. 4. Properties can change dynamically. 5. Core object access method.",
  keyPoints: ["Keys", "Dot Notation", "Bracket Access", "Mutable"],
  example: "user.name",
  realTimeExample: "Reading student name."
},
{
  id: "object-methods",
  title: "Object Methods",
  definition: "1. Methods are functions inside objects. 2. They define object behavior. 3. Methods access object data. 4. Common in classes and APIs. 5. Reusable object logic.",
  keyPoints: ["Function in Object", "Behavior", "Reusable Logic", "Object Actions"],
  example: "user.greet = function(){}",
  realTimeExample: "Student greeting method."
},
{
  id: "this-keyword",
  title: "this Keyword",
  definition: "1. this refers to current object context. 2. Inside methods it points to object. 3. Context changes by call style. 4. Important in OOP. 5. Arrow functions handle this differently.",
  keyPoints: ["Current Context", "Object Reference", "Method Access", "OOP"],
  example: "this.name",
  realTimeExample: "Accessing object properties in methods."
},
{
  id: "dom-introduction",
  title: "DOM Introduction",
  definition: "1. DOM means Document Object Model. 2. It represents webpage as objects. 3. JavaScript manipulates DOM dynamically. 4. Enables interactive web pages. 5. Core frontend concept.",
  keyPoints: ["Document Model", "HTML Objects", "Dynamic UI", "Frontend Core"],
  example: "document.body",
  realTimeExample: "Changing webpage content dynamically."
},
{
  id: "selecting-elements",
  title: "Selecting Elements",
  definition: "1. Elements are selected using document methods. 2. getElementById and querySelector are common. 3. Selected elements can be modified. 4. Essential for DOM work. 5. Core frontend skill.",
  keyPoints: ["Element Selection", "querySelector", "DOM Access", "Modify Elements"],
  example: "document.getElementById('demo')",
  realTimeExample: "Selecting button for click action."
},
{
  id: "changing-content",
  title: "Changing Content",
  definition: "1. Content can be changed using innerHTML or textContent. 2. Dynamic text updates become possible. 3. User interactions often trigger content change. 4. Core DOM manipulation. 5. Improves interactivity.",
  keyPoints: ["innerHTML", "textContent", "Dynamic Text", "DOM Update"],
  example: "element.innerHTML='Hello';",
  realTimeExample: "Updating welcome message."
},
{
  id: "changing-styles",
  title: "Changing Styles",
  definition: "1. Styles change through style property. 2. CSS properties use camelCase. 3. Dynamic design becomes possible. 4. Useful in themes and effects. 5. Common in interactive UI.",
  keyPoints: ["Style Property", "camelCase", "Dynamic Design", "UI Effects"],
  example: "element.style.color='red';",
  realTimeExample: "Highlighting selected item."
},
{
  id: "event-handling-dom",
  title: "Event Handling",
  definition: "1. DOM events respond to user actions. 2. addEventListener attaches handlers. 3. Click and input are common events. 4. Core interactive feature. 5. Essential in modern apps.",
  keyPoints: ["User Actions", "addEventListener", "Interactive UI", "DOM Events"],
  example: "btn.addEventListener('click', fn)",
  realTimeExample: "Button click response."
},
{
  id: "click-event",
  title: "Click Event",
  definition: "1. Click event triggers when user clicks element. 2. Common for buttons. 3. Event handlers run logic. 4. Core interactive event. 5. Widely used in UI.",
  keyPoints: ["Button Click", "Event Trigger", "Interactive UI", "User Action"],
  example: "button.onclick=function(){}",
  realTimeExample: "Opening popup."
},
{
  id: "change-event",
  title: "Change Event",
  definition: "1. Change event triggers when input changes. 2. Common in forms. 3. Used for live updates. 4. Input value becomes accessible. 5. Important in validation.",
  keyPoints: ["Input Change", "Form Event", "Live Update", "Validation"],
  example: "input.onchange=function(){}",
  realTimeExample: "Updating search result."
},
{
  id: "submit-event",
  title: "Submit Event",
  definition: "1. Submit event occurs when form submits. 2. preventDefault prevents reload. 3. Used in validations. 4. Core form logic. 5. Essential in data submission.",
  keyPoints: ["Form Submit", "preventDefault", "Validation", "Form Logic"],
  example: "form.onsubmit=function(e){}",
  realTimeExample: "Login form submit."
},
{
  id: "keyboard-events",
  title: "Keyboard Events",
  definition: "1. Keyboard events detect key actions. 2. keydown and keyup are common. 3. Useful in shortcuts. 4. Input validation uses keys. 5. Interactive typing logic.",
  keyPoints: ["keydown", "keyup", "Shortcut", "Typing Events"],
  example: "input.onkeydown=function(){}",
  realTimeExample: "Search on Enter key."
},
{
  id: "mouse-events",
  title: "Mouse Events",
  definition: "1. Mouse events detect pointer movement and actions. 2. mouseover and mouseout are common. 3. Useful in hover effects. 4. Improves UI interaction. 5. Supports animations.",
  keyPoints: ["Hover", "Pointer", "Mouse Actions", "Interactive UI"],
  example: "div.onmouseover=function(){}",
  realTimeExample: "Button hover effect."
},
{
  id: "callback-functions",
  title: "Callback Functions",
  definition: "1. Callback functions are passed into other functions. 2. They run later when needed. 3. Common in async code. 4. Improve flexibility. 5. Essential in event handling.",
  keyPoints: ["Function Argument", "Async Logic", "Flexible Execution", "Reusable"],
  example: "setTimeout(fn,1000)",
  realTimeExample: "Delayed message display."
},
{
  id: "higher-order-functions",
  title: "Higher Order Functions",
  definition: "1. Higher order functions accept or return functions. 2. map and filter are examples. 3. Advanced reusable logic. 4. Common in modern JS. 5. Improves abstraction.",
  keyPoints: ["Function Returns Function", "Accept Function", "Reusable Logic", "Advanced JS"],
  example: "arr.map(fn)",
  realTimeExample: "Transforming data lists."
},
{
  id: "closures",
  title: "Closures",
  definition: "1. Closures allow inner functions to access outer variables. 2. Variables remain preserved after outer function ends. 3. Useful in data privacy. 4. Core advanced concept. 5. Common in callbacks.",
  keyPoints: ["Preserved Scope", "Inner Function", "Private Data", "Advanced Scope"],
  example: "function outer(){ let x=1; return function(){return x;} }",
  realTimeExample: "Private counter logic."
},
{
  id: "recursion",
  title: "Recursion",
  definition: "1. Recursion means function calls itself. 2. Base condition prevents infinite loop. 3. Useful in tree and nested problems. 4. Advanced logic technique. 5. Requires careful design.",
  keyPoints: ["Self Call", "Base Condition", "Advanced Logic", "Nested Problems"],
  example: "function fact(n){ return n*fact(n-1); }",
  realTimeExample: "Factorial calculation."
},
{
  id: "let-and-const",
  title: "let and const",
  definition: "1. let declares block-scoped variables. 2. const declares constants that cannot be reassigned. 3. Both are introduced in ES6. 4. They replace var in modern JavaScript. 5. const is preferred when value should remain fixed.",
  keyPoints: ["Block Scope", "Constant", "Modern JavaScript", "ES6"],
  example: "let age = 25; const pi = 3.14;",
  realTimeExample: "Using const for API URLs and let for counters."
},
{
  id: "arrow-functions-es6",
  title: "Arrow Functions",
  definition: "1. Arrow functions provide shorter syntax for writing functions. 2. They use => symbol. 3. They do not bind their own this keyword. 4. Common in callbacks and array methods. 5. Widely used in modern JavaScript.",
  keyPoints: ["Short Syntax", "=> Symbol", "Modern Functions", "ES6"],
  example: "const add = (a,b) => a+b;",
  realTimeExample: "Using arrow functions in event handlers."
},
{
  id: "template-literals-es6",
  title: "Template Literals",
  definition: "1. Template literals use backticks for strings. 2. Variables are embedded using ${}. 3. Multi-line strings are supported. 4. Cleaner than concatenation. 5. Common in dynamic text generation.",
  keyPoints: ["Backticks", "Variable Embedding", "Readable Strings", "ES6"],
  example: "`Hello ${name}`",
  realTimeExample: "Generating welcome messages dynamically."
},
{
  id: "destructuring",
  title: "Destructuring",
  definition: "1. Destructuring extracts values from arrays or objects. 2. It simplifies variable assignment. 3. Improves readability. 4. Common in API responses. 5. Core ES6 feature.",
  keyPoints: ["Extract Values", "Objects", "Arrays", "Readable Code"],
  example: "const {name} = user;",
  realTimeExample: "Reading API user details directly."
},
{
  id: "spread-operator",
  title: "Spread Operator",
  definition: "1. Spread operator expands arrays or objects. 2. It uses three dots (...). 3. Useful for copying data. 4. Common in updates and merges. 5. Essential in modern JavaScript.",
  keyPoints: ["Expand Data", "Copy Arrays", "Merge Objects", "ES6"],
  example: "const newArr = [...arr];",
  realTimeExample: "Copying form data safely."
},
{
  id: "rest-operator",
  title: "Rest Operator",
  definition: "1. Rest operator collects multiple values into one variable. 2. It also uses three dots (...). 3. Common in function parameters. 4. Helps flexible argument handling. 5. Useful in advanced functions.",
  keyPoints: ["Collect Values", "Flexible Parameters", "Array Packing", "ES6"],
  example: "function sum(...nums) {}",
  realTimeExample: "Accepting multiple marks in one function."
},
{
  id: "settimeout",
  title: "setTimeout()",
  definition: "1. setTimeout runs code after a delay. 2. Delay is given in milliseconds. 3. Executes once only. 4. Common in delayed actions. 5. Browser timer function.",
  keyPoints: ["Delay", "Single Execution", "Timer", "Async"],
  example: "setTimeout(() => console.log('Hi'), 1000);",
  realTimeExample: "Showing message after login."
},
{
  id: "setinterval",
  title: "setInterval()",
  definition: "1. setInterval runs code repeatedly after fixed interval. 2. Interval is given in milliseconds. 3. It continues until cleared. 4. Common in clocks and timers. 5. Browser timer function.",
  keyPoints: ["Repeated Execution", "Timer", "Interval", "Async"],
  example: "setInterval(() => console.log('Run'), 1000);",
  realTimeExample: "Digital clock update."
},
{
  id: "callbacks",
  title: "Callbacks",
  definition: "1. Callback is a function passed into another function. 2. It executes later when needed. 3. Common in async programming. 4. Improves flexibility. 5. Essential in event handling.",
  keyPoints: ["Function Argument", "Async", "Reusable Logic", "Flexible Execution"],
  example: "setTimeout(function(){},1000)",
  realTimeExample: "Delayed notification."
},
{
  id: "promises",
  title: "Promises",
  definition: "1. Promise handles asynchronous operations. 2. It has pending, fulfilled, and rejected states. 3. then handles success. 4. catch handles errors. 5. Modern async code uses promises.",
  keyPoints: ["Async Result", "then", "catch", "Pending State"],
  example: "fetch(url).then(res => res.json())",
  realTimeExample: "Fetching API data."
},
{
  id: "async-await",
  title: "async / await",
  definition: "1. async defines asynchronous function. 2. await pauses until promise resolves. 3. Makes async code readable. 4. Common in API calls. 5. Modern replacement for chained promises.",
  keyPoints: ["Readable Async", "await", "Promise Handling", "Modern JS"],
  example: "const data = await fetch(url);",
  realTimeExample: "Loading student records from API."
},
{
  id: "fetch-api-js",
  title: "Fetch API",
  definition: "1. Fetch API requests data from servers. 2. It returns promises. 3. Common in frontend API integration. 4. JSON responses are common. 5. Standard browser API.",
  keyPoints: ["HTTP Request", "Promises", "JSON Data", "API"],
  example: "fetch('/api/data')",
  realTimeExample: "Loading weather data."
},
{
  id: "json",
  title: "JSON",
  definition: "1. JSON stands for JavaScript Object Notation. 2. It is used for data exchange. 3. JSON is lightweight and readable. 4. APIs usually return JSON. 5. parse and stringify convert JSON.",
  keyPoints: ["Data Exchange", "Readable Format", "API Response", "Objects"],
  example: "JSON.parse(data)",
  realTimeExample: "Reading server response."
},
{
  id: "get-request-js",
  title: "GET Request",
  definition: "1. GET retrieves data from server. 2. It does not modify data. 3. Used in reading APIs. 4. Response often returns JSON. 5. Core web request method.",
  keyPoints: ["Read Data", "HTTP Method", "JSON Response", "API"],
  example: "fetch('/users')",
  realTimeExample: "Loading user list."
},
{
  id: "post-request-js",
  title: "POST Request",
  definition: "1. POST sends new data to server. 2. Used for create operations. 3. Request body carries data. 4. Common in forms. 5. Core HTTP method.",
  keyPoints: ["Send Data", "Create Record", "HTTP Method", "Forms"],
  example: "fetch('/users',{method:'POST'})",
  realTimeExample: "Submitting registration form."
},
{
  id: "error-handling-api",
  title: "Error Handling",
  definition: "1. Error handling manages failed operations. 2. catch captures promise errors. 3. try catch handles async errors. 4. Improves reliability. 5. Essential in production apps.",
  keyPoints: ["catch", "try catch", "Reliable Code", "Safe API"],
  example: "catch(error => console.log(error))",
  realTimeExample: "Showing failed request message."
},
{
  id: "localstorage",
  title: "localStorage",
  definition: "1. localStorage stores data permanently in browser. 2. Data remains after refresh. 3. Values are stored as strings. 4. Useful for tokens and preferences. 5. Browser storage feature.",
  keyPoints: ["Permanent Storage", "Browser Data", "String Values", "Persistence"],
  example: "localStorage.setItem('name','JS');",
  realTimeExample: "Saving login token."
},
{
  id: "sessionstorage",
  title: "sessionStorage",
  definition: "1. sessionStorage stores data for current tab session. 2. Data clears when tab closes. 3. Similar to localStorage. 4. Temporary storage solution. 5. Browser storage feature.",
  keyPoints: ["Temporary Storage", "Tab Session", "Browser Data", "Session"],
  example: "sessionStorage.setItem('user','Admin');",
  realTimeExample: "Temporary login session."
},
{
  id: "storing-data",
  title: "Storing Data",
  definition: "1. Data is stored using setItem method. 2. Keys and values are required. 3. Objects must be stringified. 4. Browser stores as strings. 5. Useful for persistent settings.",
  keyPoints: ["setItem", "Key Value", "Stringify", "Browser Storage"],
  example: "localStorage.setItem('data', JSON.stringify(obj));",
  realTimeExample: "Saving cart data."
},
{
  id: "retrieving-data",
  title: "Retrieving Data",
  definition: "1. Data is retrieved using getItem method. 2. Stored strings can be parsed. 3. Missing keys return null. 4. Common in startup checks. 5. Essential in storage handling.",
  keyPoints: ["getItem", "Parse Data", "Read Storage", "Stored Values"],
  example: "JSON.parse(localStorage.getItem('data'))",
  realTimeExample: "Reading saved user settings."
},
{
  id: "export",
  title: "Export",
  definition: "1. Export makes code available outside file. 2. Named and default export exist. 3. Modules improve code organization. 4. Modern JavaScript uses export often. 5. Supports reusable files.",
  keyPoints: ["Named Export", "Default Export", "Reusable Code", "Modules"],
  example: "export default add;",
  realTimeExample: "Exporting utility functions."
},
{
  id: "import",
  title: "Import",
  definition: "1. Import brings exported code into file. 2. Named imports use braces. 3. Default import uses direct name. 4. Improves modular development. 5. Essential in projects.",
  keyPoints: ["Named Import", "Default Import", "Reusable Code", "Modules"],
  example: "import add from './app.js';",
  realTimeExample: "Using shared utility file."
},
{
  id: "javascript-modules",
  title: "JavaScript Modules",
  definition: "1. Modules split code into separate files. 2. Each file handles specific logic. 3. Export and import connect modules. 4. Improves maintainability. 5. Essential in large projects.",
  keyPoints: ["Separate Files", "Maintainable Code", "Export Import", "Scalable"],
  example: "type='module'",
  realTimeExample: "Separating API and UI logic."
},
{
  id: "try-statement",
  title: "try",
  definition: "1. try contains code that may cause error. 2. If error occurs, catch handles it. 3. Prevents application crash. 4. Common in risky operations. 5. Core error handling.",
  keyPoints: ["Risky Code", "Error Safety", "Protection", "Control Flow"],
  example: "try { code }",
  realTimeExample: "Parsing JSON safely."
},
{
  id: "catch-statement",
  title: "catch",
  definition: "1. catch handles errors from try block. 2. Error object provides details. 3. Prevents abrupt termination. 4. Common in async operations. 5. Essential for safe apps.",
  keyPoints: ["Handle Error", "Error Object", "Safe Execution", "Control Flow"],
  example: "catch(error){ console.log(error) }",
  realTimeExample: "Showing failed login message."
},
{
  id: "finally-statement",
  title: "finally",
  definition: "1. finally runs whether error happens or not. 2. Common for cleanup logic. 3. Runs after try/catch. 4. Ensures final action executes. 5. Useful in resource handling.",
  keyPoints: ["Always Runs", "Cleanup", "Final Step", "Reliable Logic"],
  example: "finally { close(); }",
  realTimeExample: "Stopping loader after request."
},
{
  id: "throw-statement",
  title: "throw",
  definition: "1. throw creates custom errors. 2. It stops normal execution. 3. Error passes to catch block. 4. Useful in validations. 5. Improves error control.",
  keyPoints: ["Custom Error", "Stop Execution", "Validation", "Control"],
  example: "throw new Error('Invalid');",
  realTimeExample: "Rejecting invalid input."
},
{
  id: "calculator-project-js",
  title: "Calculator",
  definition: "1. Calculator project performs arithmetic operations. 2. Buttons trigger events. 3. State or variables store values. 4. Good beginner project. 5. Improves logic building.",
  keyPoints: ["Arithmetic", "Buttons", "Logic", "Beginner Project"],
  example: "num1 + num2",
  realTimeExample: "Digital calculator."
},
{
  id: "todo-app-js",
  title: "Todo App",
  definition: "1. Todo app manages tasks dynamically. 2. Add, delete, and update actions are included. 3. Arrays store tasks. 4. DOM updates display tasks. 5. Popular practice project.",
  keyPoints: ["Tasks", "DOM Update", "Arrays", "CRUD"],
  example: "tasks.push(task)",
  realTimeExample: "Daily planner."
},
{
  id: "weather-app-js",
  title: "Weather App",
  definition: "1. Weather app fetches live weather from API. 2. Fetch API handles requests. 3. JSON data displays results. 4. Dynamic DOM updates show weather. 5. Real API practice project.",
  keyPoints: ["API", "JSON", "Dynamic UI", "Live Data"],
  example: "fetch(weatherUrl)",
  realTimeExample: "City weather search."
},
{
  id: "quiz-app-js",
  title: "Quiz App",
  definition: "1. Quiz app shows questions dynamically. 2. User selects answers. 3. Score updates automatically. 4. Arrays store questions. 5. Great logic project.",
  keyPoints: ["Questions", "Score", "Arrays", "Dynamic UI"],
  example: "score++",
  realTimeExample: "Online exam simulation."
},
{
  id: "form-validation-project",
  title: "Form Validation Project",
  definition: "1. Form validation project checks input correctness. 2. Required fields are verified. 3. Errors show messages. 4. Prevents invalid submission. 5. Essential frontend project.",
  keyPoints: ["Validation", "Error Messages", "Input Check", "Forms"],
  example: "if(email===''){ error }",
  realTimeExample: "Registration form validation."
}
          
        ]
      },
      {
        id: "React intro",
        title: "Introduction to React",
        topics: [
          {
            id: "react-basics",
            title: "React Basics",
            definition: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently.",
            keyPoints: ["Components", "Props", "State", "Virtual DOM"],
            example: "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, React!</h1>;\n}",
            realTimeExample: "Building a dynamic dashboard that updates in real-time based on user interactions."
          },
          {
            id: "why react",
            title: "Why React?",
            definition: "React is a popular JavaScript library for building user interfaces due to its component-based architecture, efficient virtual DOM, and unidirectional data flow. These features make it easier to manage complex applications and improve performance.",
            keyPoints: ["Component-Based Architecture", "Efficient Virtual DOM", "Unidirectional Data Flow", "Large Community"],
            example: "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, React!</h1>;\n}",
            realTimeExample: "Building a scalable web application with a focus on performance and maintainability."
          },
          {
            id: "features of react",
            title: "Features of React",
            definition: "React offers several key features that make it a powerful tool for building user interfaces, including its component-based architecture, efficient virtual DOM, and unidirectional data flow.",
            keyPoints: ["Component-Based Architecture", "Efficient Virtual DOM", "Unidirectional Data Flow", "Large Community"],
            example: "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, React!</h1>;\n}",
            realTimeExample: "Building a scalable web application with a focus on performance and maintainability."
          },
          {
            id: "react vs js",
            title: "React vs. JavaScript",
            definition: "While JavaScript is a general-purpose programming language, React is a library built on top of JavaScript specifically for building user interfaces. React simplifies the process of creating dynamic UIs by providing a component-based approach and managing the virtual DOM.",
            keyPoints: ["React is a Library", "JavaScript is a Language", "Component-Based Approach", "Virtual DOM"],
            example: "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, React!</h1>;\n}",
            realTimeExample: "Building a responsive web application that provides a smooth user experience."
          },
          {
            id: "installing node js",
            title: "Installing Node.js",
            definition: "1. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 2. It allows developers to run JavaScript on the server-side. 3. Installation involves downloading the installer from nodejs.org for your OS. 4. Setting the PATH variable ensures you can run Node.js from any terminal window. 5. npm (Node Package Manager) is used to manage dependencies and packages.",
            keyPoints: ["What is Node.js", "Installation", "Setting PATH", "Using npm"],
            example: "# Check version\nnode --version",
            realTimeExample: "Setting up a development environment for a new web application."
          },
          {
            id: "installing npm",
            title: "Installing npm",
            definition: "1. npm (Node Package Manager) is the default package manager for Node.js. 2. It is used to manage dependencies and packages for JavaScript projects. 3. npm comes bundled with Node.js installation. 4. You can check the npm version by running 'npm --version'. 5. npm allows you to install, update, and remove packages from your project.",
            keyPoints: ["What is npm", "npm Installation", "Checking npm Version", "Managing Packages"],
            example: "# Check version\nnpm --version",
            realTimeExample: "Managing dependencies for a new web application."
          },
          {
             id: "introduction-to-jsx",
             title: "Introduction to JSX",
             definition: "1. JSX stands for JavaScript XML. 2. It allows writing HTML-like syntax inside JavaScript. 3. JSX is used in React to describe user interface structure. 4. It makes code easier to read and write. 5. JSX is converted into JavaScript using Babel.",
             keyPoints: ["JavaScript XML", "HTML-like Syntax", "Used in React", "Babel Conversion"],
             example: "const element = <h1>Hello React</h1>;",
             realTimeExample: "Creating webpage headings and UI blocks inside React components."
           },
{
  id: "jsx-syntax",
  title: "JSX Syntax",
  definition: "1. JSX syntax looks similar to HTML. 2. Every JSX element must have one parent element. 3. Tags must be properly closed. 4. Attributes use camelCase naming. 5. JSX improves code readability.",
  keyPoints: ["HTML Structure", "Parent Element", "Closing Tags", "camelCase Attributes"],
  example: "return (\n  <div>\n    <h1>Welcome</h1>\n  </div>\n);",
  realTimeExample: "Building structured layouts inside React applications."
},
{
  id: "expressions-in-jsx",
  title: "Expressions in JSX",
  definition: "1. JavaScript expressions can be written inside JSX using curly braces. 2. Variables can be displayed dynamically. 3. Arithmetic operations are supported. 4. Function calls can be used inside JSX. 5. Expressions make UI dynamic.",
  keyPoints: ["Curly Braces", "Variables", "Arithmetic", "Dynamic Output"],
  example: "const name = 'Student'; <h1>{name}</h1>;",
  realTimeExample: "Displaying logged-in user name dynamically."
},
{
  id: "embedding-javascript",
  title: "Embedding JavaScript",
  definition: "1. JavaScript code can be embedded inside JSX using curly braces. 2. Conditions can be applied inside JSX. 3. Calculations can be shown directly. 4. Functions can return values inside JSX. 5. Dynamic rendering becomes possible.",
  keyPoints: ["Curly Braces", "Conditions", "Calculations", "Function Output"],
  example: "<h2>{5 + 10}</h2>",
  realTimeExample: "Showing calculated total price in shopping cart."
},
{
  id: "jsx-rules",
  title: "JSX Rules",
  definition: "1. JSX must return a single parent element. 2. All tags must be closed properly. 3. class attribute becomes className. 4. JavaScript keywords should not conflict with JSX attributes. 5. Expressions must be inside curly braces.",
  keyPoints: ["Single Parent", "Closed Tags", "className", "Curly Braces"],
  example: "<div className='box'>Content</div>",
  realTimeExample: "Writing valid component UI without syntax errors."
},
{
  id: "rendering-jsx",
  title: "Rendering JSX",
  definition: "1. JSX is rendered inside React components. 2. React converts JSX into JavaScript objects. 3. Rendered output appears in browser DOM. 4. Components return JSX for display. 5. Rendering updates UI dynamically.",
  keyPoints: ["Component Output", "Browser Display", "Dynamic Rendering", "DOM Update"],
  example: "root.render(<App />);",
  realTimeExample: "Displaying complete React application in browser."
},
{
  id: "introduction-to-props",
  title: "Introduction to Props",
  definition: "1. Props stands for properties. 2. Props are used to pass data from parent component to child component. 3. Props make components reusable. 4. Props are read-only and cannot be modified by child components. 5. Props help in dynamic rendering of UI.",
  keyPoints: ["Properties", "Parent to Child Data", "Reusable Components", "Read Only"],
  example: "function Welcome(props) {\n  return <h1>{props.name}</h1>;\n}",
  realTimeExample: "Passing student name to a profile card component."
},
{
  id: "passing-props",
  title: "Passing Props",
  definition: "1. Props are passed as attributes to components. 2. Parent component sends values to child component. 3. Multiple values can be passed at once. 4. Props can contain strings, numbers, arrays, or objects. 5. Props improve flexibility of components.",
  keyPoints: ["Attributes", "Value Passing", "Flexible Data", "Parent Component"],
  example: "<Welcome name='Dhanunjaya' />",
  realTimeExample: "Passing course title and price into a course card."
},
{
  id: "multiple-props",
  title: "Multiple Props",
  definition: "1. Multiple props allow sending several values together. 2. Each prop is written separately as an attribute. 3. Components can access all props through props object. 4. It supports dynamic component customization. 5. It reduces repetitive code.",
  keyPoints: ["Multiple Values", "Attributes", "Props Object", "Customization"],
  example: "<Student name='Ravi' age={21} course='React' />",
  realTimeExample: "Displaying student details using one reusable component."
},
{
  id: "props-destructuring",
  title: "Props Destructuring",
  definition: "1. Props destructuring extracts values directly from props object. 2. It improves readability. 3. Less repetitive code is written. 4. Destructuring is commonly used in functional components. 5. It makes code cleaner.",
  keyPoints: ["Cleaner Code", "Direct Access", "Readable Syntax", "Functional Components"],
  example: "function Welcome({ name }) {\n  return <h1>{name}</h1>;\n}",
  realTimeExample: "Accessing course title directly inside reusable card."
},
{
  id: "default-props",
  title: "Default Props",
  definition: "1. Default props provide fallback values when no prop is passed. 2. They prevent undefined values. 3. Components become safer to use. 4. Default values improve reliability. 5. Commonly used in reusable UI elements.",
  keyPoints: ["Fallback Values", "Avoid Undefined", "Reusable Safety", "Reliable Components"],
  example: "Welcome.defaultProps = { name: 'Guest' };",
  realTimeExample: "Showing default user name when no name is provided."
},
{
  id: "children-props",
  title: "Children Props",
  definition: "1. Children props represent content placed between component tags. 2. It allows nested content inside components. 3. React automatically passes children as a prop. 4. Useful for wrappers and layouts. 5. It increases component flexibility.",
  keyPoints: ["Nested Content", "Wrapper Components", "Automatic Prop", "Flexible Layouts"],
  example: "<Card><h2>React Course</h2></Card>",
  realTimeExample: "Creating reusable card layout for multiple content blocks."
},
{
  id: "introduction-to-state",
  title: "Introduction to State",
  definition: "1. State is used to store dynamic data inside a component. 2. State allows components to update when data changes. 3. State is managed internally by the component. 4. State makes UI interactive. 5. State changes automatically re-render the component.",
  keyPoints: ["Dynamic Data", "Component Internal Data", "UI Updates", "Re-rendering"],
  example: "const [count, setCount] = useState(0);",
  realTimeExample: "Displaying changing counter values in a dashboard."
},
{
  id: "usestate-hook",
  title: "useState Hook",
  definition: "1. useState is a React Hook used to create state in functional components. 2. It returns current state value and update function. 3. State updates trigger re-rendering. 4. It is commonly used for form inputs and counters. 5. Multiple useState hooks can be used in one component.",
  keyPoints: ["Hook", "State Management", "Re-render", "Functional Components"],
  example: "const [name, setName] = useState('React');",
  realTimeExample: "Managing input field values in registration forms."
},
{
  id: "updating-state",
  title: "Updating State",
  definition: "1. State is updated using the setter function returned by useState. 2. Direct state modification is not allowed. 3. Updating state causes UI refresh. 4. New values replace old values. 5. Functional updates can also be used.",
  keyPoints: ["Setter Function", "No Direct Change", "UI Refresh", "New Value"],
  example: "setCount(count + 1);",
  realTimeExample: "Increasing product quantity in shopping cart."
},
{
  id: "state-with-objects",
  title: "State with Objects",
  definition: "1. State can store objects for grouped data. 2. Object properties must be updated carefully using spread operator. 3. Partial updates should preserve existing data. 4. Objects help manage related fields together. 5. Common in forms.",
  keyPoints: ["Object State", "Spread Operator", "Grouped Data", "Form Handling"],
  example: "setUser({ ...user, name: 'John' });",
  realTimeExample: "Updating student profile details."
},
{
  id: "state-with-arrays",
  title: "State with Arrays",
  definition: "1. State can store arrays for list data. 2. Arrays should be updated immutably. 3. Spread operator helps add new items. 4. Filtering removes items safely. 5. Arrays are common in list rendering.",
  keyPoints: ["Array State", "Immutable Update", "Spread Operator", "List Management"],
  example: "setItems([...items, 'React']);",
  realTimeExample: "Adding new courses into course list."
},
{
  id: "multiple-state-variables",
  title: "Multiple State Variables",
  definition: "1. A component can use multiple state variables. 2. Each state handles separate data. 3. It improves code organization. 4. Different setters update different values. 5. Useful in complex forms and dashboards.",
  keyPoints: ["Separate States", "Multiple Hooks", "Organized Data", "Independent Updates"],
  example: "const [name, setName] = useState(''); const [age, setAge] = useState(0);",
  realTimeExample: "Managing name, email, and password fields separately."
},
{
  id: "click-events",
  title: "Click Events",
  definition: "1. Click events are triggered when a user clicks an element. 2. React uses onClick attribute for click handling. 3. Event handlers are functions. 4. Click events are commonly used for buttons. 5. They make UI interactive.",
  keyPoints: ["onClick", "Button Action", "Function Handler", "User Interaction"],
  example: "<button onClick={handleClick}>Click Me</button>",
  realTimeExample: "Opening course details when user clicks a card."
},
{
  id: "change-events",
  title: "Change Events",
  definition: "1. Change events occur when input values change. 2. React uses onChange for handling input updates. 3. It is commonly used in forms. 4. Input values are usually connected to state. 5. It supports controlled components.",
  keyPoints: ["onChange", "Input Handling", "State Update", "Forms"],
  example: "<input onChange={handleChange} />",
  realTimeExample: "Typing student name in registration form."
},
{
  id: "submit-events",
  title: "Submit Events",
  definition: "1. Submit events occur when forms are submitted. 2. React uses onSubmit for form handling. 3. preventDefault() stops page reload. 4. Form data can be processed after submit. 5. It is essential for form validation.",
  keyPoints: ["onSubmit", "Forms", "preventDefault", "Data Processing"],
  example: "<form onSubmit={handleSubmit}></form>",
  realTimeExample: "Submitting login form."
},
{
  id: "keyboard-events",
  title: "Keyboard Events",
  definition: "1. Keyboard events detect key presses. 2. Common events include onKeyDown and onKeyUp. 3. Specific keys can trigger actions. 4. Useful in shortcuts and validation. 5. Improves user interaction.",
  keyPoints: ["onKeyDown", "onKeyUp", "Key Detection", "Shortcuts"],
  example: "<input onKeyDown={handleKey} />",
  realTimeExample: "Submitting search when Enter key is pressed."
},
{
  id: "mouse-events",
  title: "Mouse Events",
  definition: "1. Mouse events detect pointer actions. 2. Common events include onMouseEnter and onMouseLeave. 3. Useful for hover effects. 4. Mouse tracking improves UI experience. 5. Supports interactive designs.",
  keyPoints: ["Hover", "Pointer Actions", "Mouse Enter", "Mouse Leave"],
  example: "<div onMouseEnter={hover}></div>",
  realTimeExample: "Showing button animation on hover."
},
{
  id: "passing-parameters-in-events",
  title: "Passing Parameters in Events",
  definition: "1. Parameters can be passed to event handlers using arrow functions. 2. This allows dynamic values in events. 3. Event object can also be passed. 4. Common in list actions. 5. Improves flexible event handling.",
  keyPoints: ["Arrow Function", "Dynamic Values", "Event Object", "Reusable Events"],
  example: "<button onClick={() => deleteItem(id)}>Delete</button>",
  realTimeExample: "Deleting selected student record."
},
{
  id: "if-condition",
  title: "if Condition",
  definition: "1. if statements can control UI rendering. 2. Conditions decide what content appears. 3. It supports multiple branches. 4. Used inside functions before return. 5. Helps create dynamic interfaces.",
  keyPoints: ["Condition", "Dynamic UI", "Branching", "Logic"],
  example: "if(isLogin){ return <Home />; }",
  realTimeExample: "Showing dashboard only for logged-in users."
},
{
  id: "ternary-operator",
  title: "Ternary Operator",
  definition: "1. Ternary operator provides short conditional rendering. 2. It uses condition ? true : false format. 3. Commonly used inside JSX. 4. It improves readability for small conditions. 5. Useful for quick UI changes.",
  keyPoints: ["Short Condition", "JSX Friendly", "Dynamic Display", "Readable Syntax"],
  example: "{isLogin ? <Home /> : <Login />}",
  realTimeExample: "Displaying login or logout button."
},
{
  id: "logical-and-operator",
  title: "Logical && Operator",
  definition: "1. Logical && renders content only when condition is true. 2. It is useful for short single-condition rendering. 3. False conditions render nothing. 4. Common in alerts and notifications. 5. Simplifies conditional UI.",
  keyPoints: ["True Condition", "Short Syntax", "Conditional Display", "JSX"],
  example: "{isAdmin && <AdminPanel />}",
  realTimeExample: "Showing admin section only for admins."
},
{
  id: "dynamic-conditional-ui",
  title: "Dynamic Conditional UI",
  definition: "1. UI changes dynamically based on state or props. 2. Conditions can control visibility. 3. Dynamic rendering improves user experience. 4. It supports personalized content. 5. It is core to interactive React apps.",
  keyPoints: ["Dynamic UI", "State Based", "Visibility Control", "Interactive"],
  example: "{show ? <Profile /> : null}",
  realTimeExample: "Showing popup only when button is clicked."
},
{
  id: "rendering-lists",
  title: "Rendering Lists",
  definition: "1. Lists display multiple items dynamically. 2. Arrays are commonly used. 3. React renders each item as JSX. 4. Lists improve scalability. 5. Common in tables and cards.",
  keyPoints: ["Array Rendering", "Dynamic Items", "Scalable UI", "JSX Lists"],
  example: "{items.map(item => <li>{item}</li>)}",
  realTimeExample: "Displaying course names dynamically."
},
{
  id: "map-method",
  title: "map() Method",
  definition: "1. map() creates new arrays by processing existing data. 2. React uses map() to render lists. 3. Each item becomes JSX output. 4. It simplifies repetitive rendering. 5. Essential for dynamic UI generation.",
  keyPoints: ["Array Method", "Dynamic Rendering", "Looping", "JSX Output"],
  example: "items.map(item => <p>{item}</p>)",
  realTimeExample: "Generating student cards from database data."
},
{
  id: "keys-in-react",
  title: "Keys in React",
  definition: "1. Keys uniquely identify list items. 2. React uses keys for efficient updates. 3. Keys must be unique. 4. Stable keys improve performance. 5. Usually IDs are used as keys.",
  keyPoints: ["Unique Identifier", "Performance", "Efficient Update", "List Management"],
  example: "{items.map(item => <li key={item.id}>{item.name}</li>)}",
  realTimeExample: "Rendering student list using database ID."
},
{
  id: "dynamic-list-rendering",
  title: "Dynamic List Rendering",
  definition: "1. Dynamic list rendering shows data based on state or API results. 2. Lists update automatically when data changes. 3. It supports filtering and sorting. 4. Dynamic rendering improves flexibility. 5. Used in dashboards and tables.",
  keyPoints: ["State Based Lists", "API Data", "Dynamic Updates", "Flexible UI"],
  example: "{courses.map(course => <Card key={course.id} />)}",
  realTimeExample: "Displaying fetched course data in dashboard."
},
{
  id: "controlled-components",
  title: "Controlled Components",
  definition: "1. Controlled components are form elements controlled by React state. 2. Input values are managed using state variables. 3. Changes are handled using onChange events. 4. Controlled components provide full control over form data. 5. They improve form validation and data handling.",
  keyPoints: ["State Controlled", "Input Handling", "onChange", "Form Management"],
  example: "const [name, setName] = useState('');",
  realTimeExample: "Managing registration form fields dynamically."
},
{
  id: "input-fields",
  title: "Input Fields",
  definition: "1. Input fields collect user data. 2. React connects input fields to state. 3. Different input types are supported. 4. Values update dynamically. 5. Input handling is essential in forms.",
  keyPoints: ["Text Input", "State Binding", "Dynamic Value", "User Data"],
  example: "<input value={name} onChange={handleChange} />",
  realTimeExample: "Entering student name in login form."
},
{
  id: "textarea",
  title: "Textarea",
  definition: "1. Textarea is used for multiline input. 2. React manages textarea using state. 3. Value is controlled through onChange. 4. It supports long text input. 5. Commonly used for feedback forms.",
  keyPoints: ["Multiline Input", "State Control", "Long Text", "Forms"],
  example: "<textarea value={message} onChange={handleChange}></textarea>",
  realTimeExample: "Writing course feedback comments."
},
{
  id: "select-dropdown",
  title: "Select Dropdown",
  definition: "1. Select dropdown allows choosing one option from many. 2. React controls selected value using state. 3. Options are defined inside select tag. 4. Dynamic options can be generated. 5. Useful in forms and filters.",
  keyPoints: ["Dropdown", "Option Selection", "State Controlled", "Dynamic Options"],
  example: "<select value={course} onChange={handleChange}></select>",
  realTimeExample: "Selecting course category."
},
{
  id: "checkbox",
  title: "Checkbox",
  definition: "1. Checkbox allows selecting true or false values. 2. Checked state is controlled in React. 3. Multiple checkboxes can be grouped. 4. Useful for agreements and preferences. 5. State updates based on checked status.",
  keyPoints: ["Boolean Value", "Checked State", "Multiple Selection", "User Preference"],
  example: "<input type='checkbox' checked={agree} onChange={handleChange} />",
  realTimeExample: "Accepting terms and conditions."
},
{
  id: "radio-button",
  title: "Radio Button",
  definition: "1. Radio buttons allow selecting one option from multiple choices. 2. Same name groups radio buttons. 3. State stores selected value. 4. Commonly used in forms. 5. Improves option clarity.",
  keyPoints: ["Single Selection", "Grouped Choice", "State Controlled", "Form Input"],
  example: "<input type='radio' value='Male' />",
  realTimeExample: "Selecting gender in registration form."
},
{
  id: "form-submission",
  title: "Form Submission",
  definition: "1. Form submission sends entered data for processing. 2. React uses onSubmit event. 3. preventDefault() prevents page reload. 4. Validation happens before submission. 5. Data can be sent to APIs.",
  keyPoints: ["onSubmit", "preventDefault", "Data Handling", "Validation"],
  example: "<form onSubmit={handleSubmit}></form>",
  realTimeExample: "Submitting login details."
},
{
  id: "form-validation",
  title: "Form Validation",
  definition: "1. Form validation checks input correctness. 2. Required fields must be validated. 3. Invalid inputs show messages. 4. Validation improves data quality. 5. Both manual and library validation can be used.",
  keyPoints: ["Required Fields", "Error Message", "Input Check", "Reliable Data"],
  example: "if(name===''){ alert('Required'); }",
  realTimeExample: "Checking email before registration."
},
{
  id: "usestate-hook",
  title: "useState",
  definition: "1. useState creates state in functional components. 2. It returns value and setter function. 3. State changes trigger UI updates. 4. Multiple states can exist. 5. It is core React Hook.",
  keyPoints: ["State", "Hook", "Setter Function", "Dynamic UI"],
  example: "const [count, setCount] = useState(0);",
  realTimeExample: "Counter application."
},
{
  id: "useeffect-hook",
  title: "useEffect",
  definition: "1. useEffect handles side effects in components. 2. It runs after render. 3. API calls often use useEffect. 4. Dependency array controls execution. 5. Cleanup functions can be added.",
  keyPoints: ["Side Effects", "Lifecycle", "Dependency Array", "API"],
  example: "useEffect(()=>{ console.log('Loaded'); },[]);",
  realTimeExample: "Fetching student records when page loads."
},
{
  id: "useref-hook",
  title: "useRef",
  definition: "1. useRef stores mutable values without re-rendering. 2. It accesses DOM elements directly. 3. It persists values across renders. 4. Useful for focus handling. 5. Often used in forms.",
  keyPoints: ["DOM Access", "Persistent Value", "No Re-render", "Focus Control"],
  example: "const inputRef = useRef();",
  realTimeExample: "Auto focus input field."
},
{
  id: "usememo-hook",
  title: "useMemo",
  definition: "1. useMemo memoizes expensive calculations. 2. It improves performance. 3. Recalculation happens only when dependencies change. 4. Prevents unnecessary computation. 5. Useful in large applications.",
  keyPoints: ["Performance", "Memoization", "Dependency Based", "Optimization"],
  example: "const result = useMemo(()=>compute(), [value]);",
  realTimeExample: "Optimizing filtered course list."
},
{
  id: "usecallback-hook",
  title: "useCallback",
  definition: "1. useCallback memoizes functions. 2. It prevents unnecessary function recreation. 3. Useful when passing functions to child components. 4. Improves rendering performance. 5. Works with dependency array.",
  keyPoints: ["Memoized Function", "Performance", "Child Components", "Dependency"],
  example: "const fn = useCallback(()=>{}, []);",
  realTimeExample: "Optimizing button event handlers."
},
{
  id: "usecontext-hook",
  title: "useContext",
  definition: "1. useContext accesses shared data across components. 2. It avoids prop drilling. 3. Context provider supplies values. 4. Useful for themes and authentication. 5. Simplifies global state access.",
  keyPoints: ["Shared Data", "Global Access", "No Prop Drilling", "Context"],
  example: "const user = useContext(UserContext);",
  realTimeExample: "Accessing logged-in user globally."
},
{
  id: "custom-hooks",
  title: "Custom Hooks",
  definition: "1. Custom hooks are reusable functions using hooks internally. 2. They simplify repeated logic. 3. Naming starts with use. 4. They improve code organization. 5. Useful in large projects.",
  keyPoints: ["Reusable Logic", "Hooks Function", "Code Organization", "Custom Logic"],
  example: "function useFetch() {}",
  realTimeExample: "Reusable API fetch logic."
},
{
  id: "api-calls",
  title: "API Calls",
  definition: "1. API calls fetch external data. 2. useEffect commonly handles API requests. 3. Data updates state after response. 4. Async operations are required. 5. APIs connect frontend and backend.",
  keyPoints: ["Fetch Data", "Async", "State Update", "Backend Connection"],
  example: "fetch('/api/data')",
  realTimeExample: "Loading courses from server."
},
{
  id: "dependency-array",
  title: "Dependency Array",
  definition: "1. Dependency array controls when useEffect runs. 2. Empty array runs once. 3. Specific dependencies trigger updates. 4. Missing dependencies may cause bugs. 5. Proper dependency use improves performance.",
  keyPoints: ["Effect Control", "Dependencies", "Run Timing", "Optimization"],
  example: "useEffect(()=>{}, [count]);",
  realTimeExample: "Reloading data when filter changes."
},
{
  id: "cleanup-function",
  title: "Cleanup Function",
  definition: "1. Cleanup function removes side effects before component unmounts. 2. It prevents memory leaks. 3. Common for timers and subscriptions. 4. Returned inside useEffect. 5. Improves application stability.",
  keyPoints: ["Memory Safety", "Unmount Cleanup", "Timers", "Subscriptions"],
  example: "return () => clearInterval(timer);",
  realTimeExample: "Stopping timer when page changes."
},
{
  id: "multiple-effects",
  title: "Multiple Effects",
  definition: "1. Multiple useEffect hooks separate logic clearly. 2. Each effect handles specific task. 3. Improves readability. 4. Effects run independently. 5. Useful in complex components.",
  keyPoints: ["Separate Logic", "Independent Effects", "Readable Code", "Organized Hooks"],
  example: "useEffect(()=>{}, []); useEffect(()=>{}, [count]);",
  realTimeExample: "One effect for API, another for title update."
},
{
  id: "inline-css",
  title: "Inline CSS",
  definition: "1. Inline CSS applies styles directly inside JSX using style attribute. 2. Styles are written as JavaScript objects. 3. Property names use camelCase. 4. It is useful for dynamic styling. 5. Small components often use inline styles.",
  keyPoints: ["Style Object", "camelCase", "Dynamic Styling", "JSX Styling"],
  example: "<h1 style={{ color: 'blue' }}>Hello</h1>",
  realTimeExample: "Changing text color based on user selection."
},
{
  id: "external-css",
  title: "External CSS",
  definition: "1. External CSS stores styles in separate files. 2. CSS files are imported into components. 3. It improves project organization. 4. Reusable styles become easier. 5. Common in large applications.",
  keyPoints: ["Separate File", "Import CSS", "Reusable Styles", "Organized Code"],
  example: "import './App.css';",
  realTimeExample: "Applying common styles across website pages."
},
{
  id: "css-modules",
  title: "CSS Modules",
  definition: "1. CSS Modules scope styles locally to components. 2. Class names do not conflict globally. 3. Files use .module.css extension. 4. Styles are imported as objects. 5. Useful for large scalable apps.",
  keyPoints: ["Scoped Styling", "No Conflict", "Local Classes", "Modular CSS"],
  example: "import styles from './App.module.css';",
  realTimeExample: "Using isolated styles for course cards."
},
{
  id: "styled-components",
  title: "Styled Components",
  definition: "1. Styled Components use JavaScript to create styled elements. 2. Styles stay inside components. 3. Dynamic props can control styles. 4. It improves reusable design systems. 5. Popular in modern React projects.",
  keyPoints: ["CSS in JS", "Dynamic Styles", "Reusable Design", "Component Styling"],
  example: "const Button = styled.button`padding:10px;`;",
  realTimeExample: "Reusable button design with dynamic colors."
},
{
  id: "tailwind-css-react",
  title: "Tailwind CSS with React",
  definition: "1. Tailwind CSS uses utility classes for styling. 2. Styles are applied directly in JSX. 3. No separate CSS file is required. 4. Fast UI development becomes possible. 5. Highly popular in React projects.",
  keyPoints: ["Utility Classes", "Fast Styling", "Responsive Design", "Modern CSS"],
  example: "<div className='p-4 text-center'>Hello</div>",
  realTimeExample: "Building responsive landing pages quickly."
},
{
  id: "installing-react-router",
  title: "Installing React Router",
  definition: "1. React Router enables navigation between pages. 2. It is installed using npm. 3. It supports single page applications. 4. Routing improves user experience. 5. React Router is essential for multi-page apps.",
  keyPoints: ["Navigation", "npm Install", "SPA Routing", "Page Switching"],
  example: "npm install react-router-dom",
  realTimeExample: "Adding Home and Courses pages."
},
{
  id: "browser-router",
  title: "BrowserRouter",
  definition: "1. BrowserRouter wraps the application for routing support. 2. It uses browser history API. 3. It enables navigation without reload. 4. Usually placed at root level. 5. Required for route handling.",
  keyPoints: ["Root Wrapper", "History API", "Routing Base", "Navigation"],
  example: "<BrowserRouter><App /></BrowserRouter>",
  realTimeExample: "Enabling route system in app entry file."
},
{
  id: "routes",
  title: "Routes",
  definition: "1. Routes groups all route definitions. 2. Each route is placed inside Routes. 3. It controls page rendering. 4. Only matching route renders. 5. Replaces older Switch component.",
  keyPoints: ["Route Group", "Matching Logic", "Page Render", "Modern Routing"],
  example: "<Routes></Routes>",
  realTimeExample: "Managing multiple course pages."
},
{
  id: "route",
  title: "Route",
  definition: "1. Route defines path and component. 2. It links URL to component output. 3. Each route needs path and element. 4. Multiple routes build navigation system. 5. Core routing element.",
  keyPoints: ["Path", "Element", "Component Mapping", "Navigation"],
  example: "<Route path='/about' element={<About />} />",
  realTimeExample: "Displaying About page."
},
{
  id: "link",
  title: "Link",
  definition: "1. Link creates navigation without page reload. 2. It replaces anchor tags in React Router. 3. Navigation becomes smooth. 4. Browser history remains managed. 5. Used in menus.",
  keyPoints: ["Navigation", "No Reload", "SPA Link", "Menus"],
  example: "<Link to='/home'>Home</Link>",
  realTimeExample: "Navbar navigation links."
},
{
  id: "navlink",
  title: "NavLink",
  definition: "1. NavLink works like Link with active styling. 2. Active route gets automatic class. 3. Useful in navigation bars. 4. Helps indicate current page. 5. Supports active states.",
  keyPoints: ["Active Link", "Navigation", "Current Page", "Menu Highlight"],
  example: "<NavLink to='/home'>Home</NavLink>",
  realTimeExample: "Highlighting active menu item."
},
{
  id: "usenavigate",
  title: "useNavigate",
  definition: "1. useNavigate allows programmatic navigation. 2. It works inside event handlers. 3. Pages change through function calls. 4. Useful after form submission. 5. Replaces older history.push.",
  keyPoints: ["Programmatic Navigation", "Function Based", "Page Redirect", "Hooks"],
  example: "navigate('/dashboard');",
  realTimeExample: "Redirect after login."
},
{
  id: "url-parameters",
  title: "URL Parameters",
  definition: "1. URL parameters pass dynamic values in route path. 2. useParams reads values. 3. Dynamic pages become possible. 4. Useful for IDs and details pages. 5. Supports scalable routing.",
  keyPoints: ["Dynamic Route", "useParams", "ID Passing", "Flexible URLs"],
  example: "/course/:id",
  realTimeExample: "Opening selected course details."
},
{
  id: "nested-routes",
  title: "Nested Routes",
  definition: "1. Nested routes place child routes inside parent routes. 2. Complex layouts become manageable. 3. Outlet renders child route content. 4. Useful in dashboards. 5. Improves route structure.",
  keyPoints: ["Parent Child Routes", "Outlet", "Dashboard Routing", "Structure"],
  example: "<Route path='dashboard/*' />",
  realTimeExample: "Dashboard sidebar pages."
},
{
  id: "fetch-api",
  title: "Fetch API",
  definition: "1. Fetch API requests data from servers. 2. It returns promises. 3. Used inside useEffect commonly. 4. JSON data is parsed using response.json(). 5. Standard browser API.",
  keyPoints: ["HTTP Request", "Promises", "JSON Data", "Browser API"],
  example: "fetch('/api/data')",
  realTimeExample: "Loading courses from backend."
},
{
  id: "axios",
  title: "Axios",
  definition: "1. Axios is a popular HTTP library. 2. It simplifies API requests. 3. Supports interceptors and automatic JSON parsing. 4. Easier than fetch in many cases. 5. Widely used in production.",
  keyPoints: ["HTTP Library", "JSON Parsing", "Promises", "API Requests"],
  example: "axios.get('/api/data')",
  realTimeExample: "Fetching student list."
},
{
  id: "get-request",
  title: "GET Request",
  definition: "1. GET retrieves data from server. 2. It does not modify data. 3. Common for reading APIs. 4. Response usually returns JSON. 5. Used in dashboards and listings.",
  keyPoints: ["Read Data", "API Request", "JSON Response", "Server Fetch"],
  example: "axios.get('/courses')",
  realTimeExample: "Displaying all courses."
},
{
  id: "post-request",
  title: "POST Request",
  definition: "1. POST sends new data to server. 2. It creates records. 3. Body contains data payload. 4. Common in form submissions. 5. Used in create operations.",
  keyPoints: ["Send Data", "Create Record", "Payload", "Forms"],
  example: "axios.post('/users', data)",
  realTimeExample: "Student registration."
},
{
  id: "put-request",
  title: "PUT Request",
  definition: "1. PUT updates existing server data. 2. Full resource update is common. 3. Requires target ID. 4. Used in edit forms. 5. Helps maintain records.",
  keyPoints: ["Update Data", "Edit Record", "Server Change", "ID Based"],
  example: "axios.put('/users/1', data)",
  realTimeExample: "Updating student profile."
},
{
  id: "delete-request",
  title: "DELETE Request",
  definition: "1. DELETE removes data from server. 2. Target record ID is required. 3. Used in management dashboards. 4. Removes resources permanently. 5. Requires confirmation often.",
  keyPoints: ["Remove Data", "ID Required", "Permanent Delete", "Management"],
  example: "axios.delete('/users/1')",
  realTimeExample: "Deleting course."
},
{
  id: "error-handling",
  title: "Error Handling",
  definition: "1. Error handling manages failed operations. 2. try catch handles async errors. 3. UI should show error messages. 4. Improves reliability. 5. Essential for production apps.",
  keyPoints: ["try catch", "Reliable UI", "Error Message", "Safe API"],
  example: "catch(error => console.log(error))",
  realTimeExample: "Showing failed login message."
},
{
  id: "context-introduction",
  title: "Context Introduction",
  definition: "1. Context shares data globally across components. 2. It avoids prop drilling. 3. Useful for theme and auth data. 4. Provider supplies values. 5. React built-in global data solution.",
  keyPoints: ["Global Data", "No Prop Drilling", "Shared State", "Provider"],
  example: "createContext()",
  realTimeExample: "Theme mode control."
},
{
  id: "provider",
  title: "Provider",
  definition: "1. Provider supplies context values to child components. 2. Wrapped components access shared data. 3. Value prop passes data. 4. Root-level usage is common. 5. Enables centralized sharing.",
  keyPoints: ["Context Supply", "Value Prop", "Shared Access", "Root Wrapper"],
  example: "<UserContext.Provider value={user}>",
  realTimeExample: "Logged-in user access."
},
{
  id: "consumer",
  title: "Consumer",
  definition: "1. Consumer reads context values. 2. Older syntax before useContext hook. 3. Wraps UI inside consumer callback. 4. Still works in class components. 5. Alternative to hooks.",
  keyPoints: ["Read Context", "Callback Access", "Older Method", "Class Support"],
  example: "<UserContext.Consumer>",
  realTimeExample: "Accessing theme value."
},
{
  id: "global-state-management",
  title: "Global State Management",
  definition: "1. Global state stores shared application data. 2. Context and Redux handle global state. 3. Avoids repeated prop passing. 4. Improves scalability. 5. Useful in large apps.",
  keyPoints: ["Shared State", "Scalable Data", "Context", "Redux"],
  example: "Global user authentication state",
  realTimeExample: "Cart data across pages."
},
{
  id: "introduction-to-redux",
  title: "Introduction to Redux",
  definition: "1. Redux manages application state centrally. 2. State lives in store. 3. Actions trigger changes. 4. Reducers update state. 5. Large apps commonly use Redux.",
  keyPoints: ["Central Store", "Actions", "Reducers", "Global State"],
  example: "createStore()",
  realTimeExample: "E-commerce cart management."
},
{
  id: "store",
  title: "Store",
  definition: "1. Store holds application state. 2. Redux has single store usually. 3. Components read store data. 4. Store updates through reducers. 5. Core Redux container.",
  keyPoints: ["State Container", "Single Store", "Redux Core", "Global Data"],
  example: "configureStore()",
  realTimeExample: "Central student records."
},
{
  id: "actions",
  title: "Actions",
  definition: "1. Actions describe state changes. 2. They are plain objects. 3. Type field defines action purpose. 4. Payload carries data. 5. Reducers process actions.",
  keyPoints: ["Type", "Payload", "State Change", "Redux Flow"],
  example: "{ type:'ADD_USER' }",
  realTimeExample: "Adding new cart item."
},
{
  id: "reducers",
  title: "Reducers",
  definition: "1. Reducers update state based on actions. 2. They are pure functions. 3. Previous state and action are inputs. 4. New state is returned. 5. Core Redux logic.",
  keyPoints: ["Pure Function", "State Update", "Action Handling", "Redux Core"],
  example: "(state, action) => newState",
  realTimeExample: "Updating cart quantity."
},
{
  id: "dispatch",
  title: "Dispatch",
  definition: "1. Dispatch sends action to Redux store. 2. Reducers receive dispatched actions. 3. State updates after dispatch. 4. Components trigger dispatch. 5. Core Redux interaction.",
  keyPoints: ["Send Action", "Trigger Update", "Redux Flow", "Component Action"],
  example: "dispatch(addItem())",
  realTimeExample: "Login action trigger."
},
{
  id: "redux-toolkit",
  title: "Redux Toolkit",
  definition: "1. Redux Toolkit simplifies Redux setup. 2. createSlice reduces boilerplate. 3. configureStore simplifies store creation. 4. Recommended modern Redux approach. 5. Faster development.",
  keyPoints: ["Simplified Redux", "createSlice", "Modern Redux", "Boilerplate Reduction"],
  example: "createSlice()",
  realTimeExample: "Fast production Redux setup."
},
{
  id: "higher-order-components",
  title: "Higher Order Components",
  definition: "1. HOC is a function that returns enhanced component. 2. Used for reusable logic. 3. Wraps components. 4. Common in advanced patterns. 5. Reusability increases.",
  keyPoints: ["Wrapper Function", "Reusable Logic", "Advanced Pattern", "Enhancement"],
  example: "withAuth(Component)",
  realTimeExample: "Authentication wrapper."
},
{
  id: "render-props",
  title: "Render Props",
  definition: "1. Render props share logic using function props. 2. Components pass render function. 3. Flexible reuse pattern. 4. Advanced component design. 5. Alternative to HOC.",
  keyPoints: ["Function Prop", "Reusable Logic", "Advanced Pattern", "Flexible UI"],
  example: "<Data render={data => ...} />",
  realTimeExample: "Reusable data fetch component."
},
{
  id: "portals",
  title: "Portals",
  definition: "1. Portals render components outside normal DOM tree. 2. Useful for modals and overlays. 3. ReactDOM.createPortal is used. 4. Keeps UI flexible. 5. Avoids layout restrictions.",
  keyPoints: ["Outside DOM", "Modal", "Overlay", "Flexible Rendering"],
  example: "createPortal(element, root)",
  realTimeExample: "Popup modal."
},
{
  id: "error-boundaries",
  title: "Error Boundaries",
  definition: "1. Error boundaries catch UI errors in components. 2. Prevent full app crash. 3. Show fallback UI. 4. Class components implement them. 5. Improve reliability.",
  keyPoints: ["Catch Errors", "Fallback UI", "Prevent Crash", "Reliable App"],
  example: "componentDidCatch()",
  realTimeExample: "Showing error page when widget fails."
},
{
  id: "fragments",
  title: "Fragments",
  definition: "1. Fragments group elements without extra DOM nodes. 2. Useful when returning multiple elements. 3. Short syntax uses empty tags. 4. Keeps DOM clean. 5. Common React pattern.",
  keyPoints: ["No Extra DOM", "Group Elements", "Clean Output", "Short Syntax"],
  example: "<></>",
  realTimeExample: "Returning multiple table cells."
},
{
  id: "strict-mode",
  title: "Strict Mode",
  definition: "1. Strict Mode highlights potential issues. 2. Development-only checks run. 3. Helps detect unsafe patterns. 4. Improves code quality. 5. Recommended in development.",
  keyPoints: ["Warnings", "Development Check", "Safe Code", "Best Practice"],
  example: "<React.StrictMode>",
  realTimeExample: "Detecting deprecated code."
},
{
  id: "react-memo",
  title: "React Memo",
  definition: "1. React Memo prevents unnecessary component re-rendering. 2. It memoizes functional components. 3. Component re-renders only when props change. 4. It improves performance in large applications. 5. Useful for reusable UI components.",
  keyPoints: ["Memoization", "Prevent Re-render", "Props Comparison", "Performance"],
  example: "export default React.memo(Component);",
  realTimeExample: "Optimizing repeated course cards."
},
{
  id: "usememo-performance",
  title: "useMemo",
  definition: "1. useMemo stores expensive calculation results. 2. It recalculates only when dependencies change. 3. Improves rendering speed. 4. Prevents repeated heavy computation. 5. Useful in filtered lists.",
  keyPoints: ["Memoized Value", "Dependency Based", "Performance", "Optimization"],
  example: "const result = useMemo(() => calculate(), [value]);",
  realTimeExample: "Optimizing search filter results."
},
{
  id: "usecallback-performance",
  title: "useCallback",
  definition: "1. useCallback memoizes functions. 2. It prevents recreating functions on every render. 3. Useful when passing functions to child components. 4. Improves rendering efficiency. 5. Works with dependency arrays.",
  keyPoints: ["Memoized Function", "Performance", "Child Optimization", "Dependencies"],
  example: "const handleClick = useCallback(() => {}, []);",
  realTimeExample: "Optimizing button handlers in dashboard."
},
{
  id: "lazy-loading",
  title: "Lazy Loading",
  definition: "1. Lazy loading loads components only when needed. 2. It reduces initial bundle size. 3. React uses lazy() for this purpose. 4. Improves application speed. 5. Useful for large projects.",
  keyPoints: ["Load on Demand", "Bundle Reduction", "Performance", "Dynamic Import"],
  example: "const Home = React.lazy(() => import('./Home'));",
  realTimeExample: "Loading dashboard pages only when opened."
},
{
  id: "code-splitting",
  title: "Code Splitting",
  definition: "1. Code splitting divides large bundles into smaller files. 2. React loads only required code. 3. Improves initial load performance. 4. Commonly used with lazy loading. 5. Essential for scalable apps.",
  keyPoints: ["Smaller Bundles", "Fast Load", "Optimized Delivery", "Scalable App"],
  example: "import('./Component')",
  realTimeExample: "Splitting admin panel modules."
},
{
  id: "suspense",
  title: "Suspense",
  definition: "1. Suspense shows fallback UI while lazy components load. 2. It works with React.lazy. 3. Improves user experience during loading. 4. Common fallback is loading text or spinner. 5. Helps async rendering.",
  keyPoints: ["Fallback UI", "Lazy Support", "Loading State", "Async Rendering"],
  example: "<Suspense fallback={<h1>Loading...</h1>}></Suspense>",
  realTimeExample: "Showing loader before opening profile page."
},
{
  id: "login-system",
  title: "Login System",
  definition: "1. Login system authenticates users. 2. Credentials are validated before access. 3. State stores login information. 4. APIs usually verify credentials. 5. Core authentication feature.",
  keyPoints: ["Authentication", "Credentials", "User Access", "Security"],
  example: "if(email && password){ login(); }",
  realTimeExample: "Student login portal."
},
{
  id: "signup-system",
  title: "Signup System",
  definition: "1. Signup system creates new user accounts. 2. User details are collected through forms. 3. Validation checks input quality. 4. Data is sent to backend. 5. New account is stored securely.",
  keyPoints: ["Registration", "Form Data", "Validation", "Account Creation"],
  example: "axios.post('/register', data)",
  realTimeExample: "New student registration."
},
{
  id: "token-storage",
  title: "Token Storage",
  definition: "1. Token storage keeps authentication tokens after login. 2. Tokens are usually stored in localStorage or cookies. 3. Used for authorized requests. 4. Maintains session state. 5. Important for protected APIs.",
  keyPoints: ["JWT Token", "localStorage", "Session", "Authorization"],
  example: "localStorage.setItem('token', token)",
  realTimeExample: "Keeping student logged in."
},
{
  id: "protected-routes",
  title: "Protected Routes",
  definition: "1. Protected routes restrict access to authorized users only. 2. Authentication is checked before rendering route. 3. Unauthorized users are redirected. 4. Used in dashboards. 5. Improves security.",
  keyPoints: ["Restricted Access", "Route Security", "Redirect", "Authentication"],
  example: "return token ? <Dashboard /> : <Login />",
  realTimeExample: "Blocking admin dashboard for guests."
},
{
  id: "logout",
  title: "Logout",
  definition: "1. Logout removes authentication data. 2. Token is cleared from storage. 3. User session ends safely. 4. Redirect usually happens after logout. 5. Security improves by clearing credentials.",
  keyPoints: ["Session End", "Token Remove", "Redirect", "Security"],
  example: "localStorage.removeItem('token')",
  realTimeExample: "Logging out from dashboard."
},
{
  id: "build-react-app",
  title: "Build React App",
  definition: "1. Build process creates production files. 2. Optimized static files are generated. 3. Ready for deployment. 4. Removes development overhead. 5. Production build improves speed.",
  keyPoints: ["Production Build", "Optimized Files", "Deployment Ready", "Performance"],
  example: "npm run build",
  realTimeExample: "Preparing website for live hosting."
},
{
  id: "deploy-netlify",
  title: "Deploy in Netlify",
  definition: "1. Netlify hosts static React applications. 2. Deployment can connect GitHub directly. 3. Build folder is published online. 4. SSL is automatic. 5. Easy frontend hosting solution.",
  keyPoints: ["Static Hosting", "Git Integration", "SSL", "Frontend Deployment"],
  example: "Upload dist folder to Netlify",
  realTimeExample: "Publishing course website online."
},
{
  id: "deploy-vercel",
  title: "Deploy in Vercel",
  definition: "1. Vercel provides fast React deployment. 2. Git integration enables automatic deployment. 3. Optimized for frontend frameworks. 4. Supports instant updates. 5. Popular for React apps.",
  keyPoints: ["Fast Hosting", "Git Deploy", "Frontend Optimized", "Auto Deploy"],
  example: "Connect GitHub repo to Vercel",
  realTimeExample: "Deploying student dashboard."
},
{
  id: "environment-variables",
  title: "Environment Variables",
  definition: "1. Environment variables store sensitive configuration. 2. API URLs are commonly stored here. 3. Variables differ between development and production. 4. React uses import.meta.env in Vite. 5. Improves security and flexibility.",
  keyPoints: ["Config Data", "Security", "API URL", "Production Setup"],
  example: "import.meta.env.VITE_API_URL",
  realTimeExample: "Managing backend URL separately."
},
{
  id: "todo-app",
  title: "Todo App",
  definition: "1. Todo app manages tasks dynamically. 2. Users can add, edit, and delete tasks. 3. State handles task list. 4. Lists and events are heavily used. 5. Common beginner project.",
  keyPoints: ["CRUD", "State", "Lists", "Events"],
  example: "setTasks([...tasks, newTask])",
  realTimeExample: "Daily task manager."
},
{
  id: "calculator-project",
  title: "Calculator",
  definition: "1. Calculator project handles arithmetic operations. 2. Buttons trigger events. 3. State stores current expression. 4. Conditional logic processes input. 5. Good event handling practice.",
  keyPoints: ["Arithmetic", "Buttons", "State", "Logic"],
  example: "setValue(value + '1')",
  realTimeExample: "Basic digital calculator."
},
{
  id: "weather-app",
  title: "Weather App",
  definition: "1. Weather app fetches live weather data from API. 2. useEffect handles API calls. 3. State stores weather results. 4. User searches by city. 5. Real API integration practice.",
  keyPoints: ["API", "Fetch Data", "State", "Dynamic UI"],
  example: "fetch(weatherAPI)",
  realTimeExample: "Showing live city weather."
},
{
  id: "ecommerce-ui",
  title: "E-Commerce UI",
  definition: "1. E-Commerce UI displays products dynamically. 2. Cart management uses state. 3. Routing handles pages. 4. Components organize product cards. 5. Professional frontend project.",
  keyPoints: ["Products", "Cart", "Routing", "Components"],
  example: "<ProductCard />",
  realTimeExample: "Online shopping interface."
},
{
  id: "admin-dashboard",
  title: "Admin Dashboard",
  definition: "1. Admin dashboard manages data visually. 2. Tables, charts, and navigation are included. 3. Authentication protects access. 4. API integration loads records. 5. Professional real-time project.",
  keyPoints: ["Dashboard", "Protected Access", "Data Tables", "API"],
  example: "<Dashboard />",
  realTimeExample: "Student management admin panel."
},
{
  id: "lms-platform",
  title: "LMS Platform",
  definition: "1. LMS platform manages courses and learning content. 2. Students access lessons dynamically. 3. Authentication controls accounts. 4. Routing organizes modules. 5. Large real-world React project.",
  keyPoints: ["Courses", "Students", "Authentication", "Modules"],
  example: "<CoursePage />",
  realTimeExample: "Online learning platform like Tech Routes."
}


        ]
      },
      {
        id: "python-core",
        title: "5. Python Programming (Core)",
        topics: [
          {
  id: "python-intro",
  title: "Introduction to Python",
  definition: "1. Python is a simple programming language.\n2  It is easy to learn for beginners. \n3. Python is used to build software and websites. \n4. It is one of the most popular languages.",
  keyPoints: ["Simple Language", "Easy Learning", "Popular", "Used in Software"],
  example: "print('Hello World')",
  realTimeExample: "Creating a basic calculator program."
},

{
  id: "python-installation",
  title: "Installation and Setup",
  definition: "1. Python must be installed on the computer. 2. It can be downloaded from python.org. 3. After installation Python can run in terminal. 4. A code editor helps write programs easily.",
  keyPoints: ["Download", "Install", "Terminal", "Editor"],
  example: "python --version",
  realTimeExample: "Checking Python before starting coding."
},

{
  id: "python-syntax",
  title: "Python Syntax",
  definition: "1. Syntax means rules for writing code. 2. Python code is easy to read. 3. Indentation is important in Python. 4. Correct syntax avoids errors.",
  keyPoints: ["Rules", "Indentation", "Readable", "Correct Code"],
  example: "print('Welcome')",
  realTimeExample: "Writing simple output code."
},

{
  id: "variables-data-types",
  title: "Variables and Data Types",
  definition: "1. Variables store values in a program. 2. Python supports numbers and text data. 3. int means integer value. 4. string means text value.",
  keyPoints: ["Store Values", "int", "float", "string"],
  example: "name = 'Python'",
  realTimeExample: "Saving student name in program."
},

{
  id: "input-output",
  title: "Input / Output",
  definition: "1. Input takes data from user. 2. Output shows result on screen. 3. input() is used for input. 4. print() is used for output.",
  keyPoints: ["input()", "print()", "User Data", "Output"],
  example: "name = input('Enter Name')",
  realTimeExample: "Showing welcome message after user input."
},

{
  id: "comments",
  title: "Comments",
  definition: "1. Comments explain code. 2. Python uses # symbol. 3. Comments are not executed. 4. They help understand code.",
  keyPoints: ["#", "Explanation", "Readable", "Not Executed"],
  example: "# This is comment",
  realTimeExample: "Writing notes inside program."
},

{
  id: "keywords",
  title: "Keywords",
  definition: "1. Keywords are special words in Python. 2. They have fixed meaning. 3. Examples are if, else, for. 4. They cannot be variable names.",
  keyPoints: ["Special Words", "if", "else", "for"],
  example: "if x > 5:",
  realTimeExample: "Using condition in login system."
},

{
  id: "type-conversion",
  title: "Type Conversion",
  definition: "1. Type conversion changes data type. 2. int() converts to integer. 3. float() converts decimal value. 4. str() converts to string.",
  keyPoints: ["int()", "float()", "str()", "Conversion"],
  example: "age = int(input())",
  realTimeExample: "Converting age before calculation."
},
{
  id: "arithmetic-operators",
  title: "Arithmetic Operators",
  definition: "1. Arithmetic operators are used for calculations. 2. They include +, -, *, / symbols. 3. These operators work with numbers. 4. They help perform math operations.",
  keyPoints: ["Addition", "Subtraction", "Multiplication", "Division"],
  example: "a = 10 + 5",
  realTimeExample: "Calculating total marks."
},

{
  id: "assignment-operators",
  title: "Assignment Operators",
  definition: "1. Assignment operators store values in variables. 2. = is the basic assignment operator. 3. += adds and stores value. 4. They reduce extra coding.",
  keyPoints: ["=", "+=", "-=", "*="],
  example: "x += 5",
  realTimeExample: "Updating balance value."
},

{
  id: "comparison-operators",
  title: "Comparison Operators",
  definition: "1. Comparison operators compare two values. 2. They return True or False. 3. == checks equality. 4. > and < compare values.",
  keyPoints: ["==", "!=", ">", "<"],
  example: "x > 5",
  realTimeExample: "Checking exam result."
},

{
  id: "logical-operators",
  title: "Logical Operators",
  definition: "1. Logical operators combine conditions. 2. and checks both conditions. 3. or checks any one condition. 4. not reverses result.",
  keyPoints: ["and", "or", "not"],
  example: "x > 5 and x < 20",
  realTimeExample: "Checking login conditions."
},

{
  id: "bitwise-operators",
  title: "Bitwise Operators",
  definition: "1. Bitwise operators work on binary values. 2. They compare bits directly. 3. & means AND operation. 4. | means OR operation.",
  keyPoints: ["&", "|", "^", "~"],
  example: "5 & 3",
  realTimeExample: "Used in low-level programming."
},

{
  id: "membership-operators",
  title: "Membership Operators",
  definition: "1. Membership operators check value inside collection. 2. in checks presence. 3. not in checks absence. 4. They work with lists and strings.",
  keyPoints: ["in", "not in"],
  example: "'a' in 'python'",
  realTimeExample: "Checking username in list."
},

{
  id: "identity-operators",
  title: "Identity Operators",
  definition: "1. Identity operators compare memory location. 2. is checks same object. 3. is not checks different object. 4. They compare object identity.",
  keyPoints: ["is", "is not"],
  example: "x is y",
  realTimeExample: "Comparing two objects."
},

{
  id: "if-statement",
  title: "If Statement",
  definition: "1. If statement checks condition. 2. Code runs when condition is true. 3. It helps decision making. 4. It is basic control statement.",
  keyPoints: ["Condition", "True Block", "Decision", "Syntax"],
  example: "if x > 5:\n print(x)",
  realTimeExample: "Checking age eligibility."
},

{
  id: "if-else",
  title: "If Else",
  definition: "1. If else gives two possible outputs. 2. If block runs for true condition. 3. Else block runs for false condition. 4. It handles decisions clearly.",
  keyPoints: ["if", "else", "Condition", "Two Blocks"],
  example: "if x>5:\n print('Yes')\nelse:\n print('No')",
  realTimeExample: "Pass or fail result."
},

{
  id: "elif-ladder",
  title: "Elif Ladder",
  definition: "1. Elif checks multiple conditions. 2. It works after if statement. 3. Multiple elif blocks are possible. 4. It selects correct block.",
  keyPoints: ["elif", "Multiple Conditions", "Decision", "Flow"],
  example: "elif x == 5:",
  realTimeExample: "Grading system."
},

{
  id: "nested-if",
  title: "Nested If",
  definition: "1. Nested if means if inside another if. 2. It checks multiple levels of conditions. 3. Inner if runs after outer condition. 4. It handles detailed decisions.",
  keyPoints: ["if inside if", "Multiple Checks", "Nested Logic", "Decision"],
  example: "if x>0:\n if x<10:",
  realTimeExample: "Multi-step login validation."
},

{
  id: "while-loop",
  title: "While Loop",
  definition: "1. While loop repeats code while condition is true. 2. It checks condition every time. 3. It stops when false. 4. It is useful for repeated tasks.",
  keyPoints: ["Condition", "Repeat", "Loop", "Stop"],
  example: "while x < 5:",
  realTimeExample: "Printing numbers."
},

{
  id: "for-loop",
  title: "For Loop",
  definition: "1. For loop repeats code for sequence values. 2. It works with range(). 3. It runs fixed number of times. 4. It is easy for iteration.",
  keyPoints: ["range()", "Iteration", "Sequence", "Repeat"],
  example: "for i in range(5):",
  realTimeExample: "Displaying names."
},

{
  id: "break",
  title: "Break",
  definition: "1. Break stops loop immediately. 2. It exits current loop. 3. It works inside loops. 4. It controls loop execution.",
  keyPoints: ["Stop Loop", "Immediate Exit", "Loop Control", "Condition"],
  example: "break",
  realTimeExample: "Stop search when found."
},

{
  id: "continue",
  title: "Continue",
  definition: "1. Continue skips current loop step. 2. It moves to next iteration. 3. Loop does not stop. 4. It skips selected values.",
  keyPoints: ["Skip", "Next Iteration", "Loop Continue", "Condition"],
  example: "continue",
  realTimeExample: "Skipping invalid data."
},

{
  id: "pass",
  title: "Pass",
  definition: "1. Pass means do nothing. 2. It is placeholder statement. 3. It avoids syntax errors. 4. It is used when code is empty.",
  keyPoints: ["Placeholder", "No Action", "Syntax", "Temporary"],
  example: "pass",
  realTimeExample: "Keeping empty block for future code."
},
{
  id: "string-creation",
  title: "String Creation",
  definition: "1. Strings store text values in Python. 2. Strings are written inside quotes. 3. Single or double quotes can be used. 4. Strings are used to handle text data.",
  keyPoints: ["Text Data", "Quotes", "String Value", "Characters"],
  example: "name = 'Python'",
  realTimeExample: "Saving student name."
},

{
  id: "indexing",
  title: "Indexing",
  definition: "1. Indexing accesses characters in a string. 2. Index starts from zero. 3. Each character has position. 4. Negative index starts from end.",
  keyPoints: ["Position", "Zero Index", "Character Access", "Negative Index"],
  example: "name[0]",
  realTimeExample: "Getting first letter of username."
},

{
  id: "slicing",
  title: "Slicing",
  definition: "1. Slicing extracts part of a string. 2. It uses start and end index. 3. End position is excluded. 4. It helps get selected text.",
  keyPoints: ["Start", "End", "Extract", "Substring"],
  example: "name[0:3]",
  realTimeExample: "Getting first three letters."
},

{
  id: "string-methods",
  title: "String Methods",
  definition: "1. String methods perform operations on strings. 2. upper() changes text to uppercase. 3. lower() changes text to lowercase. 4. replace() changes words.",
  keyPoints: ["upper()", "lower()", "replace()", "strip()"],
  example: "name.upper()",
  realTimeExample: "Formatting usernames."
},

{
  id: "formatting",
  title: "Formatting",
  definition: "1. Formatting combines text and values. 2. It makes output readable. 3. f-string is commonly used. 4. It helps display dynamic data.",
  keyPoints: ["f-string", "Readable Output", "Dynamic Text", "Display"],
  example: "f'Hello {name}'",
  realTimeExample: "Showing welcome message."
},

{
  id: "escape-characters",
  title: "Escape Characters",
  definition: "1. Escape characters add special formatting. 2. \\n creates new line. 3. \\t creates tab space. 4. They improve text display.",
  keyPoints: ["\\n", "\\t", "\\\\", "Special Symbols"],
  example: "print('Hello\\nPython')",
  realTimeExample: "Printing text in multiple lines."
},

{
  id: "list",
  title: "List",
  definition: "1. List stores multiple values. 2. Lists use square brackets. 3. Lists are changeable. 4. Duplicate values are allowed.",
  keyPoints: ["[]", "Mutable", "Ordered", "Duplicates"],
  example: "nums = [1,2,3]",
  realTimeExample: "Student marks list."
},

{
  id: "tuple",
  title: "Tuple",
  definition: "1. Tuple stores multiple values. 2. Tuples use round brackets. 3. Tuple values cannot change. 4. It keeps fixed data.",
  keyPoints: ["()", "Immutable", "Ordered", "Fixed Values"],
  example: "t = (1,2,3)",
  realTimeExample: "Saving fixed coordinates."
},

{
  id: "set",
  title: "Set",
  definition: "1. Set stores unique values only. 2. Duplicate values are removed automatically. 3. Sets use curly brackets. 4. Order is not fixed.",
  keyPoints: ["Unique Values", "{}", "No Duplicates", "Unordered"],
  example: "s = {1,2,3}",
  realTimeExample: "Removing duplicate numbers."
},

{
  id: "dictionary",
  title: "Dictionary",
  definition: "1. Dictionary stores key and value pairs. 2. It uses curly brackets. 3. Keys must be unique. 4. Values are accessed by keys.",
  keyPoints: ["Key", "Value", "{}", "Unique Keys"],
  example: "student = {'name':'Ram'}",
  realTimeExample: "Saving student details."
},

{
  id: "nested-collections",
  title: "Nested Collections",
  definition: "1. Nested collection means collection inside another collection. 2. A list can contain another list. 3. Dictionaries can contain lists. 4. It stores complex data.",
  keyPoints: ["List inside List", "Nested Dict", "Complex Data", "Multi Level"],
  example: "[[1,2],[3,4]]",
  realTimeExample: "Storing class-wise marks."
},

{
  id: "collection-methods",
  title: "Collection Methods",
  definition: "1. Collection methods modify collections. 2. append() adds item. 3. remove() deletes item. 4. sort() arranges values.",
  keyPoints: ["append()", "remove()", "sort()", "pop()"],
  example: "nums.append(5)",
  realTimeExample: "Adding new student marks."
},
{
  id: "function-creation",
  title: "Function Creation",
  definition: "1. Function is a reusable block of code. 2. It is created using def keyword. 3. Functions reduce repeated code. 4. They make programs organized.",
  keyPoints: ["def", "Reusable", "Code Block", "Organized Program"],
  example: "def add():",
  realTimeExample: "Creating calculator function."
},

{
  id: "parameters",
  title: "Parameters",
  definition: "1. Parameters receive values in a function. 2. They are written inside brackets. 3. Functions can have many parameters. 4. Parameters make functions flexible.",
  keyPoints: ["Input Values", "Brackets", "Flexible", "Arguments"],
  example: "def add(a, b):",
  realTimeExample: "Passing two numbers for addition."
},

{
  id: "return-statement",
  title: "Return Statement",
  definition: "1. Return sends result from function. 2. It gives output to caller. 3. Function ends after return. 4. Returned value can be stored.",
  keyPoints: ["return", "Output", "Function End", "Store Result"],
  example: "return a + b",
  realTimeExample: "Returning total marks."
},

{
  id: "default-arguments",
  title: "Default Arguments",
  definition: "1. Default arguments have fixed values. 2. They work when no value is passed. 3. They avoid missing argument errors. 4. They make functions simple.",
  keyPoints: ["Default Value", "Optional Input", "Fixed Value", "Easy Call"],
  example: "def greet(name='User'):",
  realTimeExample: "Showing default username."
},

{
  id: "keyword-arguments",
  title: "Keyword Arguments",
  definition: "1. Keyword arguments use parameter name while calling. 2. Order is not important. 3. They improve readability. 4. Values match by name.",
  keyPoints: ["Parameter Name", "Readable", "Flexible Order", "Named Values"],
  example: "greet(name='Ram')",
  realTimeExample: "Passing named student data."
},

{
  id: "lambda-functions",
  title: "Lambda Functions",
  definition: "1. Lambda is a small anonymous function. 2. It is written in one line. 3. It uses lambda keyword. 4. It is useful for simple operations.",
  keyPoints: ["lambda", "One Line", "Anonymous", "Quick Function"],
  example: "x = lambda a: a + 5",
  realTimeExample: "Quick number calculation."
},

{
  id: "recursion",
  title: "Recursion",
  definition: "1. Recursion means function calls itself. 2. It repeats until condition stops. 3. Base condition is important. 4. It solves repeated problems.",
  keyPoints: ["Self Call", "Base Condition", "Repeat", "Function Loop"],
  example: "def fact(n): return 1 if n==1 else n*fact(n-1)",
  realTimeExample: "Calculating factorial."
},
{
  id: "open-file",
  title: "Open File",
  definition: "1. open() is used to open a file. 2. It connects Python with external file. 3. File name must be given correctly. 4. It is first step in file handling.",
  keyPoints: ["open()", "File Access", "File Name", "Start File Handling"],
  example: "f = open('data.txt')",
  realTimeExample: "Opening student record file."
},

{
  id: "read-file",
  title: "Read File",
  definition: "1. read() reads file content. 2. It shows stored data from file. 3. File must be opened in read mode. 4. It is used to view file data.",
  keyPoints: ["read()", "Read Mode", "File Content", "View Data"],
  example: "f.read()",
  realTimeExample: "Reading saved user details."
},

{
  id: "write-file",
  title: "Write File",
  definition: "1. write() stores data into file. 2. It replaces old content in write mode. 3. File opens in write mode. 4. It creates file if missing.",
  keyPoints: ["write()", "Store Data", "Write Mode", "New File"],
  example: "f.write('Hello')",
  realTimeExample: "Saving report data."
},

{
  id: "append-file",
  title: "Append File",
  definition: "1. Append adds new data to file. 2. Old data remains safe. 3. It uses append mode. 4. New content goes at end.",
  keyPoints: ["Append Mode", "Add Data", "Old Data Safe", "End of File"],
  example: "f = open('data.txt','a')",
  realTimeExample: "Adding new student name."
},

{
  id: "file-modes",
  title: "File Modes",
  definition: "1. File modes define file operation type. 2. r means read mode. 3. w means write mode. 4. a means append mode.",
  keyPoints: ["r", "w", "a", "Mode Selection"],
  example: "open('file.txt','r')",
  realTimeExample: "Choosing correct mode before editing file."
},

{
  id: "with-statement",
  title: "With Statement",
  definition: "1. with statement opens file safely. 2. It closes file automatically. 3. It reduces coding errors. 4. It is recommended in file handling.",
  keyPoints: ["with", "Auto Close", "Safe File", "Best Practice"],
  example: "with open('file.txt') as f:",
  realTimeExample: "Reading file safely in projects."
},

{
  id: "try",
  title: "Try",
  definition: "1. try block checks risky code. 2. It catches possible errors. 3. Code runs inside try block. 4. It prevents program crash.",
  keyPoints: ["try", "Risky Code", "Error Check", "Protection"],
  example: "try:\n x = 10/0",
  realTimeExample: "Handling division errors."
},

{
  id: "except",
  title: "Except",
  definition: "1. except handles errors from try block. 2. It runs when error occurs. 3. Program continues safely. 4. It shows error message.",
  keyPoints: ["except", "Error Handle", "Safe Execution", "Message"],
  example: "except:\n print('Error')",
  realTimeExample: "Showing invalid input message."
},

{
  id: "finally",
  title: "Finally",
  definition: "1. finally always runs after try block. 2. It runs whether error occurs or not. 3. It is used for cleanup tasks. 4. It closes resources safely.",
  keyPoints: ["finally", "Always Runs", "Cleanup", "Safe Close"],
  example: "finally:\n print('Done')",
  realTimeExample: "Closing database connection."
},

{
  id: "else",
  title: "Else",
  definition: "1. else runs if no error happens. 2. It comes after except block. 3. It shows successful execution. 4. It separates success code.",
  keyPoints: ["else", "No Error", "Success", "After Except"],
  example: "else:\n print('Success')",
  realTimeExample: "Showing success after calculation."
},

{
  id: "raise-exception",
  title: "Raise Exception",
  definition: "1. raise creates manual error. 2. It stops program when needed. 3. Custom message can be given. 4. It is used for validation.",
  keyPoints: ["raise", "Manual Error", "Validation", "Stop Program"],
  example: "raise ValueError('Invalid')",
  realTimeExample: "Rejecting wrong age input."
},

{
  id: "custom-exception",
  title: "Custom Exception",
  definition: "1. Custom exception means user-defined error. 2. It is created using class. 3. It improves error control. 4. It gives specific messages.",
  keyPoints: ["Custom Error", "Class", "Specific Message", "Better Control"],
  example: "class MyError(Exception): pass",
  realTimeExample: "Creating business-specific validation error."
},
{
  id: "class-object",
  title: "Class and Object",
  definition: "1. Class is a blueprint for objects. 2. Object is created from class. 3. Class defines properties and behavior. 4. Objects use class data.",
  keyPoints: ["Class", "Object", "Blueprint", "Instance"],
  example: "class Student:\n    pass",
  realTimeExample: "Creating student objects."
},

{
  id: "constructor",
  title: "Constructor",
  definition: "1. Constructor runs automatically when object is created. 2. It uses __init__ method. 3. It initializes object data. 4. It saves values during creation.",
  keyPoints: ["__init__", "Auto Run", "Initialize", "Object Setup"],
  example: "def __init__(self,name):",
  realTimeExample: "Setting student name during object creation."
},

{
  id: "instance-variables",
  title: "Instance Variables",
  definition: "1. Instance variables store object data. 2. They belong to each object. 3. Values can change object to object. 4. They are defined using self.",
  keyPoints: ["self", "Object Data", "Separate Values", "Variables"],
  example: "self.name = name",
  realTimeExample: "Saving each student name."
},

{
  id: "methods",
  title: "Methods",
  definition: "1. Methods are functions inside class. 2. They define object behavior. 3. Methods use self parameter. 4. Objects call methods.",
  keyPoints: ["Function", "Class", "Behavior", "self"],
  example: "def show(self):",
  realTimeExample: "Displaying student details."
},

{
  id: "inheritance",
  title: "Inheritance",
  definition: "1. Inheritance allows one class to use another class features. 2. Child class gets parent properties. 3. It reduces repeated code. 4. It supports code reuse.",
  keyPoints: ["Parent Class", "Child Class", "Reuse", "Extension"],
  example: "class Child(Parent):",
  realTimeExample: "Employee class using person class."
},

{
  id: "polymorphism",
  title: "Polymorphism",
  definition: "1. Polymorphism means same method different behavior. 2. Same function works differently in classes. 3. It improves flexibility. 4. It supports method overriding.",
  keyPoints: ["Same Method", "Different Behavior", "Flexibility", "Override"],
  example: "def sound():",
  realTimeExample: "Animal sounds example."
},

{
  id: "encapsulation",
  title: "Encapsulation",
  definition: "1. Encapsulation hides data inside class. 2. It protects object data. 3. Private variables are used. 4. It improves security.",
  keyPoints: ["Data Hiding", "Private Variable", "Security", "Control"],
  example: "__salary = 5000",
  realTimeExample: "Protecting bank account balance."
},

{
  id: "abstraction",
  title: "Abstraction",
  definition: "1. Abstraction hides internal details. 2. Only important features are shown. 3. It reduces complexity. 4. It improves design.",
  keyPoints: ["Hide Details", "Important Features", "Simple Use", "Design"],
  example: "from abc import ABC",
  realTimeExample: "ATM machine operations."
},

{
  id: "import-module",
  title: "Import Module",
  definition: "1. import is used to load module. 2. Module gives extra functions. 3. It avoids rewriting code. 4. Imported module can be used directly.",
  keyPoints: ["import", "Reuse", "Functions", "Module Use"],
  example: "import math",
  realTimeExample: "Using math functions."
},

{
  id: "create-module",
  title: "Create Module",
  definition: "1. Module is a Python file. 2. It stores reusable code. 3. Functions can be written inside module. 4. Module can be imported later.",
  keyPoints: ["Python File", "Reusable Code", "Functions", "Import Later"],
  example: "myfile.py",
  realTimeExample: "Creating calculator module."
},

{
  id: "built-in-modules",
  title: "Built-in Modules",
  definition: "1. Python provides ready-made modules. 2. They save development time. 3. math and random are common modules. 4. They provide useful functions.",
  keyPoints: ["math", "random", "time", "os"],
  example: "import random",
  realTimeExample: "Generating random OTP."
},

{
  id: "package-creation",
  title: "Package Creation",
  definition: "1. Package is collection of modules. 2. It organizes files in folders. 3. __init__.py creates package. 4. It improves project structure.",
  keyPoints: ["Folder", "__init__.py", "Modules", "Structure"],
  example: "mypackage/",
  realTimeExample: "Organizing project files."
},
{
  id: "decorators",
  title: "Decorators",
  definition: "1. Decorators modify function behavior. 2. They add extra features without changing original code. 3. @ symbol is used for decorators. 4. They improve reusable logic.",
  keyPoints: ["@", "Function Wrapper", "Reusable", "Extra Feature"],
  example: "@decorator",
  realTimeExample: "Adding login check before function execution."
},

{
  id: "generators",
  title: "Generators",
  definition: "1. Generators produce values one by one. 2. They use yield keyword. 3. They save memory. 4. They are useful for large data.",
  keyPoints: ["yield", "One by One", "Memory Saving", "Lazy Execution"],
  example: "yield x",
  realTimeExample: "Reading large file step by step."
},

{
  id: "iterators",
  title: "Iterators",
  definition: "1. Iterators allow looping through data. 2. They use next() function. 3. They return one item at a time. 4. They control sequence access.",
  keyPoints: ["next()", "Sequence", "Loop", "Item by Item"],
  example: "next(it)",
  realTimeExample: "Reading list values one by one."
},

{
  id: "args-kwargs",
  title: "*args and **kwargs",
  definition: "1. *args accepts many values. 2. **kwargs accepts named values. 3. They make functions flexible. 4. They support variable arguments.",
  keyPoints: ["*args", "**kwargs", "Flexible Input", "Multiple Values"],
  example: "def add(*args):",
  realTimeExample: "Accepting many student marks."
},

{
  id: "map",
  title: "Map",
  definition: "1. map() applies function to all items. 2. It processes sequence values. 3. It returns mapped result. 4. It reduces loop writing.",
  keyPoints: ["map()", "Function Apply", "Sequence", "Result"],
  example: "map(str, nums)",
  realTimeExample: "Converting all numbers to string."
},

{
  id: "filter",
  title: "Filter",
  definition: "1. filter() selects values by condition. 2. It removes unwanted items. 3. It returns filtered result. 4. It works with functions.",
  keyPoints: ["filter()", "Condition", "Select Values", "Result"],
  example: "filter(lambda x:x>5, nums)",
  realTimeExample: "Filtering passed students."
},

{
  id: "reduce",
  title: "Reduce",
  definition: "1. reduce() combines values into one result. 2. It uses function repeatedly. 3. It comes from functools module. 4. It reduces sequence step by step.",
  keyPoints: ["reduce()", "Single Result", "functools", "Combine Values"],
  example: "reduce(lambda x,y:x+y, nums)",
  realTimeExample: "Calculating total marks."
},

{
  id: "connect-mysql",
  title: "Connect Python with MySQL",
  definition: "1. Python connects to MySQL using connector library. 2. Connection needs host, user, password. 3. Database name is also required. 4. Connection allows database operations.",
  keyPoints: ["Connector", "Host", "User", "Database"],
  example: "mysql.connector.connect()",
  realTimeExample: "Connecting student database."
},

{
  id: "insert-data",
  title: "Insert Data",
  definition: "1. Insert adds new records to database. 2. SQL INSERT command is used. 3. Values are stored permanently. 4. Commit saves changes.",
  keyPoints: ["INSERT", "New Record", "Commit", "Database"],
  example: "INSERT INTO student VALUES()",
  realTimeExample: "Adding student details."
},

{
  id: "update-data",
  title: "Update Data",
  definition: "1. Update changes existing records. 2. SQL UPDATE command is used. 3. It modifies selected data. 4. Commit saves update.",
  keyPoints: ["UPDATE", "Modify", "Commit", "Existing Record"],
  example: "UPDATE student SET name='Ram'",
  realTimeExample: "Changing mobile number."
},

{
  id: "delete-data",
  title: "Delete Data",
  definition: "1. Delete removes records from table. 2. SQL DELETE command is used. 3. Condition selects record. 4. Commit saves deletion.",
  keyPoints: ["DELETE", "Remove Record", "Condition", "Commit"],
  example: "DELETE FROM student WHERE id=1",
  realTimeExample: "Removing old data."
},

{
  id: "fetch-records",
  title: "Fetch Records",
  definition: "1. Fetch reads data from database. 2. SELECT command gets records. 3. fetchall() returns all rows. 4. fetchone() returns one row.",
  keyPoints: ["SELECT", "fetchall()", "fetchone()", "Read Data"],
  example: "cursor.fetchall()",
  realTimeExample: "Showing student list."
},

{
  id: "what-is-api",
  title: "What is API",
  definition: "1. API connects two applications. 2. It allows data exchange. 3. API follows request and response. 4. It helps use external services.",
  keyPoints: ["Connection", "Data Exchange", "Request", "Response"],
  example: "API call",
  realTimeExample: "Getting weather data."
},

{
  id: "json-handling",
  title: "JSON Handling",
  definition: "1. JSON stores data in key-value format. 2. It is used in APIs. 3. Python converts JSON easily. 4. It helps exchange data.",
  keyPoints: ["JSON", "Key Value", "Data Format", "API Data"],
  example: "json.loads()",
  realTimeExample: "Reading API response."
},

{
  id: "get-request",
  title: "GET Request",
  definition: "1. GET request reads data from server. 2. It does not change data. 3. It is used in APIs. 4. It returns response.",
  keyPoints: ["GET", "Read Data", "Server", "Response"],
  example: "requests.get(url)",
  realTimeExample: "Fetching user data."
},

{
  id: "post-request",
  title: "POST Request",
  definition: "1. POST request sends data to server. 2. It creates new data. 3. It is used in forms and APIs. 4. Server stores data.",
  keyPoints: ["POST", "Send Data", "Server", "Create Record"],
  example: "requests.post(url)",
  realTimeExample: "Submitting login data."
},

{
  id: "requests-library",
  title: "Using Requests Library",
  definition: "1. requests library handles API calls. 2. It supports GET and POST requests. 3. It simplifies server communication. 4. It is widely used in Python.",
  keyPoints: ["requests", "API Call", "GET", "POST"],
  example: "import requests",
  realTimeExample: "Connecting external service."
},

{
  id: "student-management-system",
  title: "Student Management System",
  definition: "1. It manages student records. 2. It stores names and marks. 3. It supports add, update, delete. 4. It is a beginner project.",
  keyPoints: ["CRUD", "Records", "Student Data", "Project"],
  example: "Student CRUD",
  realTimeExample: "College record system."
},

{
  id: "calculator-app",
  title: "Calculator App",
  definition: "1. Calculator app performs arithmetic operations. 2. It accepts user input. 3. It shows result quickly. 4. It is basic Python project.",
  keyPoints: ["Addition", "Input", "Output", "Project"],
  example: "a+b",
  realTimeExample: "Simple desktop calculator."
},

{
  id: "file-organizer",
  title: "File Organizer",
  definition: "1. File organizer arranges files automatically. 2. It groups files by type. 3. It saves manual work. 4. It uses file handling.",
  keyPoints: ["Files", "Folders", "Automation", "Sorting"],
  example: "os.listdir()",
  realTimeExample: "Sorting downloads folder."
},

{
  id: "login-system",
  title: "Login System",
  definition: "1. Login system checks username and password. 2. It validates user input. 3. It allows secure access. 4. It is common beginner project.",
  keyPoints: ["Username", "Password", "Validation", "Access"],
  example: "if user==pwd:",
  realTimeExample: "Website login page."
}


        ]
      },
      {
        id: "python-backend",
        title: "6. Web Framework (Django)",
        topics: [
          {
            id: "django-intro",
            title: "Django Intro",
            definition: "1. Django is a high-level Python web framework for rapid development. 2. It follows the Model-Template-View (MTV) architectural pattern. 3. It comes with a built-in admin interface and authentication system. 4. Django emphasizes security and helps avoid common web vulnerabilities. 5. It is highly scalable and used by companies like Instagram and Pinterest.",
            keyPoints: ["MTV Architecture", "Project Structure", "Django Admin", "Settings & Configuration"],
            example: "python manage.py startproject myproject",
            realTimeExample: "Setting up a fully functional admin panel for a blog site in just a few minutes."
          },
          {
            id: "django-models",
            title: "Models & ORM",
            definition: "1. Models define the structure of your database tables using Python classes. 2. The ORM allows interacting with the database without writing SQL. 3. Migrations propagate model changes into the database schema. 4. QuerySets are used to retrieve and filter data from the database. 5. Relationships like One-to-One and Many-to-Many are easily defined.",
            keyPoints: ["Model fields", "Migrations", "QuerySets", "Relationships"],
            example: "class Post(models.Model):\n    title = models.CharField(max_length=100)",
            realTimeExample: "Defining a 'User' model and automatically creating the corresponding database table."
          },
          {
            id: "django-views",
            title: "Views & URLs",
            definition: "1. Views are functions or classes that process requests and return responses. 2. URLs map web addresses to specific view functions. 3. Function-based views are simple and direct for basic logic. 4. Class-based views provide reusability and cleaner code for complex logic. 5. URL patterns can capture parameters from the web address.",
            keyPoints: ["Function-based views", "Class-based views", "URL patterns", "Path converters"],
            example: "path('post/<int:pk>/', views.post_detail, name='detail')",
            realTimeExample: "Creating a view that fetches a specific article from the database based on the ID in the URL."
          },
          {
            id: "django-templates",
            title: "Templates",
            definition: "1. Django templates generate HTML dynamically using a specific syntax. 2. Template inheritance allows reusing a base layout across multiple pages. 3. Template tags and filters provide logic and formatting within HTML. 4. Static files like CSS and JS are managed through a dedicated system. 5. Templates keep the presentation layer separate from the business logic.",
            keyPoints: ["Template tags", "Variables", "Inheritance", "Static files"],
            example: "{% extends 'base.html' %}\n<h1>{{ post.title }}</h1>",
            realTimeExample: "Creating a common header and footer that appears on every page of your website."
          },
          {
            id: "django-rest",
            title: "REST Framework",
            definition: "1. Django REST Framework (DRF) is used to build powerful Web APIs. 2. Serializers convert model instances into JSON format. 3. APIViews and ViewSets handle the logic for different HTTP methods. 4. DRF includes built-in support for authentication and permissions. 5. It provides a browsable API for easy testing and debugging.",
            keyPoints: ["Serializers", "APIViews", "ViewSets", "Authentication & Permissions"],
            example: "class PostSerializer(serializers.ModelSerializer):\n    class Meta: model = Post; fields = '__all__'",
            realTimeExample: "Building an API that allows a mobile app to fetch and display blog posts from your server."
          }
        ]
      },
      {
        id: "database",
        title: "7. Database (MySQL)",
        topics: [
          {
            id: "db-intro",
            title: "Database Intro",
            definition: "1. A database is an organized collection of structured information. 2. Relational databases like MySQL use tables to store data. 3. SQL is the standard language used to manage relational databases. 4. Databases ensure data integrity and provide powerful querying tools. 5. They are essential for any application that needs to store data persistently.",
            keyPoints: ["DBMS vs RDBMS", "SQL vs NoSQL", "MySQL Installation", "Database Workbench"],
            example: "CREATE DATABASE my_app;",
            realTimeExample: "Setting up a database to store all the user information and posts for a new social media platform."
          },
          {
            id: "sql-basics",
            title: "SQL Basics",
            definition: "1. SQL is used to create, retrieve, update, and delete database records. 2. CREATE TABLE defines the structure of a new table. 3. INSERT INTO adds new rows of data to a table. 4. SELECT is used to query and retrieve data from tables. 5. Constraints like NOT NULL and UNIQUE enforce data rules.",
            keyPoints: ["CREATE TABLE", "INSERT INTO", "SELECT", "Data types & Constraints"],
            example: "INSERT INTO users (name, email) VALUES ('John', 'john@example.com');",
            realTimeExample: "Adding a new customer's details to the 'Customers' table after they sign up."
          },
          {
            id: "sql-crud",
            title: "CRUD Operations",
            definition: "1. CRUD stands for Create, Read, Update, and Delete. 2. These are the four basic operations for managing data. 3. UPDATE modifies existing records in a table. 4. DELETE removes records based on a condition. 5. WHERE clause is used to filter records for these operations.",
            keyPoints: ["SELECT with WHERE", "UPDATE statement", "DELETE statement", "Filtering data"],
            example: "UPDATE users SET name = 'Johnny' WHERE id = 1;",
            realTimeExample: "Updating a user's profile picture or deleting an old post."
          },
          {
            id: "sql-joins",
            title: "Joins",
            definition: "1. Joins combine rows from multiple tables based on related columns. 2. INNER JOIN returns records with matching values in both tables. 3. LEFT JOIN returns all records from the left table and matches from the right. 4. RIGHT JOIN returns all records from the right table and matches from the left. 5. Joins are essential for working with normalized relational data.",
            keyPoints: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "Primary & Foreign keys"],
            example: "SELECT orders.id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;",
            realTimeExample: "Fetching a list of all orders along with the name of the customer who placed each order."
          },
          {
            id: "db-normalization",
            title: "Normalization",
            definition: "1. Normalization organizes data to reduce redundancy and improve integrity. 2. It involves splitting large tables into smaller, related ones. 3. 1NF, 2NF, and 3NF are different levels of normalization. 4. It ensures each piece of data is stored in only one place. 5. Normalization makes databases more efficient and easier to maintain.",
            keyPoints: ["1NF, 2NF, 3NF", "Redundancy", "Data Integrity", "Relationship types"],
            example: "Splitting a 'Sales' table into 'Products', 'Customers', and 'Orders' tables.",
            realTimeExample: "Redesigning a messy database where the same customer address is repeated in every order row."
          }
        ]
      }
    ]
  },
  "java-fs": {
    id: "java-fs",
    title: "Java Full Stack",
    description: "Enterprise-level development with Java, Spring Boot, React and MySQL.",
     modules: [
      {
        id: "html",
        title: "1. HTML (Structure of Web Pages)",
        topics: [
          {
            id: "html-basics",
            title: "HTML Basics",
            definition: "1. HTML is the standard Hyper Text markup language for creating the structure of web pages.\n2. It uses a series of elements to tell the browser how to display content.\n3. Every HTML document starts with a doctype declaration for cross-browser compatibility.\n4. It acts as the skeleton of any website, providing the foundation for styling.\n5. HTML elements are represented by tags that label pieces of content like headings and paragraphs.",
            keyPoints: ["What is HTML", "Structure of HTML document", "Tags, Elements, Attributes", "Head, Body, Title", "Comments"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <!-- This is a comment -->\n  <h1>Hello World</h1>\n</body>\n</html>",
            realTimeExample: "Think of HTML as the blueprint of a house, defining where the walls, doors, and windows go before any paint (CSS) is added."
          },

          {
            id: "Feature of HTML",
            title: "Features of HTML",
            definition: "1. HTML is a markup language that defines the structure of web pages.\n2. It is platform-independent and can be used on any device with a web browser.\n3. HTML is easy to learn and use, making it accessible to beginners.\n4. It supports multimedia elements like images, videos, and audio.\n5. HTML documents can be easily shared and published on the web.",
            keyPoints: ["Markup Language", "Platform-Independent", "Easy to Learn", "Multimedia Support", "Web Publishing"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <p>This is a simple paragraph.</p>\n</body>\n</html>",
            realTimeExample: "Think of HTML as the foundation of a building; it provides the basic structure upon which everything else is built."
          },
          {
            id: "Html versions",
            title: "HTML Versions",
            definition: "1. HTML has evolved through several versions, each introducing new features and improvements.\n2. HTML4.01 was a major milestone, introducing better support for multimedia and styling.\n3. XHTML is a stricter version of HTML that follows XML rules.\n4. HTML5 is the latest version, offering enhanced semantic elements and improved support for multimedia content.",
            keyPoints: ["HTML4.01", "XHTML", "HTML5"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <p>This is a simple paragraph.</p>\n</body>\n</html>",
            realTimeExample: "Think of HTML versions as different generations of a language, each building upon the previous one to offer more functionality and better user experience."
          },
          {
            id: "html editors",
            title: "HTML Editors",
            definition: "1. HTML editors are software applications used to create and edit HTML documents.\n2. They provide a user-friendly interface for writing HTML code without needing to remember all the syntax.\n3. Many editors offer features like syntax highlighting, auto-completion, and preview options.\n4. Some editors are specifically designed for web development and include additional tools for managing websites.\n5. Popular HTML editors include Visual Studio Code, Sublime Text, and Atom.",
            keyPoints: ["User-Friendly Interface", "Syntax Highlighting", "Auto-Completion", "Preview Options", "Web Development Tools"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <p>This is a simple paragraph.</p>\n</body>\n</html>",
            realTimeExample: "Think of HTML editors as the tools of a carpenter; they make the process of building a website more efficient and accurate."
          },
          {
            id: "Basic structure of HTML",
            title: "Basic Structure of HTML",
            definition: "1. Every HTML document has a basic structure that includes the DOCTYPE declaration, html, head, and body elements.\n2. The DOCTYPE declaration specifies the version of HTML being used.\n3. The html element is the root element of the HTML document.\n4. The head element contains meta information about the document, such as the title and character encoding.\n5. The body element contains the visible content of the webpage.",
            keyPoints: ["DOCTYPE Declaration", "html Element", "head Element", "body Element"],
            example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <p>This is a simple paragraph.</p>\n</body>\n</html>",
            realTimeExample: "Think of the basic structure as the skeleton of a building; it provides the framework upon which all other elements are built."
          },
          {
            id: "Html elements",
            title: "HTML Elements",
            definition: "1. HTML elements are the building blocks of an HTML document.\n2. They define the structure and content of the webpage.\n3. Elements can be nested within each other to create complex layouts.\n4. Some elements are self-closing, while others require opening and closing tags.\n5. Common HTML elements include headings, paragraphs, links, images, and lists.",
            keyPoints: ["Self-Closing Elements", "Nested Elements", "Opening and Closing Tags"],
            example: "<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n<a href='https://example.com'>This is a link</a>",
            realTimeExample: "Think of HTML elements as the components of a house; they are the fundamental parts that make up the structure."
          },
          {
            id: "opening tags and closing tags ",
            title: "Opening and Closing Tags",
            definition: "1. HTML tags are used to define the structure and content of an HTML document.\n2. Opening tags indicate the start of an element, while closing tags indicate the end.\n3. Some elements are self-closing and do not require a separate closing tag.\n4. Properly nested tags ensure the correct rendering of the webpage.\n5. Misplaced or missing tags can cause layout issues or prevent the page from displaying correctly.",
            keyPoints: ["Opening Tags", "Closing Tags", "Self-Closing Tags", "Nested Tags"],
            example: "<p>This is a paragraph.</p>\n<h1>This is a heading</h1>\n<img src='image.jpg' alt='An image'>",
            realTimeExample: "Think of opening and closing tags as the brackets in a sentence; they define the boundaries of each element."
          },
          {
            id: "html headings",
            title: "HTML Headings",
            definition: "1. HTML headings are used to define the structure and hierarchy of content on a webpage.\n2. There are six levels of headings, from <h1> (the most important) to <h6> (the least important).\n3. Headings should be used in a logical order to create a clear outline of the page.\n4. Search engines use headings to understand the content and structure of a webpage.\n5. Proper use of headings improves accessibility for users with disabilities.",
            keyPoints: ["Heading Hierarchy", "Semantic Meaning", "Accessibility"],
            example: "<h1>Main Title</h1>\n<h2>Section Title</h2>\n<h3>Subsection Title</h3>",
            realTimeExample: "Using heading tags to create a logical structure for a blog post, making it easier for readers and search engines to navigate."
          },
          {
            id: "html-paragraphs",
            title: "HTML Paragraphs",
            definition: "1. HTML paragraphs are used to define blocks of text in an HTML document.\n2. The <p> tag is used to create a paragraph element.\n3. Paragraphs are block-level elements, meaning they start on a new line and take up the full width available.\n4. Proper use of paragraphs helps organize content and improve readability.\n5. Avoid using <br> tags for spacing; instead, use CSS for styling purposes.",
            keyPoints: ["Block-Level Element", "Text Organization", "Readability"],
            example: "<p>This is the first paragraph.</p>\n<p>This is the second paragraph.</p>",
            realTimeExample: "Using paragraph tags to structure the main content of a webpage, ensuring that each idea is clearly separated and easy to read."

          },
          {
            id: "paragraph tags",
            title: "Paragraph Tags",
            definition: "1. The <p> tag is used to define a paragraph in HTML.\n2. Paragraphs are block-level elements, meaning they start on a new line and take up the full width available.\n3. Each paragraph should contain related information and be separated from other paragraphs.\n4. Proper use of paragraph tags helps organize content and improve readability.\n5. Avoid using <br> tags for spacing; instead, use CSS for styling purposes.",
            keyPoints: ["Block-Level Element", "Text Organization", "Readability"],
            example: "<p>This is the first paragraph.</p>\n<p>This is the second paragraph.</p>",
            realTimeExample: "Using paragraph tags to structure the main content of a webpage, ensuring that each idea is clearly separated and easy to read."
          },
          {
            id : "line breaks",
            title: "Line Breaks",
            definition: "1. The <br> tag is used to insert a single line break in an HTML document.\n2. It is an empty tag, meaning it has no closing tag.\n3. Line breaks are useful for creating a new line within a paragraph or other block-level element.\n4. However, excessive use of <br> tags can make the code harder to maintain and less semantic.\n5. It's generally better to use CSS for controlling spacing and layout.",
            keyPoints: ["Empty Tag", "Single Line Break", "Semantic HTML"],
            example: "<p>This is the first line.<br>This is the second line.</p>",
            realTimeExample: "Using line breaks to create a simple poem or address format within a webpage."
          },
          {
            id: "horizontal rule",
            title: "Horizontal Rule",
            definition: "1. The <hr> tag is used to insert a horizontal rule in an HTML document.\n2. It is an empty tag, meaning it has no closing tag.\n3. Horizontal rules are used to separate sections of content visually.\n4. They are block-level elements and typically render as a horizontal line across the page.\n5. Like other semantic elements, <hr> should be used for its intended purpose rather than for styling purposes.",
            keyPoints: ["Empty Tag", "Section Separator", "Semantic HTML"],
            example: "<p>This is the first section.</p>\n<hr>\n<p>This is the second section.</p>",
            realTimeExample: "Using a horizontal rule to separate different sections of a blog post or article."
          },
          {
            id: "html text formatting tags",
            title: "HTML Text Formatting Tags",
            definition: "1. HTML provides several tags for formatting text, including <strong>, <em>, <u>, and <s>.\n2. These tags are semantic and provide meaning to the text they wrap.\n3. <strong> is used to indicate strong importance or urgency.\n4. <em> is used to indicate emphasis or stress.\n5. <u> is used to underline text.\n6. <s> is used to indicate deleted or incorrect text.",
            keyPoints: ["Semantic Tags", "Text Emphasis", "Text Decoration"],
            example: "<p>This is <strong>bold</strong> text.</p>\n<p>This is <em>italic</em> text.</p>\n<p>This is <u>underlined</u> text.</p>\n<p>This is <s>strikethrough</s> text.</p>",
            realTimeExample: "Using semantic text formatting tags to improve the accessibility and SEO of a webpage."
          },
          {
            id: "html attributes",
            title: "HTML Attributes",
            definition: "1. HTML attributes provide additional information about HTML elements.\n2. They are specified within the opening tag of an element.\n3. Attributes consist of a name and a value, separated by an equals sign.\n4. Common attributes include id, class, src, href, and alt.\n5. Attributes help in styling, scripting, and providing metadata about the content.",
            keyPoints: ["Attribute Syntax", "id Attribute", "class Attribute", "src Attribute"],
            example: "<img src=\"image.jpg\" alt=\"Description of image\">\n<a href=\"https://example.com\">Link Text</a>",
            realTimeExample: "Using the id attribute to create anchor links within a webpage."
          },
          {
            id: "html images",
            title: "HTML Images",
            definition: "1. The <img> tag is used to embed images in an HTML page.\n2. It is an empty tag, meaning it has no closing tag.\n3. The src attribute specifies the path to the image file.\n4. The alt attribute provides alternative text for the image, which is displayed if the image cannot be loaded.\n5. Images can be styled using CSS to control their size, position, and appearance.",
            keyPoints: ["Image Tag", "src Attribute", "alt Attribute", "Image Styling"],
            example: "<img src=\"image.jpg\" alt=\"Description of image\">",
            realTimeExample: "Adding a responsive image to a webpage that adjusts its size based on the device screen width."
          },
          {
            id : "html lists",
            title: "HTML Lists",
            definition: "1. HTML provides three types of lists: ordered (ol), unordered (ul), and description (dl).\n2. Ordered lists are used to display items in a numbered sequence.\n3. Unordered lists are used to display items in a bulleted format.\n4. Description lists are used to display terms and their descriptions.\n5. List items (li) are used to define each item within a list.",
            keyPoints: ["Ordered Lists", "Unordered Lists", "Description Lists"],
            example: "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n</ol>\n<ul>\n  <li>First item</li>\n  <li>Second item</li>\n</ul>",
            realTimeExample: "Creating a recipe with an ordered list of steps and an unordered list of ingredients."
          },
          {
            id: "html tables",
            title: "HTML Tables",
            definition: "1. The <table> tag is used to create tables in an HTML page.\n2. Tables are made up of rows (<tr>) and columns (<td> or <th>).\n3. <th> tags are used for header cells, while <td> tags are used for data cells.\n4. Tables can be styled using CSS to control their appearance, spacing, and layout.",
            keyPoints: ["Table Tag", "Row and Column Tags", "Header Cells", "Data Cells"],
            example: "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>",
            realTimeExample: "Displaying a list of products with their details in a tabular format on an e-commerce website."
          },
          {
            id: "html forms",
            title: "HTML Forms",
            definition: "1. The <form> tag is used to create an HTML form for user input.\n2. Forms can contain various input elements like text fields, checkboxes, radio buttons, and submit buttons.\n3. The action attribute specifies where to send the form data when submitted.\n4. The method attribute defines how to send the form data (GET or POST).\n5. Forms are essential for collecting user information and interacting with web servers.",
            keyPoints: ["Form Tag", "Input Elements", "Action Attribute", "Method Attribute"],
            example: "<form action=\"/submit\" method=\"post\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\">\n  <input type=\"submit\" value=\"Submit\">\n</form>",
            realTimeExample: "Creating a contact form on a website that allows users to submit their details and messages."

          },
          {
            id: "html inputs",
            title: "HTML Inputs",
            definition: "1. The <input> tag is used to create interactive elements for user input in HTML forms.\n2. Different types of input fields can be created using the type attribute (e.g., text, email, password, checkbox, radio).\n3. Input fields can have various attributes like name, value, placeholder, and required.\n4. The name attribute is important for identifying the input field when the form is submitted.\n5. Input fields can be styled using CSS to improve their appearance and user experience.",
            keyPoints: ["Input Tag", "Input Types", "Input Attributes", "Form Submission"],
            example: "<input type=\"text\" name=\"username\" placeholder=\"Enter your username\">\n<input type=\"email\" name=\"email\" placeholder=\"Enter your email\">\n<input type=\"password\" name=\"password\" placeholder=\"Enter your password\">",
            realTimeExample: "Creating a login form with text inputs for username and password."
          },
          {
            id: "html semantic elements",
            title: "HTML Semantic Elements",
            definition: "1. Semantic elements provide meaning to the structure of an HTML document.\n2. They help improve accessibility and SEO by clearly indicating the purpose of different sections.\n3. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>.",
            keyPoints: ["Header", "Navigation", "Main Content", "Article", "Section", "Aside", "Footer"],
            example: "<header>\n  <h1>My Website</h1>\n</header>\n<nav>\n  <ul>\n    <li><a href=\"#home\">Home</a></li>\n    <li><a href=\"#about\">About</a></li>\n  </ul>\n</nav>",
            realTimeExample: "Structuring a webpage with a clear header, navigation menu, main content area, and footer."
          },
          {
            id: "html multimedia",
            title: "HTML Multimedia",
            definition: "1. The <img> tag is used to embed images in an HTML page.\n2. The <audio> and <video> tags are used to embed audio and video content respectively.\n3. These elements can have various attributes for controlling their display and behavior.\n4. Accessibility features like alt text for images and captions for videos should be included.\n5. Properly handling multimedia content enhances the user experience and makes the content more engaging.",
            keyPoints: ["Image Embedding", "Audio Embedding", "Video Embedding", "Accessibility"],
            example: "<img src=\"image.jpg\" alt=\"Description of the image\">\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n</audio>\n<video controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video>",
            realTimeExample: "Adding an image gallery with play buttons for audio and video content."

          },
          {
            id: "html iframes",
            title: "HTML Iframes",
            definition: "1. The <iframe> tag is used to embed another HTML page within the current page.\n2. It allows for the integration of external content, such as maps, videos, or other web pages.\n3. The src attribute specifies the URL of the page to embed.\n4. Iframes can have various attributes for controlling their size and behavior.\n5. Security considerations should be taken into account when using iframes, as they can potentially introduce vulnerabilities.",
            keyPoints: ["Embedding External Content", "src Attribute", "Size Control", "Security Considerations"],
            example: "<iframe src=\"https://www.example.com\" width=\"600\" height=\"400\"></iframe>",
            realTimeExample: "Embedding a Google Map or a YouTube video within a webpage."
          
          },
          {
            id: "html entities",
            title: "HTML Entities",
            definition: "1. HTML entities are used to represent characters that have special meaning in HTML.\n2. They are written as &name; or &#number;.\n3. Common entities include &lt; for <, &gt; for >, &amp; for &, &quot; for \", and &apos; for '.\n4. Entities are useful for displaying characters that would otherwise be interpreted as HTML code.\n5. They help ensure proper rendering of text across different browsers and platforms.",
            keyPoints: ["Entity Syntax", "Common Entities", "Special Characters"],
            example: "<p>This is a paragraph with a less than sign: &lt;</p>\n<p>This is a paragraph with an ampersand: &amp;</p>",
            realTimeExample: "Displaying code snippets or special characters in HTML content."
          },
          {
            id: "html comments",
            title: "HTML Comments",
            definition: "1. HTML comments are used to add notes or explanations within the HTML code that are not displayed in the browser.\n2. They are written as <!-- comment -->.\n3. Comments can be used for debugging, documentation, or temporarily disabling code.\n4. They help other developers understand the purpose of specific sections of code.\n5. Comments should be used judiciously to avoid cluttering the code with unnecessary information.",
            keyPoints: ["Comment Syntax", "Usage for Documentation", "Debugging", "Disabling Code"],
            example: "<!-- This is a comment -->\n<p>This is a paragraph.</p>",
            realTimeExample: "Adding a note to explain a complex section of HTML code."
          },
          {
            id: "html blocks and inline elements",
            title: "HTML Blocks and Inline Elements",
            definition: "1. HTML elements can be categorized as either block-level or inline elements.\n2. Block-level elements start on a new line and take up the full width available.\n3. Inline elements do not start on a new line and only take up as much width as necessary.\n4. Understanding the difference is crucial for proper layout and styling of web pages.\n5. Common block-level elements include <div>, <p>, <h1>-<h6>, while common inline elements include <span>, <a>, <strong>, and <em>.",
            keyPoints: ["Block-level Elements", "Inline Elements", "Layout Control"],
            example: "<div>This is a block-level element.</div>\n<span>This is an inline element.</span>",
            realTimeExample: "Creating a navigation menu with block-level links and inline text within each link."
          },
          {
            id: "html div and span",
            title: "HTML div and span",
            definition: "1. The <div> element is a block-level container used to group other HTML elements together.\n2. The <span> element is an inline container used to mark up a part of a text or a part of a document.\n3. Both elements are commonly used for styling and layout purposes.\n4. <div> elements are often used to create sections or divisions within a webpage.\n5. <span> elements are typically used to apply styles or scripts to specific parts of the text.",
            keyPoints: ["div Element", "span Element", "Usage for Grouping", "Layout Control"],
            example: "<div>This is a div element.</div>\n<p>This is a paragraph with a <span>highlighted</span> section.</p>",
            realTimeExample: "Using <div> elements to create distinct sections on a webpage and <span> elements to apply unique styling to specific words or phrases."
          },

          {
            id: "html classes and ids",
            title: "HTML Classes and IDs",
            definition: "1. Classes and IDs are attributes used to identify and target specific HTML elements.\n2. Classes can be applied to multiple elements, allowing for consistent styling across several items.\n3. IDs are unique identifiers for individual elements, ensuring no duplicates within a page.\n4. Both classes and IDs are commonly used in CSS to apply targeted styles.\n5. Using classes and IDs effectively can improve the maintainability and organization of HTML and CSS code.",
            keyPoints: ["Classes", "IDs", "Unique Identification", "Styling Targeting"],
            example: "<div class=\"container\" id=\"main-content\">\n  <p class=\"text\">This is a paragraph with a class.</p>\n</div>",
            realTimeExample: "Applying a specific background color to the main content area using an ID, while using a class to style all paragraphs within that area."
          },
          {
            id: "html meta tags",
            title: "HTML Meta Tags",
            definition: "1. Meta tags are used to provide metadata about an HTML document.\n2. They are placed in the <head> section of the document.\n3. Common meta tags include charset, viewport, description, and keywords.\n4. Meta tags do not display content directly but provide information to browsers and search engines.\n5. Proper use of meta tags can improve SEO and user experience.",
            keyPoints: ["Meta Tags", "Charset", "Viewport", "Description", "Keywords"],
            example: "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"description\" content=\"A brief description of the page\">",
            realTimeExample: "Setting the character encoding and viewport for a responsive webpage."
          },
          {
            id: "html seo basics",
            title: "HTML SEO Basics",
            definition: "1. SEO (Search Engine Optimization) involves techniques to improve a website's visibility in search engine results.\n2. HTML elements play a crucial role in SEO, including title tags, meta descriptions, and heading structures.\n3. Proper use of HTML tags can help search engines understand the content and context of a webpage.\n4. Alt text for images and semantic HTML elements also contribute to better SEO performance.\n5. Implementing these practices can lead to higher rankings and increased organic traffic.",
            keyPoints: ["Title Tags", "Meta Descriptions", "Heading Structure", "Alt Text", "Semantic HTML"],
            example: "<title>My Awesome Website</title>\n<meta name=\"description\" content=\"A brief description of the page\">\n<h1>Main Heading</h1>\n<h2>Subheading</h2>",
            realTimeExample: "Optimizing the title tag and meta description for a blog post to improve its search engine visibility."
          },
          {
            id: "html accessibility",
            title: "HTML Accessibility",
            definition: "1. HTML accessibility involves creating web content that can be used by people with disabilities.\n2. Semantic HTML elements provide meaningful structure and context to assistive technologies.\n3. Proper use of attributes like 'alt' for images and 'label' for form elements enhances accessibility.\n4. Ensuring sufficient color contrast and keyboard navigability is crucial for accessible design.\n5. Implementing these practices ensures that all users, regardless of their abilities, can effectively interact with the website.",
            keyPoints: ["Semantic HTML", "Alt Text", "Form Labels", "Color Contrast", "Keyboard Navigability"],
            example: "<img src=\"image.jpg\" alt=\"A description of the image\">\n<label for=\"email\">Email:</label>\n<input type=\"email\" id=\"email\" name=\"email\">",
            realTimeExample: "Adding descriptive alt text to images and using proper form labels to improve accessibility for screen reader users."
          },
          {
            id: "html best practices",
            title: "HTML Best Practices",
            definition: "1. Using semantic HTML elements improves code readability and maintainability.\n2. Properly structuring content with headings and paragraphs enhances accessibility.\n3. Implementing responsive design ensures the website functions well on various devices.\n4. Optimizing images for the web improves loading times and user experience.\n5. Following these practices leads to more robust, accessible, and user-friendly websites.",
            keyPoints: ["Semantic HTML", "Content Structure", "Responsive Design", "Image Optimization", "User Experience"],
            example: "<header>\n  <h1>My Website</h1>\n</header>\n<main>\n  <p>Welcome to my website!</p>\n</main>",
            realTimeExample: "Using semantic elements like <header>, <main>, and <footer> to improve the structure and accessibility of a webpage."

          },
          {
            id: "html5 mini projects",
            title: "HTML5 Mini Projects",
            definition: "1. Building a simple landing page with modern HTML5 semantic elements.\n2. Creating a responsive navigation menu using HTML5 and CSS3.\n3. Implementing a contact form with proper HTML5 validation.\n4. Developing a multimedia presentation using HTML5 video and audio elements.\n5. Designing a mobile-friendly website with responsive design principles.",
            keyPoints: ["Semantic Elements", "Responsive Design", "Form Validation", "Multimedia Integration", "Mobile-Friendly Layout"],
            example: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Website</title>\n</head>\n<body>\n  <header>\n    <h1>My Website</h1>\n  </header>\n  <main>\n    <p>Welcome to my website!</p>\n  </main>\n</body>\n</html>",
            realTimeExample: "Creating a simple landing page with a header, main content area, and footer using semantic HTML5 elements"
          }
        ]  
      },
{
  id: "css",
  title: "2. CSS (Styling)",
  topics: [
    {
      id: "css-introduction",
      title: "1. Introduction to CSS",
      definition: "1. CSS stands for Cascading Style Sheets.\n2. It is used to style and design HTML elements.\n3. CSS controls colors, spacing, layout, and fonts.\n4. It separates structure from design.\n5. CSS makes websites attractive and responsive.",
      keyPoints: ["What is CSS", "History of CSS", "Advantages of CSS", "CSS Versions", "How CSS Works"],
      example: "body {\n  background-color: lightblue;\n}",
      realTimeExample: "Changing a plain HTML page into a colorful modern website."
    },

    {
      id: "css-syntax",
      title: "2. CSS Syntax",
      definition: "1. CSS syntax defines how styles are written.\n2. A selector targets an HTML element.\n3. Property defines what to style.\n4. Value sets style result.\n5. Declarations are written inside curly braces.",
      keyPoints: ["Selector", "Property", "Value", "Declaration Block", "Comments"],
      example: "p {\n  color: red;\n}",
      realTimeExample: "Changing all paragraph text color in a website."
    },

    {
      id: "css-apply-methods",
      title: "3. Ways to Apply CSS",
      definition: "1. CSS can be added inline, internal, or external.\n2. Inline CSS affects one element.\n3. Internal CSS affects one page.\n4. External CSS affects full project.\n5. External CSS is best for large websites.",
      keyPoints: ["Inline CSS", "Internal CSS", "External CSS"],
      example: "<p style='color:blue;'>Hello</p>",
      realTimeExample: "Using one stylesheet for entire website."
    },

    {
      id: "css-selectors",
      title: "4. CSS Selectors",
      definition: "1. Selectors target elements for styling.\n2. Universal selector styles all elements.\n3. Class targets multiple elements.\n4. ID targets one unique element.\n5. Advanced selectors improve precise styling.",
      keyPoints: ["Universal Selector", "Element Selector", "Class Selector", "ID Selector", "Group Selector", "Descendant Selector", "Child Selector", "Adjacent Sibling Selector", "General Sibling Selector"],
      example: ".card {\n  border: 1px solid black;\n}",
      realTimeExample: "Styling all cards in product section."
    },

    {
      id: "css-colors",
      title: "5. CSS Colors",
      definition: "1. CSS colors style text and backgrounds.\n2. Named colors are simple words.\n3. HEX uses hexadecimal values.\n4. RGB mixes red green blue.\n5. RGBA adds transparency.",
      keyPoints: ["Color Names", "HEX Colors", "RGB Colors", "RGBA Colors", "HSL Colors", "HSLA Colors"],
      example: "h1 {\n  color: #ff0000;\n}",
      realTimeExample: "Applying company brand colors."
    },

    {
      id: "css-backgrounds",
      title: "6. CSS Backgrounds",
      definition: "1. Background styles page surfaces.\n2. Colors create simple backgrounds.\n3. Images create rich visual design.\n4. Position controls placement.\n5. Size controls fit.",
      keyPoints: ["Background Color", "Background Image", "Background Repeat", "Background Position", "Background Size", "Background Attachment", "Background Shorthand"],
      example: "body {\n  background-image: url('bg.jpg');\n}",
      realTimeExample: "Website hero section background image."
    },

    {
      id: "css-borders",
      title: "7. CSS Borders",
      definition: "1. Borders define edges around elements.\n2. Width sets thickness.\n3. Style sets line type.\n4. Radius creates rounded corners.\n5. Borders improve UI clarity.",
      keyPoints: ["Border Width", "Border Style", "Border Color", "Border Radius", "Border Shorthand"],
      example: "div {\n  border: 2px solid blue;\n}",
      realTimeExample: "Card border design."
    },

    {
      id: "css-margin",
      title: "8. CSS Margin",
      definition: "1. Margin creates outside spacing.\n2. Top margin creates upper gap.\n3. Bottom margin creates lower gap.\n4. Auto centers elements.\n5. Shorthand saves code.",
      keyPoints: ["Margin Top", "Margin Right", "Margin Bottom", "Margin Left", "Margin Shorthand", "Auto Margin"],
      example: "div {\n  margin: 20px auto;\n}",
      realTimeExample: "Centering website container."
    },

    {
      id: "css-padding",
      title: "9. CSS Padding",
      definition: "1. Padding creates inner spacing.\n2. Padding improves readability.\n3. Top padding adds upper space.\n4. Horizontal padding widens content.\n5. Shorthand simplifies writing.",
      keyPoints: ["Padding Top", "Padding Right", "Padding Bottom", "Padding Left", "Padding Shorthand"],
      example: "button {\n  padding: 10px 20px;\n}",
      realTimeExample: "Button spacing in forms."
    },

    {
      id: "css-width-height",
      title: "10. CSS Width and Height",
      definition: "1. Width controls horizontal size.\n2. Height controls vertical size.\n3. Max-width limits expansion.\n4. Min-width prevents shrinking.\n5. Responsive layouts depend on width control.",
      keyPoints: ["Width", "Height", "Max Width", "Min Width", "Max Height", "Min Height"],
      example: "div {\n  width: 300px;\n  height: 200px;\n}",
      realTimeExample: "Responsive image containers."
    }
  ]
},


     {
       id: "css",
       title: "2. CSS (Styling)",
       topics: [
    {
      id: "css-introduction",
      title: "1. Introduction to CSS",
      definition: "1. CSS stands for Cascading Style Sheets.\n2. It is used to style and design HTML elements.\n3. CSS controls colors, spacing, layout, and fonts.\n4. It separates structure from design.\n5. CSS makes websites attractive and responsive.",
      keyPoints: ["What is CSS", "History of CSS", "Advantages of CSS", "CSS Versions", "How CSS Works"],
      example: "body {\n  background-color: lightblue;\n}",
      realTimeExample: "Changing a plain HTML page into a colorful modern website."
    },

    {
      id: "css-syntax",
      title: "2. CSS Syntax",
      definition: "1. CSS syntax defines how styles are written.\n2. A selector targets an HTML element.\n3. Property defines what to style.\n4. Value sets style result.\n5. Declarations are written inside curly braces.",
      keyPoints: ["Selector", "Property", "Value", "Declaration Block", "Comments"],
      example: "p {\n  color: red;\n}",
      realTimeExample: "Changing all paragraph text color in a website."
    },

    {
      id: "css-apply-methods",
      title: "3. Ways to Apply CSS",
      definition: "1. CSS can be added inline, internal, or external.\n2. Inline CSS affects one element.\n3. Internal CSS affects one page.\n4. External CSS affects full project.\n5. External CSS is best for large websites.",
      keyPoints: ["Inline CSS", "Internal CSS", "External CSS"],
      example: "<p style='color:blue;'>Hello</p>",
      realTimeExample: "Using one stylesheet for entire website."
    },

    {
      id: "css-selectors",
      title: "4. CSS Selectors",
      definition: "1. Selectors target elements for styling.\n2. Universal selector styles all elements.\n3. Class targets multiple elements.\n4. ID targets one unique element.\n5. Advanced selectors improve precise styling.",
      keyPoints: ["Universal Selector", "Element Selector", "Class Selector", "ID Selector", "Group Selector", "Descendant Selector", "Child Selector", "Adjacent Sibling Selector", "General Sibling Selector"],
      example: ".card {\n  border: 1px solid black;\n}",
      realTimeExample: "Styling all cards in product section."
    },

    {
      id: "css-colors",
      title: "5. CSS Colors",
      definition: "1. CSS colors style text and backgrounds.\n2. Named colors are simple words.\n3. HEX uses hexadecimal values.\n4. RGB mixes red green blue.\n5. RGBA adds transparency.",
      keyPoints: ["Color Names", "HEX Colors", "RGB Colors", "RGBA Colors", "HSL Colors", "HSLA Colors"],
      example: "h1 {\n  color: #ff0000;\n}",
      realTimeExample: "Applying company brand colors."
    },

    {
      id: "css-backgrounds",
      title: "6. CSS Backgrounds",
      definition: "1. Background styles page surfaces.\n2. Colors create simple backgrounds.\n3. Images create rich visual design.\n4. Position controls placement.\n5. Size controls fit.",
      keyPoints: ["Background Color", "Background Image", "Background Repeat", "Background Position", "Background Size", "Background Attachment", "Background Shorthand"],
      example: "body {\n  background-image: url('bg.jpg');\n}",
      realTimeExample: "Website hero section background image."
    },

    {
      id: "css-borders",
      title: "7. CSS Borders",
      definition: "1. Borders define edges around elements.\n2. Width sets thickness.\n3. Style sets line type.\n4. Radius creates rounded corners.\n5. Borders improve UI clarity.",
      keyPoints: ["Border Width", "Border Style", "Border Color", "Border Radius", "Border Shorthand"],
      example: "div {\n  border: 2px solid blue;\n}",
      realTimeExample: "Card border design."
    },

    {
      id: "css-margin",
      title: "8. CSS Margin",
      definition: "1. Margin creates outside spacing.\n2. Top margin creates upper gap.\n3. Bottom margin creates lower gap.\n4. Auto centers elements.\n5. Shorthand saves code.",
      keyPoints: ["Margin Top", "Margin Right", "Margin Bottom", "Margin Left", "Margin Shorthand", "Auto Margin"],
      example: "div {\n  margin: 20px auto;\n}",
      realTimeExample: "Centering website container."
    },

    {
      id: "css-padding",
      title: "9. CSS Padding",
      definition: "1. Padding creates inner spacing.\n2. Padding improves readability.\n3. Top padding adds upper space.\n4. Horizontal padding widens content.\n5. Shorthand simplifies writing.",
      keyPoints: ["Padding Top", "Padding Right", "Padding Bottom", "Padding Left", "Padding Shorthand"],
      example: "button {\n  padding: 10px 20px;\n}",
      realTimeExample: "Button spacing in forms."
    },

    {
      id: "css-width-height",
      title: "10. CSS Width and Height",
      definition: "1. Width controls horizontal size.\n2. Height controls vertical size.\n3. Max-width limits expansion.\n4. Min-width prevents shrinking.\n5. Responsive layouts depend on width control.",
      keyPoints: ["Width", "Height", "Max Width", "Min Width", "Max Height", "Min Height"],
      example: "div {\n  width: 300px;\n  height: 200px;\n}",
      realTimeExample: "Responsive image containers."
    }
  ],
         topics: [
    {
      id: "css-box-model",
      title: "11. CSS Box Model",
      definition: "1. Every HTML element is treated as a rectangular box in CSS.\n2. The box model consists of content, padding, border, and margin.\n3. Content is the actual text or image area.\n4. Padding adds space inside the border.\n5. Margin adds space outside the border.",
      keyPoints: ["Content", "Padding", "Border", "Margin"],
      example: "div {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n}",
      realTimeExample: "Card components in modern websites use box model spacing."
    },

    {
      id: "css-text-styling",
      title: "12. CSS Text Styling",
      definition: "1. CSS text properties control appearance of written content.\n2. Text color changes font color.\n3. Alignment controls text position.\n4. Decoration adds underline or line-through.\n5. Shadow creates visual depth.",
      keyPoints: ["Text Color", "Text Alignment", "Text Decoration", "Text Transform", "Text Indent", "Letter Spacing", "Word Spacing", "Line Height", "Text Shadow"],
      example: "p {\n  text-align: center;\n  text-transform: uppercase;\n}",
      realTimeExample: "Center aligned headings in portfolio websites."
    },

    {
      id: "css-fonts",
      title: "13. CSS Fonts",
      definition: "1. Fonts define typography style.\n2. Font family changes font type.\n3. Font size controls readability.\n4. Weight changes boldness.\n5. Google Fonts provide professional typography.",
      keyPoints: ["Font Family", "Font Size", "Font Weight", "Font Style", "Google Fonts"],
      example: "body {\n  font-family: Arial;\n  font-size: 16px;\n}",
      realTimeExample: "Using Poppins font in modern UI design."
    },

    {
      id: "css-icons",
      title: "14. CSS Icons",
      definition: "1. Icons improve visual communication.\n2. Font Awesome provides scalable icons.\n3. Bootstrap Icons are lightweight.\n4. Icons can be styled like text.\n5. They improve navigation clarity.",
      keyPoints: ["Font Awesome", "Bootstrap Icons"],
      example: "<i class='fa fa-home'></i>",
      realTimeExample: "Home icon in navigation bar."
    },

    {
      id: "css-links",
      title: "15. CSS Links",
      definition: "1. Links have different states in CSS.\n2. Hover changes appearance on mouse over.\n3. Active styles clicked state.\n4. Visited styles opened links.\n5. Proper styling improves UX.",
      keyPoints: ["Link States", "Hover", "Active", "Visited"],
      example: "a:hover {\n  color: red;\n}",
      realTimeExample: "Navigation links changing color when hovered."
    },

    {
      id: "css-lists",
      title: "16. CSS Lists",
      definition: "1. CSS styles ordered and unordered lists.\n2. List style type changes bullets.\n3. Position controls bullet placement.\n4. Images can replace bullets.\n5. Lists improve menu design.",
      keyPoints: ["List Style Type", "List Style Position", "List Style Image"],
      example: "ul {\n  list-style-type: square;\n}",
      realTimeExample: "Sidebar menu bullets."
    },

    {
      id: "css-tables",
      title: "17. CSS Tables",
      definition: "1. CSS improves table appearance.\n2. Border collapse removes double borders.\n3. Width controls size.\n4. Zebra stripes improve readability.\n5. Hover highlights rows.",
      keyPoints: ["Border Collapse", "Table Width", "Table Alignment", "Zebra Stripes", "Hover Effect"],
      example: "table {\n  border-collapse: collapse;\n}",
      realTimeExample: "Student result table styling."
    },

    {
      id: "css-display",
      title: "18. CSS Display Property",
      definition: "1. Display controls how elements appear.\n2. Block takes full width.\n3. Inline stays same line.\n4. Inline-block combines both.\n5. None hides element.",
      keyPoints: ["Block", "Inline", "Inline-block", "None"],
      example: "span {\n  display: block;\n}",
      realTimeExample: "Navigation menu layout."
    },

    {
      id: "css-position",
      title: "19. CSS Position",
      definition: "1. Position controls exact placement.\n2. Static is default.\n3. Relative shifts from original position.\n4. Absolute positions relative to parent.\n5. Fixed stays on screen.",
      keyPoints: ["Static", "Relative", "Absolute", "Fixed", "Sticky", "z-index"],
      example: "div {\n  position: absolute;\n  top: 20px;\n}",
      realTimeExample: "Sticky navbar."
    },

    {
      id: "css-overflow",
      title: "20. CSS Overflow",
      definition: "1. Overflow controls extra content behavior.\n2. Visible shows overflow.\n3. Hidden cuts extra content.\n4. Scroll adds scrollbar.\n5. Auto shows scrollbar only when needed.",
      keyPoints: ["Visible", "Hidden", "Scroll", "Auto"],
      example: "div {\n  overflow: scroll;\n}",
      realTimeExample: "Scrollable content cards."
    },
{
  topics: [
    {
      id: "css-float-clear",
      title: "21. CSS Float and Clear",
      definition: "1. Float moves elements left or right inside a container.\n2. Left float places element to left side.\n3. Right float places element to right side.\n4. Clear stops floating behavior.\n5. Float was widely used before Flexbox.",
      keyPoints: ["Float Left", "Float Right", "Clear Property"],
      example: "img {\n  float: left;\n}",
      realTimeExample: "Wrapping text around an image."
    },

    {
      id: "css-flexbox",
      title: "22. CSS Flexbox",
      definition: "1. Flexbox creates one-dimensional layouts.\n2. Flex container manages child alignment.\n3. justify-content aligns horizontally.\n4. align-items aligns vertically.\n5. Flexbox simplifies responsive layouts.",
      keyPoints: ["Flex Container", "Flex Items", "flex-direction", "justify-content", "align-items", "flex-wrap", "gap", "order"],
      example: ".container {\n  display: flex;\n  justify-content: center;\n}",
      realTimeExample: "Navigation bars and card rows."
    },

    {
      id: "css-grid",
      title: "23. CSS Grid",
      definition: "1. Grid creates two-dimensional layouts.\n2. Rows and columns define structure.\n3. grid-template-columns sets column size.\n4. grid-row controls row span.\n5. Grid is ideal for dashboards.",
      keyPoints: ["Grid Container", "Grid Items", "grid-template-columns", "grid-template-rows", "gap", "grid-column", "grid-row"],
      example: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n}",
      realTimeExample: "Dashboard layout."
    },

    {
      id: "css-units",
      title: "24. CSS Units",
      definition: "1. Units define measurements in CSS.\n2. px gives fixed pixels.\n3. % gives relative size.\n4. rem scales with root font.\n5. vw and vh depend on viewport.",
      keyPoints: ["px", "%", "em", "rem", "vw", "vh"],
      example: "div {\n  width: 50%;\n}",
      realTimeExample: "Responsive containers."
    },

    {
      id: "css-pseudo-classes",
      title: "25. CSS Pseudo Classes",
      definition: "1. Pseudo classes style element states.\n2. Hover changes on mouse over.\n3. Focus highlights active fields.\n4. nth-child targets specific items.\n5. Improves interaction design.",
      keyPoints: ["hover", "focus", "active", "first-child", "last-child", "nth-child"],
      example: "button:hover {\n  background: blue;\n}",
      realTimeExample: "Button hover effects."
    },

    {
      id: "css-pseudo-elements",
      title: "26. CSS Pseudo Elements",
      definition: "1. Pseudo elements style part of an element.\n2. before inserts content before element.\n3. after inserts content after element.\n4. first-letter styles first letter.\n5. first-line styles first line.",
      keyPoints: ["before", "after", "first-letter", "first-line"],
      example: "p::first-letter {\n  font-size: 30px;\n}",
      realTimeExample: "Magazine style article design."
    },

    {
      id: "css-transitions",
      title: "27. CSS Transitions",
      definition: "1. Transitions create smooth property changes.\n2. Duration controls animation speed.\n3. Delay starts later.\n4. Timing controls motion type.\n5. Improves user experience.",
      keyPoints: ["transition-property", "transition-duration", "transition-delay", "transition-timing-function"],
      example: "button {\n  transition: 0.3s;\n}",
      realTimeExample: "Smooth hover animation."
    },

    {
      id: "css-transform",
      title: "28. CSS Transform",
      definition: "1. Transform changes shape or position.\n2. Translate moves element.\n3. Rotate turns element.\n4. Scale enlarges or shrinks.\n5. Skew tilts element.",
      keyPoints: ["translate", "rotate", "scale", "skew"],
      example: "div {\n  transform: rotate(45deg);\n}",
      realTimeExample: "Rotating icons."
    },

    {
      id: "css-animations",
      title: "29. CSS Animations",
      definition: "1. Animations create movement over time.\n2. Keyframes define stages.\n3. Duration controls speed.\n4. Delay postpones start.\n5. Iteration controls repetition.",
      keyPoints: ["@keyframes", "animation-name", "animation-duration", "animation-delay", "animation-iteration-count"],
      example: "@keyframes move {\n from {left:0;} to {left:100px;}\n}",
      realTimeExample: "Loading animation."
    },

    {
      id: "css-shadows",
      title: "30. CSS Shadows",
      definition: "1. Shadows add depth to UI.\n2. Box shadow styles containers.\n3. Text shadow styles text.\n4. Blur creates softness.\n5. Shadows improve modern look.",
      keyPoints: ["Box Shadow", "Text Shadow"],
      example: "div {\n  box-shadow: 2px 2px 10px gray;\n}",
      realTimeExample: "Card designs in dashboards."
    }
  ]
    
  },
    {
      id: "css-variables",
      title: "31. CSS Variables",
      definition: "1. CSS variables store reusable values.\n2. Variables reduce repeated code.\n3. They are created using custom names.\n4. Global variables are usually placed inside :root.\n5. Variables make theme changes easier.",
      keyPoints: ["Creating Variables", "Using Variables", "Global Variables"],
      example: ":root {\n  --main-color: blue;\n}\nh1 {\n  color: var(--main-color);\n}",
      realTimeExample: "Changing full website theme color from one place."
    },

    {
      id: "css-responsive-design",
      title: "32. CSS Responsive Design",
      definition: "1. Responsive design adapts layout for all screen sizes.\n2. Media queries apply styles for different devices.\n3. Breakpoints define width limits.\n4. Mobile-first design starts from small screens.\n5. Responsive design improves user experience.",
      keyPoints: ["Media Queries", "Breakpoints", "Mobile First Design"],
      example: "@media (max-width:768px) {\n  body {\n    font-size:14px;\n  }\n}",
      realTimeExample: "Website automatically adjusting on mobile."
    },

    {
      id: "css-advanced-selectors",
      title: "33. CSS Advanced Selectors",
      definition: "1. Advanced selectors target elements precisely.\n2. Attribute selectors style based on attributes.\n3. not() excludes elements.\n4. nth-of-type targets specific type order.\n5. Useful for complex UI styling.",
      keyPoints: ["Attribute Selectors", "not()", "nth-of-type()"],
      example: "input[type='text'] {\n  border: 1px solid red;\n}",
      realTimeExample: "Styling only text fields in forms."
    },

    {
      id: "css-gradients",
      title: "34. CSS Gradients",
      definition: "1. Gradients create smooth color transitions.\n2. Linear gradient follows direction.\n3. Radial gradient spreads circularly.\n4. Gradients reduce image usage.\n5. They improve modern UI design.",
      keyPoints: ["Linear Gradient", "Radial Gradient"],
      example: "background: linear-gradient(to right, blue, purple);",
      realTimeExample: "Hero banner backgrounds."
    },

    {
      id: "css-object-fit",
      title: "35. CSS Object Fit",
      definition: "1. Object-fit controls image fitting.\n2. Cover fills container fully.\n3. Contain keeps full image visible.\n4. Fill stretches image.\n5. Important for responsive media.",
      keyPoints: ["cover", "contain", "fill"],
      example: "img {\n  object-fit: cover;\n}",
      realTimeExample: "Profile image cards."
    },

    {
      id: "css-cursor",
      title: "36. CSS Cursor",
      definition: "1. Cursor changes mouse pointer appearance.\n2. Pointer indicates clickable item.\n3. Move shows movable item.\n4. Text shows text selection.\n5. not-allowed blocks action.",
      keyPoints: ["pointer", "move", "text", "not-allowed"],
      example: "button {\n  cursor: pointer;\n}",
      realTimeExample: "Buttons showing hand icon."
    },

    {
      id: "css-filter-effects",
      title: "37. CSS Filter Effects",
      definition: "1. Filters apply visual effects.\n2. Blur softens image.\n3. Brightness changes light.\n4. Contrast changes intensity.\n5. Grayscale removes colors.",
      keyPoints: ["blur", "brightness", "contrast", "grayscale"],
      example: "img {\n  filter: grayscale(100%);\n}",
      realTimeExample: "Black and white gallery effects."
    },

    {
      id: "css-clip-path",
      title: "38. CSS Clip Path",
      definition: "1. Clip-path creates custom shapes.\n2. Circle cuts circular shape.\n3. Polygon creates custom points.\n4. Improves creative design.\n5. Used in advanced UI sections.",
      keyPoints: ["circle", "polygon"],
      example: "div {\n  clip-path: circle(50%);\n}",
      realTimeExample: "Creative profile cards."
    },

    {
      id: "css-scroll-behavior",
      title: "39. CSS Scroll Behavior",
      definition: "1. Scroll behavior controls page scrolling.\n2. Smooth scrolling improves navigation.\n3. It helps anchor links.\n4. Improves UX.\n5. Often used in landing pages.",
      keyPoints: ["smooth scrolling"],
      example: "html {\n  scroll-behavior: smooth;\n}",
      realTimeExample: "Click menu and smoothly move section."
    },

    {
      id: "css-best-practices",
      title: "40. CSS Best Practices",
      definition: "1. Clean CSS improves maintainability.\n2. Naming conventions improve readability.\n3. Reusable classes reduce duplication.\n4. Organized files improve teamwork.\n5. Best practices help scalability.",
      keyPoints: ["Clean Code", "Naming Convention", "Reusable Classes", "Organized File Structure"],
      example: ".btn-primary {\n  background: blue;\n}",
      realTimeExample: "Professional company projects."
    },

    {
      id: "css-mini-projects",
      title: "41. CSS Mini Projects",
      definition: "1. Mini projects improve practical skill.\n2. Login forms teach spacing.\n3. Cards teach shadows and layout.\n4. Landing pages teach responsiveness.\n5. Portfolio builds real project confidence.",
      keyPoints: ["Login Form", "Card Design", "Navigation Bar", "Portfolio Section", "Landing Page", "Responsive Website"],
      example: ".card {\n  box-shadow: 2px 2px 10px gray;\n}",
      realTimeExample: "Building a personal portfolio website."
         }
    ]
  },

  {
    id: "javascript",
        title: "3. JavaScript (Logic)",
        topics: [
          {
            id: "js-intro",
            title: "JavaScript Introduction",
            definition: " 1 JavaScript is a versatile programming language primarily used for web development. \n2 It allows developers to create interactive and dynamic web pages by manipulating the Document Object Model (DOM).\n3 JavaScript can run on both the client-side and server-side, making it a powerful tool for full-stack development. \n4 It supports various programming paradigms, including object-oriented, functional, and event-driven programming.",
            keyPoints: ["What is JavaScript", "History of JavaScript", "Client-side vs Server-side", "Programming Paradigms"],
            example: "console.log('Hello, World!');",
            realTimeExample: "Creating a dynamic to-do list where users can add and remove tasks without refreshing the page."
          
          },
          {
            id: "what is js",
            title: "What is JavaScript?",
            definition: "JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive and dynamic web pages. It is a client-side scripting language, meaning it runs in the user's browser rather than on the server.",
            keyPoints: ["Interpreted Language", "Client-Side", "Dynamic Web Pages"],
            example: "console.log('Hello, World!');",
            realTimeExample: "Displaying a welcome message when a user visits a website."
          },
          {
            id: "js-history",
            title: "History of JavaScript",
            definition: "JavaScript was created in 1995 by Brendan Eich while working at Netscape Communications Corporation. It was initially developed in just 10 days and was originally named Mocha, then renamed to LiveScript, and finally to JavaScript. The language has evolved significantly over the years, with major updates like ECMAScript 6 (ES6) introducing new features and syntax improvements.",
            keyPoints: ["Created by Brendan Eich", "Initial Names", "Evolution of JavaScript"],
            example: "console.log('JavaScript was created in 1995');",
            realTimeExample: "Understanding the evolution of JavaScript helps developers appreciate its current capabilities and future potential."
          },
          {
            id: "features of js",
            title: "Features of JavaScript",
            definition: "JavaScript has several key features that make it a powerful language for web development. These include its ability to manipulate the DOM, support for asynchronous programming, and a rich ecosystem of libraries and frameworks.",
            keyPoints: ["DOM Manipulation", "Asynchronous Programming", "Rich Ecosystem"],
            example: "const greeting = 'Hello, World!';\nconsole.log(greeting);",
            realTimeExample: "Creating a dynamic user interface that responds to user interactions in real-time."
          },
          {
            id: "advantages of js",
            title: "Advantages of JavaScript",
            definition: "JavaScript offers numerous advantages for web development, including its versatility, ease of use, and extensive community support. It enables developers to create engaging user experiences and build scalable applications.",
            keyPoints: ["Versatility", "Ease of Use", "Community Support"],
            example: "console.log('JavaScript is versatile!');",
            realTimeExample: "Utilizing JavaScript's flexibility to implement complex interactions and animations on a webpage."
          },
          {
            id: "how js works",
            title: "How JavaScript Works",
            definition: "JavaScript works by being executed in a runtime environment, typically a web browser or Node.js. It is an interpreted language, meaning the code is read and executed line by line. The browser's JavaScript engine compiles the code into machine-readable instructions, which are then executed to produce the desired output.",
            keyPoints: ["Interpreted Language", "Runtime Environment", "Execution Process"],
            example: "console.log('JavaScript works by being interpreted');",
            realTimeExample: "Observing how JavaScript code is executed in the browser's console."
          },
          {
            id: "js setup",
            title: "JavaScript Setup",
            definition: "Setting up a JavaScript development environment involves installing a code editor, a web browser, and optionally a Node.js runtime. This allows developers to write, test, and run JavaScript code locally or in a browser.",
            keyPoints: ["Code Editor", "Web Browser", "Node.js"],
            example: "console.log('JavaScript setup complete!');",
            realTimeExample: "Configuring a local development environment with VS Code and Chrome."
          },
          {
            id: "internal js",
            title: "Internal JavaScript",
            definition: "JavaScript's internal mechanisms include its execution context, scope chain, and memory management. Understanding these concepts is crucial for debugging and optimizing JavaScript applications.",
            keyPoints: ["Execution Context", "Scope Chain", "Memory Management"],
            example: "console.log('Understanding JavaScript internals');",
            realTimeExample: "Analyzing the call stack and scope during function execution."
          },
          {
            id: "external js",
            title: "External JavaScript",
            definition: "External JavaScript refers to JavaScript code that is stored in separate .js files and linked to an HTML document. This approach promotes code organization, reusability, and maintainability by separating the logic from the markup.",
            keyPoints: ["File Organization", "Code Reusability", "Maintainability"],
            example: "<script src=\"script.js\"></script>",
            realTimeExample: "Linking an external JavaScript file to a webpage and observing its impact on the page's functionality."
          },
          {
  id: "variables",
  title: "Variables",
  definition: "1. Variables are used to store data values in JavaScript. 2. A variable name identifies stored data. 3. Variables make programs dynamic. 4. Values can change during execution. 5. Meaningful names improve readability.",
  keyPoints: ["Store Data", "Variable Naming", "Dynamic Values", "Readable Code"],
  example: "let name = 'JavaScript';",
  realTimeExample: "Storing student name entered in a form."
},
{
  id: "var-let-const",
  title: "var, let, const",
  definition: "1. var declares function-scoped variables. 2. let declares block-scoped variables. 3. const declares constants that cannot be reassigned. 4. let and const are modern standards. 5. const is preferred when value should remain fixed.",
  keyPoints: ["Scope", "Mutable", "Constant", "Modern JavaScript"],
  example: "const course = 'JavaScript';",
  realTimeExample: "Using const for fixed website name."
},
{
  id: "data-types",
  title: "Data Types",
  definition: "1. Data types define the type of value stored in a variable. 2. JavaScript supports primitive and non-primitive types. 3. typeof checks data type. 4. Correct type use prevents errors. 5. JavaScript is dynamically typed.",
  keyPoints: ["Type Checking", "Primitive", "Non-Primitive", "Dynamic Typing"],
  example: "typeof 100",
  realTimeExample: "Checking API response type."
},
{
  id: "primitive-data-types",
  title: "Primitive Data Types",
  definition: "1. Primitive data types store single simple values. 2. Types include string, number, boolean, null, undefined, bigint, and symbol. 3. They are immutable. 4. Stored directly in memory. 5. Common in basic programming.",
  keyPoints: ["String", "Number", "Boolean", "Null", "Undefined"],
  example: "let age = 25;",
  realTimeExample: "Storing student age and login status."
},
{
  id: "non-primitive-data-types",
  title: "Non-Primitive Data Types",
  definition: "1. Non-primitive data types store collections of values. 2. Objects and arrays are main examples. 3. They are mutable. 4. Stored by reference. 5. Used for complex data handling.",
  keyPoints: ["Objects", "Arrays", "Reference Type", "Mutable"],
  example: "let student = { name: 'Ravi' };",
  realTimeExample: "Managing course details."
},
{
  id: "arithmetic-operators",
  title: "Arithmetic Operators",
  definition: "1. Arithmetic operators perform mathematical calculations. 2. Common operators are +, -, *, /, %. 3. Increment and decrement are included. 4. Used in calculations and counters. 5. Essential in program logic.",
  keyPoints: ["Addition", "Subtraction", "Multiplication", "Division", "Modulo"],
  example: "let total = 10 + 5;",
  realTimeExample: "Calculating total fee."
},
{
  id: "comparison-operators",
  title: "Comparison Operators",
  definition: "1. Comparison operators compare two values. 2. Result is true or false. 3. Common operators are ==, ===, !=, >, <. 4. Strict equality checks type also. 5. Used in decision making.",
  keyPoints: ["Comparison", "Boolean Result", "Strict Equality", "Conditions"],
  example: "5 === 5",
  realTimeExample: "Checking password match."
},
{
  id: "logical-operators",
  title: "Logical Operators",
  definition: "1. Logical operators combine multiple conditions. 2. && means AND. 3. || means OR. 4. ! means NOT. 5. Useful in complex validations.",
  keyPoints: ["AND", "OR", "NOT", "Condition Logic"],
  example: "age > 18 && city === 'Hyderabad'",
  realTimeExample: "Checking login eligibility."
},
{
  id: "assignment-operators",
  title: "Assignment Operators",
  definition: "1. Assignment operators assign values to variables. 2. = assigns directly. 3. +=, -=, *= simplify updates. 4. Common in loops and counters. 5. Improves concise coding.",
  keyPoints: ["Assign Value", "Update Variable", "Short Syntax", "Programming Logic"],
  example: "count += 1;",
  realTimeExample: "Updating cart quantity."
},
{
  id: "ternary-operator",
  title: "Ternary Operator",
  definition: "1. Ternary operator is shorthand for if else. 2. Syntax uses condition ? true : false. 3. Useful for short decisions. 4. Improves readability. 5. Common in UI logic.",
  keyPoints: ["Short if else", "Condition", "Readable Syntax", "Decision Making"],
  example: "age >= 18 ? 'Adult' : 'Minor'",
  realTimeExample: "Displaying login status."
},
{
  id: "alert-function",
  title: "alert()",
  definition: "1. alert() displays popup messages in browser. 2. It pauses execution until closed. 3. Used for notifications. 4. Helpful in beginner debugging. 5. Browser built-in function.",
  keyPoints: ["Popup", "Notification", "Browser Function", "Pause Execution"],
  example: "alert('Welcome');",
  realTimeExample: "Showing success message after registration."
},

{
  id: "if-else",
  title: "if else",
  definition: "1. if else provides two possible outcomes. 2. if handles true condition. 3. else handles false condition. 4. Common in validations. 5. Basic branching logic.",
  keyPoints: ["True Case", "False Case", "Branching", "Decision"],
  example: "if(mark > 35){ pass } else { fail }",
  realTimeExample: "Checking exam result."
},
{
  id: "else-if",
  title: "else if",
  definition: "1. else if checks multiple conditions. 2. Conditions are checked in order. 3. First true block executes. 4. Useful for grading systems. 5. Supports multiple branches.",
  keyPoints: ["Multiple Conditions", "Ordered Check", "Branching", "Decision"],
  example: "if(mark>90){A}else if(mark>75){B}",
  realTimeExample: "Calculating student grade."
},
{
  id: "switch-statement",
  title: "switch Statement",
  definition: "1. switch checks exact values against multiple cases. 2. case defines each option. 3. break stops execution after match. 4. default handles unmatched values. 5. Cleaner than many else if statements.",
  keyPoints: ["Multiple Cases", "break", "default", "Value Matching"],
  example: "switch(day){ case 1: break; }",
  realTimeExample: "Displaying weekday names."
},
{
  id: "for-loop",
  title: "for Loop",
  definition: "1. for loop repeats code a fixed number of times. 2. It contains initialization, condition, and increment. 3. Useful when loop count is known. 4. Common in arrays and counters. 5. Core iterative structure.",
  keyPoints: ["Initialization", "Condition", "Increment", "Repeated Execution"],
  example: "for(let i=0; i<5; i++){ console.log(i); }",
  realTimeExample: "Displaying numbers from 1 to 10."
},
{
  id: "while-loop",
  title: "while Loop",
  definition: "1. while loop runs while condition remains true. 2. Condition is checked before execution. 3. Used when loop count is unknown. 4. Can become infinite if condition never changes. 5. Suitable for dynamic repetition.",
  keyPoints: ["Condition Based", "Pre-check", "Dynamic Loop", "Repeated Execution"],
  example: "while(i < 5){ i++; }",
  realTimeExample: "Reading values until user stops."
},
{
  id: "do-while-loop",
  title: "do while Loop",
  definition: "1. do while loop executes code at least once. 2. Condition is checked after execution. 3. Useful when first run is mandatory. 4. Similar to while loop with post-check. 5. Common in menu systems.",
  keyPoints: ["Post-check", "Runs Once Minimum", "Condition Based", "Loop"],
  example: "do { i++; } while(i < 5);",
  realTimeExample: "Showing menu until exit selected."
},
{
  id: "break-statement",
  title: "break",
  definition: "1. break stops loop execution immediately. 2. It exits current loop or switch. 3. Used when condition meets stop point. 4. Prevents unnecessary iterations. 5. Improves control flow.",
  keyPoints: ["Stop Loop", "Immediate Exit", "Control Flow", "Loop Management"],
  example: "if(i === 3) break;",
  realTimeExample: "Stopping search when match found."
},
{
  id: "continue-statement",
  title: "continue",
  definition: "1. continue skips current iteration. 2. Loop continues with next iteration. 3. Used to ignore certain values. 4. Helps selective processing. 5. Improves loop control.",
  keyPoints: ["Skip Iteration", "Next Loop", "Selective Logic", "Control Flow"],
  example: "if(i === 3) continue;",
  realTimeExample: "Skipping invalid entries."
},
{
  id: "function-declaration",
  title: "Function Declaration",
  definition: "1. Function declaration defines reusable code block. 2. It uses function keyword. 3. Functions can be called multiple times. 4. Improves code reuse. 5. Basic program structure.",
  keyPoints: ["Reusable Code", "function Keyword", "Code Block", "Reuse"],
  example: "function greet(){ console.log('Hello'); }",
  realTimeExample: "Creating reusable calculator logic."
},
{
  id: "function-expression",
  title: "Function Expression",
  definition: "1. Function expression stores function inside variable. 2. It can be anonymous. 3. Variable name calls function. 4. Useful in callbacks. 5. Flexible function style.",
  keyPoints: ["Variable Function", "Anonymous Function", "Flexible Syntax", "Reusable"],
  example: "const greet = function(){ console.log('Hi'); };",
  realTimeExample: "Assigning actions dynamically."
},
{
  id: "arrow-functions",
  title: "Arrow Functions",
  definition: "1. Arrow functions provide short syntax for functions. 2. They use => symbol. 3. this behavior differs from regular functions. 4. Popular in modern JavaScript. 5. Cleaner syntax for callbacks.",
  keyPoints: ["Short Syntax", "=> Symbol", "Modern JS", "Callback Friendly"],
  example: "const add = (a,b) => a+b;",
  realTimeExample: "Array filtering logic."
},
{
  id: "parameters-and-arguments",
  title: "Parameters and Arguments",
  definition: "1. Parameters receive values in function definition. 2. Arguments are actual values passed during call. 3. Functions become dynamic. 4. Multiple parameters supported. 5. Essential for reusable logic.",
  keyPoints: ["Input Values", "Dynamic Function", "Function Input", "Reusable Logic"],
  example: "function add(a,b){ return a+b; }",
  realTimeExample: "Calculating total marks."
},
{
  id: "return-statement",
  title: "Return Statement",
  definition: "1. return sends value back from function. 2. Function stops after return. 3. Returned value can be stored. 4. Essential in calculations. 5. Improves reusable outputs.",
  keyPoints: ["Output", "Function Result", "Stops Function", "Reusable Value"],
  example: "return a+b;",
  realTimeExample: "Returning API response data."
},
{
  id: "creating-arrays",
  title: "Creating Arrays",
  definition: "1. Arrays store multiple values in one variable. 2. Values are ordered by index. 3. Arrays can store mixed data types. 4. Square brackets are used. 5. Essential for collections.",
  keyPoints: ["Multiple Values", "Indexed Data", "Square Brackets", "Collections"],
  example: "let nums = [1,2,3];",
  realTimeExample: "Storing course names."
},
{
  id: "accessing-array-elements",
  title: "Accessing Array Elements",
  definition: "1. Array elements are accessed using index. 2. Index starts from zero. 3. Specific values can be modified. 4. Arrays support dynamic access. 5. Important in loops.",
  keyPoints: ["Index", "Zero Based", "Element Access", "Modify Values"],
  example: "nums[0]",
  realTimeExample: "Reading first course name."
},
{
  id: "array-methods",
  title: "Array Methods",
  definition: "1. Array methods perform operations on arrays. 2. Common methods include push, pop, shift, unshift. 3. Arrays become flexible with methods. 4. Useful in data manipulation. 5. Essential in modern JavaScript.",
  keyPoints: ["Built-in Methods", "Modify Arrays", "Flexible Data", "Array Operations"],
  example: "arr.push(5)",
  realTimeExample: "Managing student list."
},
{
  id: "push-method",
  title: "push()",
  definition: "1. push adds element at array end. 2. Array length increases. 3. Common in dynamic lists. 4. Original array changes. 5. Useful in adding records.",
  keyPoints: ["Add End", "Array Update", "Dynamic List", "Length Increase"],
  example: "arr.push('React')",
  realTimeExample: "Adding new course."
},
{
  id: "pop-method",
  title: "pop()",
  definition: "1. pop removes last array element. 2. Removed value is returned. 3. Array length decreases. 4. Useful in undo operations. 5. Original array changes.",
  keyPoints: ["Remove End", "Return Value", "Array Update", "Length Decrease"],
  example: "arr.pop()",
  realTimeExample: "Removing last task."
},
{
  id: "shift-method",
  title: "shift()",
  definition: "1. shift removes first array element. 2. Remaining elements shift left. 3. Array length decreases. 4. Removed value returns. 5. Useful in queue logic.",
  keyPoints: ["Remove First", "Shift Left", "Queue Logic", "Array Update"],
  example: "arr.shift()",
  realTimeExample: "Removing first notification."
},
{
  id: "unshift-method",
  title: "unshift()",
  definition: "1. unshift adds element at array beginning. 2. Existing elements shift right. 3. Array length increases. 4. Useful in priority lists. 5. Original array changes.",
  keyPoints: ["Add First", "Shift Right", "Priority List", "Array Update"],
  example: "arr.unshift('HTML')",
  realTimeExample: "Adding urgent task first."
},
{
  id: "string-methods",
  title: "String Methods",
  definition: "1. String methods manipulate text values. 2. Common methods include length, toUpperCase, toLowerCase. 3. Strings are immutable. 4. Useful in text processing. 5. Essential in forms.",
  keyPoints: ["Text Operations", "Immutable", "Built-in Methods", "Formatting"],
  example: "'hello'.toUpperCase()",
  realTimeExample: "Formatting usernames."
},
{
  id: "concatenation",
  title: "Concatenation",
  definition: "1. Concatenation joins strings together. 2. + operator combines text. 3. Variables can be joined. 4. Useful in output building. 5. Common in messages.",
  keyPoints: ["Join Strings", "Plus Operator", "Dynamic Text", "Output Build"],
  example: "'Hello ' + name",
  realTimeExample: "Building welcome message."
},
{
  id: "template-literals",
  title: "Template Literals",
  definition: "1. Template literals use backticks for strings. 2. Variables embed using ${}. 3. Multi-line strings become easy. 4. Modern string formatting method. 5. Cleaner than concatenation.",
  keyPoints: ["Backticks", "Variable Embed", "Modern Syntax", "Readable"],
  example: "`Hello ${name}`",
  realTimeExample: "Dynamic invoice generation."
},
{
  id: "string-search-methods",
  title: "String Search Methods",
  definition: "1. Search methods find text inside strings. 2. includes checks existence. 3. indexOf returns position. 4. search finds pattern. 5. Useful in validation.",
  keyPoints: ["Find Text", "includes", "indexOf", "Search Pattern"],
  example: "'hello'.includes('he')",
  realTimeExample: "Checking keyword in search box."
},
{
  id: "creating-objects",
  title: "Creating Objects",
  definition: "1. Objects store key-value pairs. 2. Curly braces define objects. 3. Related data stays grouped. 4. Core JavaScript structure. 5. Used in APIs heavily.",
  keyPoints: ["Key Value", "Curly Braces", "Grouped Data", "Structured Values"],
  example: "let user = {name:'Ravi'};",
  realTimeExample: "Student record object."
},
{
  id: "object-properties",
  title: "Object Properties",
  definition: "1. Properties are object values accessed by keys. 2. Dot notation is common. 3. Bracket notation also works. 4. Properties can change dynamically. 5. Core object access method.",
  keyPoints: ["Keys", "Dot Notation", "Bracket Access", "Mutable"],
  example: "user.name",
  realTimeExample: "Reading student name."
},
{
  id: "object-methods",
  title: "Object Methods",
  definition: "1. Methods are functions inside objects. 2. They define object behavior. 3. Methods access object data. 4. Common in classes and APIs. 5. Reusable object logic.",
  keyPoints: ["Function in Object", "Behavior", "Reusable Logic", "Object Actions"],
  example: "user.greet = function(){}",
  realTimeExample: "Student greeting method."
},
{
  id: "this-keyword",
  title: "this Keyword",
  definition: "1. this refers to current object context. 2. Inside methods it points to object. 3. Context changes by call style. 4. Important in OOP. 5. Arrow functions handle this differently.",
  keyPoints: ["Current Context", "Object Reference", "Method Access", "OOP"],
  example: "this.name",
  realTimeExample: "Accessing object properties in methods."
},
{
  id: "dom-introduction",
  title: "DOM Introduction",
  definition: "1. DOM means Document Object Model. 2. It represents webpage as objects. 3. JavaScript manipulates DOM dynamically. 4. Enables interactive web pages. 5. Core frontend concept.",
  keyPoints: ["Document Model", "HTML Objects", "Dynamic UI", "Frontend Core"],
  example: "document.body",
  realTimeExample: "Changing webpage content dynamically."
},
{
  id: "selecting-elements",
  title: "Selecting Elements",
  definition: "1. Elements are selected using document methods. 2. getElementById and querySelector are common. 3. Selected elements can be modified. 4. Essential for DOM work. 5. Core frontend skill.",
  keyPoints: ["Element Selection", "querySelector", "DOM Access", "Modify Elements"],
  example: "document.getElementById('demo')",
  realTimeExample: "Selecting button for click action."
},
{
  id: "changing-content",
  title: "Changing Content",
  definition: "1. Content can be changed using innerHTML or textContent. 2. Dynamic text updates become possible. 3. User interactions often trigger content change. 4. Core DOM manipulation. 5. Improves interactivity.",
  keyPoints: ["innerHTML", "textContent", "Dynamic Text", "DOM Update"],
  example: "element.innerHTML='Hello';",
  realTimeExample: "Updating welcome message."
},
{
  id: "changing-styles",
  title: "Changing Styles",
  definition: "1. Styles change through style property. 2. CSS properties use camelCase. 3. Dynamic design becomes possible. 4. Useful in themes and effects. 5. Common in interactive UI.",
  keyPoints: ["Style Property", "camelCase", "Dynamic Design", "UI Effects"],
  example: "element.style.color='red';",
  realTimeExample: "Highlighting selected item."
},
{
  id: "event-handling-dom",
  title: "Event Handling",
  definition: "1. DOM events respond to user actions. 2. addEventListener attaches handlers. 3. Click and input are common events. 4. Core interactive feature. 5. Essential in modern apps.",
  keyPoints: ["User Actions", "addEventListener", "Interactive UI", "DOM Events"],
  example: "btn.addEventListener('click', fn)",
  realTimeExample: "Button click response."
},
{
  id: "click-event",
  title: "Click Event",
  definition: "1. Click event triggers when user clicks element. 2. Common for buttons. 3. Event handlers run logic. 4. Core interactive event. 5. Widely used in UI.",
  keyPoints: ["Button Click", "Event Trigger", "Interactive UI", "User Action"],
  example: "button.onclick=function(){}",
  realTimeExample: "Opening popup."
},
{
  id: "change-event",
  title: "Change Event",
  definition: "1. Change event triggers when input changes. 2. Common in forms. 3. Used for live updates. 4. Input value becomes accessible. 5. Important in validation.",
  keyPoints: ["Input Change", "Form Event", "Live Update", "Validation"],
  example: "input.onchange=function(){}",
  realTimeExample: "Updating search result."
},
{
  id: "submit-event",
  title: "Submit Event",
  definition: "1. Submit event occurs when form submits. 2. preventDefault prevents reload. 3. Used in validations. 4. Core form logic. 5. Essential in data submission.",
  keyPoints: ["Form Submit", "preventDefault", "Validation", "Form Logic"],
  example: "form.onsubmit=function(e){}",
  realTimeExample: "Login form submit."
},
{
  id: "keyboard-events",
  title: "Keyboard Events",
  definition: "1. Keyboard events detect key actions. 2. keydown and keyup are common. 3. Useful in shortcuts. 4. Input validation uses keys. 5. Interactive typing logic.",
  keyPoints: ["keydown", "keyup", "Shortcut", "Typing Events"],
  example: "input.onkeydown=function(){}",
  realTimeExample: "Search on Enter key."
},
{
  id: "mouse-events",
  title: "Mouse Events",
  definition: "1. Mouse events detect pointer movement and actions. 2. mouseover and mouseout are common. 3. Useful in hover effects. 4. Improves UI interaction. 5. Supports animations.",
  keyPoints: ["Hover", "Pointer", "Mouse Actions", "Interactive UI"],
  example: "div.onmouseover=function(){}",
  realTimeExample: "Button hover effect."
},
{
  id: "callback-functions",
  title: "Callback Functions",
  definition: "1. Callback functions are passed into other functions. 2. They run later when needed. 3. Common in async code. 4. Improve flexibility. 5. Essential in event handling.",
  keyPoints: ["Function Argument", "Async Logic", "Flexible Execution", "Reusable"],
  example: "setTimeout(fn,1000)",
  realTimeExample: "Delayed message display."
},
{
  id: "higher-order-functions",
  title: "Higher Order Functions",
  definition: "1. Higher order functions accept or return functions. 2. map and filter are examples. 3. Advanced reusable logic. 4. Common in modern JS. 5. Improves abstraction.",
  keyPoints: ["Function Returns Function", "Accept Function", "Reusable Logic", "Advanced JS"],
  example: "arr.map(fn)",
  realTimeExample: "Transforming data lists."
},
{
  id: "closures",
  title: "Closures",
  definition: "1. Closures allow inner functions to access outer variables. 2. Variables remain preserved after outer function ends. 3. Useful in data privacy. 4. Core advanced concept. 5. Common in callbacks.",
  keyPoints: ["Preserved Scope", "Inner Function", "Private Data", "Advanced Scope"],
  example: "function outer(){ let x=1; return function(){return x;} }",
  realTimeExample: "Private counter logic."
},
{
  id: "recursion",
  title: "Recursion",
  definition: "1. Recursion means function calls itself. 2. Base condition prevents infinite loop. 3. Useful in tree and nested problems. 4. Advanced logic technique. 5. Requires careful design.",
  keyPoints: ["Self Call", "Base Condition", "Advanced Logic", "Nested Problems"],
  example: "function fact(n){ return n*fact(n-1); }",
  realTimeExample: "Factorial calculation."
},
{
  id: "let-and-const",
  title: "let and const",
  definition: "1. let declares block-scoped variables. 2. const declares constants that cannot be reassigned. 3. Both are introduced in ES6. 4. They replace var in modern JavaScript. 5. const is preferred when value should remain fixed.",
  keyPoints: ["Block Scope", "Constant", "Modern JavaScript", "ES6"],
  example: "let age = 25; const pi = 3.14;",
  realTimeExample: "Using const for API URLs and let for counters."
},
{
  id: "arrow-functions-es6",
  title: "Arrow Functions",
  definition: "1. Arrow functions provide shorter syntax for writing functions. 2. They use => symbol. 3. They do not bind their own this keyword. 4. Common in callbacks and array methods. 5. Widely used in modern JavaScript.",
  keyPoints: ["Short Syntax", "=> Symbol", "Modern Functions", "ES6"],
  example: "const add = (a,b) => a+b;",
  realTimeExample: "Using arrow functions in event handlers."
},
{
  id: "template-literals-es6",
  title: "Template Literals",
  definition: "1. Template literals use backticks for strings. 2. Variables are embedded using ${}. 3. Multi-line strings are supported. 4. Cleaner than concatenation. 5. Common in dynamic text generation.",
  keyPoints: ["Backticks", "Variable Embedding", "Readable Strings", "ES6"],
  example: "`Hello ${name}`",
  realTimeExample: "Generating welcome messages dynamically."
},
{
  id: "destructuring",
  title: "Destructuring",
  definition: "1. Destructuring extracts values from arrays or objects. 2. It simplifies variable assignment. 3. Improves readability. 4. Common in API responses. 5. Core ES6 feature.",
  keyPoints: ["Extract Values", "Objects", "Arrays", "Readable Code"],
  example: "const {name} = user;",
  realTimeExample: "Reading API user details directly."
},
{
  id: "spread-operator",
  title: "Spread Operator",
  definition: "1. Spread operator expands arrays or objects. 2. It uses three dots (...). 3. Useful for copying data. 4. Common in updates and merges. 5. Essential in modern JavaScript.",
  keyPoints: ["Expand Data", "Copy Arrays", "Merge Objects", "ES6"],
  example: "const newArr = [...arr];",
  realTimeExample: "Copying form data safely."
},
{
  id: "rest-operator",
  title: "Rest Operator",
  definition: "1. Rest operator collects multiple values into one variable. 2. It also uses three dots (...). 3. Common in function parameters. 4. Helps flexible argument handling. 5. Useful in advanced functions.",
  keyPoints: ["Collect Values", "Flexible Parameters", "Array Packing", "ES6"],
  example: "function sum(...nums) {}",
  realTimeExample: "Accepting multiple marks in one function."
},
{
  id: "settimeout",
  title: "setTimeout()",
  definition: "1. setTimeout runs code after a delay. 2. Delay is given in milliseconds. 3. Executes once only. 4. Common in delayed actions. 5. Browser timer function.",
  keyPoints: ["Delay", "Single Execution", "Timer", "Async"],
  example: "setTimeout(() => console.log('Hi'), 1000);",
  realTimeExample: "Showing message after login."
},
{
  id: "setinterval",
  title: "setInterval()",
  definition: "1. setInterval runs code repeatedly after fixed interval. 2. Interval is given in milliseconds. 3. It continues until cleared. 4. Common in clocks and timers. 5. Browser timer function.",
  keyPoints: ["Repeated Execution", "Timer", "Interval", "Async"],
  example: "setInterval(() => console.log('Run'), 1000);",
  realTimeExample: "Digital clock update."
},
{
  id: "callbacks",
  title: "Callbacks",
  definition: "1. Callback is a function passed into another function. 2. It executes later when needed. 3. Common in async programming. 4. Improves flexibility. 5. Essential in event handling.",
  keyPoints: ["Function Argument", "Async", "Reusable Logic", "Flexible Execution"],
  example: "setTimeout(function(){},1000)",
  realTimeExample: "Delayed notification."
},
{
  id: "promises",
  title: "Promises",
  definition: "1. Promise handles asynchronous operations. 2. It has pending, fulfilled, and rejected states. 3. then handles success. 4. catch handles errors. 5. Modern async code uses promises.",
  keyPoints: ["Async Result", "then", "catch", "Pending State"],
  example: "fetch(url).then(res => res.json())",
  realTimeExample: "Fetching API data."
},
{
  id: "async-await",
  title: "async / await",
  definition: "1. async defines asynchronous function. 2. await pauses until promise resolves. 3. Makes async code readable. 4. Common in API calls. 5. Modern replacement for chained promises.",
  keyPoints: ["Readable Async", "await", "Promise Handling", "Modern JS"],
  example: "const data = await fetch(url);",
  realTimeExample: "Loading student records from API."
},
{
  id: "fetch-api-js",
  title: "Fetch API",
  definition: "1. Fetch API requests data from servers. 2. It returns promises. 3. Common in frontend API integration. 4. JSON responses are common. 5. Standard browser API.",
  keyPoints: ["HTTP Request", "Promises", "JSON Data", "API"],
  example: "fetch('/api/data')",
  realTimeExample: "Loading weather data."
},
{
  id: "json",
  title: "JSON",
  definition: "1. JSON stands for JavaScript Object Notation. 2. It is used for data exchange. 3. JSON is lightweight and readable. 4. APIs usually return JSON. 5. parse and stringify convert JSON.",
  keyPoints: ["Data Exchange", "Readable Format", "API Response", "Objects"],
  example: "JSON.parse(data)",
  realTimeExample: "Reading server response."
},
{
  id: "get-request-js",
  title: "GET Request",
  definition: "1. GET retrieves data from server. 2. It does not modify data. 3. Used in reading APIs. 4. Response often returns JSON. 5. Core web request method.",
  keyPoints: ["Read Data", "HTTP Method", "JSON Response", "API"],
  example: "fetch('/users')",
  realTimeExample: "Loading user list."
},
{
  id: "post-request-js",
  title: "POST Request",
  definition: "1. POST sends new data to server. 2. Used for create operations. 3. Request body carries data. 4. Common in forms. 5. Core HTTP method.",
  keyPoints: ["Send Data", "Create Record", "HTTP Method", "Forms"],
  example: "fetch('/users',{method:'POST'})",
  realTimeExample: "Submitting registration form."
},
{
  id: "error-handling-api",
  title: "Error Handling",
  definition: "1. Error handling manages failed operations. 2. catch captures promise errors. 3. try catch handles async errors. 4. Improves reliability. 5. Essential in production apps.",
  keyPoints: ["catch", "try catch", "Reliable Code", "Safe API"],
  example: "catch(error => console.log(error))",
  realTimeExample: "Showing failed request message."
},
{
  id: "localstorage",
  title: "localStorage",
  definition: "1. localStorage stores data permanently in browser. 2. Data remains after refresh. 3. Values are stored as strings. 4. Useful for tokens and preferences. 5. Browser storage feature.",
  keyPoints: ["Permanent Storage", "Browser Data", "String Values", "Persistence"],
  example: "localStorage.setItem('name','JS');",
  realTimeExample: "Saving login token."
},
{
  id: "sessionstorage",
  title: "sessionStorage",
  definition: "1. sessionStorage stores data for current tab session. 2. Data clears when tab closes. 3. Similar to localStorage. 4. Temporary storage solution. 5. Browser storage feature.",
  keyPoints: ["Temporary Storage", "Tab Session", "Browser Data", "Session"],
  example: "sessionStorage.setItem('user','Admin');",
  realTimeExample: "Temporary login session."
},
{
  id: "storing-data",
  title: "Storing Data",
  definition: "1. Data is stored using setItem method. 2. Keys and values are required. 3. Objects must be stringified. 4. Browser stores as strings. 5. Useful for persistent settings.",
  keyPoints: ["setItem", "Key Value", "Stringify", "Browser Storage"],
  example: "localStorage.setItem('data', JSON.stringify(obj));",
  realTimeExample: "Saving cart data."
},
{
  id: "retrieving-data",
  title: "Retrieving Data",
  definition: "1. Data is retrieved using getItem method. 2. Stored strings can be parsed. 3. Missing keys return null. 4. Common in startup checks. 5. Essential in storage handling.",
  keyPoints: ["getItem", "Parse Data", "Read Storage", "Stored Values"],
  example: "JSON.parse(localStorage.getItem('data'))",
  realTimeExample: "Reading saved user settings."
},
{
  id: "export",
  title: "Export",
  definition: "1. Export makes code available outside file. 2. Named and default export exist. 3. Modules improve code organization. 4. Modern JavaScript uses export often. 5. Supports reusable files.",
  keyPoints: ["Named Export", "Default Export", "Reusable Code", "Modules"],
  example: "export default add;",
  realTimeExample: "Exporting utility functions."
},
{
  id: "import",
  title: "Import",
  definition: "1. Import brings exported code into file. 2. Named imports use braces. 3. Default import uses direct name. 4. Improves modular development. 5. Essential in projects.",
  keyPoints: ["Named Import", "Default Import", "Reusable Code", "Modules"],
  example: "import add from './app.js';",
  realTimeExample: "Using shared utility file."
},
{
  id: "javascript-modules",
  title: "JavaScript Modules",
  definition: "1. Modules split code into separate files. 2. Each file handles specific logic. 3. Export and import connect modules. 4. Improves maintainability. 5. Essential in large projects.",
  keyPoints: ["Separate Files", "Maintainable Code", "Export Import", "Scalable"],
  example: "type='module'",
  realTimeExample: "Separating API and UI logic."
},
{
  id: "try-statement",
  title: "try",
  definition: "1. try contains code that may cause error. 2. If error occurs, catch handles it. 3. Prevents application crash. 4. Common in risky operations. 5. Core error handling.",
  keyPoints: ["Risky Code", "Error Safety", "Protection", "Control Flow"],
  example: "try { code }",
  realTimeExample: "Parsing JSON safely."
},
{
  id: "catch-statement",
  title: "catch",
  definition: "1. catch handles errors from try block. 2. Error object provides details. 3. Prevents abrupt termination. 4. Common in async operations. 5. Essential for safe apps.",
  keyPoints: ["Handle Error", "Error Object", "Safe Execution", "Control Flow"],
  example: "catch(error){ console.log(error) }",
  realTimeExample: "Showing failed login message."
},
{
  id: "finally-statement",
  title: "finally",
  definition: "1. finally runs whether error happens or not. 2. Common for cleanup logic. 3. Runs after try/catch. 4. Ensures final action executes. 5. Useful in resource handling.",
  keyPoints: ["Always Runs", "Cleanup", "Final Step", "Reliable Logic"],
  example: "finally { close(); }",
  realTimeExample: "Stopping loader after request."
},
{
  id: "throw-statement",
  title: "throw",
  definition: "1. throw creates custom errors. 2. It stops normal execution. 3. Error passes to catch block. 4. Useful in validations. 5. Improves error control.",
  keyPoints: ["Custom Error", "Stop Execution", "Validation", "Control"],
  example: "throw new Error('Invalid');",
  realTimeExample: "Rejecting invalid input."
},
{
  id: "calculator-project-js",
  title: "Calculator",
  definition: "1. Calculator project performs arithmetic operations. 2. Buttons trigger events. 3. State or variables store values. 4. Good beginner project. 5. Improves logic building.",
  keyPoints: ["Arithmetic", "Buttons", "Logic", "Beginner Project"],
  example: "num1 + num2",
  realTimeExample: "Digital calculator."
},
{
  id: "todo-app-js",
  title: "Todo App",
  definition: "1. Todo app manages tasks dynamically. 2. Add, delete, and update actions are included. 3. Arrays store tasks. 4. DOM updates display tasks. 5. Popular practice project.",
  keyPoints: ["Tasks", "DOM Update", "Arrays", "CRUD"],
  example: "tasks.push(task)",
  realTimeExample: "Daily planner."
},
{
  id: "weather-app-js",
  title: "Weather App",
  definition: "1. Weather app fetches live weather from API. 2. Fetch API handles requests. 3. JSON data displays results. 4. Dynamic DOM updates show weather. 5. Real API practice project.",
  keyPoints: ["API", "JSON", "Dynamic UI", "Live Data"],
  example: "fetch(weatherUrl)",
  realTimeExample: "City weather search."
},
{
  id: "quiz-app-js",
  title: "Quiz App",
  definition: "1. Quiz app shows questions dynamically. 2. User selects answers. 3. Score updates automatically. 4. Arrays store questions. 5. Great logic project.",
  keyPoints: ["Questions", "Score", "Arrays", "Dynamic UI"],
  example: "score++",
  realTimeExample: "Online exam simulation."
},
{
  id: "form-validation-project",
  title: "Form Validation Project",
  definition: "1. Form validation project checks input correctness. 2. Required fields are verified. 3. Errors show messages. 4. Prevents invalid submission. 5. Essential frontend project.",
  keyPoints: ["Validation", "Error Messages", "Input Check", "Forms"],
  example: "if(email===''){ error }",
  realTimeExample: "Registration form validation."
}
          
        ]
      },
      {
        id: "React intro",
        title: "Introduction to React",
        topics: [
          {
            id: "react-basics",
            title: "React Basics",
            definition: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently.",
            keyPoints: ["Components", "Props", "State", "Virtual DOM"],
            example: "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, React!</h1>;\n}",
            realTimeExample: "Building a dynamic dashboard that updates in real-time based on user interactions."
          },
          {
            id: "why react",
            title: "Why React?",
            definition: "React is a popular JavaScript library for building user interfaces due to its component-based architecture, efficient virtual DOM, and unidirectional data flow. These features make it easier to manage complex applications and improve performance.",
            keyPoints: ["Component-Based Architecture", "Efficient Virtual DOM", "Unidirectional Data Flow", "Large Community"],
            example: "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, React!</h1>;\n}",
            realTimeExample: "Building a scalable web application with a focus on performance and maintainability."
          },
          {
            id: "features of react",
            title: "Features of React",
            definition: "React offers several key features that make it a powerful tool for building user interfaces, including its component-based architecture, efficient virtual DOM, and unidirectional data flow.",
            keyPoints: ["Component-Based Architecture", "Efficient Virtual DOM", "Unidirectional Data Flow", "Large Community"],
            example: "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, React!</h1>;\n}",
            realTimeExample: "Building a scalable web application with a focus on performance and maintainability."
          },
          {
            id: "react vs js",
            title: "React vs. JavaScript",
            definition: "While JavaScript is a general-purpose programming language, React is a library built on top of JavaScript specifically for building user interfaces. React simplifies the process of creating dynamic UIs by providing a component-based approach and managing the virtual DOM.",
            keyPoints: ["React is a Library", "JavaScript is a Language", "Component-Based Approach", "Virtual DOM"],
            example: "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, React!</h1>;\n}",
            realTimeExample: "Building a responsive web application that provides a smooth user experience."
          },
          {
            id: "installing node js",
            title: "Installing Node.js",
            definition: "1. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 2. It allows developers to run JavaScript on the server-side. 3. Installation involves downloading the installer from nodejs.org for your OS. 4. Setting the PATH variable ensures you can run Node.js from any terminal window. 5. npm (Node Package Manager) is used to manage dependencies and packages.",
            keyPoints: ["What is Node.js", "Installation", "Setting PATH", "Using npm"],
            example: "# Check version\nnode --version",
            realTimeExample: "Setting up a development environment for a new web application."
          },
          {
            id: "installing npm",
            title: "Installing npm",
            definition: "1. npm (Node Package Manager) is the default package manager for Node.js. 2. It is used to manage dependencies and packages for JavaScript projects. 3. npm comes bundled with Node.js installation. 4. You can check the npm version by running 'npm --version'. 5. npm allows you to install, update, and remove packages from your project.",
            keyPoints: ["What is npm", "npm Installation", "Checking npm Version", "Managing Packages"],
            example: "# Check version\nnpm --version",
            realTimeExample: "Managing dependencies for a new web application."
          },
          {
             id: "introduction-to-jsx",
             title: "Introduction to JSX",
             definition: "1. JSX stands for JavaScript XML. 2. It allows writing HTML-like syntax inside JavaScript. 3. JSX is used in React to describe user interface structure. 4. It makes code easier to read and write. 5. JSX is converted into JavaScript using Babel.",
             keyPoints: ["JavaScript XML", "HTML-like Syntax", "Used in React", "Babel Conversion"],
             example: "const element = <h1>Hello React</h1>;",
             realTimeExample: "Creating webpage headings and UI blocks inside React components."
           },
{
  id: "jsx-syntax",
  title: "JSX Syntax",
  definition: "1. JSX syntax looks similar to HTML. 2. Every JSX element must have one parent element. 3. Tags must be properly closed. 4. Attributes use camelCase naming. 5. JSX improves code readability.",
  keyPoints: ["HTML Structure", "Parent Element", "Closing Tags", "camelCase Attributes"],
  example: "return (\n  <div>\n    <h1>Welcome</h1>\n  </div>\n);",
  realTimeExample: "Building structured layouts inside React applications."
},
{
  id: "expressions-in-jsx",
  title: "Expressions in JSX",
  definition: "1. JavaScript expressions can be written inside JSX using curly braces. 2. Variables can be displayed dynamically. 3. Arithmetic operations are supported. 4. Function calls can be used inside JSX. 5. Expressions make UI dynamic.",
  keyPoints: ["Curly Braces", "Variables", "Arithmetic", "Dynamic Output"],
  example: "const name = 'Student'; <h1>{name}</h1>;",
  realTimeExample: "Displaying logged-in user name dynamically."
},
{
  id: "embedding-javascript",
  title: "Embedding JavaScript",
  definition: "1. JavaScript code can be embedded inside JSX using curly braces. 2. Conditions can be applied inside JSX. 3. Calculations can be shown directly. 4. Functions can return values inside JSX. 5. Dynamic rendering becomes possible.",
  keyPoints: ["Curly Braces", "Conditions", "Calculations", "Function Output"],
  example: "<h2>{5 + 10}</h2>",
  realTimeExample: "Showing calculated total price in shopping cart."
},
{
  id: "jsx-rules",
  title: "JSX Rules",
  definition: "1. JSX must return a single parent element. 2. All tags must be closed properly. 3. class attribute becomes className. 4. JavaScript keywords should not conflict with JSX attributes. 5. Expressions must be inside curly braces.",
  keyPoints: ["Single Parent", "Closed Tags", "className", "Curly Braces"],
  example: "<div className='box'>Content</div>",
  realTimeExample: "Writing valid component UI without syntax errors."
},
{
  id: "rendering-jsx",
  title: "Rendering JSX",
  definition: "1. JSX is rendered inside React components. 2. React converts JSX into JavaScript objects. 3. Rendered output appears in browser DOM. 4. Components return JSX for display. 5. Rendering updates UI dynamically.",
  keyPoints: ["Component Output", "Browser Display", "Dynamic Rendering", "DOM Update"],
  example: "root.render(<App />);",
  realTimeExample: "Displaying complete React application in browser."
},
{
  id: "introduction-to-props",
  title: "Introduction to Props",
  definition: "1. Props stands for properties. 2. Props are used to pass data from parent component to child component. 3. Props make components reusable. 4. Props are read-only and cannot be modified by child components. 5. Props help in dynamic rendering of UI.",
  keyPoints: ["Properties", "Parent to Child Data", "Reusable Components", "Read Only"],
  example: "function Welcome(props) {\n  return <h1>{props.name}</h1>;\n}",
  realTimeExample: "Passing student name to a profile card component."
},
{
  id: "passing-props",
  title: "Passing Props",
  definition: "1. Props are passed as attributes to components. 2. Parent component sends values to child component. 3. Multiple values can be passed at once. 4. Props can contain strings, numbers, arrays, or objects. 5. Props improve flexibility of components.",
  keyPoints: ["Attributes", "Value Passing", "Flexible Data", "Parent Component"],
  example: "<Welcome name='Dhanunjaya' />",
  realTimeExample: "Passing course title and price into a course card."
},
{
  id: "multiple-props",
  title: "Multiple Props",
  definition: "1. Multiple props allow sending several values together. 2. Each prop is written separately as an attribute. 3. Components can access all props through props object. 4. It supports dynamic component customization. 5. It reduces repetitive code.",
  keyPoints: ["Multiple Values", "Attributes", "Props Object", "Customization"],
  example: "<Student name='Ravi' age={21} course='React' />",
  realTimeExample: "Displaying student details using one reusable component."
},
{
  id: "props-destructuring",
  title: "Props Destructuring",
  definition: "1. Props destructuring extracts values directly from props object. 2. It improves readability. 3. Less repetitive code is written. 4. Destructuring is commonly used in functional components. 5. It makes code cleaner.",
  keyPoints: ["Cleaner Code", "Direct Access", "Readable Syntax", "Functional Components"],
  example: "function Welcome({ name }) {\n  return <h1>{name}</h1>;\n}",
  realTimeExample: "Accessing course title directly inside reusable card."
},
{
  id: "default-props",
  title: "Default Props",
  definition: "1. Default props provide fallback values when no prop is passed. 2. They prevent undefined values. 3. Components become safer to use. 4. Default values improve reliability. 5. Commonly used in reusable UI elements.",
  keyPoints: ["Fallback Values", "Avoid Undefined", "Reusable Safety", "Reliable Components"],
  example: "Welcome.defaultProps = { name: 'Guest' };",
  realTimeExample: "Showing default user name when no name is provided."
},
{
  id: "children-props",
  title: "Children Props",
  definition: "1. Children props represent content placed between component tags. 2. It allows nested content inside components. 3. React automatically passes children as a prop. 4. Useful for wrappers and layouts. 5. It increases component flexibility.",
  keyPoints: ["Nested Content", "Wrapper Components", "Automatic Prop", "Flexible Layouts"],
  example: "<Card><h2>React Course</h2></Card>",
  realTimeExample: "Creating reusable card layout for multiple content blocks."
},
{
  id: "introduction-to-state",
  title: "Introduction to State",
  definition: "1. State is used to store dynamic data inside a component. 2. State allows components to update when data changes. 3. State is managed internally by the component. 4. State makes UI interactive. 5. State changes automatically re-render the component.",
  keyPoints: ["Dynamic Data", "Component Internal Data", "UI Updates", "Re-rendering"],
  example: "const [count, setCount] = useState(0);",
  realTimeExample: "Displaying changing counter values in a dashboard."
},
{
  id: "usestate-hook",
  title: "useState Hook",
  definition: "1. useState is a React Hook used to create state in functional components. 2. It returns current state value and update function. 3. State updates trigger re-rendering. 4. It is commonly used for form inputs and counters. 5. Multiple useState hooks can be used in one component.",
  keyPoints: ["Hook", "State Management", "Re-render", "Functional Components"],
  example: "const [name, setName] = useState('React');",
  realTimeExample: "Managing input field values in registration forms."
},
{
  id: "updating-state",
  title: "Updating State",
  definition: "1. State is updated using the setter function returned by useState. 2. Direct state modification is not allowed. 3. Updating state causes UI refresh. 4. New values replace old values. 5. Functional updates can also be used.",
  keyPoints: ["Setter Function", "No Direct Change", "UI Refresh", "New Value"],
  example: "setCount(count + 1);",
  realTimeExample: "Increasing product quantity in shopping cart."
},
{
  id: "state-with-objects",
  title: "State with Objects",
  definition: "1. State can store objects for grouped data. 2. Object properties must be updated carefully using spread operator. 3. Partial updates should preserve existing data. 4. Objects help manage related fields together. 5. Common in forms.",
  keyPoints: ["Object State", "Spread Operator", "Grouped Data", "Form Handling"],
  example: "setUser({ ...user, name: 'John' });",
  realTimeExample: "Updating student profile details."
},
{
  id: "state-with-arrays",
  title: "State with Arrays",
  definition: "1. State can store arrays for list data. 2. Arrays should be updated immutably. 3. Spread operator helps add new items. 4. Filtering removes items safely. 5. Arrays are common in list rendering.",
  keyPoints: ["Array State", "Immutable Update", "Spread Operator", "List Management"],
  example: "setItems([...items, 'React']);",
  realTimeExample: "Adding new courses into course list."
},
{
  id: "multiple-state-variables",
  title: "Multiple State Variables",
  definition: "1. A component can use multiple state variables. 2. Each state handles separate data. 3. It improves code organization. 4. Different setters update different values. 5. Useful in complex forms and dashboards.",
  keyPoints: ["Separate States", "Multiple Hooks", "Organized Data", "Independent Updates"],
  example: "const [name, setName] = useState(''); const [age, setAge] = useState(0);",
  realTimeExample: "Managing name, email, and password fields separately."
},
{
  id: "click-events",
  title: "Click Events",
  definition: "1. Click events are triggered when a user clicks an element. 2. React uses onClick attribute for click handling. 3. Event handlers are functions. 4. Click events are commonly used for buttons. 5. They make UI interactive.",
  keyPoints: ["onClick", "Button Action", "Function Handler", "User Interaction"],
  example: "<button onClick={handleClick}>Click Me</button>",
  realTimeExample: "Opening course details when user clicks a card."
},
{
  id: "change-events",
  title: "Change Events",
  definition: "1. Change events occur when input values change. 2. React uses onChange for handling input updates. 3. It is commonly used in forms. 4. Input values are usually connected to state. 5. It supports controlled components.",
  keyPoints: ["onChange", "Input Handling", "State Update", "Forms"],
  example: "<input onChange={handleChange} />",
  realTimeExample: "Typing student name in registration form."
},
{
  id: "submit-events",
  title: "Submit Events",
  definition: "1. Submit events occur when forms are submitted. 2. React uses onSubmit for form handling. 3. preventDefault() stops page reload. 4. Form data can be processed after submit. 5. It is essential for form validation.",
  keyPoints: ["onSubmit", "Forms", "preventDefault", "Data Processing"],
  example: "<form onSubmit={handleSubmit}></form>",
  realTimeExample: "Submitting login form."
},
{
  id: "keyboard-events",
  title: "Keyboard Events",
  definition: "1. Keyboard events detect key presses. 2. Common events include onKeyDown and onKeyUp. 3. Specific keys can trigger actions. 4. Useful in shortcuts and validation. 5. Improves user interaction.",
  keyPoints: ["onKeyDown", "onKeyUp", "Key Detection", "Shortcuts"],
  example: "<input onKeyDown={handleKey} />",
  realTimeExample: "Submitting search when Enter key is pressed."
},
{
  id: "mouse-events",
  title: "Mouse Events",
  definition: "1. Mouse events detect pointer actions. 2. Common events include onMouseEnter and onMouseLeave. 3. Useful for hover effects. 4. Mouse tracking improves UI experience. 5. Supports interactive designs.",
  keyPoints: ["Hover", "Pointer Actions", "Mouse Enter", "Mouse Leave"],
  example: "<div onMouseEnter={hover}></div>",
  realTimeExample: "Showing button animation on hover."
},
{
  id: "passing-parameters-in-events",
  title: "Passing Parameters in Events",
  definition: "1. Parameters can be passed to event handlers using arrow functions. 2. This allows dynamic values in events. 3. Event object can also be passed. 4. Common in list actions. 5. Improves flexible event handling.",
  keyPoints: ["Arrow Function", "Dynamic Values", "Event Object", "Reusable Events"],
  example: "<button onClick={() => deleteItem(id)}>Delete</button>",
  realTimeExample: "Deleting selected student record."
},
{
  id: "if-condition",
  title: "if Condition",
  definition: "1. if statements can control UI rendering. 2. Conditions decide what content appears. 3. It supports multiple branches. 4. Used inside functions before return. 5. Helps create dynamic interfaces.",
  keyPoints: ["Condition", "Dynamic UI", "Branching", "Logic"],
  example: "if(isLogin){ return <Home />; }",
  realTimeExample: "Showing dashboard only for logged-in users."
},
{
  id: "ternary-operator",
  title: "Ternary Operator",
  definition: "1. Ternary operator provides short conditional rendering. 2. It uses condition ? true : false format. 3. Commonly used inside JSX. 4. It improves readability for small conditions. 5. Useful for quick UI changes.",
  keyPoints: ["Short Condition", "JSX Friendly", "Dynamic Display", "Readable Syntax"],
  example: "{isLogin ? <Home /> : <Login />}",
  realTimeExample: "Displaying login or logout button."
},
{
  id: "logical-and-operator",
  title: "Logical && Operator",
  definition: "1. Logical && renders content only when condition is true. 2. It is useful for short single-condition rendering. 3. False conditions render nothing. 4. Common in alerts and notifications. 5. Simplifies conditional UI.",
  keyPoints: ["True Condition", "Short Syntax", "Conditional Display", "JSX"],
  example: "{isAdmin && <AdminPanel />}",
  realTimeExample: "Showing admin section only for admins."
},
{
  id: "dynamic-conditional-ui",
  title: "Dynamic Conditional UI",
  definition: "1. UI changes dynamically based on state or props. 2. Conditions can control visibility. 3. Dynamic rendering improves user experience. 4. It supports personalized content. 5. It is core to interactive React apps.",
  keyPoints: ["Dynamic UI", "State Based", "Visibility Control", "Interactive"],
  example: "{show ? <Profile /> : null}",
  realTimeExample: "Showing popup only when button is clicked."
},
{
  id: "rendering-lists",
  title: "Rendering Lists",
  definition: "1. Lists display multiple items dynamically. 2. Arrays are commonly used. 3. React renders each item as JSX. 4. Lists improve scalability. 5. Common in tables and cards.",
  keyPoints: ["Array Rendering", "Dynamic Items", "Scalable UI", "JSX Lists"],
  example: "{items.map(item => <li>{item}</li>)}",
  realTimeExample: "Displaying course names dynamically."
},
{
  id: "map-method",
  title: "map() Method",
  definition: "1. map() creates new arrays by processing existing data. 2. React uses map() to render lists. 3. Each item becomes JSX output. 4. It simplifies repetitive rendering. 5. Essential for dynamic UI generation.",
  keyPoints: ["Array Method", "Dynamic Rendering", "Looping", "JSX Output"],
  example: "items.map(item => <p>{item}</p>)",
  realTimeExample: "Generating student cards from database data."
},
{
  id: "keys-in-react",
  title: "Keys in React",
  definition: "1. Keys uniquely identify list items. 2. React uses keys for efficient updates. 3. Keys must be unique. 4. Stable keys improve performance. 5. Usually IDs are used as keys.",
  keyPoints: ["Unique Identifier", "Performance", "Efficient Update", "List Management"],
  example: "{items.map(item => <li key={item.id}>{item.name}</li>)}",
  realTimeExample: "Rendering student list using database ID."
},
{
  id: "dynamic-list-rendering",
  title: "Dynamic List Rendering",
  definition: "1. Dynamic list rendering shows data based on state or API results. 2. Lists update automatically when data changes. 3. It supports filtering and sorting. 4. Dynamic rendering improves flexibility. 5. Used in dashboards and tables.",
  keyPoints: ["State Based Lists", "API Data", "Dynamic Updates", "Flexible UI"],
  example: "{courses.map(course => <Card key={course.id} />)}",
  realTimeExample: "Displaying fetched course data in dashboard."
},
{
  id: "controlled-components",
  title: "Controlled Components",
  definition: "1. Controlled components are form elements controlled by React state. 2. Input values are managed using state variables. 3. Changes are handled using onChange events. 4. Controlled components provide full control over form data. 5. They improve form validation and data handling.",
  keyPoints: ["State Controlled", "Input Handling", "onChange", "Form Management"],
  example: "const [name, setName] = useState('');",
  realTimeExample: "Managing registration form fields dynamically."
},
{
  id: "input-fields",
  title: "Input Fields",
  definition: "1. Input fields collect user data. 2. React connects input fields to state. 3. Different input types are supported. 4. Values update dynamically. 5. Input handling is essential in forms.",
  keyPoints: ["Text Input", "State Binding", "Dynamic Value", "User Data"],
  example: "<input value={name} onChange={handleChange} />",
  realTimeExample: "Entering student name in login form."
},
{
  id: "textarea",
  title: "Textarea",
  definition: "1. Textarea is used for multiline input. 2. React manages textarea using state. 3. Value is controlled through onChange. 4. It supports long text input. 5. Commonly used for feedback forms.",
  keyPoints: ["Multiline Input", "State Control", "Long Text", "Forms"],
  example: "<textarea value={message} onChange={handleChange}></textarea>",
  realTimeExample: "Writing course feedback comments."
},
{
  id: "select-dropdown",
  title: "Select Dropdown",
  definition: "1. Select dropdown allows choosing one option from many. 2. React controls selected value using state. 3. Options are defined inside select tag. 4. Dynamic options can be generated. 5. Useful in forms and filters.",
  keyPoints: ["Dropdown", "Option Selection", "State Controlled", "Dynamic Options"],
  example: "<select value={course} onChange={handleChange}></select>",
  realTimeExample: "Selecting course category."
},
{
  id: "checkbox",
  title: "Checkbox",
  definition: "1. Checkbox allows selecting true or false values. 2. Checked state is controlled in React. 3. Multiple checkboxes can be grouped. 4. Useful for agreements and preferences. 5. State updates based on checked status.",
  keyPoints: ["Boolean Value", "Checked State", "Multiple Selection", "User Preference"],
  example: "<input type='checkbox' checked={agree} onChange={handleChange} />",
  realTimeExample: "Accepting terms and conditions."
},
{
  id: "radio-button",
  title: "Radio Button",
  definition: "1. Radio buttons allow selecting one option from multiple choices. 2. Same name groups radio buttons. 3. State stores selected value. 4. Commonly used in forms. 5. Improves option clarity.",
  keyPoints: ["Single Selection", "Grouped Choice", "State Controlled", "Form Input"],
  example: "<input type='radio' value='Male' />",
  realTimeExample: "Selecting gender in registration form."
},
{
  id: "form-submission",
  title: "Form Submission",
  definition: "1. Form submission sends entered data for processing. 2. React uses onSubmit event. 3. preventDefault() prevents page reload. 4. Validation happens before submission. 5. Data can be sent to APIs.",
  keyPoints: ["onSubmit", "preventDefault", "Data Handling", "Validation"],
  example: "<form onSubmit={handleSubmit}></form>",
  realTimeExample: "Submitting login details."
},
{
  id: "form-validation",
  title: "Form Validation",
  definition: "1. Form validation checks input correctness. 2. Required fields must be validated. 3. Invalid inputs show messages. 4. Validation improves data quality. 5. Both manual and library validation can be used.",
  keyPoints: ["Required Fields", "Error Message", "Input Check", "Reliable Data"],
  example: "if(name===''){ alert('Required'); }",
  realTimeExample: "Checking email before registration."
},
{
  id: "usestate-hook",
  title: "useState",
  definition: "1. useState creates state in functional components. 2. It returns value and setter function. 3. State changes trigger UI updates. 4. Multiple states can exist. 5. It is core React Hook.",
  keyPoints: ["State", "Hook", "Setter Function", "Dynamic UI"],
  example: "const [count, setCount] = useState(0);",
  realTimeExample: "Counter application."
},
{
  id: "useeffect-hook",
  title: "useEffect",
  definition: "1. useEffect handles side effects in components. 2. It runs after render. 3. API calls often use useEffect. 4. Dependency array controls execution. 5. Cleanup functions can be added.",
  keyPoints: ["Side Effects", "Lifecycle", "Dependency Array", "API"],
  example: "useEffect(()=>{ console.log('Loaded'); },[]);",
  realTimeExample: "Fetching student records when page loads."
},
{
  id: "useref-hook",
  title: "useRef",
  definition: "1. useRef stores mutable values without re-rendering. 2. It accesses DOM elements directly. 3. It persists values across renders. 4. Useful for focus handling. 5. Often used in forms.",
  keyPoints: ["DOM Access", "Persistent Value", "No Re-render", "Focus Control"],
  example: "const inputRef = useRef();",
  realTimeExample: "Auto focus input field."
},
{
  id: "usememo-hook",
  title: "useMemo",
  definition: "1. useMemo memoizes expensive calculations. 2. It improves performance. 3. Recalculation happens only when dependencies change. 4. Prevents unnecessary computation. 5. Useful in large applications.",
  keyPoints: ["Performance", "Memoization", "Dependency Based", "Optimization"],
  example: "const result = useMemo(()=>compute(), [value]);",
  realTimeExample: "Optimizing filtered course list."
},
{
  id: "usecallback-hook",
  title: "useCallback",
  definition: "1. useCallback memoizes functions. 2. It prevents unnecessary function recreation. 3. Useful when passing functions to child components. 4. Improves rendering performance. 5. Works with dependency array.",
  keyPoints: ["Memoized Function", "Performance", "Child Components", "Dependency"],
  example: "const fn = useCallback(()=>{}, []);",
  realTimeExample: "Optimizing button event handlers."
},
{
  id: "usecontext-hook",
  title: "useContext",
  definition: "1. useContext accesses shared data across components. 2. It avoids prop drilling. 3. Context provider supplies values. 4. Useful for themes and authentication. 5. Simplifies global state access.",
  keyPoints: ["Shared Data", "Global Access", "No Prop Drilling", "Context"],
  example: "const user = useContext(UserContext);",
  realTimeExample: "Accessing logged-in user globally."
},
{
  id: "custom-hooks",
  title: "Custom Hooks",
  definition: "1. Custom hooks are reusable functions using hooks internally. 2. They simplify repeated logic. 3. Naming starts with use. 4. They improve code organization. 5. Useful in large projects.",
  keyPoints: ["Reusable Logic", "Hooks Function", "Code Organization", "Custom Logic"],
  example: "function useFetch() {}",
  realTimeExample: "Reusable API fetch logic."
},
{
  id: "api-calls",
  title: "API Calls",
  definition: "1. API calls fetch external data. 2. useEffect commonly handles API requests. 3. Data updates state after response. 4. Async operations are required. 5. APIs connect frontend and backend.",
  keyPoints: ["Fetch Data", "Async", "State Update", "Backend Connection"],
  example: "fetch('/api/data')",
  realTimeExample: "Loading courses from server."
},
{
  id: "dependency-array",
  title: "Dependency Array",
  definition: "1. Dependency array controls when useEffect runs. 2. Empty array runs once. 3. Specific dependencies trigger updates. 4. Missing dependencies may cause bugs. 5. Proper dependency use improves performance.",
  keyPoints: ["Effect Control", "Dependencies", "Run Timing", "Optimization"],
  example: "useEffect(()=>{}, [count]);",
  realTimeExample: "Reloading data when filter changes."
},
{
  id: "cleanup-function",
  title: "Cleanup Function",
  definition: "1. Cleanup function removes side effects before component unmounts. 2. It prevents memory leaks. 3. Common for timers and subscriptions. 4. Returned inside useEffect. 5. Improves application stability.",
  keyPoints: ["Memory Safety", "Unmount Cleanup", "Timers", "Subscriptions"],
  example: "return () => clearInterval(timer);",
  realTimeExample: "Stopping timer when page changes."
},
{
  id: "multiple-effects",
  title: "Multiple Effects",
  definition: "1. Multiple useEffect hooks separate logic clearly. 2. Each effect handles specific task. 3. Improves readability. 4. Effects run independently. 5. Useful in complex components.",
  keyPoints: ["Separate Logic", "Independent Effects", "Readable Code", "Organized Hooks"],
  example: "useEffect(()=>{}, []); useEffect(()=>{}, [count]);",
  realTimeExample: "One effect for API, another for title update."
},
{
  id: "inline-css",
  title: "Inline CSS",
  definition: "1. Inline CSS applies styles directly inside JSX using style attribute. 2. Styles are written as JavaScript objects. 3. Property names use camelCase. 4. It is useful for dynamic styling. 5. Small components often use inline styles.",
  keyPoints: ["Style Object", "camelCase", "Dynamic Styling", "JSX Styling"],
  example: "<h1 style={{ color: 'blue' }}>Hello</h1>",
  realTimeExample: "Changing text color based on user selection."
},
{
  id: "external-css",
  title: "External CSS",
  definition: "1. External CSS stores styles in separate files. 2. CSS files are imported into components. 3. It improves project organization. 4. Reusable styles become easier. 5. Common in large applications.",
  keyPoints: ["Separate File", "Import CSS", "Reusable Styles", "Organized Code"],
  example: "import './App.css';",
  realTimeExample: "Applying common styles across website pages."
},
{
  id: "css-modules",
  title: "CSS Modules",
  definition: "1. CSS Modules scope styles locally to components. 2. Class names do not conflict globally. 3. Files use .module.css extension. 4. Styles are imported as objects. 5. Useful for large scalable apps.",
  keyPoints: ["Scoped Styling", "No Conflict", "Local Classes", "Modular CSS"],
  example: "import styles from './App.module.css';",
  realTimeExample: "Using isolated styles for course cards."
},
{
  id: "styled-components",
  title: "Styled Components",
  definition: "1. Styled Components use JavaScript to create styled elements. 2. Styles stay inside components. 3. Dynamic props can control styles. 4. It improves reusable design systems. 5. Popular in modern React projects.",
  keyPoints: ["CSS in JS", "Dynamic Styles", "Reusable Design", "Component Styling"],
  example: "const Button = styled.button`padding:10px;`;",
  realTimeExample: "Reusable button design with dynamic colors."
},
{
  id: "tailwind-css-react",
  title: "Tailwind CSS with React",
  definition: "1. Tailwind CSS uses utility classes for styling. 2. Styles are applied directly in JSX. 3. No separate CSS file is required. 4. Fast UI development becomes possible. 5. Highly popular in React projects.",
  keyPoints: ["Utility Classes", "Fast Styling", "Responsive Design", "Modern CSS"],
  example: "<div className='p-4 text-center'>Hello</div>",
  realTimeExample: "Building responsive landing pages quickly."
},
{
  id: "installing-react-router",
  title: "Installing React Router",
  definition: "1. React Router enables navigation between pages. 2. It is installed using npm. 3. It supports single page applications. 4. Routing improves user experience. 5. React Router is essential for multi-page apps.",
  keyPoints: ["Navigation", "npm Install", "SPA Routing", "Page Switching"],
  example: "npm install react-router-dom",
  realTimeExample: "Adding Home and Courses pages."
},
{
  id: "browser-router",
  title: "BrowserRouter",
  definition: "1. BrowserRouter wraps the application for routing support. 2. It uses browser history API. 3. It enables navigation without reload. 4. Usually placed at root level. 5. Required for route handling.",
  keyPoints: ["Root Wrapper", "History API", "Routing Base", "Navigation"],
  example: "<BrowserRouter><App /></BrowserRouter>",
  realTimeExample: "Enabling route system in app entry file."
},
{
  id: "routes",
  title: "Routes",
  definition: "1. Routes groups all route definitions. 2. Each route is placed inside Routes. 3. It controls page rendering. 4. Only matching route renders. 5. Replaces older Switch component.",
  keyPoints: ["Route Group", "Matching Logic", "Page Render", "Modern Routing"],
  example: "<Routes></Routes>",
  realTimeExample: "Managing multiple course pages."
},
{
  id: "route",
  title: "Route",
  definition: "1. Route defines path and component. 2. It links URL to component output. 3. Each route needs path and element. 4. Multiple routes build navigation system. 5. Core routing element.",
  keyPoints: ["Path", "Element", "Component Mapping", "Navigation"],
  example: "<Route path='/about' element={<About />} />",
  realTimeExample: "Displaying About page."
},
{
  id: "link",
  title: "Link",
  definition: "1. Link creates navigation without page reload. 2. It replaces anchor tags in React Router. 3. Navigation becomes smooth. 4. Browser history remains managed. 5. Used in menus.",
  keyPoints: ["Navigation", "No Reload", "SPA Link", "Menus"],
  example: "<Link to='/home'>Home</Link>",
  realTimeExample: "Navbar navigation links."
},
{
  id: "navlink",
  title: "NavLink",
  definition: "1. NavLink works like Link with active styling. 2. Active route gets automatic class. 3. Useful in navigation bars. 4. Helps indicate current page. 5. Supports active states.",
  keyPoints: ["Active Link", "Navigation", "Current Page", "Menu Highlight"],
  example: "<NavLink to='/home'>Home</NavLink>",
  realTimeExample: "Highlighting active menu item."
},
{
  id: "usenavigate",
  title: "useNavigate",
  definition: "1. useNavigate allows programmatic navigation. 2. It works inside event handlers. 3. Pages change through function calls. 4. Useful after form submission. 5. Replaces older history.push.",
  keyPoints: ["Programmatic Navigation", "Function Based", "Page Redirect", "Hooks"],
  example: "navigate('/dashboard');",
  realTimeExample: "Redirect after login."
},
{
  id: "url-parameters",
  title: "URL Parameters",
  definition: "1. URL parameters pass dynamic values in route path. 2. useParams reads values. 3. Dynamic pages become possible. 4. Useful for IDs and details pages. 5. Supports scalable routing.",
  keyPoints: ["Dynamic Route", "useParams", "ID Passing", "Flexible URLs"],
  example: "/course/:id",
  realTimeExample: "Opening selected course details."
},
{
  id: "nested-routes",
  title: "Nested Routes",
  definition: "1. Nested routes place child routes inside parent routes. 2. Complex layouts become manageable. 3. Outlet renders child route content. 4. Useful in dashboards. 5. Improves route structure.",
  keyPoints: ["Parent Child Routes", "Outlet", "Dashboard Routing", "Structure"],
  example: "<Route path='dashboard/*' />",
  realTimeExample: "Dashboard sidebar pages."
},
{
  id: "fetch-api",
  title: "Fetch API",
  definition: "1. Fetch API requests data from servers. 2. It returns promises. 3. Used inside useEffect commonly. 4. JSON data is parsed using response.json(). 5. Standard browser API.",
  keyPoints: ["HTTP Request", "Promises", "JSON Data", "Browser API"],
  example: "fetch('/api/data')",
  realTimeExample: "Loading courses from backend."
},
{
  id: "axios",
  title: "Axios",
  definition: "1. Axios is a popular HTTP library. 2. It simplifies API requests. 3. Supports interceptors and automatic JSON parsing. 4. Easier than fetch in many cases. 5. Widely used in production.",
  keyPoints: ["HTTP Library", "JSON Parsing", "Promises", "API Requests"],
  example: "axios.get('/api/data')",
  realTimeExample: "Fetching student list."
},
{
  id: "get-request",
  title: "GET Request",
  definition: "1. GET retrieves data from server. 2. It does not modify data. 3. Common for reading APIs. 4. Response usually returns JSON. 5. Used in dashboards and listings.",
  keyPoints: ["Read Data", "API Request", "JSON Response", "Server Fetch"],
  example: "axios.get('/courses')",
  realTimeExample: "Displaying all courses."
},
{
  id: "post-request",
  title: "POST Request",
  definition: "1. POST sends new data to server. 2. It creates records. 3. Body contains data payload. 4. Common in form submissions. 5. Used in create operations.",
  keyPoints: ["Send Data", "Create Record", "Payload", "Forms"],
  example: "axios.post('/users', data)",
  realTimeExample: "Student registration."
},
{
  id: "put-request",
  title: "PUT Request",
  definition: "1. PUT updates existing server data. 2. Full resource update is common. 3. Requires target ID. 4. Used in edit forms. 5. Helps maintain records.",
  keyPoints: ["Update Data", "Edit Record", "Server Change", "ID Based"],
  example: "axios.put('/users/1', data)",
  realTimeExample: "Updating student profile."
},
{
  id: "delete-request",
  title: "DELETE Request",
  definition: "1. DELETE removes data from server. 2. Target record ID is required. 3. Used in management dashboards. 4. Removes resources permanently. 5. Requires confirmation often.",
  keyPoints: ["Remove Data", "ID Required", "Permanent Delete", "Management"],
  example: "axios.delete('/users/1')",
  realTimeExample: "Deleting course."
},
{
  id: "error-handling",
  title: "Error Handling",
  definition: "1. Error handling manages failed operations. 2. try catch handles async errors. 3. UI should show error messages. 4. Improves reliability. 5. Essential for production apps.",
  keyPoints: ["try catch", "Reliable UI", "Error Message", "Safe API"],
  example: "catch(error => console.log(error))",
  realTimeExample: "Showing failed login message."
},
{
  id: "context-introduction",
  title: "Context Introduction",
  definition: "1. Context shares data globally across components. 2. It avoids prop drilling. 3. Useful for theme and auth data. 4. Provider supplies values. 5. React built-in global data solution.",
  keyPoints: ["Global Data", "No Prop Drilling", "Shared State", "Provider"],
  example: "createContext()",
  realTimeExample: "Theme mode control."
},
{
  id: "provider",
  title: "Provider",
  definition: "1. Provider supplies context values to child components. 2. Wrapped components access shared data. 3. Value prop passes data. 4. Root-level usage is common. 5. Enables centralized sharing.",
  keyPoints: ["Context Supply", "Value Prop", "Shared Access", "Root Wrapper"],
  example: "<UserContext.Provider value={user}>",
  realTimeExample: "Logged-in user access."
},
{
  id: "consumer",
  title: "Consumer",
  definition: "1. Consumer reads context values. 2. Older syntax before useContext hook. 3. Wraps UI inside consumer callback. 4. Still works in class components. 5. Alternative to hooks.",
  keyPoints: ["Read Context", "Callback Access", "Older Method", "Class Support"],
  example: "<UserContext.Consumer>",
  realTimeExample: "Accessing theme value."
},
{
  id: "global-state-management",
  title: "Global State Management",
  definition: "1. Global state stores shared application data. 2. Context and Redux handle global state. 3. Avoids repeated prop passing. 4. Improves scalability. 5. Useful in large apps.",
  keyPoints: ["Shared State", "Scalable Data", "Context", "Redux"],
  example: "Global user authentication state",
  realTimeExample: "Cart data across pages."
},
{
  id: "introduction-to-redux",
  title: "Introduction to Redux",
  definition: "1. Redux manages application state centrally. 2. State lives in store. 3. Actions trigger changes. 4. Reducers update state. 5. Large apps commonly use Redux.",
  keyPoints: ["Central Store", "Actions", "Reducers", "Global State"],
  example: "createStore()",
  realTimeExample: "E-commerce cart management."
},
{
  id: "store",
  title: "Store",
  definition: "1. Store holds application state. 2. Redux has single store usually. 3. Components read store data. 4. Store updates through reducers. 5. Core Redux container.",
  keyPoints: ["State Container", "Single Store", "Redux Core", "Global Data"],
  example: "configureStore()",
  realTimeExample: "Central student records."
},
{
  id: "actions",
  title: "Actions",
  definition: "1. Actions describe state changes. 2. They are plain objects. 3. Type field defines action purpose. 4. Payload carries data. 5. Reducers process actions.",
  keyPoints: ["Type", "Payload", "State Change", "Redux Flow"],
  example: "{ type:'ADD_USER' }",
  realTimeExample: "Adding new cart item."
},
{
  id: "reducers",
  title: "Reducers",
  definition: "1. Reducers update state based on actions. 2. They are pure functions. 3. Previous state and action are inputs. 4. New state is returned. 5. Core Redux logic.",
  keyPoints: ["Pure Function", "State Update", "Action Handling", "Redux Core"],
  example: "(state, action) => newState",
  realTimeExample: "Updating cart quantity."
},
{
  id: "dispatch",
  title: "Dispatch",
  definition: "1. Dispatch sends action to Redux store. 2. Reducers receive dispatched actions. 3. State updates after dispatch. 4. Components trigger dispatch. 5. Core Redux interaction.",
  keyPoints: ["Send Action", "Trigger Update", "Redux Flow", "Component Action"],
  example: "dispatch(addItem())",
  realTimeExample: "Login action trigger."
},
{
  id: "redux-toolkit",
  title: "Redux Toolkit",
  definition: "1. Redux Toolkit simplifies Redux setup. 2. createSlice reduces boilerplate. 3. configureStore simplifies store creation. 4. Recommended modern Redux approach. 5. Faster development.",
  keyPoints: ["Simplified Redux", "createSlice", "Modern Redux", "Boilerplate Reduction"],
  example: "createSlice()",
  realTimeExample: "Fast production Redux setup."
},
{
  id: "higher-order-components",
  title: "Higher Order Components",
  definition: "1. HOC is a function that returns enhanced component. 2. Used for reusable logic. 3. Wraps components. 4. Common in advanced patterns. 5. Reusability increases.",
  keyPoints: ["Wrapper Function", "Reusable Logic", "Advanced Pattern", "Enhancement"],
  example: "withAuth(Component)",
  realTimeExample: "Authentication wrapper."
},
{
  id: "render-props",
  title: "Render Props",
  definition: "1. Render props share logic using function props. 2. Components pass render function. 3. Flexible reuse pattern. 4. Advanced component design. 5. Alternative to HOC.",
  keyPoints: ["Function Prop", "Reusable Logic", "Advanced Pattern", "Flexible UI"],
  example: "<Data render={data => ...} />",
  realTimeExample: "Reusable data fetch component."
},
{
  id: "portals",
  title: "Portals",
  definition: "1. Portals render components outside normal DOM tree. 2. Useful for modals and overlays. 3. ReactDOM.createPortal is used. 4. Keeps UI flexible. 5. Avoids layout restrictions.",
  keyPoints: ["Outside DOM", "Modal", "Overlay", "Flexible Rendering"],
  example: "createPortal(element, root)",
  realTimeExample: "Popup modal."
},
{
  id: "error-boundaries",
  title: "Error Boundaries",
  definition: "1. Error boundaries catch UI errors in components. 2. Prevent full app crash. 3. Show fallback UI. 4. Class components implement them. 5. Improve reliability.",
  keyPoints: ["Catch Errors", "Fallback UI", "Prevent Crash", "Reliable App"],
  example: "componentDidCatch()",
  realTimeExample: "Showing error page when widget fails."
},
{
  id: "fragments",
  title: "Fragments",
  definition: "1. Fragments group elements without extra DOM nodes. 2. Useful when returning multiple elements. 3. Short syntax uses empty tags. 4. Keeps DOM clean. 5. Common React pattern.",
  keyPoints: ["No Extra DOM", "Group Elements", "Clean Output", "Short Syntax"],
  example: "<></>",
  realTimeExample: "Returning multiple table cells."
},
{
  id: "strict-mode",
  title: "Strict Mode",
  definition: "1. Strict Mode highlights potential issues. 2. Development-only checks run. 3. Helps detect unsafe patterns. 4. Improves code quality. 5. Recommended in development.",
  keyPoints: ["Warnings", "Development Check", "Safe Code", "Best Practice"],
  example: "<React.StrictMode>",
  realTimeExample: "Detecting deprecated code."
},
{
  id: "react-memo",
  title: "React Memo",
  definition: "1. React Memo prevents unnecessary component re-rendering. 2. It memoizes functional components. 3. Component re-renders only when props change. 4. It improves performance in large applications. 5. Useful for reusable UI components.",
  keyPoints: ["Memoization", "Prevent Re-render", "Props Comparison", "Performance"],
  example: "export default React.memo(Component);",
  realTimeExample: "Optimizing repeated course cards."
},
{
  id: "usememo-performance",
  title: "useMemo",
  definition: "1. useMemo stores expensive calculation results. 2. It recalculates only when dependencies change. 3. Improves rendering speed. 4. Prevents repeated heavy computation. 5. Useful in filtered lists.",
  keyPoints: ["Memoized Value", "Dependency Based", "Performance", "Optimization"],
  example: "const result = useMemo(() => calculate(), [value]);",
  realTimeExample: "Optimizing search filter results."
},
{
  id: "usecallback-performance",
  title: "useCallback",
  definition: "1. useCallback memoizes functions. 2. It prevents recreating functions on every render. 3. Useful when passing functions to child components. 4. Improves rendering efficiency. 5. Works with dependency arrays.",
  keyPoints: ["Memoized Function", "Performance", "Child Optimization", "Dependencies"],
  example: "const handleClick = useCallback(() => {}, []);",
  realTimeExample: "Optimizing button handlers in dashboard."
},
{
  id: "lazy-loading",
  title: "Lazy Loading",
  definition: "1. Lazy loading loads components only when needed. 2. It reduces initial bundle size. 3. React uses lazy() for this purpose. 4. Improves application speed. 5. Useful for large projects.",
  keyPoints: ["Load on Demand", "Bundle Reduction", "Performance", "Dynamic Import"],
  example: "const Home = React.lazy(() => import('./Home'));",
  realTimeExample: "Loading dashboard pages only when opened."
},
{
  id: "code-splitting",
  title: "Code Splitting",
  definition: "1. Code splitting divides large bundles into smaller files. 2. React loads only required code. 3. Improves initial load performance. 4. Commonly used with lazy loading. 5. Essential for scalable apps.",
  keyPoints: ["Smaller Bundles", "Fast Load", "Optimized Delivery", "Scalable App"],
  example: "import('./Component')",
  realTimeExample: "Splitting admin panel modules."
},
{
  id: "suspense",
  title: "Suspense",
  definition: "1. Suspense shows fallback UI while lazy components load. 2. It works with React.lazy. 3. Improves user experience during loading. 4. Common fallback is loading text or spinner. 5. Helps async rendering.",
  keyPoints: ["Fallback UI", "Lazy Support", "Loading State", "Async Rendering"],
  example: "<Suspense fallback={<h1>Loading...</h1>}></Suspense>",
  realTimeExample: "Showing loader before opening profile page."
},
{
  id: "login-system",
  title: "Login System",
  definition: "1. Login system authenticates users. 2. Credentials are validated before access. 3. State stores login information. 4. APIs usually verify credentials. 5. Core authentication feature.",
  keyPoints: ["Authentication", "Credentials", "User Access", "Security"],
  example: "if(email && password){ login(); }",
  realTimeExample: "Student login portal."
},
{
  id: "signup-system",
  title: "Signup System",
  definition: "1. Signup system creates new user accounts. 2. User details are collected through forms. 3. Validation checks input quality. 4. Data is sent to backend. 5. New account is stored securely.",
  keyPoints: ["Registration", "Form Data", "Validation", "Account Creation"],
  example: "axios.post('/register', data)",
  realTimeExample: "New student registration."
},
{
  id: "token-storage",
  title: "Token Storage",
  definition: "1. Token storage keeps authentication tokens after login. 2. Tokens are usually stored in localStorage or cookies. 3. Used for authorized requests. 4. Maintains session state. 5. Important for protected APIs.",
  keyPoints: ["JWT Token", "localStorage", "Session", "Authorization"],
  example: "localStorage.setItem('token', token)",
  realTimeExample: "Keeping student logged in."
},
{
  id: "protected-routes",
  title: "Protected Routes",
  definition: "1. Protected routes restrict access to authorized users only. 2. Authentication is checked before rendering route. 3. Unauthorized users are redirected. 4. Used in dashboards. 5. Improves security.",
  keyPoints: ["Restricted Access", "Route Security", "Redirect", "Authentication"],
  example: "return token ? <Dashboard /> : <Login />",
  realTimeExample: "Blocking admin dashboard for guests."
},
{
  id: "logout",
  title: "Logout",
  definition: "1. Logout removes authentication data. 2. Token is cleared from storage. 3. User session ends safely. 4. Redirect usually happens after logout. 5. Security improves by clearing credentials.",
  keyPoints: ["Session End", "Token Remove", "Redirect", "Security"],
  example: "localStorage.removeItem('token')",
  realTimeExample: "Logging out from dashboard."
},
{
  id: "build-react-app",
  title: "Build React App",
  definition: "1. Build process creates production files. 2. Optimized static files are generated. 3. Ready for deployment. 4. Removes development overhead. 5. Production build improves speed.",
  keyPoints: ["Production Build", "Optimized Files", "Deployment Ready", "Performance"],
  example: "npm run build",
  realTimeExample: "Preparing website for live hosting."
},
{
  id: "deploy-netlify",
  title: "Deploy in Netlify",
  definition: "1. Netlify hosts static React applications. 2. Deployment can connect GitHub directly. 3. Build folder is published online. 4. SSL is automatic. 5. Easy frontend hosting solution.",
  keyPoints: ["Static Hosting", "Git Integration", "SSL", "Frontend Deployment"],
  example: "Upload dist folder to Netlify",
  realTimeExample: "Publishing course website online."
},
{
  id: "deploy-vercel",
  title: "Deploy in Vercel",
  definition: "1. Vercel provides fast React deployment. 2. Git integration enables automatic deployment. 3. Optimized for frontend frameworks. 4. Supports instant updates. 5. Popular for React apps.",
  keyPoints: ["Fast Hosting", "Git Deploy", "Frontend Optimized", "Auto Deploy"],
  example: "Connect GitHub repo to Vercel",
  realTimeExample: "Deploying student dashboard."
},
{
  id: "environment-variables",
  title: "Environment Variables",
  definition: "1. Environment variables store sensitive configuration. 2. API URLs are commonly stored here. 3. Variables differ between development and production. 4. React uses import.meta.env in Vite. 5. Improves security and flexibility.",
  keyPoints: ["Config Data", "Security", "API URL", "Production Setup"],
  example: "import.meta.env.VITE_API_URL",
  realTimeExample: "Managing backend URL separately."
},
{
  id: "todo-app",
  title: "Todo App",
  definition: "1. Todo app manages tasks dynamically. 2. Users can add, edit, and delete tasks. 3. State handles task list. 4. Lists and events are heavily used. 5. Common beginner project.",
  keyPoints: ["CRUD", "State", "Lists", "Events"],
  example: "setTasks([...tasks, newTask])",
  realTimeExample: "Daily task manager."
},
{
  id: "calculator-project",
  title: "Calculator",
  definition: "1. Calculator project handles arithmetic operations. 2. Buttons trigger events. 3. State stores current expression. 4. Conditional logic processes input. 5. Good event handling practice.",
  keyPoints: ["Arithmetic", "Buttons", "State", "Logic"],
  example: "setValue(value + '1')",
  realTimeExample: "Basic digital calculator."
},
{
  id: "weather-app",
  title: "Weather App",
  definition: "1. Weather app fetches live weather data from API. 2. useEffect handles API calls. 3. State stores weather results. 4. User searches by city. 5. Real API integration practice.",
  keyPoints: ["API", "Fetch Data", "State", "Dynamic UI"],
  example: "fetch(weatherAPI)",
  realTimeExample: "Showing live city weather."
},
{
  id: "ecommerce-ui",
  title: "E-Commerce UI",
  definition: "1. E-Commerce UI displays products dynamically. 2. Cart management uses state. 3. Routing handles pages. 4. Components organize product cards. 5. Professional frontend project.",
  keyPoints: ["Products", "Cart", "Routing", "Components"],
  example: "<ProductCard />",
  realTimeExample: "Online shopping interface."
},
{
  id: "admin-dashboard",
  title: "Admin Dashboard",
  definition: "1. Admin dashboard manages data visually. 2. Tables, charts, and navigation are included. 3. Authentication protects access. 4. API integration loads records. 5. Professional real-time project.",
  keyPoints: ["Dashboard", "Protected Access", "Data Tables", "API"],
  example: "<Dashboard />",
  realTimeExample: "Student management admin panel."
},
{
  id: "lms-platform",
  title: "LMS Platform",
  definition: "1. LMS platform manages courses and learning content. 2. Students access lessons dynamically. 3. Authentication controls accounts. 4. Routing organizes modules. 5. Large real-world React project.",
  keyPoints: ["Courses", "Students", "Authentication", "Modules"],
  example: "<CoursePage />",
  realTimeExample: "Online learning platform like Tech Routes."
}
   
        ]
      },
      {
        id: "java-backend",
        title: "5. Java Backend",
        topics: [
          {
            id: "java-basics",
            title: "Core Java",
            definition: "Core Java is the foundation of the Java programming language, covering basic concepts like variables, data types, and control structures. It is an object-oriented language that follows the 'write once, run anywhere' principle. Understanding Core Java is essential for building any Java-based application, from simple command-line tools to complex enterprise systems. It provides the fundamental libraries and APIs used in the Java ecosystem.",
            keyPoints: ["JVM, JRE, JDK", "Data types & Variables", "Control Flow (if, loops)", "Methods & Arrays"],
            example: "public class Main {\n  public static void main(String[] args) {\n    System.out.println('Hello Java');\n  }\n}",
            realTimeExample: "Writing a simple program to calculate the average of a list of student grades."
          },
          {
            id: "java-oop",
            title: "Java OOPs",
            definition: "Object-Oriented Programming (OOP) is a paradigm based on the concept of 'objects', which can contain data and code. Java is a strictly object-oriented language, implementing core principles like inheritance, polymorphism, encapsulation, and abstraction. These principles help in creating modular, reusable, and maintainable code. OOPs allow developers to model real-world entities and their interactions effectively.",
            keyPoints: ["Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation & Abstraction"],
            example: "class Animal { void sound() { } }\nclass Dog extends Animal { void sound() { System.out.println('Bark'); } }",
            realTimeExample: "Designing a banking system where 'Account' is a parent class and 'SavingsAccount' and 'CurrentAccount' are child classes."
          },
          {
            id: "java-advanced",
            title: "Advanced Java",
            definition: "Advanced Java covers more complex topics like exception handling, collections framework, and multi-threading. Exception handling allows for graceful recovery from runtime errors. The Collections Framework provides a set of classes and interfaces for managing groups of objects efficiently. Multi-threading enables the execution of multiple parts of a program concurrently, improving performance and responsiveness.",
            keyPoints: ["Exception Handling", "Collections (List, Set, Map)", "Generics", "Multi-threading"],
            example: "List<String> list = new ArrayList<>();\ntry { ... } catch (Exception e) { ... }",
            realTimeExample: "Using a 'HashMap' to store and quickly retrieve user session data based on their unique session ID."
          },
          {
            id: "spring-boot-intro",
            title: "Spring Boot Intro",
            definition: "Spring Boot is an open-source Java-based framework used to create microservices. It is built on top of the Spring Framework and provides a faster and easier way to set up and configure applications. Spring Boot uses 'opinionated' defaults to reduce boilerplate code and configuration. It is the industry standard for building modern, scalable, and production-ready Java applications.",
            keyPoints: ["Spring vs Spring Boot", "Auto-configuration", "Starter dependencies", "Spring Initializr"],
            example: "@SpringBootApplication\npublic class MyApp { ... }",
            realTimeExample: "Quickly setting up a new backend service for a mobile app using Spring Boot's pre-configured templates."
          },
          {
            id: "spring-mvc",
            title: "Spring MVC",
            definition: "Spring MVC (Model-View-Controller) is a framework for building web applications in Java. It separates the application into three main components: the Model (data), the View (UI), and the Controller (logic). This separation of concerns makes the application easier to develop, test, and maintain. Spring MVC handles HTTP requests and maps them to specific controller methods for processing.",
            keyPoints: ["@Controller", "@RequestMapping", "ModelAndView", "Form Handling"],
            example: "@GetMapping('/hello')\npublic String hello() { return 'hello'; }",
            realTimeExample: "Building a web portal where a controller fetches user data from a database and passes it to a JSP page for display."
          },
          {
            id: "spring-data-jpa",
            title: "Spring Data JPA",
            definition: "Spring Data JPA is part of the larger Spring Data project that makes it easy to implement JPA-based repositories. It reduces the amount of boilerplate code required to interact with a database. By extending the JpaRepository interface, you get standard CRUD operations automatically. It allows you to focus on the business logic rather than low-level database interactions.",
            keyPoints: ["Entity mapping", "Repositories", "Query methods", "@Transactional"],
            example: "public interface UserRepository extends JpaRepository<User, Long> { }",
            realTimeExample: "Saving a new user record to a MySQL database with a single line of code: 'userRepository.save(user)'."
          },
          {
            id: "spring-rest",
            title: "Spring REST",
            definition: "Spring REST is used to build RESTful web services that communicate using JSON or XML. It uses annotations like @RestController and @ResponseBody to simplify the creation of API endpoints. RESTful services are stateless and can be consumed by various clients like web browsers, mobile apps, and other servers. It is the primary way to build APIs in the Spring ecosystem.",
            keyPoints: ["@RestController", "@PathVariable", "@RequestBody", "ResponseEntity"],
            example: "@PostMapping('/users')\npublic User create(@RequestBody User user) { ... }",
            realTimeExample: "Creating an API endpoint that allows a React frontend to fetch a list of products from the Java backend."
          }
        ]
      },
      {
        id: "database",
        title: "6. Database (MySQL)",
        topics: [
          {
            id: "db-intro",
            title: "Database Intro",
            definition: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Relational databases like MySQL use tables to store data and SQL to manage it. They ensure data integrity and provide powerful ways to query and relate different datasets. Databases are the foundation of any data-driven application.",
            keyPoints: ["DBMS vs RDBMS", "SQL vs NoSQL", "MySQL Installation", "Database Workbench"],
            example: "CREATE DATABASE my_app;",
            realTimeExample: "Setting up a database to store all the user information and posts for a new social media platform."
          },
          {
            id: "sql-basics",
            title: "SQL Basics",
            definition: "SQL (Structured Query Language) is the standard language for interacting with relational databases. It allows you to create tables, insert data, and perform basic queries. Data types like INT, VARCHAR, and DATE define the kind of information each column can hold. Constraints like NOT NULL and UNIQUE ensure that the data follows specific rules.",
            keyPoints: ["CREATE TABLE", "INSERT INTO", "SELECT", "Data types & Constraints"],
            example: "INSERT INTO users (name, email) VALUES ('John', 'john@example.com');",
            realTimeExample: "Adding a new customer's details to the 'Customers' table after they sign up on your website."
          },
          {
            id: "sql-crud",
            title: "CRUD Operations",
            definition: "CRUD stands for Create, Read, Update, and Delete, which are the four basic functions of persistent storage. In SQL, these correspond to INSERT, SELECT, UPDATE, and DELETE statements. Mastering these operations is essential for managing data throughout its lifecycle. They allow you to keep your database information accurate and up-to-date.",
            keyPoints: ["SELECT with WHERE", "UPDATE statement", "DELETE statement", "Filtering data"],
            example: "UPDATE users SET name = 'Johnny' WHERE id = 1;",
            realTimeExample: "Updating a user's profile picture or deleting an old post that they no longer want to show."
          },
          {
            id: "sql-joins",
            title: "Joins",
            definition: "Joins are used to combine rows from two or more tables based on a related column between them. Inner joins return records that have matching values in both tables, while left and right joins include unmatched rows from one side. Joins are fundamental for working with relational data where information is spread across multiple tables. They allow for complex data retrieval in a single query.",
            keyPoints: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "Primary & Foreign keys"],
            example: "SELECT orders.id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;",
            realTimeExample: "Fetching a list of all orders along with the name of the customer who placed each order."
          },
          {
            id: "db-normalization",
            title: "Normalization",
            definition: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller ones and defining relationships between them. The goal is to ensure that each piece of data is stored in only one place. This makes the database more efficient and easier to maintain as it grows.",
            keyPoints: ["1NF, 2NF, 3NF", "Redundancy", "Data Integrity", "Relationship types"],
            example: "Splitting a 'Sales' table into 'Products', 'Customers', and 'Orders' tables.",
            realTimeExample: "Redesigning a messy database where the same customer address is repeated in every order row."
          }
        ]
      }
    ]
  },
  "ai-ml": {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Dive into the world of artificial intelligence and predictive modeling.",
    modules: [
      {
        id: "ai-basics",
        title: "AI Fundamentals",
        topics: [
          {
            id: "intro-ai",
            title: "Introduction to AI",
            definition: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving. AI is a broad field that includes many sub-disciplines, including machine learning and deep learning. It aims to create systems capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, and decision-making. AI is transforming industries by automating complex processes and providing deep insights from data.",
            keyPoints: ["History of AI", "Types of AI (Narrow vs General)", "Ethical considerations", "Future trends"],
            example: "# Simple logic-based AI example\ndef simple_bot(input_text):\n    if 'hello' in input_text.lower():\n        return 'Hi there!'\n    return \"I don't understand.\""
          }
        ]
      }
    ]
  },
  "devops": {
    id: "devops",
    title: "DevOps Engineering",
    description: "Master the bridge between development and operations. Automate workflows and manage infrastructure at scale.",
    modules: [
      {
        id: "devops-intro",
        title: "DevOps Culture",
        topics: [
          {
            id: "what-is-devops",
            title: "What is DevOps?",
            definition: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology. It focuses on automation, collaboration, and integration between teams to improve the speed and reliability of software releases. By breaking down silos, DevOps helps organizations deliver value to customers faster and more efficiently.",
            keyPoints: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring and Logging", "Collaboration tools"],
            example: "# Example Jenkinsfile snippet\npipeline {\n    agent any\n    stages {\n        stage('Build') {\n            steps { echo 'Building...' }\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "quantum": {
    id: "quantum",
    title: "Quantum Computing",
    description: "Explore the next frontier of computation. Understand qubits, superposition, and quantum algorithms.",
    modules: [
      {
        id: "quantum-basics",
        title: "Quantum Mechanics",
        topics: [
          {
            id: "qubits-intro",
            title: "Understanding Qubits",
            definition: "In quantum computing, a qubit or quantum bit is the basic unit of quantum information—the quantum version of the classic binary bit physically realized with a two-state device. A qubit is a two-state quantum-mechanical system, one of the simplest quantum systems displaying the peculiarity of quantum mechanics. Examples include the spin of the electron in which the two levels can be taken as spin up and spin down; or the polarization of a single photon in which the two states can be taken to be the vertical polarization and the horizontal polarization. Unlike a classical bit, a qubit can exist in a superposition of both states simultaneously.",
            keyPoints: ["Superposition", "Entanglement", "Quantum Gates", "Bloch Sphere"],
            example: "from qiskit import QuantumCircuit\nqc = QuantumCircuit(1)\nqc.h(0) # Apply Hadamard gate\nqc.measure_all()"
          }
        ]
      }
    ]
  },
  "data-analytics": {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights. Master statistical analysis and data visualization.",
    modules: [
      {
        id: "data-basics",
        title: "Data Foundations",
        topics: [
          {
            id: "stats-intro",
            title: "Statistics for Data",
            definition: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data. In applying statistics to a scientific, industrial, or social problem, it is conventional to begin with a statistical population or a statistical model to be studied. Populations can be diverse groups of people or objects such as 'all people living in a country' or 'every atom composing a crystal'. Statistics deals with every aspect of data, including the planning of data collection in terms of the design of surveys and experiments. It provides the mathematical foundation for making sense of large datasets.",
            keyPoints: ["Mean, Median, Mode", "Standard Deviation", "Probability Distributions", "Hypothesis Testing"],
            example: "import numpy as np\ndata = [1, 2, 3, 4, 5]\nprint(np.mean(data))"
          }
        ]
      }
    ]
  },
  "c-lang": {
    id: "c-lang",
    title: "C Language Mastery",
    description: "Learn the foundation of modern programming. Master memory management and low-level system design.",
    modules: [
      {
        id: "c-basics",
        title: "C Fundamentals",
        topics: [
          {
            id: "c-syntax",
            title: "C Syntax and Structure",
            definition: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems. C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix.",
            keyPoints: ["Data Types", "Control Structures", "Functions", "Memory Management"],
            example: "#include <stdio.h>\nint main() {\n   printf(\"Hello, World!\");\n   return 0;\n}"
          }
        ]
      }
    ]
  },
  "nanotech": {
    id: "nanotech",
    title: "Nanotechnology",
    description: "Study matter at the atomic and molecular scale. Design innovative materials and microscopic systems.",
    modules: [
      {
        id: "nano-intro",
        title: "Nanoscience",
        topics: [
          {
            id: "scale-intro",
            title: "The Nano Scale",
            definition: "Nanotechnology is the use of matter on an atomic, molecular, and supramolecular scale for industrial purposes. The earliest, widespread description of nanotechnology referred to the particular technological goal of precisely manipulating atoms and molecules for fabrication of macroscale products, also now referred to as molecular nanotechnology. A more generalized description of nanotechnology was subsequently established by the National Nanotechnology Initiative, which defined nanotechnology as the manipulation of matter with at least one dimension sized from 1 to 100 nanometers. This definition reflects the fact that quantum mechanical effects are important at this quantum-realm scale.",
            keyPoints: ["Scale of Nano", "Quantum Effects", "Nanomaterials", "Applications in Medicine"],
            example: "// Scale comparison\n1 meter = 1,000,000,000 nanometers"
          }
        ]
      }
    ]
  },
  "cloud": {
    id: "cloud",
    title: "Cloud Computing",
    description: "Build and deploy scalable applications on the world's most powerful cloud platforms.",
    modules: [
      {
        id: "cloud-basics",
        title: "Cloud Fundamentals",
        topics: [
          {
            id: "cloud-models",
            title: "Service Models",
            definition: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center. Cloud computing relies on sharing of resources to achieve coherence and economies of scale, typically using a 'pay-as-you-go' model which can help in reducing capital expenses but may also lead to unexpected operating expenses for users. It enables organizations to scale their infrastructure rapidly and efficiently in response to changing business needs.",
            keyPoints: ["IaaS (Infrastructure)", "PaaS (Platform)", "SaaS (Software)", "Public vs Private Cloud"],
            example: "# AWS S3 Bucket creation (Terraform)\nresource \"aws_s3_bucket\" \"example\" {\n  bucket = \"my-tf-test-bucket\"\n}"
          }
        ]
      }
    ]
  },
  "power-bi": {
    id: "power-bi",
    title: "Power BI Mastery",
    description: "Become a data visualization expert. Create stunning dashboards and reports for business decision making.",
    modules: [
      {
        id: "pbi-basics",
        title: "Getting Started",
        topics: [
          {
            id: "pbi-intro",
            title: "Introduction to Power BI",
            definition: "Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards. It is part of the Microsoft Power Platform. Power BI provides cloud-based BI services, known as 'Power BI Services', along with a desktop based interface, called 'Power BI Desktop'. It offers data warehouse capabilities including data preparation, data discovery and interactive dashboards. It allows users to connect to a wide range of data sources and transform them into meaningful insights.",
            keyPoints: ["Data Connectivity", "Data Transformation", "DAX Expressions", "Report Publishing"],
            example: "// Simple DAX Measure\nTotal Sales = SUM(Sales[Amount])"
          }
        ]
      }
    ]
  }
};
