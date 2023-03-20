/** @type {import('next').NextConfig} */
const redirect = (source, destination) => ({ source, destination, permanent: true })

export default {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      redirect('/', '/posts'),
    ]
  },
}