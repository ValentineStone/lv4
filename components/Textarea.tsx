'use client'

import { useEffect, useRef } from 'react'

const onTextareaInput = ({ target }) => {
  target.style.height = 0
  target.style.height = (target.scrollHeight) + 'px'
}


const Textarea = props => {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    ref.current.style.height = ref.current.scrollHeight
    ref.current.style.overflowY = 'hidden'
    onTextareaInput({ target: ref.current })
  }, [ref.current])
  return (
    <textarea onInput={onTextareaInput} ref={ref} {...props} />
  )
}



export default Textarea