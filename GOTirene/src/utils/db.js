
const dbBooks = [{
    id: 1,
    url: 'https://m.media-amazon.com/images/I/51IHAPK5fsL.jpg',
    synopsis: "A Game of Thrones takes place over the course of one year on or near the fictional continent of Westeros. The story begins when King Robert visits the northern castle Winterfell to ask Ned Stark to be his right-hand assistant, or Hand of the King. The previous Hand, Jon Arryn, died under suspicious circumstances. Robert comes with his queen, Cersei Lannister, and his retinue, which includes a number of Lannisters. Just after the royal party arrives, Ned’s wife, Catelyn, receives a message claiming that the Lannister family was responsible for the death of the former Hand. She tells Ned, who accepts the position as Hand in order to protect Robert from the Lannisters. Ned’s son Bran then discovers Cersei Lannister and her brother Jaime Lannister having sex, and Jaime pushes Bran from a window to silence him. Everyone thinks Bran simply fell while climbing around the castle. While Bran is still unconscious, Ned leaves Winterfell and rides south with Robert. The same day, Ned’s bastard son, Jon, leaves to serve at the Wall, a massive structure that protects Westeros from the wilderness of the far North. The group of men sworn to defend the Wall, the Night’s Watch, have been receiving reports of strange creatures and have been losing men with increasing frequency. Tyrion Lannister, a little person who is brother to Cersei and Jaime, travels with Jon to the Wall to see the massive structure. Meanwhile, on a continent east of Westeros, Daenerys Targaryen marries the warlord Khal Drogo, one of the leaders of the Dothraki people. Daenerys and her brother Viserys are the last surviving members of the family Robert defeated to become king, the Targaryens. They are an old family said to be descended from dragons, and Viserys thinks with Khal Drogo’s army he can retake the throne. A knight named Ser Jorah Mormont, exiled by Ned Stark, pledges he will help. Daenerys receives three dragon eggs as a wedding gift and becomes immediately fascinated by them."
  },
  {
    id: 2,
    url: 'https://media.loot.co.za/static/gallery/n/g/h/nghw-1669-ga40/nghw-1669-ga40.1.front.0007447833.jpg?w=400&h=500&t=embed',
    synopsis: "As A Clash of Kings begins, the Seven Kingdoms of Westeros are locked in a bloody civil war. Joff Lannister, who is still a young boy, has recently become king, but Stannis Baratheon and Renly Baratheon both want the crown for themselves. Robb Stark, meanwhile, has recently taken the title of King of the North. Far to the north of this action, the men of the Night’s Watch leave the safety of the Wall to investigate the disappearance of the wilding people, enemies who live in primitive bands and villages in the vast wilderness north of the Wall. Meanwhile, across the narrow sea, Daenerys Targaryen leads her beleaguered band of Dothrakis in search of enough wealth and soldiers to return to Westeros and capture the Iron Throne. Simultaneous developments within these three plots constitute the major action of the novel."
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/564x/da/85/b2/da85b2bbfff7bb8409f12ce758c6c4c4.jpg',
    synopsis: "A Storm of Swords continues the story where A Clash of Kings ended. The novel describes the increasingly vicious War of Five Kings in Westeros, Daenerys’s strengthening forces in the East, and the oncoming threat of the Others, a ghostly army that is nearly invincible. The story is told from the perspective of 12 different characters, though 10 tell the majority of the story. Their tales occur simultaneously, as the chapters cycle among their perspective, though here they are recounted one at a time."
  },
  {
    id: 4,
    url: 'https://m.media-amazon.com/images/I/51IHAPK5fsL.jpg',
    synopsis: "The Hedge Knight is a short story by George R. R. Martin that first appeared in the Legends anthology, a collection of stories by various fantasy authors such as Stephen King, Robert Jordan, and Terry Pratchett. It was edited by Robert Silverberg. The story was later adapted into a graphic novel by Mike S. Miller. It is the first of the 'Dunk and Egg' stories."
  },
  {
    id: 5,
    url: 'https://img.wook.pt/images/a-feast-for-crows-george-r-r-martin/MXwxMTIwMTQzMnw2NzcyMjY2fDE1NTUwODY3MjQwMDB8d2VicA==/502x',
    synopsis: 'A Feast for Crows focuses on the Lannister family’s continuing consolidation of power following victory in the “War of the Five Kings.” Specifically, it follows the events precipitated by the murder of Tywin Lannister, who had been de facto ruler of Westeros. In his place, his daughter Cersei, seizes power. She strives to eliminate all perceived threats, especially those of the Tyrell family, whose daughter Margaery marries child king Tommen, Cersei’s son. However, Cersei’s paranoia over Margaery and her plots to prove her infidelity backfire. It leads her to empower a religious movement that eventually imprisons Cersei on charges of murder and immorality. The novel also follows a series of other characters’ stories occurring concurrently in different places in Westeros.'
  },
  {
    id: 6,
    url: 'https://www.editions-larousse.fr/sites/default/files/styles/couv_livre/public/images/livres/couv/9782818708118-001-T.jpeg?itok=fG5tcR8_',
    synopsis: "The Sworn Sword is the second in George R. R. Martin's Tales of Dunk & Egg, following the story of the hedge knight Duncan the Tall and his squire Egg, a year and a half after the events of The Hedge Knight. It was first published in the Legends II anthology series, a collection of short stories by authors such as Tad Williams, Orson Scott Card, and Neil Gaiman. The novella focuses on the difficult path of chivalry when taking part in petty feuds and casual injustices are part and parcel of what it means to be a sworn man in the feudal Seven Kingdoms."
  },
  {
    id: 7,
    url: 'https://www.georgerrmartin.com/wp-content/uploads/2017/08/MysteryKnight.jpg',
    synopsis: "The Mystery Knight is a novella published in 2010 as part of the Warriors anthology, edited by George R. R. Martin and Gardner Dozois. It is the third in the series of 'Dunk and Egg' stories. Previous stories are The Hedge Knight and The Sworn Sword."
  },
  {
    id: 8,
    url: 'https://i.pinimg.com/564x/4a/eb/9a/4aeb9a067b16fa7b6fa1f9ede1537304.jpg',
    synopsis: 'A Dance With Dragons is the fifth novel in George R. R. Martin’s ongoing fantasy series, A Song of Ice and Fire. Much of the novel’s action coincides with events from the previous novel, A Feast for Crows. However, A Dance With Dragons focuses on different characters, and while the previous novel focused on events around King’s Landing, the capital of Westeros, much of A Dance With Dragons takes place in the far north of Westeros and in the lands across the Narrow Sea. At the beginning of A Dance with Dragons, Stannis Baratheon has taken his army, his wife and daughter, and the Red Woman—the Lady Melisandre—to the Wall, where John Snow has been elected the 998th Lord Commander of the Night’s Watch. Meanwhile in King’s Landing, King Tommen Baratheon, Joffrey’s eight-year-old brother, rules alongside his mother, Cersei Lannister. Jaime Lannister, united with Brienne of Tarth, is on a mission to quell dissent in the Riverlands, as Brienne attempts to fulfill her vow to Catelyn Stark by finding and protecting Sansa Stark. Sansa Stark is hiding at her aunt’s castle in the Vale, pretending to be the ward of Petyr Baelish, who has murdered his wife and Sansa’s aunt, Lysa Arryn, and named himself the Protector of the Vale and guardian of eight-year-old Lord Robert Arryn.'
  },
  {
    id: 9,
    url: 'https://www.toptenz.net/wp-content/uploads/2015/03/princess-queen-martin-768x1241.jpg',
    synopsis: "A spin-off of Martin's famed A Song of Ice and Fire novel series, The Princess and the Queen is set about 200 years before the events of A Game of Thrones (1996), and chronicles the 'continent-burning warfare' of a Targaryen war of succession that explodes between heir to the throne Crown Princess Rhaenyra Targaryen (whose supporters are known as 'the blacks') and her stepmother Queen Alicent Hightower (supported by 'the greens'), who conspired to usurp Rhaenyra and have her half-brother Aegon (Alicent's eldest son) crowned on the Iron Throne instead. Both Aegon (as Aegon II) and Rhaenyra are crowned by their respective followers at the start of the civil war, and both are eventually killed, but Rhaenyra's supporters emerge victorious, with her oldest surviving child (the older three having died in the war) being crowned as the unchallenged King Aegon III. House Targaryen, continuing through Rhaenyra's direct family line, reigns for the next 200 years, until it is overthrown by Robert Baratheon of House Baratheon, tying the outcome of The Princess and the Queen into the opening status of Westeros in the main A Song of Ice and Fire novels. The civil war is called the 'Dance of the Dragons' due to the active involvement of dragonriders, and is designated the primary cause for the extinction of dragons in Westeros before the time of A Song of Ice and Fire."
  },
  {
    id: 10,
    url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1613168855l/54911360._SY475_.jpg',
    synopsis: "The Rogue Prince, or, a King's Brother is a novelette by George R. R. Martin, published in the 2014 Bantam Spectra anthology Rogues.[1][2] It is set on the continent of Westeros of Martin's A Song of Ice and Fire series, hundreds of years before the events of A Game of Thrones (1996) during the reign of King Viserys I Targaryen. The Rogue Prince serves as a prequel to Martin's earlier novella The Princess and the Queen (2013) and focuses on the reign of Viserys I, from his grandfather Jaehaerys I Targaryen's death to his own. It chronicles the evolving complicated relationship between Viserys and his charismatic-yet-unruly younger brother Daemon, who is the titular antihero, and Viserys' plan for succession to his daughter from his first marriage even though he has a son from his second marriage, which cements a rivalry within the Targaryens that plays out in The Princess and the Queen."
  }]

  export default dbBooks