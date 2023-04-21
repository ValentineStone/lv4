import { inspect } from 'node:util'

export default ({ value }) => (
  <pre style={{ whiteSpace: 'pre-wrap' }}>
    {inspect(value, false, Infinity, false)}
  </pre>
)
