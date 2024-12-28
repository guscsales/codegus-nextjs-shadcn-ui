export default function Header({title}: Readonly<{title: string}>) {
  return <header className="text-xl font-bold mb-3">{title}</header>;
}
