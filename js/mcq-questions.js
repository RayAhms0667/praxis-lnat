/* MCQ Quick Practice — standalone reasoning questions, each with its own
   short passage. Schema per question:
   { question_id, topic, passage, prompt, options: [{id,text}], correct_option_id, explanation, difficulty, type }
   New questions get appended to this array — nothing else needs to change;
   the MCQ list and practice UI are fully data-driven. */

const MCQ_QUESTIONS = [
{
  "question_id": "standalone-001",
  "topic": "The ethics of anonymous online speech",
  "passage": "Anonymity online allows whistleblowers and dissidents in repressive regimes to speak without fear of retaliation. Yet the same anonymity emboldens harassment that a speaker would rarely engage in under their real name. Platforms must therefore choose between two distinct goods rather than a single clear benefit.",
  "prompt": "The passage's main point is that anonymous speech online:",
  "options": [
    {
      "id": "A",
      "text": "Has no benefit of any kind"
    },
    {
      "id": "B",
      "text": "Involves a genuine trade-off between two distinct goods rather than offering a single, clear benefit"
    },
    {
      "id": "C",
      "text": "Always protects dissidents more than it enables harassment"
    },
    {
      "id": "D",
      "text": "Should be banned on all platforms"
    },
    {
      "id": "E",
      "text": "Has never actually enabled any harassment"
    }
  ],
  "correct_option_id": "B",
  "explanation": "The passage explicitly frames this as a choice between two distinct goods, not a one-sided benefit.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-002",
  "topic": "Loss aversion in consumer behaviour",
  "passage": "Behavioural studies find people feel the pain of losing a sum of money roughly twice as intensely as the pleasure of gaining the same amount. Retailers exploit this by framing discounts as an avoided loss rather than a simple gain, since 'save 20%' motivates purchases more than an equivalent 'pay 80%' framing might.",
  "prompt": "The passage implies that framing a discount as an avoided loss is effective because:",
  "options": [
    {
      "id": "A",
      "text": "Losses are felt more intensely than equivalent gains, a phenomenon known as loss aversion"
    },
    {
      "id": "B",
      "text": "Consumers never respond to any pricing language"
    },
    {
      "id": "C",
      "text": "Gains are always felt more intensely than losses"
    },
    {
      "id": "D",
      "text": "Retailers are legally required to frame discounts this way"
    },
    {
      "id": "E",
      "text": "The two framings produce identical consumer responses"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as loss aversion, the asymmetry between the pain of loss and pleasure of gain.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-003",
  "topic": "The paradox of thrift",
  "passage": "If a single household saves more, it improves its own financial position. But if every household simultaneously cuts spending to save more, aggregate demand falls, potentially reducing incomes and total savings across the economy as a whole. What is individually prudent can be collectively self-defeating.",
  "prompt": "The passage's central argument is best described as an example of:",
  "options": [
    {
      "id": "A",
      "text": "A fallacy of composition, where what holds for one individual does not hold for the whole"
    },
    {
      "id": "B",
      "text": "A proof that saving is always harmful to any economy"
    },
    {
      "id": "C",
      "text": "An argument that households should never save any money"
    },
    {
      "id": "D",
      "text": "A claim that aggregate demand has no relationship to spending"
    },
    {
      "id": "E",
      "text": "Evidence that individual saving never affects income levels"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The passage describes exactly this pattern: individually rational behaviour that fails to generalise to the whole.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-004",
  "topic": "The precautionary principle applied to novel foods",
  "passage": "Regulators sometimes delay approval of a genuinely novel food product until extensive safety testing is complete, even where no specific evidence of harm exists, reasoning that the cost of a false approval could be severe and hard to reverse. Critics counter that this same caution delays access to potentially beneficial products with no corresponding harm ever demonstrated.",
  "prompt": "Which of the following, if true, would most weaken the critics' objection?",
  "options": [
    {
      "id": "A",
      "text": "Delayed approvals have in several cases prevented products later found to cause serious harm"
    },
    {
      "id": "B",
      "text": "Some delayed products were eventually approved without incident"
    },
    {
      "id": "C",
      "text": "Regulators sometimes communicate poorly with the public"
    },
    {
      "id": "D",
      "text": "Testing procedures vary between countries"
    },
    {
      "id": "E",
      "text": "Novel foods are rarely developed by small companies"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This directly shows the caution has prevented real harm, undercutting the critics' claim that the caution is costless to forgo.",
  "difficulty": "hard",
  "type": "strengthen_weaken"
},
{
  "question_id": "standalone-005",
  "topic": "The bystander effect",
  "passage": "Psychological research finds that an individual witnessing an emergency is less likely to intervene when other bystanders are present than when alone, an effect attributed partly to diffusion of responsibility, each bystander assumes someone else will act. Paradoxically, a crowd can make a public emergency less likely to receive prompt help than a single witness would provide.",
  "prompt": "The passage's use of the word 'paradoxically' signals that the finding is:",
  "options": [
    {
      "id": "A",
      "text": "Counterintuitive, since more witnesses might be expected to increase rather than decrease the odds of help"
    },
    {
      "id": "B",
      "text": "Entirely expected and predictable"
    },
    {
      "id": "C",
      "text": "Irrelevant to how people behave in emergencies"
    },
    {
      "id": "D",
      "text": "Proof that crowds always help more than individuals"
    },
    {
      "id": "E",
      "text": "A logical contradiction with no real-world basis"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The word signals the finding runs against the intuitive expectation that more witnesses means more help.",
  "difficulty": "easy",
  "type": "vocabulary_in_context"
},
{
  "question_id": "standalone-006",
  "topic": "Survivorship bias in success narratives",
  "passage": "Business books often study a sample of highly successful companies to identify common practices behind their success. But since failed companies sharing those same practices are excluded from the sample by definition, the study cannot actually tell whether the identified practices caused success or were simply present in a subset of ventures that also happened to succeed for other reasons.",
  "prompt": "The passage's central criticism concerns:",
  "options": [
    {
      "id": "A",
      "text": "A sampling method that excludes failures, making it impossible to attribute causation to the identified practices"
    },
    {
      "id": "B",
      "text": "The idea that companies can ever be studied systematically"
    },
    {
      "id": "C",
      "text": "A claim that no business book has ever been useful"
    },
    {
      "id": "D",
      "text": "The suggestion that failed companies never share any practices with successful ones"
    },
    {
      "id": "E",
      "text": "An argument that success is always due to luck alone"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is survivorship bias: excluding failures from the sample undermines causal claims about what drives success.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-007",
  "topic": "The sunk cost fallacy in personal decisions",
  "passage": "A person who has already spent two hours watching a film they are not enjoying may continue watching simply because they have already invested the time, even though the remaining hour would be better spent elsewhere regardless of the two hours already spent, since that time cannot be recovered by continuing.",
  "prompt": "The passage implies that the rational basis for deciding whether to continue watching should be:",
  "options": [
    {
      "id": "A",
      "text": "The expected value of the remaining hour alone, independent of time already spent"
    },
    {
      "id": "B",
      "text": "The total time already invested in the film"
    },
    {
      "id": "C",
      "text": "Whichever choice recovers the two hours already spent"
    },
    {
      "id": "D",
      "text": "A decision made without any consideration of enjoyment"
    },
    {
      "id": "E",
      "text": "The original expectation held before starting the film"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: the sunk two hours 'cannot be recovered by continuing', so only the remaining hour's value should matter.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-008",
  "topic": "The base rate fallacy in medical testing",
  "passage": "A test for a rare disease affecting one in ten thousand people is 99% accurate. A positive result might seem alarming, but because the disease is so rare, most positive results will actually come from the vastly larger pool of healthy people who receive a false positive, not from the tiny pool of people who are genuinely ill.",
  "prompt": "The passage's argument depends on which piece of information?",
  "options": [
    {
      "id": "A",
      "text": "The disease's very low prevalence relative to the size of the tested population"
    },
    {
      "id": "B",
      "text": "The exact number of people tested"
    },
    {
      "id": "C",
      "text": "The specific symptoms of the disease"
    },
    {
      "id": "D",
      "text": "The cost of the test"
    },
    {
      "id": "E",
      "text": "The test's manufacturer"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The low base rate (1 in 10,000) is precisely why false positives can outnumber true positives despite high accuracy.",
  "difficulty": "hard",
  "type": "assumption"
},
{
  "question_id": "standalone-009",
  "topic": "The ethics of nudging children's diets in schools",
  "passage": "Placing fruit at eye level and sweets out of immediate reach in a school cafeteria measurably increases fruit selection without banning any food outright. Critics argue this manipulates children's choices below the level of conscious awareness, though children remain fully free to select the sweets if they make the effort to look for them.",
  "prompt": "The passage's final clause, noting children 'remain fully free... if they make the effort', functions to:",
  "options": [
    {
      "id": "A",
      "text": "Qualify the manipulation criticism by noting the intervention does not eliminate the choice, only its salience"
    },
    {
      "id": "B",
      "text": "Prove that no manipulation is occurring at all"
    },
    {
      "id": "C",
      "text": "Show that children never actually select sweets under this arrangement"
    },
    {
      "id": "D",
      "text": "Argue that all school food choices should be banned"
    },
    {
      "id": "E",
      "text": "Introduce an unrelated point about school lunch pricing"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This qualifies the criticism by emphasising the choice is still formally available.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-010",
  "topic": "The Dunning-Kruger effect",
  "passage": "Individuals with limited competence in a specific skill often overestimate their own ability, since the same lack of skill that produces poor performance also impairs their capacity to recognise good performance when they see it. Genuine experts, by contrast, tend to be more aware of the skill's difficulty and therefore rate their own ability more modestly.",
  "prompt": "The passage suggests that the overconfidence of low performers arises specifically because:",
  "options": [
    {
      "id": "A",
      "text": "The same deficit causing poor performance also impairs the ability to judge performance quality accurately"
    },
    {
      "id": "B",
      "text": "Low performers always deliberately exaggerate their own ability"
    },
    {
      "id": "C",
      "text": "Experts are never confident in their own abilities"
    },
    {
      "id": "D",
      "text": "Skill level has no relationship to self-assessment accuracy"
    },
    {
      "id": "E",
      "text": "Low performers receive more positive feedback than experts"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: the same lack of skill impairs the ability to recognise good performance.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-011",
  "topic": "The efficient markets hypothesis and index funds",
  "passage": "If asset prices already reflect all publicly available information, then no investor can reliably beat the market average by picking individual stocks based on that same public information. This reasoning underlies the popularity of low-cost index funds, which simply track the market rather than attempting to outperform it through active selection.",
  "prompt": "The passage's argument for index funds rests on the assumption that:",
  "options": [
    {
      "id": "A",
      "text": "Asset prices already incorporate publicly available information, limiting the value of stock-picking based on it"
    },
    {
      "id": "B",
      "text": "Active fund managers always have access to private information"
    },
    {
      "id": "C",
      "text": "Index funds always outperform actively managed funds"
    },
    {
      "id": "D",
      "text": "Stock prices never change in response to any information"
    },
    {
      "id": "E",
      "text": "No investor has ever attempted to pick individual stocks"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the efficient markets premise stated in the first sentence.",
  "difficulty": "medium",
  "type": "assumption"
},
{
  "question_id": "standalone-012",
  "topic": "The paradox of choice in retail",
  "passage": "Offering consumers a wider range of product options is generally assumed to increase satisfaction, since more choice means a better chance of finding an ideal match. Yet studies of jam displays found a smaller selection of six varieties produced more actual purchases than a display of twenty-four, since excessive choice increased decision difficulty and follow-through failure.",
  "prompt": "The jam study is used in the passage to:",
  "options": [
    {
      "id": "A",
      "text": "Provide a counterexample to the assumption that more choice always increases satisfaction or purchase behaviour"
    },
    {
      "id": "B",
      "text": "Prove that consumers never want any choice at all"
    },
    {
      "id": "C",
      "text": "Show that twenty-four options always outsell six options"
    },
    {
      "id": "D",
      "text": "Confirm that wider choice always increases satisfaction"
    },
    {
      "id": "E",
      "text": "Introduce an unrelated point about supermarket layout"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The study directly counters the stated assumption with an empirical counterexample.",
  "difficulty": "easy",
  "type": "logical_structure"
},
{
  "question_id": "standalone-013",
  "topic": "The tyranny of small decisions",
  "passage": "Each individual commuter's choice to drive rather than take public transport is reasonable given their own convenience, yet the cumulative effect of millions of similar individual choices produces the very traffic congestion that makes driving inconvenient for everyone, including each individual driver who contributed to it.",
  "prompt": "The passage illustrates a pattern in which:",
  "options": [
    {
      "id": "A",
      "text": "A sequence of individually reasonable decisions cumulatively produces an outcome undesirable to those making the decisions"
    },
    {
      "id": "B",
      "text": "Public transport is always more convenient than driving"
    },
    {
      "id": "C",
      "text": "Individual commuters never consider their own convenience"
    },
    {
      "id": "D",
      "text": "Traffic congestion has no relationship to individual choices"
    },
    {
      "id": "E",
      "text": "Every commuter benefits from choosing to drive"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This describes exactly the cumulative, self-undermining pattern in the passage.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-014",
  "topic": "Confirmation bias in political news consumption",
  "passage": "People tend to select news sources that align with views they already hold and to scrutinise contrary evidence more critically than supporting evidence, a pattern that can make individuals feel increasingly confident in their existing views even as the actual balance of evidence remains genuinely mixed or uncertain.",
  "prompt": "The passage implies that increased confidence produced by this pattern is:",
  "options": [
    {
      "id": "A",
      "text": "Not necessarily a reliable indicator that the underlying evidence has actually become more one-sided"
    },
    {
      "id": "B",
      "text": "Always a sign that the evidence has become more conclusive"
    },
    {
      "id": "C",
      "text": "Irrelevant to how people select news sources"
    },
    {
      "id": "D",
      "text": "Proof that contrary evidence is always wrong"
    },
    {
      "id": "E",
      "text": "Something that never actually occurs among any news consumers"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The passage notes confidence rises even as the evidence 'remains genuinely mixed', implying confidence and actual evidential support can diverge.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-015",
  "topic": "The broken windows theory of policing",
  "passage": "A theory in criminology holds that visible signs of disorder, broken windows, graffiti, litter, signal that a neighbourhood is unmonitored, encouraging further disorder and eventually more serious crime. Critics argue the theory's empirical support is weaker than its popularity suggests, since areas that adopted aggressive minor-offence enforcement did not consistently show larger crime reductions than comparable areas that did not.",
  "prompt": "The critics' point in the passage functions to:",
  "options": [
    {
      "id": "A",
      "text": "Challenge the theory's practical implications by questioning its actual empirical track record"
    },
    {
      "id": "B",
      "text": "Prove that disorder has never preceded any serious crime"
    },
    {
      "id": "C",
      "text": "Confirm that broken windows policing always reduces crime"
    },
    {
      "id": "D",
      "text": "Show that graffiti causes crime directly"
    },
    {
      "id": "E",
      "text": "Introduce an unrelated point about urban planning"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The critics specifically question the empirical support, challenging the theory's practical basis.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-016",
  "topic": "The winner's curse in competitive bidding",
  "passage": "In an auction for an item of uncertain value, the winning bidder is, by definition, the person who valued the item most highly among all bidders, which means the winning bid is statistically more likely than the average bid to have overestimated the item's true value, a systematic bias termed the winner's curse.",
  "prompt": "The passage's explanation for the winner's curse depends on the fact that the winning bid is:",
  "options": [
    {
      "id": "A",
      "text": "Selected specifically because it is the highest among all submitted estimates, which biases it toward overestimation"
    },
    {
      "id": "B",
      "text": "Always exactly equal to the item's true value"
    },
    {
      "id": "C",
      "text": "Chosen at random from among all bids submitted"
    },
    {
      "id": "D",
      "text": "Always the lowest bid submitted"
    },
    {
      "id": "E",
      "text": "Unrelated to any other bidder's estimate"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: being the highest of many estimates statistically biases the winning bid toward overestimation.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-017",
  "topic": "The Peter principle in organisational hierarchies",
  "passage": "An employee who performs well in their current role is often promoted to a new role requiring different skills, a process that, applied repeatedly, tends to promote competent people until they reach a role at which they are no longer competent, since promotion criteria track performance in the prior role rather than aptitude for the new one.",
  "prompt": "The passage's argument rests on a distinction between:",
  "options": [
    {
      "id": "A",
      "text": "Competence in a current role and aptitude for the different skills a promoted role actually requires"
    },
    {
      "id": "B",
      "text": "Two roles that require identical skills in every case"
    },
    {
      "id": "C",
      "text": "Employees who are promoted and employees who are never promoted"
    },
    {
      "id": "D",
      "text": "Organisations that promote employees and those that never do"
    },
    {
      "id": "E",
      "text": "No meaningful distinction of any kind"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The argument hinges precisely on this distinction between current-role performance and new-role aptitude.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-018",
  "topic": "Regression to the mean in sports performance",
  "passage": "An athlete who has an exceptionally strong season is statistically likely to perform closer to their career average the following season, not because of any decline in ability, but simply because an unusually good result is, by definition, less likely to repeat than to be followed by a more typical outcome.",
  "prompt": "The passage implies that a decline in performance following an exceptional season should not automatically be attributed to:",
  "options": [
    {
      "id": "A",
      "text": "A genuine decline in the athlete's underlying ability"
    },
    {
      "id": "B",
      "text": "Any statistical pattern whatsoever"
    },
    {
      "id": "C",
      "text": "The athlete's career average performance level"
    },
    {
      "id": "D",
      "text": "An unusually good result being unlikely to repeat"
    },
    {
      "id": "E",
      "text": "The general concept of statistical variation"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The passage explicitly says the change is 'not because of any decline in ability' but a statistical pattern.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-019",
  "topic": "The framing effect in medical decision-making",
  "passage": "Patients presented with a treatment's outcome as '90% survival rate' are more likely to choose it than patients told the mathematically identical '10% mortality rate', even though the underlying statistical reality communicated is exactly the same in both cases.",
  "prompt": "The passage's central point is that patient choices can be influenced by:",
  "options": [
    {
      "id": "A",
      "text": "How statistically identical information is framed, independent of the information's actual content"
    },
    {
      "id": "B",
      "text": "The actual survival rate alone, regardless of how it is described"
    },
    {
      "id": "C",
      "text": "A genuine difference in the underlying statistical reality between the two framings"
    },
    {
      "id": "D",
      "text": "Factors entirely unrelated to how information is presented"
    },
    {
      "id": "E",
      "text": "Patients' complete indifference to any framing of medical information"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The passage shows framing alone changes choices despite identical underlying statistics.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-020",
  "topic": "The endowment effect in negotiation",
  "passage": "People tend to demand a higher price to give up an object they already own than they would be willing to pay to acquire the identical object if they did not yet own it, a discrepancy that persists even where the object has no sentimental value and was acquired only moments earlier in a controlled experiment.",
  "prompt": "The passage's mention that the discrepancy 'persists even where the object has no sentimental value' functions to:",
  "options": [
    {
      "id": "A",
      "text": "Rule out sentimental attachment as the explanation for the observed pricing gap"
    },
    {
      "id": "B",
      "text": "Prove that sentimental value always explains the pricing gap"
    },
    {
      "id": "C",
      "text": "Show that the effect only occurs with sentimentally valuable objects"
    },
    {
      "id": "D",
      "text": "Argue that ownership has no effect on pricing at all"
    },
    {
      "id": "E",
      "text": "Introduce an unrelated point about auction design"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This detail is used to eliminate sentimental attachment as an alternative explanation.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-021",
  "topic": "The paradox of hedonism",
  "passage": "Individuals who pursue happiness as a direct, deliberate goal often report lower life satisfaction than individuals who pursue other meaningful activities and experience happiness as an indirect by-product, suggesting that happiness may be a state that resists being reliably achieved through direct pursuit.",
  "prompt": "The passage suggests that happiness is best understood as:",
  "options": [
    {
      "id": "A",
      "text": "A state more reliably achieved indirectly, as a by-product of other pursuits, than through direct pursuit"
    },
    {
      "id": "B",
      "text": "A goal that should always be pursued directly and deliberately"
    },
    {
      "id": "C",
      "text": "Something entirely unrelated to any activity a person undertakes"
    },
    {
      "id": "D",
      "text": "A state guaranteed by any deliberate pursuit of it"
    },
    {
      "id": "E",
      "text": "Something no individual has ever successfully achieved"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Matches the passage's core claim about direct versus indirect pursuit of happiness.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-022",
  "topic": "Simpson's paradox in aggregated data",
  "passage": "A university's overall admission rate might appear to favour one demographic group over another, yet when the data is broken down by individual academic department, the opposite group may actually have a higher or equal admission rate in every single department, a reversal explained by differing application rates to departments with different overall admission rates.",
  "prompt": "The passage's example illustrates that:",
  "options": [
    {
      "id": "A",
      "text": "A trend visible in aggregated data can reverse or disappear when the same data is disaggregated into subgroups"
    },
    {
      "id": "B",
      "text": "Aggregated data is always more accurate than disaggregated data"
    },
    {
      "id": "C",
      "text": "Admission rates never actually vary between departments"
    },
    {
      "id": "D",
      "text": "One demographic group always has identical admission rates across every department"
    },
    {
      "id": "E",
      "text": "Disaggregating data always confirms the aggregate trend"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is Simpson's paradox, exactly as illustrated by the example.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-023",
  "topic": "The Streisand effect in reputation management",
  "passage": "An individual's attempt to suppress publication of embarrassing information sometimes draws far more attention to that information than an unchallenged publication ever would have received, since the suppression attempt itself becomes a newsworthy story attracting curiosity the original information alone might not have generated.",
  "prompt": "The passage implies that an attempt to suppress information can be counterproductive because:",
  "options": [
    {
      "id": "A",
      "text": "The suppression attempt itself can become a newsworthy story generating more attention than the original information alone"
    },
    {
      "id": "B",
      "text": "Suppression attempts are always completely effective at hiding information"
    },
    {
      "id": "C",
      "text": "Original information never attracts any public attention on its own"
    },
    {
      "id": "D",
      "text": "No individual has ever attempted to suppress embarrassing information"
    },
    {
      "id": "E",
      "text": "Suppression has no relationship to public curiosity"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the mechanism behind the counterproductive effect.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-024",
  "topic": "The paradox of skill in competitive investing",
  "passage": "As the average skill level of participants in a competitive activity rises over time, luck becomes a relatively larger determinant of who wins any specific instance of the competition, since increasingly similar skill levels leave a smaller residual skill gap for outcomes to track, even though the participants themselves have become more skilled in absolute terms.",
  "prompt": "The passage's argument depends on a distinction between:",
  "options": [
    {
      "id": "A",
      "text": "Absolute skill level and the relative skill gap between competitors that determines outcome variance"
    },
    {
      "id": "B",
      "text": "Two forms of luck that are identical in every respect"
    },
    {
      "id": "C",
      "text": "Competitions that involve skill and competitions that involve no skill at all"
    },
    {
      "id": "D",
      "text": "Participants who compete and participants who never compete"
    },
    {
      "id": "E",
      "text": "No meaningful distinction of any kind"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This distinction between absolute skill and relative skill gap is exactly what the argument relies on.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-025",
  "topic": "The planning fallacy in project estimation",
  "passage": "Project planners consistently underestimate how long a task will take, even when they have direct personal experience of similar past projects running over their original estimated schedule, a bias that persists despite planners possessing the very historical information that should, in principle, correct it.",
  "prompt": "The passage's final clause, noting the bias persists 'despite planners possessing the very historical information that should... correct it', functions to:",
  "options": [
    {
      "id": "A",
      "text": "Emphasise that the bias is not simply a lack of relevant information"
    },
    {
      "id": "B",
      "text": "Prove that planners never have access to any historical information"
    },
    {
      "id": "C",
      "text": "Show that historical information always corrects the bias"
    },
    {
      "id": "D",
      "text": "Argue that project planning should be abandoned entirely"
    },
    {
      "id": "E",
      "text": "Introduce an unrelated point about project management software"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This clarifies the bias is not a simple information gap, since the corrective information is already available.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-026",
  "topic": "The just-world hypothesis and victim blaming",
  "passage": "Observers of an unjust event sometimes attribute at least partial responsibility to the victim, a tendency researchers link to a psychological need to believe the world is fundamentally fair, since accepting that a genuinely innocent person suffered for no reason at all threatens that underlying belief more than assigning some fault to the victim would.",
  "prompt": "The passage suggests that victim-blaming can arise from:",
  "options": [
    {
      "id": "A",
      "text": "A psychological motivation to preserve a belief in a fundamentally fair world, rather than an objective assessment of the evidence"
    },
    {
      "id": "B",
      "text": "An accurate, evidence-based assessment of the victim's actual responsibility in every case"
    },
    {
      "id": "C",
      "text": "A universal recognition that all victims are entirely at fault"
    },
    {
      "id": "D",
      "text": "No psychological mechanism of any kind"
    },
    {
      "id": "E",
      "text": "A belief that the world is fundamentally unfair"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the psychological motivation behind the tendency.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-027",
  "topic": "The paradox of tolerance revisited through comedy",
  "passage": "Comedians sometimes defend deliberately offensive jokes by appeal to the principle that comedy should have no limits, yet the same comedians rarely defend a joke made deliberately at their own most painful personal expense using the identical principle, suggesting the appeal to an absolute principle may function selectively rather than being genuinely held without exception.",
  "prompt": "The passage's observation about comedians' selective application of the principle functions to:",
  "options": [
    {
      "id": "A",
      "text": "Suggest the stated principle may not actually be held as an unconditional commitment"
    },
    {
      "id": "B",
      "text": "Prove that all comedy should be banned"
    },
    {
      "id": "C",
      "text": "Show that comedians never make jokes at anyone's expense"
    },
    {
      "id": "D",
      "text": "Confirm that comedy genuinely has no limits for any comedian"
    },
    {
      "id": "E",
      "text": "Introduce an unrelated point about comedy club policy"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The selective application casts doubt on whether the stated absolute principle is genuinely held.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-028",
  "topic": "Availability heuristic and risk perception",
  "passage": "People commonly rate the risk of dying in a plane crash as higher than the risk of dying in a car crash, despite car travel being statistically far more dangerous per mile travelled, a discrepancy attributed to plane crashes receiving disproportionate, vivid media coverage that makes them easier to recall and therefore feel more probable.",
  "prompt": "The passage's explanation for the discrepancy in perceived risk relies on:",
  "options": [
    {
      "id": "A",
      "text": "The ease with which an event can be recalled influencing how probable it is judged to be"
    },
    {
      "id": "B",
      "text": "Plane travel being statistically more dangerous than car travel"
    },
    {
      "id": "C",
      "text": "People having no exposure to any media coverage of accidents"
    },
    {
      "id": "D",
      "text": "Car crashes receiving more media coverage than plane crashes"
    },
    {
      "id": "E",
      "text": "An accurate statistical assessment of actual risk by most people"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the availability heuristic, explicitly described as ease of recall shaping probability judgements.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-029",
  "topic": "The Abilene paradox in group decision-making",
  "passage": "A group of individuals can unanimously agree to a course of action that not one of them individually wanted, each person having gone along with what they mistakenly assumed was the group's genuine preference rather than voicing their own private reservations, producing an outcome no one actually desired.",
  "prompt": "The passage describes a situation in which:",
  "options": [
    {
      "id": "A",
      "text": "A unanimous group decision fails to reflect any individual member's actual private preference"
    },
    {
      "id": "B",
      "text": "Every group member genuinely wanted the chosen outcome"
    },
    {
      "id": "C",
      "text": "Group decisions always accurately reflect each member's true preference"
    },
    {
      "id": "D",
      "text": "No group has ever reached a unanimous decision"
    },
    {
      "id": "E",
      "text": "Private reservations are always voiced openly in group settings"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is exactly the paradox described: unanimous agreement despite no individual actually wanting it.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-030",
  "topic": "The hindsight bias in evaluating past decisions",
  "passage": "After an outcome is known, observers tend to believe they would have predicted it all along, judging a decision-maker's prior choice more harshly than the information genuinely available at the time of the decision would actually justify, since the observer's own knowledge of the outcome contaminates their assessment of how predictable that outcome truly was in advance.",
  "prompt": "The passage implies that a fair assessment of a past decision should be based on:",
  "options": [
    {
      "id": "A",
      "text": "The information genuinely available at the time the decision was made, not the outcome now known"
    },
    {
      "id": "B",
      "text": "The outcome that eventually occurred, regardless of what information was available beforehand"
    },
    {
      "id": "C",
      "text": "The observer's own current knowledge of how events unfolded"
    },
    {
      "id": "D",
      "text": "No information of any kind"
    },
    {
      "id": "E",
      "text": "A prediction made only after the outcome became known"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the standard hindsight bias distorts.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-031",
  "topic": "The paradox of automation complacency",
  "passage": "Automated systems designed to reduce human error can, over time, cause human operators' own vigilance and manual skill to atrophy from disuse, meaning that when the automation eventually fails or encounters a scenario it cannot handle, the human operator may be less prepared to intervene effectively than an operator who never had automated assistance at all.",
  "prompt": "The passage's central concern is that automation may:",
  "options": [
    {
      "id": "A",
      "text": "Reduce ordinary errors while degrading human capability to handle the rarer cases automation itself cannot manage"
    },
    {
      "id": "B",
      "text": "Always eliminate every possible error without any downside"
    },
    {
      "id": "C",
      "text": "Have no effect whatsoever on human operator skill"
    },
    {
      "id": "D",
      "text": "Never fail or encounter any scenario it cannot handle"
    },
    {
      "id": "E",
      "text": "Improve human vigilance more than manual operation would"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This captures the trade-off described: reduced routine error against degraded readiness for edge cases.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-032",
  "topic": "The Lindy effect and cultural longevity",
  "passage": "For certain non-perishable ideas, technologies, or works, the longer something has already survived, the longer its remaining expected lifespan tends to be, since ongoing survival itself is evidence the thing has proven robust against whatever pressures might have eliminated less durable alternatives over the same period.",
  "prompt": "The passage's reasoning treats past survival as:",
  "options": [
    {
      "id": "A",
      "text": "Evidence of robustness that supports a longer expected remaining lifespan"
    },
    {
      "id": "B",
      "text": "Entirely unrelated to how long something is likely to persist further"
    },
    {
      "id": "C",
      "text": "Proof that something will survive forever without exception"
    },
    {
      "id": "D",
      "text": "A guarantee that all older things are equally durable"
    },
    {
      "id": "E",
      "text": "A sign that something is about to fail imminently"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Matches the passage's core claim linking past survival to expected future durability.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-033",
  "topic": "The IKEA effect and perceived value",
  "passage": "People tend to place a disproportionately high value on products they partially assembled themselves compared to an identical, pre-assembled version of the same product, suggesting that the effort invested in creation itself becomes a source of attachment independent of the finished object's actual functional quality.",
  "prompt": "The passage implies that the source of the added value is:",
  "options": [
    {
      "id": "A",
      "text": "The effort invested in assembly, rather than any difference in the finished product's functional quality"
    },
    {
      "id": "B",
      "text": "A genuine improvement in the product's functional quality from self-assembly"
    },
    {
      "id": "C",
      "text": "The price paid for the product"
    },
    {
      "id": "D",
      "text": "A factor entirely unrelated to the assembly process"
    },
    {
      "id": "E",
      "text": "The manufacturer's brand reputation"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: the attachment is 'independent of the finished object's actual functional quality'.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-034",
  "topic": "The paradox of enrichment in ecology",
  "passage": "Increasing the food supply available to a predator population might be expected to stabilise it, yet ecological models show that enriching a prey population's resources beyond a certain threshold can instead destabilise the predator-prey system, producing larger population swings that increase the risk of extinction for one or both species.",
  "prompt": "The passage's central point is that resource enrichment can:",
  "options": [
    {
      "id": "A",
      "text": "Destabilise rather than stabilise an ecological system beyond a certain threshold"
    },
    {
      "id": "B",
      "text": "Always stabilise any predator-prey system regardless of the amount added"
    },
    {
      "id": "C",
      "text": "Have no effect whatsoever on population dynamics"
    },
    {
      "id": "D",
      "text": "Guarantee the extinction of every species involved"
    },
    {
      "id": "E",
      "text": "Apply only to systems with no predator population at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Matches the passage's explicit, counterintuitive claim about enrichment destabilising the system.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-035",
  "topic": "The paradox of plenty in resource-rich economies",
  "passage": "Countries with abundant natural resources sometimes experience slower long-term economic growth than resource-poor countries, a pattern attributed partly to resource wealth reducing the incentive to develop other productive economic sectors and partly to resource revenue increasing incentives for corruption and rent-seeking around controlling that revenue.",
  "prompt": "The passage offers which type of explanation for the observed pattern?",
  "options": [
    {
      "id": "A",
      "text": "Two distinct causal mechanisms operating together to produce the slower growth"
    },
    {
      "id": "B",
      "text": "A single, exclusive cause with no other contributing factor"
    },
    {
      "id": "C",
      "text": "A denial that any such pattern actually exists"
    },
    {
      "id": "D",
      "text": "An explanation based purely on random chance"
    },
    {
      "id": "E",
      "text": "A claim that resource wealth always accelerates growth"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The passage explicitly names two distinct mechanisms, 'partly... and partly...'.",
  "difficulty": "easy",
  "type": "logical_structure"
},
{
  "question_id": "standalone-036",
  "topic": "The paradox of voter apathy",
  "passage": "An individual voter's chance of casting the deciding vote in a large election is vanishingly small, yet if every voter reasoned this way and abstained on that basis, elections would be decided by an arbitrarily tiny fraction of the electorate, an outcome most individual voters would presumably consider illegitimate or undesirable.",
  "prompt": "The passage's argument functions similarly to which other pattern discussed elsewhere in this practice paper?",
  "options": [
    {
      "id": "A",
      "text": "A tension between individually rational reasoning and a collectively undesirable outcome if generalised"
    },
    {
      "id": "B",
      "text": "A situation with no tension between individual and collective interest"
    },
    {
      "id": "C",
      "text": "An argument that voting is always individually irrational"
    },
    {
      "id": "D",
      "text": "A claim that elections are never decided by small numbers of voters"
    },
    {
      "id": "E",
      "text": "A proof that all voters actually want low turnout"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This mirrors the individual-rational/collectively-undesirable tension found in cases like the tragedy of the commons.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-037",
  "topic": "The paradox of prediction markets",
  "passage": "Prediction markets aggregate many individual traders' private information into a single probability estimate through the price mechanism, often outperforming individual experts, yet the market's accuracy paradoxically depends on enough traders believing they can profit by disagreeing with the current price, since a market where everyone agreed would generate no further trading to refine the estimate.",
  "prompt": "The passage identifies which underlying requirement for a prediction market's continued accuracy?",
  "options": [
    {
      "id": "A",
      "text": "Ongoing disagreement among traders sufficient to sustain the trading that refines the price"
    },
    {
      "id": "B",
      "text": "Complete agreement among all traders on the correct probability"
    },
    {
      "id": "C",
      "text": "A single expert whose judgement all traders defer to"
    },
    {
      "id": "D",
      "text": "No trading activity of any kind after the market opens"
    },
    {
      "id": "E",
      "text": "A guarantee that every individual trader is always correct"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: accuracy depends on traders believing they can profit by disagreeing, sustaining ongoing trading.",
  "difficulty": "hard",
  "type": "assumption"
},
{
  "question_id": "standalone-038",
  "topic": "The paradox of thrift applied to personal debt advice",
  "passage": "Financial advisers generally recommend that an individual facing debt should cut discretionary spending, sound advice for that specific individual. If applied simultaneously by a large share of a national population during an economic downturn, however, the resulting fall in aggregate consumer spending can deepen the very downturn that made the advice seem prudent to households in the first place.",
  "prompt": "The passage's structure mirrors an argument made elsewhere in this practice paper regarding:",
  "options": [
    {
      "id": "A",
      "text": "The paradox of thrift, in which individually rational saving can worsen collective economic outcomes"
    },
    {
      "id": "B",
      "text": "A claim that debt reduction is always harmful to any individual"
    },
    {
      "id": "C",
      "text": "An argument that spending should never be reduced under any circumstances"
    },
    {
      "id": "D",
      "text": "A proof that economic downturns never actually occur"
    },
    {
      "id": "E",
      "text": "A denial that individual financial advice can ever be sound"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a direct application of the paradox of thrift structure to personal debt advice.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-039",
  "topic": "The observer effect in workplace productivity studies",
  "passage": "Workers being observed as part of a study on workplace conditions often improve their productivity regardless of which specific change to lighting, breaks, or supervision the study actually tested, a pattern suggesting the mere fact of being observed, rather than the specific intervention itself, may be driving at least part of the measured improvement.",
  "prompt": "The passage's finding complicates interpretation of workplace studies because it suggests:",
  "options": [
    {
      "id": "A",
      "text": "An observed improvement may reflect the act of observation itself rather than the specific intervention being tested"
    },
    {
      "id": "B",
      "text": "Lighting changes always produce identical results to changes in break schedules"
    },
    {
      "id": "C",
      "text": "Workers are never affected by being observed in any way"
    },
    {
      "id": "D",
      "text": "No workplace study has ever measured any change in productivity"
    },
    {
      "id": "E",
      "text": "Supervision changes are always the most effective intervention"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the Hawthorne effect, described exactly as complicating attribution of the improvement to the specific intervention.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-040",
  "topic": "The paradox of abundance in attention economies",
  "passage": "As the total volume of available online content has grown enormously, the truly scarce resource has shifted from content itself to human attention, since a piece of content's economic value increasingly depends less on its own creation cost and more on a creator's ability to capture a share of a fundamentally limited pool of viewer attention that grows far more slowly than content supply does.",
  "prompt": "The passage's central claim is that as content supply grows, the scarce resource shifts to:",
  "options": [
    {
      "id": "A",
      "text": "Human attention, which grows far more slowly than the supply of available content"
    },
    {
      "id": "B",
      "text": "Content creation costs, which rise faster than attention"
    },
    {
      "id": "C",
      "text": "A resource that has become more abundant than content itself"
    },
    {
      "id": "D",
      "text": "Nothing, since no resource remains scarce in this scenario"
    },
    {
      "id": "E",
      "text": "The technology used to distribute content"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the passage's central claim about the shifting scarce resource.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-041",
  "topic": "Argument from precedent by analogy",
  "passage": "A lawyer argues that because an earlier case allowed recovery for emotional distress caused by witnessing a car accident, a client who witnessed a workplace injury should recover similarly. The argument's strength depends entirely on how closely the two situations actually resemble each other in the respects that mattered to the earlier decision.",
  "prompt": "The passage implies that an analogy to precedent is only as strong as:",
  "options": [
    {
      "id": "A",
      "text": "The similarity between the two cases in the specific respects that drove the earlier decision"
    },
    {
      "id": "B",
      "text": "The number of years since the earlier case was decided"
    },
    {
      "id": "C",
      "text": "The reputation of the judge who decided the earlier case"
    },
    {
      "id": "D",
      "text": "The total number of cases citing the earlier decision"
    },
    {
      "id": "E",
      "text": "The specific court in which the earlier case was decided"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: strength depends on resemblance in the respects that mattered to the earlier decision.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-042",
  "topic": "Burden of proof allocation",
  "passage": "In a civil negligence claim, the claimant must prove their case on the balance of probabilities, a lower standard than the criminal 'beyond reasonable doubt' threshold. Critics of a proposed reform argue that shifting the burden onto defendants in specific categories of case would require them to prove a negative, that they were not negligent, a task inherently harder than proving a positive claim.",
  "prompt": "The critics' objection in the passage centres on:",
  "options": [
    {
      "id": "A",
      "text": "The comparative difficulty of proving a negative claim relative to proving a positive one"
    },
    {
      "id": "B",
      "text": "A claim that no civil case has ever succeeded"
    },
    {
      "id": "C",
      "text": "A demand that criminal and civil standards be made identical"
    },
    {
      "id": "D",
      "text": "An argument that claimants should never bear any burden of proof"
    },
    {
      "id": "E",
      "text": "A point unrelated to who bears the burden of proof"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the reason for objecting to the burden shift.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-043",
  "topic": "Presumption of regularity in official acts",
  "passage": "Courts generally presume that public officials performed their duties correctly and in accordance with proper procedure unless specific evidence suggests otherwise, a presumption that shifts the practical burden onto a challenger to produce some affirmative evidence of irregularity rather than requiring the official to prove correctness from scratch in every case.",
  "prompt": "The passage implies the presumption of regularity primarily affects:",
  "options": [
    {
      "id": "A",
      "text": "Which party must produce evidence to prompt further scrutiny of an official act"
    },
    {
      "id": "B",
      "text": "Whether officials are ever permitted to make any decision"
    },
    {
      "id": "C",
      "text": "The criminal liability of officials who make honest mistakes"
    },
    {
      "id": "D",
      "text": "The total number of public officials employed by a government"
    },
    {
      "id": "E",
      "text": "Whether courts ever review official conduct at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: it shifts the practical burden of producing evidence onto the challenger.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-044",
  "topic": "The slippery slope argument in policy debate",
  "passage": "An opponent of a modest proposed restriction argues that accepting it will inevitably lead to increasingly severe restrictions down the line, though the argument does not explain what specific mechanism would compel each successive step rather than allowing the restriction to remain at its originally proposed, modest level.",
  "prompt": "The passage's criticism of the slippery slope argument is that it:",
  "options": [
    {
      "id": "A",
      "text": "Fails to specify the mechanism that would compel each successive step toward the predicted extreme"
    },
    {
      "id": "B",
      "text": "Always accurately predicts the outcome of any policy change"
    },
    {
      "id": "C",
      "text": "Proves that the original modest proposal is entirely justified"
    },
    {
      "id": "D",
      "text": "Shows that no policy has ever escalated over time"
    },
    {
      "id": "E",
      "text": "Requires no evidence of any kind to be persuasive"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the specific gap in the slippery slope reasoning.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-045",
  "topic": "Post hoc reasoning in causation disputes",
  "passage": "A claimant argues that because their symptoms began shortly after taking a medication, the medication must have caused the symptoms, without ruling out other events occurring in the same period that could equally explain the onset, an inference sometimes summarised as 'after this, therefore because of this'.",
  "prompt": "The passage identifies a flaw in reasoning that mistakes:",
  "options": [
    {
      "id": "A",
      "text": "Temporal sequence for proof of causation"
    },
    {
      "id": "B",
      "text": "A medication's chemical composition for its legal classification"
    },
    {
      "id": "C",
      "text": "A claimant's honesty for the accuracy of their claim"
    },
    {
      "id": "D",
      "text": "A court's jurisdiction for its actual authority"
    },
    {
      "id": "E",
      "text": "A symptom's severity for its underlying cause"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the post hoc fallacy: temporal sequence alone is treated as proof of causation.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-046",
  "topic": "The straw man fallacy in adversarial argument",
  "passage": "An advocate arguing against a proposed data privacy law characterises it as banning all use of customer data whatsoever, then persuasively refutes this extreme version, even though the actual proposal only restricts specific uses without imposing any general ban.",
  "prompt": "The advocate's tactic in the passage is best described as:",
  "options": [
    {
      "id": "A",
      "text": "Refuting an exaggerated version of the opposing position rather than the position actually held"
    },
    {
      "id": "B",
      "text": "Accurately representing and directly refuting the actual proposal"
    },
    {
      "id": "C",
      "text": "Conceding that the proposed law is entirely reasonable"
    },
    {
      "id": "D",
      "text": "Presenting statistical evidence against the proposal"
    },
    {
      "id": "E",
      "text": "Appealing to the authority of a recognised data privacy expert"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the straw man fallacy: refuting an exaggerated version rather than the actual proposal.",
  "difficulty": "easy",
  "type": "logical_structure"
},
{
  "question_id": "standalone-047",
  "topic": "Circular reasoning in defining legal terms",
  "passage": "A statute defines a 'dangerous dog' partly by reference to whether the dog has previously exhibited 'dangerous behaviour', a definition that risks circularity if 'dangerous behaviour' is itself understood only by reference back to what a 'dangerous dog' typically does, leaving the underlying concept without any independent content.",
  "prompt": "The passage's concern about the statutory definition is that it may:",
  "options": [
    {
      "id": "A",
      "text": "Rely on each term to define the other, leaving no independent content to either"
    },
    {
      "id": "B",
      "text": "Provide an overly precise and narrow definition of dangerous behaviour"
    },
    {
      "id": "C",
      "text": "Apply to every dog regardless of behaviour"
    },
    {
      "id": "D",
      "text": "Exclude all dogs from the statute's coverage"
    },
    {
      "id": "E",
      "text": "Require no reference to any prior behaviour at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is circular definition: each term is defined by reference to the other.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-048",
  "topic": "The false dilemma in binary policy framing",
  "passage": "A commentator frames a debate over sentencing reform as a choice between 'being tough on crime' and 'letting criminals go free', a framing that excludes a wide range of intermediate positions, including reforms that increase certainty of punishment while reducing sentence length, that do not fit neatly into either stated extreme.",
  "prompt": "The commentator's framing illustrates which reasoning error?",
  "options": [
    {
      "id": "A",
      "text": "Presenting only two extreme options while excluding a range of intermediate positions that also exist"
    },
    {
      "id": "B",
      "text": "Providing an exhaustive account of every possible sentencing policy"
    },
    {
      "id": "C",
      "text": "Accurately representing the full range of positions actually held by reform advocates"
    },
    {
      "id": "D",
      "text": "Offering a nuanced comparison of multiple sentencing reforms"
    },
    {
      "id": "E",
      "text": "Correctly identifying the only two policies ever proposed"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a false dilemma: excluding a range of intermediate options.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-049",
  "topic": "Equivocation in statutory language",
  "passage": "A statute prohibits 'discrimination' in employment, while a separate defence permits an employer to make a 'reasonable distinction' based on genuine occupational requirements, an argument might exploit ambiguity by treating any distinction at all as either automatically discriminatory or automatically reasonable, without acknowledging the statute intends a meaningful difference between the two categories.",
  "prompt": "The passage warns against an argument that:",
  "options": [
    {
      "id": "A",
      "text": "Uses a key term inconsistently across the argument to blur a distinction the statute intends to preserve"
    },
    {
      "id": "B",
      "text": "Consistently applies a single, clear definition of discrimination throughout"
    },
    {
      "id": "C",
      "text": "Correctly distinguishes discrimination from reasonable occupational distinctions in every case"
    },
    {
      "id": "D",
      "text": "Never uses the word 'discrimination' at all"
    },
    {
      "id": "E",
      "text": "Relies entirely on statistical evidence rather than statutory language"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is equivocation: shifting the meaning of a term to blur an intended distinction.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-050",
  "topic": "The appeal to tradition in legal argument",
  "passage": "A defender of an old procedural rule argues it should be retained simply because it has governed court practice for over a century, without addressing whether the rule still serves any function given significant changes in case volume and available technology since it was first adopted.",
  "prompt": "The defender's argument relies primarily on:",
  "options": [
    {
      "id": "A",
      "text": "The rule's age and historical continuity, rather than evidence of its continued functional value"
    },
    {
      "id": "B",
      "text": "A detailed cost-benefit analysis of the rule's current effects"
    },
    {
      "id": "C",
      "text": "Evidence that the rule improves case processing efficiency today"
    },
    {
      "id": "D",
      "text": "A comparison with rules used in other modern court systems"
    },
    {
      "id": "E",
      "text": "An assessment of the rule's effect on case volume"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is an appeal to tradition: relying on age and continuity rather than current functional evidence.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-051",
  "topic": "Hasty generalisation from a single case",
  "passage": "After one widely reported case in which a rehabilitation programme failed to prevent reoffending, a commentator concludes that all such programmes are ineffective, without examining the broader body of outcome data across the many other instances in which similar programmes have been implemented.",
  "prompt": "The commentator's conclusion illustrates the risk of:",
  "options": [
    {
      "id": "A",
      "text": "Generalising from a single, possibly unrepresentative case to a conclusion about an entire category"
    },
    {
      "id": "B",
      "text": "Relying on a comprehensive review of all available outcome data"
    },
    {
      "id": "C",
      "text": "Correctly identifying a genuine, well-supported statistical pattern"
    },
    {
      "id": "D",
      "text": "Ignoring the single case entirely in favour of no evidence at all"
    },
    {
      "id": "E",
      "text": "Accurately representing the full range of rehabilitation programme outcomes"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is hasty generalisation: drawing a broad conclusion from one unrepresentative case.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-052",
  "topic": "The genetic fallacy in dismissing an argument's origin",
  "passage": "A politician dismisses a policy proposal by noting it originated with a think tank funded by a specific industry, without addressing whether the proposal's actual arguments and evidence are sound, treating the source's potential bias as though it settled the substantive merits of the proposal itself.",
  "prompt": "The politician's dismissal illustrates a reasoning error in which:",
  "options": [
    {
      "id": "A",
      "text": "An argument's origin is treated as sufficient to settle its substantive merit, without engaging the argument itself"
    },
    {
      "id": "B",
      "text": "The proposal's evidence is carefully and directly examined"
    },
    {
      "id": "C",
      "text": "The think tank's funding source is shown to have distorted the specific data cited"
    },
    {
      "id": "D",
      "text": "The proposal is accepted despite its questionable origin"
    },
    {
      "id": "E",
      "text": "No claim is made about the proposal's origin at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the genetic fallacy: judging an argument by its source rather than its content.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-053",
  "topic": "Ad hominem reasoning in witness credibility attacks",
  "passage": "During cross-examination, an advocate attacks a witness's character on an unrelated matter from many years earlier rather than challenging the specific factual accuracy of the witness's testimony about the events at issue in the current case, hoping the jury will discount the testimony based on the witness's general character rather than its actual content.",
  "prompt": "The advocate's tactic in the passage is best classified as:",
  "options": [
    {
      "id": "A",
      "text": "An attack on the witness's character rather than a challenge to the substance of their testimony"
    },
    {
      "id": "B",
      "text": "A direct challenge to the specific factual claims made by the witness"
    },
    {
      "id": "C",
      "text": "An appeal to independent corroborating evidence"
    },
    {
      "id": "D",
      "text": "A demonstration that the testimony is internally inconsistent"
    },
    {
      "id": "E",
      "text": "A neutral, factual cross-examination of the events in question"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is an ad hominem attack: targeting the person rather than the substance of the testimony.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-054",
  "topic": "The composition fallacy in class action reasoning",
  "passage": "An argument holds that because each individual claimant in a proposed class suffered only a small, similar financial loss, the class as a whole must therefore have suffered only a small aggregate loss, an inference that ignores how many individually small losses can sum to a substantial total once properly aggregated across a large class.",
  "prompt": "The passage's criticism identifies a fallacy in which:",
  "options": [
    {
      "id": "A",
      "text": "A property true of each individual part is wrongly assumed to hold, in the same form, for the whole"
    },
    {
      "id": "B",
      "text": "The whole's properties are correctly derived from the sum of its individual parts"
    },
    {
      "id": "C",
      "text": "No individual claimant suffered any loss whatsoever"
    },
    {
      "id": "D",
      "text": "The aggregate loss is calculated with excessive precision"
    },
    {
      "id": "E",
      "text": "Each individual claimant suffered a different type of loss"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the fallacy of composition: assuming a property of the parts holds for the whole.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-055",
  "topic": "The division fallacy in group liability",
  "passage": "A prosecutor argues that because a company as a whole engaged in fraudulent conduct, every individual employee of that company must therefore have personally participated in or known about the fraud, an inference that wrongly transfers a property of the organisation onto every individual member regardless of their actual specific role or knowledge.",
  "prompt": "The prosecutor's argument illustrates the opposite error from which other fallacy discussed in this practice paper?",
  "options": [
    {
      "id": "A",
      "text": "The fallacy of composition, since this reasons from the whole to the parts rather than the parts to the whole"
    },
    {
      "id": "B",
      "text": "An entirely unrelated type of reasoning error"
    },
    {
      "id": "C",
      "text": "A correct and valid inference about organisational liability"
    },
    {
      "id": "D",
      "text": "The genetic fallacy specifically"
    },
    {
      "id": "E",
      "text": "The straw man fallacy specifically"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the fallacy of division, the mirror image of composition: reasoning from the whole to each part.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-056",
  "topic": "Begging the question in legal presumptions",
  "passage": "An argument for a proposed law states that the law is necessary because 'reasonable people would support it', while defining a 'reasonable person' as someone who supports the law, a definition that makes the argument's conclusion true by definition rather than by any independent evidence offered in its favour.",
  "prompt": "The argument's structure in the passage is best described as:",
  "options": [
    {
      "id": "A",
      "text": "Assuming, within its own premises, the very conclusion it purports to establish"
    },
    {
      "id": "B",
      "text": "Providing genuinely independent evidence for its conclusion"
    },
    {
      "id": "C",
      "text": "Relying entirely on statistical survey data"
    },
    {
      "id": "D",
      "text": "Offering a definition of 'reasonable person' unrelated to the law's merits"
    },
    {
      "id": "E",
      "text": "Reaching a conclusion contrary to its stated premises"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is begging the question: the conclusion is embedded in the premise's definition.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-057",
  "topic": "False cause in statistical evidence",
  "passage": "A report notes that regions with more police officers per capita also have higher recorded crime rates, and some commentators conclude that increasing police presence causes crime, without considering the more plausible explanation that areas with higher crime rates tend to receive greater police staffing in response to that existing crime.",
  "prompt": "The commentators' conclusion illustrates a failure to consider:",
  "options": [
    {
      "id": "A",
      "text": "An alternative causal direction in which crime rates influence police staffing rather than the reverse"
    },
    {
      "id": "B",
      "text": "Any statistical relationship between police staffing and crime"
    },
    {
      "id": "C",
      "text": "A confirmed causal link established through controlled experiment"
    },
    {
      "id": "D",
      "text": "The total number of police officers employed nationally"
    },
    {
      "id": "E",
      "text": "Evidence that police presence has no relationship to crime whatsoever"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is false cause: mistaking correlation for causation while ignoring reverse causation.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-058",
  "topic": "Non sequitur in judicial reasoning",
  "passage": "A written opinion states that because a defendant is a respected member of the community, the defendant is therefore unlikely to have committed the alleged fraud, a conclusion that does not actually follow logically from the stated premise, since community standing has no necessary logical connection to whether a specific fraudulent act occurred.",
  "prompt": "The passage identifies the reasoning as flawed because:",
  "options": [
    {
      "id": "A",
      "text": "The conclusion does not logically follow from the premise offered in its support"
    },
    {
      "id": "B",
      "text": "The premise about community standing is factually false"
    },
    {
      "id": "C",
      "text": "The conclusion is supported by additional independent evidence not mentioned"
    },
    {
      "id": "D",
      "text": "The defendant's guilt has already been conclusively established"
    },
    {
      "id": "E",
      "text": "Community standing is always legally irrelevant to any judicial decision"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a non sequitur: the conclusion simply does not follow from the stated premise.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-059",
  "topic": "The appeal to authority in expert testimony",
  "passage": "A party in litigation argues that a scientific claim must be true because a single expert with impressive academic credentials asserts it, without addressing whether the expert's specific claim is actually supported by the broader body of research in the relevant field or represents a minority, contested position.",
  "prompt": "The passage's concern about this argument is that credentials alone:",
  "options": [
    {
      "id": "A",
      "text": "Do not establish that a specific claim reflects the broader consensus in the relevant field"
    },
    {
      "id": "B",
      "text": "Always guarantee that an expert's claim is correct"
    },
    {
      "id": "C",
      "text": "Are entirely irrelevant to assessing any expert testimony"
    },
    {
      "id": "D",
      "text": "Prove that the expert's claim is a minority position"
    },
    {
      "id": "E",
      "text": "Are the only factor courts should ever consider"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: credentials alone do not establish that the claim reflects broader consensus.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-060",
  "topic": "The bandwagon fallacy in changing legal norms",
  "passage": "An advocate for reforming an area of law argues that the reform must be correct because a growing number of other jurisdictions have already adopted it, without independently addressing whether the reform actually produces the intended outcomes in those jurisdictions or has simply spread through imitation regardless of its actual effectiveness.",
  "prompt": "The advocate's argument illustrates reliance on:",
  "options": [
    {
      "id": "A",
      "text": "The reform's growing popularity, rather than independent evidence of its actual effectiveness"
    },
    {
      "id": "B",
      "text": "A detailed empirical study of the reform's outcomes"
    },
    {
      "id": "C",
      "text": "A single jurisdiction's specific, well-documented experience"
    },
    {
      "id": "D",
      "text": "Evidence that the reform has failed everywhere it was tried"
    },
    {
      "id": "E",
      "text": "No claim about other jurisdictions at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the bandwagon fallacy: relying on popularity rather than evidence of effectiveness.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-061",
  "topic": "Red herring arguments in cross-examination",
  "passage": "When asked a direct question about the accuracy of a specific document, a witness responds at length about an unrelated dispute with the opposing party from several years earlier, diverting attention from the original question without ever actually addressing whether the document itself is accurate.",
  "prompt": "The witness's response functions as:",
  "options": [
    {
      "id": "A",
      "text": "A distraction that diverts attention from the original question without answering it"
    },
    {
      "id": "B",
      "text": "A direct and complete answer to the question about the document's accuracy"
    },
    {
      "id": "C",
      "text": "Independent corroborating evidence about the document"
    },
    {
      "id": "D",
      "text": "A concession that the document is inaccurate"
    },
    {
      "id": "E",
      "text": "A neutral clarification of the original question"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a red herring: diverting attention rather than addressing the actual question.",
  "difficulty": "easy",
  "type": "logical_structure"
},
{
  "question_id": "standalone-062",
  "topic": "The middle ground fallacy in compromise legislation",
  "passage": "When two groups propose starkly different regulatory thresholds, a legislator assumes the correct answer must lie exactly halfway between the two proposals, without independently assessing whether either extreme, or some other value entirely, is actually best supported by the underlying evidence.",
  "prompt": "The legislator's assumption illustrates the error of:",
  "options": [
    {
      "id": "A",
      "text": "Assuming a compromise position is automatically correct simply because it lies between two extremes"
    },
    {
      "id": "B",
      "text": "Conducting an independent evidence-based assessment of the correct threshold"
    },
    {
      "id": "C",
      "text": "Adopting whichever extreme position has more political support"
    },
    {
      "id": "D",
      "text": "Rejecting both proposed extremes without adopting any compromise"
    },
    {
      "id": "E",
      "text": "Requiring unanimous agreement before setting any threshold"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the middle ground fallacy: assuming the midpoint is automatically correct.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-063",
  "topic": "Anecdotal evidence versus statistical evidence in policy",
  "passage": "A policymaker cites a single vivid personal story about a specific individual harmed by a proposed regulation to argue against it, despite comprehensive statistical evidence showing the regulation provides a net benefit to the overwhelming majority of the population it affects.",
  "prompt": "The passage highlights a tension between:",
  "options": [
    {
      "id": "A",
      "text": "A vivid but unrepresentative anecdote and a comprehensive statistical assessment of overall effect"
    },
    {
      "id": "B",
      "text": "Two equally comprehensive statistical studies reaching identical conclusions"
    },
    {
      "id": "C",
      "text": "A statistical study and an identical anecdote reaching the same conclusion"
    },
    {
      "id": "D",
      "text": "Evidence that the regulation harms every single individual affected"
    },
    {
      "id": "E",
      "text": "No actual evidence of any kind on either side"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This contrasts a vivid anecdote with comprehensive statistical evidence of overall effect.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-064",
  "topic": "The no true Scotsman fallacy in defining categories",
  "passage": "When shown an example of a self-identified free-market advocate supporting a specific subsidy, a commentator responds that 'no true free-market advocate' would ever support any subsidy, redefining the category specifically to exclude the inconvenient counterexample rather than revising the original general claim.",
  "prompt": "The commentator's response illustrates a strategy of:",
  "options": [
    {
      "id": "A",
      "text": "Redefining a category after the fact specifically to exclude a counterexample, rather than revising the original claim"
    },
    {
      "id": "B",
      "text": "Accepting the counterexample as a genuine challenge to the original claim"
    },
    {
      "id": "C",
      "text": "Providing independent evidence that the counterexample is factually incorrect"
    },
    {
      "id": "D",
      "text": "Revising the general claim to accommodate the new evidence"
    },
    {
      "id": "E",
      "text": "Offering a definition of the category established before the counterexample arose"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the no true Scotsman fallacy: redefining a category to exclude a counterexample after the fact.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-065",
  "topic": "Correlation versus causation in tort causation",
  "passage": "A claimant argues that because their illness developed after exposure to a chemical at their workplace, the chemical must have caused the illness, though establishing legal causation in toxic tort cases generally requires additional evidence, dose levels, biological mechanism, exclusion of other plausible causes, beyond mere temporal correlation.",
  "prompt": "The passage implies that legal causation in such cases requires:",
  "options": [
    {
      "id": "A",
      "text": "More than temporal correlation alone, including evidence such as dose levels and exclusion of other causes"
    },
    {
      "id": "B",
      "text": "Only proof that the illness developed after the exposure occurred"
    },
    {
      "id": "C",
      "text": "No scientific evidence of any kind"
    },
    {
      "id": "D",
      "text": "Proof that no other employee at the workplace ever became ill"
    },
    {
      "id": "E",
      "text": "A confession from the employer admitting fault"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the additional evidence required beyond mere correlation.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-066",
  "topic": "The naturalistic fallacy in is-ought legal reasoning",
  "passage": "An argument holds that because a particular social arrangement has existed throughout most of recorded history, it must therefore be the morally correct arrangement, an inference that moves directly from a descriptive claim about what has existed to a normative claim about what ought to exist, without any bridging premise justifying that move.",
  "prompt": "The passage's criticism of this argument centres on:",
  "options": [
    {
      "id": "A",
      "text": "An unjustified logical leap from a factual, descriptive claim to a moral, normative conclusion"
    },
    {
      "id": "B",
      "text": "A claim that the social arrangement never actually existed historically"
    },
    {
      "id": "C",
      "text": "A demonstration that the arrangement is factually inaccurate"
    },
    {
      "id": "D",
      "text": "An argument that all historical arrangements are morally correct"
    },
    {
      "id": "E",
      "text": "A point unrelated to the relationship between facts and values"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the is-ought gap, or naturalistic fallacy: moving from descriptive to normative without justification.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-067",
  "topic": "Selection bias in case law samples",
  "passage": "A researcher studying whether a specific legal defence tends to succeed examines only published appellate decisions, a sample that systematically excludes the far larger number of cases settled or resolved at trial without any appeal, potentially producing a distorted picture of how often the defence actually succeeds across all cases where it is raised.",
  "prompt": "The passage's concern about the researcher's method centres on:",
  "options": [
    {
      "id": "A",
      "text": "A sample that systematically excludes a large category of relevant cases, potentially distorting the overall picture"
    },
    {
      "id": "B",
      "text": "A sample that includes every case in which the defence was ever raised"
    },
    {
      "id": "C",
      "text": "A complete absence of any published appellate decisions"
    },
    {
      "id": "D",
      "text": "An accurate representation of how the defence performs across all cases"
    },
    {
      "id": "E",
      "text": "A method that requires no case selection of any kind"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is selection bias: the sample systematically excludes a large, relevant category of cases.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-068",
  "topic": "The framing effect in jury instructions",
  "passage": "A jury instructed that a defendant must be acquitted 'unless the evidence excludes all innocent explanations' may reach a different verdict than an otherwise identically evidenced jury instructed that the defendant must be convicted 'if the evidence establishes guilt beyond reasonable doubt', even though the two formulations are intended to describe the same underlying legal standard.",
  "prompt": "The passage suggests that jury verdicts can be influenced by:",
  "options": [
    {
      "id": "A",
      "text": "How an equivalent legal standard is linguistically framed, independent of the underlying evidence"
    },
    {
      "id": "B",
      "text": "The underlying evidence alone, regardless of how instructions are phrased"
    },
    {
      "id": "C",
      "text": "A change in the actual legal standard being applied"
    },
    {
      "id": "D",
      "text": "The specific identity of the presiding judge alone"
    },
    {
      "id": "E",
      "text": "Factors entirely unrelated to jury instructions"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a framing effect: identical standards produce different responses based on phrasing.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-069",
  "topic": "Anchoring bias in damages awards",
  "passage": "Jurors asked to award damages after being told the claimant's lawyer requested a specific, very high figure tend to award larger damages, on average, than jurors given an identical case but told a lower requested figure, even where neither figure was accompanied by any additional supporting evidence justifying the specific amount.",
  "prompt": "The passage illustrates that damages awards can be influenced by:",
  "options": [
    {
      "id": "A",
      "text": "An initially presented reference figure, independent of any additional evidence justifying that specific amount"
    },
    {
      "id": "B",
      "text": "Only the underlying evidence of harm, regardless of any figure mentioned"
    },
    {
      "id": "C",
      "text": "A figure that has no measurable effect on jurors' final awards"
    },
    {
      "id": "D",
      "text": "The claimant's own testimony alone"
    },
    {
      "id": "E",
      "text": "A fixed, unchangeable formula applied identically in every case"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is anchoring bias: an initial reference figure skews subsequent judgements.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-070",
  "topic": "The halo effect in character evidence",
  "passage": "Jurors exposed to evidence of a defendant's charitable work and community involvement sometimes rate the defendant as less likely to have committed an unrelated offence, even where the charitable activity has no logical bearing on whether the specific alleged conduct actually occurred.",
  "prompt": "The passage describes a pattern in which:",
  "options": [
    {
      "id": "A",
      "text": "A positive impression in one unrelated area influences judgement in a logically separate area"
    },
    {
      "id": "B",
      "text": "Charitable activity is always directly relevant to criminal liability"
    },
    {
      "id": "C",
      "text": "Jurors ignore character evidence entirely when reaching a verdict"
    },
    {
      "id": "D",
      "text": "Character evidence is never actually presented in any trial"
    },
    {
      "id": "E",
      "text": "A negative impression in one area always improves judgement in another"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the halo effect: a positive trait in one area colouring judgement in an unrelated area.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-071",
  "topic": "Confirmation bias in police investigation",
  "passage": "An investigator who forms an early theory about a suspect may subsequently interpret ambiguous evidence as supporting that theory while discounting evidence that might point toward an alternative suspect, a pattern that can entrench an initial hypothesis regardless of the evidence's actual overall balance.",
  "prompt": "The passage's central concern is that an investigator's early theory may:",
  "options": [
    {
      "id": "A",
      "text": "Bias the subsequent interpretation of ambiguous evidence toward confirming that theory"
    },
    {
      "id": "B",
      "text": "Have no effect whatsoever on how evidence is later interpreted"
    },
    {
      "id": "C",
      "text": "Always be immediately and completely revised in light of any new evidence"
    },
    {
      "id": "D",
      "text": "Guarantee an accurate final conclusion regardless of any bias"
    },
    {
      "id": "E",
      "text": "Apply only to evidence that clearly points toward the original suspect"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is confirmation bias applied to investigation: bias toward evidence confirming an existing theory.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-072",
  "topic": "The gambler's fallacy in recidivism prediction",
  "passage": "An official argues that because a specific offender has not reoffended in the five years since release, they are now 'due' to reoffend soon, an inference that mistakenly treats an offender's likelihood of reoffending as though it must average out over time in the way a fair coin's outcomes are sometimes wrongly assumed to do.",
  "prompt": "The official's reasoning illustrates:",
  "options": [
    {
      "id": "A",
      "text": "The gambler's fallacy, mistakenly assuming a pattern must 'even out' over a period of independent events"
    },
    {
      "id": "B",
      "text": "A statistically sound method for predicting recidivism"
    },
    {
      "id": "C",
      "text": "An argument based entirely on the offender's original offence"
    },
    {
      "id": "D",
      "text": "A claim that recidivism rates have no relationship to time since release"
    },
    {
      "id": "E",
      "text": "A correct application of actuarial risk assessment"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the gambler's fallacy applied to recidivism: assuming outcomes must balance out over time.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-073",
  "topic": "Appeal to consequences in constitutional interpretation",
  "passage": "A judge argues that a specific constitutional provision cannot mean what its text plainly states, since that reading would produce a policy outcome the judge personally considers undesirable, reasoning from the disliked consequence back to a preferred interpretation rather than from the text and its context to whatever interpretation naturally follows.",
  "prompt": "The judge's reasoning in the passage moves from:",
  "options": [
    {
      "id": "A",
      "text": "A disliked practical consequence back to a preferred interpretation, rather than from text to consequence"
    },
    {
      "id": "B",
      "text": "The provision's plain text directly to its natural interpretation"
    },
    {
      "id": "C",
      "text": "A neutral assessment of the provision's original historical context"
    },
    {
      "id": "D",
      "text": "An interpretation the judge personally favours toward the text supporting it"
    },
    {
      "id": "E",
      "text": "No consideration of any practical consequence whatsoever"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is appeal to consequences: reasoning backward from a disliked outcome to a preferred interpretation.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-074",
  "topic": "The slippery slope in free speech restrictions",
  "passage": "An opponent of a narrowly drawn restriction on speech that directly incites imminent violence argues it will inevitably expand to ban mere criticism of government policy, without identifying any specific legal or institutional mechanism by which the narrow restriction's scope would actually broaden over time.",
  "prompt": "The passage's criticism of the opponent's argument mirrors an objection raised elsewhere in this practice set regarding:",
  "options": [
    {
      "id": "A",
      "text": "Slippery slope arguments that fail to specify the mechanism driving each predicted step"
    },
    {
      "id": "B",
      "text": "An argument that correctly and precisely identifies the specific mechanism of expansion"
    },
    {
      "id": "C",
      "text": "A claim that no speech restriction has ever been narrowly drawn"
    },
    {
      "id": "D",
      "text": "A demonstration that all speech restrictions inevitably expand"
    },
    {
      "id": "E",
      "text": "A point unrelated to any previously discussed reasoning pattern"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This mirrors the earlier slippery slope discussion: no mechanism is specified for the predicted expansion.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-075",
  "topic": "False equivalence in comparing offences",
  "passage": "A commentator argues that a minor regulatory infraction and a serious violent offence should be treated with comparable public concern, since both technically constitute 'breaking the law', a comparison that treats the shared legal category as though it erased the substantial difference in severity and harm between the two types of conduct.",
  "prompt": "The commentator's comparison illustrates the error of:",
  "options": [
    {
      "id": "A",
      "text": "Treating two things as equivalent based on a shared superficial category while ignoring a substantial underlying difference"
    },
    {
      "id": "B",
      "text": "Correctly identifying that the two offences are, in fact, equally severe"
    },
    {
      "id": "C",
      "text": "Distinguishing carefully between minor and serious offences"
    },
    {
      "id": "D",
      "text": "Providing detailed evidence of comparable harm from both offences"
    },
    {
      "id": "E",
      "text": "Ignoring the legal category both offences share entirely"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is false equivalence: a shared superficial category masking a substantial real difference.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-076",
  "topic": "The fallacy of relative privation in policy debate",
  "passage": "When a proposal to improve safety standards in one specific industry is raised, an opponent responds that resources should instead focus on a different industry with a higher overall fatality rate, an objection that, if applied consistently, could be used to indefinitely postpone addressing any problem that is not currently the single most severe problem in existence.",
  "prompt": "The opponent's objection illustrates a pattern in which:",
  "options": [
    {
      "id": "A",
      "text": "A comparison to a more severe problem is used to dismiss addressing a genuinely real, if lesser, problem"
    },
    {
      "id": "B",
      "text": "Both industries' safety records are shown to be identical"
    },
    {
      "id": "C",
      "text": "The proposal is shown to be based on inaccurate safety data"
    },
    {
      "id": "D",
      "text": "Resources are shown to be entirely sufficient for both industries"
    },
    {
      "id": "E",
      "text": "The higher-fatality industry is shown to require no further attention"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the relative privation fallacy, sometimes called 'whataboutism': dismissing a real problem via comparison to a worse one.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-077",
  "topic": "Moving the goalposts in evidentiary standards",
  "passage": "After a party's specific requested evidence is produced and shown to support their claim, they respond by demanding an entirely new category of evidence not previously requested, a pattern that, if repeated indefinitely, can prevent any evidentiary standard from ever actually being satisfied regardless of what is produced.",
  "prompt": "The pattern described in the passage is best characterised as:",
  "options": [
    {
      "id": "A",
      "text": "Continually raising the evidentiary bar after each requirement is met, preventing any standard from ever being satisfied"
    },
    {
      "id": "B",
      "text": "Accepting the produced evidence as sufficient to resolve the claim"
    },
    {
      "id": "C",
      "text": "Specifying a single, fixed evidentiary standard from the outset"
    },
    {
      "id": "D",
      "text": "Requiring no evidence of any kind to resolve the claim"
    },
    {
      "id": "E",
      "text": "Demonstrating that the produced evidence was factually false"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is moving the goalposts: continually raising the standard after each requirement is met.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-078",
  "topic": "The Texas sharpshooter fallacy in pattern evidence",
  "passage": "An analyst examining a large dataset of trading activity identifies a cluster of trades that, in hindsight, appears suspicious, and presents this cluster as evidence of a coordinated scheme, without addressing whether a dataset of this size would be expected to contain some seemingly suspicious clusters purely by chance even if no scheme existed at all.",
  "prompt": "The passage's concern about the analyst's method is that it:",
  "options": [
    {
      "id": "A",
      "text": "Selects a specific pattern after the fact without assessing how likely such a pattern would be to arise by chance alone"
    },
    {
      "id": "B",
      "text": "Proves conclusively that a coordinated scheme actually existed"
    },
    {
      "id": "C",
      "text": "Examines every possible cluster in the dataset with equal rigour"
    },
    {
      "id": "D",
      "text": "Requires no data of any kind to reach its conclusion"
    },
    {
      "id": "E",
      "text": "Demonstrates that no cluster could ever arise by chance"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the Texas sharpshooter fallacy: selecting a pattern after the fact without a baseline for chance occurrence.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-079",
  "topic": "Loaded questions in cross-examination",
  "passage": "An advocate asks a witness, 'When did you stop concealing the missing funds?', a question that presupposes concealment occurred regardless of how the witness answers, since any direct answer to the question as phrased would implicitly concede the presupposed fact rather than allow the witness to first dispute it.",
  "prompt": "The advocate's question is problematic because it:",
  "options": [
    {
      "id": "A",
      "text": "Presupposes a contested fact in a way that traps any direct answer into conceding that fact"
    },
    {
      "id": "B",
      "text": "Allows the witness to freely dispute any presupposed fact before answering"
    },
    {
      "id": "C",
      "text": "Contains no assumption of any kind about the witness's conduct"
    },
    {
      "id": "D",
      "text": "Is phrased in a way that makes no reference to concealment at all"
    },
    {
      "id": "E",
      "text": "Requires the witness to provide a detailed narrative answer"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a loaded question: it presupposes a contested fact, trapping any direct answer.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-080",
  "topic": "Appeal to novelty in legal technology adoption",
  "passage": "A court administrator argues a new case-management software must be superior to the existing system simply because it is newer and uses more advanced technology, without any comparative evidence that the new system actually processes cases more accurately or efficiently than the system it would replace.",
  "prompt": "The administrator's argument relies on an unstated assumption that:",
  "options": [
    {
      "id": "A",
      "text": "Newer technology is automatically superior to older technology regardless of comparative evidence"
    },
    {
      "id": "B",
      "text": "The existing system has already been proven less accurate through direct comparison"
    },
    {
      "id": "C",
      "text": "No new technology should ever be adopted by any court"
    },
    {
      "id": "D",
      "text": "Comparative evidence has already been gathered and favours the new system"
    },
    {
      "id": "E",
      "text": "Age is irrelevant to any assessment of software quality"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the appeal to novelty: assuming newness implies superiority without comparative evidence.",
  "difficulty": "medium",
  "type": "assumption"
},
{
  "question_id": "standalone-081",
  "topic": "Placebo effect and control groups",
  "passage": "Patients given an inert pill they believe to be an active painkiller often report genuine reductions in pain, a placebo effect strong enough that clinical trials must compare a new treatment against a placebo group rather than against no treatment at all, to isolate the treatment's actual pharmacological effect from the effect of mere belief in treatment.",
  "prompt": "The passage implies that a placebo control group is necessary because:",
  "options": [
    {
      "id": "A",
      "text": "Belief in receiving treatment can itself produce a genuine effect that must be separated from the treatment's own pharmacological effect"
    },
    {
      "id": "B",
      "text": "Placebos always produce a stronger effect than any active treatment"
    },
    {
      "id": "C",
      "text": "Patients never respond to any treatment, active or inert"
    },
    {
      "id": "D",
      "text": "No trial has ever included a placebo group"
    },
    {
      "id": "E",
      "text": "Active treatments never require any comparison group"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the reason for isolating belief effects from the drug's own effect.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-082",
  "topic": "Publication bias in scientific literature",
  "passage": "Studies finding a significant, positive result are more likely to be submitted and accepted for publication than studies finding no effect, meaning the published literature on a given question can appear more consistently supportive of an effect's existence than the full body of conducted research, including unpublished null results, would actually justify.",
  "prompt": "The passage's concern is that the published literature may:",
  "options": [
    {
      "id": "A",
      "text": "Overstate the strength of evidence for an effect relative to the full body of conducted research"
    },
    {
      "id": "B",
      "text": "Always accurately represent every study ever conducted on a topic"
    },
    {
      "id": "C",
      "text": "Underrepresent studies finding a significant positive result"
    },
    {
      "id": "D",
      "text": "Include every null result ever produced"
    },
    {
      "id": "E",
      "text": "Have no relationship to which studies are submitted for publication"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is publication bias: the published record skews toward positive results.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-083",
  "topic": "The replication crisis in psychology",
  "passage": "A large-scale project attempting to reproduce findings from prominent published psychology studies successfully replicated only a minority of the original results, prompting debate over whether the discrepancy reflects genuinely fragile original findings, differences in the replication studies' methods, or both factors operating together.",
  "prompt": "The passage's description of the debate suggests the low replication rate:",
  "options": [
    {
      "id": "A",
      "text": "Has more than one plausible explanation, not a single, settled cause"
    },
    {
      "id": "B",
      "text": "Definitively proves all the original findings were fraudulent"
    },
    {
      "id": "C",
      "text": "Has no bearing on how the original findings should be interpreted"
    },
    {
      "id": "D",
      "text": "Confirms that replication studies are always methodologically flawed"
    },
    {
      "id": "E",
      "text": "Shows that psychology as a field has produced no reliable findings ever"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The passage explicitly notes multiple candidate explanations rather than a single settled cause.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-084",
  "topic": "p-hacking and multiple comparisons",
  "passage": "A researcher testing twenty unrelated hypotheses against the same dataset is likely to find at least one statistically significant result purely by chance, even if none of the twenty hypotheses actually reflects a real underlying effect, since conventional significance thresholds are calibrated for a single test rather than many simultaneous tests.",
  "prompt": "The passage implies that testing many hypotheses against the same data increases the risk of:",
  "options": [
    {
      "id": "A",
      "text": "Mistaking a chance finding for a genuine effect"
    },
    {
      "id": "B",
      "text": "Every single hypothesis being confirmed as true"
    },
    {
      "id": "C",
      "text": "No hypothesis ever reaching statistical significance"
    },
    {
      "id": "D",
      "text": "The dataset itself becoming invalid"
    },
    {
      "id": "E",
      "text": "Significance thresholds becoming irrelevant to any analysis"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: multiple comparisons raise the odds of a false-positive chance finding.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-085",
  "topic": "Confounding variables in observational studies",
  "passage": "An observational study finds that people who take a particular vitamin supplement have better health outcomes than those who do not, but supplement users may also, on average, exercise more, eat more healthily, and have higher incomes, any of which could independently explain the observed difference in outcomes.",
  "prompt": "The passage's central concern is that the study's finding may be explained by:",
  "options": [
    {
      "id": "A",
      "text": "Other factors correlated with supplement use, rather than the supplement itself"
    },
    {
      "id": "B",
      "text": "The supplement's pharmacological effect alone"
    },
    {
      "id": "C",
      "text": "A factor entirely unrelated to the health outcomes measured"
    },
    {
      "id": "D",
      "text": "An absence of any difference between the two groups"
    },
    {
      "id": "E",
      "text": "A randomised assignment of participants to each group"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This describes confounding: other correlated factors may explain the observed association.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-086",
  "topic": "Sample size and statistical power",
  "passage": "A small clinical trial that finds no statistically significant difference between a new treatment and a placebo does not necessarily prove the treatment is ineffective, since a small sample may simply lack sufficient statistical power to detect a real but modest effect, producing a genuinely inconclusive result rather than definitive evidence of no effect.",
  "prompt": "The passage warns against interpreting a small trial's null result as:",
  "options": [
    {
      "id": "A",
      "text": "Definitive proof that the treatment has no effect, rather than a possibly inconclusive result"
    },
    {
      "id": "B",
      "text": "An inconclusive finding requiring no further interpretation"
    },
    {
      "id": "C",
      "text": "Evidence that the treatment is definitely effective"
    },
    {
      "id": "D",
      "text": "A result unaffected by the trial's sample size"
    },
    {
      "id": "E",
      "text": "Proof that placebo effects do not exist"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the risk: mistaking an underpowered null result for proof of no effect.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-087",
  "topic": "The ecological fallacy in epidemiology",
  "passage": "A study finds that countries with higher average chocolate consumption also have more Nobel laureates per capita, but drawing a conclusion about individual people, that eating chocolate makes an individual person more likely to win a Nobel prize, from this country-level correlation would mistakenly apply a group-level pattern to individuals.",
  "prompt": "The passage identifies a fallacy in which:",
  "options": [
    {
      "id": "A",
      "text": "A pattern observed at the group or aggregate level is wrongly applied to conclusions about individuals"
    },
    {
      "id": "B",
      "text": "Individual-level data is correctly used to draw individual-level conclusions"
    },
    {
      "id": "C",
      "text": "No correlation of any kind exists between the two variables studied"
    },
    {
      "id": "D",
      "text": "Group-level and individual-level patterns are always identical"
    },
    {
      "id": "E",
      "text": "Chocolate consumption has been proven to cause Nobel prizes"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the ecological fallacy: applying group-level patterns to individuals.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-088",
  "topic": "Falsifiability as a scientific criterion",
  "passage": "Karl Popper argued that a genuinely scientific theory must be capable, at least in principle, of being shown false by some possible observation, since a theory compatible with absolutely any conceivable outcome provides no actual information about the world and cannot be meaningfully tested against reality.",
  "prompt": "According to the passage, a theory compatible with any possible outcome is problematic because it:",
  "options": [
    {
      "id": "A",
      "text": "Provides no genuine information and cannot be meaningfully tested against reality"
    },
    {
      "id": "B",
      "text": "Has already been conclusively proven true"
    },
    {
      "id": "C",
      "text": "Is automatically the most scientifically valuable kind of theory"
    },
    {
      "id": "D",
      "text": "Can be tested more easily than any other kind of theory"
    },
    {
      "id": "E",
      "text": "Has no relationship to what a theory is meant to explain"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: such a theory provides no information and cannot be tested.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-089",
  "topic": "The demarcation problem between science and pseudoscience",
  "passage": "Distinguishing genuine science from pseudoscience is harder than simply checking whether a claim uses technical-sounding language, since some pseudoscientific claims are dressed in scientific vocabulary while some genuine, evolving scientific fields temporarily lack the settled, precise predictions the simplest demarcation criteria might expect of mature science.",
  "prompt": "The passage implies that vocabulary alone is:",
  "options": [
    {
      "id": "A",
      "text": "An unreliable indicator for distinguishing genuine science from pseudoscience"
    },
    {
      "id": "B",
      "text": "A perfectly reliable indicator of genuine scientific status"
    },
    {
      "id": "C",
      "text": "The only factor ever used to assess scientific legitimacy"
    },
    {
      "id": "D",
      "text": "Irrelevant to whether any claim uses technical terms"
    },
    {
      "id": "E",
      "text": "Always absent from pseudoscientific claims"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: technical vocabulary alone does not reliably distinguish the two categories.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-090",
  "topic": "Occam's razor in theory selection",
  "passage": "When two competing explanations account for the same observed evidence equally well, scientists generally prefer the explanation requiring fewer additional assumptions, not because the simpler explanation is guaranteed to be true, but because it is easier to test and less likely to have been artificially constructed to fit the specific data already observed.",
  "prompt": "The passage clarifies that a preference for simpler explanations is justified by:",
  "options": [
    {
      "id": "A",
      "text": "Practical and methodological advantages, not a guarantee that the simpler explanation is actually true"
    },
    {
      "id": "B",
      "text": "A guarantee that simpler explanations are always correct"
    },
    {
      "id": "C",
      "text": "A requirement that complex explanations always be rejected outright"
    },
    {
      "id": "D",
      "text": "The number of assumptions being entirely irrelevant to theory choice"
    },
    {
      "id": "E",
      "text": "An assumption that all explanations account for evidence equally well"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: the preference is practical/methodological, not a truth guarantee.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-091",
  "topic": "The problem of induction in scientific generalisation",
  "passage": "Observing that the sun has risen every day in recorded history does not logically guarantee it will rise tomorrow, since any argument that the future will resemble the past itself relies on the assumption being questioned, a difficulty philosophers have long noted underlies all inductive reasoning from past observation to future prediction.",
  "prompt": "The passage's central point concerns a difficulty in justifying:",
  "options": [
    {
      "id": "A",
      "text": "The inference from consistently observed past patterns to a guaranteed future occurrence"
    },
    {
      "id": "B",
      "text": "Any observation of the sun rising in the past"
    },
    {
      "id": "C",
      "text": "A claim that the sun has never risen at any point in history"
    },
    {
      "id": "D",
      "text": "The idea that philosophers have never studied this question"
    },
    {
      "id": "E",
      "text": "A logically valid deduction from certain premises"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the classic problem of induction, described precisely as stated.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-092",
  "topic": "Underdetermination of theory by evidence",
  "passage": "A given body of observational evidence is sometimes compatible with more than one theoretical explanation, meaning the evidence alone does not uniquely determine which theory is correct, and scientists must rely on additional criteria, such as simplicity or consistency with other established theories, to choose between the evidentially compatible alternatives.",
  "prompt": "The passage implies that evidence alone can sometimes:",
  "options": [
    {
      "id": "A",
      "text": "Fail to uniquely determine which of several competing theories is correct"
    },
    {
      "id": "B",
      "text": "Always uniquely determine exactly one correct theory"
    },
    {
      "id": "C",
      "text": "Eliminate the need for any additional selection criteria"
    },
    {
      "id": "D",
      "text": "Be entirely irrelevant to choosing between competing theories"
    },
    {
      "id": "E",
      "text": "Prove that no scientific theory can ever be justified"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the underdetermination problem.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-093",
  "topic": "The appeal to nature fallacy in health claims",
  "passage": "A product is marketed as beneficial simply because it is 'natural', an argument that overlooks the fact that many naturally occurring substances are toxic while many synthetic substances are safe and beneficial, meaning a substance's natural origin has no necessary logical connection to whether it is actually safe or effective.",
  "prompt": "The passage's criticism of the marketing claim centres on:",
  "options": [
    {
      "id": "A",
      "text": "The absence of any necessary logical connection between a substance's natural origin and its actual safety or effectiveness"
    },
    {
      "id": "B",
      "text": "A demonstration that all natural substances are toxic"
    },
    {
      "id": "C",
      "text": "A claim that all synthetic substances are safer than natural ones"
    },
    {
      "id": "D",
      "text": "Evidence that the specific product is definitely unsafe"
    },
    {
      "id": "E",
      "text": "An argument that natural substances should never be used"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the appeal to nature fallacy: natural origin does not logically imply safety.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-094",
  "topic": "Cherry-picking data in argument",
  "passage": "An advocate for a specific policy presents a graph covering only a narrow time window in which a favourable trend appears, omitting the broader dataset showing that the trend reverses shortly before and after the selected window, giving a misleading impression of a sustained pattern that does not actually hold over the longer term.",
  "prompt": "The advocate's presentation illustrates the practice of:",
  "options": [
    {
      "id": "A",
      "text": "Selecting only data supporting a desired conclusion while omitting data that would complicate it"
    },
    {
      "id": "B",
      "text": "Presenting the complete dataset without any selective omission"
    },
    {
      "id": "C",
      "text": "Demonstrating that the trend holds consistently over the full time period"
    },
    {
      "id": "D",
      "text": "Providing a balanced account of both favourable and unfavourable data"
    },
    {
      "id": "E",
      "text": "Ignoring the favourable trend entirely"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is cherry-picking: selective presentation of supportive data while omitting the rest.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-095",
  "topic": "Anecdotal reports versus randomised controlled trials",
  "passage": "A patient's personal report that a specific remedy relieved their symptoms carries less evidential weight for establishing a treatment's general effectiveness than a randomised controlled trial, since an individual anecdote cannot rule out coincidence, natural recovery, or placebo effect in the way a properly designed trial with a control group is specifically constructed to do.",
  "prompt": "The passage implies that the key advantage of a randomised controlled trial over an anecdote is its capacity to:",
  "options": [
    {
      "id": "A",
      "text": "Rule out alternative explanations such as coincidence, natural recovery, or placebo effect"
    },
    {
      "id": "B",
      "text": "Provide a more emotionally compelling account of the treatment's effect"
    },
    {
      "id": "C",
      "text": "Guarantee the treatment works for every single individual"
    },
    {
      "id": "D",
      "text": "Eliminate the need for any control group"
    },
    {
      "id": "E",
      "text": "Rely entirely on a single patient's personal experience"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the specific evidential advantage of a controlled trial.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-096",
  "topic": "Selection effects in self-selected surveys",
  "passage": "An online survey asking readers to voluntarily share their opinion on a controversial issue will tend to attract respondents with unusually strong feelings on the topic, meaning the resulting results may not accurately represent the more moderate views held by the broader population who felt no strong urge to respond at all.",
  "prompt": "The passage's concern about the survey method centres on:",
  "options": [
    {
      "id": "A",
      "text": "Respondents self-selecting in a way likely to skew results toward more extreme views"
    },
    {
      "id": "B",
      "text": "A sample that perfectly represents the broader population's views"
    },
    {
      "id": "C",
      "text": "An absence of any respondents with strong opinions"
    },
    {
      "id": "D",
      "text": "A survey method that eliminates all possibility of bias"
    },
    {
      "id": "E",
      "text": "A requirement that all readers must respond to the survey"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is self-selection bias: voluntary responses skew toward strong-opinion holders.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-097",
  "topic": "Data dredging in large datasets",
  "passage": "Given a sufficiently large dataset with many variables, a researcher searching without a prior hypothesis is likely to stumble upon some statistically significant-looking relationship purely by chance, a risk that grows as the number of variables examined increases, regardless of whether any of the discovered relationships reflects a genuine underlying pattern.",
  "prompt": "The passage implies that the risk of a spurious finding increases with:",
  "options": [
    {
      "id": "A",
      "text": "The number of variables examined without a prior, specific hypothesis"
    },
    {
      "id": "B",
      "text": "The researcher's stated hypothesis being tested in advance"
    },
    {
      "id": "C",
      "text": "A decrease in the total number of variables available"
    },
    {
      "id": "D",
      "text": "The dataset containing no variables of any kind"
    },
    {
      "id": "E",
      "text": "A requirement that only one variable ever be examined"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the factor increasing the risk of a spurious, chance finding.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-098",
  "topic": "The garden of forking paths in statistical analysis",
  "passage": "A researcher analysing a dataset may make numerous small, seemingly reasonable choices, which variables to include, how to handle outliers, which subgroup to focus on, any one of which could have been made differently, and the specific combination of choices actually made can produce a significant result even where a different, equally reasonable combination would not have.",
  "prompt": "The passage's concern is that a researcher's numerous small analytical choices can:",
  "options": [
    {
      "id": "A",
      "text": "Collectively produce a significant result that a different, equally defensible set of choices might not have produced"
    },
    {
      "id": "B",
      "text": "Have no effect whatsoever on the final statistical result"
    },
    {
      "id": "C",
      "text": "Always be made in an identical way by every researcher"
    },
    {
      "id": "D",
      "text": "Guarantee that any result obtained reflects a genuine underlying effect"
    },
    {
      "id": "E",
      "text": "Eliminate the possibility of any spurious finding"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the garden of forking paths problem: many small choices can collectively drive a result.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-099",
  "topic": "Blinding as a bias-reduction method",
  "passage": "In a clinical trial where researchers assessing patient outcomes know which patients received the active treatment, their own expectations can subtly influence how ambiguous symptoms are recorded, a risk trials address by blinding assessors to which group a given patient belongs, so that any recorded difference cannot be attributed to assessor expectation.",
  "prompt": "The passage implies that blinding assessors is intended specifically to prevent:",
  "options": [
    {
      "id": "A",
      "text": "Assessor expectations from influencing the recording of ambiguous patient outcomes"
    },
    {
      "id": "B",
      "text": "Patients from ever receiving the active treatment"
    },
    {
      "id": "C",
      "text": "Any outcome from ever being recorded in the trial"
    },
    {
      "id": "D",
      "text": "Researchers from ever analysing the trial's results"
    },
    {
      "id": "E",
      "text": "The treatment from having any effect on patient outcomes"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the purpose of blinding assessors.",
  "difficulty": "easy",
  "type": "inference"
},
{
  "question_id": "standalone-100",
  "topic": "The novelty effect in technology adoption studies",
  "passage": "A new classroom technology may initially appear to improve student engagement and test scores, but this early improvement can partly reflect students' and teachers' heightened interest in something new rather than any lasting benefit of the technology itself, an effect that often fades once the novelty of the new tool wears off over subsequent months.",
  "prompt": "The passage's concern is that an early positive result may partly reflect:",
  "options": [
    {
      "id": "A",
      "text": "Temporary heightened interest in novelty rather than a lasting benefit of the technology itself"
    },
    {
      "id": "B",
      "text": "A permanent, guaranteed improvement that will never fade"
    },
    {
      "id": "C",
      "text": "A benefit entirely unrelated to any change in student or teacher behaviour"
    },
    {
      "id": "D",
      "text": "An effect that has nothing to do with the technology's introduction"
    },
    {
      "id": "E",
      "text": "A result that would be identical regardless of how long the study continued"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the temporary novelty-driven component of the early result.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-101",
  "topic": "Meta-analysis and effect size aggregation",
  "passage": "A meta-analysis combines results from many individual studies on the same question into a single, statistically pooled estimate, a method that can increase overall statistical power beyond what any single study achieves alone, provided the individual studies included are methodologically comparable enough to be meaningfully combined in the first place.",
  "prompt": "The passage implies that a meta-analysis's validity depends partly on:",
  "options": [
    {
      "id": "A",
      "text": "The methodological comparability of the individual studies being combined"
    },
    {
      "id": "B",
      "text": "Including as many studies as possible regardless of their methods"
    },
    {
      "id": "C",
      "text": "Each individual study reaching an identical numerical result"
    },
    {
      "id": "D",
      "text": "A single study being excluded from the analysis entirely"
    },
    {
      "id": "E",
      "text": "No relationship at all to how the individual studies were conducted"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the condition qualifying the meta-analysis's validity.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-102",
  "topic": "The problem of unfalsifiable hypotheses",
  "passage": "A claim that an invisible, undetectable force influences a specific outcome cannot be tested by any conceivable observation, since any result, whether the outcome occurs or not, can always be reconciled with the claim by simply asserting the invisible force acted or did not act as required.",
  "prompt": "The passage's example illustrates a hypothesis that is problematic because it:",
  "options": [
    {
      "id": "A",
      "text": "Can be reconciled with any possible observation, making it untestable"
    },
    {
      "id": "B",
      "text": "Has already been conclusively disproven by observation"
    },
    {
      "id": "C",
      "text": "Makes a highly specific, testable prediction"
    },
    {
      "id": "D",
      "text": "Can only be reconciled with one specific observed outcome"
    },
    {
      "id": "E",
      "text": "Requires no observation of any kind to be evaluated"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is an unfalsifiable hypothesis: compatible with any outcome, making it untestable.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-103",
  "topic": "Regression discontinuity as a natural experiment",
  "passage": "Researchers studying the effect of narrowly missing versus narrowly passing a specific test-score threshold for a benefit can treat students just above and just below the cutoff as approximately comparable in every other respect, since which side of an arbitrary cutoff a student falls on is essentially due to chance for those close to the threshold, approximating the comparability a randomised experiment would provide.",
  "prompt": "The passage implies that students close to the cutoff are treated as comparable because:",
  "options": [
    {
      "id": "A",
      "text": "Falling just above or below an arbitrary threshold is essentially a matter of chance for those near it"
    },
    {
      "id": "B",
      "text": "They are deliberately and explicitly randomly assigned to each group by researchers"
    },
    {
      "id": "C",
      "text": "They differ substantially in every measurable characteristic"
    },
    {
      "id": "D",
      "text": "The threshold itself has no relationship to chance at all"
    },
    {
      "id": "E",
      "text": "Students far from the cutoff are more comparable than those near it"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the reasoning behind the regression discontinuity design's validity.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-104",
  "topic": "The file drawer problem in research synthesis",
  "passage": "If studies finding no effect are less likely to ever be submitted for publication than studies finding a positive effect, a researcher conducting a literature review based only on published work may systematically overestimate an effect's true size, since the unpublished null results remain hidden in researchers' own files rather than contributing to the visible evidence base.",
  "prompt": "The passage's concern mirrors an issue discussed elsewhere in this set concerning:",
  "options": [
    {
      "id": "A",
      "text": "Publication bias, in which the published record skews toward positive findings"
    },
    {
      "id": "B",
      "text": "A concern entirely unrelated to how studies are selected for publication"
    },
    {
      "id": "C",
      "text": "An argument that unpublished studies always find larger effects than published ones"
    },
    {
      "id": "D",
      "text": "A claim that literature reviews never rely on published studies"
    },
    {
      "id": "E",
      "text": "A demonstration that all research findings are equally likely to be published"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The file drawer problem is a specific mechanism underlying publication bias.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-105",
  "topic": "Extrapolation beyond the range of observed data",
  "passage": "A model trained on data from moderate temperature ranges may fit that data very well, but using the same model to predict outcomes at extreme temperatures far outside the observed range risks producing unreliable predictions, since a relationship that holds within the observed range provides no guarantee it continues to hold in unobserved, more extreme conditions.",
  "prompt": "The passage warns against a specific risk in:",
  "options": [
    {
      "id": "A",
      "text": "Applying a model's relationships to conditions well outside the range of data used to build it"
    },
    {
      "id": "B",
      "text": "Using a model only within the exact range of data it was built on"
    },
    {
      "id": "C",
      "text": "Building any model using moderate temperature data"
    },
    {
      "id": "D",
      "text": "Assuming a model will always fail outside its observed range"
    },
    {
      "id": "E",
      "text": "Avoiding any use of models to make predictions"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the risk of extrapolation beyond the observed data range.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-106",
  "topic": "The ceteris paribus assumption in economic models",
  "passage": "An economic model predicting that a price increase will reduce demand typically assumes 'all else being equal', holding constant factors like income, consumer preferences, and the prices of related goods, an assumption that rarely holds precisely in the real world, where multiple factors usually change simultaneously alongside the price itself.",
  "prompt": "The passage implies that applying such a model to real-world predictions requires:",
  "options": [
    {
      "id": "A",
      "text": "Recognising that the model's simplifying assumption rarely holds exactly, since other factors typically change too"
    },
    {
      "id": "B",
      "text": "Assuming that no other factor ever changes in the real world"
    },
    {
      "id": "C",
      "text": "Ignoring the price change entirely when making predictions"
    },
    {
      "id": "D",
      "text": "A guarantee that the model's prediction will always be exactly correct"
    },
    {
      "id": "E",
      "text": "No consideration of income or consumer preferences at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the caveat about the model's idealised assumption.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-107",
  "topic": "Measurement validity versus reliability",
  "passage": "A bathroom scale that consistently reports the same weight every time a person steps on it is reliable, in the sense of being consistent, but if the scale is miscalibrated and always reports five kilograms more than a person's actual weight, it is not valid, since consistency alone does not guarantee the measurement accurately reflects the quantity it purports to measure.",
  "prompt": "The passage's example illustrates the distinction between:",
  "options": [
    {
      "id": "A",
      "text": "Consistency of measurement and accuracy of measurement, which are logically separate properties"
    },
    {
      "id": "B",
      "text": "Two forms of the same identical property"
    },
    {
      "id": "C",
      "text": "A scale that is accurate but never consistent"
    },
    {
      "id": "D",
      "text": "A measurement with no relationship to consistency or accuracy"
    },
    {
      "id": "E",
      "text": "A claim that reliability always implies validity"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the reliability-versus-validity distinction, illustrated exactly as described.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-108",
  "topic": "The construct validity problem in social science",
  "passage": "A study claiming to measure 'intelligence' using a specific test must first establish that the test genuinely captures the underlying concept of intelligence rather than some narrower or different quality, such as familiarity with a particular test format or cultural background, that happens to correlate with test performance without actually being the construct the researcher intends to measure.",
  "prompt": "The passage's concern centres on whether a test:",
  "options": [
    {
      "id": "A",
      "text": "Genuinely captures the underlying concept it is intended to measure, rather than some different, correlated quality"
    },
    {
      "id": "B",
      "text": "Produces a numerical score of any kind"
    },
    {
      "id": "C",
      "text": "Is administered to a sufficiently large number of people"
    },
    {
      "id": "D",
      "text": "Correlates perfectly with every other test of the same concept"
    },
    {
      "id": "E",
      "text": "Has no relationship to any underlying concept whatsoever"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is construct validity: whether a measure genuinely captures the intended concept.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-109",
  "topic": "Dose-response relationships in toxicology",
  "passage": "A toxicologist evaluating whether a substance poses a health risk considers not merely whether exposure occurred at all, but the specific dose received, since a principle central to toxicology holds that many substances, even water in sufficiently extreme quantities, can be harmful at a high enough dose while being harmless or even beneficial at a much lower one.",
  "prompt": "The passage's central point is that assessing a substance's risk requires considering:",
  "options": [
    {
      "id": "A",
      "text": "The specific dose received, not merely whether any exposure occurred at all"
    },
    {
      "id": "B",
      "text": "Only whether exposure occurred, regardless of the amount"
    },
    {
      "id": "C",
      "text": "A substance's harmfulness as a fixed property independent of dose"
    },
    {
      "id": "D",
      "text": "No quantitative information about exposure whatsoever"
    },
    {
      "id": "E",
      "text": "Water as the only substance ever capable of causing harm"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the dose-dependent principle central to toxicology.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-110",
  "topic": "The healthy user bias in observational health studies",
  "passage": "People who voluntarily take a specific preventive health measure, such as a particular supplement, often also tend to exercise more, smoke less, and attend regular medical check-ups, meaning an observed health benefit associated with the measure may partly reflect these other health-conscious behaviours rather than the measure itself.",
  "prompt": "The passage describes a specific version of a more general problem discussed elsewhere in this set concerning:",
  "options": [
    {
      "id": "A",
      "text": "Confounding variables that correlate with the studied factor and independently affect the outcome"
    },
    {
      "id": "B",
      "text": "A problem entirely unrelated to any factor correlated with the measure studied"
    },
    {
      "id": "C",
      "text": "A demonstration that the preventive measure definitely has no benefit"
    },
    {
      "id": "D",
      "text": "An argument that health-conscious behaviour never varies between individuals"
    },
    {
      "id": "E",
      "text": "A claim that supplements always cause the observed health benefit directly"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a specific instance of the general confounding problem discussed earlier in this set.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-111",
  "topic": "Attrition bias in longitudinal studies",
  "passage": "A long-running study tracking participants' health over several decades may lose contact with some participants over time, and if those who drop out differ systematically, perhaps because they became too ill to continue participating, from those who remain, the study's final conclusions could be skewed toward the experience of a healthier subset of the original sample.",
  "prompt": "The passage's concern about participant drop-out centres on the possibility that:",
  "options": [
    {
      "id": "A",
      "text": "Those who leave the study differ systematically from those who remain, skewing the final results"
    },
    {
      "id": "B",
      "text": "Every participant remains in the study until its conclusion"
    },
    {
      "id": "C",
      "text": "Drop-out has no relationship to any participant's health status"
    },
    {
      "id": "D",
      "text": "The final sample always accurately represents the original sample"
    },
    {
      "id": "E",
      "text": "No study has ever experienced any participant drop-out"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is attrition bias: systematic drop-out skewing the remaining sample.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-112",
  "topic": "Instrumental variables in causal inference",
  "passage": "Since researchers cannot randomly assign people to different levels of education to study its effect on income, some economists instead exploit a factor, such as distance to the nearest college, that influences education levels but has no direct effect on income except through its effect on education, using this indirect route to estimate education's causal effect despite the impossibility of a direct randomised experiment.",
  "prompt": "The passage describes a method that addresses the absence of random assignment by:",
  "options": [
    {
      "id": "A",
      "text": "Using a factor that affects the variable of interest without any separate direct effect on the outcome"
    },
    {
      "id": "B",
      "text": "Directly and randomly assigning education levels to each individual studied"
    },
    {
      "id": "C",
      "text": "Ignoring any relationship between education and income entirely"
    },
    {
      "id": "D",
      "text": "Assuming distance to college has a direct effect on income unrelated to education"
    },
    {
      "id": "E",
      "text": "Requiring no statistical method of any kind"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This describes an instrumental variable: affecting the cause without a separate direct effect on the outcome.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-113",
  "topic": "The multiple testing problem in genomics",
  "passage": "A genome-wide association study may test hundreds of thousands of genetic markers for association with a disease simultaneously, meaning that even if no marker actually has any real effect, a substantial number would be expected to appear statistically significant purely by chance unless the significance threshold is adjusted to account for the very large number of simultaneous tests being conducted.",
  "prompt": "The passage implies that failing to adjust the significance threshold in such a study would risk:",
  "options": [
    {
      "id": "A",
      "text": "A substantial number of false-positive associations appearing significant purely by chance"
    },
    {
      "id": "B",
      "text": "Every genuine genetic association being correctly identified"
    },
    {
      "id": "C",
      "text": "No markers at all appearing statistically significant"
    },
    {
      "id": "D",
      "text": "The study requiring no significance threshold whatsoever"
    },
    {
      "id": "E",
      "text": "A guaranteed absence of any chance findings"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the risk of the multiple testing problem in this context.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-114",
  "topic": "The problem of extraordinary claims requiring extraordinary evidence",
  "passage": "A claim that directly contradicts a large, well-established body of prior evidence, such as an assertion that a specific chemical reaction violates a fundamental physical law, is generally treated with more scepticism than an equally novel claim consistent with existing knowledge, requiring more compelling evidence before the scientific community revises its accepted understanding.",
  "prompt": "The passage's central principle is that the evidential bar for a claim should be calibrated to:",
  "options": [
    {
      "id": "A",
      "text": "How much the claim conflicts with an already well-established body of prior evidence"
    },
    {
      "id": "B",
      "text": "An identical, fixed standard regardless of a claim's relationship to prior evidence"
    },
    {
      "id": "C",
      "text": "The claim's novelty alone, regardless of its consistency with prior findings"
    },
    {
      "id": "D",
      "text": "A standard lower for claims that contradict established science"
    },
    {
      "id": "E",
      "text": "No relationship at all to the existing body of scientific knowledge"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the calibrating principle: degree of conflict with established evidence.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-115",
  "topic": "Peer review's limitations as a quality filter",
  "passage": "Peer review, in which independent experts assess a study before publication, catches some methodological flaws but is not designed to detect deliberate data fabrication, since reviewers generally evaluate a manuscript's stated methods and reported results rather than independently re-running the underlying experiment or auditing the raw data themselves.",
  "prompt": "The passage implies that peer review is limited specifically in its capacity to detect:",
  "options": [
    {
      "id": "A",
      "text": "Deliberate fabrication that would not be apparent from the manuscript's stated methods and results alone"
    },
    {
      "id": "B",
      "text": "Any methodological flaw of any kind whatsoever"
    },
    {
      "id": "C",
      "text": "Errors that are obvious from the manuscript's stated methods"
    },
    {
      "id": "D",
      "text": "Studies that have already been independently replicated"
    },
    {
      "id": "E",
      "text": "Any study submitted for publication"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the specific limitation of peer review.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-116",
  "topic": "The problem of pseudo-replication in ecological studies",
  "passage": "A researcher who takes one hundred measurements from a single pond and treats them as one hundred independent data points is committing pseudo-replication, since all one hundred measurements share whatever unique conditions affect that specific pond, meaning the true sample size for generalising to other ponds is closer to one than to one hundred.",
  "prompt": "The passage's criticism of the researcher's method centres on:",
  "options": [
    {
      "id": "A",
      "text": "Treating measurements that share a common source as though they were independent data points"
    },
    {
      "id": "B",
      "text": "Taking too few measurements from the single pond studied"
    },
    {
      "id": "C",
      "text": "Measuring a pond that has no unique conditions of any kind"
    },
    {
      "id": "D",
      "text": "A sample size that accurately reflects the true number of independent observations"
    },
    {
      "id": "E",
      "text": "An absence of any measurement from the pond at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is pseudo-replication: treating non-independent measurements as independent.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-117",
  "topic": "Cognitive dissonance and belief revision in science acceptance",
  "passage": "Individuals who have publicly committed to a specific position sometimes respond to strong disconfirming evidence not by revising their view, but by seeking out additional information that appears to support their original position, a pattern attributed to the psychological discomfort of holding two conflicting beliefs simultaneously.",
  "prompt": "The passage's explanation for the described response centres on:",
  "options": [
    {
      "id": "A",
      "text": "A psychological motivation to reduce discomfort from holding conflicting beliefs, rather than a neutral weighing of evidence"
    },
    {
      "id": "B",
      "text": "A careful, objective, and neutral weighing of all available evidence"
    },
    {
      "id": "C",
      "text": "An absence of any disconfirming evidence in the scenario described"
    },
    {
      "id": "D",
      "text": "A demonstration that public commitment always leads to accurate belief revision"
    },
    {
      "id": "E",
      "text": "A claim that psychological discomfort has no relationship to belief revision"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is cognitive dissonance driving motivated reasoning rather than neutral evidence assessment.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-118",
  "topic": "Cross-validation and overfitting in predictive models",
  "passage": "A predictive model that fits its training data extremely well can nonetheless perform poorly on new, previously unseen data if the model has effectively memorised idiosyncratic noise specific to the training set rather than learning a genuine, generalisable pattern, a problem researchers address by testing the model's performance on separate, held-out data it has never seen during training.",
  "prompt": "The passage implies that strong performance on training data alone is:",
  "options": [
    {
      "id": "A",
      "text": "Not sufficient evidence that a model will perform well on new, unseen data"
    },
    {
      "id": "B",
      "text": "A guarantee that the model has learned a genuinely generalisable pattern"
    },
    {
      "id": "C",
      "text": "Irrelevant to how a model is ultimately evaluated"
    },
    {
      "id": "D",
      "text": "Proof that the model contains no noise of any kind"
    },
    {
      "id": "E",
      "text": "Identical in meaning to strong performance on held-out data"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the overfitting risk: training performance does not guarantee generalisation.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-119",
  "topic": "The sorites paradox in scientific classification",
  "passage": "Removing a single grain from a heap of sand leaves what is still clearly a heap, yet repeating this process one grain at a time eventually leaves no heap at all, without any single grain's removal marking an obvious, precise transition point, a puzzle that illustrates the difficulty of drawing sharp boundaries around categories that admit of continuous, graded variation.",
  "prompt": "The passage's puzzle is most directly relevant to scientific classification because it illustrates difficulty in:",
  "options": [
    {
      "id": "A",
      "text": "Drawing a precise boundary for a category that varies along a continuous spectrum"
    },
    {
      "id": "B",
      "text": "Counting the exact number of grains in any heap"
    },
    {
      "id": "C",
      "text": "Determining that heaps of sand do not actually exist"
    },
    {
      "id": "D",
      "text": "Proving that categories with sharp, discrete boundaries are impossible to define"
    },
    {
      "id": "E",
      "text": "Establishing that no classification system has ever been useful"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the sorites paradox, directly illustrating boundary-drawing difficulty for continuous categories.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-120",
  "topic": "The problem of theory-laden observation",
  "passage": "Two scientists holding different theoretical frameworks may, when looking at the same experimental apparatus, actually perceive and describe the observed phenomenon somewhat differently, since what counts as a relevant observation and how it is interpreted is shaped, at least partly, by the theoretical assumptions the observer already brings to the act of observing.",
  "prompt": "The passage's central claim is that scientific observation is:",
  "options": [
    {
      "id": "A",
      "text": "Shaped at least partly by the theoretical assumptions an observer already holds, rather than being entirely neutral"
    },
    {
      "id": "B",
      "text": "Entirely neutral and completely independent of any theoretical framework"
    },
    {
      "id": "C",
      "text": "Identical for every observer regardless of their theoretical background"
    },
    {
      "id": "D",
      "text": "Irrelevant to how scientific theories are actually developed"
    },
    {
      "id": "E",
      "text": "Never influenced by any prior assumption whatsoever"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the theory-ladenness of observation, stated directly in the passage.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-121",
  "topic": "The experience machine thought experiment",
  "passage": "Robert Nozick imagined a machine that could give a person any desired experience, indistinguishable from reality, for the rest of their life. Most people, when asked, say they would decline to plug in, suggesting that people value more than just the subjective quality of their experiences.",
  "prompt": "The thought experiment is used to challenge the view that:",
  "options": [
    {
      "id": "A",
      "text": "Subjective experience alone is all that matters for a good life"
    },
    {
      "id": "B",
      "text": "No one has ever valued authentic achievement over pleasant experience"
    },
    {
      "id": "C",
      "text": "People always prefer artificial experiences to real ones"
    },
    {
      "id": "D",
      "text": "Reality is indistinguishable from any simulated experience"
    },
    {
      "id": "E",
      "text": "Pleasure has no relationship to wellbeing whatsoever"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The widespread reluctance to plug in challenges hedonism, the view that only subjective experience matters.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-122",
  "topic": "The fat man variant of the trolley problem",
  "passage": "In one version of the trolley dilemma, the only way to stop a runaway trolley from killing five people is to push a large man off a footbridge onto the tracks, using his body to stop the trolley. Most people who would divert a trolley via a lever refuse to push the man, despite both actions producing the same numerical outcome.",
  "prompt": "The passage's contrast between the lever and footbridge cases is typically used to argue that:",
  "options": [
    {
      "id": "A",
      "text": "People's moral judgements track more than just the numerical outcome of an action"
    },
    {
      "id": "B",
      "text": "Most people are willing to push the man off the bridge"
    },
    {
      "id": "C",
      "text": "The two cases produce entirely different numerical outcomes"
    },
    {
      "id": "D",
      "text": "Numerical outcome is the only factor relevant to moral judgement"
    },
    {
      "id": "E",
      "text": "No one has ever considered the lever version acceptable"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The differing judgements despite identical outcomes suggest factors beyond mere numbers (such as using someone as a means) matter morally.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-123",
  "topic": "The ticking time bomb scenario in interrogation ethics",
  "passage": "A hypothetical scenario supposes a captured suspect knows the location of a bomb set to kill many people imminently, and asks whether torture to extract the location would be justified. Critics note the scenario's neat framing, certain knowledge, imminent harm, a suspect who will definitely talk, rarely matches the genuine uncertainty of real interrogation situations.",
  "prompt": "The critics' objection to the ticking time bomb scenario centres on:",
  "options": [
    {
      "id": "A",
      "text": "A mismatch between the scenario's idealised certainty and the genuine uncertainty of real situations"
    },
    {
      "id": "B",
      "text": "A claim that no bomb has ever been placed by any suspect"
    },
    {
      "id": "C",
      "text": "An argument that torture is always effective at extracting information"
    },
    {
      "id": "D",
      "text": "A demonstration that the scenario has occurred exactly as described in reality"
    },
    {
      "id": "E",
      "text": "A point unrelated to how realistic the hypothetical actually is"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: the critics highlight the gap between the scenario's neat certainty and real-world uncertainty.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-124",
  "topic": "The non-identity problem in everyday parenting choices",
  "passage": "A prospective parent's choice about when to conceive affects which specific child, among countless possible children, will actually come to exist, since a different conception timing would result in an entirely different individual being born rather than the same individual existing under different circumstances.",
  "prompt": "The passage implies that a specific child cannot claim to have been harmed by their parent's earlier choice of conception timing because:",
  "options": [
    {
      "id": "A",
      "text": "A different timing would have resulted in a different individual existing, not the same child under different circumstances"
    },
    {
      "id": "B",
      "text": "Conception timing has no effect on which individual is born"
    },
    {
      "id": "C",
      "text": "All possible children are identical regardless of conception timing"
    },
    {
      "id": "D",
      "text": "Parents never make any choice about conception timing"
    },
    {
      "id": "E",
      "text": "The child in question was never actually born"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the non-identity problem: a different choice produces a different person, not a better-off version of the same person.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-125",
  "topic": "The doctrine of double effect and dual-use technology",
  "passage": "A factory upgrade reduces harmful emissions but also, as a side effect, increases noise pollution for nearby residents. The doctrine of double effect suggests that pursuing the emissions reduction while merely foreseeing, rather than intending, the noise increase may be treated differently from a hypothetical case in which noise increase was the deliberate means of achieving some other goal.",
  "prompt": "According to the doctrine described, the moral relevance of the noise increase depends on whether it is:",
  "options": [
    {
      "id": "A",
      "text": "Intended as a means to an end or merely foreseen as an unintended side effect"
    },
    {
      "id": "B",
      "text": "Louder than the emissions reduction is beneficial"
    },
    {
      "id": "C",
      "text": "Experienced by more or fewer residents than the emissions benefit"
    },
    {
      "id": "D",
      "text": "Something the factory could have avoided entirely"
    },
    {
      "id": "E",
      "text": "A side effect that never actually occurs in any factory upgrade"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the intended/foreseen distinction central to the doctrine of double effect.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-126",
  "topic": "The repugnant conclusion in population ethics",
  "passage": "A simple form of total utilitarianism, aiming to maximise the sum of wellbeing across a population, implies that a vastly larger population with lives barely worth living could be preferable to a smaller population with uniformly excellent lives, provided the sheer number of the larger population's marginally positive lives sums to a greater total, a conclusion many find deeply counterintuitive.",
  "prompt": "The passage's example is used to challenge simple total utilitarianism by showing it can imply:",
  "options": [
    {
      "id": "A",
      "text": "A conclusion, favouring a huge population of barely worthwhile lives over a smaller excellent one, that seems intuitively wrong"
    },
    {
      "id": "B",
      "text": "That a smaller population is always preferable under any ethical theory"
    },
    {
      "id": "C",
      "text": "That total utilitarianism never produces any counterintuitive conclusion"
    },
    {
      "id": "D",
      "text": "That population size is irrelevant to any utilitarian calculation"
    },
    {
      "id": "E",
      "text": "A conclusion that most people find intuitively appealing"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the repugnant conclusion, an intuitively troubling implication of simple total utilitarianism.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-127",
  "topic": "The veil of ignorance applied to healthcare rationing",
  "passage": "Asked to design a healthcare rationing system without knowing whether they would end up young or old, healthy or chronically ill, a rational chooser behind a veil of ignorance might favour a system balancing acute care for the young against ongoing support for the chronically ill, rather than a system serving only whichever group the chooser happened to personally favour in advance.",
  "prompt": "The passage suggests the veil of ignorance is intended to produce fairness by:",
  "options": [
    {
      "id": "A",
      "text": "Preventing the chooser from designing a system biased toward their own actual, known circumstances"
    },
    {
      "id": "B",
      "text": "Ensuring the chooser already knows their own health status in advance"
    },
    {
      "id": "C",
      "text": "Guaranteeing that only healthy young people receive any care"
    },
    {
      "id": "D",
      "text": "Removing the need for any healthcare rationing system at all"
    },
    {
      "id": "E",
      "text": "Making the chooser indifferent to the design of the system entirely"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: the veil removes self-interested bias by hiding the chooser's own circumstances.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-128",
  "topic": "The ethics of white lies in everyday life",
  "passage": "A person tells a friend their new haircut looks great despite privately disliking it, reasoning that the small deception spares unnecessary hurt without causing any real harm, a form of dishonesty some ethical frameworks would still condemn as a violation of a duty to truthfulness regardless of the deception's apparently harmless consequences.",
  "prompt": "The passage sets up a tension between which two ethical considerations?",
  "options": [
    {
      "id": "A",
      "text": "A duty-based commitment to truthfulness and a consequentialist concern with avoiding unnecessary harm"
    },
    {
      "id": "B",
      "text": "Two identical ethical frameworks reaching the same conclusion"
    },
    {
      "id": "C",
      "text": "A concern with truthfulness and a concern with hairstyle fashion"
    },
    {
      "id": "D",
      "text": "An argument that no ethical framework ever considers small lies"
    },
    {
      "id": "E",
      "text": "A claim that honesty and harm avoidance always point the same way"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This tension is exactly between deontological truthfulness and consequentialist harm-avoidance.",
  "difficulty": "easy",
  "type": "logical_structure"
},
{
  "question_id": "standalone-129",
  "topic": "The paradox of supererogation",
  "passage": "An act of extraordinary generosity, such as donating a kidney to a stranger, is widely praised as morally admirable yet not considered morally required, a category some ethical theories struggle to accommodate, since a theory holding that the morally best action is always obligatory would seem to require exactly this kind of extraordinary generosity from everyone.",
  "prompt": "The passage identifies a difficulty for theories that hold:",
  "options": [
    {
      "id": "A",
      "text": "The morally best available action is always obligatory, which conflicts with treating extraordinary generosity as praiseworthy but optional"
    },
    {
      "id": "B",
      "text": "No action can ever be praiseworthy without also being required"
    },
    {
      "id": "C",
      "text": "Extraordinary generosity is never actually praised by anyone"
    },
    {
      "id": "D",
      "text": "Kidney donation is always morally required of every person"
    },
    {
      "id": "E",
      "text": "Moral theories never make any claim about obligatory action"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the paradox of supererogation: reconciling praiseworthy-but-optional acts with 'best action is obligatory' theories.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-130",
  "topic": "The is-ought gap in animal ethics",
  "passage": "An argument that humans have always eaten meat throughout evolutionary history is sometimes used to conclude that eating meat is therefore morally acceptable today, an inference that moves directly from a descriptive claim about historical practice to a normative claim about moral permissibility without any bridging premise justifying the move.",
  "prompt": "The passage's criticism of this argument mirrors an objection discussed elsewhere in this practice set regarding:",
  "options": [
    {
      "id": "A",
      "text": "The naturalistic fallacy, or is-ought problem, of inferring a moral conclusion directly from a factual premise"
    },
    {
      "id": "B",
      "text": "A claim that humans have never eaten meat throughout history"
    },
    {
      "id": "C",
      "text": "An argument that historical practice is always morally irrelevant"
    },
    {
      "id": "D",
      "text": "A demonstration that eating meat is definitely immoral"
    },
    {
      "id": "E",
      "text": "A point unrelated to any previously discussed reasoning pattern"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the same is-ought gap discussed earlier applied to a new context.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-131",
  "topic": "Personal identity and teleportation thought experiments",
  "passage": "A hypothetical teleportation device destroys a person's body while creating an atom-for-atom identical copy at a distant location, raising the question of whether the person at the destination is genuinely the same individual who stepped into the device, or merely a new person who happens to share all the same memories and physical characteristics.",
  "prompt": "The thought experiment is designed to test intuitions about:",
  "options": [
    {
      "id": "A",
      "text": "What actually constitutes the persistence of personal identity over time and physical discontinuity"
    },
    {
      "id": "B",
      "text": "Whether teleportation devices could ever be built"
    },
    {
      "id": "C",
      "text": "The specific chemical composition of human bodies"
    },
    {
      "id": "D",
      "text": "Whether memories can ever be duplicated in principle"
    },
    {
      "id": "E",
      "text": "A question entirely unrelated to personal identity"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is a classic personal identity thought experiment, testing what persistence of identity actually requires.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-132",
  "topic": "The moral status of future generations in personal savings decisions",
  "passage": "An individual choosing how much to save for their own future retirement, versus spending on present enjoyment, faces a smaller-scale version of the same underlying question that arises in debates about how much the current generation owes to future generations more broadly: how much weight should be given to a future self or future person who does not yet exist to advocate for their own interests.",
  "prompt": "The passage draws an analogy between:",
  "options": [
    {
      "id": "A",
      "text": "An individual's obligation to their future self and society's broader obligation to future generations"
    },
    {
      "id": "B",
      "text": "Two entirely unrelated questions with no shared structure"
    },
    {
      "id": "C",
      "text": "A question that applies only to retirement savings and never to any other context"
    },
    {
      "id": "D",
      "text": "An argument that future selves have no moral status whatsoever"
    },
    {
      "id": "E",
      "text": "A claim that present enjoyment should always take priority"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The passage explicitly draws this parallel between personal and intergenerational future-weighting.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-133",
  "topic": "Rule versus act utilitarianism",
  "passage": "An act utilitarian evaluates each individual action by its own specific consequences, while a rule utilitarian instead evaluates which general rule, if consistently followed, would produce the best overall consequences, then judges individual actions by whether they conform to that rule, even in a specific case where breaking the rule might produce a marginally better individual outcome.",
  "prompt": "The passage's central distinction between the two approaches concerns:",
  "options": [
    {
      "id": "A",
      "text": "Whether the unit of moral evaluation is the individual act or the general rule governing a category of acts"
    },
    {
      "id": "B",
      "text": "Whether consequences matter at all to moral evaluation"
    },
    {
      "id": "C",
      "text": "Whether either approach ever considers the outcome of any action"
    },
    {
      "id": "D",
      "text": "A distinction that has no bearing on how specific actions are judged"
    },
    {
      "id": "E",
      "text": "Whether rules can ever be broken under any two approaches"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the core act/rule utilitarianism distinction: unit of evaluation is act versus rule.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-134",
  "topic": "The categorical imperative and universalisability",
  "passage": "Kant's categorical imperative asks whether the principle underlying a proposed action could be consistently willed as a universal law followed by everyone, arguing that lying, for instance, fails this test since a world in which everyone lied whenever convenient would undermine the very trust that makes lying an effective deception in the first place.",
  "prompt": "The passage's argument against lying depends on showing that universalising the practice would:",
  "options": [
    {
      "id": "A",
      "text": "Undermine the trust that makes the practice effective in the first place, making it self-defeating if universally adopted"
    },
    {
      "id": "B",
      "text": "Have no effect whatsoever on how effective lying remains"
    },
    {
      "id": "C",
      "text": "Make lying more effective as a form of deception"
    },
    {
      "id": "D",
      "text": "Apply only to a small minority of people who choose to lie"
    },
    {
      "id": "E",
      "text": "Prove that lying is always effective regardless of how common it becomes"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: universalised lying is self-undermining because it destroys the trust lying depends on.",
  "difficulty": "hard",
  "type": "inference"
},
{
  "question_id": "standalone-135",
  "topic": "Virtue ethics and the golden mean",
  "passage": "Aristotle held that virtues typically lie at a mean between two vices, courage as a mean between recklessness and cowardice, generosity as a mean between wastefulness and stinginess, a framework that locates moral excellence not in following a fixed rule but in cultivating a disposition to respond appropriately to particular circumstances.",
  "prompt": "The passage's framework locates moral excellence primarily in:",
  "options": [
    {
      "id": "A",
      "text": "A cultivated disposition to respond appropriately to specific circumstances, rather than adherence to a fixed rule"
    },
    {
      "id": "B",
      "text": "Strict adherence to a single, universal rule applicable to every situation"
    },
    {
      "id": "C",
      "text": "Avoiding courage entirely in every circumstance"
    },
    {
      "id": "D",
      "text": "Maximising the consequences of any given action"
    },
    {
      "id": "E",
      "text": "A calculation entirely independent of any specific circumstance"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly: virtue ethics locates excellence in disposition and appropriate response, not fixed rules.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-136",
  "topic": "Moral relativism versus moral objectivism",
  "passage": "A moral relativist holds that moral judgements are only valid relative to a particular culture's or individual's own framework, with no framework being more correct than any other, while a moral objectivist holds that at least some moral claims are true or false independent of any particular culture's or individual's beliefs about them.",
  "prompt": "According to the passage, the central point of disagreement between the two positions concerns:",
  "options": [
    {
      "id": "A",
      "text": "Whether any moral claim can be true or false independent of a particular culture's or individual's beliefs"
    },
    {
      "id": "B",
      "text": "Whether moral claims exist at all in any form"
    },
    {
      "id": "C",
      "text": "Whether cultures ever actually hold different moral beliefs"
    },
    {
      "id": "D",
      "text": "A question entirely unrelated to the validity of moral claims"
    },
    {
      "id": "E",
      "text": "Whether individuals ever disagree about any moral question"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is precisely the point of disagreement stated in the passage.",
  "difficulty": "easy",
  "type": "main_idea"
},
{
  "question_id": "standalone-137",
  "topic": "The problem of evil in theodicy",
  "passage": "The existence of significant, seemingly gratuitous suffering in the world is sometimes presented as evidence against the existence of a being that is simultaneously all-powerful, all-knowing, and perfectly good, since such a being would seem to have both the ability and the motivation to prevent suffering that serves no greater purpose whatsoever.",
  "prompt": "The argument in the passage depends on a claim that certain suffering:",
  "options": [
    {
      "id": "A",
      "text": "Serves no greater purpose that would justify an all-powerful, all-good being permitting it"
    },
    {
      "id": "B",
      "text": "Always serves some greater, identifiable purpose"
    },
    {
      "id": "C",
      "text": "Has never actually been observed to exist"
    },
    {
      "id": "D",
      "text": "Is unrelated to any question about a divine being's existence"
    },
    {
      "id": "E",
      "text": "Can only be explained by a being lacking any power at all"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The argument's force depends on suffering being gratuitous, serving no justifying purpose.",
  "difficulty": "medium",
  "type": "assumption"
},
{
  "question_id": "standalone-138",
  "topic": "Free will compatibilism versus libertarian free will",
  "passage": "A compatibilist holds that free will is compatible with determinism, provided an agent's actions flow from their own reasoning and desires without external coercion, whereas a libertarian about free will insists genuine freedom additionally requires that the agent could genuinely have done otherwise in a way fully undetermined by any prior causal chain.",
  "prompt": "The passage's central distinction between the two positions concerns:",
  "options": [
    {
      "id": "A",
      "text": "Whether genuine free will requires the metaphysical possibility of having done otherwise in an undetermined sense"
    },
    {
      "id": "B",
      "text": "Whether any agent's actions are ever caused by their own reasoning"
    },
    {
      "id": "C",
      "text": "Whether determinism is true, a question the passage does not address"
    },
    {
      "id": "D",
      "text": "A distinction that has no bearing on the concept of free will"
    },
    {
      "id": "E",
      "text": "Whether external coercion is ever relevant to moral responsibility"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the core compatibilist/libertarian distinction regarding what free will actually requires.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-139",
  "topic": "The paradox of the stone",
  "passage": "The question of whether an omnipotent being could create a stone so heavy that even that being could not lift it presents a puzzle: if the being can create such a stone, it apparently lacks the power to lift it, but if it cannot create such a stone, it apparently lacks the power to create it, either way seemingly limiting the being's omnipotence.",
  "prompt": "The paradox presented in the passage is used to question the coherence of:",
  "options": [
    {
      "id": "A",
      "text": "The concept of unlimited, unrestricted omnipotence as typically defined"
    },
    {
      "id": "B",
      "text": "Whether stones can ever be lifted by any being"
    },
    {
      "id": "C",
      "text": "A concept entirely unrelated to the definition of omnipotence"
    },
    {
      "id": "D",
      "text": "Whether any being has ever claimed to be omnipotent"
    },
    {
      "id": "E",
      "text": "The physical properties of stones specifically"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This paradox targets the internal coherence of the concept of unlimited omnipotence.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-140",
  "topic": "The ship of Theseus applied to long-term friendship",
  "passage": "Two childhood friends, decades later, share almost none of the specific interests, beliefs, or habits that originally connected them, having each changed gradually and continuously over the years, prompting the question of whether their present friendship is genuinely a continuation of the original bond or something new that has simply retained the same label.",
  "prompt": "The passage applies a puzzle familiar from elsewhere in philosophy concerning:",
  "options": [
    {
      "id": "A",
      "text": "Whether an entity that changes gradually and completely over time remains, in a meaningful sense, the same entity"
    },
    {
      "id": "B",
      "text": "Whether the two friends have ever actually met in person"
    },
    {
      "id": "C",
      "text": "A question entirely unrelated to identity or continuity over time"
    },
    {
      "id": "D",
      "text": "Whether friendship can ever exist between two people"
    },
    {
      "id": "E",
      "text": "A claim that gradual change never actually occurs in any relationship"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This applies the classic Ship of Theseus persistence puzzle to a relationship context.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-141",
  "topic": "The is-ought problem in evolutionary ethics",
  "passage": "An argument holds that because cooperative behaviour conferred an evolutionary survival advantage on early humans, cooperation is therefore morally good, an inference that, like other attempts to derive moral conclusions directly from natural facts, moves from a descriptive claim about evolutionary history to a normative claim about moral value without adequately justifying that specific move.",
  "prompt": "This passage's structure most closely parallels which other argument discussed elsewhere in this practice set?",
  "options": [
    {
      "id": "A",
      "text": "An argument that historical human meat-eating establishes the moral acceptability of eating meat today"
    },
    {
      "id": "B",
      "text": "An argument entirely unrelated in structure to any other discussed"
    },
    {
      "id": "C",
      "text": "A claim that cooperation has never conferred any evolutionary advantage"
    },
    {
      "id": "D",
      "text": "An argument that evolutionary history is always morally irrelevant"
    },
    {
      "id": "E",
      "text": "A demonstration that cooperation is definitely not morally good"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Both arguments commit the identical is-ought fallacy of deriving moral value from a factual, historical premise.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-142",
  "topic": "Contractualism and moral justification",
  "passage": "A contractualist approach to ethics holds that an action is wrong if it would be reasonably rejected by people seeking principles for mutual governance that no one could reasonably object to, shifting the focus of moral justification from an action's consequences or its conformity to a rule toward whether the action could be justified to everyone affected by it.",
  "prompt": "The passage's central claim about contractualism is that it evaluates actions based on:",
  "options": [
    {
      "id": "A",
      "text": "Whether the action could be justified to everyone affected, using principles no one could reasonably reject"
    },
    {
      "id": "B",
      "text": "The action's consequences alone, exclusively"
    },
    {
      "id": "C",
      "text": "Conformity to a fixed, pre-existing rule regardless of anyone's reasonable objection"
    },
    {
      "id": "D",
      "text": "A criterion entirely unrelated to justification to affected parties"
    },
    {
      "id": "E",
      "text": "Whether the action has ever actually occurred"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the core contractualist evaluative criterion.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-143",
  "topic": "The demandingness objection to everyday charitable giving",
  "passage": "If causing preventable suffering by inaction is comparably wrong to causing it directly, a consistent application of this principle might require an individual to donate nearly all disposable income to effective charities, since any luxury purchase forgoes an opportunity to prevent suffering that a small donation could have addressed instead.",
  "prompt": "The passage presents an application of a concern discussed elsewhere in this practice set regarding:",
  "options": [
    {
      "id": "A",
      "text": "How demanding a consistently applied moral principle can become when generalised to everyday choices"
    },
    {
      "id": "B",
      "text": "A claim that no moral principle ever has any practical implication"
    },
    {
      "id": "C",
      "text": "An argument that charitable giving is always morally irrelevant"
    },
    {
      "id": "D",
      "text": "A demonstration that luxury purchases never forgo any opportunity"
    },
    {
      "id": "E",
      "text": "A point unrelated to the demandingness of moral theories"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This mirrors the earlier demandingness objection discussion, applied to everyday charitable giving.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-144",
  "topic": "Moral particularism versus generalism",
  "passage": "A moral particularist holds that whether a specific feature of a situation, such as pleasure or a broken promise, counts as a reason for or against an action can vary depending on the surrounding context, rejecting the generalist assumption that a given type of feature always carries the same moral valence, positive or negative, regardless of the situation in which it appears.",
  "prompt": "The passage's central disagreement between particularists and generalists concerns:",
  "options": [
    {
      "id": "A",
      "text": "Whether a given morally relevant feature always carries the same moral significance across different contexts"
    },
    {
      "id": "B",
      "text": "Whether pleasure or broken promises ever have any moral relevance at all"
    },
    {
      "id": "C",
      "text": "A question with no bearing on how moral reasons function"
    },
    {
      "id": "D",
      "text": "Whether context ever matters to any moral judgement whatsoever"
    },
    {
      "id": "E",
      "text": "Whether particularists and generalists agree on every specific case"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the central point of disagreement stated directly in the passage.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-145",
  "topic": "Moral luck in creative attribution disputes",
  "passage": "Two novelists independently write strikingly similar plots without any contact or plagiarism, yet the one who happens to publish first receives full credit for originality while the second faces accusations of copying, a difference in reputation entirely attributable to the timing of publication rather than to any difference in the two authors' actual creative process or moral culpability.",
  "prompt": "The passage's example illustrates a pattern discussed elsewhere in this practice set concerning:",
  "options": [
    {
      "id": "A",
      "text": "Moral luck, where factors outside an agent's control affect how they are judged despite no difference in their actual conduct"
    },
    {
      "id": "B",
      "text": "A claim that plagiarism never actually occurs between independent authors"
    },
    {
      "id": "C",
      "text": "An argument that publication timing has no effect on reputation"
    },
    {
      "id": "D",
      "text": "A demonstration that both authors are equally guilty of plagiarism"
    },
    {
      "id": "E",
      "text": "A point unrelated to any previously discussed moral concept"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is moral luck: outcome-based judgement despite identical underlying conduct.",
  "difficulty": "medium",
  "type": "logical_structure"
},
{
  "question_id": "standalone-146",
  "topic": "Ethical egoism and rational self-interest",
  "passage": "Ethical egoism holds that a person acts morally correctly when, and only when, they act in their own rational self-interest, a view distinct from mere selfishness, since a rational egoist may still cooperate, keep promises, and help others whenever doing so genuinely serves their own long-term interests rather than only their immediate, short-term desires.",
  "prompt": "The passage distinguishes ethical egoism from ordinary selfishness by noting that egoism can still recommend:",
  "options": [
    {
      "id": "A",
      "text": "Cooperative or generous behaviour, where such behaviour genuinely serves the agent's own long-term rational interest"
    },
    {
      "id": "B",
      "text": "Only immediate, short-term self-gratification in every instance"
    },
    {
      "id": "C",
      "text": "Behaviour that never considers the agent's own interest at all"
    },
    {
      "id": "D",
      "text": "A rejection of all cooperation under any circumstances"
    },
    {
      "id": "E",
      "text": "Identical behaviour to pure altruism in every case"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the basis for the distinction between egoism and mere selfishness.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-147",
  "topic": "The is-ought problem in social contract theory",
  "passage": "An argument that a specific form of government must be legitimate because most people would rationally consent to it if given the choice moves from a hypothetical claim about rational agreement to an actual normative conclusion about legitimacy, a move theorists must justify carefully rather than simply asserting that hypothetical consent settles the normative question on its own.",
  "prompt": "The passage raises a concern about moving from:",
  "options": [
    {
      "id": "A",
      "text": "A hypothetical claim about what people would rationally agree to, to an actual conclusion about legitimacy"
    },
    {
      "id": "B",
      "text": "An actual historical consent to a hypothetical one"
    },
    {
      "id": "C",
      "text": "A normative claim to a purely descriptive one"
    },
    {
      "id": "D",
      "text": "No premise at all to a fully justified conclusion"
    },
    {
      "id": "E",
      "text": "A settled question to an entirely unsettled one"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the specific inferential move requiring justification.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-148",
  "topic": "Care ethics versus justice ethics",
  "passage": "An approach to ethics grounded in care emphasises the particular relationships and responsibilities between specific individuals, a parent's obligation to a specific child, over the impartial, rule-based reasoning about rights and fairness that traditional justice-based ethical theories tend to emphasise when evaluating moral situations.",
  "prompt": "The passage's central contrast between the two approaches concerns:",
  "options": [
    {
      "id": "A",
      "text": "Whether moral reasoning should centre on particular relationships or impartial, rule-based fairness"
    },
    {
      "id": "B",
      "text": "Whether either approach ever considers any relationship relevant"
    },
    {
      "id": "C",
      "text": "A distinction that has no bearing on how moral situations are evaluated"
    },
    {
      "id": "D",
      "text": "Whether justice-based theories ever consider individual relationships"
    },
    {
      "id": "E",
      "text": "A claim that care ethics rejects the existence of any obligation"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the core contrast stated directly between particular-relationship and impartial-rule approaches.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-149",
  "topic": "Moral intuitionism and its critics",
  "passage": "A moral intuitionist holds that certain ethical claims can be known directly, through a kind of immediate rational or moral perception, without needing to be derived from any further, more basic premise, a view critics challenge by pointing to the historical unreliability of moral intuitions that later generations came to regard as clearly mistaken.",
  "prompt": "The critics' objection to moral intuitionism centres on:",
  "options": [
    {
      "id": "A",
      "text": "Historical evidence that moral intuitions once widely held have later been judged mistaken"
    },
    {
      "id": "B",
      "text": "A claim that moral intuitions have always been perfectly reliable throughout history"
    },
    {
      "id": "C",
      "text": "An argument that no ethical claim can ever be known in any way"
    },
    {
      "id": "D",
      "text": "A demonstration that intuitionism requires deriving claims from more basic premises"
    },
    {
      "id": "E",
      "text": "A point unrelated to the historical reliability of moral beliefs"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the critics' historical-unreliability objection.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-150",
  "topic": "The problem of moral disagreement across cultures",
  "passage": "Persistent, deep moral disagreement between cultures on certain practices is sometimes cited as evidence that no objective moral truth exists, though defenders of moral objectivism respond that widespread disagreement about a subject does not, by itself, prove there is no fact of the matter, since cultures have also historically disagreed about scientific and factual questions that do have objectively correct answers.",
  "prompt": "The defenders' response in the passage relies on an analogy to:",
  "options": [
    {
      "id": "A",
      "text": "Historical scientific disagreement, which did not prevent objectively correct answers from existing"
    },
    {
      "id": "B",
      "text": "A claim that no scientific disagreement has ever occurred"
    },
    {
      "id": "C",
      "text": "An argument that moral and scientific questions are entirely unrelated"
    },
    {
      "id": "D",
      "text": "A demonstration that cultures have always agreed about scientific facts"
    },
    {
      "id": "E",
      "text": "A point unrelated to whether disagreement implies the absence of truth"
    }
  ],
  "correct_option_id": "A",
  "explanation": "The analogy to scientific disagreement is used to rebut the inference from disagreement to no objective truth.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-151",
  "topic": "Existentialist ethics and authenticity",
  "passage": "Existentialist thinkers argue that individuals bear ultimate responsibility for creating their own values through free choice, rather than simply inheriting a ready-made set of values from society, religion, or tradition, and that living 'authentically' means genuinely owning one's choices rather than passively conforming to external expectations.",
  "prompt": "The passage's concept of authenticity is defined primarily in contrast to:",
  "options": [
    {
      "id": "A",
      "text": "Passively conforming to values inherited from society or tradition without genuine personal ownership"
    },
    {
      "id": "B",
      "text": "Any form of free individual choice whatsoever"
    },
    {
      "id": "C",
      "text": "A rejection of the idea that individuals bear any responsibility"
    },
    {
      "id": "D",
      "text": "A requirement that individuals never consider societal expectations"
    },
    {
      "id": "E",
      "text": "A claim that values can never be created by any individual"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the contrast defining authenticity in this passage.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-152",
  "topic": "The doctrine of triple effect",
  "passage": "Some philosophers have proposed a refinement to the doctrine of double effect, arguing that an action taken specifically because it will produce a bad effect, as opposed to an action taken despite foreseeing that same bad effect, or an action taken using the bad effect as a means, may warrant a third, distinct moral category beyond the traditional intended-versus-merely-foreseen distinction.",
  "prompt": "The passage suggests the proposed refinement adds a distinction between:",
  "options": [
    {
      "id": "A",
      "text": "Acting because of an effect and acting despite merely foreseeing that same effect, as a category distinct from the traditional two"
    },
    {
      "id": "B",
      "text": "Two identical categories with no meaningful difference between them"
    },
    {
      "id": "C",
      "text": "An action that produces no effect and one that produces exactly one effect"
    },
    {
      "id": "D",
      "text": "A concept entirely unrelated to the doctrine of double effect"
    },
    {
      "id": "E",
      "text": "A claim that only two categories can ever exist in this context"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the refined distinction the doctrine of triple effect proposes.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-153",
  "topic": "Speciesism and moral status",
  "passage": "Some ethicists argue that granting greater moral consideration to humans than to non-human animals purely on the basis of species membership is analogous to other forms of discrimination based on an arbitrary characteristic, since species membership alone, they argue, is not obviously the kind of feature that should determine how much moral weight a being's interests receive.",
  "prompt": "The ethicists' argument in the passage relies on treating species membership as:",
  "options": [
    {
      "id": "A",
      "text": "An arbitrary characteristic not obviously relevant to determining moral consideration, analogous to other discriminatory grounds"
    },
    {
      "id": "B",
      "text": "The single most important and clearly relevant factor for moral consideration"
    },
    {
      "id": "C",
      "text": "A characteristic entirely unrelated to any question of discrimination"
    },
    {
      "id": "D",
      "text": "A feature that automatically justifies unequal treatment in every context"
    },
    {
      "id": "E",
      "text": "A concept that has no application to non-human animals"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the basis for the speciesism analogy.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-154",
  "topic": "The non-aggression principle in libertarian ethics",
  "passage": "A principle central to some libertarian ethical and political theories holds that the initiation of force against another person's body or property is always impermissible, though critics note the principle's application requires answering prior questions about what counts as legitimate property in the first place, a question the principle itself does not resolve.",
  "prompt": "The critics' objection in the passage centres on:",
  "options": [
    {
      "id": "A",
      "text": "The principle's dependence on an unresolved prior question about what constitutes legitimate property"
    },
    {
      "id": "B",
      "text": "A claim that force is always permissible against another's property"
    },
    {
      "id": "C",
      "text": "An argument that the principle applies to no situation whatsoever"
    },
    {
      "id": "D",
      "text": "A demonstration that property rights are always self-evident and require no further justification"
    },
    {
      "id": "E",
      "text": "A point unrelated to how the principle is actually applied"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the critics' concern about the principle's unresolved presupposition.",
  "difficulty": "hard",
  "type": "logical_structure"
},
{
  "question_id": "standalone-155",
  "topic": "Moral responsibility and addiction",
  "passage": "A person with a severe addiction may retain the formal capacity to choose not to use a substance in any single instance, yet the compulsive nature of addiction raises a question about whether ordinary standards of moral responsibility, developed with unimpaired decision-making in mind, apply in full force to choices made under conditions substantially shaped by compulsion.",
  "prompt": "The passage raises a question about whether standard moral responsibility should apply where:",
  "options": [
    {
      "id": "A",
      "text": "A choice is made under conditions substantially shaped by compulsion, even if formal capacity to choose otherwise remains"
    },
    {
      "id": "B",
      "text": "A person has complete, entirely unimpaired control over every decision"
    },
    {
      "id": "C",
      "text": "No addiction of any kind is present in the situation"
    },
    {
      "id": "D",
      "text": "The person has never faced any compulsion whatsoever"
    },
    {
      "id": "E",
      "text": "A choice is made with no relationship to any psychological state"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the condition raising the question about responsibility.",
  "difficulty": "medium",
  "type": "inference"
},
{
  "question_id": "standalone-156",
  "topic": "The ethics of promise-keeping under changed circumstances",
  "passage": "A person who promised years earlier to attend a friend's event now faces a genuine emergency requiring their presence elsewhere, raising the question of whether the original promise retains full moral force given circumstances neither party could have anticipated at the time the promise was made, or whether promises are implicitly understood to be conditional on normal circumstances continuing to hold.",
  "prompt": "The passage's central question concerns whether promises should be understood as:",
  "options": [
    {
      "id": "A",
      "text": "Implicitly conditional on normal circumstances continuing to hold, rather than unconditionally binding regardless of later events"
    },
    {
      "id": "B",
      "text": "Always completely unconditional regardless of any later circumstance"
    },
    {
      "id": "C",
      "text": "Entirely without any moral force once made"
    },
    {
      "id": "D",
      "text": "Irrelevant to any ethical evaluation of a person's conduct"
    },
    {
      "id": "E",
      "text": "Binding only when convenient for the person who made them"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the central question about implicit conditionality of promises.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-157",
  "topic": "Retributivism versus consequentialism as theories of punishment",
  "passage": "A retributivist theory of punishment holds that wrongdoers deserve to suffer a proportionate penalty simply because they have done wrong, independent of any further beneficial consequence the punishment might produce, whereas a consequentialist theory justifies punishment only by reference to its future effects, deterrence, rehabilitation, incapacitation, rather than by any backward-looking notion of desert.",
  "prompt": "The passage's central distinction between the two theories concerns:",
  "options": [
    {
      "id": "A",
      "text": "Whether punishment is justified by backward-looking desert or forward-looking beneficial consequences"
    },
    {
      "id": "B",
      "text": "Whether either theory considers punishment ever justified under any circumstance"
    },
    {
      "id": "C",
      "text": "A distinction that has no bearing on how punishment is actually justified"
    },
    {
      "id": "D",
      "text": "Whether consequentialists ever consider deterrence relevant to punishment"
    },
    {
      "id": "E",
      "text": "Whether retributivists believe punishment should ever be proportionate"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the core backward-looking versus forward-looking distinction stated directly in the passage.",
  "difficulty": "medium",
  "type": "main_idea"
},
{
  "question_id": "standalone-158",
  "topic": "The paradox of forgiveness",
  "passage": "Genuine forgiveness seems to require first recognising that a wrong was truly committed and truly deserves resentment, yet the act of forgiving seems to require relinquishing that same resentment, producing an apparent tension between fully acknowledging a wrong's seriousness and simultaneously letting go of the very response that acknowledgement would seem to justify.",
  "prompt": "The passage identifies a tension between:",
  "options": [
    {
      "id": "A",
      "text": "Fully acknowledging a wrong's seriousness and relinquishing the resentment that acknowledgement would seem to justify"
    },
    {
      "id": "B",
      "text": "Two claims that are entirely compatible with no tension whatsoever"
    },
    {
      "id": "C",
      "text": "A denial that any wrong was ever committed and an act of forgiveness"
    },
    {
      "id": "D",
      "text": "An argument that forgiveness never actually requires any resentment"
    },
    {
      "id": "E",
      "text": "A claim that resentment is never justified by any wrong"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the paradox of forgiveness stated directly in the passage.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-159",
  "topic": "Resultant versus circumstantial moral luck",
  "passage": "Resultant moral luck concerns how an action's actual outcome, which may depend on factors outside the agent's control, affects how the action is judged, while circumstantial moral luck concerns how the specific situation an agent happens to face, rather than the outcome of any action taken, shapes whether they are ever tested morally at all, a distinction philosophers draw to separate different ways luck can affect moral assessment.",
  "prompt": "The passage's distinction between the two types of moral luck concerns:",
  "options": [
    {
      "id": "A",
      "text": "Whether luck operates through an action's actual outcome or through the circumstances an agent happens to face"
    },
    {
      "id": "B",
      "text": "Whether luck ever plays any role in moral assessment at all"
    },
    {
      "id": "C",
      "text": "A distinction with no bearing on how moral luck is understood"
    },
    {
      "id": "D",
      "text": "Whether outcomes are ever within an agent's control"
    },
    {
      "id": "E",
      "text": "A claim that circumstances never affect any moral judgement"
    }
  ],
  "correct_option_id": "A",
  "explanation": "This is the stated distinction: outcome-based luck versus circumstance-based luck.",
  "difficulty": "hard",
  "type": "main_idea"
},
{
  "question_id": "standalone-160",
  "topic": "The concept of the moral saint",
  "passage": "A philosopher has argued that a person devoting their entire life single-mindedly to moral betterment of others, to the exclusion of personal projects, hobbies, and idiosyncratic pleasures, would actually be a less well-rounded, less admirable person in certain respects than someone who balances genuine moral concern with other, non-moral sources of value in their life.",
  "prompt": "The passage's argument suggests that a life entirely devoted to moral betterment might:",
  "options": [
    {
      "id": "A",
      "text": "Lack certain other valuable qualities that a life balancing morality with non-moral pursuits would possess"
    },
    {
      "id": "B",
      "text": "Always be the single most admirable kind of life possible"
    },
    {
      "id": "C",
      "text": "Have no relationship whatsoever to personal wellbeing"
    },
    {
      "id": "D",
      "text": "Be identical in every respect to a life with no moral concern at all"
    },
    {
      "id": "E",
      "text": "Require no consideration of any non-moral value"
    }
  ],
  "correct_option_id": "A",
  "explanation": "Stated directly as the argument's conclusion about the moral saint lacking other valuable qualities.",
  "difficulty": "medium",
  "type": "main_idea"
},
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
