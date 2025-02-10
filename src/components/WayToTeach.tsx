interface Ways {
    title: string,
    description: string,
}

export default function WayToTeach({ title, description}: Ways) {
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  )
}
