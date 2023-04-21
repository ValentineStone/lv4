import { Button } from './Button'

export const NewPostButton = props => (
  <Button href="/post/new/edit" {...props}>
    Опубликовать статью
  </Button>
)