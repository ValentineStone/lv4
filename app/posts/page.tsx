import render from './caste/[caste]/page'

export const metadata = {
  title: 'Posts',
}

export default async ({ params, searchParams }) =>
  await render({ params: { caste: '1,2,3,4,5', ...params }, searchParams })
