import Link from "next/link"


export default function Footer() {
  return (
    <footer>
      <p>&copy; {2022}</p>
      <Link href="/team">
        <a>About the Team</a>
      </Link>
    </footer>
    )
}
