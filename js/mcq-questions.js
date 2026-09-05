/* MCQ Quick Practice — standalone reasoning questions, each with its own
   short passage. Schema per question:
   { question_id, topic, passage, prompt, options: [{id,text}], correct_option_id, explanation, difficulty, type }
   New questions get appended to this array — nothing else needs to change;
   the MCQ list and practice UI are fully data-driven. */

const MCQ_QUESTIONS = [
{
  "question_id": "standalone-161",
  "topic": "The paradox of soft power in international relations",
  "passage": "A country's cultural influence, films, universities, cuisine, can shape other nations' preferences and policies more durably than military coercion, yet a state that deliberately and heavy-handedly promotes its own culture as propaganda often finds the effort backfires, since soft power depends on its influence appearing organic and unforced rather than obviously state-directed.",
  "prompt": "The passage's central point is that soft power's effectiveness depends on:",
  "options": [
    {
      "id": "A",
      "text": "Appearing organic and unforced rather than obviously state-directed propaganda"
    },
    {
      "id": "B",
      "text": "Being as heavy-handed and obvious as possible"
    },
    {
      "id": "C",
      "text": "Relying exclusively on military coercion"
    },
    {
      "id": "D",
      "text": "Having no relationship to a country's culture whatsoever"
    },
    {
      "id": "E",
      "text": "Being deployed only by states with no cultural influence"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the paradox: overt promotion undermines the organic quality soft power depends on.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-162",
  "topic": "The median voter theorem in electoral competition",
  "passage": "In a simple two-party system with voters arrayed along a single left-right spectrum, both parties have an incentive to converge toward the preferences of the voter positioned exactly in the middle of that spectrum, since capturing the median voter's support is typically sufficient to win a majority in a two-candidate race.",
  "prompt": "The passage implies that electoral competition in this model tends to produce:",
  "options": [
    {
      "id": "A",
      "text": "Convergence of both parties toward the median voter's preferences"
    },
    {
      "id": "B",
      "text": "Divergence of both parties toward the most extreme positions available"
    },
    {
      "id": "C",
      "text": "No relationship between party positioning and voter preferences"
    },
    {
      "id": "D",
      "text": "A guarantee that only one party will ever contest any election"
    },
    {
      "id": "E",
      "text": "Convergence toward the preferences of the most extreme voters"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the theorem's prediction: convergence toward the median voter.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-163",
  "topic": "The broken window fallacy in disaster economics",
  "passage": "After a storm shatters a shopkeeper's window, some argue the resulting repair spending stimulates the economy by creating work for the glazier. This overlooks the fact that the shopkeeper's money, had the window not broken, would have been spent on something else entirely, meaning the disaster destroyed wealth rather than creating any net new economic activity.",
  "prompt": "The passage's criticism of the stimulus argument centres on:",
  "options": [
    {
      "id": "A",
      "text": "Overlooking the alternative spending the shopkeeper's money would otherwise have funded"
    },
    {
      "id": "B",
      "text": "A claim that glaziers never actually receive any payment for repairs"
    },
    {
      "id": "C",
      "text": "An argument that storms always increase net economic activity"
    },
    {
      "id": "D",
      "text": "A demonstration that windows never need to be repaired after a storm"
    },
    {
      "id": "E",
      "text": "A point unrelated to how the shopkeeper's money would otherwise be spent"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the broken window fallacy: ignoring the unseen alternative use of the funds.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-164",
  "topic": "Deadweight loss from price controls",
  "passage": "A price ceiling set below the market-clearing price creates a gap between the quantity demanded at the lower price and the quantity suppliers are willing to provide, producing a shortage in which some potential mutually beneficial transactions, between a willing buyer and a willing seller at a price both would accept, never actually occur.",
  "prompt": "The passage implies that a binding price ceiling produces an economic cost in the form of:",
  "options": [
    {
      "id": "A",
      "text": "Mutually beneficial transactions that never occur due to the resulting shortage"
    },
    {
      "id": "B",
      "text": "An excess supply of the good beyond what buyers demand"
    },
    {
      "id": "C",
      "text": "No effect whatsoever on the quantity transacted"
    },
    {
      "id": "D",
      "text": "A guarantee that all potential transactions still occur"
    },
    {
      "id": "E",
      "text": "An increase in the market-clearing price itself"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the deadweight loss: foregone mutually beneficial transactions.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-165",
  "topic": "The Laffer curve and tax revenue optimisation",
  "passage": "At a tax rate of zero, government revenue is obviously zero, and at a tax rate of one hundred percent, revenue also approaches zero as the incentive to engage in taxed activity collapses entirely, implying that somewhere between these two extremes lies a rate that maximises total revenue, though economists disagree considerably about where that specific rate actually falls for any given tax.",
  "prompt": "The passage's argument establishes that maximum revenue occurs:",
  "options": [
    {
      "id": "A",
      "text": "At some rate between zero and one hundred percent, though its exact location is genuinely disputed"
    },
    {
      "id": "B",
      "text": "Exactly at a tax rate of one hundred percent"
    },
    {
      "id": "C",
      "text": "Exactly at a tax rate of zero percent"
    },
    {
      "id": "D",
      "text": "At a rate that never actually exists for any tax"
    },
    {
      "id": "E",
      "text": "At a rate economists have universally agreed upon"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: revenue peaks somewhere between the extremes, but the exact rate is disputed.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-166",
  "topic": "Crowding out in public investment debates",
  "passage": "Government borrowing to fund public investment can, according to some economists, raise interest rates enough to discourage a roughly offsetting amount of private investment that would otherwise have occurred, a concern critics note applies with much less force during a recession, when private investment is already depressed and idle savings are abundant.",
  "prompt": "The critics' response in the passage suggests the crowding-out concern is:",
  "options": [
    {
      "id": "A",
      "text": "Weaker under recessionary conditions than the general concern might suggest"
    },
    {
      "id": "B",
      "text": "Equally strong regardless of the state of the broader economy"
    },
    {
      "id": "C",
      "text": "Entirely irrelevant to any economic condition whatsoever"
    },
    {
      "id": "D",
      "text": "Strongest specifically during a recession"
    },
    {
      "id": "E",
      "text": "Unrelated to the level of private investment or savings"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: the concern applies with less force during a recession.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-167",
  "topic": "The multiplier effect in fiscal stimulus",
  "passage": "A government spending increase can generate economic activity beyond its initial value, since the workers and firms who first receive the spending in turn spend a portion of it themselves, generating a further round of income and spending, a chain that continues, at a diminishing rate, until the effect eventually peters out.",
  "prompt": "The passage implies that a fiscal stimulus's total economic effect can exceed its initial value because:",
  "options": [
    {
      "id": "A",
      "text": "Recipients of the initial spending in turn spend a portion of it, generating further rounds of economic activity"
    },
    {
      "id": "B",
      "text": "The initial spending is never actually received by anyone"
    },
    {
      "id": "C",
      "text": "Government spending always produces exactly its initial value in economic activity"
    },
    {
      "id": "D",
      "text": "Recipients of spending never spend any portion of it themselves"
    },
    {
      "id": "E",
      "text": "The effect increases indefinitely without ever diminishing"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the mechanism behind the multiplier effect.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-168",
  "topic": "Purchasing power parity misconceptions in currency comparison",
  "passage": "Comparing two countries' average incomes using only the market exchange rate can be misleading, since the same amount of money buys considerably more of many locally produced goods and services in a lower-cost country than the raw exchange-rate conversion alone would suggest, a gap purchasing power parity adjustments attempt to correct for.",
  "prompt": "The passage's central concern is that market exchange rates alone may:",
  "options": [
    {
      "id": "A",
      "text": "Understate the real purchasing power of income in a lower-cost country"
    },
    {
      "id": "B",
      "text": "Always accurately reflect the real purchasing power of any income"
    },
    {
      "id": "C",
      "text": "Overstate the purchasing power of income in every country equally"
    },
    {
      "id": "D",
      "text": "Have no relationship to the cost of locally produced goods"
    },
    {
      "id": "E",
      "text": "Require no adjustment of any kind for meaningful comparison"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the gap purchasing power parity is designed to correct.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-169",
  "topic": "The paradox of value (diamond-water paradox)",
  "passage": "Water, essential to survival, typically commands a far lower price than diamonds, which serve no comparable survival function, a puzzle resolved by recognising that price tracks the value of an additional marginal unit of a good, not the total value of the entire category, and water's abundance makes each additional unit worth relatively little despite the category's overall indispensability.",
  "prompt": "The passage resolves the apparent paradox by distinguishing between:",
  "options": [
    {
      "id": "A",
      "text": "The value of an additional marginal unit and the total value of an entire category of good"
    },
    {
      "id": "B",
      "text": "Two categories of good that are identical in every economically relevant respect"
    },
    {
      "id": "C",
      "text": "A claim that water has no value of any kind"
    },
    {
      "id": "D",
      "text": "A claim that diamonds serve an essential survival function"
    },
    {
      "id": "E",
      "text": "No meaningful distinction of any kind"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the marginal-versus-total value distinction resolving the classic paradox.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-170",
  "topic": "The tragedy of the commons in shared office resources",
  "passage": "A shared office refrigerator, kitchen, or meeting room, used by many employees with no individual ownership or direct cost for use, tends to become disproportionately messy or overbooked relative to resources with a single clear owner, since no individual user bears the full cost of their own contribution to the shared resource's degradation.",
  "prompt": "The passage's example illustrates a small-scale version of a pattern discussed elsewhere in this set concerning:",
  "options": [
    {
      "id": "A",
      "text": "The tragedy of the commons, where shared, unowned resources tend toward overuse or degradation"
    },
    {
      "id": "B",
      "text": "A claim that shared resources are always better maintained than privately owned ones"
    },
    {
      "id": "C",
      "text": "An argument that no individual ever uses any shared office resource"
    },
    {
      "id": "D",
      "text": "A demonstration that shared resources never actually degrade"
    },
    {
      "id": "E",
      "text": "A point unrelated to ownership structure of any kind"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a small-scale instance of the tragedy of the commons pattern.",
  "difficulty": "easy",
  "type": "logical_structure"
},
{
  "question_id": "standalone-171",
  "topic": "The free-rider problem in neighbourhood watch schemes",
  "passage": "A neighbourhood watch programme benefits every resident on a street regardless of whether they personally volunteer time to participate in patrols, meaning an individual resident has an incentive to let neighbours bear the effort while still enjoying the resulting reduction in crime, a dynamic that can leave the scheme chronically understaffed relative to how much residents collectively value it.",
  "prompt": "The passage's central concern mirrors an issue discussed elsewhere in this set regarding:",
  "options": [
    {
      "id": "A",
      "text": "The free-rider problem, in which individuals benefit from a collective good without contributing to its provision"
    },
    {
      "id": "B",
      "text": "A claim that neighbourhood watch schemes never actually reduce crime"
    },
    {
      "id": "C",
      "text": "An argument that every resident always volunteers equally"
    },
    {
      "id": "D",
      "text": "A demonstration that shared benefits are always fully paid for by their beneficiaries"
    },
    {
      "id": "E",
      "text": "A point unrelated to any collective action problem"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the free-rider problem applied to a neighbourhood watch scheme.",
  "difficulty": "easy",
  "type": "logical_structure"
},
{
  "question_id": "standalone-172",
  "topic": "The principal-agent problem in corporate governance",
  "passage": "Shareholders, the principals, hire executives, the agents, to manage a company on their behalf, but executives may pursue their own interests, excessive compensation, empire-building through unnecessary acquisitions, that diverge from shareholders' interest in maximising the company's actual value, particularly where shareholders cannot easily monitor every executive decision in detail.",
  "prompt": "The passage's central concern arises from:",
  "options": [
    {
      "id": "A",
      "text": "A divergence of interest between principals and agents, combined with the principals' limited ability to monitor the agents closely"
    },
    {
      "id": "B",
      "text": "A guarantee that executives always act identically to how shareholders would act themselves"
    },
    {
      "id": "C",
      "text": "An assumption that shareholders can monitor every decision in perfect detail"
    },
    {
      "id": "D",
      "text": "A claim that executives never have any interest of their own"
    },
    {
      "id": "E",
      "text": "A point unrelated to any difference in interest between the two parties"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the principal-agent problem: divergent interests plus limited monitoring.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-173",
  "topic": "Moral hazard in flood insurance",
  "passage": "Property owners who purchase flood insurance covering the full cost of any future flood damage may have less incentive to invest in flood-proofing measures, elevated foundations, protective barriers, than owners bearing the full financial risk of flooding themselves, since the insurance shifts the financial consequence of an owner's own risk-reduction choices onto the insurer instead.",
  "prompt": "The passage's concern is an instance of a broader pattern discussed elsewhere in this set concerning:",
  "options": [
    {
      "id": "A",
      "text": "Moral hazard, where insulation from a risk's consequences reduces incentive to mitigate that risk"
    },
    {
      "id": "B",
      "text": "A claim that insurance always increases an owner's incentive to flood-proof their property"
    },
    {
      "id": "C",
      "text": "An argument that flood insurance never actually shifts any financial risk"
    },
    {
      "id": "D",
      "text": "A demonstration that flood-proofing measures are never effective"
    },
    {
      "id": "E",
      "text": "A point unrelated to how insurance affects risk-reduction incentives"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is moral hazard: insurance dulling the incentive to mitigate risk.",
  "difficulty": "easy",
  "type": "logical_structure"
},
{
  "question_id": "standalone-174",
  "topic": "The Coase theorem and bargaining around externalities",
  "passage": "Economist Ronald Coase argued that, provided property rights are clearly defined and bargaining costs are low enough, affected parties can negotiate a mutually beneficial resolution to an externality, such as factory pollution affecting a neighbouring farm, regardless of which party is initially assigned the legal right, since the parties can simply pay each other to reach an efficient outcome.",
  "prompt": "According to the passage, the theorem's conclusion depends critically on:",
  "options": [
    {
      "id": "A",
      "text": "Property rights being clearly defined and bargaining costs being sufficiently low"
    },
    {
      "id": "B",
      "text": "Bargaining costs being extremely high in every case"
    },
    {
      "id": "C",
      "text": "Property rights never being assigned to any party"
    },
    {
      "id": "D",
      "text": "A requirement that no negotiation ever take place between the parties"
    },
    {
      "id": "E",
      "text": "An assumption that externalities never actually occur"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the theorem's key conditions.",
  "difficulty": "medium",
  "type": "assumption"
},
{
  "question_id": "standalone-175",
  "topic": "Network effects in political party formation",
  "passage": "A new political party seeking to challenge established parties faces a structural disadvantage distinct from any difference in policy appeal: voters may hesitate to support a new party regardless of its merits, fearing their vote will be 'wasted' on a party unlikely to win, a self-fulfilling dynamic that can entrench established parties' dominance independent of shifting voter preferences.",
  "prompt": "The passage's central concern is that established parties' dominance may persist due to:",
  "options": [
    {
      "id": "A",
      "text": "A self-fulfilling dynamic in which voters avoid a new party specifically because they expect others to avoid it too"
    },
    {
      "id": "B",
      "text": "A guarantee that new parties always have inferior policy positions"
    },
    {
      "id": "C",
      "text": "An absence of any voter concern about wasted votes"
    },
    {
      "id": "D",
      "text": "A demonstration that voter preferences never actually shift over time"
    },
    {
      "id": "E",
      "text": "A point unrelated to how voters assess a new party's chances"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This describes a network-effect-like, self-reinforcing dynamic favouring established parties.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-176",
  "topic": "The paradox of prosperity and declining birth rates",
  "passage": "Across many countries, rising average income and education levels have historically coincided with falling birth rates, a pattern that seems to run counter to a simple assumption that greater material prosperity would make raising more children more affordable and therefore more common.",
  "prompt": "The passage describes a pattern that is:",
  "options": [
    {
      "id": "A",
      "text": "Counterintuitive relative to a simple assumption linking prosperity directly to higher birth rates"
    },
    {
      "id": "B",
      "text": "Fully consistent with the simple assumption that prosperity increases birth rates"
    },
    {
      "id": "C",
      "text": "Unrelated to any assumption about the relationship between income and family size"
    },
    {
      "id": "D",
      "text": "Observed only in a single country rather than across many"
    },
    {
      "id": "E",
      "text": "A pattern in which birth rates always rise alongside income"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as running counter to the simple prosperity-fertility assumption.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-177",
  "topic": "Rational ignorance in voter behaviour",
  "passage": "Given that a single vote has a vanishingly small chance of determining an election's outcome, a rational individual may conclude that the time cost of thoroughly researching every candidate and policy exceeds any expected personal benefit from having a marginally better-informed vote, leading to widespread, individually rational voter ignorance about policy detail.",
  "prompt": "The passage's argument concludes that voter ignorance can arise from:",
  "options": [
    {
      "id": "A",
      "text": "A rational weighing of the low expected benefit of detailed research against its real time cost"
    },
    {
      "id": "B",
      "text": "A guarantee that every voter is fully informed about every policy"
    },
    {
      "id": "C",
      "text": "An assumption that voting has a high probability of determining any election"
    },
    {
      "id": "D",
      "text": "A claim that voters never consider the cost of political research"
    },
    {
      "id": "E",
      "text": "A demonstration that voter ignorance is always irrational"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the rational cost-benefit calculation underlying the phenomenon.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-178",
  "topic": "The Condorcet paradox in voting outcomes",
  "passage": "With three voters ranking three candidates, it is possible for a majority to prefer candidate A over B, another majority to prefer B over C, and yet another majority to prefer C over A, producing a cycle in which no candidate can be said to be the majority's overall preferred choice, despite each individual voter having a perfectly consistent, non-cyclical personal ranking.",
  "prompt": "The passage's example illustrates that collective preferences can:",
  "options": [
    {
      "id": "A",
      "text": "Form an intransitive cycle even where every individual voter's own preferences are perfectly consistent"
    },
    {
      "id": "B",
      "text": "Always mirror exactly the ranking of any single individual voter"
    },
    {
      "id": "C",
      "text": "Never produce any cyclical or inconsistent pattern"
    },
    {
      "id": "D",
      "text": "Be determined without reference to any individual voter's preferences"
    },
    {
      "id": "E",
      "text": "Require that individual voters hold inconsistent preferences themselves"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the Condorcet paradox: collective cycling despite individually consistent preferences.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-179",
  "topic": "Arrow's impossibility theorem in social choice",
  "passage": "Kenneth Arrow proved that no voting system aggregating individual preference rankings into a single collective ranking can simultaneously satisfy a small set of seemingly reasonable fairness conditions, such as never letting an irrelevant alternative affect the ranking of two other options, except in the trivial case of a dictatorship where one person's preferences simply determine the outcome.",
  "prompt": "The passage's central claim is that Arrow's theorem shows:",
  "options": [
    {
      "id": "A",
      "text": "No non-dictatorial voting system can satisfy all of a specific set of seemingly reasonable fairness conditions simultaneously"
    },
    {
      "id": "B",
      "text": "Every voting system perfectly satisfies all reasonable fairness conditions"
    },
    {
      "id": "C",
      "text": "Dictatorships are the fairest possible system for aggregating preferences"
    },
    {
      "id": "D",
      "text": "No voting system has ever been mathematically analysed"
    },
    {
      "id": "E",
      "text": "Fairness conditions have no bearing on how voting systems are designed"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the theorem's central impossibility result.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-180",
  "topic": "The security dilemma in international relations",
  "passage": "A state that increases its own military capability purely for defensive purposes can nonetheless appear threatening to a neighbouring state, prompting that neighbour to increase its own military capability in response, a reciprocal cycle in which both states end up less secure, and both poorer, than before either began arming, despite neither ever having had aggressive intentions.",
  "prompt": "The passage describes a dynamic in which:",
  "options": [
    {
      "id": "A",
      "text": "Purely defensive actions by one state can trigger a mutually reinforcing cycle leaving both states worse off"
    },
    {
      "id": "B",
      "text": "Defensive military spending always makes every state more secure"
    },
    {
      "id": "C",
      "text": "Neighbouring states never respond to each other's military spending"
    },
    {
      "id": "D",
      "text": "Only states with genuinely aggressive intentions ever increase military spending"
    },
    {
      "id": "E",
      "text": "A cycle of arming always benefits both states involved"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the security dilemma: mutually reinforcing arming leaving both sides worse off.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-181",
  "topic": "The democratic peace theory",
  "passage": "Political scientists have observed that established democracies rarely, if ever, go to war directly with one another, a pattern attributed variously to shared norms of peaceful dispute resolution, the accountability elected leaders face for the human and economic costs of war, or the economic interdependence democracies tend to develop with one another.",
  "prompt": "The passage presents the democratic peace observation as having:",
  "options": [
    {
      "id": "A",
      "text": "More than one plausible explanation rather than a single, settled cause"
    },
    {
      "id": "B",
      "text": "A single, universally agreed explanation among political scientists"
    },
    {
      "id": "C",
      "text": "No plausible explanation offered by any researcher"
    },
    {
      "id": "D",
      "text": "An explanation entirely unrelated to any political or economic factor"
    },
    {
      "id": "E",
      "text": "A pattern that has never actually been observed"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The passage explicitly lists multiple candidate explanations rather than a single cause.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-182",
  "topic": "Balance of power theory in alliance formation",
  "passage": "According to balance of power theory, states tend to form alliances specifically to counter whichever state or coalition appears to be gaining a dominant position, rather than consistently aligning with the strongest power, since bandwagoning with a dominant state risks that state's eventual dominance over the smaller allies themselves.",
  "prompt": "The passage implies that states generally avoid aligning with the strongest power because doing so risks:",
  "options": [
    {
      "id": "A",
      "text": "Eventual dominance of the smaller allied states by the very power they aligned with"
    },
    {
      "id": "B",
      "text": "An immediate and total loss of all military capability"
    },
    {
      "id": "C",
      "text": "No risk whatsoever to the smaller allied states"
    },
    {
      "id": "D",
      "text": "A guarantee of permanent equality among all allied states"
    },
    {
      "id": "E",
      "text": "A situation unrelated to the relative power of any state"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the risk motivating balancing rather than bandwagoning.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-183",
  "topic": "The prisoner's dilemma in arms races",
  "passage": "Each of two rival states would prefer a world in which neither invests heavily in a costly new weapons system, but each fears that if it alone refrains while the other invests, it will be left dangerously vulnerable, an incentive structure that can lead both states to invest heavily despite each privately preferring the mutual restraint outcome to the mutual arms race outcome.",
  "prompt": "The passage describes a situation structurally similar to which pattern discussed elsewhere in this set?",
  "options": [
    {
      "id": "A",
      "text": "A prisoner's dilemma, in which individually rational choices produce an outcome both parties would have preferred to avoid"
    },
    {
      "id": "B",
      "text": "A situation with no tension between individual and mutual interest"
    },
    {
      "id": "C",
      "text": "A scenario in which both states always achieve their most preferred outcome"
    },
    {
      "id": "D",
      "text": "An arrangement requiring no strategic consideration of the other state's choice"
    },
    {
      "id": "E",
      "text": "A pattern unrelated to any strategic interaction between the two states"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a classic prisoner's dilemma structure applied to arms races.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-184",
  "topic": "Comparative institutional analysis in development economics",
  "passage": "Two countries with similar natural resources and geography can experience very different long-term economic development, a divergence some economists attribute primarily to differences in institutional quality, secure property rights, reliable contract enforcement, low corruption, rather than to any difference in the countries' underlying physical endowments.",
  "prompt": "The passage's explanation for the observed divergence emphasises:",
  "options": [
    {
      "id": "A",
      "text": "Institutional quality rather than differences in physical resource endowments"
    },
    {
      "id": "B",
      "text": "Physical resource endowments as the sole determinant of development outcomes"
    },
    {
      "id": "C",
      "text": "A claim that the two countries have identical institutional quality"
    },
    {
      "id": "D",
      "text": "An assumption that institutions have no relationship to economic development"
    },
    {
      "id": "E",
      "text": "A factor entirely unrelated to property rights or contract enforcement"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the emphasised explanatory factor.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-185",
  "topic": "The resource curse in natural resource economics",
  "passage": "Some countries with abundant valuable natural resources, oil, minerals, experience slower economic growth and weaker governance than resource-poor countries, a pattern attributed partly to resource revenue reducing incentives to develop broader tax bases and accountable institutions, since a government funded primarily by resource extraction has less need to cultivate a productive, taxpaying citizenry to fund itself.",
  "prompt": "The passage's explanation links slower growth to:",
  "options": [
    {
      "id": "A",
      "text": "Reduced government incentive to develop broader tax bases and accountable institutions when resource revenue is abundant"
    },
    {
      "id": "B",
      "text": "An abundance of natural resources directly causing lower growth with no intervening mechanism"
    },
    {
      "id": "C",
      "text": "A claim that resource-rich countries have never experienced any growth"
    },
    {
      "id": "D",
      "text": "An assumption that governments never rely on resource revenue for funding"
    },
    {
      "id": "E",
      "text": "A factor entirely unrelated to institutional development"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the mechanism linking resource abundance to weaker institutions.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-186",
  "topic": "Import substitution versus export-led growth strategies",
  "passage": "Some developing economies historically pursued import substitution, protecting domestic industries from foreign competition to build up local manufacturing capacity, while others pursued export-led growth, prioritising competitiveness in international markets, with the latter strategy generally producing stronger long-term growth in the countries that adopted it, according to most comparative economic analyses.",
  "prompt": "The passage implies that comparative analysis has generally favoured which strategy?",
  "options": [
    {
      "id": "A",
      "text": "Export-led growth, based on its stronger association with long-term growth outcomes"
    },
    {
      "id": "B",
      "text": "Import substitution, based on its stronger association with long-term growth outcomes"
    },
    {
      "id": "C",
      "text": "Neither strategy, since both have been found equally effective"
    },
    {
      "id": "D",
      "text": "A strategy combining neither import substitution nor export orientation"
    },
    {
      "id": "E",
      "text": "A strategy that has never been comparatively analysed by economists"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the generally favoured strategy based on comparative analysis.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-187",
  "topic": "The infant industry argument for tariffs",
  "passage": "Proponents of temporary tariff protection for a new domestic industry argue that, given time to grow and achieve efficiencies of scale, the industry could eventually become competitive without protection, though critics note that once established, a protected industry often successfully lobbies to retain its tariff protection indefinitely rather than voluntarily accepting exposure to competition once the original justification has expired.",
  "prompt": "The critics' objection in the passage centres on:",
  "options": [
    {
      "id": "A",
      "text": "A practical tendency for temporary protection to become permanent through the protected industry's own lobbying"
    },
    {
      "id": "B",
      "text": "A claim that infant industries never actually grow under any protection"
    },
    {
      "id": "C",
      "text": "An argument that tariffs always immediately harm the protected industry"
    },
    {
      "id": "D",
      "text": "A demonstration that protected industries never lobby for anything"
    },
    {
      "id": "E",
      "text": "A point unrelated to how temporary protections are actually maintained"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the critics' concern about protection becoming permanent.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-188",
  "topic": "Currency pegs and speculative attacks",
  "passage": "A country maintaining a fixed exchange rate against another currency must hold sufficient foreign currency reserves to defend that peg by buying its own currency whenever market pressure pushes its value down, but if speculators come to believe the reserves are insufficient to sustain a prolonged defence, a self-fulfilling speculative attack can exhaust the reserves and force a sudden, disorderly devaluation.",
  "prompt": "The passage describes a scenario in which a currency peg's collapse can be triggered by:",
  "options": [
    {
      "id": "A",
      "text": "Speculators' belief that reserves are insufficient, which can become self-fulfilling"
    },
    {
      "id": "B",
      "text": "A guarantee that reserves are always sufficient regardless of speculative activity"
    },
    {
      "id": "C",
      "text": "An absence of any market pressure on the currency's value"
    },
    {
      "id": "D",
      "text": "A situation in which speculators never form any belief about reserve adequacy"
    },
    {
      "id": "E",
      "text": "A factor entirely unrelated to the country's foreign currency reserves"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the self-fulfilling mechanism behind a speculative attack.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-189",
  "topic": "The impossible trinity in international finance",
  "passage": "A country generally cannot simultaneously maintain a fixed exchange rate, free movement of capital across its borders, and independent control over its own domestic monetary policy, since achieving any two of these three goals typically requires sacrificing the third, a constraint economists term the impossible trinity.",
  "prompt": "The passage's central claim is that a country pursuing all three goals simultaneously would find them:",
  "options": [
    {
      "id": "A",
      "text": "Mutually incompatible, requiring the sacrifice of at least one of the three"
    },
    {
      "id": "B",
      "text": "Entirely compatible and achievable together without any trade-off"
    },
    {
      "id": "C",
      "text": "Irrelevant to any country's actual monetary policy choices"
    },
    {
      "id": "D",
      "text": "Achievable only by abandoning international trade entirely"
    },
    {
      "id": "E",
      "text": "A set of goals no country has ever attempted to pursue"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the incompatibility at the heart of the impossible trinity.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-190",
  "topic": "Fiscal federalism and subsidiarity",
  "passage": "The principle of subsidiarity holds that decisions should generally be made at the lowest level of government capable of addressing them effectively, reserving higher levels of government for matters that genuinely require broader coordination, a principle intended to balance local responsiveness against the benefits of coordinated action on matters that cross local boundaries.",
  "prompt": "The passage's principle of subsidiarity is intended to balance local responsiveness against:",
  "options": [
    {
      "id": "A",
      "text": "The benefits of coordinated action on matters requiring a broader, cross-boundary scope"
    },
    {
      "id": "B",
      "text": "A requirement that all decisions always be made at the highest level of government"
    },
    {
      "id": "C",
      "text": "An assumption that local governments are never capable of addressing any matter"
    },
    {
      "id": "D",
      "text": "A principle unrelated to the scope of any particular decision"
    },
    {
      "id": "E",
      "text": "A guarantee that higher levels of government never make any decision"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the balancing consideration behind subsidiarity.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-191",
  "topic": "The principal-agent problem in political representation",
  "passage": "Voters, the principals, elect representatives, the agents, to act on their behalf, but representatives may pursue re-election prospects or personal policy preferences that diverge from constituents' actual interests, particularly on complex or low-salience issues where constituents have limited capacity to monitor a representative's specific voting record in detail.",
  "prompt": "The passage applies a concept discussed elsewhere in this set to political representation, specifically:",
  "options": [
    {
      "id": "A",
      "text": "The principal-agent problem, in which an agent's interests can diverge from a principal's due to limited monitoring"
    },
    {
      "id": "B",
      "text": "A claim that representatives always perfectly reflect constituent interests"
    },
    {
      "id": "C",
      "text": "An argument that voters can monitor every vote a representative casts in complete detail"
    },
    {
      "id": "D",
      "text": "A demonstration that low-salience issues are never actually voted on by representatives"
    },
    {
      "id": "E",
      "text": "A point unrelated to any divergence of interest between voters and representatives"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a direct application of the principal-agent problem to political representation.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-192",
  "topic": "Regulatory race to the bottom in international trade",
  "passage": "Countries competing to attract mobile international investment may face pressure to progressively weaken environmental or labour regulations relative to competitor countries, since a country imposing stricter standards risks losing investment to a jurisdiction offering comparable infrastructure at a lower regulatory compliance cost, a dynamic critics term a race to the bottom.",
  "prompt": "The passage's described dynamic arises from competition for investment producing pressure toward:",
  "options": [
    {
      "id": "A",
      "text": "Progressively weaker regulation as countries compete on compliance cost"
    },
    {
      "id": "B",
      "text": "Progressively stronger regulation as countries compete on quality"
    },
    {
      "id": "C",
      "text": "No change in regulatory standards across any competing country"
    },
    {
      "id": "D",
      "text": "A guarantee that all countries adopt identical regulatory standards"
    },
    {
      "id": "E",
      "text": "A factor entirely unrelated to any competition for investment"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the race-to-the-bottom dynamic.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-193",
  "topic": "The Tiebout model of local government competition",
  "passage": "A model of local government suggests that residents can effectively 'vote with their feet', choosing to live in the jurisdiction whose specific mix of local taxes and public services best matches their own preferences, a form of inter-jurisdictional competition for residents that, in theory, can produce a more efficient allocation of local public goods than a single, centralised provider might achieve.",
  "prompt": "The passage's model suggests efficient allocation of local public goods is achieved through:",
  "options": [
    {
      "id": "A",
      "text": "Residents relocating to whichever jurisdiction's tax-and-service mix best matches their own preferences"
    },
    {
      "id": "B",
      "text": "A single, centralised provider setting an identical tax-and-service mix everywhere"
    },
    {
      "id": "C",
      "text": "An assumption that residents never relocate based on local tax or service differences"
    },
    {
      "id": "D",
      "text": "A requirement that all jurisdictions offer identical services"
    },
    {
      "id": "E",
      "text": "A factor entirely unrelated to residents' own preferences"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the sorting mechanism the model relies on.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-194",
  "topic": "Bureaucratic budget maximisation in public choice theory",
  "passage": "A model of bureaucratic behaviour suggests that agency officials, motivated partly by career advancement and institutional prestige, have an incentive to seek larger budgets than the agency's actual public function strictly requires, since overseeing legislators typically have far less detailed information about an agency's genuine budgetary needs than the agency's own officials possess.",
  "prompt": "The passage's model attributes the incentive toward budget maximisation partly to:",
  "options": [
    {
      "id": "A",
      "text": "An information asymmetry in which overseeing legislators know less about actual needs than agency officials themselves"
    },
    {
      "id": "B",
      "text": "Legislators possessing more detailed information than agency officials"
    },
    {
      "id": "C",
      "text": "A guarantee that agencies always request exactly the budget they need"
    },
    {
      "id": "D",
      "text": "An assumption that career advancement plays no role in official behaviour"
    },
    {
      "id": "E",
      "text": "A factor unrelated to any asymmetry of information between the two parties"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the information asymmetry underlying the model.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-195",
  "topic": "The paradox of redistribution in welfare design",
  "passage": "A welfare system targeting benefits narrowly at the very poorest can, counterintuitively, achieve less overall poverty reduction than a more universal system providing smaller benefits to a much broader population, since narrowly targeted programmes tend to receive weaker and less durable political support than universal ones benefiting a broad, electorally significant coalition.",
  "prompt": "The passage's explanation for the counterintuitive finding rests on a difference in:",
  "options": [
    {
      "id": "A",
      "text": "The political durability and support a programme attracts, depending on how broadly its benefits are distributed"
    },
    {
      "id": "B",
      "text": "The total amount of money spent, which is identical under both approaches"
    },
    {
      "id": "C",
      "text": "An assumption that narrowly targeted programmes always receive stronger political support"
    },
    {
      "id": "D",
      "text": "A factor unrelated to how a programme's benefits are distributed politically"
    },
    {
      "id": "E",
      "text": "A claim that universal programmes never actually redistribute any resources"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the political-support mechanism behind the paradox.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-196",
  "topic": "Path dependence in institutional development",
  "passage": "An early, somewhat arbitrary institutional choice, such as which side of the road traffic drives on, can become extremely costly to reverse once enough infrastructure, vehicles, and habits have adapted to it, meaning the specific choice actually in place today may owe more to historical accident locked in by accumulated adaptation than to any inherent superiority over the alternative.",
  "prompt": "The passage's central point is that an institution's persistence can reflect:",
  "options": [
    {
      "id": "A",
      "text": "Accumulated adaptation locking in an early, possibly arbitrary choice, rather than the choice's inherent superiority"
    },
    {
      "id": "B",
      "text": "A guarantee that the persisting choice is always objectively superior to any alternative"
    },
    {
      "id": "C",
      "text": "An absence of any cost associated with reversing the original choice"
    },
    {
      "id": "D",
      "text": "A factor entirely unrelated to historical accident or adaptation"
    },
    {
      "id": "E",
      "text": "A claim that institutions never actually persist over time"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is path dependence: persistence driven by locked-in adaptation, not inherent superiority.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-197",
  "topic": "The Baumol cost disease in service industries",
  "passage": "Productivity in manufacturing has grown enormously through automation, while productivity in labour-intensive services such as live music performance or in-person childcare has grown much more slowly, since a string quartet still requires four musicians to perform a piece exactly as it did centuries ago, yet wages in these labour-intensive sectors still tend to rise over time to remain competitive with wages available in higher-productivity sectors.",
  "prompt": "The passage implies that wages rise in labour-intensive service sectors despite limited productivity growth because:",
  "options": [
    {
      "id": "A",
      "text": "Wages must remain competitive with those available in higher-productivity sectors to retain workers"
    },
    {
      "id": "B",
      "text": "Productivity in these sectors has actually grown faster than in manufacturing"
    },
    {
      "id": "C",
      "text": "Workers in these sectors have no alternative employment options whatsoever"
    },
    {
      "id": "D",
      "text": "Wages in labour-intensive sectors never actually change over time"
    },
    {
      "id": "E",
      "text": "A factor entirely unrelated to competition for workers across sectors"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the wage-competition mechanism behind Baumol's cost disease.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-198",
  "topic": "Structural versus cyclical unemployment",
  "passage": "Cyclical unemployment rises and falls with the broader business cycle, reflecting temporary insufficient demand for goods and services, whereas structural unemployment persists even during economic expansion, reflecting a more durable mismatch between the skills workers possess and the skills employers actually require, a mismatch that monetary or fiscal stimulus targeting demand alone cannot fully resolve.",
  "prompt": "The passage's central distinction between the two types of unemployment concerns:",
  "options": [
    {
      "id": "A",
      "text": "Whether the unemployment reflects temporary demand insufficiency or a more durable skills mismatch"
    },
    {
      "id": "B",
      "text": "Whether either type of unemployment is affected by the business cycle at all"
    },
    {
      "id": "C",
      "text": "A distinction that has no bearing on which policy response is appropriate"
    },
    {
      "id": "D",
      "text": "Whether demand-side stimulus can always fully resolve any unemployment"
    },
    {
      "id": "E",
      "text": "A claim that skills mismatches never actually cause any unemployment"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the core distinction between the two categories.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-199",
  "topic": "The natural rate of unemployment and inflation trade-offs",
  "passage": "Attempts to push unemployment below its underlying 'natural' rate through sustained monetary stimulus tend to produce accelerating inflation rather than a lasting reduction in unemployment, since workers and firms eventually adjust their inflation expectations upward, offsetting the stimulus's initial effect on employment while leaving a legacy of higher inflation.",
  "prompt": "The passage implies that sustained stimulus aimed at reducing unemployment below its natural rate ultimately produces:",
  "options": [
    {
      "id": "A",
      "text": "Accelerating inflation without a lasting reduction in unemployment, once expectations adjust"
    },
    {
      "id": "B",
      "text": "A permanent, lasting reduction in unemployment with no effect on inflation"
    },
    {
      "id": "C",
      "text": "No change in either unemployment or inflation over time"
    },
    {
      "id": "D",
      "text": "A guaranteed reduction in inflation expectations"
    },
    {
      "id": "E",
      "text": "An effect entirely unrelated to workers' or firms' expectations"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the eventual outcome once expectations adjust.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-200",
  "topic": "The lump of labour fallacy",
  "passage": "An argument against immigration or automation sometimes assumes there is a fixed total quantity of work available in an economy, meaning any job taken by a new worker or a machine necessarily comes at the expense of an existing worker, an assumption most economists reject, since new workers and technologies also generate additional demand and new categories of work that did not previously exist.",
  "prompt": "The passage's criticism of the argument centres on its assumption that:",
  "options": [
    {
      "id": "A",
      "text": "The total quantity of available work in an economy is fixed, rather than capable of expanding"
    },
    {
      "id": "B",
      "text": "New workers or technologies always create more jobs than they displace"
    },
    {
      "id": "C",
      "text": "Automation has never displaced any existing job"
    },
    {
      "id": "D",
      "text": "Immigration has no relationship to the total quantity of work available"
    },
    {
      "id": "E",
      "text": "The total quantity of work is always expanding without any limit"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the lump of labour fallacy: assuming a fixed total amount of work.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-201",
  "topic": "The paradox of thrift in export-led economies",
  "passage": "A country pursuing export-led growth by suppressing domestic consumption and encouraging high household saving can achieve strong growth so long as foreign demand for its exports remains robust, but if every major economy simultaneously pursued the identical strategy, the resulting shortfall in global consumption could undermine the very export demand each economy's strategy depends on.",
  "prompt": "The passage describes a dynamic structurally similar to which pattern discussed elsewhere in this set?",
  "options": [
    {
      "id": "A",
      "text": "The paradox of thrift, in which a strategy rational for one actor becomes self-undermining if adopted universally"
    },
    {
      "id": "B",
      "text": "A situation with no tension between individual and collective strategy"
    },
    {
      "id": "C",
      "text": "An argument that export-led growth always succeeds regardless of global conditions"
    },
    {
      "id": "D",
      "text": "A claim that global consumption never actually depends on any single country's demand"
    },
    {
      "id": "E",
      "text": "A pattern unrelated to the strategy of any other country"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the paradox of thrift applied at the level of international trade strategy.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-202",
  "topic": "Institutional isomorphism in organisational behaviour",
  "passage": "Organisations operating in the same field, universities, hospitals, charities, often adopt remarkably similar structures and practices over time, not necessarily because those practices have been proven most effective, but partly because imitating established, legitimate peer organisations reduces uncertainty and confers social legitimacy on the imitating organisation.",
  "prompt": "The passage's explanation for organisational similarity emphasises:",
  "options": [
    {
      "id": "A",
      "text": "A search for legitimacy and reduced uncertainty through imitation, rather than proven superior effectiveness alone"
    },
    {
      "id": "B",
      "text": "A rigorous, comparative assessment proving the adopted practices are the most effective available"
    },
    {
      "id": "C",
      "text": "A claim that organisations in the same field never actually resemble one another"
    },
    {
      "id": "D",
      "text": "An assumption that legitimacy has no relationship to organisational behaviour"
    },
    {
      "id": "E",
      "text": "A factor entirely unrelated to the behaviour of peer organisations"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the legitimacy-seeking, imitation-based explanation.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-203",
  "topic": "Herd behaviour in bank runs",
  "passage": "A bank remains solvent as long as it does not need to repay all depositors simultaneously, since it lends out most deposited funds rather than holding them all in reserve, but if enough depositors come to believe others are about to withdraw their funds, each has a rational individual incentive to withdraw first, a self-fulfilling panic that can render even a genuinely solvent bank unable to meet withdrawal demands.",
  "prompt": "The passage describes a bank run as a form of:",
  "options": [
    {
      "id": "A",
      "text": "A self-fulfilling collective panic driven by each depositor's rational response to expecting others to withdraw"
    },
    {
      "id": "B",
      "text": "An outcome entirely unrelated to depositors' expectations about each other's behaviour"
    },
    {
      "id": "C",
      "text": "A situation that only affects banks that are already genuinely insolvent"
    },
    {
      "id": "D",
      "text": "A guarantee that a bank holding all deposits in reserve would still experience a run"
    },
    {
      "id": "E",
      "text": "An event that requires no coordination or expectation among depositors at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the self-fulfilling, expectation-driven nature of a bank run.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-204",
  "topic": "The dictator game and fairness in experimental economics",
  "passage": "In an experimental setting where one participant is given a sum of money and told they may keep any portion while giving the rest to an anonymous second participant with no ability to reject the offer, most participants nonetheless choose to share a meaningful portion, a result standard self-interest-maximising models struggle to fully explain.",
  "prompt": "The passage's experimental result is notable because it appears to challenge:",
  "options": [
    {
      "id": "A",
      "text": "Models assuming individuals act purely to maximise their own material self-interest"
    },
    {
      "id": "B",
      "text": "A claim that participants always keep the entire sum for themselves"
    },
    {
      "id": "C",
      "text": "An assumption that participants never consider any anonymous recipient"
    },
    {
      "id": "D",
      "text": "A model that already fully predicts the observed sharing behaviour"
    },
    {
      "id": "E",
      "text": "A result unrelated to any question about self-interest or fairness"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the challenge this result poses to pure self-interest models.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-205",
  "topic": "The ultimatum game and rejection of unfair offers",
  "passage": "In an experimental game where one participant proposes how to split a sum of money and a second participant can either accept the split or reject it, causing both to receive nothing, purely rational self-interested responders should accept any positive offer, however small, yet many responders reject offers they perceive as unfairly low, sacrificing their own guaranteed gain to punish the proposer.",
  "prompt": "The passage's finding suggests that responders' decisions are influenced by:",
  "options": [
    {
      "id": "A",
      "text": "A concern for fairness that can outweigh a purely self-interested calculation of guaranteed material gain"
    },
    {
      "id": "B",
      "text": "A purely self-interested calculation that always leads to acceptance of any positive offer"
    },
    {
      "id": "C",
      "text": "An assumption that responders never actually reject any offer"
    },
    {
      "id": "D",
      "text": "A factor entirely unrelated to how fair an offer appears to be"
    },
    {
      "id": "E",
      "text": "A guarantee that proposers always offer an equal split"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the fairness-driven behaviour challenging pure self-interest predictions.",
  "difficulty": "medium",
  "type": "inference"
}
];
