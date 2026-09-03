/* LNAT-style Section A passages.
   Format modelled on the real Pearson LNAT: short argumentative passages,
   each followed by several 5-option (A–E) multiple-choice questions
   testing comprehension, inference, argument structure and evaluation. */

const PASSAGES = [
  {
    id: "punishment",
    category: "Philosophy of Law",
    title: "The Ethics of Punishment",
    text: [
      "Why does the state have the right to punish? Two answers dominate the debate, and they pull in opposite directions. The retributivist holds that punishment is justified because the offender deserves it: a wrong has been done, and the scales are only righted by imposing a proportionate cost on the wrongdoer. On this view, punishment looks backwards. It is not primarily interested in what happens next; it is interested in what has already happened, and in restoring a moral balance that the crime disturbed. The consequentialist, by contrast, looks forward. Punishment is justified only insofar as it produces good outcomes — deterring future offences, incapacitating dangerous individuals, or reforming the offender so that they do not offend again. If a punishment achieved none of these things, the consequentialist would struggle to justify it, however much the offender might be said to deserve it.",
      "The trouble is that neither theory, taken alone, matches our actual practice or our actual intuitions. Pure retributivism seems to demand punishment even where it does no one any good — an unsettling conclusion when the offender is elderly, remorseful, and no longer a danger to anyone. Pure consequentialism, meanwhile, appears to license punishing the innocent whenever doing so would produce better aggregate outcomes: framing a scapegoat to quell a riot, for instance, might well minimise total harm, yet almost everyone recoils from the idea that this could be just. A theory that cannot rule out punishing a person known to be innocent has failed a basic test, whatever its other merits.",
      "This is why most serious accounts of punishment today are hybrids. They typically use retributive reasoning to answer the question of who may be punished — only the guilty, and only in proportion to their wrongdoing — while using consequentialist reasoning to answer the question of why we bother punishing at all, as a social institution, rather than simply expressing communal disapproval and leaving it there. Desert sets the ceiling and the floor; social benefit explains why we build prisons rather than shrines to disapproval. Critics of this compromise argue that it is not really a theory at all, merely two incompatible intuitions stapled together and left to fight it out case by case. Its defenders reply that ethics is rarely tidy, and that a framework which tracks our considered judgments in hard cases is worth more than a single elegant principle that does not.",
    ],
    questions: [
      {
        q: "Which of the following best expresses the main conclusion of the passage?",
        options: [
          "Retributivism is the only defensible justification for state punishment.",
          "Consequentialism should be abandoned because it can justify punishing the innocent.",
          "Most credible modern accounts of punishment combine retributive limits on who may be punished with consequentialist reasons for punishing at all.",
          "Punishment can never be fully justified by philosophical argument.",
          "The state has no right to punish anyone unless punishment deters future crime.",
        ],
        correct: 2,
        explanation: "The third paragraph states this directly: hybrid theories use retributive reasoning for 'who may be punished' and consequentialist reasoning for why society punishes at all. This is the passage's overall claim, not just a sub-point.",
      },
      {
        q: "According to the passage, what is the central objection to pure consequentialism about punishment?",
        options: [
          "It cannot explain why punishment should ever be proportionate to the offence.",
          "It relies too heavily on notions of desert that cannot be measured.",
          "It could in principle justify punishing someone known to be innocent if doing so produced better outcomes.",
          "It ignores the interests of victims entirely.",
          "It assumes offenders are always capable of being reformed.",
        ],
        correct: 2,
        explanation: "The second paragraph gives the scapegoat example precisely to illustrate that unconstrained consequentialism could licence punishing an innocent person, which the author calls a failure of 'a basic test'.",
      },
      {
        q: "Which of the following, if true, would most weaken the author's objection to pure retributivism in paragraph two?",
        options: [
          "Most retributivists agree that proportionality is difficult to measure precisely.",
          "Retributive theories can be, and standardly are, formulated to require that punishment also serve some independent social good, so pure retributivism as described is a caricature few actually hold.",
          "Some offenders who are elderly and remorseful still pose a small risk to society.",
          "Consequentialist theories also struggle with cases involving elderly offenders.",
          "Retribution and revenge are often confused in public debate.",
        ],
        correct: 1,
        explanation: "The objection depends on there being a 'pure' retributivist who would demand punishment even when pointless. If, as option B claims, that position is a caricature no one really holds, the objection loses its target and is weakened.",
      },
      {
        q: "In context, what does the author mean by describing the hybrid view as \"two incompatible intuitions stapled together\" (paragraph 3)?",
        options: [
          "This is the author's own assessment of why hybrid theories fail.",
          "This is a criticism the author reports from opponents of hybrid theories, which the author then goes on to answer.",
          "This is evidence that retributivism and consequentialism agree more than they disagree.",
          "This is a description of how prisons are physically designed.",
          "This is a claim that hybrid theories are logically self-contradictory and therefore meaningless.",
        ],
        correct: 1,
        explanation: "The sentence begins 'Critics of this compromise argue that...', signalling this is a view the author is reporting, not endorsing — and the very next sentence gives the defenders' reply, showing the author is presenting both sides rather than concluding the theory fails.",
      },
    ],
  },

  {
    id: "free-speech",
    category: "Political Philosophy",
    title: "Free Speech and Its Limits",
    text: [
      "John Stuart Mill's harm principle remains the starting point for almost every modern argument about free expression: the only justification for restricting what a person may say is to prevent harm to others; the fact that speech is offensive, false, or unpopular is not, by itself, sufficient. Mill's case rests on a further claim, one easy to overlook — that even false or repugnant opinions serve a purpose, because they force the holders of true opinions to understand and defend the grounds of their beliefs rather than holding them as 'dead dogma'. A society that suppresses bad arguments, on this view, does not thereby strengthen good ones; it merely allows them to atrophy.",
      "The difficulty lies in applying a principle framed for nineteenth-century pamphleteering to a world of algorithmically amplified speech reaching millions within hours. Mill assumed something like a marketplace of ideas in which falsehood, exposed to argument, would generally lose. Contemporary critics point out that this assumption depends on conditions — roughly equal access to an audience, and readers willing to update their views on the evidence — that modern platforms do not obviously supply. If a lie can be engineered to spread faster than any correction, the marketplace does not reliably favour the truth; it favours whatever is most shareable. On this basis, some argue that harm should be understood more broadly than Mill intended, to include the corrosion of public discourse itself, and not merely direct, identifiable injury to particular individuals.",
      "Yet widening the category of harm carries its own risk. Once 'harm' can mean the general degrading of debate rather than a specific injury to a specific person, almost any speech that someone finds destabilising becomes a candidate for restriction, and the principle loses the very feature that made it attractive: a reasonably clear line between what may and may not be censored. Defenders of a narrower reading of Mill do not deny that platforms have changed the practical conditions of debate; they insist only that the correct response is to change the conditions — through transparency about algorithms, for instance — rather than to change the principle, since the principle's chief virtue has always been that it is hard for the powerful to bend to their own convenience.",
    ],
    questions: [
      {
        q: "Which of the following best summarises the overall structure of the passage?",
        options: [
          "It states Mill's harm principle, presents a modern challenge to it, and then considers a risk in the proposed solution to that challenge.",
          "It argues that Mill's harm principle has been definitively refuted by the rise of social media.",
          "It gives two unrelated historical accounts of free speech law.",
          "It defends censorship of false information as necessary in the digital age.",
          "It shows that Mill's original argument was internally inconsistent.",
        ],
        correct: 0,
        explanation: "Paragraph 1 sets out Mill's principle; paragraph 2 presents the modern challenge (algorithmic amplification undermining the 'marketplace of ideas' assumption); paragraph 3 raises a risk with the response to that challenge (an overbroad definition of harm). No paragraph declares Mill refuted or endorses censorship outright.",
      },
      {
        q: "The passage suggests that Mill's argument for tolerating false opinions depends most directly on which assumption?",
        options: [
          "That false opinions are rare in any society.",
          "That the state should never regulate any form of communication.",
          "That exposing true beliefs to challenge from false ones strengthens rather than weakens the true beliefs.",
          "That most people who hold false opinions will eventually be punished by law.",
          "That offensive speech causes no harm whatsoever.",
        ],
        correct: 2,
        explanation: "Paragraph 1 explains that for Mill, confronting false or repugnant views forces true beliefs to be defended on their merits rather than held as 'dead dogma' — this is the mechanism by which tolerating bad arguments is said to benefit good ones.",
      },
      {
        q: "Which of the following, if true, would most strengthen the critics' argument in paragraph two?",
        options: [
          "Surveys show that most social media users are aware that misinformation exists online.",
          "Independent research finds that false stories on major platforms are shared significantly faster and further than true stories on the same topics.",
          "Some governments have introduced laws requiring platforms to remove illegal content within 24 hours.",
          "Mill wrote before the invention of the printing press became widespread in his own country.",
          "A minority of internet users still get their news primarily from print newspapers.",
        ],
        correct: 1,
        explanation: "The critics' claim is precisely that falsehood can outpace correction on modern platforms, undermining Mill's marketplace assumption. Direct evidence that false stories spread faster than true ones would substantiate exactly that claim.",
      },
      {
        q: "What is the author's own position, as best as it can be inferred from the passage as a whole?",
        options: [
          "The author sides entirely with those who wish to broaden the definition of harm.",
          "The author sides entirely with defenders of the narrow, traditional reading of the harm principle.",
          "The author presents both the challenge to Mill's principle and a risk in the proposed remedy, without explicitly declaring a final verdict.",
          "The author believes free speech should have no limits of any kind.",
          "The author believes the harm principle has no relevance to contemporary debate.",
        ],
        correct: 2,
        explanation: "The passage is structured as a balanced exposition: it takes the critics' challenge seriously in paragraph 2 but then, in paragraph 3, gives equal weight to a problem with widening the definition of harm, ending on the defenders' reply rather than a first-person conclusion. Nowhere does the author state a personal verdict.",
      },
    ],
  },

  {
    id: "animal-rights",
    category: "Ethics",
    title: "The Case for Animal Rights",
    text: [
      "Jeremy Bentham, founder of utilitarianism, put the question of animal ethics more sharply than almost anyone since: 'The question is not, Can they reason? nor, Can they talk? but, Can they suffer?' The argument that follows from this is deceptively simple. If moral status depends on the capacity to suffer, and many non-human animals plainly possess that capacity, then their suffering counts morally, and it is arbitrary to discount it merely because the creature suffering is not human. To do so, philosopher Peter Singer later argued, is a prejudice exactly analogous to racism or sexism: a preference for the interests of one's own group dressed up as a principled distinction. Singer coined the term 'speciesism' for this bias, and the label was chosen deliberately to make the comparison uncomfortable.",
      "Critics of this argument do not usually deny that animals suffer; the empirical case is by now overwhelming. Instead, they typically argue that suffering, while morally relevant, is not the only thing that is morally relevant, and that other capacities — the ability to make long-term plans, to hold moral obligations of one's own, to participate in a reciprocal moral community — legitimately ground a difference in status between humans and other animals. On this view, equal suffering need not warrant equal treatment if the beings in question differ in these further respects. A separate line of criticism grants the philosophical force of Singer's argument but questions how far it can actually travel: strict consistency might seem to demand vegetarianism, or more, yet very few people who accept the argument in the seminar room fully apply it at the dinner table, which critics take as evidence that something in the argument fails to track ordinary moral psychology, even if no one can say precisely what.",
      "Defenders of the argument respond that a gap between principle and practice is not itself evidence against the principle; slavery was wrong long before most of its beneficiaries acted as though it were. What matters, they insist, is whether the reasons offered for excluding animal suffering from moral consideration hold up, and so far no proposed criterion — reason, language, the capacity for reciprocity — succeeds in doing the one thing it needs to do: track the human/animal boundary without also excluding some humans, such as infants or those with severe cognitive impairments, whom almost no one is willing to exclude from moral concern.",
    ],
    questions: [
      {
        q: "What is the main function of the final sentence of the passage?",
        options: [
          "To introduce a new argument against Singer's position that has not yet been discussed.",
          "To summarise Bentham's original question.",
          "To support the argument's defenders by pointing out a weakness common to the alternative criteria offered by critics.",
          "To prove conclusively that animals have the same moral status as humans.",
          "To describe an unrelated historical case involving infants.",
        ],
        correct: 2,
        explanation: "The final sentence explains why 'no proposed criterion... succeeds': each fails to exclude animals without also excluding humans (infants, those with severe cognitive impairments) that virtually everyone still wants included. This bolsters the defenders' response given earlier in the same sentence/paragraph.",
      },
      {
        q: "Which of the following best describes what Singer means by 'speciesism', according to the passage?",
        options: [
          "The scientific classification of animals into different species.",
          "A prejudice that favours the interests of one's own species over others without a principled justification, comparable to racism or sexism.",
          "The belief that all species should be treated identically in every respect.",
          "A legal framework protecting endangered species.",
          "The idea that only rational beings can suffer.",
        ],
        correct: 1,
        explanation: "The passage states Singer 'coined the term speciesism' for the bias of discounting suffering because it is not human, calling it 'exactly analogous to racism or sexism'.",
      },
      {
        q: "Which of the following, if true, would most weaken the criticism in paragraph two that focuses on the gap between principle and dinner-table practice?",
        options: [
          "Most people who accept an ethical argument in principle also change their behaviour to match it within a few years, and the animal-ethics case is a notable exception explained mainly by habit and convenience rather than by any flaw in the argument.",
          "Slavery was abolished in some countries earlier than in others.",
          "Vegetarianism has become more common in recent decades.",
          "Bentham wrote about many ethical topics besides animal suffering.",
          "Some critics of Singer are themselves vegetarian.",
        ],
        correct: 0,
        explanation: "The criticism infers a flaw in the argument from the practice/principle gap. Option A directly undercuts that inference by offering an alternative explanation (habit and convenience) for the gap, and by noting this case is atypical — meaning the gap need not reflect a defect in the argument itself.",
      },
      {
        q: "Which capacities do the critics in paragraph two propose as grounds for distinguishing human from animal moral status?",
        options: [
          "The capacity to suffer and the capacity to feel pleasure.",
          "The capacity for long-term planning, moral obligation, and reciprocal participation in a moral community.",
          "The capacity for language alone.",
          "Physical size and strength.",
          "The capacity to be domesticated.",
        ],
        correct: 1,
        explanation: "Paragraph two lists these explicitly: 'the ability to make long-term plans, to hold moral obligations of one's own, to participate in a reciprocal moral community'.",
      },
    ],
  },

  {
    id: "democracy",
    category: "Political Philosophy",
    title: "Democracy and the Tyranny of the Majority",
    text: [
      "Alexis de Tocqueville travelled to America in 1831 expecting to admire its democracy and returned worried about one of its consequences. He had seen a system in which the majority's will was not merely powerful but nearly unchallengeable — a moral as well as political authority, such that dissent from majority opinion carried a social cost few were willing to pay. Tocqueville called this danger the 'tyranny of the majority', and his worry was not that democracies would be governed by tyrants in the old sense, but that they might produce a subtler and more pervasive form of conformity, one enforced not by law but by the sheer weight of public opinion pressing on anyone who strayed from it.",
      "The standard remedy, developed since Tocqueville's time, is constitutional: entrench certain rights beyond the reach of ordinary majorities, and hand their protection to institutions — courts, in most systems — that are deliberately insulated from electoral pressure. A bill of rights interpreted by an independent judiciary cannot simply be voted away by a temporary majority in the way an ordinary statute can. The trade-off is well known. Removing a decision from majority control is, on one description, protecting a minority from being outvoted on matters of fundamental right; on another description, it is a form of anti-democratic guardianship, in which unelected judges override the expressed will of the people who are supposed to be sovereign. Both descriptions can be true of the same act; which one dominates tends to depend on whether the observer approves of the particular right being protected.",
      "A further complication is that constitutional protection is not self-enforcing. Courts depend, in the end, on a political culture willing to treat their rulings as binding even when deeply unpopular; a constitution is, in this sense, a promise a society makes to its future self, and like any promise it can be broken if enough people decide the cost of keeping it is too high. This suggests that Tocqueville's worry was never fully answered by constitutional design alone. Institutions can raise the cost of majority tyranny and slow its progress, but the underlying question he posed — whether a culture that reveres the will of the majority can also sustain genuine respect for those who dissent from it — remains a matter of civic habit as much as of law.",
    ],
    questions: [
      {
        q: "Which of the following best captures Tocqueville's original concern, as described in the passage?",
        options: [
          "That American democracy would inevitably collapse into dictatorship.",
          "That courts would become too powerful relative to elected legislatures.",
          "That majority opinion in a democracy could exert an almost unchallengeable social and moral pressure that suppresses dissent, without needing to rely on law.",
          "That the American constitution contained too few checks on judicial power.",
          "That democracies are inherently less stable than monarchies.",
        ],
        correct: 2,
        explanation: "Paragraph 1 specifies the concern was not government by tyrants but 'a subtler and more pervasive form of conformity... enforced not by law but by the sheer weight of public opinion'.",
      },
      {
        q: "According to the passage, why can the same act of judicial rights-protection be described in two conflicting ways?",
        options: [
          "Because courts frequently change their legal reasoning without explanation.",
          "Because the same act can be seen either as protecting minorities from majority overreach or as unelected officials overriding popular sovereignty, and which framing prevails often tracks whether the observer supports the right in question.",
          "Because constitutions are usually written in deliberately ambiguous language.",
          "Because different countries have different legal systems.",
          "Because Tocqueville himself could not decide which description was correct.",
        ],
        correct: 1,
        explanation: "Paragraph 2 states both descriptions can be true of the same act, and that 'which one dominates tends to depend on whether the observer approves of the particular right being protected'.",
      },
      {
        q: "The final paragraph argues that constitutional protections are not 'self-enforcing'. Which of the following, if true, would most strengthen this claim?",
        options: [
          "A historical case in which a country's courts issued a ruling that the government and public simply refused to comply with, and the right in question was lost as a result.",
          "A case in which a court's ruling was unanimously welcomed by all political parties.",
          "Evidence that most constitutions are amended at least once per decade.",
          "A survey showing that most citizens cannot name their country's constitutional rights.",
          "A case in which a legislature passed a law that a court later struck down.",
        ],
        correct: 0,
        explanation: "The claim is that protection depends on a political culture willing to treat rulings as binding even when unpopular, and can be broken 'if enough people decide the cost of keeping it is too high'. A real case of a ruling being ignored, with the right subsequently lost, is direct evidence for exactly this mechanism.",
      },
      {
        q: "What is the primary purpose of the final paragraph in the context of the whole passage?",
        options: [
          "To introduce Tocqueville's concept of the tyranny of the majority for the first time.",
          "To argue that constitutions serve no useful purpose at all.",
          "To qualify the remedy described in paragraph two, suggesting that institutional design alone does not fully resolve the problem Tocqueville identified.",
          "To describe the historical origins of judicial review.",
          "To argue that courts should have unlimited power to overturn legislation.",
        ],
        correct: 2,
        explanation: "The final paragraph explicitly returns to Tocqueville's 'worry' from paragraph 1 and argues it 'was never fully answered by constitutional design alone', qualifying the remedy just described rather than introducing new terms or arguing against courts altogether.",
      },
    ],
  },

  {
    id: "experts",
    category: "Epistemology",
    title: "Should We Trust Experts?",
    text: [
      "Every society faces a version of the same problem: most of what matters to collective decision-making is too technical for any individual, including most decision-makers, to verify personally. We cannot each re-run the clinical trials behind a vaccine or independently model the climate. At some point, trusting a conclusion means trusting the process and the people who produced it, rather than the evidence itself, which we are rarely in a position to examine first-hand. This is not a flaw in modern life; it is a structural feature of any society complex enough to have a division of intellectual labour, and it was true, in a smaller way, even in societies with no science at all — most people have always trusted the blacksmith about metal and the midwife about birth.",
      "The difficulty is that trust in experts is not distributed evenly, and the gap is not obviously explained by ignorance alone. Deference to expertise tends to fall precisely where its conclusions are politically inconvenient, and rise where they are not — a pattern that suggests something other than a simple failure to understand evidence is often at work. Motivated reasoning offers one explanation: people are more critical of evidence that threatens a conclusion they are attached to, and less critical of evidence that supports it, regardless of their general capacity to reason well. This would predict, correctly, that scepticism of expert consensus clusters by identity group and by issue in ways that a pure knowledge deficit could not.",
      "None of this licenses the opposite error, however, which is treating expertise as though it settles every question by itself. Experts can be right about the facts within their competence and wrong, or simply silent, about the values that should guide what to do with those facts — whether a given level of risk is acceptable, for instance, is not itself a scientific question, however much science can usefully inform it. Nor are expert communities immune to their own institutional biases, including a tendency to underweight unfashionable hypotheses and a resistance to publicly revising positions once they have hardened into consensus. Sound public reasoning, then, has to hold two things at once: a strong general presumption in favour of expert consensus on empirical questions, and an alertness to the difference between an empirical claim and the value judgment that so often rides alongside it.",
    ],
    questions: [
      {
        q: "Which of the following best states the main conclusion of the passage?",
        options: [
          "Expert consensus should never be questioned by non-experts.",
          "Trust in experts is entirely irrational and driven only by identity.",
          "Sound public reasoning requires generally deferring to expert consensus on factual questions, while remaining alert to the separate value judgments that often accompany expert claims.",
          "Experts are usually wrong about matters within their own competence.",
          "Only trained scientists are capable of reasoning about risk.",
        ],
        correct: 2,
        explanation: "This is stated almost verbatim as the closing sentence of the passage: reasoning must hold together 'a strong general presumption in favour of expert consensus' and 'alertness to the difference between an empirical claim and the value judgment'.",
      },
      {
        q: "What evidence does the passage offer for the claim that scepticism of experts is not simply explained by ignorance?",
        options: [
          "The fact that experts sometimes disagree with one another.",
          "The observation that deference to expertise tends to fall specifically where conclusions are politically inconvenient and rise where they are not, a pattern a pure knowledge deficit would not predict.",
          "The fact that midwives and blacksmiths were trusted historically.",
          "A claim that most people cannot pass a basic science test.",
          "The observation that experts are sometimes wrong.",
        ],
        correct: 1,
        explanation: "Paragraph 2 makes exactly this argument: the pattern of trust tracking political convenience 'suggests something other than a simple failure to understand evidence is often at work'.",
      },
      {
        q: "According to the passage, why is it a mistake to treat expertise as settling 'every question by itself'?",
        options: [
          "Because experts are frequently dishonest about their findings.",
          "Because expert competence typically concerns empirical facts, while decisions often also require value judgments — such as what level of risk is acceptable — that are not themselves scientific questions.",
          "Because most experts disagree with each other on basic facts.",
          "Because expertise is an outdated concept in modern society.",
          "Because non-experts always have better judgment than experts.",
        ],
        correct: 1,
        explanation: "Paragraph 3 states experts 'can be right about the facts... and wrong, or simply silent, about the values', and gives risk acceptability as an example of a value question science can inform but not settle alone.",
      },
      {
        q: "Which of the following, if true, would most strengthen the passage's claim that expert communities are 'not immune to their own institutional biases'?",
        options: [
          "A study finding that established scientific fields sometimes take many years to accept a well-evidenced but unconventional finding, and that researchers who proposed it early in their careers report facing greater difficulty publishing than those who proposed conventional findings.",
          "A study showing that most scientific findings are eventually replicated successfully.",
          "A survey in which the general public reports high trust in scientists.",
          "Evidence that funding for scientific research has increased over the past decade.",
          "A finding that experts in different fields rarely collaborate with one another.",
        ],
        correct: 0,
        explanation: "The claim concerns a bias toward underweighting unfashionable hypotheses and resisting revision of hardened consensus. Direct evidence of unconventional-but-correct findings facing extra publication difficulty is precisely the kind of institutional bias described.",
      },
    ],
  },

  {
    id: "moral-luck",
    category: "Ethics",
    title: "The Problem of Moral Luck",
    text: [
      "Consider two drivers, equally tired, equally careless, who each run a red light. One street is empty; the other has a pedestrian crossing at just the wrong moment. The first driver arrives home shaken but unpunished. The second driver kills someone and may spend years in prison. The choices made by each were identical; the difference in outcome was pure chance. And yet we do not, in practice, judge the two drivers the same way — the second is typically prosecuted for a serious offence, while the first may face nothing more than a private sense of relief. Philosophers call this puzzle 'moral luck': cases in which factors entirely outside an agent's control appear to affect how much moral blame, or legal punishment, that agent receives.",
      "This should be troubling for a widely held intuition, sometimes traced to Kant, that moral responsibility should track only what is within an agent's control — their intentions and choices — and not the accidents of consequence that follow from them. If two people make the same choice for the same reasons, the intuition suggests, they are equally blameworthy, whatever happens afterwards. Moral luck appears to violate this directly, and it does so not in some exotic thought experiment but in a pattern of judgment — about drivers, about attempted versus completed crimes, about botched versus successful negligence — that most legal systems and most ordinary moral thinking simply take for granted.",
      "One response is to bite the bullet: perhaps outcomes really do matter morally, over and above intentions, and the intuition that only control should matter is simply mistaken, a piece of philosophical tidiness that ordinary moral practice was never obliged to respect. A second response tries to preserve the control principle by treating differential punishment as tracking something other than blame — the second driver's greater legal liability might reflect society's interest in the outcome, such as compensating the victim's family or expressing the value it places on a lost life, rather than reflecting a judgment that the driver is more blameworthy as a person. Neither response fully dissolves the discomfort, which may be the point: moral luck endures as a puzzle not because no solution has been proposed, but because every proposed solution requires giving up an intuition that seemed, before we looked closely, entirely secure.",
    ],
    questions: [
      {
        q: "Which of the following best defines 'moral luck' as the term is used in the passage?",
        options: [
          "The belief that lucky people are morally superior to unlucky people.",
          "Cases in which factors outside an agent's control appear to affect the degree of moral blame or punishment that agent receives.",
          "A legal defence available to defendants who acted under duress.",
          "The idea that all outcomes are equally the result of chance.",
          "A theory that only intentions, and never outcomes, should determine punishment.",
        ],
        correct: 1,
        explanation: "This is the definition given directly at the end of paragraph 1: 'cases in which factors entirely outside an agent's control appear to affect how much moral blame, or legal punishment, that agent receives.'",
      },
      {
        q: "The passage states that the intuition under threat from moral luck is 'sometimes traced to Kant'. What is that intuition?",
        options: [
          "That punishment should always be proportionate to social harm.",
          "That moral responsibility should track only what is within an agent's control, such as intentions and choices, not the consequences that follow by chance.",
          "That all drivers who run red lights should receive identical sentences regardless of outcome.",
          "That luck plays no role in human life.",
          "That legal systems should ignore intentions entirely.",
        ],
        correct: 1,
        explanation: "Paragraph 2 states the intuition explicitly: responsibility 'should track only what is within an agent's control — their intentions and choices — and not the accidents of consequence that follow from them'.",
      },
      {
        q: "Which of the following best describes the relationship between the two 'responses' outlined in the final paragraph?",
        options: [
          "They are complementary and can both be fully accepted at once.",
          "They are two different ways of addressing the same tension, each of which requires giving up part of what seemed, at first, an intuitive and secure position.",
          "The first response is presented as clearly correct and the second as clearly mistaken.",
          "The second response proves that moral luck is not a real phenomenon.",
          "They are unrelated proposals addressing two separate problems.",
        ],
        correct: 1,
        explanation: "The passage's final sentence states that 'every proposed solution requires giving up an intuition that seemed... entirely secure' — this applies to both responses, neither of which is endorsed as fully resolving the puzzle.",
      },
      {
        q: "Which of the following, if true, would most weaken the second response described in the final paragraph (that differential punishment reflects society's interest in outcomes rather than a judgment about the driver's blameworthiness)?",
        options: [
          "Courts and juries frequently describe the second driver, in explicit terms, as a worse person or as more culpable than someone who merely attempted the same reckless act without harmful consequence, not merely as someone whose act had graver social consequences.",
          "Compensation for victims' families varies significantly between legal systems.",
          "Some legal systems have abolished the distinction between attempted and completed crimes.",
          "The first driver in the example also experiences a form of psychological harm.",
          "Most drivers who run red lights are never caught at all.",
        ],
        correct: 0,
        explanation: "The second response claims the extra punishment tracks social interest in outcomes, not personal blameworthiness. Evidence that courts and juries explicitly judge the second driver as more culpable as a person directly undercuts that claim.",
      },
    ],
  },

  {
    id: "privacy",
    category: "Law and Technology",
    title: "Privacy in the Digital Age",
    text: [
      "Privacy law across most jurisdictions was built for a world of discrete, physical intrusions: a search of a house, the opening of a letter, the tapping of a single telephone line. Each of these actions is bounded in time and place, which made it relatively straightforward to ask whether a particular act of surveillance was reasonable and to require a warrant before it occurred. The data generated by ordinary digital life does not fit this model. A single person's location history, purchase records, and browsing activity are collected continuously, by dozens of different companies, none of which needs to break into anything to obtain them — the data is simply handed over, one click at a time, as the condition of using a service.",
      "This creates what some scholars call the 'mosaic problem'. No single piece of this data may reveal much on its own; knowing that someone visited a pharmacy, a lawyer's office, and a particular neighbourhood on three separate days tells you comparatively little in isolation. Aggregated and cross-referenced, however, the same data points can reconstruct a detailed picture of a person's health, legal situation, and associations that they never consented to reveal and might reasonably expect to have remained private. The law's traditional focus on individual, discrete acts of intrusion struggles to regulate a harm that arises only from aggregation — no single company's individual collection may violate any existing rule, even though the composite picture assembled across companies plainly would, if any one actor had gathered it directly.",
      "Proposed remedies generally fall into two camps. The first extends the logic of consent, requiring clearer disclosure and opt-in permission for each category of data collected; critics note that this places the burden on individuals to police an ecosystem too complex for anyone to meaningfully evaluate, producing consent in name only. The second shifts the burden onto data collectors themselves, imposing duties — limiting what may be collected or how long it may be retained, regardless of whether a user technically agreed — that do not depend on individual consent at all. The choice between these approaches is not merely technical; it reflects a deeper disagreement about whether privacy is best protected as an individual right the user must actively exercise, or as a structural condition that the law should guarantee independently of what any single user agrees to click through.",
    ],
    questions: [
      {
        q: "What is the 'mosaic problem', as defined in the passage?",
        options: [
          "The difficulty of storing large quantities of digital data securely.",
          "The fact that individually harmless pieces of data can, when aggregated and cross-referenced, reveal sensitive information that no single piece revealed on its own.",
          "The problem of companies losing data to hackers.",
          "The difficulty courts have in issuing warrants quickly enough.",
          "A legal requirement that companies delete old customer data.",
        ],
        correct: 1,
        explanation: "Paragraph 2 defines this directly: individual data points 'tell you comparatively little in isolation', but 'aggregated and cross-referenced' they 'can reconstruct a detailed picture' that was never consented to.",
      },
      {
        q: "According to the passage, why does traditional privacy law struggle to address the mosaic problem?",
        options: [
          "Because it was designed to regulate discrete, bounded intrusions, whereas the mosaic problem's harm arises only from the aggregation of many small, individually lawful collections across different actors.",
          "Because no laws currently exist to regulate data collection of any kind.",
          "Because courts have ruled that digital privacy is not a legal right.",
          "Because companies actively break existing surveillance laws.",
          "Because the harm always comes from a single large-scale data breach.",
        ],
        correct: 0,
        explanation: "Paragraph 2's final sentence states that 'no single company's individual collection may violate any existing rule, even though the composite picture assembled across companies plainly would' — the law targets discrete acts, not aggregation.",
      },
      {
        q: "The passage describes two proposed remedies. What is the main criticism levelled at the first (consent-based) approach?",
        options: [
          "It is too expensive for companies to implement.",
          "It places the burden of understanding and policing an overly complex data ecosystem on individual users, producing consent that is only nominal.",
          "It has never been attempted in any jurisdiction.",
          "It would make it illegal for companies to collect any data at all.",
          "It only applies to government surveillance, not private companies.",
        ],
        correct: 1,
        explanation: "Paragraph 3 states critics' objection precisely: it 'places the burden on individuals to police an ecosystem too complex for anyone to meaningfully evaluate, producing consent in name only'.",
      },
      {
        q: "Which of the following, if true, would most strengthen the case for the second remedy (duties on data collectors independent of consent) over the first?",
        options: [
          "A study finding that even highly educated, motivated users are unable to correctly predict what a typical set of privacy disclosures permits a company to do with their data.",
          "A survey finding that most users say they trust technology companies.",
          "Evidence that opt-in consent forms have become shorter in recent years.",
          "A finding that most companies comply with the consent rules that currently exist.",
          "Evidence that some users read privacy policies in full before agreeing to them.",
        ],
        correct: 0,
        explanation: "The case against consent-based approaches is that the ecosystem is too complex for users to meaningfully evaluate. Direct evidence that even motivated, educated users cannot predict what disclosures actually permit strengthens exactly this point, favouring duties that do not depend on consent.",
      },
    ],
  },

  {
    id: "meritocracy",
    category: "Social Philosophy",
    title: "Is Meritocracy a Myth?",
    text: [
      "Meritocracy promises that reward should track effort and ability rather than birth. Measured against the alternatives it replaced — inherited titles, closed guilds, and outright discrimination on grounds having nothing to do with capability — it represents genuine moral progress, and few people, however critical of how it now operates, wish to return to the systems it displaced. The trouble is not with the ideal but with how far actual societies fall short of it, and with a further question that the ideal itself struggles to answer even in principle: how much of what we call 'merit' is itself the product of unearned advantage.",
      "A child born into a stable, resourced household typically receives, without any effort of their own, better nutrition, more stable schooling, tutoring when needed, and a family network that can absorb early setbacks without derailing a career. If that child later outperforms a peer who received none of these things, it becomes difficult to say with confidence that the difference in outcome reflects a difference in some pure underlying merit, rather than reflecting, in significant part, an accumulated head start that has simply been relabelled as merit once it shows up in test scores or job offers. The philosopher John Rawls pressed this point by asking what principles of distribution people would choose from behind a 'veil of ignorance', not knowing in advance which position — talented or untalented, advantaged or disadvantaged — they themselves would occupy; his answer was that few would gamble on a system rewarding traits as arbitrary, from the individual's own point of view, as the family one happens to be born into.",
      "None of this shows that effort and ability are irrelevant, or that a system with no concept of merit would be preferable; a lottery for university places or jobs would introduce a different injustice, not eliminate injustice altogether. What it does show is that a society cannot simply declare itself meritocratic and thereby earn the moral standing the term implies; that standing has to be earned by the much harder work of equalising, as far as possible, the starting conditions from which merit is then allowed to differentiate people, since a race is only fair in proportion to how fair the starting line was.",
    ],
    questions: [
      {
        q: "Which of the following best states the main conclusion of the passage?",
        options: [
          "Meritocracy should be abandoned entirely in favour of a lottery system.",
          "Meritocracy is a moral improvement on what it replaced, but a society only earns the moral credit the term implies by equalising starting conditions, not merely by adopting the label.",
          "Effort and ability play no role in determining outcomes.",
          "John Rawls proved that all inequality is unjust.",
          "Inherited wealth should be legally abolished.",
        ],
        correct: 1,
        explanation: "This is the passage's conclusion, stated in the final paragraph: meritocracy cannot simply be declared; the moral standing it implies 'has to be earned by the much harder work of equalising... the starting conditions'.",
      },
      {
        q: "What role does the reference to Rawls's 'veil of ignorance' play in the passage's argument?",
        options: [
          "It is used to prove that all societies are already fair.",
          "It is used to support the claim that rewarding traits as arbitrary as one's family of birth is not a principle people would rationally choose if they did not know their own position in advance.",
          "It is presented as a flawed thought experiment the author goes on to reject.",
          "It is used to argue that talent should be the only basis for reward.",
          "It has no clear connection to the surrounding argument.",
        ],
        correct: 1,
        explanation: "The passage uses Rawls's thought experiment directly to support the point being made: 'few would gamble on a system rewarding traits as arbitrary... as the family one happens to be born into' — reinforcing the paragraph's claim about unearned advantage.",
      },
      {
        q: "Which of the following, if true, would most weaken the argument in paragraph two that advantaged upbringing undermines claims about 'pure' merit?",
        options: [
          "Large-scale studies consistently find that, once early-life nutrition, schooling quality, and family stability are statistically controlled for, differences in later achievement between individuals are reduced only marginally, with most of the gap explained by other factors.",
          "Some successful people report having had difficult childhoods.",
          "Private tutoring has become more widely available in recent years.",
          "Most people believe they achieved their success through hard work alone.",
          "Inherited wealth is taxed differently in different countries.",
        ],
        correct: 0,
        explanation: "The paragraph's argument depends on early-life advantage explaining a substantial part of later outcome differences. Evidence that controlling for these factors barely changes the achievement gap would directly undercut that claim.",
      },
      {
        q: "The author states that 'a lottery for university places or jobs would introduce a different injustice, not eliminate injustice altogether.' What is the primary purpose of this statement?",
        options: [
          "To argue that lotteries are already used successfully in most university admissions systems.",
          "To pre-empt the objection that the author is arguing for abandoning merit-based selection altogether, by clarifying that the argument targets false claims to meritocracy, not the concept of merit itself.",
          "To prove that Rawls's veil of ignorance thought experiment was mistaken.",
          "To introduce a new topic unrelated to the rest of the passage.",
          "To argue that university admissions should be decided randomly.",
        ],
        correct: 1,
        explanation: "This sentence functions as a clarification/concession: the author is not arguing merit is irrelevant or that a lottery would be better, only that a society must actually equalise starting conditions to earn the term 'meritocratic'. It heads off a misreading of the argument as anti-merit.",
      },
    ],
  },

  {
    id: "civil-disobedience",
    category: "Political Philosophy",
    title: "When Is Civil Disobedience Justified?",
    text: [
      "Civil disobedience occupies an uneasy position between ordinary lawbreaking and revolution. Unlike the criminal, the civil disobedient typically breaks the law openly, accepts the legal consequences, and appeals — however indirectly — to the same shared sense of justice that the legal system claims to embody. Unlike the revolutionary, the civil disobedient does not seek to overthrow the system of law itself, only to change a particular law or policy within it. John Rawls, in perhaps the most influential modern account, defined civil disobedience as a public, non-violent, conscientious act contrary to law, undertaken to bring about a change in law or policy, and undertaken with a willingness to accept the legal penalties that follow.",
      "Each of Rawls's conditions does real work, and each has been contested. The requirement of non-violence distinguishes civil disobedience from other forms of resistance, but critics ask why violence against property alone, causing no injury to any person, should be placed in the same moral category as violence against people; a blockade that damages no one but delays a shipment, for instance, seems to many a difficult case for a strict violence/non-violence line to classify cleanly. The requirement of publicity and acceptance of punishment is defended on the grounds that it demonstrates fidelity to the legal system overall, even while disobeying one part of it, and thereby distinguishes principled protest from mere evasion; but this requirement arguably makes the most sense within a reasonably just society whose legal system deserves that fidelity, and looks considerably less obviously required when applied to a regime whose legitimacy is itself in question.",
      "This last point suggests that civil disobedience, as Rawls describes it, is really a theory built for the hard cases within an otherwise broadly just society — one where most laws are legitimate and one particular law or policy is being challenged as an exception. It is less clear the theory was ever meant to describe, or should be used to judge, resistance to a system whose basic legitimacy is itself the point in dispute. Applying a framework built for the first situation to the second may quietly smuggle in the assumption that the system being resisted deserves the general deference the framework presupposes — an assumption that, in the second case, is exactly what is being contested.",
    ],
    questions: [
      {
        q: "According to the passage, what distinguishes the civil disobedient from both the ordinary criminal and the revolutionary?",
        options: [
          "The civil disobedient never breaks any law.",
          "The civil disobedient breaks the law openly and accepts punishment (unlike the criminal, who typically conceals wrongdoing) while seeking to change a specific law or policy rather than overthrow the legal system itself (unlike the revolutionary).",
          "The civil disobedient always acts violently to draw attention to their cause.",
          "The civil disobedient acts in secret to avoid legal consequences.",
          "The civil disobedient seeks to replace the entire legal system with a new one.",
        ],
        correct: 1,
        explanation: "Paragraph 1 draws exactly this two-part contrast: openness and acceptance of punishment distinguish the disobedient from the criminal, while not seeking to overthrow the system distinguishes them from the revolutionary.",
      },
      {
        q: "What objection does the passage raise against Rawls's requirement of strict non-violence?",
        options: [
          "That non-violence is impossible to achieve in practice.",
          "That it is unclear why violence against property alone, with no injury to any person, should necessarily be classed the same as violence against people, making some cases hard to classify under a strict violence/non-violence line.",
          "That Rawls never actually included non-violence as a condition.",
          "That violent protest is always more effective than non-violent protest.",
          "That property damage is always morally worse than injury to a person.",
        ],
        correct: 1,
        explanation: "Paragraph 2 raises exactly this: critics 'ask why violence against property alone, causing no injury to any person, should be placed in the same moral category as violence against people'.",
      },
      {
        q: "What is the main point being made in the final paragraph of the passage?",
        options: [
          "That Rawls's theory of civil disobedience was designed for challenges within a broadly legitimate legal system, and applying it to resistance against a system whose basic legitimacy is itself disputed may wrongly assume the deference the theory presupposes.",
          "That civil disobedience is never justified under any circumstances.",
          "That Rawls's theory has been universally rejected by later philosophers.",
          "That revolutionary movements should always follow Rawls's conditions.",
          "That non-violence is the least important of Rawls's conditions.",
        ],
        correct: 0,
        explanation: "This is stated directly: the theory 'is really a theory built for the hard cases within an otherwise broadly just society', and applying it elsewhere 'may quietly smuggle in the assumption... that is exactly what is being contested' in cases where legitimacy itself is disputed.",
      },
      {
        q: "Which of the following, if true, would most strengthen the argument made in the final paragraph?",
        options: [
          "A historical case in which resisters against a regime widely regarded as illegitimate were criticised by outside observers, using Rawlsian language, for failing to accept legal punishment — even though accepting punishment from that regime was seen by the resisters themselves as conceding a legitimacy they explicitly denied.",
          "A case in which protesters within a stable democracy accepted arrest for blocking a road.",
          "A survey showing that most people support non-violent protest in general.",
          "Evidence that Rawls revised his theory later in his career.",
          "A case in which a government granted amnesty to protesters after a change in the law.",
        ],
        correct: 0,
        explanation: "The final paragraph's concern is that applying Rawls's framework to resistance against a disputed regime 'smuggles in' an assumption of legitimacy. A real case where this exact tension occurred — resisters penalised by Rawlsian standards for refusing to concede legitimacy — is direct evidence for that concern.",
      },
    ],
  },
];

const ESSAY_PROMPTS = [
  "Should judges be elected rather than appointed?",
  "\"The law should never lag behind changes in public morality.\" Discuss.",
  "Is there a moral obligation to obey the law, even when you believe it is unjust?",
  "Should juries be replaced by panels of professional judges?",
  "Is it ever justified to break the law in pursuit of a political cause?",
  "\"Free speech should have no legal limits.\" Do you agree?",
  "Does the presumption of innocence still make sense in an age of viral evidence and trial by media?",
  "Should there be a legal limit on how much wealth one person can inherit?",
  "Is punishment ever justified once it has ceased to serve any deterrent or rehabilitative purpose?",
  "\"Equality of opportunity is a more coherent goal than equality of outcome.\" Discuss.",
  "Should artificial intelligence systems ever be granted legal personhood?",
  "Is there a meaningful moral distinction between an act and an omission?",
  "\"A right to privacy cannot survive the smartphone.\" Do you agree?",
  "Should voting be compulsory?",
  "Is it justifiable for a democracy to entrench certain rights beyond the reach of a majority vote?",
];
