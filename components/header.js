import Link from 'next/link'

export default function Header({user, onLogout}) {
  return (
      <header>
          <h2><Link href="/"><a>Return to Main Page</a></Link></h2>
          <div>
              {user &&
                  <>
                      <Link href={'/user'}><a>{user}</a></Link>
                      <Link href={'/'}><a onClick={onLogout}>Sign Out</a></Link>
                      <nav>
                          <Link href={'/OverView'}><a>Overview</a></Link>
                      </nav>
                </>
              }
          </div>

      </header>

  )
}
