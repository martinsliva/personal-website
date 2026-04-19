export default function MartinSlivaWebPreview() {
  const focusAreas = [
    "AI produkty pro zdravotnictví",
    "Technologická a produktová strategie",
    "Regulovaný software a MDR",
    "Vedení technických týmů",
  ];

  const verticals = [
    {
      id: "healthcare",
      title: "Zdravotnictví a medtech",
      description:
        "AI diagnostika, klinická validace, regulovaný software, MDR a převod vývoje do reálného provozu.",
    },
    {
      id: "telecom",
      title: "Telekomunikace",
      description:
        "Řízení technologických změn, delivery, enterprise prostředí a práce s velkými organizacemi.",
    },
    {
      id: "banking",
      title: "Finance a bankovnictví",
      description:
        "Projektové a procesní řízení v prostředí s vysokými nároky na spolehlivost, governance a koordinaci.",
    },
    {
      id: "startup",
      title: "Startupy a produktové prostředí",
      description:
        "Validace nápadů, MVP, investor pitch, produktová strategie a rychlé převádění konceptů do praxe.",
    },
  ];

  const teaching = [
    {
      id: "cvut",
      place: "ČVUT",
      logoType: "cvut",
      title: "Jak se staví startup",
      description:
        "Kurz zaměřený na vznik startupu od nápadu přes validaci a MVP až po pitch, finance, právo a praktickou realizaci.",
      href: "https://bilakniha.cvut.cz/cs/predmet8353906.html",
    },
    {
      id: "robot-dreams",
      place: "robot_dreams",
      logoType: "robotdreams",
      title: "AI produkt ve zdravotnictví",
      description:
        "Kurz propojující vývoj AI, práci se zdravotnickými daty, klinickou validaci a regulatorní rámec zdravotnického prostředku.",
      href: "https://robotdreams.cz/course/637-ai-in-healthcare",
    },
  ];

  const courses = [
    {
      id: "ibm-agentic",
      provider: "IBM",
      logoType: "ibm",
      title: "Agentic AI with LangChain and LangGraph",
      description:
        "Kurz zaměřený na návrh agentních workflow a praktickou implementaci pokročilých AI systémů.",
      href: "https://www.coursera.org/account/accomplishments/verify/V9D3Z840E2EF",
      cta: "Zobrazit certifikát",
    },
    {
      id: "dlai-rag",
      provider: "DeepLearning.AI",
      logoType: "dlai",
      title: "Retrieval Augmented Generation (RAG)",
      description:
        "Kurz zaměřený na návrh a využití RAG architektury v moderních AI systémech.",
      href: "https://www.coursera.org/account/accomplishments/verify/WXRA73CKTB0S",
      cta: "Zobrazit certifikát",
    },
    {
      id: "dlaimedicine",
      provider: "DeepLearning.AI",
      logoType: "dlai",
      title: "AI for Medicine Specialization",
      description:
        "Specializace zaměřená na využití AI v medicíně a zdravotnických aplikacích.",
      href: "https://www.coursera.org/account/accomplishments/specialization/NQZDNVX7J5VB",
      cta: "Zobrazit certifikát",
    },
    {
      id: "dldeep",
      provider: "DeepLearning.AI",
      logoType: "dlai",
      title: "Deep Learning Specialization",
      description:
        "Specializace poskytující technický základ v oblasti neuronových sítí, optimalizace a moderních modelových architektur.",
      href: "https://www.coursera.org/account/accomplishments/specialization/FBJBCTHU4RSH",
      cta: "Zobrazit certifikát",
    },
    {
      id: "jhu-ds",
      provider: "Johns Hopkins",
      logoType: "jhu",
      title: "Executive Data Science Specialization",
      description:
        "Specializace zaměřená na datově řízené rozhodování, analytické myšlení a využití data science v praxi.",
      href: "https://www.coursera.org/account/accomplishments/specialization/certificate/WJB6TGQ666NH",
      cta: "Zobrazit certifikát",
    },
    {
      id: "ml-az",
      provider: "Udemy / Coursera profil",
      logoType: "coursera",
      title: "Machine Learning A-Z™: Hands-On Python & R in Data Science",
      description:
        "Prakticky orientovaný kurz zaměřený na machine learning s využitím Pythonu a R.",
      href: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZY7ADBRPXCVP",
      cta: "Zobrazit certifikát",
    },
    {
      id: "cert-evp3",
      provider: "Coursera",
      logoType: "coursera",
      title: "Další ověřený certifikát",
      description:
        "Další ověřený certifikát doplňující profil v oblasti AI a data science.",
      href: "https://www.coursera.org/account/accomplishments/verify/EVP3Y043YA48",
      cta: "Zobrazit certifikát",
    },
    {
      id: "cert-v6al",
      provider: "Coursera",
      logoType: "coursera",
      title: "Další ověřený certifikát",
      description:
        "Další ověřený certifikát doplňující profil v oblasti AI a data science.",
      href: "https://www.coursera.org/account/accomplishments/verify/V6ALQ7H51TOL",
      cta: "Zobrazit certifikát",
    },
  ];

  const publications = [
    {
      id: "paper-1",
      title:
        "Comparison of the Aireen System with Telemedicine Evaluation by an Ophthalmologist",
      journal: "Clinical Ophthalmology",
      year: "2025",
      summary:
        "Reálné srovnání AI hodnocení s telemedicínským vyšetřením oftalmologem.",
      href: "https://pubmed.ncbi.nlm.nih.gov/40125479/",
    },
    {
      id: "paper-2",
      title:
        "Real-World Evaluation of AI-Based Diabetic Retinopathy Screening Using the Optomed Aurora Handheld Fundus Camera",
      journal: "Diabetes Technology & Therapeutics",
      year: "2025",
      summary:
        "Praktické nasazení AI screeningu diabetické retinopatie v terénu.",
      href: "https://pubmed.ncbi.nlm.nih.gov/40824290/",
    },
  ];

  const presentations = [
    {
      id: "talk-ai-healthcare",
      title: "AI ve zdravotnictví",
      meta: "Konference / keynote / panel",
      description:
        "Prostor pro doplnění PDF prezentace k přednášce o praktickém nasazení AI ve zdravotnictví, rizicích a implementaci.",
      href: "#",
      cta: "Doplnit PDF",
    },
    {
      id: "talk-startups",
      title: "Jak se staví startup",
      meta: "Výuka / meetup / workshop",
      description:
        "Prostor pro prezentace k tématům validace, MVP, pitch decku, produktového myšlení a budování startupu.",
      href: "#",
      cta: "Doplnit PDF",
    },
    {
      id: "talk-medtech-ai",
      title: "AI produkt ve zdravotnictví",
      meta: "Kurz / odborná přednáška",
      description:
        "Prostor pro materiály k regulaci, datům, PoC, klinické validaci, dokumentaci a uvedení AI zdravotnického prostředku na trh.",
      href: "#",
      cta: "Doplnit PDF",
    },
  ];

  const SectionTitle = ({ eyebrow, title, text }) => (
    <div className="max-w-3xl min-w-0">
      <div className="text-sm font-semibold uppercase tracking-widest text-sky-700">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-600">{text}</p> : null}
    </div>
  );

  const Card = ({ children, className = "" }) => (
    <div className={`min-w-0 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm ${className}`}>
      {children}
    </div>
  );

  const MiniLogo = ({ type, compact = false }) => {
    const base = compact ? "h-11" : "h-12";

    if (type === "cvut") {
      return (
        <div className={`flex ${base} shrink-0 items-center rounded-2xl border border-slate-200 bg-white px-3`}>
          <div className="text-[11px] font-black tracking-[0.28em] text-sky-700">ČVUT</div>
        </div>
      );
    }

    if (type === "robotdreams") {
      return (
        <div className={`flex ${base} shrink-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3`}>
          <div className="grid h-6 w-6 place-items-center rounded-md bg-slate-900 text-[10px] font-bold text-white">rd</div>
          <div className="text-[11px] font-semibold tracking-wide text-slate-800">robot_dreams</div>
        </div>
      );
    }

    if (type === "ibm") {
      return (
        <div className={`flex ${base} shrink-0 items-center rounded-2xl border border-slate-200 bg-white px-3`}>
          <div className="text-sm font-black tracking-[0.18em] text-slate-900">IBM</div>
        </div>
      );
    }

    if (type === "dlai") {
      return (
        <div className={`flex ${base} shrink-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3`}>
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <div className="text-[11px] font-semibold tracking-wide text-slate-800">DeepLearning.AI</div>
        </div>
      );
    }

    if (type === "jhu") {
      return (
        <div className={`flex ${base} shrink-0 items-center rounded-2xl border border-slate-200 bg-white px-3`}>
          <div className="text-[11px] font-black tracking-[0.16em] text-slate-900">JHU</div>
        </div>
      );
    }

    if (type === "coursera") {
      return (
        <div className={`flex ${base} shrink-0 items-center rounded-2xl border border-slate-200 bg-white px-3`}>
          <div className="text-[11px] font-bold tracking-wide text-sky-700">coursera</div>
        </div>
      );
    }

    return (
      <div className={`flex ${base} shrink-0 items-center rounded-2xl border border-slate-200 bg-white px-3`}>
        <div className="text-[11px] font-semibold tracking-wide text-slate-800">logo</div>
      </div>
    );
  };

  const LinkedTitle = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="break-words transition hover:text-sky-700"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Martin Slíva
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">O mně</a>
            <a href="#experience" className="transition hover:text-slate-900">Praxe</a>
            <a href="#teaching" className="transition hover:text-slate-900">Výuka</a>
            <a href="#courses" className="transition hover:text-slate-900">Kurzy</a>
            <a href="#presentations" className="transition hover:text-slate-900">Prezentace</a>
            <a href="#publications" className="transition hover:text-slate-900">Publikace</a>
            <a href="#contact" className="transition hover:text-slate-900">Kontakt</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-3 min-w-0">
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800">
                AI Leader s praxí napříč obory
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
                Propojuji zkušenost ze zdravotnictví, startupů, telekomunikací a financí do AI produktů, které dávají smysl technicky, obchodně, regulatorně i eticky.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Působím napříč obory a přenáším mezi nimi to nejlepší: startupovou rychlost, enterprise disciplínu, datové myšlení a schopnost dovést AI produkt od strategie přes realizaci až k reálnému dopadu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Kontakt
                </a>
                <a
                  href="#presentations"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5"
                >
                  Prezentace
                </a>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 lg:col-span-2">
              <Card className="bg-slate-50">
                <div className="text-sm font-medium text-slate-500">Hlavní oblasti</div>
                <div className="mt-4 grid gap-3">
                  {focusAreas.map((item) => (
                    <div
                      key={item}
                      className="break-words rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-5 text-slate-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-sky-200 bg-sky-50">
                <div className="text-sm font-medium text-sky-800">Profil v kostce</div>
                <p className="mt-3 break-words text-sm leading-7 text-slate-700">
                  CTO ve zdravotnickém AI produktu, lektor startupového kurzu na ČVUT,
                  lektor odborného kurzu o AI produktu ve zdravotnictví, řečník a
                  spoluautor odborných publikací v oblasti oftalmologické AI.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 min-w-0">
              <SectionTitle
                eyebrow="O mně"
                title="Technologie, produkt a výuka v jednom profilu."
              />
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600 lg:col-span-3 min-w-0">
              <p>
                Jsem CTO ve společnosti Aireen, kde se věnuji vývoji AI řešení pro
                zdravotnictví. Zaměřuji se na produktovou a technologickou strategii,
                vedení týmů a převod AI konceptů do klinicky a regulatorně použitelných
                produktů.
              </p>
              <p>
                Vedle praxe se věnuji výuce, prezentacím a odbornému mentoringu. Zajímá
                mě hlavně místo, kde se potkává startupová exekuce, práce s daty,
                klinická validace a požadavky regulovaného prostředí.
              </p>
              <p>
                Průběžně absolvuji specializované kurzy v oblastech AI, data science a
                agentních systémů. Nové poznatky nenechávám v teorii — okamžitě je
                převádím do produktu, architektury, výuky i každodenní praxe.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle
              eyebrow="Praxe napříč vertikálami"
              title="Zkušenost z více prostředí, ne jen z jednoho oboru."
              text="V technologii a delivery jsem působil v prostředích s odlišnou dynamikou, omezeními i očekáváními. Díky tomu propojuji startupovou rychlost s enterprise disciplínou a regulatorní přesností."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {verticals.map((item) => (
                <Card key={item.id} className="flex h-full min-w-0 flex-col bg-slate-50">
                  <h3 className="break-words text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-8 text-slate-600">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="teaching" className="mx-auto max-w-6xl px-6 py-16">
          <SectionTitle
            eyebrow="Výuka a mentoring"
            title="Kurzy, které propojují praxi a realizaci."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {teaching.map((item) => (
              <Card key={item.id} className="flex h-full min-w-0 flex-col">
                <div className="flex min-w-0 items-center gap-3">
                  <MiniLogo type={item.logoType} compact />
                  <div className="min-w-0 break-words text-sm font-medium text-sky-700">{item.place}</div>
                </div>
                <h3 className="mt-4 break-words text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
                  <LinkedTitle href={item.href}>{item.title}</LinkedTitle>
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-slate-600">{item.description}</p>
                <div className="mt-5">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                  >
                    Otevřít kurz
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="courses" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle
              eyebrow="AI certifikace"
              title="Vybrané kurzy a certifikace"
              text="Kurzy a certifikace doplňují mou praktickou zkušenost v oblasti moderních AI systémů, data science a zdravotnictví."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {courses.map((course) => (
                <Card key={course.id} className="flex h-full min-w-0 flex-col">
                  <div className="flex min-w-0 items-center gap-3">
                    <MiniLogo type={course.logoType} compact />
                    <div className="min-w-0 break-words text-sm font-medium text-sky-700">{course.provider}</div>
                  </div>
                  <h3 className="mt-4 break-words text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
                    <LinkedTitle href={course.href}>{course.title}</LinkedTitle>
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-8 text-slate-600">{course.description}</p>
                  <div className="mt-5">
                    <a
                      href={course.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                    >
                      {course.cta}
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="presentations" className="mx-auto max-w-6xl px-6 py-16">
          <SectionTitle
            eyebrow="Prezentace"
            title="Výběr přednášek a materiálů."
            text="Sekce je připravená pro doplnění PDF souborů z konferencí, meetupů, kurzů a odborných vystoupení."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {presentations.map((item) => (
              <Card key={item.id} className="flex h-full min-w-0 flex-col">
                <div className="text-sm font-medium text-sky-700">{item.meta}</div>
                <h3 className="mt-3 break-words text-xl font-semibold leading-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-slate-600">{item.description}</p>
                <div className="mt-5">
                  <a
                    href={item.href}
                    className="inline-flex rounded-2xl border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                  >
                    {item.cta}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="publications" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle eyebrow="Publikace" title="Vybrané odborné články." />
            <div className="mt-10 grid gap-6">
              {publications.map((pub) => (
                <Card key={pub.id} className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span>{pub.journal}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{pub.year}</span>
                  </div>
                  <h3 className="mt-3 break-words text-xl font-semibold leading-snug text-slate-900 md:text-2xl">
                    <LinkedTitle href={pub.href}>{pub.title}</LinkedTitle>
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{pub.summary}</p>
                  <div className="mt-5">
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                    >
                      Otevřít na PubMed
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-5 lg:items-end">
            <div className="lg:col-span-3 min-w-0">
              <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">
                Spolupráce
              </div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Přednášky, mentoring, konzultace, produktová a technologická spolupráce.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Spolupracuji na projektech, workshopech a přednáškách, kde se potkává AI,
                zdravotnictví, produktová strategie a schopnost dovést věci do reálného
                nasazení.
              </p>
            </div>
            <div id="contact" className="lg:col-span-2 min-w-0">
              <div className="rounded-3xl bg-white/10 p-6">
                <div className="text-sm text-slate-300">Kontakt</div>
                <div className="mt-3 break-words text-lg font-medium">
                  <a href="mailto:martin@sliva.cz" className="hover:text-sky-300">
                    martin@sliva.cz
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                  <a
                    href="https://cz.linkedin.com/in/martinsliva"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-3 py-1.5 transition hover:bg-white/10"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.sliva.cz/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-3 py-1.5 transition hover:bg-white/10"
                  >
                    sliva.cz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
