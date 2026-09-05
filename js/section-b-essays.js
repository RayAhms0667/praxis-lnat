/* Section B essay prompts — real LNAT-style essay questions. Each entry:
   { question_id, category, prompt }
   New prompts get appended to this array — nothing else needs to change;
   the Section B list and essay-writing UI are fully data-driven. */

const SECTION_B_WORD_GUIDANCE = "approximately 500-600 words";

const SECTION_B_ESSAYS = [
  { "question_id": "essay-01", "category": "Politics and democracy", "prompt": "Should voting in general elections be made compulsory?" },
  { "question_id": "essay-02", "category": "Law and justice", "prompt": "Is it ever justified to break the law in pursuit of a just cause?" },
  { "question_id": "essay-03", "category": "Economics and society", "prompt": "Should there be a legal maximum wage as well as a legal minimum wage?" },
  { "question_id": "essay-04", "category": "Technology and society", "prompt": "Does social media do more harm than good to democratic political life?" },
  { "question_id": "essay-05", "category": "Law and justice", "prompt": "Should criminal trials be decided by juries, or would panels of professional judges deliver more reliable justice?" },
  { "question_id": "essay-06", "category": "Ethics and society", "prompt": "Is patriotism a virtue, or merely a prejudice in favour of one's own country?" },
  { "question_id": "essay-07", "category": "Ethics and science", "prompt": "Should parents be allowed to choose the sex of their child before birth?" },
  { "question_id": "essay-08", "category": "Economics and society", "prompt": "Is it right that unpaid internships remain legal?" },
  { "question_id": "essay-09", "category": "Law and free expression", "prompt": "Should the state be allowed to ban speech it considers hateful?" },
  { "question_id": "essay-10", "category": "International affairs and ethics", "prompt": "Do wealthy nations have an obligation to accept people displaced by climate change?" },
  { "question_id": "essay-11", "category": "Economics and society", "prompt": "Should professional athletes and entertainers be paid according to the same principles that determine other workers' pay?" },
  { "question_id": "essay-12", "category": "Ethics and society", "prompt": "Is meritocracy a fair basis for organising society?" },
  { "question_id": "essay-13", "category": "Law and technology", "prompt": "Should individuals have a legal right to be forgotten online?" },
  { "question_id": "essay-14", "category": "Law and civil liberties", "prompt": "Is it justifiable for governments to use mass surveillance to prevent crime?" },
  { "question_id": "essay-15", "category": "Politics and economics", "prompt": "Should university education be free at the point of use?" },
  { "question_id": "essay-16", "category": "Ethics and animal welfare", "prompt": "Should animals have legal rights?" },
  { "question_id": "essay-17", "category": "Politics and ethics", "prompt": "Is nationalism compatible with a genuine commitment to universal human rights?" },
  { "question_id": "essay-18", "category": "Politics and democracy", "prompt": "Should there be a legal limit on how long a single person may serve as head of government?" },
  { "question_id": "essay-19", "category": "Politics and ethics", "prompt": "Is civil disobedience ever a legitimate political tool within a functioning democracy?" },
  { "question_id": "essay-20", "category": "Law and environment", "prompt": "Should companies be legally required to disclose the full environmental impact of their products?" },
  { "question_id": "essay-21", "category": "Economics and ethics", "prompt": "Is it fair that inheritance allows wealth to pass between generations largely untaxed?" },
  { "question_id": "essay-22", "category": "Law and civil liberties", "prompt": "Should prisoners retain the right to vote while incarcerated?" },
  { "question_id": "essay-23", "category": "Economics and environment", "prompt": "Does the pursuit of economic growth necessarily conflict with protecting the environment?" },
  { "question_id": "essay-24", "category": "Law and technology", "prompt": "Should advanced artificial intelligence systems be granted any form of legal personhood?" },
  { "question_id": "essay-25", "category": "Ethics and society", "prompt": "Is it possible to lead a fully ethical life within a society you believe to be structurally unjust?" }
];
