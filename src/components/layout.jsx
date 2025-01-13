import * as React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useTags from '../hooks/useTags'

const Layout = ({ children, pageTitle, pageSubtitle, taggedWith }) => {
  const { tbu, tba } = useSiteMetadata()
  const allTags = useTags()

  return <div className='flex'>
    <div className="h-screen min-w-72 text-right">
      <h1 className="p-8 h-32">{tba}<br />/{tbu}</h1>
      <table className="float-right mr-8">
        <tbody>
          {allTags.map(_ => <tr key={_.fieldValue}>
            <td><Link to={"/tag/" + _.fieldValue}>{_.fieldValue}</Link>{" "}</td>
            <td className='text-stone-500 pl-2'>{_.totalCount}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
    <div className="w-full border-solid border-l-[1px] border-stone-300">
      <header className='h-32 p-8'>
        <h2 className='text-[DeepPink]'>{pageTitle}</h2>
        {pageSubtitle && <h3 className="float-right text-stone-400 italic font-normal">————&nbsp;{pageSubtitle}</h3>}
        {taggedWith && <div className="text-stone-400">tags: {taggedWith.sort().join(", ")}</div>}
      </header>
      <main className='pl-8 pb-8'>
        {children}
      </main>
    </div>
  </div>
}

export default Layout