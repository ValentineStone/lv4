import { marked } from 'marked'

export default ({ raw }) => (
  <div
    className="markdown-body"
    dangerouslySetInnerHTML={{ __html: marked(raw) }}
  />
)
