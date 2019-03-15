import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const Editor = (props) => {
  return(
    <div id="editor" className="col-md-12">
      <ComponentHeader name={'Editor'} onClick={props.toggle} icon={props.icon}/>
      <textarea id="editor" className={props.componentStyles}
        value={props.markdown}
        onChange={props.onChange}
      />
    </div>
  );
};

const Previewer = (props) => {
  return(
    <div id="previewer" className="col-md-12">
      <ComponentHeader name='Previewer' onClick={props.toggle} icon={props.icon}/>
      <div id="preview" 
        className={props.componentStyles}
        dangerouslySetInnerHTML={props.data}>
      </div>
    </div>
  );
}


const ComponentHeader = (props) => {
  return(
    <div className="bar-toggle" onClick={props.onClick}>
      <div className="text-wrapper">
        <h2 className="text-center">{props.name}</h2>
      </div>
      <i className={props.icon}></i>
    </div>
  );
}

const AppHeader = () => {
  return(
    <div className="col header">
      <h1 className="text-center">Markdown Previewer</h1>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      toggleEditor: true,
      togglePreviewer: true
    };

    this.toggleEditor = this.toggleEditor.bind(this);
    this.togglePreviewer = this.togglePreviewer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }

  toggleEditor() {
    this.setState( state => ({
      toggleEditor: !state.toggleEditor
    }));
  }

  togglePreviewer() {
    this.setState( state => ({
      togglePreviewer: !state.togglePreviewer
    }));
  }
  
  getRawHtml() {
    let rawHtml = marked(this.state.markdown, {sanitize: true});
    return { __html: rawHtml };
  }

  render() {
    const togEditor = 
      this.state.toggleEditor ? 'editor' : 'editor maximized';
    const togPreviewer = 
      this.state.togglePreviewer ? 'previewer' : 'previewer maximized';
    const togEditorIcon =
      this.state.toggleEditor ? 'fa fa-chevron-down' : 'fa fa-minus';
    const togPreviewerIcon =
      this.state.togglePreviewer ? 'fa fa-chevron-down' : 'fa fa-minus';

    return (
      <div className="container h-100">
        <AppHeader />
        <div className="row h-75 align-items-center">
          <Editor
            markdown={this.state.markdown}
            onChange={this.handleChange}
            toggle={this.toggleEditor}
            componentStyles={togEditor}
            icon={togEditorIcon}
          />
          <Previewer 
            data={this.getRawHtml()} 
            toggle={this.togglePreviewer}
            componentStyles={togPreviewer}
            icon={togPreviewerIcon}
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