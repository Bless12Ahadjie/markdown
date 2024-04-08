// documentStore.js
import { makeAutoObservable } from 'mobx';
interface document  {
    id: string;
    createdAt: string;
    name: string;
    content: string;
} 
class DocumentStore {

     
  documents:Array<document> = [  {
    "id": '1',
    "createdAt": "04-01-2022",
    "name": "welcome.md",
    "content": "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```"
  }];

  constructor() {
    makeAutoObservable(this);
  }

  // Function to generate a unique ID
  generateId = () => {
    const timestamp = Date.now().toString(16); // Convert timestamp to hexadecimal string
    const randomNum = Math.floor(Math.random() * 10000).toString(16); // Generate random number and convert to hexadecimal string
    return `${timestamp}-${randomNum}`;
  }

  // Action to add a new document
  addDocument = () => {
    const newDocumentId = this.generateId();
    const currentDate = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const month = monthNames[currentDate.getMonth()]; // Get month in string format
    const day = currentDate.getDate(); // Get day of the month
    const year = currentDate.getFullYear(); // Get full year

    const newDocument: {
        id: string;
        createdAt: string;
        name: string;
        content: string;
    } = {
        id: newDocumentId,
        createdAt: `${day} ${month} ${year}`, // Format date as "day month year"
        name: "untitled-document.md",
        content: "",
    };
    
    this.documents.unshift(newDocument);
    // You may want to return the new document ID for further usage
    return newDocumentId;
  }

  // Other actions and computed properties can be defined here
}

const documentStore = new DocumentStore();
export default documentStore;
