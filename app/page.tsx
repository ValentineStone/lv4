import { redirect } from 'next/navigation'

export const metadata = {
  title: 'LV4',
}

export default props => {
  //return redirect('/posts')
  return (
    <h1>
      Главная страница LV4
    </h1>
  )
}
