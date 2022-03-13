import {useState} from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownEditor = () => {
  const [markdown, setMarkDown] = useState("markdown Here we come");
  return (
    <>
      <div className="flex p-4">
        <textarea
          className="left-side"
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}></textarea>

        <div className="right-side">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default MarkdownEditor