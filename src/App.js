import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import AppHeader from './components/AppHeader';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }
  
  getRawHtml() {
    let rawHtml = marked(this.state.markdown, {sanitize: true});
    return { __html: rawHtml };
  }

  render() {
    return (
      <div className="container h-100">
        <AppHeader />
        <div className="row h-75 align-items-center">
          <Editor
            markdown={this.state.markdown}
            onChange={this.handleChange}
          />
          <Previewer 
            data={this.getRawHtml()}
          />
        </div>
      </div>
    );
  }
};

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`

export default App;
