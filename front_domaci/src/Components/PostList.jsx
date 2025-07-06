const posts = [
    {
      id: 1,
      title: "Kako Napisati Efikasan CV: Saveti za Početnike",
      author: "Darko Jovanović",
      date: "2025-01-10",
      content: "Pisanjem CV-a pokazujete potencijalnim poslodavcima šta možete da ponudite. Ključ uspešnog CV-a je jasnoća, preciznost i relevantnost. Naglasite svoje veštine, obrazovanje i iskustvo, ali ne zaboravite da uključite i volontarizam, projekte ili bilo koju praksu koja može biti relevantna za posao na koji se prijavljujete. Osim toga, budite sigurni da je CV vizuelno privlačan, sa jasnim odeljcima i sažetim informacijama. Ne pretrpavajte ga nepotrebnim detaljima i uvek se trudite da ga prilagodite specifičnim zahtevima posla za koji se prijavljujete. Korišćenje odgovarajućih ključnih reči može pomoći da vaš CV prođe kroz softvere za selekciju kandidata, koji često prepoznaju određene fraze."
    },
    {
      id: 2,
      title: "Priprema za Intervju: Kako Se Ispitati i Šta Očekivati",
      author: "Ana Petrović",
      date: "2025-01-12",
      content: "Intervju je vaš trenutak da se pokažete. Osim što treba da budete upoznati sa radnim mestom i kompanijom, postavite sebi pitanja koja biste želeli da postavite poslodavcu. Ne zaboravite da vežbate odgovore na tipična pitanja poput: 'Koji su vaši najveći izazovi?' i 'Zašto želite da radite za nas?' Takođe, obavezno istražite organizaciju i njen rad. Naučite šta vas očekuje na poziciji na koju se prijavljujete, i pripremite se za praktična pitanja koja se odnose na vaše prethodno iskustvo i veštine. Pokažite strast prema industriji u kojoj radite i potrudite se da odgovori budu konkretni i bazirani na stvarnim primerima. Nemojte zaboraviti da odete sa pozitivnim utiskom – i to je često ono što može da vas izdvoji od drugih kandidata."
    },
    {
      id: 3,
      title: "Zašto je Networking Ključan za Vašu Karijeru",
      author: "Jovana Savić",
      date: "2025-01-13",
      content: "U svetu rada, networking je ne samo koristan, već neophodan. Povezivanje sa kolegama, mentorima i ljudima iz industrije može vam otvoriti mnoge prilike. Učlanite se u profesionalne organizacije, prisustvujte događanjima i budite aktivni na LinkedIn-u. Nikada ne znate gde možete sresti svog budućeg poslodavca ili kolegu. Networking vam pomaže da se informišete o industrijskim trendovima, kao i da dobijete priliku da učestvujete u projektima ili programima obuke. Usmerite svoju pažnju na izgradnju odnosa, a ne samo na to da se povežete sa što više ljudi. Kada se stvore pravi kontakti, oni mogu biti ključni za vašu karijeru."
    },
    {
      id: 4,
      title: "Kako Nastaviti da Učiš i Usavršavaš se Tokom Karijere",
      author: "Nikola Novaković",
      date: "2025-01-14",
      content: "Nikada ne prestajte da učite! Da biste napredovali u svojoj karijeri, važno je stalno usavršavanje. Kursevi, radionice, online platforme kao što su Coursera ili Udemy nude mnoge mogućnosti za učenje novih tehnologija i razvijanje veština. Čak i ako ste u usponu, nova znanja mogu vas učiniti konkurentnijim na tržištu rada. Usavršavanje ne mora biti ograničeno samo na akademska pitanja – postanite vešti u komunikaciji, rešavanju problema i timskom radu. Proširivanje vašeg znanja ne samo da povećava vaše šanse za napredovanje, već vam pomaže da se osećate sigurnije i motivisanije na poslu."
    },
    {
      id: 5,
      title: "Kako Održati Balans Između Posla i Ličnog Života",
      author: "Maja Ilić",
      date: "2025-01-15",
      content: "Radna etika je važna, ali nemojte zaboraviti na sebe. Balansiranje između profesionalnog i ličnog života je ključno za očuvanje zdravlja i produktivnosti. Pokušajte da odvojite vreme za porodicu, prijatelje, hobije i fizičke aktivnosti. Dobar balans će vam pomoći da budete srećniji i efikasniji na poslu. Naučite kada je vreme da kažete ‘ne’ na dodatne obaveze ili zadatke, i kako da izbegnete sagorevanje. Razvijanje strategija za mentalno zdravlje i fizičko blagostanje takođe može pomoći da se zadrži dobar balans i da postignete uspeh u životu i na poslu."
    },
    {
      id: 6,
      title: "Kako Brzo da Se Adaptirate na Novi Posao",
      author: "Igor Kovačević",
      date: "2025-01-16",
      content: "Kada započinjete novi posao, najvažnije je da se brzo uklopite u tim i razumete radnu kulturu. Postavite pitanja, budite otvoreni za povratne informacije i ne plašite se da pokažete inicijativu. Poslodavci cene zaposlene koji su voljni da uče i brže prepoznaju što je potrebno za uspeh u organizaciji. Počnite sa izgradnjom odnosa sa kolegama i nemojte se bojati da pitate za pomoć kada vam je potrebna. Postavljanjem ciljeva za sebe i redovnim praćenjem napretka, možete biti sigurni da ćete se brzo prilagoditi i napredovati na novoj poziciji."
    },
    {
      id: 7,
      title: "Kako Da Nađeš Prvi Posao Posle Diplomiranja",
      author: "Petar Stanković",
      date: "2025-01-17",
      content: "Nakon diplomiranja, može biti izazovno pronaći prvi posao, ali ne gubite nadu. Krenite sa sticanjem iskustva kroz stažiranje, volontiranje ili freelance projekte. Prikazivanje praktičnih veština koje ste stekli tokom studija može vam pomoći da dobijete posao, čak i ako nemate mnogo profesionalnog iskustva. Nemojte se plašiti da se prijavite za poslove koji deluju kao izazov – to je prilika da učite i rastete. Takođe, angažujte se u industrijama koje vas interesuju i budite aktivni na društvenim mrežama kako biste izgradili svoj profesionalni brend."
    },
    {
      id: 8,
      title: "Saveti za Upravljanje Stresom na Radnom Mestu",
      author: "Milan Jovanović",
      date: "2025-01-18",
      content: "Stres na poslu je nešto sa čim se gotovo svi suočavaju. Ključ za njegovo upravljanje je organizacija, dobra komunikacija sa kolegama i uzimanje vremena za odmor. Naučite kako da prepoznate signale stresa i primenite tehnike relaksacije, poput dubokog disanja ili kratke šetnje tokom pauze, da biste ostali smireni i fokusirani. Važno je da postavite realna očekivanja za sebe i da se organizujete tako da ne pretrpate radnu dnevnu rutinu. Takođe, ako osećate da je stres postao prevelik, nemojte se ustručavati da zatražite pomoć od nadređenih ili kolega."
    },
    {
      id: 9,
      title: "Zašto je Timski Rad Ključan za Uspeh na Poslu",
      author: "Jelena Tomić",
      date: "2025-01-19",
      content: "U većini radnih sredina, uspeh zavisi od dobrog timskog rada. Efikasna saradnja među članovima tima može doprineti bržem rešavanju problema, boljim idejama i efikasnijem ostvarivanju ciljeva. Učite kako da komunicirate sa kolegama, slušate njihove ideje i doprinosite zajedničkom cilju. Postavljanje zajedničkih ciljeva, razmena mišljenja i pomoć kolegama ključni su faktori za produktivnost i zdravu radnu atmosferu. Pored toga, timski rad može doprineti vašem ličnom razvoju i omogućiti vam da naučite od drugih članova tima."
    },
    {
      id: 10,
      title: "Zašto je Povratna Informacija Ključna za Vaš Profesionalni Razvoj",
      author: "Luka Milić",
      date: "2025-01-20",
      content: "Povratna informacija je jedan od najvažnijih alata za profesionalni rast. Ako želite da napredujete, morate da budete spremni da primite konstruktivnu kritiku. Pokušajte da se ne brinete zbog negativnih komentara – oni su prilika za učenje i poboljšanje. Razgovarajte sa svojim nadređenima i kolegama kako biste saznali na kojim područjima možete da se usavršite. Isto tako, dajte povratne informacije kolegama, jer to ne samo da pomaže timu, već vas čini boljim liderom i kolegom. Stalno poboljšanje je ključ za dugoročnu uspešnost u karijeri."
    }
  ];
  export default posts;