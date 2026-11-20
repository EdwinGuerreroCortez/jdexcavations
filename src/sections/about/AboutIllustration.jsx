const artwork = {
  safety: (
    <>
      <path className="about-art-background" d="M32 5 52 13v15c0 14-8 24-20 29-12-5-20-15-20-29V13Z" />
      <path className="about-art-detail" d="M17 19v9c0 9 4 17 11 22m15-34 4 2v10" />
      <path className="about-art-gold" d="M17 35v-3c0-6 4-11 10-13v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1c6 2 10 7 10 13v3h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
      <path className="about-art-ink" d="M27 20v9m10-9v9m-17 7h24" />
    </>
  ),
  commitment: (
    <>
      <path className="about-art-background" d="M20 11h24a5 5 0 0 1 5 5v32a5 5 0 0 1-5 5H20a5 5 0 0 1-5-5V16a5 5 0 0 1 5-5Z" />
      <path className="about-art-gold" d="M27 10a5 5 0 0 1 10 0h3a2 2 0 0 1 2 2v4H22v-4a2 2 0 0 1 2-2Z" />
      <path className="about-art-detail" d="M23 25h18m-18 8h14m-14 8h8" />
      <circle className="about-art-gold" cx="46" cy="44" r="11" />
      <path className="about-art-ink" d="m41.5 44 3 3 6-6" />
    </>
  ),
  location: (
    <>
      <path className="about-art-background" d="m8 32 15-6 18 6 15-6v23l-15 6-18-6-15 6Z" />
      <path className="about-art-detail" d="M23 27v22m18-17v23M12 44l6-3 9 3m18 2 7-3" />
      <path className="about-art-gold" d="M45 21c0 9-10 18-13 21-3-3-13-12-13-21a13 13 0 1 1 26 0Z" />
      <circle className="about-art-center" cx="32" cy="20" r="5" />
    </>
  ),
}

export default function AboutIllustration({ name }) {
  return <svg className="company-about-art" viewBox="0 0 64 64" aria-hidden="true">{artwork[name]}</svg>
}
