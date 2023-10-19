import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

function kebabCase(str: string | undefined): string {
  if (str === undefined) {
    return ''; // or return any other default value you prefer
  }

  return str
    ?.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    ?.join('-') || '';
}


export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(slug(text))}`}
      className="mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 md:text-base"
    >
      <span data-umami-event="tag">#{text.split(' ').join('-')}</span>
    </Link>
  )
}

export default Tag
