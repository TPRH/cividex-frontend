import Link from 'next/link'

export default function Header({user, onLogout}) {
  return (
    <header>
        <nav>
            <Link href="/"><a>HOME</a></Link>
            <Link href="/team"><a>ABOUT</a></Link>
        </nav>
        {user ?
            <div>
                <Link href={'/user'}><a>{user}</a></Link>
                <Link href={'/'}><a onClick={onLogout}>Sign Out</a></Link>
            </div>
            : <div><button>Log in</button></div>
        }
    </header>
  )
}
