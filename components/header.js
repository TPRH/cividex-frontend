import Link from 'next/link'


export default function Header({user, onLogout}) {
  return (
    <header>
        <nav>
          <Link href="/">
            <img src='/clogo.png' width={35} height={35} />
          </Link>
          {/* <Link href="/"><a>HOME</a></Link> */}
          {/* <Link href="/team"><a>ABOUT</a></Link> */}
        </nav>
        {user ?
          <div>
            <Link href='/user'><a>Logged in: {user.username} &nbsp;</a></Link>
            <Link href='/'><button onClick={onLogout}>Sign Out</button></Link>
          </div>
          : <Link href='/admin'><div><button>Log in</button></div></Link>
        }
    </header>
  )
}
