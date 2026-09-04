/* Section A papers — full 42-question, 12-passage papers matching the
   real LNAT format. Each entry follows the schema:
   { paper_id, title, section, time_limit_minutes, total_questions, passages: [
     { passage_id, topic, word_count, text, questions: [
       { question_id, type, prompt, options: [{id,text}], correct_option_id, explanation, difficulty }
     ]}
   ]}
   New papers get added to this array — nothing else needs to change;
   the Section A list and paper-taking UI are fully data-driven. */

const SECTION_A_PAPERS = [
{
  "paper_id": "praxis-p01",
  "title": "Praxis LNAT Practice Paper 1",
  "section": "A",
  "time_limit_minutes": 95,
  "total_questions": 42,
  "passages": [
    {
      "passage_id": "p01-01",
      "topic": "Free speech on university campuses",
      "word_count": 412,
      "text": "It has become fashionable to argue that universities have a special duty to protect students from ideas that might cause them distress. Speakers are disinvited, reading lists are revised, and seminar discussions are prefaced with warnings. The justification is usually psychological: exposure to certain arguments, it is said, can be genuinely harmful to those who have experienced trauma connected to the topic at hand. This is not an unreasonable concern in isolation. But the remedy on offer, a general presumption in favour of shielding students from discomfort, mistakes the purpose of a university education.\n\nA university is not a therapeutic institution, however much some administrators now wish it to behave like one. Its function is to train minds capable of encountering an argument, however unwelcome, and subjecting it to scrutiny. A student who has never had to defend a settled belief against a hostile challenge has not been educated in any meaningful sense; she has simply had her opinions confirmed by an institution too anxious to do otherwise. The skill of dismantling a bad argument, rather than merely refusing to hear it, is precisely what three years of study ought to cultivate, and it is a skill that atrophies without practice.\n\nDefenders of speech restrictions often point out that no forum has ever offered truly unlimited speech; universities already exclude defamatory or threatening content, so the question is merely one of where to draw a line that already exists. This is true, but it elides an important distinction. Existing restrictions target speech because of the harm its content directly causes, such as inciting violence. The newer restrictions target speech because of the emotional reaction it might provoke in a listener, which is a fundamentally different and far more elastic criterion. Almost any proposition worth debating, from the ethics of abortion to the legitimacy of colonial borders, will provoke real distress in someone. A principle that licenses suppression on that basis alone would eventually swallow most of what a law, philosophy, or history syllabus needs to cover.\n\nNone of this means universities should be indifferent to student welfare. Support services, advance notice of difficult material, and the option to sit out a specific session are all compatible with rigorous debate; none of them requires banning the debate itself. The distinction between preparing students for a hard conversation and preventing the conversation from happening is not a subtle one, and it is the distinction that current policy increasingly fails to draw.",
      "questions": [
        {
          "question_id": "p01-01-q1",
          "type": "main_idea",
          "prompt": "Which of the following best expresses the author's central argument?",
          "options": [
            {
              "id": "A",
              "text": "Universities should ban all speakers who might cause psychological harm to students."
            },
            {
              "id": "B",
              "text": "Support services for distressed students are incompatible with free debate."
            },
            {
              "id": "C",
              "text": "Shielding students from unwelcome arguments undermines the core purpose of a university education."
            },
            {
              "id": "D",
              "text": "Existing restrictions on defamatory speech should be removed entirely."
            },
            {
              "id": "E",
              "text": "Emotional distress is never a legitimate concern for universities to consider."
            }
          ],
          "correct_option_id": "C",
          "explanation": "The passage's throughline, stated most directly in the second paragraph, is that a university's function is to train students to engage with unwelcome arguments, and that shielding them from this defeats that purpose. Options A and E overstate the author's position; B and D are not claimed anywhere in the text.",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-01-q2",
          "type": "logical_structure",
          "prompt": "What role does the third paragraph play in the author's overall argument?",
          "options": [
            {
              "id": "A",
              "text": "It concedes the entire case for restricting speech on campus."
            },
            {
              "id": "B",
              "text": "It rebuts a counterargument by distinguishing two different justifications for restricting speech."
            },
            {
              "id": "C",
              "text": "It introduces a new, unrelated argument about defamation law."
            },
            {
              "id": "D",
              "text": "It provides statistical evidence for the author's claim."
            },
            {
              "id": "E",
              "text": "It summarises the conclusion reached in the first paragraph."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph explicitly addresses an objection ('no forum has ever offered truly unlimited speech') and responds by distinguishing harm-based restrictions from distress-based ones. This is a rebuttal via distinction, not a concession (A) or a summary (E), and it contains no statistics (D).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-01-q3",
          "type": "inference",
          "prompt": "Based on the passage, the author would most likely agree that:",
          "options": [
            {
              "id": "A",
              "text": "No topic should ever come with advance notice of difficult content."
            },
            {
              "id": "B",
              "text": "A student's discomfort is sufficient reason to remove a topic from a syllabus."
            },
            {
              "id": "C",
              "text": "It is possible to support struggling students without cancelling the material that troubles them."
            },
            {
              "id": "D",
              "text": "Universities have historically had no restrictions on speech at all."
            },
            {
              "id": "E",
              "text": "Debating colonial borders serves no educational purpose."
            }
          ],
          "correct_option_id": "C",
          "explanation": "The final paragraph states that welfare measures 'are all compatible with rigorous debate; none of them requires banning the debate itself,' which directly supports C. B contradicts the author's stated position; A and D are contradicted elsewhere in the passage.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p01-02",
      "topic": "Automation and the future of work",
      "word_count": 428,
      "text": "Every wave of automation has been accompanied by predictions of mass unemployment, and every previous wave has instead produced new categories of work that nobody could have anticipated in advance. The lift operator disappeared, and the software engineer appeared; the switchboard operator disappeared, and the call-centre analyst appeared. On this basis, some economists argue that anxiety about artificial intelligence displacing labour is simply the latest instance of an old and repeatedly falsified fear, and that we should expect the labour market to adjust as it always has.\n\nThis argument rests on an unstated assumption that deserves scrutiny: that the pace and breadth of adjustment will resemble previous transitions closely enough for the historical pattern to hold. Earlier automation typically displaced a narrow band of tasks within a single sector over a period of decades, giving workers and institutions time to retrain and giving new industries time to emerge organically. Artificial intelligence, by contrast, is a general-purpose technology capable of matching or exceeding human performance across a very wide range of cognitive tasks simultaneously, from legal document review to medical diagnosis to customer service. If displacement occurs across many sectors at once, the mechanism that historically absorbed the surplus, namely growth in adjacent industries, may simply not exist in sufficient scale or speed.\n\nIt does not follow from this that mass unemployment is inevitable. It follows only that the reassurance offered by economic historians is weaker than it sounds, because it depends on an analogy whose key premise, the narrowness and gradualness of displacement, may not hold this time. The honest position is one of genuine uncertainty rather than confident optimism drawn from a pattern that this technology may simply not fit.\n\nWhat would count as evidence either way? A meaningful test would be whether new, well-paid categories of employment emerge in the sectors most exposed to automation within the next decade, at a pace comparable to the jobs being displaced. If such categories fail to appear at scale, the historical-pattern argument will have been tested and found wanting, rather than merely asserted and repeated.",
      "questions": [
        {
          "question_id": "p01-02-q1",
          "type": "main_idea",
          "prompt": "The main purpose of the passage is to:",
          "options": [
            {
              "id": "A",
              "text": "Prove conclusively that AI will cause mass unemployment."
            },
            {
              "id": "B",
              "text": "Argue that historical analogies about automation may not apply to AI, and that the correct stance is uncertainty."
            },
            {
              "id": "C",
              "text": "Show that every previous wave of automation has always been harmless."
            },
            {
              "id": "D",
              "text": "Recommend specific retraining policies for displaced workers."
            },
            {
              "id": "E",
              "text": "Dismiss economists who study labour markets as unreliable."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage questions the assumption behind the optimistic historical analogy and concludes that 'the honest position is one of genuine uncertainty.' It does not claim mass unemployment is proven (A) nor propose policy (D).",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-02-q2",
          "type": "assumption",
          "prompt": "According to the passage, the optimistic 'history repeats itself' argument depends on which assumption?",
          "options": [
            {
              "id": "A",
              "text": "That AI cannot perform any cognitive tasks."
            },
            {
              "id": "B",
              "text": "That job displacement will be as narrow and gradual as in past transitions."
            },
            {
              "id": "C",
              "text": "That governments will ban the use of AI in the workplace."
            },
            {
              "id": "D",
              "text": "That new industries never emerge after automation."
            },
            {
              "id": "E",
              "text": "That call-centre jobs will return in their previous form."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The second paragraph identifies the 'unstated assumption' as the resemblance in pace and breadth to earlier transitions, specifically their narrowness and gradualness — matching option B.",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-02-q3",
          "type": "vocabulary_in_context",
          "prompt": "As used in the final paragraph, 'found wanting' most nearly means:",
          "options": [
            {
              "id": "A",
              "text": "Proven to be desired by workers"
            },
            {
              "id": "B",
              "text": "Shown to be insufficient or inadequate"
            },
            {
              "id": "C",
              "text": "Discovered to be missing entirely"
            },
            {
              "id": "D",
              "text": "Confirmed as historically accurate"
            },
            {
              "id": "E",
              "text": "Requested by economic historians"
            }
          ],
          "correct_option_id": "B",
          "explanation": "'Found wanting' is an idiom meaning judged to be inadequate or falling short, which fits the sentence's contrast with an argument that has been 'tested' and failed.",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-02-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding, if true, would most weaken the author's central argument?",
          "options": [
            {
              "id": "A",
              "text": "AI adoption has been slower than initially predicted in most industries."
            },
            {
              "id": "B",
              "text": "New, well-paid job categories have emerged at scale across the sectors most exposed to automation within the past decade."
            },
            {
              "id": "C",
              "text": "Some workers report feeling anxious about losing their jobs to AI."
            },
            {
              "id": "D",
              "text": "Lift operators and switchboard operators no longer exist."
            },
            {
              "id": "E",
              "text": "AI performs well on legal document review tasks."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The author proposes exactly this as 'a meaningful test' of the historical-pattern argument. If it turned out to be true, it would support the optimistic view the author is sceptical of, thereby weakening the author's case for uncertainty.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p01-03",
      "topic": "Meritocracy and inherited advantage",
      "word_count": 405,
      "text": "Meritocracy is usually defended on the grounds of fairness: positions of reward should go to those who work hardest and perform best, rather than to those born into privilege. Few would openly argue for the opposite principle. Yet the concept, so attractive in the abstract, obscures a difficulty that becomes apparent as soon as one asks where merit itself comes from.\n\nThe qualities that a meritocracy rewards, diligence, intelligence, the capacity for delayed gratification, are not distributed randomly across the population. They correlate strongly with the resources a person had access to during childhood: nutrition, parental attention, quality of schooling, freedom from the stresses of poverty. A child raised in a stable, well-resourced household is more likely to develop precisely the traits that a meritocratic system rewards, not because that child is inherently more deserving, but because circumstance cultivated the capacity for merit before the child was old enough to have any say in the matter. The system then rewards the outcome while ignoring the origin, and this allows the winners to believe, sincerely, that their success reflects only their own effort.\n\nThis is not an argument for abandoning the idea that effort and skill should matter. A society that rewarded neither would have little incentive for anyone to strive at all, and would likely be poorer and less dynamic as a result. It is instead an argument for humility about what a meritocracy actually measures. What looks like a pure test of individual merit is, in substantial part, a test of the conditions one happened to be born into, filtered through individual effort rather than replaced by it.\n\nThe practical implication is not that meritocratic selection should be discarded, but that societies serious about fairness must invest heavily upstream, in the early conditions that make the later development of merit possible, rather than congratulating themselves for rewarding merit once it has already been unevenly produced.",
      "questions": [
        {
          "question_id": "p01-03-q1",
          "type": "main_idea",
          "prompt": "The passage's primary claim is that:",
          "options": [
            {
              "id": "A",
              "text": "Meritocracy should be abolished immediately."
            },
            {
              "id": "B",
              "text": "Merit is entirely unrelated to childhood circumstances."
            },
            {
              "id": "C",
              "text": "The traits meritocracy rewards are themselves shaped by unequal early conditions, so societies should invest upstream rather than assume rewards reflect pure desert."
            },
            {
              "id": "D",
              "text": "Wealthy children never work hard."
            },
            {
              "id": "E",
              "text": "Effort and skill should play no role in how society allocates rewards."
            }
          ],
          "correct_option_id": "C",
          "explanation": "This synthesises the passage's two moves: diagnosing how merit is shaped by circumstance, and the concluding call to invest in early conditions rather than abandon meritocratic selection outright. A and E go further than the text supports; B contradicts it directly.",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-03-q2",
          "type": "tone",
          "prompt": "The author's tone throughout the passage is best described as:",
          "options": [
            {
              "id": "A",
              "text": "Dismissive of the entire concept of merit"
            },
            {
              "id": "B",
              "text": "Analytical, qualifying a widely accepted idea rather than rejecting it outright"
            },
            {
              "id": "C",
              "text": "Angrily accusatory toward wealthy families"
            },
            {
              "id": "D",
              "text": "Purely celebratory of meritocratic systems"
            },
            {
              "id": "E",
              "text": "Indifferent to questions of fairness"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The author explicitly says this is 'not an argument for abandoning' merit-based reward, but rather one for 'humility' — a measured, qualifying stance rather than dismissal (A) or celebration (D).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-03-q3",
          "type": "inference",
          "prompt": "It can be inferred that the author believes a society with no reward for effort or skill would:",
          "options": [
            {
              "id": "A",
              "text": "Be fairer than a meritocracy"
            },
            {
              "id": "B",
              "text": "Have little incentive to strive and likely be less dynamic"
            },
            {
              "id": "C",
              "text": "Solve the problem of inherited advantage entirely"
            },
            {
              "id": "D",
              "text": "Be identical to the current system"
            },
            {
              "id": "E",
              "text": "Have no effect on childhood development"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The third paragraph states this directly: 'A society that rewarded neither would have little incentive for anyone to strive at all, and would likely be poorer and less dynamic as a result.'",
          "difficulty": "easy"
        }
      ]
    },
    {
      "passage_id": "p01-04",
      "topic": "Zoos and animal welfare",
      "word_count": 398,
      "text": "Modern zoos present themselves as instruments of conservation, research, and education rather than mere spectacle. Breeding programmes for endangered species, funded partly by admission fees, have contributed to the survival of animals such as the Arabian oryx and the California condor, species that would very likely be extinct in the wild without captive populations to draw on. Educational visits, defenders argue, cultivate an emotional connection to wildlife in children who might otherwise never encounter these animals, and that connection translates into public support for conservation funding and policy.\n\nCritics respond that these benefits, real as they may be, do not justify confining animals whose cognitive and social needs are demonstrably unmet by an enclosure, however large or well designed. Elephants, orcas, and great apes in particular show behavioural signs of distress in captivity, including repetitive pacing and self-directed aggression, that are rarely observed in wild populations of the same species. The argument here is not that zoos provide no conservation value, but that the value provided does not offset the welfare cost to the specific animals confined, especially for species whose natural range or social structure make captivity a poor fit regardless of enclosure quality.\n\nA plausible middle position, increasingly adopted by accredited institutions, is selective: continue captive breeding and public display for species that adapt reasonably well to managed environments, while phasing out the exhibition of species for which the welfare cost is well documented and severe. Several major zoos have already ended their elephant and orca programmes on precisely this basis, redirecting funding toward habitat protection and field conservation instead. This suggests that the debate is no longer really about whether zoos in general are justified, but about which specific animals should and should not be kept in them, a much narrower and more tractable question than the blanket debate usually implies.",
      "questions": [
        {
          "question_id": "p01-04-q1",
          "type": "main_idea",
          "prompt": "Which statement best captures the overall argument of the passage?",
          "options": [
            {
              "id": "A",
              "text": "All zoos should be closed immediately due to poor animal welfare."
            },
            {
              "id": "B",
              "text": "Zoos provide no conservation benefit whatsoever."
            },
            {
              "id": "C",
              "text": "The debate over zoos is increasingly about which specific species should be kept, rather than a blanket judgement on zoos as a whole."
            },
            {
              "id": "D",
              "text": "Orcas and elephants thrive equally well in captivity and in the wild."
            },
            {
              "id": "E",
              "text": "Educational visits have no effect on public support for conservation."
            }
          ],
          "correct_option_id": "C",
          "explanation": "The final paragraph explicitly reframes the debate this way: 'the debate is no longer really about whether zoos in general are justified, but about which specific animals should and should not be kept in them.'",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-04-q2",
          "type": "logical_structure",
          "prompt": "How does the third paragraph function in relation to the first two?",
          "options": [
            {
              "id": "A",
              "text": "It rejects both prior positions entirely."
            },
            {
              "id": "B",
              "text": "It offers a synthesis that narrows the disagreement between the two positions presented."
            },
            {
              "id": "C",
              "text": "It repeats the argument of the first paragraph without change."
            },
            {
              "id": "D",
              "text": "It introduces evidence that contradicts the second paragraph only."
            },
            {
              "id": "E",
              "text": "It shifts to an unrelated topic about zoo funding models."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The third paragraph proposes a 'middle position' that accepts elements of both the conservation argument and the welfare critique, narrowing the debate rather than rejecting either side (A) or merely repeating paragraph one (C).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-04-q3",
          "type": "inference",
          "prompt": "The passage suggests that the decision by some zoos to end elephant and orca programmes was primarily driven by:",
          "options": [
            {
              "id": "A",
              "text": "A general decline in visitor numbers"
            },
            {
              "id": "B",
              "text": "Government legislation banning all captive animals"
            },
            {
              "id": "C",
              "text": "Well-documented, severe welfare costs for those specific species"
            },
            {
              "id": "D",
              "text": "A shortage of funding for any conservation work"
            },
            {
              "id": "E",
              "text": "A desire to increase profits from other exhibits"
            }
          ],
          "correct_option_id": "C",
          "explanation": "The third paragraph links these closures directly to species 'for which the welfare cost is well documented and severe' — matching C. No other cause is mentioned in the text.",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-04-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding, if true, would most weaken the 'middle position' described in the third paragraph?",
          "options": [
            {
              "id": "A",
              "text": "Species that adapt well to managed environments still occasionally show mild stress behaviours."
            },
            {
              "id": "B",
              "text": "Visitor numbers have declined slightly at zoos that closed their elephant exhibits."
            },
            {
              "id": "C",
              "text": "Even species widely regarded as adapting well to captivity show severe, consistent distress behaviours across accredited institutions."
            },
            {
              "id": "D",
              "text": "Habitat protection funding has increased since some elephant programmes closed."
            },
            {
              "id": "E",
              "text": "The Arabian oryx breeding programme remains successful."
            }
          ],
          "correct_option_id": "C",
          "explanation": "The middle position rests on the premise that some species genuinely adapt well to captivity while others do not. Evidence that even the 'adapts well' category shows severe distress would undercut that distinction, weakening the proposed compromise.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p01-05",
      "topic": "Nuclear power and climate policy",
      "word_count": 415,
      "text": "Among environmentalists, nuclear power occupies an unusually contested position. It produces electricity with negligible direct carbon emissions and an energy density unmatched by any renewable source, yet it remains, for a significant portion of the environmental movement, something to be phased out rather than expanded. This position deserves closer examination than it usually receives, because the objections that sustain it are not primarily about carbon.\n\nThe strongest objections concern waste storage, the risk of catastrophic accident, and the long construction timelines that make new plants expensive and slow relative to solar or wind installations. These are legitimate engineering and economic concerns, and none of them should be waved away. But they are frequently conflated with a separate, older objection rooted in the accidents at Chernobyl and Fukushima, which shaped public perception of nuclear risk far more than the statistical record justifies. Measured in deaths per unit of energy produced, nuclear power has one of the lowest fatality rates of any major energy source, including rooftop solar, whose installation involves enough fall-related deaths to outweigh nuclear's toll several times over. The gap between perceived and actual risk is unusually wide for this particular technology.\n\nThe construction-timeline objection is more serious, since a technology that takes a decade to build cannot address a crisis on a five-year timescale. But this argument supports building nuclear capacity alongside renewables for the following decade's needs, not abandoning it altogether, since electricity demand is expected to keep rising well past the point at which today's plants would be completed. Treating the timeline problem as a reason to exclude nuclear from the future energy mix mistakes an argument about sequencing for an argument about desirability.\n\nNone of this settles the question of whether any specific new plant should be built in any specific place; siting decisions properly depend on local circumstances. But the blanket resistance to nuclear power as a category, on environmental grounds specifically, rests on a risk perception that the evidence does not support.",
      "questions": [
        {
          "question_id": "p01-05-q1",
          "type": "main_idea",
          "prompt": "The author's central claim is that:",
          "options": [
            {
              "id": "A",
              "text": "Nuclear power has no downsides at all."
            },
            {
              "id": "B",
              "text": "Blanket environmentalist opposition to nuclear power rests on a perception of risk that the statistical evidence does not support."
            },
            {
              "id": "C",
              "text": "Solar power is more dangerous than nuclear power in every respect."
            },
            {
              "id": "D",
              "text": "Every proposed nuclear plant should be approved regardless of location."
            },
            {
              "id": "E",
              "text": "Renewable energy should be phased out entirely."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated almost verbatim in the final sentence. A overstates the claim (the author concedes waste and timeline concerns are legitimate); D is explicitly disclaimed in the final paragraph.",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-05-q2",
          "type": "strengthen_weaken",
          "prompt": "Which of the following, if true, would most strengthen the author's argument about perceived versus actual risk?",
          "options": [
            {
              "id": "A",
              "text": "Public surveys show most people rate nuclear power as more dangerous than coal, despite coal causing far more deaths per unit of energy."
            },
            {
              "id": "B",
              "text": "Nuclear plants take longer to build than solar farms."
            },
            {
              "id": "C",
              "text": "Some countries have banned new nuclear construction."
            },
            {
              "id": "D",
              "text": "Renewable energy costs have fallen in the past decade."
            },
            {
              "id": "E",
              "text": "Nuclear waste remains radioactive for thousands of years."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The author's argument hinges on a gap between perceived and actual risk. Evidence that public perception rates nuclear as more dangerous than a demonstrably deadlier source (coal) directly supports the claim that this gap exists and is misjudged.",
          "difficulty": "hard"
        },
        {
          "question_id": "p01-05-q3",
          "type": "logical_structure",
          "prompt": "The comparison to rooftop solar fall-related deaths is used to:",
          "options": [
            {
              "id": "A",
              "text": "Argue that solar power should be banned"
            },
            {
              "id": "B",
              "text": "Illustrate that nuclear's actual fatality rate compares favourably to alternatives, despite its reputation"
            },
            {
              "id": "C",
              "text": "Prove that all renewable energy is more dangerous than nuclear"
            },
            {
              "id": "D",
              "text": "Suggest that construction workers are poorly trained"
            },
            {
              "id": "E",
              "text": "Undermine the credibility of environmentalists generally"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The comparison serves the narrower point about the specific 'deaths per unit of energy' statistic, supporting the claim about perception versus reality — not a general claim about all renewables (C) or a call to ban solar (A).",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p01-06",
      "topic": "Restorative justice versus punitive sentencing",
      "word_count": 402,
      "text": "The dominant model of criminal justice in most Western legal systems is punitive: an offender is identified, tried, and, if convicted, subjected to a penalty proportionate to the offence, typically imprisonment. Restorative justice, an alternative gaining ground in specific categories of case, particularly among young offenders, proceeds on a different premise entirely: that the central task of the justice system is to repair the harm done to the victim and community, often through a mediated process in which the offender confronts the consequences of their actions directly.\n\nAdvocates point to reoffending statistics that favour restorative approaches for lower-level offences: participants in well-run restorative programmes reoffend at meaningfully lower rates than comparable offenders who go through conventional sentencing, and victims report higher satisfaction with the process, including a greater sense that their harm was actually acknowledged rather than merely punished on their behalf by the state. These are significant results, and they have been replicated across several jurisdictions rather than resting on a single study.\n\nThe usual objection is that restorative justice appears to let offenders avoid punishment, and that this undermines both deterrence and the public's sense that justice has been served. This objection has force for serious violent crime, where the harm is severe and the imbalance of power between offender and victim makes direct mediation difficult to conduct safely, and restorative approaches are rarely proposed as a full replacement even by their strongest advocates. But for lower-level offences, particularly among first-time young offenders, the objection proves less than it appears to, since the relevant comparison is not between restorative justice and punishment in the abstract, but between two different empirical claims about what actually reduces reoffending. If restorative approaches genuinely produce lower reoffending rates for this category of case, then punitive sentencing has not been more effective at its own stated goal, merely more familiar.\n\nThe honest conclusion is not that restorative justice should replace punitive sentencing across the board, but that the categories in which it demonstrably works should expand, and the categories in which punitive sentencing persists by default rather than by evidence should shrink accordingly.",
      "questions": [
        {
          "question_id": "p01-06-q1",
          "type": "main_idea",
          "prompt": "The passage's overall argument is best summarised as:",
          "options": [
            {
              "id": "A",
              "text": "Restorative justice should completely replace punitive sentencing for all crimes."
            },
            {
              "id": "B",
              "text": "Punitive sentencing is always more effective at reducing reoffending than restorative justice."
            },
            {
              "id": "C",
              "text": "Restorative justice should be expanded in categories of offence where evidence shows it reduces reoffending, without replacing punitive sentencing entirely."
            },
            {
              "id": "D",
              "text": "Victims never benefit from restorative justice processes."
            },
            {
              "id": "E",
              "text": "Reoffending statistics are unreliable and should be disregarded."
            }
          ],
          "correct_option_id": "C",
          "explanation": "This matches the final paragraph precisely. A overstates the claim; the author explicitly limits restorative justice's suitability for serious violent crime.",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-06-q2",
          "type": "inference",
          "prompt": "The passage implies that the main reason restorative justice is not proposed for serious violent crime is:",
          "options": [
            {
              "id": "A",
              "text": "It has never been tried for any category of offence"
            },
            {
              "id": "B",
              "text": "The severity of harm and power imbalance make safe mediation difficult"
            },
            {
              "id": "C",
              "text": "Victims of violent crime never want acknowledgement"
            },
            {
              "id": "D",
              "text": "It is more expensive than punitive sentencing"
            },
            {
              "id": "E",
              "text": "Courts are legally prohibited from using it"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: 'the harm is severe and the imbalance of power between offender and victim makes direct mediation difficult to conduct safely.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-06-q3",
          "type": "logical_structure",
          "prompt": "The final sentence of the passage functions primarily to:",
          "options": [
            {
              "id": "A",
              "text": "Introduce a completely new argument not discussed previously"
            },
            {
              "id": "B",
              "text": "Reframe the debate as one to be settled by evidence about specific categories, rather than by a general preference for one system"
            },
            {
              "id": "C",
              "text": "Concede that punitive sentencing is superior in all cases"
            },
            {
              "id": "D",
              "text": "Dismiss the reoffending statistics cited earlier"
            },
            {
              "id": "E",
              "text": "Argue that victims should decide sentencing outcomes"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The sentence ties together the passage's central move: judging each category on evidence rather than defaulting to tradition, which is a reframing rather than a new argument (A) or a concession (C).",
          "difficulty": "hard"
        },
        {
          "question_id": "p01-06-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the second paragraph, 'replicated' most nearly means:",
          "options": [
            {
              "id": "A",
              "text": "Copied illegally without permission"
            },
            {
              "id": "B",
              "text": "Reproduced with similar results across multiple separate studies or settings"
            },
            {
              "id": "C",
              "text": "Reduced in scale for a smaller trial"
            },
            {
              "id": "D",
              "text": "Disputed by later researchers"
            },
            {
              "id": "E",
              "text": "Funded by a single government body"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The sentence contrasts results 'replicated across several jurisdictions' with 'resting on a single study,' indicating the term means the findings were reproduced with consistent results elsewhere.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p01-07",
      "topic": "Social media and political polarisation",
      "word_count": 388,
      "text": "It has become a truism that social media platforms have deepened political polarisation, chiefly by using recommendation algorithms that maximise engagement, which in practice means showing users content that provokes strong emotional reactions, including anger at opposing political tribes. The mechanism is intuitive enough to be widely believed without much scrutiny: outrage keeps people scrolling, so platforms serve more of it, and users become correspondingly more entrenched in hostility toward the other side.\n\nThe empirical record is less tidy than the popular narrative suggests. Several large-scale studies, including a widely cited set of experiments in which participants were paid to deactivate their accounts for a period of weeks, found only modest effects on measured polarisation, and some found none at all. Polarisation in several countries had already been rising steadily for decades before social media existed in its current form, driven by factors including residential sorting along political lines and the fragmentation of shared media sources following the decline of a small number of dominant television broadcasters. These trends predate the platforms now blamed for them.\n\nNone of this exonerates social media entirely. It remains plausible, and is supported by some of the same studies, that platforms accelerate an existing trend or make its most extreme expressions more visible, even if they are not its primary cause. The distinction matters for policy: if social media is the principal driver, algorithmic reform might meaningfully reduce polarisation; if it is instead one accelerant among several older and larger forces, such reform would address only a fraction of the underlying problem, and expecting it to solve polarisation on its own invites disappointment.",
      "questions": [
        {
          "question_id": "p01-07-q1",
          "type": "main_idea",
          "prompt": "The passage primarily argues that:",
          "options": [
            {
              "id": "A",
              "text": "Social media has no effect on political polarisation whatsoever."
            },
            {
              "id": "B",
              "text": "The popular narrative overstates social media's role as the primary cause of polarisation, which has older and larger roots."
            },
            {
              "id": "C",
              "text": "Deactivating social media accounts always eliminates polarisation."
            },
            {
              "id": "D",
              "text": "Television broadcasters are entirely responsible for polarisation today."
            },
            {
              "id": "E",
              "text": "Algorithmic reform is guaranteed to solve polarisation."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage complicates rather than denies the link (ruling out A), citing pre-existing trends and modest experimental effects to argue the popular narrative overstates social media's causal role.",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-07-q2",
          "type": "best_summary",
          "prompt": "Which is the best one-sentence summary of the final paragraph?",
          "options": [
            {
              "id": "A",
              "text": "Social media is completely innocent of contributing to polarisation."
            },
            {
              "id": "B",
              "text": "Whether social media is polarisation's primary cause or merely an accelerant matters for what kind of policy response is likely to work."
            },
            {
              "id": "C",
              "text": "Policy reform is pointless regardless of the cause of polarisation."
            },
            {
              "id": "D",
              "text": "Older forces like residential sorting have now stopped mattering."
            },
            {
              "id": "E",
              "text": "Every study on this topic reaches the same conclusion."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph's point is explicitly about policy implications differing based on causal role, matching B. It does not claim innocence (A) or uniformity across studies (E).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-07-q3",
          "type": "inference",
          "prompt": "The account-deactivation study is used in the passage to:",
          "options": [
            {
              "id": "A",
              "text": "Prove social media causes the majority of polarisation"
            },
            {
              "id": "B",
              "text": "Provide empirical evidence complicating the assumption that social media strongly drives polarisation"
            },
            {
              "id": "C",
              "text": "Show that all participants became less politically engaged"
            },
            {
              "id": "D",
              "text": "Demonstrate that deactivating accounts is harmful to users"
            },
            {
              "id": "E",
              "text": "Confirm that television is a bigger cause than social media"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The study is cited as finding 'only modest effects... and some found none at all,' which complicates rather than confirms the strong-driver assumption — matching B, not A.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p01-08",
      "topic": "Universal basic income",
      "word_count": 410,
      "text": "Universal basic income, a regular unconditional cash payment made to every citizen regardless of employment status or need, has moved from a fringe proposal to a subject of serious pilot programmes across several countries. Its appeal spans an unusually broad political range: some libertarians favour it as a simplified replacement for a sprawling means-tested welfare bureaucracy, while some on the left favour it as a foundation of economic security in an era of precarious employment. This coalition of unlikely allies is itself worth noting, since policies that attract support from opposite ends of the spectrum are rare and often reveal something genuine about the proposal's underlying merits.\n\nThe standard objection concerns cost and the disincentive to work: a payment large enough to matter, multiplied across an entire population, requires either substantial tax increases or the abolition of most existing welfare programmes, and either way, unconditional income might reduce the incentive to seek employment, particularly for lower-paid work. Pilot studies conducted so far complicate this picture. In most trials, recipients did not withdraw from the labour market in large numbers; the main behavioural changes observed were modest reductions in hours among new parents and students, and a shift toward higher-quality job searches rather than the acceptance of the first available position out of financial desperation.\n\nThese pilots, however, share a significant limitation: they were conducted at a scale small enough that the payment did not need to be funded by taxes levied on the same population receiving it, and they ran for a period too short to reveal how behaviour might change once a policy is understood to be permanent rather than experimental. A full national rollout, funded by taxation and expected to last indefinitely, could plausibly produce different incentive effects than a time-limited trial funded from outside the local economy. The pilot evidence is genuinely encouraging, but it answers a narrower question than the one a national policy would actually pose.",
      "questions": [
        {
          "question_id": "p01-08-q1",
          "type": "main_idea",
          "prompt": "The passage's overall stance on universal basic income pilot evidence is:",
          "options": [
            {
              "id": "A",
              "text": "It conclusively proves UBI would work at national scale."
            },
            {
              "id": "B",
              "text": "It is encouraging but answers a narrower question than a full national rollout would pose."
            },
            {
              "id": "C",
              "text": "It shows that most recipients stop working entirely."
            },
            {
              "id": "D",
              "text": "It is entirely worthless and should be disregarded."
            },
            {
              "id": "E",
              "text": "It proves libertarians and the left agree on all policy matters."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit closing judgement. A overclaims what the evidence shows, given the stated limitations around scale and duration.",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-08-q2",
          "type": "inference",
          "prompt": "Why does the author consider the cross-political appeal of UBI 'worth noting'?",
          "options": [
            {
              "id": "A",
              "text": "Because it guarantees the policy will be implemented soon"
            },
            {
              "id": "B",
              "text": "Because support from opposing political traditions is rare and may indicate genuine merit"
            },
            {
              "id": "C",
              "text": "Because it proves libertarians and left-wing advocates want identical outcomes"
            },
            {
              "id": "D",
              "text": "Because it shows the policy has no real opponents"
            },
            {
              "id": "E",
              "text": "Because it is irrelevant to the passage's argument"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage states such policies 'are rare and often reveal something genuine about the proposal's underlying merits' — matching B, not implying identical goals (C) or no opposition (D).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-08-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's main function is to:",
          "options": [
            {
              "id": "A",
              "text": "Fully endorse a national rollout of UBI without reservation"
            },
            {
              "id": "B",
              "text": "Qualify the encouraging pilot results by identifying limits on how far they generalise"
            },
            {
              "id": "C",
              "text": "Reject all pilot evidence as fraudulent"
            },
            {
              "id": "D",
              "text": "Introduce a completely new topic about tax policy in general"
            },
            {
              "id": "E",
              "text": "Argue that pilots should never be used to inform policy"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph explicitly names two limitations (funding source and duration) that constrain how the pilot findings generalise, which is a qualification, not an endorsement (A) or rejection (C).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-08-q4",
          "type": "tone",
          "prompt": "The author's tone toward the pilot evidence, taken as a whole, is best described as:",
          "options": [
            {
              "id": "A",
              "text": "Dismissive and sceptical of any positive findings"
            },
            {
              "id": "B",
              "text": "Cautiously encouraged, while flagging real limits on how far the findings generalise"
            },
            {
              "id": "C",
              "text": "Fully convinced that national rollout would succeed"
            },
            {
              "id": "D",
              "text": "Hostile toward pilot programmes as a research method"
            },
            {
              "id": "E",
              "text": "Indifferent to the outcome of the pilots"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage calls the evidence 'genuinely encouraging' while devoting an entire paragraph to its limitations, indicating cautious optimism rather than dismissal (A) or full conviction (C).",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p01-09",
      "topic": "Colonial-era statues and public memory",
      "word_count": 395,
      "text": "The removal of statues commemorating colonial-era figures has become a recurring flashpoint, with each incident generating the same two arguments in roughly the same order. The first holds that a statue is an act of honour, not merely a historical record, and that continuing to honour a figure responsible for grave harms sends an implicit message that such harms are acceptable, or at least not disqualifying, provided enough other achievements accompany them. The second holds that removing statues amounts to erasing history, denying future generations the chance to grapple with a complicated past.\n\nThe second argument, however, rests on a confusion between remembering and honouring that is rarely made explicit. A museum plaque, a history textbook, and a public archive all remember a figure without erecting a statue in their likeness in a public square; removing a statue does not remove a person from the historical record, since the vast majority of people learn history from books, documentaries, and classrooms rather than from statuary. What a statue specifically communicates, through its prominent placement and commemorative form, is approval, and the claim that its removal erases history conflates the very narrow function statues actually serve with the much broader function of historical memory generally.\n\nThis does not settle every individual case, since context matters considerably. A statue in a museum, accompanied by information about the full historical record, performs a different function from an identical statue standing unexplained in a town square. Relocation, recontextualisation with additional plaques, and outright removal are meaningfully different responses, and treating the debate as a binary choice between preserving a statue exactly as it stands and destroying all trace of the person it depicts obscures the range of options actually available.",
      "questions": [
        {
          "question_id": "p01-09-q1",
          "type": "main_idea",
          "prompt": "The central claim of the passage is that:",
          "options": [
            {
              "id": "A",
              "text": "All colonial-era statues should be destroyed immediately."
            },
            {
              "id": "B",
              "text": "The 'erasing history' objection conflates honouring a figure with merely remembering them, and the actual debate involves a range of options beyond a binary choice."
            },
            {
              "id": "C",
              "text": "History can only be learned through public statues."
            },
            {
              "id": "D",
              "text": "No statue should ever be removed under any circumstances."
            },
            {
              "id": "E",
              "text": "Museums should never display historical figures."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures both the passage's core distinction (honouring vs. remembering) and its concluding point about the range of intermediate options, matching the final paragraph closely.",
          "difficulty": "easy"
        },
        {
          "question_id": "p01-09-q2",
          "type": "logical_structure",
          "prompt": "The comparison to museum plaques and textbooks is used to:",
          "options": [
            {
              "id": "A",
              "text": "Show that books are more accurate than statues"
            },
            {
              "id": "B",
              "text": "Support the claim that removing a statue does not remove a figure from historical memory"
            },
            {
              "id": "C",
              "text": "Argue that museums should be abolished"
            },
            {
              "id": "D",
              "text": "Prove that textbooks are the only legitimate historical source"
            },
            {
              "id": "E",
              "text": "Undermine the argument made in the first paragraph"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The comparison directly supports the point that most historical learning happens outside statuary, backing the claim that statue removal does not equal erasure of history — it does not concern accuracy (A) or abolishing museums (C).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-09-q3",
          "type": "inference",
          "prompt": "The final paragraph implies that the author would most likely favour:",
          "options": [
            {
              "id": "A",
              "text": "Treating every statue exactly the same way regardless of context"
            },
            {
              "id": "B",
              "text": "Case-by-case decisions that consider relocation and recontextualisation as options alongside removal"
            },
            {
              "id": "C",
              "text": "Banning all future construction of public statues"
            },
            {
              "id": "D",
              "text": "Never removing any statue under any circumstances"
            },
            {
              "id": "E",
              "text": "Only ever choosing between exact preservation and total destruction"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph explicitly lists 'relocation, recontextualisation... and outright removal' as 'meaningfully different responses' and criticises binary framing, implying support for case-by-case, context-sensitive decisions.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p01-10",
      "topic": "Genetic testing and insurance",
      "word_count": 408,
      "text": "Direct-to-consumer genetic testing has made it possible for individuals to learn, often for a modest fee, whether they carry markers associated with elevated risk of conditions such as breast cancer, Alzheimer's disease, or various cardiovascular disorders. This information can be genuinely valuable for medical decision-making, enabling earlier screening or preventive treatment. It also creates a new category of problem for insurance markets that existing regulation was not designed to address.\n\nInsurance, at its core, functions by pooling risk across a population whose individual outcomes are unknown in advance; premiums reflect an average expectation across the pool rather than a certainty about any single policyholder. Genetic testing threatens this pooling function by allowing individuals to know more about their own future risk than insurers are legally permitted to ask about or use in pricing, at least in jurisdictions that restrict genetic discrimination in insurance underwriting. This creates a specific problem: individuals who learn they carry a high-risk marker have a strong incentive to purchase generous life or critical-illness cover before disclosing anything, while insurers cannot price for this asymmetry because they are barred from asking. Over time, if this pattern becomes widespread, insurers must raise premiums for the entire pool to cover losses concentrated among a subset of policyholders with private knowledge the insurer cannot access, effectively transferring cost from informed high-risk individuals onto everyone else, including lower-risk policyholders who now subsidise a risk they do not share.\n\nThe available responses are limited and each carries a cost. Permitting insurers to require disclosure of genetic test results would remove the asymmetry but would likely discourage people from testing at all, including for conditions where early detection meaningfully improves treatment outcomes, since many would fear the results being used against them financially. Prohibiting disclosure, the current approach in several countries, protects testing uptake but leaves the pooling problem intact and growing as testing becomes more common and more informative. No jurisdiction has yet found a way to preserve both goals simultaneously, and the tension between them is likely to sharpen as the tests themselves grow cheaper and more accurate.",
      "questions": [
        {
          "question_id": "p01-10-q1",
          "type": "main_idea",
          "prompt": "The passage is primarily concerned with:",
          "options": [
            {
              "id": "A",
              "text": "Proving that genetic testing should be banned outright"
            },
            {
              "id": "B",
              "text": "Explaining a structural tension between genetic testing's medical benefits and its effect on insurance risk pooling, with no easy resolution"
            },
            {
              "id": "C",
              "text": "Arguing that insurers should always be allowed to see genetic test results"
            },
            {
              "id": "D",
              "text": "Claiming that insurance markets are unaffected by genetic information"
            },
            {
              "id": "E",
              "text": "Recommending a single specific policy solution the author believes is best"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage lays out the tension and states plainly that 'no jurisdiction has yet found a way to preserve both goals simultaneously' — it does not endorse a specific solution (E) or argue for a ban (A).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-10-q2",
          "type": "vocabulary_in_context",
          "prompt": "In context, 'asymmetry' most nearly refers to:",
          "options": [
            {
              "id": "A",
              "text": "An imbalance in the amount of risk-relevant information held by the individual versus the insurer"
            },
            {
              "id": "B",
              "text": "A difference in premium prices between two insurance companies"
            },
            {
              "id": "C",
              "text": "An imbalance in the physical health of two policyholders"
            },
            {
              "id": "D",
              "text": "A legal dispute between an insurer and a regulator"
            },
            {
              "id": "E",
              "text": "An uneven distribution of genetic testing companies across countries"
            }
          ],
          "correct_option_id": "A",
          "explanation": "The term describes individuals knowing 'more about their own future risk than insurers are legally permitted to ask about or use,' which is an information imbalance — matching A specifically.",
          "difficulty": "hard"
        },
        {
          "question_id": "p01-10-q3",
          "type": "inference",
          "prompt": "The passage implies that requiring disclosure of genetic test results to insurers would most likely:",
          "options": [
            {
              "id": "A",
              "text": "Have no effect on how many people choose to get tested"
            },
            {
              "id": "B",
              "text": "Increase testing uptake across the population"
            },
            {
              "id": "C",
              "text": "Discourage some people from testing, including for conditions where early detection helps treatment"
            },
            {
              "id": "D",
              "text": "Eliminate the need for insurance altogether"
            },
            {
              "id": "E",
              "text": "Have no impact on insurance premiums"
            }
          ],
          "correct_option_id": "C",
          "explanation": "This is stated directly: disclosure requirements 'would likely discourage people from testing at all, including for conditions where early detection meaningfully improves treatment outcomes.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-10-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most strengthen the author's claim that no jurisdiction has resolved the tension between testing uptake and risk pooling?",
          "options": [
            {
              "id": "A",
              "text": "A country requiring disclosure saw testing rates fall sharply while a neighbouring country banning disclosure saw insurer losses from undisclosed risk keep rising."
            },
            {
              "id": "B",
              "text": "Genetic tests have become cheaper over the past five years."
            },
            {
              "id": "C",
              "text": "Most people support the idea of genetic testing in principle."
            },
            {
              "id": "D",
              "text": "Some insurers offer discounts for healthy lifestyle habits."
            },
            {
              "id": "E",
              "text": "Alzheimer's research has advanced significantly."
            }
          ],
          "correct_option_id": "A",
          "explanation": "This finding shows both policy approaches (disclosure and non-disclosure) producing exactly the downside the author describes for each, directly supporting the claim that neither has solved the underlying tension.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p01-11",
      "topic": "Voting age reform",
      "word_count": 390,
      "text": "Several countries have lowered their voting age to sixteen for at least some elections, and campaigners in others continue to push for similar reform. The central argument in favour is one of consistency: sixteen-year-olds can, in various jurisdictions, work full-time, pay income tax, consent to certain medical treatments, and in some cases marry, so excluding them from the franchise while holding them to adult obligations in these other domains is difficult to justify on principled grounds.\n\nOpponents typically respond that political judgement, unlike the capacity to work or pay tax, requires a level of life experience and cognitive development that most sixteen-year-olds have not yet reached, and that the appropriate age threshold is a matter for reasonable line-drawing rather than a bright inconsistency to be corrected. This objection, however, proves too much if pressed consistently: no jurisdiction requires voters to pass a competence test at eighteen, twenty-five, or any other age, and mature judgement is not verified for any adult voter regardless of age. If political judgement is genuinely the standard, the current system already fails to enforce it for the adult population, making it an odd basis on which to exclude sixteen-year-olds specifically while admitting eighteen-year-olds without any comparable test.\n\nA more defensible version of the opposing view concedes this inconsistency but argues that some cutoff is unavoidable, and that eighteen is a more reasonable, if imperfect, threshold than sixteen because it more closely tracks the end of compulsory schooling and the point at which most people leave the family home. This is a genuine argument about where to draw an admittedly arbitrary line, rather than a claim that sixteen-year-olds categorically lack the relevant capacity, and it deserves to be engaged with on those narrower terms rather than dismissed alongside the weaker competence-based objection.",
      "questions": [
        {
          "question_id": "p01-11-q1",
          "type": "main_idea",
          "prompt": "The passage's overall argument is that:",
          "options": [
            {
              "id": "A",
              "text": "The competence-based objection to lowering the voting age is weak, though a narrower argument about where to draw an arbitrary line has more merit."
            },
            {
              "id": "B",
              "text": "Sixteen-year-olds should never be allowed to vote under any circumstances."
            },
            {
              "id": "C",
              "text": "All adults must pass a competence test before voting."
            },
            {
              "id": "D",
              "text": "Working and paying tax has no relevance to voting rights."
            },
            {
              "id": "E",
              "text": "Every country should lower the voting age to sixteen immediately."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The passage dismantles the competence objection (paragraph two) while explicitly treating the line-drawing argument (paragraph three) as more defensible and deserving engagement 'on those narrower terms.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-11-q2",
          "type": "logical_structure",
          "prompt": "The claim that 'no jurisdiction requires voters to pass a competence test' is used to:",
          "options": [
            {
              "id": "A",
              "text": "Show that all voters are equally competent"
            },
            {
              "id": "B",
              "text": "Undermine the consistency of the competence-based objection to lowering the voting age"
            },
            {
              "id": "C",
              "text": "Argue that competence tests should be introduced for all voters"
            },
            {
              "id": "D",
              "text": "Prove that sixteen-year-olds are more competent than adults"
            },
            {
              "id": "E",
              "text": "Support the opponent's position entirely"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This point is used specifically to expose an inconsistency in the opponent's stated standard, not to argue for introducing tests (C) or make claims about relative competence (D).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-11-q3",
          "type": "inference",
          "prompt": "The author would most likely agree that the 'more defensible' version of the opposing view, described in the final paragraph, is distinct from the earlier objection because it:",
          "options": [
            {
              "id": "A",
              "text": "Claims sixteen-year-olds categorically lack the capacity to vote"
            },
            {
              "id": "B",
              "text": "Concedes the inconsistency point and argues instead about where to place an admittedly arbitrary cutoff"
            },
            {
              "id": "C",
              "text": "Relies entirely on the same competence-testing logic"
            },
            {
              "id": "D",
              "text": "Rejects the idea that any age threshold is needed"
            },
            {
              "id": "E",
              "text": "Is identical in substance to the first objection"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage states this argument 'concedes this inconsistency but argues that some cutoff is unavoidable' — explicitly distinguishing it from the capacity-based claim in option A.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p01-12",
      "topic": "The ethics of nudging in public policy",
      "word_count": 400,
      "text": "Governments increasingly use 'nudges', small changes to how choices are presented, such as making pension enrolment automatic with an opt-out rather than an opt-in, to steer citizens toward outcomes deemed beneficial without restricting their formal freedom to choose otherwise. Because nudges preserve the option to choose differently, their proponents present them as a uniquely unobjectionable form of policy: unlike a ban or a tax, a nudge never forces anyone to do anything.\n\nThis framing, though widely accepted, understates the ethical stakes involved. A nudge works precisely because most people do not exercise the formal freedom it preserves; automatic enrolment in a pension scheme raises participation rates dramatically exactly because inertia, not considered preference, determines most people's behaviour once a default is set. The policy's effectiveness and its claim to being non-coercive are therefore in tension: the more effective the nudge is at steering behaviour, the more it is demonstrably not simply informing a free choice but exploiting a predictable psychological bias to produce a specific outcome regardless of what any given individual would have chosen if defaults did not exist.\n\nThis does not make nudging illegitimate. Many of the outcomes nudges are designed to produce, higher retirement savings, organ donation registration, reduced tax fraud, are ones that most people would endorse on reflection, and a policy that works with human psychology rather than against it can be more humane than a blunt mandate that ignores it entirely. But the 'it's not coercive because you can still opt out' defence deserves less weight than it is usually given, since the entire mechanism depends on most people not doing so. The more honest justification for nudging rests not on its supposed neutrality but on a judgement that the specific outcomes it produces are ones policymakers are justified in promoting, a judgement that deserves the same scrutiny applied to any other form of state influence over behaviour.",
      "questions": [
        {
          "question_id": "p01-12-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Nudges are a form of coercion identical to an outright ban."
            },
            {
              "id": "B",
              "text": "The claim that nudges are ethically unobjectionable because they preserve choice deserves less weight than usually given, since their effectiveness depends on people not exercising that choice."
            },
            {
              "id": "C",
              "text": "Governments should never attempt to influence citizen behaviour."
            },
            {
              "id": "D",
              "text": "Automatic pension enrolment has failed to increase participation."
            },
            {
              "id": "E",
              "text": "Nudges are entirely illegitimate and should be banned."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's core claim, stated across the second and third paragraphs. The author explicitly says 'this does not make nudging illegitimate' (ruling out E) and does not equate nudges with bans (ruling out A).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-12-q2",
          "type": "logical_structure",
          "prompt": "The second paragraph relates to the first by:",
          "options": [
            {
              "id": "A",
              "text": "Fully agreeing with the proponents' framing described in the first paragraph"
            },
            {
              "id": "B",
              "text": "Challenging the proponents' framing by pointing out a tension between a nudge's effectiveness and its claim to being non-coercive"
            },
            {
              "id": "C",
              "text": "Introducing an unrelated topic about tax fraud"
            },
            {
              "id": "D",
              "text": "Providing statistical proof that nudges never work"
            },
            {
              "id": "E",
              "text": "Repeating the definition of a nudge without adding anything new"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The second paragraph directly challenges the 'uniquely unobjectionable' framing from paragraph one by identifying the effectiveness/coercion tension — this is a challenge, not agreement (A) or repetition (E).",
          "difficulty": "medium"
        },
        {
          "question_id": "p01-12-q3",
          "type": "inference",
          "prompt": "According to the passage, what does the author believe is the 'more honest justification' for nudging?",
          "options": [
            {
              "id": "A",
              "text": "That nudges are neutral and never influence behaviour"
            },
            {
              "id": "B",
              "text": "That the specific outcomes nudges produce are ones policymakers are justified in promoting, a judgement warranting the same scrutiny as other state influence"
            },
            {
              "id": "C",
              "text": "That nudges should never be scrutinised because they preserve choice"
            },
            {
              "id": "D",
              "text": "That opt-out defaults are always unethical"
            },
            {
              "id": "E",
              "text": "That nudging is justified purely because it is inexpensive"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated in the final sentence almost directly: the honest justification rests on a judgement about outcomes 'that deserves the same scrutiny applied to any other form of state influence over behaviour.'",
          "difficulty": "hard"
        },
        {
          "question_id": "p01-12-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the second paragraph, 'inertia' most nearly refers to:",
          "options": [
            {
              "id": "A",
              "text": "A deliberate, carefully reasoned choice to accept the default option"
            },
            {
              "id": "B",
              "text": "A legal requirement to enrol in a pension scheme"
            },
            {
              "id": "C",
              "text": "People's tendency to stick with whatever option requires no action, rather than actively choosing"
            },
            {
              "id": "D",
              "text": "A government policy mandating automatic enrolment"
            },
            {
              "id": "E",
              "text": "The rate at which pension savings grow over time"
            }
          ],
          "correct_option_id": "C",
          "explanation": "The passage contrasts 'inertia' with 'considered preference' as the true driver of behaviour once a default is set, indicating it means passive persistence with the default rather than active decision-making.",
          "difficulty": "medium"
        }
      ]
    }
  ]
},
{
  "paper_id": "praxis-p02",
  "title": "Praxis LNAT Practice Paper 2",
  "section": "A",
  "time_limit_minutes": 95,
  "total_questions": 42,
  "difficulty_band": "harder than Paper 1",
  "passages": [
    {
      "passage_id": "p02-01",
      "topic": "Retroactive criminal liability",
      "word_count": 356,
      "text": "The principle that conduct cannot be criminalised after the fact, nulla poena sine lege, is treated as close to inviolable in most legal systems, and for good reason: a person cannot conform their behaviour to a rule that does not yet exist, so punishing them for failing to do so is punishment without fair notice. Yet the principle has always tolerated exceptions at its margins, most famously the post-war tribunals that prosecuted individuals for acts that, however monstrous, were not clearly criminal under the domestic law in force at the time they were committed.\n\nDefenders of such exceptions do not deny the general force of the non-retroactivity principle; they argue instead that it protects against a narrower harm than is usually supposed. The harm nulla poena sine lege guards against is surprise: being punished for conduct one reasonably believed, at the time, to be lawful. Where the conduct in question was already understood by any reasonable person to be gravely wrong, even if no specific statute criminalised it, the argument runs, the element of unfair surprise is largely absent, and applying a new legal label to already-recognised wrongdoing is a lesser departure from the principle than it first appears.\n\nThis defence, however, proves considerably less than it needs to for the exception to be safely bounded. Whether conduct was 'already understood to be gravely wrong' is a retrospective judgement made by the very body seeking to prosecute it, and moral consensus about the past is notoriously reconstructed after the fact to suit present purposes. A rule permitting retroactive prosecution whenever a court later decides an act was obviously wrong at the time offers scarcely more protection against arbitrary punishment than no rule at all, since the constraint depends entirely on the good faith of the body applying it. The Nuremberg exception may well have been justified on its own terms, given the scale and clarity of the wrongdoing involved, but justifying one exceptional case is not the same as establishing a stable general standard for when retroactivity becomes permissible.",
      "questions": [
        {
          "question_id": "p02-01-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Retroactive prosecution is always illegitimate, without exception."
            },
            {
              "id": "B",
              "text": "The 'already understood to be wrong' defence of retroactive prosecution may justify isolated cases but fails to supply a stable general standard, since the judgement of wrongness is made retrospectively by the prosecuting body itself."
            },
            {
              "id": "C",
              "text": "The Nuremberg tribunals were unjustified and should never have proceeded."
            },
            {
              "id": "D",
              "text": "Moral consensus about historical conduct is always accurate and uncontested."
            },
            {
              "id": "E",
              "text": "Fair notice is irrelevant to criminal law."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The final paragraph states this explicitly: the defence 'proves considerably less than it needs to' as a general standard, while conceding Nuremberg 'may well have been justified on its own terms' — ruling out both A and C as overstatements.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-01-q2",
          "type": "assumption",
          "prompt": "The defenders' argument described in the second paragraph depends on which assumption?",
          "options": [
            {
              "id": "A",
              "text": "That all criminal law must be codified in written statutes."
            },
            {
              "id": "B",
              "text": "That the wrongness of certain conduct can be reliably identified as 'already understood' independent of the prosecuting body's own retrospective judgement."
            },
            {
              "id": "C",
              "text": "That no legal system has ever punished conduct that was lawful at the time."
            },
            {
              "id": "D",
              "text": "That fair notice is irrelevant to justice."
            },
            {
              "id": "E",
              "text": "That international tribunals have no legitimate authority."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The author's rebuttal in the third paragraph targets exactly this assumption, pointing out that the judgement of prior wrongness is made by 'the very body seeking to prosecute it' — identifying it as the load-bearing but unstated premise.",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-01-q3",
          "type": "logical_structure",
          "prompt": "The final sentence, distinguishing Nuremberg from a 'stable general standard', functions to:",
          "options": [
            {
              "id": "A",
              "text": "Fully retract the criticism made earlier in the paragraph"
            },
            {
              "id": "B",
              "text": "Concede a specific case while denying that it generalises into a safe rule"
            },
            {
              "id": "C",
              "text": "Introduce an entirely new argument about international law"
            },
            {
              "id": "D",
              "text": "Prove that all retroactive prosecutions are equally justified"
            },
            {
              "id": "E",
              "text": "Undermine the non-retroactivity principle entirely"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is a classic 'concede the instance, deny the generalisation' move — accepting Nuremberg's outcome without accepting it as evidence that a workable general standard exists.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p02-02",
      "topic": "The paradox of tolerance",
      "word_count": 372,
      "text": "Karl Popper's paradox of tolerance holds that a society committed to unlimited tolerance will, if it tolerates the intolerant without restriction, eventually be destroyed by them, since the intolerant will use the very freedoms extended to them to dismantle those freedoms for everyone else. Popper's proposed resolution was that a tolerant society retains the right to suppress intolerant movements, provided it does so through argument and, where necessary, force, only when persuasion has failed and the movement poses a genuine threat to the tolerant order itself.\n\nThe difficulty with operationalising this resolution is that it requires drawing a line between intolerance that must be countered by argument alone and intolerance sufficiently dangerous to warrant suppression, and Popper's own formulation offers little guidance on where that line sits. Almost any political movement can be redescribed, by its opponents, as an existential threat to the tolerant order; the accusation of intolerance is at least as useful as a rhetorical weapon as it is a genuine diagnostic category. A standard vague enough to justify suppressing genuinely dangerous extremism is, by the same token, vague enough to justify suppressing merely unpopular dissent, and history offers no shortage of governments that invoked exactly this kind of reasoning to silence opposition that was intolerant of nothing beyond the government's own policies.\n\nA more defensible version of Popper's principle restricts the suppression option to movements that reject the tolerant order's core procedural commitments themselves, most importantly the willingness to relinquish power if defeated through the very processes being used to gain it, rather than movements merely holding views a majority finds objectionable. This version is narrower and harder to abuse, precisely because it asks a factual question, whether a movement has committed to abandoning power peacefully if it loses, rather than an evaluative one about how dangerous or offensive its views happen to be. It does not eliminate the risk of bad-faith application, since a government could misrepresent even this narrower test, but it substantially reduces the room for doing so compared to Popper's original, broader formulation.",
      "questions": [
        {
          "question_id": "p02-02-q1",
          "type": "main_idea",
          "prompt": "The passage's overall argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Popper's paradox of tolerance is entirely without merit and should be discarded."
            },
            {
              "id": "B",
              "text": "Popper's original formulation is too vague to safely operationalise, and a narrower procedural test focused on commitment to peaceful transfer of power is more defensible."
            },
            {
              "id": "C",
              "text": "All political movements should be tolerated without exception."
            },
            {
              "id": "D",
              "text": "Governments have never misused claims of intolerance to suppress dissent."
            },
            {
              "id": "E",
              "text": "Popper's resolution requires no further refinement."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This matches the passage's two-part structure: critiquing the vagueness of Popper's original test, then proposing and defending a narrower alternative, matching option B precisely.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-02-q2",
          "type": "logical_structure",
          "prompt": "The claim that 'the accusation of intolerance is at least as useful as a rhetorical weapon as it is a genuine diagnostic category' serves to:",
          "options": [
            {
              "id": "A",
              "text": "Support Popper's original formulation without qualification"
            },
            {
              "id": "B",
              "text": "Illustrate why a vague suppression standard is dangerously exploitable"
            },
            {
              "id": "C",
              "text": "Argue that no movement is ever genuinely intolerant"
            },
            {
              "id": "D",
              "text": "Prove that suppression is never justified under any standard"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated point about political rhetoric in general"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This sentence directly supports the paragraph's critique that a vague standard 'is, by the same token, vague enough to justify suppressing merely unpopular dissent' — it is evidence for exploitability, not a general rejection of suppression (D).",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-02-q3",
          "type": "inference",
          "prompt": "The narrower version of Popper's principle described in the final paragraph is 'harder to abuse' primarily because:",
          "options": [
            {
              "id": "A",
              "text": "It relies on a factual question about commitment to peaceful transfer of power rather than an evaluative judgement about how objectionable a movement's views are"
            },
            {
              "id": "B",
              "text": "It applies only to movements with fewer than a certain number of members"
            },
            {
              "id": "C",
              "text": "It has never been misapplied by any government"
            },
            {
              "id": "D",
              "text": "It removes the possibility of suppression entirely"
            },
            {
              "id": "E",
              "text": "It requires unanimous agreement before any action is taken"
            }
          ],
          "correct_option_id": "A",
          "explanation": "The passage explicitly attributes the narrower version's advantage to asking 'a factual question... rather than an evaluative one', which is option A. It explicitly notes the risk of bad-faith application is reduced, not eliminated (ruling out C).",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-02-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most weaken the author's claim that the narrower, procedural version of Popper's test is harder to abuse?",
          "options": [
            {
              "id": "A",
              "text": "Several governments have falsely accused peaceful opposition movements of secretly planning to seize and retain power unlawfully, using this claim to justify suppression."
            },
            {
              "id": "B",
              "text": "Some countries have never applied Popper's test in any form."
            },
            {
              "id": "C",
              "text": "Popper's original writings on tolerance are widely cited in political philosophy."
            },
            {
              "id": "D",
              "text": "Most political movements publicly claim to respect democratic procedures."
            },
            {
              "id": "E",
              "text": "The paradox of tolerance was first formulated in the twentieth century."
            }
          ],
          "correct_option_id": "A",
          "explanation": "This would show the narrower test is still exploitable through fabricated factual claims, directly undermining the author's argument that it substantially reduces room for bad-faith application.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p02-03",
      "topic": "Judicial precedent vs codified constitutions",
      "word_count": 358,
      "text": "Common-law systems built on judicial precedent and civil-law systems built on comprehensive written codes represent two different answers to the same underlying problem: how to constrain judicial power while allowing law to adapt to circumstances a legislature could not have anticipated. Precedent systems grant judges considerable latitude to develop the law incrementally, case by case, on the theory that judges closest to a dispute's specific facts are best placed to refine general principles sensibly over time. Codified systems instead constrain judges to apply and interpret a comprehensive text, on the theory that law made by elected legislatures carries a democratic legitimacy that judge-made law, however sensible, cannot claim.\n\nEach system's strength is also its characteristic weakness. Precedent allows the law to evolve without waiting for a legislature to act, which matters considerably given how slowly most legislatures move, but this same flexibility means the law's content at any given moment depends heavily on which disputes happened to reach appellate courts and in what order, producing outcomes that can feel arbitrary or path-dependent to litigants whose case simply arrived before the relevant principle had been worked out. Codification offers predictability and a clearer democratic pedigree, but a sufficiently detailed code inevitably contains gaps and ambiguities that its drafters did not foresee, and judges in codified systems must resolve these gaps regardless, often by reasoning that resembles precedent-based analysis in substance while formally denying that this is what they are doing.\n\nThe practical convergence between the two systems, most codified jurisdictions now accord real, if informal, weight to prior decisions, and most precedent-based jurisdictions have codified large areas of law that were once left entirely to judicial development, suggests that the theoretical distinction between the two models describes a spectrum of practice rather than a genuine binary choice, and that mature legal systems tend to migrate toward whichever balance of flexibility and predictability best serves the specific area of law in question.",
      "questions": [
        {
          "question_id": "p02-03-q1",
          "type": "main_idea",
          "prompt": "The passage's central claim is that:",
          "options": [
            {
              "id": "A",
              "text": "Codified legal systems are objectively superior to precedent-based systems."
            },
            {
              "id": "B",
              "text": "The theoretical distinction between precedent-based and codified systems describes a spectrum of practice, and mature systems converge toward a workable balance rather than remaining at either extreme."
            },
            {
              "id": "C",
              "text": "Judicial precedent should be abolished entirely in favour of codes."
            },
            {
              "id": "D",
              "text": "Legislatures never move slowly."
            },
            {
              "id": "E",
              "text": "Codified systems never contain gaps or ambiguities."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit closing claim, supported by evidence of mutual borrowing between the two systems described in the final paragraph.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-03-q2",
          "type": "inference",
          "prompt": "The passage implies that judges in codified systems who resolve gaps in the code are:",
          "options": [
            {
              "id": "A",
              "text": "Acting entirely outside their legal authority"
            },
            {
              "id": "B",
              "text": "Engaging in reasoning that resembles precedent-based analysis, despite formally denying this"
            },
            {
              "id": "C",
              "text": "Never required to resolve any ambiguity"
            },
            {
              "id": "D",
              "text": "Applying a process identical to legislative drafting"
            },
            {
              "id": "E",
              "text": "Prohibited from citing any prior decisions"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: such judges reason 'in a manner that resembles precedent-based analysis in substance while formally denying that this is what they are doing.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-03-q3",
          "type": "logical_structure",
          "prompt": "The second paragraph's structure is best described as:",
          "options": [
            {
              "id": "A",
              "text": "A single one-sided argument in favour of codified systems"
            },
            {
              "id": "B",
              "text": "A parallel treatment showing that each system's core strength produces a characteristic weakness"
            },
            {
              "id": "C",
              "text": "A historical narrative with no evaluative content"
            },
            {
              "id": "D",
              "text": "A refutation of the first paragraph's claims"
            },
            {
              "id": "E",
              "text": "An unrelated digression about legislative procedure"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph explicitly frames itself this way ('each system's strength is also its characteristic weakness') and then works through precedent and codification in parallel, showing this pattern for each.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p02-04",
      "topic": "Moral luck and culpability",
      "word_count": 380,
      "text": "Two drivers run identical red lights while checking their phones, equally inattentive, equally reckless. One street is empty; the other has a pedestrian crossing at exactly the wrong moment. The first driver receives a fine; the second is charged with causing death by dangerous driving and may face years in prison. The philosopher Bernard Williams termed this phenomenon 'moral luck': the disturbing fact that our moral and legal judgements of a person routinely depend on factors, such as whether a pedestrian happened to be crossing, that were entirely outside that person's control at the moment of decision.\n\nThe standard objection to differential punishment in such cases is that it violates a basic principle of just deserts: culpability should track what an agent chose and could control, namely the decision to drive while distracted, not the happenstance of outcome, which the agent could not control and did not choose. On this view, both drivers are equally culpable and should, in a fully rational system of justice, receive equal punishment, with the outcome treated as morally irrelevant to blame even if it remains relevant to matters like compensation for the victim's family.\n\nYet virtually no legal system has ever operated this way, and the persistence of outcome-based liability across radically different legal traditions suggests it may track something more than mere confusion or bias. One defence holds that outcomes are not entirely irrelevant to culpability because they retrospectively reveal something about the risk the agent actually created, which was always present but only becomes fully salient once realised; the second driver's inattention created an objectively higher-stakes gamble the moment a pedestrian was in fact present, even though neither driver could perceive this difference at the time. A second, more sceptical defence abandons the attempt to justify the practice in principle and treats it instead as a pragmatic compromise: a system that punished attempted and completed harms identically would need to detect and prosecute vastly more near-miss cases to maintain any deterrent effect, at a cost most societies are unwilling to bear, so outcome sensitivity persists not because it is philosophically defensible but because the alternative is administratively unworkable.",
      "questions": [
        {
          "question_id": "p02-04-q1",
          "type": "main_idea",
          "prompt": "The passage's overall purpose is to:",
          "options": [
            {
              "id": "A",
              "text": "Prove that outcome-based punishment is entirely irrational and should be abolished."
            },
            {
              "id": "B",
              "text": "Present the tension between culpability-based and outcome-based judgement in law, and outline two different defences of why legal systems nonetheless track outcomes."
            },
            {
              "id": "C",
              "text": "Argue that both drivers described should receive identical, maximal punishment."
            },
            {
              "id": "D",
              "text": "Claim that legal systems have always agreed on how to punish reckless driving."
            },
            {
              "id": "E",
              "text": "Dismiss Bernard Williams's concept of moral luck as incoherent."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage lays out the objection to outcome-based punishment, then presents two distinct defences of the practice ('one defence holds... a second... defence'), matching B. It does not argue for a specific verdict (C) or dismiss Williams (E).",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-04-q2",
          "type": "logical_structure",
          "prompt": "The first defence described in the final paragraph relates to the objection in the second paragraph by:",
          "options": [
            {
              "id": "A",
              "text": "Fully conceding the objection and abandoning outcome-based liability"
            },
            {
              "id": "B",
              "text": "Denying that outcomes are entirely irrelevant to culpability, on the grounds that they retrospectively reveal the magnitude of risk actually created"
            },
            {
              "id": "C",
              "text": "Ignoring the objection entirely and introducing an unrelated legal principle"
            },
            {
              "id": "D",
              "text": "Arguing that both drivers created identical, equally serious risks"
            },
            {
              "id": "E",
              "text": "Claiming that culpability has nothing to do with risk at all"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The first defence directly challenges the premise that outcome is 'morally irrelevant to blame' by arguing outcomes reveal something real about the risk created, which is option B.",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-04-q3",
          "type": "vocabulary_in_context",
          "prompt": "As used in the final paragraph, 'salient' most nearly means:",
          "options": [
            {
              "id": "A",
              "text": "Legally binding"
            },
            {
              "id": "B",
              "text": "Noticeable or prominent"
            },
            {
              "id": "C",
              "text": "Financially costly"
            },
            {
              "id": "D",
              "text": "Morally irrelevant"
            },
            {
              "id": "E",
              "text": "Statistically improbable"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The risk is described as 'always present but only becomes fully salient once realised' — meaning it becomes noticeable or prominent once the harm actually occurs, matching B.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-04-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most strengthen the second, pragmatic defence of outcome-based liability?",
          "options": [
            {
              "id": "A",
              "text": "A study finds that jurisdictions attempting to prosecute near-miss dangerous driving as seriously as completed fatalities required far larger enforcement budgets without a corresponding gain in deterrence."
            },
            {
              "id": "B",
              "text": "A study finds that most drivers are unaware of the legal distinction between the two offences."
            },
            {
              "id": "C",
              "text": "A philosopher publishes a new defence of Bernard Williams's original argument."
            },
            {
              "id": "D",
              "text": "A survey shows public support for harsher penalties for dangerous driving in general."
            },
            {
              "id": "E",
              "text": "A study finds that reaction times decline with phone use regardless of outcome."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The pragmatic defence claims that punishing near-misses as severely as completed harms would be 'administratively unworkable.' Direct evidence of the cost and ineffectiveness of attempting this supports exactly that claim.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p02-05",
      "topic": "Antitrust and market concentration",
      "word_count": 362,
      "text": "Antitrust law has traditionally judged market concentration primarily by its effect on consumer prices: a merger or dominant position is treated as harmful chiefly when it allows a firm to raise prices above the competitive level. This consumer-welfare standard has organised competition policy in most jurisdictions for decades, and it has the considerable virtue of being measurable, since price effects can in principle be estimated and tested against a counterfactual competitive market.\n\nCritics argue that this standard systematically understates the harm of concentration in markets, increasingly common in the digital economy, where dominant firms offer services free or below cost, funded by advertising or data extraction, making a pure price-effects test structurally unable to detect any consumer harm at all regardless of how dominant the firm becomes. A platform that eliminates rivals through predatory pricing, then degrades service quality, narrows consumer choice, or extracts value through reduced privacy once competition has been eliminated, may never register as harmful on a standard built to detect rising prices, because no price ever rose in the conventional sense.\n\nDefenders of the consumer-welfare standard respond that abandoning a measurable test in favour of broader considerations, quality, innovation, privacy, market structure generally, trades a flawed but administrable rule for one that grants regulators enormous discretion to intervene against concentration they dislike for reasons that are difficult to specify or challenge in advance, inviting exactly the kind of arbitrary enforcement that a rule-of-law-based competition regime is meant to avoid. This is a genuine cost, not merely a rhetorical objection, since firms need some ability to predict in advance whether a proposed merger or business practice will survive scrutiny, and a standard built on open-ended judgements about quality and innovation is considerably harder to predict than one built on measurable prices. The disagreement, properly understood, is not simply about which harms matter, since both sides can agree that non-price harms are real, but about how much predictability a workable competition regime is willing to sacrifice in order to capture them.",
      "questions": [
        {
          "question_id": "p02-05-q1",
          "type": "main_idea",
          "prompt": "The passage's central claim is that:",
          "options": [
            {
              "id": "A",
              "text": "The consumer-welfare standard should be abandoned immediately in every jurisdiction."
            },
            {
              "id": "B",
              "text": "The real disagreement over antitrust standards is not about whether non-price harms exist, but about how much predictability a competition regime should sacrifice to capture them."
            },
            {
              "id": "C",
              "text": "Digital platforms have never caused any consumer harm."
            },
            {
              "id": "D",
              "text": "Price effects are the only harm that matters in competition policy."
            },
            {
              "id": "E",
              "text": "Regulators should be given unlimited discretion to block any merger."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated almost verbatim in the final sentence, which reframes the entire debate around a trade-off rather than a factual disagreement about whether non-price harms exist.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-05-q2",
          "type": "inference",
          "prompt": "The passage implies that a pure price-effects test would be least able to detect harm in a market where:",
          "options": [
            {
              "id": "A",
              "text": "A dominant firm raises prices well above competitive levels"
            },
            {
              "id": "B",
              "text": "A dominant firm offers a free service funded by advertising and eliminates rivals without ever raising a price"
            },
            {
              "id": "C",
              "text": "Two small firms compete on price for a low-margin product"
            },
            {
              "id": "D",
              "text": "A regulator blocks a merger before it is finalised"
            },
            {
              "id": "E",
              "text": "Consumers actively compare prices across multiple providers"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This matches the second paragraph's central example: harms occurring 'because no price ever rose in the conventional sense,' making them invisible to a price-based test specifically in free, ad-funded markets.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-05-q3",
          "type": "logical_structure",
          "prompt": "The third paragraph's treatment of the consumer-welfare standard's defenders is best described as:",
          "options": [
            {
              "id": "A",
              "text": "A dismissal of their objection as purely rhetorical and without substance"
            },
            {
              "id": "B",
              "text": "A sympathetic account that treats their concern about predictability as a genuine cost, not merely a rhetorical objection"
            },
            {
              "id": "C",
              "text": "A claim that predictability is irrelevant to competition policy"
            },
            {
              "id": "D",
              "text": "An argument that regulators should never be given any discretion whatsoever"
            },
            {
              "id": "E",
              "text": "A repetition of the critics' argument from the second paragraph"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph explicitly states 'this is a genuine cost, not merely a rhetorical objection,' treating the predictability concern with the same seriousness given to the critics' position earlier — matching B, not dismissal (A).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p02-06",
      "topic": "The non-identity problem in climate policy",
      "word_count": 388,
      "text": "Derek Parfit's non-identity problem poses an unusually sharp difficulty for arguments that current generations wrong future generations through actions like carbon-intensive policy. The problem arises because which specific people come to exist depends on the precise timing and circumstances of conception, which are themselves affected by broad social and economic conditions, including climate policy itself. A different energy policy today would, over enough time, alter who meets whom, when children are conceived, and therefore which specific individuals are eventually born; the future people who will actually inherit a degraded climate are not the same specific individuals who would have existed under a different policy, but an entirely different set of people who owe their existence to the very policy that will harm them.\n\nThis creates a genuine philosophical puzzle for standard harm-based arguments, because harm is usually understood comparatively: a person is harmed by an act if the act leaves them worse off than they would otherwise have been. But the future individuals harmed by climate degradation would not have existed at all under the alternative policy that avoided the harm, so there is no coherent 'they' who would have been better off; the only alternative to their harmed existence is their non-existence, and provided their harmed lives remain, on balance, worth living, it becomes difficult to say they have been made worse off by anyone's comparative choice, precisely because there is no version of them that fared better.\n\nThis does not mean climate harms are therefore morally acceptable, and only a small minority of philosophers have concluded that it does. What it means is that the strongest available argument against carbon-intensive policy cannot rest on identifiable harm to specific future individuals, since the non-identity problem genuinely blocks that particular argument. The more robust alternative grounds the wrong not in harm to specific persons but in an impersonal standard: that policies producing a worse state of affairs overall, a planet with more suffering and fewer options for whoever eventually exists, are wrong regardless of whether any specific individual can be shown to have been made worse off by them, since morality plausibly cares about the quality of outcomes and not only about tracing harm to a particular victim.",
      "questions": [
        {
          "question_id": "p02-06-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Climate degradation causes no moral wrong of any kind."
            },
            {
              "id": "B",
              "text": "The non-identity problem blocks person-affecting harm arguments against carbon-intensive policy, but an impersonal standard focused on the overall quality of outcomes can still ground the wrongness of such policy."
            },
            {
              "id": "C",
              "text": "Future generations do not exist and therefore cannot be discussed morally."
            },
            {
              "id": "D",
              "text": "All philosophers agree climate policy raises no moral questions."
            },
            {
              "id": "E",
              "text": "Comparative harm arguments are always the strongest available arguments in ethics."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion in the final paragraph: the non-identity problem blocks one specific argument, but an impersonal, outcome-based standard remains available and is presented as 'the more robust alternative.'",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-06-q2",
          "type": "inference",
          "prompt": "According to the passage, the non-identity problem arises specifically because:",
          "options": [
            {
              "id": "A",
              "text": "Future people do not care about climate policy"
            },
            {
              "id": "B",
              "text": "The specific identities of future people depend on conditions, including policy, that determine who is conceived, so a different policy would result in different people existing rather than the same people faring better"
            },
            {
              "id": "C",
              "text": "Climate change has no measurable effects on future generations"
            },
            {
              "id": "D",
              "text": "Comparative harm can never be measured in any context"
            },
            {
              "id": "E",
              "text": "Philosophers cannot agree on the definition of harm"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the mechanism explained in the first paragraph: different policy changes the timing of conception and therefore which individuals are born, meaning the future people affected are not the same people who would have existed otherwise.",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-06-q3",
          "type": "logical_structure",
          "prompt": "The third paragraph's opening sentence, 'This does not mean climate harms are therefore morally acceptable,' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Reverse the entire argument made in the second paragraph"
            },
            {
              "id": "B",
              "text": "Pre-empt a misreading of the non-identity problem as a full moral defence of harmful policy"
            },
            {
              "id": "C",
              "text": "Introduce a new, unrelated topic about acceptability in general"
            },
            {
              "id": "D",
              "text": "Concede that the non-identity problem has no philosophical significance"
            },
            {
              "id": "E",
              "text": "Argue that only impersonal standards have ever mattered in ethics"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This functions as a clarifying pre-emption, blocking the natural but mistaken inference that the non-identity problem, by blocking one argument, thereby makes the underlying policy acceptable — it does not reverse the prior argument (A).",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-06-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the passage, 'person-affecting' (implied by the phrase 'comparative choice... they have been made worse off') most nearly characterises an argument that:",
          "options": [
            {
              "id": "A",
              "text": "Applies only to arguments about corporations, not individuals"
            },
            {
              "id": "B",
              "text": "Judges an act as wrong based on whether it makes a specific, identifiable individual worse off than that same individual would otherwise have been"
            },
            {
              "id": "C",
              "text": "Applies regardless of whether any specific individual exists at all"
            },
            {
              "id": "D",
              "text": "Focuses exclusively on economic rather than moral considerations"
            },
            {
              "id": "E",
              "text": "Concerns only harms that occur within a single generation"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage's description of comparative, harm-based arguments centres on whether a specific person is worse off than 'they' would have been under an alternative — the defining feature of a person-affecting view, matching B.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p02-07",
      "topic": "Cultural relativism versus universal human rights",
      "word_count": 365,
      "text": "Cultural relativism, applied to human rights, holds that moral standards are internal to particular cultures and that no culture is entitled to judge another's practices by standards external to it, including standards embedded in international human rights instruments that were drafted predominantly by Western states. Proponents point out, not unreasonably, that many human rights frameworks were developed without meaningful input from the societies later expected to comply with them, and that treating one culture's moral vocabulary as a universal yardstick risks repeating precisely the imperialist posture that international human rights law claims to have moved beyond.\n\nThe strongest version of the relativist challenge, however, faces a difficulty that weaker versions do not: if moral standards are genuinely internal to cultures with no standard external to all of them, then relativism cannot coherently condemn a culture that violently suppresses internal dissent, since the dissenters are, by the relativist's own logic, simply a minority faction whose views carry no more claim to represent 'the culture's' standards than the practices they are objecting to. Relativism, taken consistently, cannot distinguish between a genuinely shared cultural consensus and the mere imposition of a ruling group's preferences on a population that never actually endorsed them, because it has no resources, once it abandons any standard external to culture, for adjudicating which voices within a culture count as authoritative.\n\nA more defensible middle position holds that certain minimal standards, protection from arbitrary killing, torture, and systematic exclusion from political participation, are not culturally specific impositions but preconditions for any group of people to meaningfully determine their own values and practices at all, whatever those turn out to be; without protection from arbitrary violence, there is no coherent sense in which a population can be said to have freely arrived at its own moral consensus in the first place. This position rejects the imperialist imposition of a full external moral code, which the relativist critique rightly warns against, while still supplying a basis, procedural rather than substantive, for distinguishing between authentic cultural self-determination and its coercive imitation.",
      "questions": [
        {
          "question_id": "p02-07-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Cultural relativism is entirely correct and international human rights law is illegitimate."
            },
            {
              "id": "B",
              "text": "Strict cultural relativism cannot coherently distinguish authentic cultural consensus from coercive imposition, but minimal procedural protections can be defended as preconditions for genuine self-determination rather than external imposition."
            },
            {
              "id": "C",
              "text": "All human rights frameworks should be applied identically without regard to cultural context."
            },
            {
              "id": "D",
              "text": "No culture has ever suppressed internal dissent."
            },
            {
              "id": "E",
              "text": "Cultural relativism has no reasonable basis whatsoever."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This synthesises the passage's critique of strict relativism with its proposed middle position, which is explicitly framed as procedural rather than a full external moral code, matching B and ruling out the overstated A, C, and E.",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-07-q2",
          "type": "logical_structure",
          "prompt": "The second paragraph's argument against strict relativism proceeds by:",
          "options": [
            {
              "id": "A",
              "text": "Citing empirical statistics about human rights violations"
            },
            {
              "id": "B",
              "text": "Showing that relativism, applied consistently, has no way to distinguish genuine cultural consensus from a ruling group's imposed preferences"
            },
            {
              "id": "C",
              "text": "Appealing to the authority of international human rights instruments"
            },
            {
              "id": "D",
              "text": "Arguing that all cultures actually share identical values"
            },
            {
              "id": "E",
              "text": "Conceding that relativism is correct in every respect"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph is a logical, internal critique: it shows relativism lacks 'resources... for adjudicating which voices within a culture count as authoritative,' which is an internal consistency argument, not an empirical or authority-based one.",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-07-q3",
          "type": "inference",
          "prompt": "The 'middle position' described in the final paragraph would most likely reject which of the following?",
          "options": [
            {
              "id": "A",
              "text": "Protection from arbitrary killing as a minimal standard"
            },
            {
              "id": "B",
              "text": "Imposing a full, detailed external moral code on a society regardless of its own values"
            },
            {
              "id": "C",
              "text": "Protection from torture as a minimal standard"
            },
            {
              "id": "D",
              "text": "The idea that populations should be able to determine their own values"
            },
            {
              "id": "E",
              "text": "Protection from systematic exclusion from political participation"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explicitly states this position 'rejects the imperialist imposition of a full external moral code,' while endorsing the other listed protections as minimal preconditions, not a comprehensive code.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p02-08",
      "topic": "Plea bargaining and coerced guilty pleas",
      "word_count": 378,
      "text": "The vast majority of criminal convictions in common-law jurisdictions are secured not through trial but through negotiated guilty pleas, typically in exchange for reduced charges or a lighter sentence than the defendant would risk if convicted after trial. Defenders describe this as a mutually beneficial bargain: the state avoids the expense and uncertainty of trial, and the defendant gains a predictable, reduced outcome. Critics describe the same practice using a different vocabulary entirely: not a bargain between equals but a form of coercion, in which defendants who maintain their innocence face a punishing premium, sometimes called the 'trial penalty', for exercising their right to a trial and losing.\n\nThe scale of this penalty is what makes the coercion charge more than rhetorical. In many jurisdictions, defendants convicted after trial receive sentences several times longer than those who plead guilty to the same underlying conduct, a gap large enough that a rational, even innocent, defendant facing a plausible but not certain risk of conviction may find it safer to plead guilty to a crime they did not commit than to gamble on a trial whose outcome they cannot fully predict. This is not a hypothetical concern; documented exonerations include a meaningful number of individuals who pleaded guilty despite factual innocence, precisely because the arithmetic of risk made a guaranteed lesser sentence appear safer than a small but real chance of a dramatically harsher one.\n\nThe core structural problem is that plea bargaining conditions a defendant's sentence not on their culpability, which a trial exists to determine, but on their willingness to accept the state's uncorroborated version of events without contest, and does so under a sentencing gap wide enough to function as genuine pressure rather than mere incentive for the guilty to save the state resources. Proposed remedies, capping the gap between plea and trial sentences, mandating judicial review of unusually large discrepancies, have each been resisted by prosecutors on the grounds that a smaller gap would remove the incentive that currently allows courts to process caseloads that would otherwise overwhelm available trial capacity, revealing that the practice persists in its current form less because it reliably tracks guilt than because the alternative is administratively unaffordable.",
      "questions": [
        {
          "question_id": "p02-08-q1",
          "type": "main_idea",
          "prompt": "The passage's central claim is that:",
          "options": [
            {
              "id": "A",
              "text": "Plea bargaining should be abolished entirely and immediately."
            },
            {
              "id": "B",
              "text": "The scale of the trial penalty makes plea bargaining function as genuine coercive pressure rather than a mutual bargain, and the practice persists mainly because eliminating it is administratively unaffordable."
            },
            {
              "id": "C",
              "text": "All defendants who plead guilty are factually innocent."
            },
            {
              "id": "D",
              "text": "Trials are always a fairer method of determining guilt than plea bargains."
            },
            {
              "id": "E",
              "text": "Prosecutors have no legitimate reasons for supporting plea bargaining."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This matches the passage's final paragraph and overall argument closely; the author does not claim all guilty pleas involve innocent defendants (C) nor call for outright abolition (A), but rather diagnoses why the current scale of the practice is problematic.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-08-q2",
          "type": "logical_structure",
          "prompt": "The reference to 'documented exonerations' in the second paragraph functions to:",
          "options": [
            {
              "id": "A",
              "text": "Prove that no guilty pleas are ever accurate"
            },
            {
              "id": "B",
              "text": "Provide concrete evidence that the coercion concern is not merely hypothetical"
            },
            {
              "id": "C",
              "text": "Undermine the passage's overall argument"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated topic about wrongful convictions after trial"
            },
            {
              "id": "E",
              "text": "Support the defenders' description of plea bargaining as mutually beneficial"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The sentence immediately preceding it states 'this is not a hypothetical concern,' and the exonerations are cited as concrete evidence, matching B directly.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-08-q3",
          "type": "inference",
          "prompt": "The passage implies that prosecutors resist capping the plea-trial sentencing gap primarily because:",
          "options": [
            {
              "id": "A",
              "text": "They believe innocent defendants never plead guilty"
            },
            {
              "id": "B",
              "text": "A smaller gap would remove the incentive structure that allows courts to process caseloads within existing trial capacity"
            },
            {
              "id": "C",
              "text": "They are legally required to oppose any sentencing reform"
            },
            {
              "id": "D",
              "text": "They believe trial penalties have no effect on defendant behaviour"
            },
            {
              "id": "E",
              "text": "Judicial review of large sentencing discrepancies is unconstitutional"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the final paragraph: prosecutors resist reform 'on the grounds that a smaller gap would remove the incentive that currently allows courts to process caseloads that would otherwise overwhelm available trial capacity.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-08-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most weaken the author's argument that plea bargaining functions as coercion rather than mutual bargain?",
          "options": [
            {
              "id": "A",
              "text": "Studies show that sentencing gaps between plea and trial outcomes are consistently small and reflect only the marginal cost savings of avoiding trial, with no additional penalty for exercising trial rights."
            },
            {
              "id": "B",
              "text": "Most criminal cases are resolved through plea bargains rather than trials."
            },
            {
              "id": "C",
              "text": "Court systems face significant caseload pressures in most jurisdictions."
            },
            {
              "id": "D",
              "text": "Some exonerated individuals had originally pleaded guilty."
            },
            {
              "id": "E",
              "text": "Sentencing guidelines vary somewhat between jurisdictions."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The author's coercion argument depends specifically on the scale of the sentencing gap. Evidence that gaps are small and reflect only genuine cost savings, rather than a punitive premium, would directly undercut the claim that the practice functions as coercive pressure.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p02-09",
      "topic": "The tragedy of the commons in fisheries",
      "word_count": 350,
      "text": "Open-access fisheries provide perhaps the clearest real-world illustration of what Garrett Hardin termed the tragedy of the commons: a resource available to all, and owned by none, tends toward overexploitation because each individual fisher captures the full benefit of an additional catch while bearing only a fraction of the resulting depletion, which is instead spread across every other fisher drawing on the same stock. Rational individual behaviour, under these incentives, produces a collectively irrational outcome, a depleted or collapsed fishery that leaves everyone worse off than a more restrained harvest would have.\n\nHardin's own proposed solution, privatisation or centralised state control, has proven only partially effective in practice. Elinor Ostrom's subsequent empirical research documented numerous fisheries and other common-pool resources successfully managed not through privatisation or top-down state control but through community-based governance arrangements, in which the users of a shared resource develop and enforce their own rules for access, monitoring, and sanctioning violators, without requiring an external authority to assign or police property rights. These arrangements worked reliably only under specific conditions: clearly defined boundaries around who counts as a legitimate user, mechanisms allowing users themselves to monitor compliance at reasonably low cost, and graduated sanctions that escalate for repeat violations rather than either ignoring first offences or imposing maximal penalties immediately.\n\nThe broader implication is that the tragedy of the commons is not an inevitable outcome of shared-resource use as such, but a specific consequence of open, unmanaged access, and that the relevant policy choice is not simply between privatisation and central control, the two options Hardin himself emphasised, but among a wider range of institutional arrangements, including community self-governance, whose suitability depends heavily on the scale of the resource, the number of users, and the ease with which use can be monitored and rule-breaking sanctioned.",
      "questions": [
        {
          "question_id": "p02-09-q1",
          "type": "main_idea",
          "prompt": "The passage's overall argument is that:",
          "options": [
            {
              "id": "A",
              "text": "The tragedy of the commons is always inevitable regardless of governance arrangements."
            },
            {
              "id": "B",
              "text": "Ostrom's research shows that community self-governance can prevent the tragedy of the commons under specific conditions, expanding the range of viable solutions beyond Hardin's privatisation-versus-state-control framing."
            },
            {
              "id": "C",
              "text": "Privatisation is the only effective solution to overfishing."
            },
            {
              "id": "D",
              "text": "Fisheries can never be managed successfully under any system."
            },
            {
              "id": "E",
              "text": "State control has always proven completely effective."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This matches the passage's structure: introducing the tragedy of the commons, then using Ostrom's findings to expand the range of viable solutions beyond Hardin's original binary, as stated in the final paragraph.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-09-q2",
          "type": "inference",
          "prompt": "The passage implies that community self-governance arrangements are least likely to succeed when:",
          "options": [
            {
              "id": "A",
              "text": "User boundaries are clearly defined"
            },
            {
              "id": "B",
              "text": "Compliance monitoring is prohibitively costly and boundaries around legitimate users cannot be clearly defined"
            },
            {
              "id": "C",
              "text": "Sanctions escalate gradually for repeat violations"
            },
            {
              "id": "D",
              "text": "Users can monitor each other at low cost"
            },
            {
              "id": "E",
              "text": "The resource has already been privatised"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage lists the conditions required for success (clear boundaries, low-cost monitoring, graduated sanctions); the absence of these, particularly costly monitoring and undefined boundaries, is implied to undermine success by contrast.",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-09-q3",
          "type": "logical_structure",
          "prompt": "The reference to Elinor Ostrom's research functions in the passage to:",
          "options": [
            {
              "id": "A",
              "text": "Fully validate Hardin's original proposed solutions without qualification"
            },
            {
              "id": "B",
              "text": "Complicate Hardin's binary framing by introducing empirically successful alternative governance arrangements"
            },
            {
              "id": "C",
              "text": "Prove that all common-pool resources inevitably collapse"
            },
            {
              "id": "D",
              "text": "Argue that state control is always superior to community governance"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated critique of privatisation in general"
            }
          ],
          "correct_option_id": "B",
          "explanation": "Ostrom's research is explicitly used to broaden the range of viable solutions beyond 'the two options Hardin himself emphasised,' which is a complication of the binary framing, not a validation of it (A).",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p02-10",
      "topic": "Free will and criminal responsibility",
      "word_count": 375,
      "text": "Criminal law's justification for punishment rests heavily on the assumption that offenders could, in some meaningful sense, have acted otherwise: a defendant is held responsible because they chose, freely, to commit the offence rather than refrain, and it is this freedom that makes blame and punishment appropriate rather than merely useful. Hard determinism, the view that every event, including every human choice, is the fixed causal consequence of prior events stretching back before the agent's birth, appears to threaten this assumption directly, since if an offender's choice was itself the inevitable product of genetics, upbringing, and circumstance, the sense in which they 'could have done otherwise' becomes difficult to locate.\n\nCompatibilists respond that the relevant kind of freedom criminal law actually requires was never freedom from causation in the first place, but freedom from certain specific kinds of causation, such as coercion, compulsion, or diminished capacity, that undermine an agent's ordinary capacity for reasoned deliberation. On this view, a person who commits an offence after weighing reasons and deciding, however causally determined that weighing process may have been at the neural level, remains a fit subject for blame, because the relevant contrast criminal law actually draws is not between determined and undetermined action but between deliberated action and action produced by compulsion, delusion, or other conditions that bypass an agent's rational capacities altogether.\n\nThis compatibilist move resolves the philosophical tension without requiring courts to resolve the underlying metaphysical debate about determinism, which is fortunate, since that debate remains as unsettled among specialists as it has ever been and criminal justice systems cannot simply suspend operation pending its resolution. But it leaves a genuine residual difficulty: if the capacity for reasoned deliberation is itself unevenly distributed by factors entirely outside an individual's control, developmental trauma, cognitive impairment, or upbringing, the compatibilist standard risks quietly re-importing the very problem of moral luck it was designed to sidestep, since two offenders with identical deliberative capacities, one developed through fortunate circumstances and one through none, are treated identically despite neither having chosen the capacities that made their deliberation possible in the first place.",
      "questions": [
        {
          "question_id": "p02-10-q1",
          "type": "main_idea",
          "prompt": "The passage's overall argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Hard determinism proves that no one can ever be justly punished."
            },
            {
              "id": "B",
              "text": "Compatibilism resolves the tension between determinism and criminal responsibility by redefining the relevant kind of freedom, but this move leaves a residual problem concerning unequal deliberative capacity."
            },
            {
              "id": "C",
              "text": "Free will has been conclusively proven to exist by neuroscience."
            },
            {
              "id": "D",
              "text": "Criminal law should abandon the concept of responsibility entirely."
            },
            {
              "id": "E",
              "text": "The debate over determinism has been fully resolved by philosophers."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures both the compatibilist resolution described in the second paragraph and the 'genuine residual difficulty' identified in the third, matching the passage's overall two-part structure.",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-10-q2",
          "type": "inference",
          "prompt": "According to the compatibilist view described in the passage, criminal law's relevant distinction is best characterised as one between:",
          "options": [
            {
              "id": "A",
              "text": "Determined and undetermined actions"
            },
            {
              "id": "B",
              "text": "Deliberated action and action produced by compulsion, delusion, or conditions bypassing rational capacity"
            },
            {
              "id": "C",
              "text": "Actions that are legal and actions that are illegal"
            },
            {
              "id": "D",
              "text": "Actions performed in public and actions performed in private"
            },
            {
              "id": "E",
              "text": "Intentional and accidental physical movements only"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: the compatibilist 'contrast criminal law actually draws is not between determined and undetermined action but between deliberated action and action produced by compulsion, delusion, or other conditions.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-10-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's reference to 'moral luck' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Fully resolve the residual difficulty it introduces"
            },
            {
              "id": "B",
              "text": "Identify a way in which the compatibilist solution may re-import a problem it was designed to avoid, since deliberative capacity is itself unevenly and non-consensually distributed"
            },
            {
              "id": "C",
              "text": "Prove that compatibilism is entirely wrong and should be abandoned"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated concept with no connection to the passage's argument"
            },
            {
              "id": "E",
              "text": "Argue that determinism has finally been disproven"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph explicitly frames this as a problem the compatibilist standard 'risks quietly re-importing,' identifying a limitation rather than fully resolving it (A) or rejecting compatibilism outright (C).",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-10-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most directly strengthen the residual difficulty identified in the final paragraph?",
          "options": [
            {
              "id": "A",
              "text": "Evidence that childhood trauma measurably impairs the neural capacities underlying reasoned deliberation in adulthood, in ways the affected individual could not have chosen or prevented."
            },
            {
              "id": "B",
              "text": "Evidence that most offenders report feeling they acted freely at the time of their offence."
            },
            {
              "id": "C",
              "text": "Evidence that criminal sentencing guidelines vary across jurisdictions."
            },
            {
              "id": "D",
              "text": "Evidence that philosophers remain divided on the truth of determinism."
            },
            {
              "id": "E",
              "text": "Evidence that compatibilism is the most widely held position among philosophers."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The residual difficulty concerns deliberative capacity being unevenly distributed by factors outside an individual's control. Direct evidence that trauma non-consensually impairs this very capacity would strengthen exactly this concern.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p02-11",
      "topic": "Sovereign debt and intergenerational justice",
      "word_count": 355,
      "text": "Governments routinely borrow to fund current spending, deferring the cost of repayment, with interest, to future taxpayers who had no vote on the original decision. Critics of persistent deficit spending frame this as a straightforward intergenerational injustice: one generation enjoys the benefit of public spending while a later generation, unconsulted, bears the burden of repaying it, a transfer of resources across time that would be considered plainly unfair if attempted between two contemporaries rather than across generations.\n\nThis framing, while intuitively powerful, elides a complication that matters considerably to whether the injustice charge holds. Government borrowing that funds investment, infrastructure, education, research, capable of raising future economic output, transfers not only a liability to future generations but also an asset: a larger economy better able to bear that liability than it otherwise would have been. Whether such borrowing constitutes injustice depends on a comparison the simple framing omits entirely: not whether future generations bear a cost, which they plainly do, but whether the assets financed by that borrowing leave them better or worse off, on net, than a policy of no borrowing at all would have.\n\nBorrowing to fund current consumption rather than investment lacks this offsetting justification and fits the injustice framing far more comfortably, since it transfers a pure liability with no corresponding asset to make future generations more capable of bearing it. The practical difficulty is that the investment-versus-consumption distinction, though sharp in theory, is considerably blurrier in practice: spending on healthcare or education straddles the line, producing both immediate consumption value and longer-term productive capacity in proportions that are difficult to measure with any precision and that vary considerably depending on how the spending is structured and delivered. The intergenerational justice of any specific instance of borrowing, in other words, cannot be settled by the fact of borrowing alone, but requires a harder empirical judgement about what the money actually financed, a judgement the simple 'future generations pay for our spending' framing tends to bypass entirely.",
      "questions": [
        {
          "question_id": "p02-11-q1",
          "type": "main_idea",
          "prompt": "The passage's central claim is that:",
          "options": [
            {
              "id": "A",
              "text": "All government borrowing is unjust to future generations without exception."
            },
            {
              "id": "B",
              "text": "Whether borrowing constitutes intergenerational injustice depends on whether it finances investment that leaves future generations better able to bear the resulting liability, a distinction the simple injustice framing overlooks."
            },
            {
              "id": "C",
              "text": "Future generations never bear any cost from government borrowing."
            },
            {
              "id": "D",
              "text": "Borrowing for current consumption is always justified."
            },
            {
              "id": "E",
              "text": "The investment-versus-consumption distinction is always perfectly clear in practice."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This matches the passage's central move: complicating the simple injustice framing by introducing the investment/consumption distinction, while explicitly noting in the final paragraph that this distinction is 'blurrier in practice' — ruling out E.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-11-q2",
          "type": "logical_structure",
          "prompt": "The second paragraph relates to the first by:",
          "options": [
            {
              "id": "A",
              "text": "Fully endorsing the intergenerational injustice framing without qualification"
            },
            {
              "id": "B",
              "text": "Complicating the injustice framing by introducing an offsetting factor the simple framing omits"
            },
            {
              "id": "C",
              "text": "Rejecting the possibility that future generations bear any cost at all"
            },
            {
              "id": "D",
              "text": "Introducing an unrelated argument about tax policy"
            },
            {
              "id": "E",
              "text": "Repeating the first paragraph's claim without adding new content"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The second paragraph explicitly says the simple framing 'elides a complication', then introduces the asset-versus-liability comparison — a complication, not an endorsement (A) or rejection (C).",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-11-q3",
          "type": "inference",
          "prompt": "The passage implies that borrowing to fund current consumption spending is:",
          "options": [
            {
              "id": "A",
              "text": "Always more economically efficient than borrowing for investment"
            },
            {
              "id": "B",
              "text": "More straightforwardly consistent with the injustice framing, since it transfers a liability without a corresponding offsetting asset"
            },
            {
              "id": "C",
              "text": "Impossible to distinguish from investment spending in any case"
            },
            {
              "id": "D",
              "text": "Never actually practised by any government"
            },
            {
              "id": "E",
              "text": "The only form of borrowing that produces future economic growth"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: such borrowing 'lacks this offsetting justification and fits the injustice framing far more comfortably... a pure liability with no corresponding asset.'",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p02-12",
      "topic": "The is-ought problem in policy argument",
      "word_count": 370,
      "text": "David Hume observed that arguments moving from descriptive premises, statements about what is the case, to normative conclusions, statements about what ought to be done, commit a logical error unless a normative premise is introduced somewhere along the way to bridge the gap; no purely factual description of the world, however detailed, entails by itself any conclusion about what anyone should do. Policy debate routinely violates this structure, often without noticing, by presenting empirical findings as though they settle normative questions on their own.\n\nConsider the common move in economic policy debate: a study demonstrates that a particular tax produces a specific behavioural response, reduced investment, altered consumption patterns, and this finding is then presented as though it straightforwardly settles whether the tax is a good policy. It does no such thing without an additional, unstated premise, some claim about which outcomes are desirable, how much weight investment levels deserve relative to other goals such as revenue or equity, that the empirical study itself cannot supply. Two people can agree entirely on the study's findings, disputing none of its empirical claims, while reaching opposite conclusions about the policy, because their disagreement lies entirely in the normative premise each brings to the data rather than in the data itself.\n\nThis is not an argument for ignoring empirical evidence in policy debate, a conclusion some overzealous readers of Hume have drawn and which Hume himself did not endorse; evidence remains essential for determining which normative goals a given policy will actually achieve and at what cost, and normative commitments held in ignorance of relevant facts are simply irresponsible. The more precise lesson is that empirical and normative disagreements are logically distinct and should be identified as such during debate, since conflating them allows participants to talk past each other indefinitely, each mistaking the other's normative disagreement for an empirical error to be corrected with more data, when no quantity of additional data could ever resolve a dispute that was never actually about the facts in the first place.",
      "questions": [
        {
          "question_id": "p02-12-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Empirical evidence is irrelevant to policy debate and should be ignored."
            },
            {
              "id": "B",
              "text": "Empirical and normative disagreements in policy debate are logically distinct, and conflating them causes participants to mistake normative disputes for empirical ones that more data could resolve."
            },
            {
              "id": "C",
              "text": "All policy disagreements are actually empirical disagreements in disguise."
            },
            {
              "id": "D",
              "text": "David Hume believed evidence should never inform policy decisions."
            },
            {
              "id": "E",
              "text": "There is no such thing as a normative claim in policy debate."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit closing lesson, distinguishing it from the overzealous misreading of Hume it explicitly disavows (ruling out A and D).",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-12-q2",
          "type": "assumption",
          "prompt": "The common policy-debate move described in the second paragraph implicitly assumes:",
          "options": [
            {
              "id": "A",
              "text": "That empirical studies are always methodologically flawed"
            },
            {
              "id": "B",
              "text": "That an empirical finding about behavioural response can, by itself, settle a normative question about whether a policy is good, without any additional normative premise"
            },
            {
              "id": "C",
              "text": "That taxation has no measurable effect on behaviour"
            },
            {
              "id": "D",
              "text": "That all policy disputes are ultimately about definitions of words"
            },
            {
              "id": "E",
              "text": "That normative premises are unnecessary in any argument"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This identifies the precise logical gap the passage attributes to the common move, matching Hume's is-ought distinction as applied to the tax policy example.",
          "difficulty": "hard"
        },
        {
          "question_id": "p02-12-q3",
          "type": "logical_structure",
          "prompt": "The third paragraph's opening clause, 'This is not an argument for ignoring empirical evidence,' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Reverse the entire argument made in the previous paragraphs"
            },
            {
              "id": "B",
              "text": "Pre-empt a misreading of the is-ought distinction as implying evidence is irrelevant to policy"
            },
            {
              "id": "C",
              "text": "Introduce an unrelated argument about scientific methodology"
            },
            {
              "id": "D",
              "text": "Concede that Hume's distinction is mistaken"
            },
            {
              "id": "E",
              "text": "Argue that normative premises should never be examined critically"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This functions as a clarifying pre-emption, similar to the move seen elsewhere in this paper, guarding against an overcorrection some readers might draw from the argument.",
          "difficulty": "medium"
        },
        {
          "question_id": "p02-12-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the final paragraph, 'talk past each other' most nearly means:",
          "options": [
            {
              "id": "A",
              "text": "Agree completely on every point of substance"
            },
            {
              "id": "B",
              "text": "Fail to genuinely engage with each other's actual point of disagreement"
            },
            {
              "id": "C",
              "text": "Speak in a foreign language unfamiliar to both parties"
            },
            {
              "id": "D",
              "text": "Refuse to speak to each other under any circumstances"
            },
            {
              "id": "E",
              "text": "Reach a swift and mutually satisfying resolution"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The phrase describes participants who mistake the other's normative disagreement for an empirical one, meaning they are not actually addressing the real point of contention — matching B.",
          "difficulty": "medium"
        }
      ]
    }
  ]
},
{
  "paper_id": "praxis-p03",
  "title": "Praxis LNAT Practice Paper 3",
  "section": "A",
  "time_limit_minutes": 95,
  "total_questions": 42,
  "difficulty_band": "harder than Paper 1",
  "passages": [
    {
      "passage_id": "p03-01",
      "topic": "Rule of law versus rule by law",
      "word_count": 360,
      "text": "The phrase 'rule of law' is invoked so frequently across such different political contexts that it risks losing analytical content, since authoritarian governments routinely claim to govern lawfully, in the narrow sense that their actions are backed by duly enacted statutes, while liberal theorists insist that such governments manifestly fail to honour the rule of law in any meaningful sense. This apparent contradiction resolves once a distinction, often collapsed in casual usage, is drawn between rule of law and mere rule by law.\n\nRule by law describes any system in which state power is exercised through formally valid legal instruments, however those instruments came to exist and whatever content they contain; a legislature that criminalises dissent through a properly enacted statute satisfies rule by law, since the state's action has legal form. Rule of law, by contrast, is usually understood to require substantive constraints on what law can validly contain and how it can be applied: prospectivity, so that law does not punish conduct retroactively; generality, so that law applies to categories of persons rather than targeting named individuals; and independent adjudication, so that the state's own compliance with its laws can be tested by a body not controlled by the state itself. A government satisfying rule by law while violating these substantive constraints, criminalising dissent through legislation that targets a specific group, or removing judicial independence so that legal compliance can never be genuinely tested, has not honoured the rule of law merely by acting through statute.\n\nThe distinction matters practically, not merely terminologically, because governments seeking to erode legal constraints on their power rarely do so by abandoning legality altogether; they instead capture the mechanisms, legislatures, courts, that determine what counts as law, and then govern entirely 'lawfully' by the resulting rules. Recognising this pattern requires attention to the substantive features that make law constraining in the first place, rather than to the formal fact of a rule's legal validity, since the latter can be, and historically often has been, engineered to legitimise precisely the outcomes the rule of law is meant to prevent.",
      "questions": [
        {
          "question_id": "p03-01-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Any government that governs through formally enacted statutes automatically satisfies the rule of law."
            },
            {
              "id": "B",
              "text": "The rule of law requires substantive constraints such as prospectivity, generality, and independent adjudication, and governments can satisfy mere rule by law while systematically violating these constraints."
            },
            {
              "id": "C",
              "text": "The rule of law and rule by law are identical concepts with no meaningful distinction."
            },
            {
              "id": "D",
              "text": "Legislatures should never be permitted to enact criminal statutes."
            },
            {
              "id": "E",
              "text": "Judicial independence is irrelevant to whether a government honours the rule of law."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's core distinction, developed across the second paragraph and applied practically in the third. It directly rules out A and C, which collapse the distinction the passage is built around.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-01-q2",
          "type": "inference",
          "prompt": "The passage implies that a government seeking to erode legal constraints on its power would most likely:",
          "options": [
            {
              "id": "A",
              "text": "Abandon legality altogether and govern through open, undisguised force"
            },
            {
              "id": "B",
              "text": "Capture the institutions that determine what counts as law, then govern entirely within the resulting rules"
            },
            {
              "id": "C",
              "text": "Publicly announce its intention to violate the rule of law"
            },
            {
              "id": "D",
              "text": "Immediately dissolve its own legislature"
            },
            {
              "id": "E",
              "text": "Refuse to enact any legislation whatsoever"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The final paragraph states this directly: such governments 'rarely do so by abandoning legality altogether; they instead capture the mechanisms... that determine what counts as law.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-01-q3",
          "type": "logical_structure",
          "prompt": "The example of a legislature 'criminalising dissent through a properly enacted statute' is used in the second paragraph to:",
          "options": [
            {
              "id": "A",
              "text": "Illustrate that rule by law can be satisfied even when substantive rule-of-law values are violated"
            },
            {
              "id": "B",
              "text": "Prove that all legislatures inevitably criminalise dissent"
            },
            {
              "id": "C",
              "text": "Argue that statutes should never be used to regulate political speech"
            },
            {
              "id": "D",
              "text": "Show that rule of law and rule by law always coincide"
            },
            {
              "id": "E",
              "text": "Undermine the passage's central distinction"
            }
          ],
          "correct_option_id": "A",
          "explanation": "The example is explicitly used to show formal legal validity ('the state's action has legal form') without satisfying rule-of-law's substantive requirements — directly illustrating the distinction, not undermining it (E).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p03-02",
      "topic": "Autonomous vehicles and the trolley problem",
      "word_count": 368,
      "text": "The trolley problem, a philosophical thought experiment in which a bystander must decide whether to divert a runaway trolley onto a track where it will kill one person instead of five, has become an unlikely fixture of debate over autonomous vehicle design, since a self-driving car facing an unavoidable collision must, in some sense, be programmed with a decision procedure for cases in which harm to some party is unavoidable and only its distribution can be influenced.\n\nCritics of importing the trolley problem into engineering practice argue that the analogy is fundamentally misleading, for reasons that go beyond the observation that such scenarios are statistically rare. The classical trolley problem presents an agent with perfect information, certain knowledge that diverting the trolley will save five lives at the cost of one, whereas a real autonomous vehicle facing a sudden hazard operates under substantial uncertainty about the likely outcomes of any available action, including uncertainty about whether swerving will actually avoid the greater harm or simply create a different, unpredictable one. Designing a vehicle to execute confident trolley-style trade-offs in conditions of genuine uncertainty may produce worse outcomes on average than a simpler rule, prioritise braking and stay within the current lane wherever physically possible, that does not attempt to calculate comparative harm at all in the available fraction of a second.\n\nA further disanalogy concerns responsibility and foreseeability. The trolley problem is typically posed as a one-off dilemma facing an individual decision-maker, but an autonomous vehicle's crash behaviour is a policy decision made in advance by engineers and codified into every unit of a mass-produced product, applied to millions of situations whose specific details cannot be anticipated individually. This shifts the relevant ethical question away from 'what would a reasonable person do in this specific moment' and toward a genuinely different one: what general policy, applied blindly across an enormous range of future unknown scenarios, minimises expected harm, a question closer to the design of a public safety regulation than to an individual moral dilemma, and one for which the vivid, tightly specified trolley scenario may be a poor guide precisely because it was never designed to answer questions of this different kind.",
      "questions": [
        {
          "question_id": "p03-02-q1",
          "type": "main_idea",
          "prompt": "The passage's overall argument is that:",
          "options": [
            {
              "id": "A",
              "text": "The trolley problem provides a perfect and complete framework for autonomous vehicle design."
            },
            {
              "id": "B",
              "text": "The trolley problem is disanalogous to real autonomous vehicle decision-making in ways that matter, since real crashes involve uncertainty and advance policy design rather than individual, information-certain dilemmas."
            },
            {
              "id": "C",
              "text": "Autonomous vehicles should never be programmed with any collision-response behaviour."
            },
            {
              "id": "D",
              "text": "Trolley-problem-style dilemmas occur constantly in real driving conditions."
            },
            {
              "id": "E",
              "text": "Engineers should ignore all ethical considerations when designing vehicles."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures both disanalogies raised, uncertainty (second paragraph) and the shift from individual dilemma to advance policy design (third paragraph), matching the passage's overall critique.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-02-q2",
          "type": "inference",
          "prompt": "The passage suggests that a simple rule such as 'prioritise braking and stay within the current lane' might outperform trolley-style calculation because:",
          "options": [
            {
              "id": "A",
              "text": "Braking is always technically impossible in an emergency"
            },
            {
              "id": "B",
              "text": "Real driving hazards involve substantial uncertainty about outcomes, unlike the trolley problem's assumption of perfect information"
            },
            {
              "id": "C",
              "text": "The trolley problem requires diverting toward the larger group"
            },
            {
              "id": "D",
              "text": "Autonomous vehicles cannot be programmed with any rules at all"
            },
            {
              "id": "E",
              "text": "Simple rules are always ethically superior to complex ones in every context"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is explained directly: attempting confident trade-offs 'in conditions of genuine uncertainty may produce worse outcomes on average' than a simpler rule that avoids calculating comparative harm under uncertain information.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-02-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's discussion of 'responsibility and foreseeability' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Introduce a second, distinct disanalogy beyond the uncertainty point made in the second paragraph"
            },
            {
              "id": "B",
              "text": "Repeat the uncertainty argument from the second paragraph in different words"
            },
            {
              "id": "C",
              "text": "Concede that the trolley problem is, after all, a good model for vehicle design"
            },
            {
              "id": "D",
              "text": "Argue that individual moral dilemmas are irrelevant to any ethical question"
            },
            {
              "id": "E",
              "text": "Undermine the passage's overall argument"
            }
          ],
          "correct_option_id": "A",
          "explanation": "The paragraph opens with 'a further disanalogy', explicitly signalling a second, distinct point about advance policy design versus one-off individual dilemmas, not a repetition (B) or concession (C).",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-02-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the final paragraph, 'codified' most nearly means:",
          "options": [
            {
              "id": "A",
              "text": "Encrypted for security purposes"
            },
            {
              "id": "B",
              "text": "Formally fixed and built into a system in advance"
            },
            {
              "id": "C",
              "text": "Debated openly among engineers without resolution"
            },
            {
              "id": "D",
              "text": "Removed entirely from a product's design"
            },
            {
              "id": "E",
              "text": "Tested only after a product is released"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage describes crash behaviour as 'a policy decision made in advance by engineers and codified into every unit', meaning fixed and built into the design in advance, matching B.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p03-03",
      "topic": "Patent law and pharmaceutical innovation",
      "word_count": 372,
      "text": "Patent protection grants pharmaceutical developers a temporary legal monopoly over a new drug, allowing them to charge prices well above manufacturing cost during the patent term, on the theory that the resulting profits are necessary to recoup the enormous cost of research, clinical trials, and regulatory approval, and to fund the next generation of drug development. Critics point out the resulting tension bluntly: the very pricing power that incentivises innovation also places life-saving treatments beyond the reach of many patients who need them, an outcome that seems difficult to reconcile with medicine's traditional ethical commitments.\n\nDefenders of the current system do not typically deny this tension; they argue instead that the alternative, weaker patent protection or compulsory licensing that allows generic competition immediately, would reduce the incentive to develop new drugs in the first place, producing a world with more affordable access to existing treatments but a substantially smaller pipeline of treatments yet to be discovered, a trade-off that is difficult to evaluate because it requires comparing a known, visible cost, patients priced out of existing drugs, against a diffuse, counterfactual cost, treatments that would never have been developed and whose absence produces no identifiable victims to point to.\n\nThis asymmetry in visibility between the two costs matters considerably for how the debate is conducted, since a visible harm to identifiable patients generates far more immediate political and moral pressure than a diffuse, uncertain harm to unidentifiable future patients who never existed to advocate for the treatments that would have helped them. This does not mean the visible cost is necessarily smaller, only that debate structured around visibility rather than magnitude will systematically undercount the counterfactual harm of weakened innovation incentives, whatever its true size turns out to be. Proposed intermediate approaches, differential pricing across countries by ability to pay, publicly funded prizes for specific drug development milestones as an alternative to patent-based reward, attempt to preserve innovation incentives while reducing the visible access harm, though each carries its own implementation difficulties that have so far prevented any of them from fully displacing the patent-based model.",
      "questions": [
        {
          "question_id": "p03-03-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Patent protection for pharmaceuticals produces no meaningful trade-off between access and innovation."
            },
            {
              "id": "B",
              "text": "The debate over pharmaceutical patents is structurally skewed by an asymmetry in visibility between the identifiable cost of restricted access and the diffuse, counterfactual cost of reduced innovation."
            },
            {
              "id": "C",
              "text": "Compulsory licensing should be adopted immediately in all countries."
            },
            {
              "id": "D",
              "text": "Pharmaceutical companies never face any genuine trade-offs in pricing decisions."
            },
            {
              "id": "E",
              "text": "Publicly funded prizes have already fully replaced patent-based reward for drug development."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's central analytical claim, developed in the third paragraph, about how visibility asymmetry distorts debate regardless of the true relative magnitude of each cost.",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-03-q2",
          "type": "logical_structure",
          "prompt": "The comparison between 'a known, visible cost' and 'a diffuse, counterfactual cost' in the second paragraph serves to:",
          "options": [
            {
              "id": "A",
              "text": "Prove that the visible cost is always larger in magnitude"
            },
            {
              "id": "B",
              "text": "Explain why the trade-off between access and innovation is difficult to evaluate, since the two costs differ in kind, not just size"
            },
            {
              "id": "C",
              "text": "Argue that counterfactual costs should be ignored in policy analysis"
            },
            {
              "id": "D",
              "text": "Show that patent protection produces no real costs of any kind"
            },
            {
              "id": "E",
              "text": "Undermine the defenders' argument entirely"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The comparison is used to explain evaluative difficulty, not to assert one side is larger (A) — the very next paragraph explicitly says visibility 'does not mean the visible cost is necessarily smaller.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-03-q3",
          "type": "inference",
          "prompt": "The passage implies that debate over pharmaceutical patents structured primarily around visible harms will most likely:",
          "options": [
            {
              "id": "A",
              "text": "Accurately reflect the true relative magnitude of both costs in every case"
            },
            {
              "id": "B",
              "text": "Systematically undercount the counterfactual harm of weakened innovation incentives, regardless of that harm's true size"
            },
            {
              "id": "C",
              "text": "Eliminate any need to consider innovation incentives"
            },
            {
              "id": "D",
              "text": "Always favour pharmaceutical companies over patients"
            },
            {
              "id": "E",
              "text": "Have no effect on which policies are ultimately adopted"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the third paragraph: debate 'structured around visibility rather than magnitude will systematically undercount the counterfactual harm... whatever its true size turns out to be.'",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p03-04",
      "topic": "Epistemic bubbles and expert testimony",
      "word_count": 358,
      "text": "Democratic decision-making increasingly requires ordinary citizens to form views on questions, the safety of a vaccine, the causes of a financial crisis, the likely path of a pandemic, that they lack the technical training to evaluate directly, leaving them dependent on expert testimony mediated through institutions, journalists, and now social platforms whose incentives do not always align with accurate transmission of expert consensus. This dependency creates a specific vulnerability distinct from ordinary misinformation: an epistemic bubble, in which a person's information sources, however numerous, systematically exclude perspectives that would challenge their existing beliefs, not through deliberate deception but through the ordinary operation of algorithmic curation and voluntary source selection.\n\nThe bubble is epistemically dangerous in a way that mere disagreement is not, because a person inside a well-constructed bubble can display all the surface markers of careful reasoning, citing sources, weighing evidence, updating views in response to new information, while every source available to them has already been filtered for consistency with a particular conclusion. The person is not irrational in any straightforward sense; they are reasoning correctly from a systematically unrepresentative sample of the available evidence, which is a different and in some ways more resistant failure mode than simple ignorance, since ignorance can be corrected by exposure to new information, whereas a bubble often reinterprets contrary information, when it does penetrate, as further evidence of the very conspiracy or bias the bubble already presumes.\n\nThe practical difficulty this creates for expert institutions is considerable, because the standard remedy for public misunderstanding, provide clearer, more accessible information, presupposes that the information will actually reach the people who need it in a form they will treat as credible, an assumption a genuine epistemic bubble specifically defeats. Rebuilding trust in cases where a bubble has already formed appears to require something closer to relationship-based persuasion through trusted intermediaries within the affected community than to the simple broadcast of clearer facts, a far slower and more resource-intensive undertaking than the traditional public-information model assumes is sufficient.",
      "questions": [
        {
          "question_id": "p03-04-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "People inside epistemic bubbles are simply irrational and beyond persuasion."
            },
            {
              "id": "B",
              "text": "Epistemic bubbles produce a distinctive and resistant failure mode, since a person can reason correctly from a systematically unrepresentative sample of evidence, requiring remedies beyond simply providing clearer information."
            },
            {
              "id": "C",
              "text": "Expert institutions have no role to play in public understanding."
            },
            {
              "id": "D",
              "text": "Providing clearer, more accessible information always successfully corrects public misunderstanding."
            },
            {
              "id": "E",
              "text": "Algorithmic curation has no effect on what information people encounter."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures the passage's key distinction between ignorance and bubble-based reasoning, and its conclusion about what remedies are actually required, directly ruling out D, which the final paragraph explicitly contradicts.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-04-q2",
          "type": "inference",
          "prompt": "The passage implies that a person inside an epistemic bubble who encounters contrary information will most likely:",
          "options": [
            {
              "id": "A",
              "text": "Immediately and rationally update their beliefs in light of the new evidence"
            },
            {
              "id": "B",
              "text": "Reinterpret the contrary information as further evidence of the bias or conspiracy the bubble already presumes"
            },
            {
              "id": "C",
              "text": "Be completely unable to process any new information whatsoever"
            },
            {
              "id": "D",
              "text": "Actively seek out more contrary information as a result"
            },
            {
              "id": "E",
              "text": "Recognise the bubble immediately and leave it"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: bubbles 'often reinterpret contrary information, when it does penetrate, as further evidence of the very conspiracy or bias the bubble already presumes.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-04-q3",
          "type": "logical_structure",
          "prompt": "The distinction drawn between 'ignorance' and being inside a 'bubble' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that the two failure modes require identical remedies"
            },
            {
              "id": "B",
              "text": "Explain why bubbles are a more resistant problem, since ignorance can be corrected by exposure to new information while bubbles resist such correction"
            },
            {
              "id": "C",
              "text": "Argue that ignorance is a more serious problem than bubbles"
            },
            {
              "id": "D",
              "text": "Prove that expert testimony is never reliable"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated distinction with no bearing on the passage's argument"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explicitly frames this as 'a different and in some ways more resistant failure mode', directly explaining why bubbles are harder to correct than mere ignorance — not identical (A) or reversed (C).",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-04-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most weaken the passage's claim that clearer, more accessible information alone is unlikely to correct a genuine epistemic bubble?",
          "options": [
            {
              "id": "A",
              "text": "A study finds that individuals inside well-documented epistemic bubbles substantially and durably changed their views after being shown clearer factual information alone, with no trusted intermediary involved."
            },
            {
              "id": "B",
              "text": "A study finds that algorithmic curation increases the amount of time users spend on a platform."
            },
            {
              "id": "C",
              "text": "A study finds that trusted community intermediaries are effective at building trust over time."
            },
            {
              "id": "D",
              "text": "A study finds that some people never encounter contrary information at all."
            },
            {
              "id": "E",
              "text": "A study finds that expert consensus exists on most scientific questions."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The passage's claim is that clearer information alone is insufficient once a bubble has formed, and that relationship-based persuasion is required instead. Direct evidence that clearer information alone succeeded would undercut this specific claim.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p03-05",
      "topic": "The precautionary principle in regulation",
      "word_count": 365,
      "text": "The precautionary principle holds, in its strongest form, that regulators should restrict or prohibit a new technology or practice whenever there is a plausible risk of serious harm, even in the absence of scientific consensus establishing that the harm will actually occur, on the reasoning that requiring proof of harm before acting places the burden of uncertainty on the public rather than on those introducing the risk. This has considerable intuitive appeal in cases where potential harms are severe and irreversible, since waiting for definitive proof before acting may mean acting only after the damage is already done and impossible to undo.\n\nThe principle's critics argue that, applied consistently rather than selectively, it proves paralysing rather than merely cautious, because virtually every technological or regulatory choice, including the choice to prohibit a new technology, carries some risk of serious harm that cannot be ruled out with certainty in advance. Prohibiting a new pesticide carries a precautionary justification, but so does permitting the crop losses and food-price increases that a less effective older pesticide might cause; approving a new vaccine carries the plausible risk of rare adverse effects, but so does the continued spread of the disease the vaccine would have prevented. A principle that counsels caution against any plausible risk, without a mechanism for comparing the magnitude and probability of risks on both sides of a given choice, does not actually resolve which option precaution favours, since both action and inaction typically carry some non-zero risk of serious harm.\n\nA more defensible, comparative version of the principle survives this objection by requiring regulators to weigh the plausible risks of acting against the plausible risks of not acting, rather than treating the mere existence of some risk on one side as sufficient grounds for prohibition regardless of the risks on the other. This version demands more from regulators, an actual comparative risk assessment rather than a simple veto triggered by any identified hazard, but it is considerably more coherent than the strong version, and it is, in practice, closer to what most functioning regulatory regimes actually attempt, whatever rhetorical appeals to precaution their public justifications invoke.",
      "questions": [
        {
          "question_id": "p03-05-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "The precautionary principle should be abandoned entirely and replaced with no risk-based reasoning at all."
            },
            {
              "id": "B",
              "text": "The strong version of the precautionary principle becomes incoherent when applied consistently, since both action and inaction carry risk, and a comparative version that weighs risks on both sides is more defensible."
            },
            {
              "id": "C",
              "text": "All new technologies should be prohibited unless proven completely safe."
            },
            {
              "id": "D",
              "text": "Regulators never actually consider risk when making decisions."
            },
            {
              "id": "E",
              "text": "The precautionary principle has never been applied by any regulatory body."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This matches the passage's structure precisely: critiquing the strong version's incoherence, then endorsing the comparative version as more defensible, as stated in the final paragraph.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-05-q2",
          "type": "logical_structure",
          "prompt": "The examples of pesticide regulation and vaccine approval in the second paragraph are used to:",
          "options": [
            {
              "id": "A",
              "text": "Show that the strong precautionary principle gives no clear guidance, since both action and inaction in each case carry some plausible risk of serious harm"
            },
            {
              "id": "B",
              "text": "Prove that all pesticides and vaccines are safe"
            },
            {
              "id": "C",
              "text": "Argue that regulators should always choose the option with any identifiable risk"
            },
            {
              "id": "D",
              "text": "Demonstrate that food-price increases are more harmful than pesticide use"
            },
            {
              "id": "E",
              "text": "Support the strong version of the precautionary principle"
            }
          ],
          "correct_option_id": "A",
          "explanation": "Both examples are explicitly used to show that 'a principle that counsels caution against any plausible risk... does not actually resolve which option precaution favours', undermining rather than supporting the strong version (E).",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-05-q3",
          "type": "inference",
          "prompt": "The passage implies that the comparative version of the precautionary principle differs from the strong version primarily in that it:",
          "options": [
            {
              "id": "A",
              "text": "Ignores risk entirely when making regulatory decisions"
            },
            {
              "id": "B",
              "text": "Requires an actual assessment comparing the risks of acting against the risks of not acting, rather than treating any identified risk as sufficient grounds for prohibition"
            },
            {
              "id": "C",
              "text": "Applies only to pesticides and never to vaccines"
            },
            {
              "id": "D",
              "text": "Prohibits all new technologies without exception"
            },
            {
              "id": "E",
              "text": "Has never been adopted by any functioning regulatory regime"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the final paragraph, which also notes this version is 'closer to what most functioning regulatory regimes actually attempt' — ruling out E.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p03-06",
      "topic": "Just war theory and pre-emptive strikes",
      "word_count": 375,
      "text": "Traditional just war theory permits military force in self-defence against an actual or imminent attack but has historically treated preventive war, striking an adversary who poses no imminent threat but might become dangerous in the future, as a much harder case to justify, verging on unprovoked aggression dressed in defensive language. The distinction between pre-emption, striking an adversary whose attack is imminent and unavoidable by other means, and prevention, striking an adversary whose capability might one day be used aggressively, has traditionally carried significant moral weight, with the former treated as a permissible extension of self-defence and the latter treated with far greater suspicion.\n\nAdvances in weapons technology complicate this traditional distinction considerably. Where an adversary's attack, once launched, would be nearly instantaneous and effectively undefendable, cyber-attacks on critical infrastructure or extremely fast-strike weapons systems, the traditional imminence requirement, waiting until an attack is clearly and immediately forthcoming before acting defensively, may leave a defender with no meaningful opportunity to act at all once the requirement is finally satisfied, since by the time imminence is unambiguous, the capacity to respond may already have been destroyed. This creates pressure to loosen the imminence standard for especially fast or difficult-to-detect threats, on the reasoning that a standard developed for slower-moving, more observable threats such as massing armies does not translate straightforwardly to threats whose warning time may be measured in seconds.\n\nThe difficulty with loosening the imminence standard is that it is precisely the feature doing the moral work in distinguishing legitimate self-defence from aggression disguised as self-defence: an actor sincerely convinced that a rival's growing capability constitutes a future threat, and a purely aggressive actor seeking a moral pretext, will produce nearly identical justificatory language, since both can point to concerning developments and argue that waiting is too dangerous. Any standard loose enough to accommodate genuine responses to fast, undetectable threats is, by the same structural logic, loose enough to accommodate bad-faith invocations of the same reasoning by actors with no genuine defensive justification at all, and no proposed reformulation of the imminence requirement has yet resolved this underlying tension between accommodating genuinely new threat profiles and preserving a meaningful constraint on when force may be used.",
      "questions": [
        {
          "question_id": "p03-06-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Preventive war has always been fully accepted as morally equivalent to self-defence."
            },
            {
              "id": "B",
              "text": "New weapons technology creates pressure to loosen the traditional imminence standard, but doing so risks eroding the distinction between genuine self-defence and aggression disguised as self-defence, a tension no proposal has yet resolved."
            },
            {
              "id": "C",
              "text": "All military force is morally impermissible regardless of circumstance."
            },
            {
              "id": "D",
              "text": "Cyber-attacks pose no meaningful threat to critical infrastructure."
            },
            {
              "id": "E",
              "text": "The imminence standard has never been relevant to just war theory."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion in the final paragraph, capturing both the pressure to change the standard and the risk this creates, without resolving it fully — matching the stated 'underlying tension.'",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-06-q2",
          "type": "inference",
          "prompt": "The passage implies that the traditional imminence requirement is especially difficult to apply to threats that are:",
          "options": [
            {
              "id": "A",
              "text": "Slow-moving and easily observable, such as massing armies"
            },
            {
              "id": "B",
              "text": "Extremely fast or difficult to detect, where waiting for unambiguous imminence may leave no opportunity to respond"
            },
            {
              "id": "C",
              "text": "Entirely hypothetical and never actually developed"
            },
            {
              "id": "D",
              "text": "Announced publicly well in advance by the adversary"
            },
            {
              "id": "E",
              "text": "Limited exclusively to conventional ground forces"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the second paragraph, contrasting fast or hard-to-detect threats with the 'slower-moving, more observable threats such as massing armies' the traditional standard was designed for.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-06-q3",
          "type": "assumption",
          "prompt": "The argument in the final paragraph, that loosening the imminence standard risks enabling bad-faith aggression, depends on which assumption?",
          "options": [
            {
              "id": "A",
              "text": "That all military actors act in good faith at all times"
            },
            {
              "id": "B",
              "text": "That genuine defensive justifications and bad-faith pretextual justifications can be difficult to distinguish using the same loosened language and evidence"
            },
            {
              "id": "C",
              "text": "That fast-strike weapons technology does not actually exist"
            },
            {
              "id": "D",
              "text": "That the traditional imminence standard has never been violated"
            },
            {
              "id": "E",
              "text": "That preventive war has always been considered fully legitimate"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph's argument explicitly rests on the claim that sincere and bad-faith actors 'will produce nearly identical justificatory language,' which is the assumption underpinning the risk it identifies.",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-06-q4",
          "type": "best_summary",
          "prompt": "Which is the best one-sentence summary of the passage as a whole?",
          "options": [
            {
              "id": "A",
              "text": "Preventive war has always been fully justified under just war theory."
            },
            {
              "id": "B",
              "text": "Fast, hard-to-detect threats pressure a loosening of the imminence standard, but any such loosening risks eroding the distinction between genuine self-defence and pretextual aggression."
            },
            {
              "id": "C",
              "text": "Cyber-attacks and fast-strike weapons pose no meaningful challenge to traditional just war theory."
            },
            {
              "id": "D",
              "text": "Just war theory has never addressed the concept of imminence."
            },
            {
              "id": "E",
              "text": "All military actors reason in good faith when invoking self-defence."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the most accurate compression of the passage's full argument, capturing both the pressure for change and the risk that change creates, without overstating either side.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p03-07",
      "topic": "Gerrymandering and electoral fairness",
      "word_count": 355,
      "text": "Partisan gerrymandering, the deliberate drawing of electoral district boundaries to advantage one political party, is widely condemned as undemocratic, yet courts in several jurisdictions have struggled to develop a workable legal standard for identifying when districting has crossed from ordinary political consideration into impermissible manipulation, in part because some degree of political awareness in districting is unavoidable and even desirable, since district lines must account for existing communities, and communities are not politically neutral geographic units.\n\nThe core difficulty is that gerrymandering is a matter of degree rather than kind, and the most sophisticated modern techniques, using detailed voter data and mapping software to pack opposing voters into a small number of districts they win overwhelmingly while spreading remaining opposing voters thinly across many districts they narrowly lose, produce outcomes that are statistically identifiable as extreme but resist a clean legal definition of exactly how much partisan advantage is too much. A map drawn with zero partisan intent is essentially impossible to produce or even define, since any set of boundaries produces some partisan distribution of outcomes, and demanding perfect neutrality as the legal standard would require courts to specify a counterfactual 'neutral' map that does not actually exist in any objective sense, only a range of maps reflecting different, contestable neutrality criteria.\n\nProposed remedies that avoid this definitional problem tend to shift the question from 'how much partisan intent is too much' to 'who draws the map and through what process', reasoning that a process insulated from the direct control of the party that stands to benefit, an independent redistricting commission, algorithmically generated maps subject to specified neutral criteria, is likely to produce fairer outcomes even without a court ever needing to define precisely how much partisan skew constitutes a violation. This procedural approach sidesteps rather than solves the underlying definitional puzzle, but it has proven considerably more tractable in practice than attempts to litigate substantive fairness case by case against a standard nobody has yet been able to state with sufficient precision.",
      "questions": [
        {
          "question_id": "p03-07-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "A perfectly neutral electoral map is easy to define and courts have simply failed to require it."
            },
            {
              "id": "B",
              "text": "Gerrymandering resists a clean legal definition because it is a matter of degree, and procedural remedies that change who draws maps have proven more tractable than attempts to define substantive fairness directly."
            },
            {
              "id": "C",
              "text": "All forms of political awareness in districting should be eliminated entirely."
            },
            {
              "id": "D",
              "text": "Independent redistricting commissions have fully solved the problem of gerrymandering everywhere they have been adopted."
            },
            {
              "id": "E",
              "text": "Courts have never attempted to address partisan gerrymandering."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This matches the passage's overall structure: identifying the definitional problem, then presenting the procedural shift as a practical, if incomplete, response, as stated in the final paragraph.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-07-q2",
          "type": "inference",
          "prompt": "The passage implies that demanding a legally required 'neutral' map as the standard for acceptable districting would face which specific problem?",
          "options": [
            {
              "id": "A",
              "text": "It would be trivially easy to define a single objectively neutral map"
            },
            {
              "id": "B",
              "text": "There is no single objective neutral map, only a range of maps reflecting different, contestable neutrality criteria"
            },
            {
              "id": "C",
              "text": "All existing maps are already perfectly neutral"
            },
            {
              "id": "D",
              "text": "Courts have unlimited resources to litigate every districting decision"
            },
            {
              "id": "E",
              "text": "Voter data is entirely unavailable to mapmakers"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: a 'neutral' map 'does not actually exist in any objective sense, only a range of maps reflecting different, contestable neutrality criteria.'",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-07-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's description of procedural remedies as 'sidestepping rather than solving' the definitional puzzle functions to:",
          "options": [
            {
              "id": "A",
              "text": "Claim these remedies are worthless and should not be pursued"
            },
            {
              "id": "B",
              "text": "Acknowledge a limitation of the proposed remedy while still endorsing its practical value"
            },
            {
              "id": "C",
              "text": "Argue that the definitional puzzle has, in fact, already been fully solved"
            },
            {
              "id": "D",
              "text": "Introduce an entirely new and unrelated argument about voter data privacy"
            },
            {
              "id": "E",
              "text": "Undermine every point made earlier in the passage"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The sentence pairs this acknowledgement with the claim that the approach 'has proven considerably more tractable in practice', combining honest limitation with practical endorsement, not outright dismissal (A).",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p03-08",
      "topic": "The veil of ignorance and tax policy",
      "word_count": 362,
      "text": "John Rawls proposed that principles of justice should be selected from behind a 'veil of ignorance', a hypothetical position in which a person choosing the basic rules of a society does not know what position, rich or poor, talented or untalented, they will occupy within it once the veil is lifted. Applied to tax policy, the thought experiment suggests a useful diagnostic: a tax system's fairness can be tested by asking whether a rational person, uncertain whether they would end up a high earner subject to its top rates or a low earner benefiting from its transfers, would endorse the system in advance.\n\nCritics of applying the veil of ignorance directly to concrete policy questions like tax rates argue that Rawls's device was designed to generate very general principles of justice, not to settle specific numerical parameters, and that the thought experiment underdetermines exactly how progressive a just tax system must be, since a rational, risk-averse person behind the veil might reasonably favour heavy redistribution to protect against the worst possible outcome, while an equally rational person with a greater tolerance for risk might favour a flatter system offering higher potential reward in exchange for less insurance against poor outcomes, and nothing internal to the veil of ignorance thought experiment adjudicates between these different but equally rational risk postures.\n\nRawls's own answer, the difference principle, that inequalities are justified only if they improve the position of the least advantaged, was intended to resolve this indeterminacy by assuming that a rational chooser behind the veil would be maximally risk-averse, prioritising protection against the worst outcome over the possibility of a better one, but this assumption has been challenged as importing a substantive claim about rational risk preference that the veil of ignorance device itself does not strictly entail. A person could reason from behind the veil in a manner Rawls would recognise as rational while still preferring a system that accepts some risk of a worse floor in exchange for a higher expected position, meaning the veil of ignorance narrows the range of defensible tax systems considerably without ever fully determining a single one.",
      "questions": [
        {
          "question_id": "p03-08-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "The veil of ignorance thought experiment fully determines a single correct tax rate for any society."
            },
            {
              "id": "B",
              "text": "The veil of ignorance narrows the range of defensible tax systems but does not fully determine a single one, since it underdetermines how much risk-aversion a rational chooser should have."
            },
            {
              "id": "C",
              "text": "Rawls's difference principle has been universally accepted without any criticism."
            },
            {
              "id": "D",
              "text": "Tax policy has nothing to do with principles of justice."
            },
            {
              "id": "E",
              "text": "All rational people behind the veil of ignorance would choose identical tax systems."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit closing claim, synthesising the critique of Rawls's risk-aversion assumption with the broader point about indeterminacy.",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-08-q2",
          "type": "assumption",
          "prompt": "Rawls's difference principle, as described in the passage, depends on which specific assumption?",
          "options": [
            {
              "id": "A",
              "text": "That a rational chooser behind the veil of ignorance would be maximally risk-averse, prioritising protection against the worst outcome"
            },
            {
              "id": "B",
              "text": "That inequality is always unjust regardless of its effects on the least advantaged"
            },
            {
              "id": "C",
              "text": "That taxation should be abolished entirely"
            },
            {
              "id": "D",
              "text": "That all individuals have identical risk preferences in real life, not merely behind the veil"
            },
            {
              "id": "E",
              "text": "That the veil of ignorance has never been criticised by any philosopher"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is stated directly: the difference principle 'was intended to resolve this indeterminacy by assuming that a rational chooser behind the veil would be maximally risk-averse.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-08-q3",
          "type": "logical_structure",
          "prompt": "The comparison between a 'risk-averse' and a 'risk-tolerant' rational chooser in the second paragraph serves to:",
          "options": [
            {
              "id": "A",
              "text": "Prove that only risk-averse reasoning is truly rational"
            },
            {
              "id": "B",
              "text": "Illustrate why the veil of ignorance thought experiment underdetermines the correct degree of progressivity in a tax system"
            },
            {
              "id": "C",
              "text": "Show that risk tolerance has no bearing on tax policy"
            },
            {
              "id": "D",
              "text": "Argue that Rawls never considered questions of risk"
            },
            {
              "id": "E",
              "text": "Support Rawls's difference principle without qualification"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The comparison directly illustrates the indeterminacy claim: two equally rational risk postures produce different policy conclusions, and 'nothing internal to the veil of ignorance thought experiment adjudicates between' them.",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-08-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most weaken the criticism that the veil of ignorance underdetermines tax policy?",
          "options": [
            {
              "id": "A",
              "text": "A rigorous decision-theoretic proof showing that any rational, self-interested chooser reasoning correctly behind a genuine veil of ignorance must adopt maximal risk-aversion, with no coherent alternative available."
            },
            {
              "id": "B",
              "text": "A survey showing most people favour progressive taxation."
            },
            {
              "id": "C",
              "text": "A historical account of how Rawls developed his theory of justice."
            },
            {
              "id": "D",
              "text": "Evidence that tax rates vary considerably between countries."
            },
            {
              "id": "E",
              "text": "A study showing risk tolerance varies between individuals in real life."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The criticism depends on the claim that rational choosers behind the veil could reasonably differ in risk posture. A proof that only one risk posture is coherent would remove this indeterminacy and directly weaken the criticism.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p03-09",
      "topic": "Whistleblowing and professional loyalty",
      "word_count": 358,
      "text": "Professional codes of conduct in law, medicine, accountancy, and similar fields typically impose duties of confidentiality and loyalty toward employers or clients, on the theory that trust in these relationships is essential to their proper functioning; a client who cannot trust a lawyer's discretion will withhold information the lawyer needs to provide competent advice. Whistleblowing, disclosing an employer's wrongdoing to regulators, the press, or the public, directly conflicts with these duties, and professional bodies have historically treated it as a serious breach of obligation regardless of the underlying wrongdoing's severity.\n\nThe justification most commonly offered for permitting or even requiring whistleblowing in specific circumstances is consequentialist: certain wrongdoing, fraud that harms the public, safety violations that risk lives, is sufficiently serious that the harm of disclosure, damaged trust, professional and legal risk to the whistleblower, is outweighed by the harm prevented through timely intervention. This justification, while intuitively appealing, faces a structural difficulty distinct from disputes about where exactly the threshold of seriousness should sit: the whistleblower making the disclosure decision is rarely in a position to weigh the relevant harms with anything like the confidence the consequentialist framework presupposes, since they typically possess partial information about the wrongdoing's true scope, cannot reliably predict how the disclosure will be received or acted upon by regulators or the public, and are assessing all of this under considerable personal and professional pressure that is likely to distort judgement in ways that are difficult to correct for in the moment.\n\nA procedural alternative, internal reporting channels and independent regulators empowered to investigate confidentially before any public disclosure occurs, attempts to preserve confidentiality's ordinary value while providing a route for serious wrongdoing to be addressed without requiring the individual employee to personally undertake the fraught consequentialist calculation the direct-disclosure model demands of them. This shifts the difficult weighing exercise to institutions in principle better positioned to gather complete information and assess it dispassionately, though it depends heavily on those institutions being genuinely independent and adequately resourced, conditions that are frequently absent in precisely the organisations most in need of effective oversight.",
      "questions": [
        {
          "question_id": "p03-09-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Whistleblowing should never be permitted under any circumstances."
            },
            {
              "id": "B",
              "text": "The consequentialist justification for whistleblowing faces a structural difficulty because individual whistleblowers rarely have the information or dispassionate judgement the framework presupposes, making procedural alternatives that shift the calculation to institutions potentially preferable, though not without their own conditions."
            },
            {
              "id": "C",
              "text": "Professional codes of confidentiality serve no legitimate purpose."
            },
            {
              "id": "D",
              "text": "Internal reporting channels always succeed regardless of institutional independence."
            },
            {
              "id": "E",
              "text": "Whistleblowers always possess complete information about the wrongdoing they disclose."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This synthesises the passage's structural critique of individual consequentialist calculation with its qualified endorsement of procedural alternatives, matching the final paragraph's explicit conditions.",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-09-q2",
          "type": "inference",
          "prompt": "The passage implies that the consequentialist justification for whistleblowing is difficult to apply primarily because:",
          "options": [
            {
              "id": "A",
              "text": "No wrongdoing is ever serious enough to justify disclosure"
            },
            {
              "id": "B",
              "text": "The individual whistleblower typically lacks complete information, cannot reliably predict outcomes, and is judging under distorting personal pressure"
            },
            {
              "id": "C",
              "text": "Professional codes of conduct do not exist in most fields"
            },
            {
              "id": "D",
              "text": "Regulators are always more informed than employees"
            },
            {
              "id": "E",
              "text": "Consequentialism has been fully rejected by all professional bodies"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly as the 'structural difficulty': partial information, unpredictable outcomes, and pressure that distorts judgement 'in ways that are difficult to correct for in the moment.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-09-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's discussion of procedural alternatives ends with a qualification about institutional independence. This qualification functions to:",
          "options": [
            {
              "id": "A",
              "text": "Fully undermine the value of procedural alternatives, rendering them useless"
            },
            {
              "id": "B",
              "text": "Acknowledge that the proposed solution depends on conditions that are not always present, particularly in the organisations most needing oversight"
            },
            {
              "id": "C",
              "text": "Prove that individual whistleblowing is always superior to procedural alternatives"
            },
            {
              "id": "D",
              "text": "Introduce an entirely unrelated point about resourcing of unrelated public services"
            },
            {
              "id": "E",
              "text": "Argue that no institution has ever successfully investigated wrongdoing"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explicitly notes the approach 'depends heavily on' independence and resourcing, conditions 'frequently absent in precisely the organisations most in need of effective oversight' — a qualification, not a wholesale rejection (A).",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p03-10",
      "topic": "Central bank independence",
      "word_count": 350,
      "text": "Most advanced economies delegate control of interest rates and monetary policy to central banks operating with significant independence from elected government, insulated from direct political direction by statutory mandates, fixed terms of office, and formal limits on ministerial instruction. The standard justification is the problem of time inconsistency: elected politicians, facing re-election pressure, have a persistent incentive to favour looser monetary policy that stimulates short-term growth at the cost of higher inflation later, a cost that tends to fall due after the relevant election, and a central bank insulated from these electoral pressures can credibly commit to price stability in a way a directly accountable political body cannot.\n\nThe trade-off this delegation accepts is a democratic one: monetary policy affects employment, borrowing costs, and the value of savings in ways that touch citizens' material circumstances as directly as most decisions any government makes, yet the officials making these decisions are deliberately shielded from the electoral accountability that applies to virtually every other consequential area of policy. Defenders respond that this comparison understates how monetary policy differs from most other policy domains, since credibility itself, the public's confidence that low inflation will be maintained regardless of short-term political pressure, is a necessary input into the policy working at all, and a directly accountable body cannot generate that same credibility, since its promises about future restraint are less believable precisely because it retains the power to abandon them under electoral pressure.\n\nCritics of the current degree of independence do not typically call for full political control, recognising the time-inconsistency problem is genuine, but argue for narrower democratic oversight than currently exists, clearer mandates set and periodically revisited by elected legislatures, more transparent accountability for missed targets, on the reasoning that insulation sufficient to solve the credibility problem does not require the near-total independence many central banks currently enjoy, and that some intermediate arrangement could preserve credible commitment while restoring a meaningful democratic check absent from the present arrangement.",
      "questions": [
        {
          "question_id": "p03-10-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Central bank independence has no legitimate justification whatsoever."
            },
            {
              "id": "B",
              "text": "Central bank independence addresses a genuine time-inconsistency problem, but critics argue that the current degree of insulation from democratic oversight exceeds what solving that problem actually requires."
            },
            {
              "id": "C",
              "text": "Monetary policy has no effect on employment or borrowing costs."
            },
            {
              "id": "D",
              "text": "Elected politicians never face incentives to favour short-term economic stimulus."
            },
            {
              "id": "E",
              "text": "Central banks should be placed under full and direct political control."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This matches the passage's structure: explaining the genuine justification (time inconsistency and credibility), then presenting the critics' narrower argument for reform rather than full political control, as stated in the final paragraph.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-10-q2",
          "type": "inference",
          "prompt": "The passage implies that a directly, electorally accountable body would struggle to achieve the same monetary policy credibility as an independent central bank because:",
          "options": [
            {
              "id": "A",
              "text": "Elected bodies are legally prohibited from discussing monetary policy"
            },
            {
              "id": "B",
              "text": "Its promises of future restraint are less believable, since it retains the power to abandon them under electoral pressure"
            },
            {
              "id": "C",
              "text": "The public never trusts any government institution"
            },
            {
              "id": "D",
              "text": "Monetary policy has no measurable effect on inflation"
            },
            {
              "id": "E",
              "text": "Central banks and elected governments have identical incentives"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: an accountable body's 'promises about future restraint are less believable precisely because it retains the power to abandon them under electoral pressure.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-10-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's description of critics' position is notable because it:",
          "options": [
            {
              "id": "A",
              "text": "Shows critics reject the time-inconsistency problem as fictional"
            },
            {
              "id": "B",
              "text": "Shows critics accept the genuine problem independence solves while arguing the current degree of insulation goes further than necessary"
            },
            {
              "id": "C",
              "text": "Shows critics demand immediate abolition of all central bank independence"
            },
            {
              "id": "D",
              "text": "Shows critics have no alternative proposal of any kind"
            },
            {
              "id": "E",
              "text": "Shows critics agree entirely with defenders of the current system"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explicitly states critics 'do not typically call for full political control, recognising the time-inconsistency problem is genuine,' while still proposing narrower reforms — matching B precisely.",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-10-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the passage, 'time inconsistency' most nearly refers to:",
          "options": [
            {
              "id": "A",
              "text": "A general tendency for economic data to be released late"
            },
            {
              "id": "B",
              "text": "The tendency of elected politicians to favour policies with short-term benefits and delayed costs falling due after an election"
            },
            {
              "id": "C",
              "text": "A disagreement between central banks in different countries"
            },
            {
              "id": "D",
              "text": "A technical flaw in how inflation is measured"
            },
            {
              "id": "E",
              "text": "The average duration of a central bank official's term of office"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage defines this directly as politicians' 'persistent incentive to favour looser monetary policy that stimulates short-term growth at the cost of higher inflation later, a cost that tends to fall due after the relevant election.'",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p03-11",
      "topic": "Corporate personhood and liability",
      "word_count": 368,
      "text": "The legal doctrine of corporate personhood treats a corporation as a distinct legal entity, capable of owning property, entering contracts, and bearing legal liability separately from the individuals who own or manage it. This separation serves a genuine economic function: limited liability allows investors to fund risky but socially valuable ventures without exposing their entire personal wealth to the venture's potential failures, encouraging investment that might not otherwise occur if every shareholder faced unlimited personal exposure to a company's debts and misconduct.\n\nThe difficulty arises when the entity shielded from liability is also the entity whose conduct caused serious harm, since limited liability can function not merely as a shield against ordinary commercial risk but as a mechanism by which harm can be inflicted with the ultimate financial consequences borne by the corporate entity alone, an entity that can be dissolved, restructured, or rendered insolvent in ways that leave injured parties with a judgement against an empty shell while the individuals who made the relevant decisions retain their personal assets entirely. This is not merely a hypothetical concern; cases involving environmental contamination, defective products causing mass injury, and corporate fraud have repeatedly produced outcomes in which the corporate form absorbed liability that individual decision-makers, in a system without limited liability, would have borne personally.\n\nLegal doctrines such as 'piercing the corporate veil', allowing courts to disregard the separate entity and impose liability directly on individuals in cases of fraud or where the corporate form was used specifically to evade legal obligations, exist precisely to address this concern, but courts apply the doctrine narrowly and inconsistently, reluctant to undermine limited liability's general economic function by making veil-piercing too easily available, since a standard applied too readily would reintroduce the very unlimited personal exposure that limited liability was designed to eliminate, deterring the legitimate risk-taking the doctrine exists to encourage. The resulting equilibrium leaves a meaningful category of cases in which the doctrine's protective function and its potential for misuse are difficult to disentangle in practice, and where the correct balance between encouraging investment and preventing harm-shifting remains genuinely contested rather than settled.",
      "questions": [
        {
          "question_id": "p03-11-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Limited liability should be abolished entirely because it always enables harm."
            },
            {
              "id": "B",
              "text": "Limited liability serves a genuine economic function but can also function as a mechanism for shifting the consequences of serious harm away from decision-makers, and courts apply veil-piercing narrowly to avoid undermining that function, leaving the correct balance genuinely contested."
            },
            {
              "id": "C",
              "text": "Courts have never applied the doctrine of piercing the corporate veil in any case."
            },
            {
              "id": "D",
              "text": "Corporate personhood has no relationship to investment incentives."
            },
            {
              "id": "E",
              "text": "Environmental contamination cases never involve corporate liability issues."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's balanced conclusion, capturing both limited liability's genuine function and its potential for misuse, and the resulting unresolved tension described in the final paragraph.",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-11-q2",
          "type": "inference",
          "prompt": "The passage implies that courts are reluctant to apply the veil-piercing doctrine too readily because:",
          "options": [
            {
              "id": "A",
              "text": "The doctrine has never once been successfully applied"
            },
            {
              "id": "B",
              "text": "Doing so would reintroduce the unlimited personal exposure that limited liability was designed to eliminate, deterring legitimate risk-taking"
            },
            {
              "id": "C",
              "text": "Corporations are legally incapable of committing fraud"
            },
            {
              "id": "D",
              "text": "Individual decision-makers are always personally liable regardless of corporate structure"
            },
            {
              "id": "E",
              "text": "The doctrine applies exclusively to environmental contamination cases"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the final paragraph: applying the standard too readily 'would reintroduce the very unlimited personal exposure that limited liability was designed to eliminate, deterring the legitimate risk-taking the doctrine exists to encourage.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-11-q3",
          "type": "logical_structure",
          "prompt": "The second paragraph's reference to environmental contamination, defective products, and corporate fraud functions to:",
          "options": [
            {
              "id": "A",
              "text": "Prove that limited liability has never once caused any real-world harm"
            },
            {
              "id": "B",
              "text": "Show that the concern about liability-shifting is 'not merely hypothetical' by citing concrete categories of real cases"
            },
            {
              "id": "C",
              "text": "Argue that all three categories of case are legally identical"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated digression about consumer protection law"
            },
            {
              "id": "E",
              "text": "Undermine the passage's central argument"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This directly follows and supports the sentence stating 'this is not merely a hypothetical concern,' grounding the abstract claim in concrete real-world categories of case.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p03-12",
      "topic": "Positive versus negative rights",
      "word_count": 360,
      "text": "A familiar distinction in rights theory separates negative rights, which obligate others merely to refrain from interfering with a person's freedom of action, such as the right against assault or unlawful imprisonment, from positive rights, which obligate others, typically the state, to actively provide something, such as a right to healthcare, education, or a minimum standard of living. Critics of positive rights, particularly in the libertarian tradition, argue that negative rights are categorically different in kind, since honouring them requires only that others abstain from action, whereas honouring positive rights requires that resources be extracted from some to be provided to others, making positive rights, unlike negative ones, inherently a claim on other people's labour and property rather than merely a claim to be left alone.\n\nThis categorical distinction has been challenged on the grounds that it mischaracterises what negative rights actually cost to enforce in practice. A right against assault is not self-enforcing; protecting it requires police, courts, prisons, and the tax revenue that funds them, all of which represent exactly the kind of resource extraction and positive state action that the negative-positive distinction claims is unique to positive rights. The practical difference between a right to physical security and a right to healthcare may be one of degree, how much state action and resource extraction each requires, rather than a difference in kind, since both ultimately depend on an actively functioning, resourced state apparatus to be meaningful rather than merely nominal.\n\nDefenders of the distinction respond that this collapses an important structural difference even if it correctly identifies a shared practical dependency on state resources: negative rights specify a determinate duty, do not assault this person, that can be honoured by simply not acting, whereas positive rights specify an open-ended duty, provide adequate healthcare, whose content and cost are inherently variable and contestable, requiring ongoing political judgement about what level of provision counts as adequate in a way that negative rights, whatever their enforcement costs, do not require. The dispute, properly understood, concerns whether this structural difference in determinacy is significant enough to sustain the original categorical distinction, not merely whether both types of right cost something to enforce.",
      "questions": [
        {
          "question_id": "p03-12-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Negative rights require no state action or resources whatsoever to enforce."
            },
            {
              "id": "B",
              "text": "The categorical distinction between negative and positive rights is challenged by the fact that both require state resources, but defenders reframe the dispute around a difference in determinacy of duty rather than mere resource dependency."
            },
            {
              "id": "C",
              "text": "Positive rights should be abolished entirely because they claim other people's labour."
            },
            {
              "id": "D",
              "text": "There is no meaningful difference of any kind between negative and positive rights."
            },
            {
              "id": "E",
              "text": "Libertarians and their critics agree entirely on how rights should be classified."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures the passage's dialectical structure: the challenge to the categorical distinction, followed by the defenders' reframing around determinacy, matching the final paragraph's explicit statement of what 'the dispute, properly understood, concerns.'",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-12-q2",
          "type": "inference",
          "prompt": "The passage implies that a right against assault requires which of the following to be meaningfully protected?",
          "options": [
            {
              "id": "A",
              "text": "No state resources or institutions whatsoever"
            },
            {
              "id": "B",
              "text": "Police, courts, prisons, and the tax revenue funding them"
            },
            {
              "id": "C",
              "text": "An open-ended and continuously revisable duty of provision"
            },
            {
              "id": "D",
              "text": "Nothing beyond individuals simply refraining from violence, with no institutional support"
            },
            {
              "id": "E",
              "text": "A right to healthcare functioning as a precondition"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the second paragraph as part of the challenge to the negative/positive distinction: enforcement 'requires police, courts, prisons, and the tax revenue that funds them.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p03-12-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's distinction between a 'determinate duty' and an 'open-ended duty' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Concede that negative and positive rights are identical in every respect"
            },
            {
              "id": "B",
              "text": "Offer defenders of the categorical distinction a different basis for it, shifting the argument away from resource cost and toward the structure of the duty itself"
            },
            {
              "id": "C",
              "text": "Prove that positive rights require no resources at all"
            },
            {
              "id": "D",
              "text": "Undermine the entire discussion of rights theory presented earlier"
            },
            {
              "id": "E",
              "text": "Argue that negative rights are inherently more expensive to enforce"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the defenders' reframing move: since the resource-cost argument no longer distinguishes the two types, they shift the categorical claim to the determinacy of the duty instead, matching B.",
          "difficulty": "hard"
        },
        {
          "question_id": "p03-12-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most strengthen the defenders' reframed distinction based on determinacy of duty?",
          "options": [
            {
              "id": "A",
              "text": "Evidence that courts and legislatures routinely face genuine, ongoing disagreement about what level of healthcare or education provision counts as 'adequate', with no comparable ongoing disagreement about what counts as honouring a duty not to assault someone."
            },
            {
              "id": "B",
              "text": "Evidence that police forces require substantial funding to operate effectively."
            },
            {
              "id": "C",
              "text": "Evidence that some countries provide more generous welfare benefits than others."
            },
            {
              "id": "D",
              "text": "Evidence that negative rights are recognised in more legal systems than positive rights."
            },
            {
              "id": "E",
              "text": "Evidence that libertarians and their critics disagree about many political questions."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The defenders' reframed claim is specifically that positive duties are open-ended and contestable in content while negative duties are determinate. Direct evidence of this exact contrast would strengthen their specific claim.",
          "difficulty": "hard"
        }
      ]
    }
  ]
},
{
  "paper_id": "praxis-p04",
  "title": "Praxis LNAT Practice Paper 4",
  "section": "A",
  "time_limit_minutes": 95,
  "total_questions": 42,
  "difficulty_band": "harder than Paper 1",
  "passages": [
    {
      "passage_id": "p04-01",
      "topic": "Strict liability offences and mens rea",
      "word_count": 355,
      "text": "Most serious criminal offences require proof not only that a defendant committed a prohibited act but that they did so with a culpable mental state, mens rea, intending the outcome, or at minimum being reckless or negligent about it. Strict liability offences dispense with this requirement entirely: a defendant can be convicted merely by proving the prohibited act occurred, regardless of intention, knowledge, or even reasonable care taken to avoid it. Selling alcohol to a minor who presented a convincing fake identification, or possessing a contaminated food product despite reasonable quality controls, can each result in strict liability conviction even where the defendant took every reasonable precaution.\n\nDefenders of strict liability in these narrow regulatory contexts argue that removing the mens rea requirement serves a distinct and legitimate purpose: it shifts the incentive from merely avoiding proven negligence to actively over-investing in precaution, since a defendant cannot escape liability by showing reasonable care was taken, only by ensuring the prohibited outcome never occurs at all. In domains where the potential harm, contaminated food reaching consumers, alcohol reaching minors, is serious and diffuse across many potential victims, this stronger incentive is argued to justify departing from the ordinary requirement that punishment track individual moral fault.\n\nCritics respond that this justification, however sound as regulatory theory, sits uneasily with using the criminal law, with its associated stigma and potential for imprisonment, as the enforcement mechanism, since criminal conviction has traditionally been reserved for conduct reflecting a culpable choice, and applying it to defendants who exercised full reasonable care blurs a distinction the criminal law is meant to preserve between the blameworthy and the merely unlucky. A regulatory system achieving the same incentive effects through civil penalties, fines, licence suspension, without the criminal label and its associated social and professional consequences, would arguably capture the deterrence benefit strict liability provides while avoiding the specific harm of criminalising conduct that involved no culpable choice at all, a distinction that current strict liability doctrine, by locating the same incentive structure within the criminal rather than civil system, does not preserve.",
      "questions": [
        {
          "question_id": "p04-01-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Strict liability offences should never exist in any legal system."
            },
            {
              "id": "B",
              "text": "While strict liability may be justified as regulatory incentive theory, applying it through the criminal rather than civil system blurs the distinction between blameworthy and merely unlucky conduct that criminal law is meant to preserve."
            },
            {
              "id": "C",
              "text": "Mens rea has never been required for any criminal offence."
            },
            {
              "id": "D",
              "text": "Civil penalties are always less effective than criminal punishment at achieving compliance."
            },
            {
              "id": "E",
              "text": "Selling alcohol to minors should never be criminalised under any circumstances."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit critique in the final paragraph, which accepts the regulatory logic while objecting specifically to its criminal, rather than civil, enforcement mechanism.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-01-q2",
          "type": "inference",
          "prompt": "The passage implies that the incentive effect defenders attribute to strict liability depends on:",
          "options": [
            {
              "id": "A",
              "text": "Defendants being able to escape liability by showing reasonable care was taken"
            },
            {
              "id": "B",
              "text": "Defendants being unable to escape liability through a reasonable-care defence, pushing them to ensure the prohibited outcome never occurs at all"
            },
            {
              "id": "C",
              "text": "Strict liability applying only to civil, not criminal, cases"
            },
            {
              "id": "D",
              "text": "The potential harm being minor and concentrated on a single victim"
            },
            {
              "id": "E",
              "text": "Defendants never being aware of the relevant regulations"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: the incentive works precisely 'since a defendant cannot escape liability by showing reasonable care was taken, only by ensuring the prohibited outcome never occurs at all.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-01-q3",
          "type": "logical_structure",
          "prompt": "The proposal of civil penalties in the final paragraph functions to:",
          "options": [
            {
              "id": "A",
              "text": "Reject the entire concept of strict liability as unjustifiable"
            },
            {
              "id": "B",
              "text": "Suggest an alternative mechanism that could preserve the incentive benefit of strict liability while avoiding the specific harm of criminalising blameless conduct"
            },
            {
              "id": "C",
              "text": "Argue that civil penalties are always more expensive than criminal punishment"
            },
            {
              "id": "D",
              "text": "Prove that regulatory theory has no legitimate basis"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated topic about licence suspension procedures"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explicitly frames this as capturing 'the deterrence benefit strict liability provides while avoiding the specific harm of criminalising conduct that involved no culpable choice' — an alternative mechanism, not outright rejection (A).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p04-02",
      "topic": "The doctrine of double effect",
      "word_count": 368,
      "text": "The doctrine of double effect, with roots in scholastic moral philosophy, holds that an action producing both a good and a foreseen bad effect can be morally permissible provided the bad effect is not itself intended, either as an end or as a means to the good effect, but is merely foreseen and accepted as a side effect of pursuing the good one. A surgeon who administers pain relief knowing it may hasten a terminally ill patient's death acts permissibly under the doctrine, provided the intention is pain relief and death is a foreseen but unintended side effect, whereas a surgeon who administers the same drug specifically intending to cause death acts impermissibly, even though the observable physical act and outcome may be identical in both cases.\n\nCritics of the doctrine argue that grounding moral permissibility in an agent's private intention, rather than in the foreseeable consequences of their action, produces a standard that is both practically unverifiable, since intentions are not directly observable and can be reconstructed after the fact to suit a preferred conclusion, and philosophically suspect, since an agent who foresees a bad outcome with high confidence and proceeds anyway seems to bear substantial moral responsibility for that outcome regardless of whether they can sincerely describe their intention as directed elsewhere. Two agents performing physically identical acts with identical foreseeable consequences, one intending the bad outcome and one merely foreseeing it, seem to a consequentialist critic to have done the same thing in every respect that matters morally, namely producing the same expected effects in the world.\n\nDefenders respond that the doctrine does not deny that foreseen consequences matter to moral assessment, only that intended and merely foreseen consequences matter differently, tracking a genuine distinction in how an agent relates to an outcome: an agent who intends a death as a means treats a person's death as something to be brought about and would, by the internal logic of their own plan, be forced to reconsider that plan entirely if the death somehow failed to occur, whereas an agent who merely foresees death as a side effect of pain relief would not have their plan disrupted in the same way if the patient unexpectedly survived, since survival was never part of what their action was actually aiming at, a structural difference in the deliberative role a consequence plays that, defenders argue, tracks something morally real even where the observable outward acts are identical.",
      "questions": [
        {
          "question_id": "p04-02-q1",
          "type": "main_idea",
          "prompt": "The passage's central purpose is to:",
          "options": [
            {
              "id": "A",
              "text": "Prove conclusively that the doctrine of double effect is correct."
            },
            {
              "id": "B",
              "text": "Present the doctrine of double effect, the consequentialist critique of grounding permissibility in intention, and the defenders' structural response distinguishing intended from merely foreseen outcomes."
            },
            {
              "id": "C",
              "text": "Argue that pain relief for terminally ill patients should never be administered."
            },
            {
              "id": "D",
              "text": "Show that all surgeons who cause a patient's death are equally culpable regardless of intention."
            },
            {
              "id": "E",
              "text": "Dismiss consequentialism as an incoherent moral theory."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage presents both sides of this debate without declaring a winner, matching B and ruling out the one-sided A, C, D, and E.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-02-q2",
          "type": "inference",
          "prompt": "According to the passage, the critics' objection to the doctrine of double effect rests primarily on the claim that:",
          "options": [
            {
              "id": "A",
              "text": "Foreseen consequences are morally irrelevant"
            },
            {
              "id": "B",
              "text": "Grounding permissibility in private intention is practically unverifiable and morally suspect when foreseeable consequences are otherwise identical"
            },
            {
              "id": "C",
              "text": "The doctrine has never been applied in medical ethics"
            },
            {
              "id": "D",
              "text": "All surgeons intend to cause harm"
            },
            {
              "id": "E",
              "text": "Pain relief medication has no side effects"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: critics argue the intention-based standard is 'practically unverifiable... and philosophically suspect' when consequences are the same regardless of intention.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-02-q3",
          "type": "logical_structure",
          "prompt": "The defenders' argument in the final paragraph, involving what would happen if the patient 'unexpectedly survived', functions to:",
          "options": [
            {
              "id": "A",
              "text": "Concede that the doctrine of double effect has no coherent defence"
            },
            {
              "id": "B",
              "text": "Illustrate a structural difference in how intended and merely foreseen outcomes relate to an agent's underlying plan"
            },
            {
              "id": "C",
              "text": "Prove that all surgeons secretly intend their patients' deaths"
            },
            {
              "id": "D",
              "text": "Introduce an entirely unrelated hypothetical with no bearing on the argument"
            },
            {
              "id": "E",
              "text": "Undermine the consequentialist critique by appealing to outward physical acts alone"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This thought experiment is used specifically to reveal a difference in the 'deliberative role a consequence plays', supporting the defenders' structural distinction rather than conceding the critique (A).",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-02-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most strengthen the consequentialist critique of the doctrine of double effect?",
          "options": [
            {
              "id": "A",
              "text": "A study showing that observers cannot reliably distinguish, from any available evidence, between agents who intend a bad outcome and agents who merely foresee it, even when agents' own later reports are included."
            },
            {
              "id": "B",
              "text": "A study showing that most surgeons report finding pain relief decisions emotionally difficult."
            },
            {
              "id": "C",
              "text": "A study showing that terminally ill patients value pain relief highly."
            },
            {
              "id": "D",
              "text": "A study showing that the doctrine of double effect has ancient philosophical origins."
            },
            {
              "id": "E",
              "text": "A study showing that hospitals have ethics committees to review difficult cases."
            }
          ],
          "correct_option_id": "A",
          "explanation": "The consequentialist critique specifically targets the unverifiability of intention. Evidence that intention cannot be reliably distinguished by any means, including self-report, directly strengthens this specific objection.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p04-03",
      "topic": "Default rules in contract law",
      "word_count": 358,
      "text": "Contract law supplies default rules, terms that automatically govern an agreement whenever the parties have not explicitly addressed a particular issue themselves, on matters ranging from what counts as a reasonable delivery time to how risk of loss is allocated before goods change hands. Because these rules apply only in the absence of an explicit alternative, parties remain free to contract around them, and this freedom is usually taken to mean that the specific content of a default rule matters less than its mere existence, since sophisticated parties can simply negotiate a different term if the default does not suit them.\n\nThis assumption understates how much the content of a default rule can matter in practice, for reasons connected to bargaining power and transaction cost rather than to the formal availability of an alternative. A default rule that favours one party imposes a real cost on the other party attempting to negotiate around it, since departing from the default requires spending time, legal expertise, and negotiating leverage that weaker or less sophisticated parties frequently lack, meaning a default nominally available to be contracted around can function, in practice, almost as a mandatory term for parties without the resources or bargaining position to renegotiate it. This is especially significant in contracts between parties of unequal sophistication, a large company and an individual consumer, where the weaker party is unlikely to read, understand, or have any realistic opportunity to alter boilerplate terms regardless of their formal freedom to do so.\n\nThis observation has informed a body of scholarship arguing that default rules should be selected, wherever genuine information asymmetries or bargaining power imbalances are likely to prevent renegotiation in practice, to favour the party less likely to have the resources or leverage to bargain around an unfavourable default, on the reasoning that a rule which functions as effectively mandatory for one class of party should be set at the term that class would likely have chosen for itself under conditions of genuinely equal bargaining power, rather than at whatever term happens to be administratively convenient or historically customary for drafters.",
      "questions": [
        {
          "question_id": "p04-03-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Default rules in contract law have no practical effect since parties can always negotiate around them."
            },
            {
              "id": "B",
              "text": "The content of default rules matters considerably in practice, since bargaining power imbalances can make a formally optional default function as effectively mandatory, informing arguments for how such defaults should be set."
            },
            {
              "id": "C",
              "text": "Consumers always have full opportunity to renegotiate boilerplate contract terms."
            },
            {
              "id": "D",
              "text": "Default rules should always favour large companies over individual consumers."
            },
            {
              "id": "E",
              "text": "Contract law contains no default rules whatsoever."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's central claim, developed through the bargaining-power argument in the second paragraph and the resulting scholarly proposal in the third.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-03-q2",
          "type": "inference",
          "prompt": "The passage implies that a default rule is most likely to function as effectively mandatory when:",
          "options": [
            {
              "id": "A",
              "text": "Both parties have equal bargaining power and legal sophistication"
            },
            {
              "id": "B",
              "text": "One party lacks the resources, expertise, or leverage needed to negotiate an alternative term"
            },
            {
              "id": "C",
              "text": "The default rule is publicly popular"
            },
            {
              "id": "D",
              "text": "The contract involves two large, equally resourced companies"
            },
            {
              "id": "E",
              "text": "The default rule has never been challenged in court"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's central mechanism: unequal resources and leverage mean 'departing from the default... a default nominally available to be contracted around can function, in practice, almost as a mandatory term' for the disadvantaged party.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-03-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's proposal about how default rules should be selected functions to:",
          "options": [
            {
              "id": "A",
              "text": "Reject entirely the idea that default rules should ever favour any party"
            },
            {
              "id": "B",
              "text": "Extend the bargaining-power observation into a normative proposal about how defaults should be set in cases of likely bargaining imbalance"
            },
            {
              "id": "C",
              "text": "Argue that administrative convenience should always determine default rules"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated argument about court procedure"
            },
            {
              "id": "E",
              "text": "Concede that bargaining power has no relevance to contract law"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This paragraph draws a direct normative conclusion from the preceding empirical observation about bargaining power, extending rather than rejecting or contradicting it.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p04-04",
      "topic": "Obligation to obey unjust laws",
      "word_count": 372,
      "text": "Legal positivism holds that a law's validity depends on its having been enacted through the correct institutional procedure, not on its moral content, meaning a law can be simultaneously valid and unjust. This raises a question positivism itself does not resolve: whether citizens have any obligation to obey a law they judge, correctly, to be unjust, given that its formal validity is not in dispute. Political obligation theorists have proposed several distinct grounds for such a duty, each facing a specific objection when tested against genuinely unjust laws.\n\nConsent-based theories hold that citizens obligate themselves to obey by voluntarily participating in the political community, voting, accepting public benefits, remaining within the jurisdiction rather than emigrating. The difficulty is that most citizens never explicitly consent to anything resembling a genuine social contract, and treating continued residence or use of public roads as tacit consent to obey any validly enacted law, however unjust, stretches the concept of consent well past anything resembling a genuinely voluntary undertaking, particularly for citizens lacking the practical means to emigrate. Fair-play theories hold instead that citizens who accept the benefits of a cooperative legal system incur a reciprocal obligation to bear its burdens, including obeying its laws, but this account struggles to explain why the specific burden of obeying an unjust law, as opposed to laws generally, is owed in return for benefits that were often provided independently of that particular law's existence.\n\nA third approach abandons the search for a general obligation to obey law as such and argues instead that the relevant moral question is always local to the specific law and its consequences: whether disobeying a particular unjust law would cause disproportionate harm, to the rule of law generally, to other citizens relying on legal predictability, that outweighs the injustice the law itself produces. This approach denies that there is any general answer to the question of obedience to unjust law, treating each case as requiring its own weighing of harms rather than derivation from a single overarching theory of political obligation, a conclusion some find unsatisfying precisely because it refuses to supply the general principle the original question seemed to be asking for.",
      "questions": [
        {
          "question_id": "p04-04-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Legal positivism proves that unjust laws are never valid."
            },
            {
              "id": "B",
              "text": "Several proposed grounds for a general obligation to obey unjust law each face significant objections, and a case-by-case approach abandons the search for a general principle in favour of localised harm-weighing, itself an unsatisfying resolution to some."
            },
            {
              "id": "C",
              "text": "Citizens are always morally obligated to obey any validly enacted law, however unjust."
            },
            {
              "id": "D",
              "text": "No citizen has ever consented to any political community."
            },
            {
              "id": "E",
              "text": "Fair-play theories have fully and successfully resolved the obligation question."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This synthesises the passage's survey of consent-based and fair-play theories with the case-by-case alternative and its acknowledged limitation, matching the passage's overall structure and closing tone.",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-04-q2",
          "type": "inference",
          "prompt": "The passage implies that the main weakness of consent-based theories of political obligation is that:",
          "options": [
            {
              "id": "A",
              "text": "No citizen has ever voted in any election"
            },
            {
              "id": "B",
              "text": "Treating continued residence as tacit consent stretches the concept of consent well beyond a genuinely voluntary undertaking, especially for those unable to emigrate"
            },
            {
              "id": "C",
              "text": "Consent-based theories apply only to citizens who have committed crimes"
            },
            {
              "id": "D",
              "text": "Fair-play theories are more popular among political philosophers"
            },
            {
              "id": "E",
              "text": "Consent is always given explicitly and in writing"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: treating residence or road use as tacit consent 'stretches the concept of consent well past anything resembling a genuinely voluntary undertaking, particularly for citizens lacking the practical means to emigrate.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-04-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's approach relates to the two theories described earlier by:",
          "options": [
            {
              "id": "A",
              "text": "Combining consent-based and fair-play theories into a single unified account"
            },
            {
              "id": "B",
              "text": "Abandoning the search for a general theory of obligation altogether, in favour of case-by-case harm-weighing specific to each unjust law"
            },
            {
              "id": "C",
              "text": "Proving that both consent-based and fair-play theories are entirely correct"
            },
            {
              "id": "D",
              "text": "Rejecting the existence of any moral question about obedience to law"
            },
            {
              "id": "E",
              "text": "Restating the consent-based theory using different terminology"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: the approach 'abandons the search for a general obligation to obey law as such' in favour of local, case-specific weighing, distinguishing it clearly from the two prior theories.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-04-q4",
          "type": "inference",
          "prompt": "The passage implies that fair-play theories struggle to justify obedience to a specific unjust law because:",
          "options": [
            {
              "id": "A",
              "text": "Citizens never receive any benefits from a cooperative legal system"
            },
            {
              "id": "B",
              "text": "The benefits received were often provided independently of that particular unjust law's existence, making it unclear why obeying that specific law is owed in return"
            },
            {
              "id": "C",
              "text": "Fair-play theories apply only to consent-based obligations"
            },
            {
              "id": "D",
              "text": "No legal system has ever been described as cooperative"
            },
            {
              "id": "E",
              "text": "Reciprocal obligation has never been recognised in any legal tradition"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: fair-play theories 'struggle to explain why the specific burden of obeying an unjust law... is owed in return for benefits that were often provided independently of that particular law's existence.'",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p04-05",
      "topic": "Algorithmic risk assessment in sentencing",
      "word_count": 365,
      "text": "Several jurisdictions now use statistical risk-assessment tools to inform sentencing and parole decisions, generating a numerical estimate of an individual's likelihood of reoffending based on factors including criminal history, age, and, in some tools, proxies correlated with socioeconomic circumstances such as employment history and neighbourhood characteristics. Proponents argue these tools reduce the inconsistency and unconscious bias that affects purely human judgement, since a statistical model applies the same weighted factors uniformly to every case rather than varying with an individual judge's mood, fatigue, or implicit assumptions about the defendant before them.\n\nCritics raise two distinct objections that are often conflated but rest on different grounds. The first concerns accuracy: some widely used tools have been shown, in independent audits, to produce meaningfully different error rates across racial groups, flagging members of one group as high-risk at a higher rate than their actual reoffending rate justifies, while underestimating risk for another group, an error pattern that replicates rather than corrects the very disparities the tools were partly introduced to address. The second, more fundamental objection concerns legitimacy rather than accuracy: even a perfectly calibrated tool, one whose risk estimates precisely matched actual reoffending rates for every group, would still base an individual's sentence partly on statistical regularities observed across a population the defendant happens to resemble, rather than on facts about what that specific individual has done or is likely to do, a shift from individualised justice to group-based prediction that some argue is objectionable even when the underlying statistics are entirely accurate.\n\nThese two objections point toward different remedies, and conflating them risks solving only one problem while leaving the other untouched. The accuracy objection can, in principle, be addressed through better data, more careful model design, and rigorous independent auditing for disparate error rates, all of which are technical improvements compatible with continued use of the tools. The legitimacy objection cannot be addressed this way at all, since it applies with full force even to a hypothetically perfect tool, meaning that resolving the accuracy concern would leave the legitimacy concern completely untouched, and any jurisdiction relying solely on improved calibration to answer critics has addressed only one of the two genuinely distinct objections actually being raised.",
      "questions": [
        {
          "question_id": "p04-05-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Algorithmic risk-assessment tools should never be used under any circumstances."
            },
            {
              "id": "B",
              "text": "Critics raise two distinct objections, accuracy and legitimacy, requiring different remedies, and improving accuracy alone would leave the legitimacy objection completely unaddressed."
            },
            {
              "id": "C",
              "text": "All algorithmic risk-assessment tools are perfectly calibrated and free of bias."
            },
            {
              "id": "D",
              "text": "Human judges never exhibit inconsistency or bias in sentencing decisions."
            },
            {
              "id": "E",
              "text": "The legitimacy objection can be fully resolved through better data collection."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit central claim, stated most directly in the final paragraph, which distinguishes the two objections and their differing susceptibility to remedy.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-05-q2",
          "type": "inference",
          "prompt": "The passage implies that a hypothetically perfectly calibrated risk-assessment tool would:",
          "options": [
            {
              "id": "A",
              "text": "Resolve both the accuracy and legitimacy objections entirely"
            },
            {
              "id": "B",
              "text": "Resolve the accuracy objection but leave the legitimacy objection, concerning group-based prediction, fully intact"
            },
            {
              "id": "C",
              "text": "Have no error rates of any kind and no remaining objections"
            },
            {
              "id": "D",
              "text": "Be immune to any form of criticism"
            },
            {
              "id": "E",
              "text": "Automatically eliminate all racial disparities in sentencing outcomes"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: even 'a perfectly calibrated tool... would still base an individual's sentence partly on statistical regularities' — the legitimacy objection 'applies with full force even to a hypothetically perfect tool.'",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-05-q3",
          "type": "logical_structure",
          "prompt": "The passage's distinction between the 'accuracy' and 'legitimacy' objections functions primarily to:",
          "options": [
            {
              "id": "A",
              "text": "Show that both objections are actually the same underlying concern"
            },
            {
              "id": "B",
              "text": "Explain why addressing one objection through technical improvement does not automatically address the other"
            },
            {
              "id": "C",
              "text": "Prove that neither objection has any merit"
            },
            {
              "id": "D",
              "text": "Argue that only the accuracy objection deserves serious consideration"
            },
            {
              "id": "E",
              "text": "Undermine the proponents' argument entirely"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The final paragraph makes this function explicit: conflating the two 'risks solving only one problem while leaving the other untouched', which is precisely why the distinction is drawn.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p04-06",
      "topic": "Carbon pricing and externalities",
      "word_count": 350,
      "text": "Economists across a wide range of political perspectives converge on carbon pricing, taxing emissions directly or capping and trading permits to emit, as an efficient response to climate change, on the theory that emitting carbon imposes a cost on third parties, future generations, distant populations facing climate impacts, that the emitter does not bear and therefore does not factor into their decisions, an externality that a price correction can internalise by making the emitter's private cost reflect the activity's true social cost.\n\nThe theoretical elegance of this solution, however, depends on an assumption that its critics argue rarely holds in practice: that the revenue raised and the burden imposed by a carbon price are distributionally neutral, or at least that any distributional consequences are a separate matter to be addressed through other policy instruments. In practice, carbon prices tend to fall disproportionately on lower-income households, who spend a larger share of their income on energy and transport and have less capacity to absorb higher prices or invest in the low-carbon alternatives, such as electric vehicles or home insulation, that would allow them to reduce their exposure to the tax over time.\n\nThis distributional concern does not undermine the underlying economic logic of pricing an externality, but it does mean that carbon pricing's efficiency, in the narrow sense of correctly signalling the true cost of emissions, is separable from its fairness, and treating the policy as self-justifying purely on efficiency grounds risks a political backlash from the households bearing a disproportionate burden, a backlash that has, in practice, derailed or diluted carbon pricing schemes in several jurisdictions. Recycling carbon revenue directly back to households through rebates, calibrated so that most low- and middle-income households receive more in rebate than they pay in tax, has emerged as the standard technical answer to this concern, though implementing such rebate schemes with sufficient transparency for the public to actually perceive the net benefit has proven considerably harder than designing them on paper.",
      "questions": [
        {
          "question_id": "p04-06-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Carbon pricing is economically unsound and should be abandoned."
            },
            {
              "id": "B",
              "text": "Carbon pricing's efficiency in correcting an externality is separable from its distributional fairness, and disregarding the latter risks political backlash even where the underlying economic logic is sound."
            },
            {
              "id": "C",
              "text": "Carbon pricing has no effect on lower-income households."
            },
            {
              "id": "D",
              "text": "Rebate schemes have proven simple to implement transparently in every jurisdiction that has tried them."
            },
            {
              "id": "E",
              "text": "Economists across the political spectrum disagree fundamentally about whether externalities exist."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion, distinguishing efficiency from fairness while noting rebate schemes are 'the standard technical answer' but harder to implement transparently than to design — ruling out D.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-06-q2",
          "type": "inference",
          "prompt": "The passage implies that carbon prices fall disproportionately on lower-income households primarily because:",
          "options": [
            {
              "id": "A",
              "text": "Lower-income households are legally exempt from carbon taxes"
            },
            {
              "id": "B",
              "text": "They spend a larger share of income on energy and transport and have less capacity to invest in low-carbon alternatives"
            },
            {
              "id": "C",
              "text": "Higher-income households never use energy or transport"
            },
            {
              "id": "D",
              "text": "Carbon pricing schemes explicitly target low-income neighbourhoods"
            },
            {
              "id": "E",
              "text": "Rebate schemes always fail to reach lower-income households"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the second paragraph, citing both the larger spending share on energy/transport and the reduced capacity to invest in alternatives.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-06-q3",
          "type": "vocabulary_in_context",
          "prompt": "As used in the passage, 'internalise' most nearly means:",
          "options": [
            {
              "id": "A",
              "text": "To keep a cost hidden from public view"
            },
            {
              "id": "B",
              "text": "To incorporate a previously external cost into the price faced by the party causing it"
            },
            {
              "id": "C",
              "text": "To transfer a cost entirely onto future generations"
            },
            {
              "id": "D",
              "text": "To eliminate a cost from existence altogether"
            },
            {
              "id": "E",
              "text": "To reduce a household's income tax burden"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explains a price 'can internalise' an externality 'by making the emitter's private cost reflect the activity's true social cost' — i.e., bringing an external cost into the emitter's own decision-making, matching B.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-06-q4",
          "type": "logical_structure",
          "prompt": "The final paragraph's discussion of rebate schemes functions to:",
          "options": [
            {
              "id": "A",
              "text": "Reject carbon pricing entirely as an unworkable policy"
            },
            {
              "id": "B",
              "text": "Present a proposed technical answer to the distributional concern while noting a further, distinct implementation difficulty around transparency"
            },
            {
              "id": "C",
              "text": "Prove that all carbon pricing schemes have already solved the distributional problem"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated argument about corporate taxation"
            },
            {
              "id": "E",
              "text": "Deny that carbon prices ever fall disproportionately on any group"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph presents rebates as 'the standard technical answer' while explicitly noting 'implementing such rebate schemes with sufficient transparency... has proven considerably harder than designing them on paper' — a proposal paired with an acknowledged limitation, not outright rejection (A).",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p04-07",
      "topic": "Dirty hands in political decision-making",
      "word_count": 372,
      "text": "The problem of dirty hands, a term drawn from political philosophy, describes situations in which a political leader appears to face a choice between two genuinely wrong courses of action, ordering torture to extract information about an imminent attack, negotiating with a hostage-taking terrorist organisation, where refusing to act wrongly produces a worse outcome than acting wrongly does, and no option available leaves the leader's hands clean. The problem is distinct from an ordinary moral dilemma in which one option, on reflection, turns out to be correct once all factors are weighed; the dirty hands problem specifically describes cases where the wrongness of the chosen action is not cancelled out or overridden by the good it achieves, but persists alongside it, leaving the leader genuinely guilty of a wrong even while having made the comparatively better choice available.\n\nOne response denies the problem is genuine, arguing that any framework capable of correctly identifying the comparatively better choice thereby renders that choice permissible rather than merely better, since 'permissible' just means 'the right thing to do given the available alternatives', and a coherent moral theory should not leave a residue of guilt attached to the objectively correct choice. On this view, apparent dirty hands cases are simply difficult ordinary dilemmas, and the sense of remaining guilt some leaders report is a psychological artefact rather than evidence of genuine, un-cancelled wrongdoing.\n\nDefenders of the dirty hands framework respond that this dissolution moves too quickly past something morally significant: the specific means chosen, torture, capitulation to violence, retain features, violating a person's bodily autonomy, rewarding coercion, that make them wrong in a way not simply washed away by the fact that the alternative was worse, and a political morality that redescribes such choices as fully clean once justified by consequences risks eroding the very reluctance that keeps leaders from reaching for such means too readily in future, less genuinely necessitated cases. On this view, preserving the language of residual wrongdoing, distinct from mere psychological discomfort, serves an important disciplining function precisely by refusing to let necessity fully launder the moral status of the means employed.",
      "questions": [
        {
          "question_id": "p04-07-q1",
          "type": "main_idea",
          "prompt": "The passage's central purpose is to:",
          "options": [
            {
              "id": "A",
              "text": "Prove that dirty hands cases never actually occur in real political decision-making."
            },
            {
              "id": "B",
              "text": "Present the dirty hands problem and two contrasting responses: one dissolving it into an ordinary dilemma, and one defending the idea of genuine residual wrongdoing even in a justified choice."
            },
            {
              "id": "C",
              "text": "Argue that torture is always morally justified when it produces good outcomes."
            },
            {
              "id": "D",
              "text": "Claim that political leaders should never face difficult moral choices."
            },
            {
              "id": "E",
              "text": "Dismiss political philosophy as unable to address real political dilemmas."
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage presents both the dissolution response and the defence of residual wrongdoing without declaring a clear winner, matching B and ruling out the one-sided alternatives.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-07-q2",
          "type": "inference",
          "prompt": "According to the passage, the response that 'denies the problem is genuine' rests on which claim?",
          "options": [
            {
              "id": "A",
              "text": "That torture is never wrong under any circumstances"
            },
            {
              "id": "B",
              "text": "That identifying the comparatively better choice thereby renders it permissible, leaving no residue of genuine wrongdoing"
            },
            {
              "id": "C",
              "text": "That political leaders never face genuinely difficult choices"
            },
            {
              "id": "D",
              "text": "That guilt is always evidence of genuine wrongdoing"
            },
            {
              "id": "E",
              "text": "That dirty hands cases are more common than ordinary dilemmas"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: this view holds that a correctly identified comparatively better choice is thereby rendered permissible, and any 'sense of remaining guilt... is a psychological artefact rather than evidence of genuine, un-cancelled wrongdoing.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-07-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's point about a 'disciplining function' serves to:",
          "options": [
            {
              "id": "A",
              "text": "Argue that preserving the language of residual wrongdoing has a practical consequence beyond pure philosophical accuracy, discouraging leaders from resorting to such means too readily in future cases"
            },
            {
              "id": "B",
              "text": "Prove that dirty hands cases have no practical relevance to political decision-making"
            },
            {
              "id": "C",
              "text": "Concede that the dissolution response described earlier is entirely correct"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated argument about legal punishment for political leaders"
            },
            {
              "id": "E",
              "text": "Show that all political leaders who use dirty means are being deliberately manipulative"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is the passage's explicit practical justification for preserving the framework: it 'serves an important disciplining function' beyond mere philosophical description, going beyond a purely abstract point.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p04-08",
      "topic": "Statistical discrimination in insurance and lending",
      "word_count": 360,
      "text": "Insurers and lenders routinely use group-level statistical correlations, age, postcode, occupation, to price risk or determine creditworthiness for individuals, a practice economists term statistical discrimination: treating an individual differently not based on anything specific to them but based on the average characteristics of a group they happen to belong to. Unlike animus-based discrimination, statistical discrimination can be entirely rational from the discriminating party's perspective and need involve no hostility toward the group in question at all, since a lender using postcode as a proxy for default risk is simply exploiting a real statistical correlation to make more accurate pricing decisions than would be possible using only individual-level information.\n\nThe practice nonetheless raises a distinct moral concern from ordinary risk-based pricing, because the individual bearing the cost, a low-risk driver charged more because they share a postcode with higher-risk drivers, is being charged not for anything they did or any risk they individually pose, but for characteristics of people they merely happen to live among, a cost imposed on the basis of group membership rather than individual conduct or circumstance. Where the group category correlates strongly with a protected characteristic, race, given the historical relationship between postcode and racial residential patterns in many countries, statistical discrimination can reproduce the practical effects of the animus-based discrimination it is not intended to express, using facially neutral criteria to arrive at systematically disparate outcomes across groups the discriminator claims no hostility toward whatsoever.\n\nThe available responses trade off against each other in a now-familiar pattern: prohibiting the use of correlated proxies preserves individual-level fairness but sacrifices some pricing accuracy, since lenders and insurers lose access to genuinely predictive information, while permitting their unrestricted use preserves accuracy but risks reproducing disparate outcomes along protected lines regardless of intent. Some jurisdictions have adopted intermediate rules, permitting certain correlated factors while prohibiting others closely tied to protected characteristics, an approach that requires drawing lines between acceptable and unacceptable proxies that are, in practice, almost as contested and difficult to specify with precision as the underlying disagreement about how much individual fairness should be sacrificed for actuarial accuracy in the first place.",
      "questions": [
        {
          "question_id": "p04-08-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Statistical discrimination is identical in every respect to animus-based discrimination."
            },
            {
              "id": "B",
              "text": "Statistical discrimination can be rational and free of hostility yet still raise distinct fairness concerns, particularly where group proxies correlate with protected characteristics, and available policy responses trade accuracy against fairness without a clean resolution."
            },
            {
              "id": "C",
              "text": "Insurers and lenders should be permitted to use any statistical proxy without restriction."
            },
            {
              "id": "D",
              "text": "Postcode has no correlation with risk of any kind."
            },
            {
              "id": "E",
              "text": "All forms of statistical discrimination should be banned immediately in every jurisdiction."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures the passage's central distinction (statistical vs. animus-based discrimination), its concern about protected-characteristic correlation, and its concluding trade-off analysis, without endorsing either extreme (C or E).",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-08-q2",
          "type": "inference",
          "prompt": "The passage implies that statistical discrimination differs from ordinary individual risk-based pricing because:",
          "options": [
            {
              "id": "A",
              "text": "It always involves hostility toward the affected group"
            },
            {
              "id": "B",
              "text": "It charges an individual based on the average characteristics of a group they belong to rather than anything specific to their own conduct or circumstances"
            },
            {
              "id": "C",
              "text": "It has never been used by any insurer or lender"
            },
            {
              "id": "D",
              "text": "It is always less accurate than individual-level pricing"
            },
            {
              "id": "E",
              "text": "It applies only to age, never to postcode or occupation"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's core distinction, stated in the second paragraph: the cost is 'imposed on the basis of group membership rather than individual conduct or circumstance.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-08-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's discussion of 'intermediate rules' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that a clean, uncontested solution to the underlying trade-off has already been found"
            },
            {
              "id": "B",
              "text": "Present a middle path between two extremes while noting it faces its own version of the same difficult line-drawing problem"
            },
            {
              "id": "C",
              "text": "Argue that all correlated proxies should be treated identically regardless of context"
            },
            {
              "id": "D",
              "text": "Prove that fairness and accuracy can never be traded off against each other"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated point about actuarial mathematics"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph explicitly notes this intermediate approach requires line-drawing that is 'almost as contested and difficult to specify with precision as the underlying disagreement' — a middle path with its own unresolved difficulty, not a clean solution (A).",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-08-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the passage, 'animus-based discrimination' most nearly refers to discrimination that:",
          "options": [
            {
              "id": "A",
              "text": "Is based purely on accurate statistical correlations with no hostility involved"
            },
            {
              "id": "B",
              "text": "Stems from hostility or prejudice toward a particular group, as distinct from a rational, statistically grounded practice"
            },
            {
              "id": "C",
              "text": "Applies exclusively to insurance pricing and never to lending"
            },
            {
              "id": "D",
              "text": "Is always illegal in every jurisdiction without exception"
            },
            {
              "id": "E",
              "text": "Occurs only when a lender uses postcode as a proxy for risk"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explicitly contrasts animus-based discrimination with statistical discrimination, describing the latter as involving 'no hostility toward the group in question at all' — implying animus-based discrimination is defined by such hostility, matching B.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p04-09",
      "topic": "Originalism versus living constitutionalism",
      "word_count": 365,
      "text": "Originalist theories of constitutional interpretation hold that a constitutional provision's meaning is fixed at the time of its enactment, either by the original intentions of its drafters or, in a more refined version, by the original public meaning the text would have conveyed to a reasonably informed reader at the time, and that subsequent interpretation should apply this fixed meaning to new circumstances rather than update the meaning itself. Living constitutionalism holds instead that constitutional provisions, particularly broadly worded ones such as guarantees of equal protection or due process, should be interpreted in light of evolving social understanding, allowing their application to change over time even where the text itself has not been formally amended.\n\nOriginalists argue that living constitutionalism effectively transfers lawmaking authority from the constitutionally specified amendment process, deliberately made difficult to ensure broad and durable consensus, to unelected judges free to update constitutional meaning according to their own, or their era's, evolving moral views, a shift they characterise as fundamentally undemocratic regardless of how substantively appealing any particular updated interpretation might be. This objection has genuine force in cases where a court's 'evolving understanding' tracks nothing more than the contested policy preferences of a narrow judicial majority, dressed in the language of constitutional discovery rather than acknowledged as the policy choice it actually is.\n\nLiving constitutionalists respond that originalism's claim to democratic legitimacy is considerably less secure than it presents itself, since the original public meaning of broadly worded provisions was itself often genuinely indeterminate or contested even among the enacting generation, meaning that originalist judges frequently face the same interpretive choices living constitutionalists face, selecting among genuinely available readings of ambiguous text, while originalism's rhetoric of simply 'applying' a fixed, discoverable meaning obscures rather than eliminates this underlying discretion. On this view, the real dispute is not between judicial discretion and its absence, since some discretion is unavoidable under either theory given genuine textual indeterminacy, but between which set of considerations, historical usage or evolved social understanding, should guide judges in exercising the discretion neither theory can actually eliminate.",
      "questions": [
        {
          "question_id": "p04-09-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Originalism eliminates all judicial discretion, while living constitutionalism introduces it entirely."
            },
            {
              "id": "B",
              "text": "The real dispute between originalism and living constitutionalism is not over whether judicial discretion exists, since genuine textual indeterminacy makes some discretion unavoidable under either theory, but over which considerations should guide that unavoidable discretion."
            },
            {
              "id": "C",
              "text": "Living constitutionalism has no legitimate response to the originalist critique."
            },
            {
              "id": "D",
              "text": "Constitutional text is always perfectly clear and requires no interpretation."
            },
            {
              "id": "E",
              "text": "The amendment process has never been used to change any constitution."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit reframing in the final paragraph, presenting the living constitutionalist response as relocating rather than resolving the underlying disagreement.",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-09-q2",
          "type": "inference",
          "prompt": "According to the passage, the originalist objection to living constitutionalism has 'genuine force' specifically in cases where:",
          "options": [
            {
              "id": "A",
              "text": "A court's 'evolving understanding' amounts to nothing more than a narrow judicial majority's contested policy preferences presented as constitutional discovery"
            },
            {
              "id": "B",
              "text": "The constitutional text is entirely unambiguous"
            },
            {
              "id": "C",
              "text": "Judges apply the original public meaning consistently"
            },
            {
              "id": "D",
              "text": "The amendment process has recently been used successfully"
            },
            {
              "id": "E",
              "text": "All members of the enacting generation agreed on a provision's meaning"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This qualification is stated directly in the second paragraph, specifying the precise circumstance in which the originalist objection is strongest.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-09-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's claim that original public meaning was 'itself often genuinely indeterminate' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Concede that originalism is entirely correct"
            },
            {
              "id": "B",
              "text": "Challenge originalism's claim to eliminate judicial discretion, by showing originalist judges also face genuine interpretive choices"
            },
            {
              "id": "C",
              "text": "Prove that the enacting generation never had any views on constitutional meaning"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated argument about legislative history"
            },
            {
              "id": "E",
              "text": "Show that living constitutionalism requires no interpretive judgement at all"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This claim directly undermines originalism's self-presentation as simply 'applying' a fixed, discoverable meaning, showing that meaningful discretion remains even under originalist method.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p04-10",
      "topic": "The prisoner's dilemma and international treaties",
      "word_count": 355,
      "text": "The prisoner's dilemma, a foundational model in game theory, describes a situation in which two parties would each benefit most from mutual cooperation but face individual incentives to defect regardless of what the other party does, producing an outcome, mutual defection, that leaves both parties worse off than mutual cooperation would have, despite each having acted rationally given their individual incentives. International climate agreements exhibit this structure with unusual clarity: every state benefits from a stable climate, which requires broad participation in emissions reductions, yet each individual state faces an incentive to free-ride, enjoying the benefit of other states' reductions while avoiding the economic cost of its own, since the atmosphere does not distinguish between emissions reduced by a cooperating state and emissions avoided by anyone else.\n\nRepeated-game theory offers a partial escape from the single-round prisoner's dilemma's pessimistic prediction: where parties interact repeatedly rather than once, strategies of conditional cooperation, reducing emissions only as long as other parties continue to do so, and withdrawing cooperation in response to observed defection, can sustain cooperation that a single-round analysis would predict is impossible, since the shadow of future interaction gives each party a longer-term incentive to maintain a reputation for reliability that a purely single-round analysis cannot capture. This explains why climate agreements have increasingly incorporated periodic review cycles and public reporting of national commitments, mechanisms that make defection visible and therefore subject to reciprocal withdrawal of cooperation by other parties, rather than relying on a single binding commitment made once and never revisited.\n\nThe limitation of this repeated-game solution is that its effectiveness depends on defection being reliably detectable and on the shadow of future interaction being sufficiently valued by all parties, conditions that hold imperfectly for climate agreements given the genuine difficulty of verifying another state's actual emissions and the long time horizon over which climate benefits and defection costs are realised, a horizon considerably longer than the political cycles that determine any individual government's actual incentive to maintain a costly cooperative reputation into an uncertain future it may not be in office to experience.",
      "questions": [
        {
          "question_id": "p04-10-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "International climate cooperation is completely impossible under any circumstances."
            },
            {
              "id": "B",
              "text": "Repeated-game dynamics offer a partial escape from the prisoner's dilemma structure of climate cooperation, but this escape depends on conditions, reliable detection of defection and sufficiently valued future interaction, that hold only imperfectly in practice."
            },
            {
              "id": "C",
              "text": "States never have any incentive to free-ride on other states' emissions reductions."
            },
            {
              "id": "D",
              "text": "Political cycles have no effect on a government's incentive to cooperate."
            },
            {
              "id": "E",
              "text": "Climate agreements have never included any reporting or review mechanisms."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion, balancing the genuine promise of repeated-game solutions against the specific limitations described in the final paragraph.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-10-q2",
          "type": "inference",
          "prompt": "The passage implies that periodic review cycles and public reporting in climate agreements exist primarily to:",
          "options": [
            {
              "id": "A",
              "text": "Make defection visible and therefore subject to reciprocal withdrawal of cooperation by other parties"
            },
            {
              "id": "B",
              "text": "Eliminate the need for any state to reduce its own emissions"
            },
            {
              "id": "C",
              "text": "Guarantee that all states will cooperate regardless of what others do"
            },
            {
              "id": "D",
              "text": "Replace the need for any binding commitments whatsoever"
            },
            {
              "id": "E",
              "text": "Prevent any state from ever measuring another state's emissions"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is stated directly: these mechanisms 'make defection visible and therefore subject to reciprocal withdrawal of cooperation by other parties', which is the core logic of conditional cooperation.",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-10-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's reference to political cycles being 'considerably shorter' than the relevant climate time horizon functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that political cycles have no bearing on climate cooperation"
            },
            {
              "id": "B",
              "text": "Identify a specific reason why the shadow-of-the-future incentive that sustains repeated-game cooperation may be weaker than the theory assumes"
            },
            {
              "id": "C",
              "text": "Prove that repeated-game theory has no application to international relations"
            },
            {
              "id": "D",
              "text": "Argue that governments should extend their terms of office indefinitely"
            },
            {
              "id": "E",
              "text": "Concede that climate agreements have never incorporated any review mechanisms"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This point directly explains one of the two named limitations, identifying why the incentive structure that repeated-game theory relies on may be weaker in practice than the model assumes.",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-10-q4",
          "type": "assumption",
          "prompt": "The repeated-game solution to the climate cooperation problem, as described in the second paragraph, depends on which assumption?",
          "options": [
            {
              "id": "A",
              "text": "That every state values a stable climate equally"
            },
            {
              "id": "B",
              "text": "That defection can be reliably detected and that parties sufficiently value the prospect of future interaction"
            },
            {
              "id": "C",
              "text": "That no state has ever defected from a climate agreement"
            },
            {
              "id": "D",
              "text": "That climate agreements require no reporting mechanisms of any kind"
            },
            {
              "id": "E",
              "text": "That single-round game theory accurately predicts all real-world cooperation"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The final paragraph makes this assumption explicit as the 'limitation of this repeated-game solution', naming detectability of defection and valuation of future interaction as its two load-bearing conditions.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p04-11",
      "topic": "Burden of proof and the presumption of innocence",
      "word_count": 350,
      "text": "The presumption of innocence, requiring the prosecution to prove guilt beyond reasonable doubt rather than requiring the defendant to prove their innocence, is often defended on a specific asymmetry-of-error argument: a system will inevitably make some errors, and it is worse to convict an innocent person than to acquit a guilty one, so the burden and standard of proof should be set to minimise the more serious error even at some cost to the less serious one, accepting a higher rate of false acquittals as the price of a lower rate of false convictions.\n\nThis justification, while widely accepted, depends on the empirical and evaluative claim that wrongful conviction is indeed worse than wrongful acquittal, a claim that seems clearly true in the individual case, an innocent person loses liberty through no fault of their own, but becomes considerably harder to sustain once the systemic effects of the alternative error are factored in. A guilty person wrongly acquitted may reoffend, harming additional victims who would not have been harmed had the system correctly convicted them the first time, meaning the asymmetry-of-error argument, taken at the level of the individual case, may understate the aggregate social cost of the more permissive standard once repeat offending by wrongly acquitted defendants is included in the calculation.\n\nDefenders of the beyond-reasonable-doubt standard respond that this aggregate calculation, while not wrong on its own terms, omits a further asymmetry that matters independently of aggregate harm counts: wrongful conviction is a harm the state itself directly inflicts on an identifiable individual through its own coercive machinery, whereas the harm from a wrongly acquitted repeat offender, though real and serious, is inflicted by a private individual rather than by the state acting in its own name, and a state has a distinct and heightened responsibility to avoid being the direct author of injustice through its own processes that is not simply reducible to a comparison of aggregate harm totals across both types of error, however those totals ultimately compare.",
      "questions": [
        {
          "question_id": "p04-11-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "The presumption of innocence has no justification of any kind and should be abandoned."
            },
            {
              "id": "B",
              "text": "The standard asymmetry-of-error justification for the presumption of innocence may understate aggregate social cost once repeat offending is considered, but defenders respond with a further, distinct argument about the state's heightened responsibility for harms it directly inflicts."
            },
            {
              "id": "C",
              "text": "Wrongful acquittal never leads to any further harm to additional victims."
            },
            {
              "id": "D",
              "text": "Aggregate harm counts are the only relevant consideration in setting a standard of proof."
            },
            {
              "id": "E",
              "text": "The state bears no special responsibility for harms inflicted through its own processes."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures the passage's full dialectical structure: the initial justification, the complication raised by aggregate harm, and the defenders' distinct further response, matching the passage's actual conclusion and ruling out D and E.",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-11-q2",
          "type": "inference",
          "prompt": "The passage implies that the aggregate-harm complication of the asymmetry argument arises because:",
          "options": [
            {
              "id": "A",
              "text": "Wrongful convictions never cause any harm to anyone"
            },
            {
              "id": "B",
              "text": "A wrongly acquitted guilty person may reoffend, harming additional victims who would not have been harmed under a correct conviction"
            },
            {
              "id": "C",
              "text": "Courts never make any errors of any kind"
            },
            {
              "id": "D",
              "text": "The presumption of innocence applies only to civil, not criminal, cases"
            },
            {
              "id": "E",
              "text": "All acquitted defendants are factually innocent"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: 'a guilty person wrongly acquitted may reoffend, harming additional victims who would not have been harmed had the system correctly convicted them the first time.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-11-q3",
          "type": "logical_structure",
          "prompt": "The defenders' response in the final paragraph relates to the aggregate-harm complication by:",
          "options": [
            {
              "id": "A",
              "text": "Denying that repeat offending by wrongly acquitted defendants ever occurs"
            },
            {
              "id": "B",
              "text": "Accepting the aggregate calculation on its own terms while introducing a further, independent consideration about the state's distinct responsibility for harms it directly inflicts"
            },
            {
              "id": "C",
              "text": "Rejecting the presumption of innocence entirely in light of the complication"
            },
            {
              "id": "D",
              "text": "Proving that aggregate harm counts always favour the beyond-reasonable-doubt standard"
            },
            {
              "id": "E",
              "text": "Introducing an unrelated argument about court funding"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage states this response is 'not wrong on its own terms' but 'omits a further asymmetry that matters independently of aggregate harm counts' — accepting rather than denying the complication, while adding a distinct further point.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p04-12",
      "topic": "Eminent domain and property rights",
      "word_count": 358,
      "text": "Eminent domain permits the state to compel the sale of private property for public use, provided the owner receives just compensation, typically assessed at fair market value. The power is usually justified by reference to the holdout problem: large infrastructure projects, roads, railways, reservoirs, require assembling many individual parcels of land, and if any single owner can refuse to sell, they can extract a price far above the land's ordinary market value by threatening to block a project whose value depends on acquiring every parcel, a strategic advantage unrelated to the land's actual worth that eminent domain exists specifically to neutralise.\n\nThe compensation standard, fair market value, is defended as objective and administrable, but it excludes a category of loss that matters considerably to affected owners: subjective value attached to a property beyond what any buyer would pay for it, a long-held family home, a business built around a specific location and its accumulated local reputation, losses that are real to the owner but systematically uncompensated because they are, by their nature, not reflected in what a stranger would pay on the open market. This creates a structural unfairness distinct from the holdout problem the power was designed to solve: even where eminent domain is deployed only for genuinely justified public projects, the owners who happen to be displaced bear an uncompensated cost, the loss of subjective value, that the rest of the public benefiting from the project does not share, converting what is presented as a shared public burden into one concentrated disproportionately on a small, essentially arbitrary set of individuals whose land happened to sit on the chosen route.\n\nProposals to address this, compensation formulas that add a fixed percentage premium above fair market value to approximate uncompensated subjective loss, have been adopted in some jurisdictions, but critics note that any fixed premium is itself an approximation applied uniformly regardless of how much subjective value a specific owner actually attached to their specific property, meaning the underlying problem, that market value cannot capture individually variable subjective loss, is mitigated rather than genuinely solved by a uniform adjustment applied across owners whose actual losses vary considerably.",
      "questions": [
        {
          "question_id": "p04-12-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Eminent domain should never be exercised under any circumstances."
            },
            {
              "id": "B",
              "text": "Even where eminent domain is justified by the holdout problem, the fair-market-value compensation standard systematically excludes subjective value, concentrating an uncompensated cost on displaced owners, and proposed fixed-premium remedies mitigate rather than fully solve this problem."
            },
            {
              "id": "C",
              "text": "Fair market value compensation always fully captures every cost a displaced owner experiences."
            },
            {
              "id": "D",
              "text": "The holdout problem has no legitimate basis and does not actually occur."
            },
            {
              "id": "E",
              "text": "Fixed-premium compensation formulas have completely solved the subjective value problem."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion, distinguishing the legitimate holdout-problem justification from the separate, unresolved fairness issue concerning subjective value, and correctly characterising fixed premiums as a mitigation rather than a full solution, ruling out E.",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-12-q2",
          "type": "inference",
          "prompt": "The passage implies that the holdout problem eminent domain is designed to solve arises because:",
          "options": [
            {
              "id": "A",
              "text": "A single owner can extract a price far above ordinary market value by threatening to block a project that depends on acquiring every parcel"
            },
            {
              "id": "B",
              "text": "Property owners never wish to sell their land under any circumstances"
            },
            {
              "id": "C",
              "text": "Fair market value is always higher than an owner's subjective valuation"
            },
            {
              "id": "D",
              "text": "Infrastructure projects never require assembling multiple parcels of land"
            },
            {
              "id": "E",
              "text": "The state has no legitimate interest in building infrastructure"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is stated directly in the first paragraph as the strategic advantage eminent domain 'exists specifically to neutralise.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p04-12-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's critique of fixed-premium compensation formulas functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that the subjective value problem has now been completely and permanently resolved"
            },
            {
              "id": "B",
              "text": "Explain why a uniform adjustment fails to genuinely solve a problem defined by individually variable losses, since a fixed premium cannot track how much subjective value any specific owner actually attached to their property"
            },
            {
              "id": "C",
              "text": "Argue that fair market value should be abandoned as a compensation standard entirely"
            },
            {
              "id": "D",
              "text": "Prove that the holdout problem no longer exists in any jurisdiction"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated argument about infrastructure funding mechanisms"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The paragraph explicitly states the underlying problem 'is mitigated rather than genuinely solved by a uniform adjustment applied across owners whose actual losses vary considerably' — a critique of the remedy's limits, not a claim that it fully resolves the issue (A).",
          "difficulty": "hard"
        },
        {
          "question_id": "p04-12-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the second paragraph, 'administrable' most nearly means:",
          "options": [
            {
              "id": "A",
              "text": "Capable of being practically applied and managed by an administering body according to consistent rules"
            },
            {
              "id": "B",
              "text": "Legally binding on all parties without exception"
            },
            {
              "id": "C",
              "text": "Emotionally satisfying to displaced property owners"
            },
            {
              "id": "D",
              "text": "Impossible to calculate under any circumstances"
            },
            {
              "id": "E",
              "text": "Reserved exclusively for use in criminal proceedings"
            }
          ],
          "correct_option_id": "A",
          "explanation": "The passage describes fair market value as 'objective and administrable', contrasting it with harder-to-quantify subjective value — meaning it can be consistently and practically applied by the relevant authority, matching A.",
          "difficulty": "medium"
        }
      ]
    }
  ]
},
{
  "paper_id": "praxis-p05",
  "title": "Praxis LNAT Practice Paper 5",
  "section": "A",
  "time_limit_minutes": 95,
  "total_questions": 42,
  "difficulty_band": "harder than Paper 1",
  "passages": [
    {
      "passage_id": "p05-01",
      "topic": "Comparative advantage and protectionism",
      "word_count": 358,
      "text": "David Ricardo's theory of comparative advantage demonstrates that two countries can both gain from trade even where one is more efficient than the other at producing every good, provided each specialises in producing whatever it is relatively, rather than absolutely, best at, and trades for the rest. The theory's logical structure is not seriously disputed among economists, yet protectionist policy retains persistent popular and political appeal even in countries whose own economists broadly accept the comparative advantage argument, a gap between expert consensus and policy outcome that deserves closer examination than a simple story of public misunderstanding provides.\n\nPart of the explanation lies in a distinction the theory itself, in its simplest form, tends to obscure: comparative advantage demonstrates that a country as a whole gains from trade in aggregate, but this aggregate gain is compatible with, and in practice frequently accompanies, significant losses concentrated among specific groups, workers in an industry that loses its domestic market to more efficient foreign competition, whose skills and local economies may not transfer easily to the expanding industries that benefit from trade. The theory's own textbook resolution, that winners could in principle compensate losers out of their gains and still come out ahead, describes a possibility rather than a practice, since such compensation is rarely implemented with anything like the completeness the theoretical resolution requires, leaving the concentrated losers with a legitimate grievance that aggregate-gain statistics do not capture or address.\n\nThis does not vindicate protectionism as a policy response, since tariffs and trade barriers typically impose costs on the broader population, including the very workers protectionism claims to help, considerably exceeding the value of the narrower interests protected, but it does explain why the debate persists despite theoretical consensus: economists are largely arguing about aggregate efficiency, a real and important consideration, while much of the public and political resistance is responding to concentrated, highly visible local harm that the aggregate framing genuinely fails to address on its own terms, a disagreement about which effects matter most rather than a simple disagreement about the facts.",
      "questions": [
        {
          "question_id": "p05-01-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Comparative advantage theory is factually incorrect and has been disproven."
            },
            {
              "id": "B",
              "text": "The persistent gap between expert consensus and popular support for protectionism reflects a genuine disagreement about which effects matter most, aggregate gains versus concentrated local losses, rather than simple public misunderstanding."
            },
            {
              "id": "C",
              "text": "Protectionist tariffs are the correct policy response to trade-related job losses."
            },
            {
              "id": "D",
              "text": "Compensation for workers displaced by trade is always fully implemented in practice."
            },
            {
              "id": "E",
              "text": "Economists are uniformly wrong about the benefits of international trade."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion in the final paragraph, reframing the persistence of protectionist sentiment as a disagreement about which effects matter, not a factual error — directly ruling out C, which the passage explicitly rejects.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-01-q2",
          "type": "inference",
          "prompt": "The passage implies that the textbook 'compensation' resolution to trade-related job losses is:",
          "options": [
            {
              "id": "A",
              "text": "Always fully and completely implemented in every trading economy"
            },
            {
              "id": "B",
              "text": "A theoretical possibility that is rarely implemented with the completeness the resolution actually requires"
            },
            {
              "id": "C",
              "text": "Irrelevant to the debate over comparative advantage"
            },
            {
              "id": "D",
              "text": "Something no economist has ever proposed"
            },
            {
              "id": "E",
              "text": "Guaranteed to eliminate all concentrated losses from trade"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: the resolution 'describes a possibility rather than a practice, since such compensation is rarely implemented with anything like the completeness the theoretical resolution requires.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-01-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's statement that this analysis 'does not vindicate protectionism' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Reverse the entire argument made in the second paragraph"
            },
            {
              "id": "B",
              "text": "Clarify that explaining why protectionist sentiment persists is not the same as endorsing protectionism as good policy"
            },
            {
              "id": "C",
              "text": "Concede that tariffs are, after all, an effective policy tool"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated argument about currency exchange rates"
            },
            {
              "id": "E",
              "text": "Undermine comparative advantage theory entirely"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is a clarifying move distinguishing explanation from endorsement, immediately followed by the reason tariffs remain a poor policy response despite the genuine grievance being explained.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p05-02",
      "topic": "Personal identity and gradual replacement",
      "word_count": 372,
      "text": "The ancient puzzle of the Ship of Theseus, whether a ship remains the same ship after every one of its planks has been gradually replaced, has taken on renewed philosophical significance in debates about personal identity, since the cells composing a human body are continuously replaced over the course of a lifetime, and emerging technologies, from gradual neural interface integration to hypothetical future mind-uploading, raise the same structural question in an even sharper form: at what point, if any, does gradual replacement of the physical or informational substrate of a person cease to preserve the identity of that person, as opposed to merely producing a distinct but similar successor.\n\nOne influential response, psychological continuity theory, locates personal identity not in physical continuity of matter at all but in the continuity of psychological connections, memory, personality, intention, linking earlier and later stages of a person's existence, on the reasoning that what matters to us about our own survival is not that the same atoms persist but that the relevant web of memory and character persists in some suitably connected way. This theory handles gradual biological cell replacement comfortably, since psychological continuity plainly survives it, but faces a harder test in cases of gradual technological substrate replacement, since it must specify how much alteration to the underlying process generating psychological states, replacing biological neurons with functionally equivalent artificial ones, one at a time, over an extended period, is compatible with preserving the relevant psychological continuity, a question the theory does not answer merely by asserting that psychological rather than physical continuity is what matters.\n\nA further complication arises from a thought experiment in which gradual replacement produces not one but two candidate successors, the gradually modified original and a perfect informational copy made at some intermediate stage and then run forward independently, both possessing equally strong psychological continuity claims to the original person's identity, a scenario physical continuity theories handle straightforwardly by simply designating the physically continuous candidate as the real successor, but which psychological continuity theories struggle to resolve without arbitrarily privileging one continuous psychological chain over an equally continuous rival, since psychological continuity, unlike physical continuity, does not obviously supply a principled reason to prefer one branch over the other once the branches have diverged.",
      "questions": [
        {
          "question_id": "p05-02-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Physical continuity theory has been definitively proven correct and psychological continuity theory has been fully refuted."
            },
            {
              "id": "B",
              "text": "Psychological continuity theory handles gradual biological replacement comfortably but faces genuine difficulties with technological substrate replacement and with branching cases involving equally continuous rival successors."
            },
            {
              "id": "C",
              "text": "Personal identity is a meaningless concept with no philosophical significance."
            },
            {
              "id": "D",
              "text": "Mind-uploading technology has already been successfully developed and tested."
            },
            {
              "id": "E",
              "text": "The Ship of Theseus puzzle has no relevance whatsoever to questions of personal identity."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures the passage's balanced treatment of psychological continuity theory's strengths and specific limitations, developed across the second and third paragraphs.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-02-q2",
          "type": "inference",
          "prompt": "The passage implies that physical continuity theory handles the branching thought experiment 'straightforwardly' because:",
          "options": [
            {
              "id": "A",
              "text": "It denies that psychological continuity exists at all"
            },
            {
              "id": "B",
              "text": "It can simply designate whichever candidate remains physically continuous with the original as the real successor, without needing to adjudicate between rival psychological chains"
            },
            {
              "id": "C",
              "text": "It requires that both candidate successors be treated as equally real"
            },
            {
              "id": "D",
              "text": "It has never been applied to any thought experiment involving branching"
            },
            {
              "id": "E",
              "text": "It denies that gradual replacement ever occurs"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: physical continuity theories 'handle straightforwardly by simply designating the physically continuous candidate as the real successor', unlike psychological continuity theory's resulting difficulty.",
          "difficulty": "hard"
        },
        {
          "question_id": "p05-02-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's branching thought experiment functions to:",
          "options": [
            {
              "id": "A",
              "text": "Prove that psychological continuity theory is entirely without merit"
            },
            {
              "id": "B",
              "text": "Identify a specific case, distinct from ordinary gradual replacement, in which psychological continuity theory faces a difficulty that physical continuity theory does not"
            },
            {
              "id": "C",
              "text": "Show that no theory of personal identity has ever been proposed"
            },
            {
              "id": "D",
              "text": "Support psychological continuity theory over physical continuity theory"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated argument about artificial intelligence ethics"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is a targeted counterexample identifying a specific structural weakness (arbitrary privileging between equally continuous branches), not a wholesale rejection of the theory (A) or support for it (D).",
          "difficulty": "hard"
        },
        {
          "question_id": "p05-02-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the passage, 'substrate' most nearly refers to:",
          "options": [
            {
              "id": "A",
              "text": "A person's moral character specifically"
            },
            {
              "id": "B",
              "text": "The underlying physical or informational medium in which a person's psychological states are realised"
            },
            {
              "id": "C",
              "text": "A legal document establishing identity"
            },
            {
              "id": "D",
              "text": "A type of neural interface technology that does not yet exist"
            },
            {
              "id": "E",
              "text": "A synonym for psychological continuity itself"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage uses 'substrate' to refer to what physically or informationally underlies and generates psychological states, whether biological neurons or artificial equivalents, matching B.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p05-03",
      "topic": "Consequentialism versus deontology in public health mandates",
      "word_count": 360,
      "text": "Public health mandates, compulsory vaccination, quarantine orders, mask requirements during infectious outbreaks, are typically justified on consequentialist grounds: the aggregate reduction in illness and death across the population outweighs the cost to individual liberty that compulsion imposes, a calculation that becomes more favourable to mandates as the severity and transmissibility of the relevant disease increases. This framework treats individual autonomy as one consideration among others to be weighed against aggregate welfare, rather than as a constraint that resists being outweighed regardless of how favourable the aggregate calculation turns out to be.\n\nDeontological objections to this framework do not typically dispute the consequentialist calculation itself, that mandates reduce aggregate harm, but argue that certain interests, bodily autonomy prominent among them, function as constraints on permissible state action rather than as inputs to be weighed against other goods in an aggregate sum, meaning that even a policy that reliably produces better aggregate outcomes can be impermissible if it involves the state compelling a specific bodily intervention without the individual's genuine consent, since some choices about one's own body are held to be the individual's alone regardless of the stakes involved for others.\n\nThe sharpest form of this disagreement emerges in cases where the aggregate benefit is very large and well-established, a highly transmissible, often fatal disease for which a mandate would prevent large numbers of deaths, since this is precisely the case in which the consequentialist calculation is strongest and the deontological constraint, if genuinely absolute rather than merely a strong presumption capable of being outweighed in extreme cases, would nonetheless prohibit compulsion. Most deontological theories in practice adopt a threshold version of the constraint, treating bodily autonomy as resistant to being outweighed by ordinary or moderate aggregate gains but not as literally absolute regardless of stakes, a position that avoids the most counterintuitive implications of an absolute constraint while still preserving deontology's core commitment that autonomy is not simply one more quantity to be summed alongside others in the ordinary case.",
      "questions": [
        {
          "question_id": "p05-03-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Consequentialist and deontological approaches to public health mandates agree entirely on when compulsion is justified."
            },
            {
              "id": "B",
              "text": "Deontological objections to public health mandates treat bodily autonomy as a constraint rather than a weighable input, and most such theories adopt a threshold version of this constraint to avoid the counterintuitive implications of treating it as absolute."
            },
            {
              "id": "C",
              "text": "All public health mandates are morally impermissible regardless of their benefits."
            },
            {
              "id": "D",
              "text": "Consequentialist calculations always favour the least restrictive public health policy available."
            },
            {
              "id": "E",
              "text": "Deontological theories dispute the empirical claim that mandates reduce aggregate harm."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures the passage's core distinction and its concluding point about the threshold version of the constraint, directly ruling out E, which the second paragraph explicitly denies.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-03-q2",
          "type": "inference",
          "prompt": "The passage implies that deontological objections to public health mandates are distinct from disagreements about consequentialist calculation because they:",
          "options": [
            {
              "id": "A",
              "text": "Dispute whether mandates actually reduce aggregate illness and death"
            },
            {
              "id": "B",
              "text": "Argue that bodily autonomy functions as a constraint on permissible action rather than as one factor to be weighed against aggregate welfare"
            },
            {
              "id": "C",
              "text": "Claim that no disease has ever been sufficiently severe to justify a mandate"
            },
            {
              "id": "D",
              "text": "Deny that individual liberty has any moral significance whatsoever"
            },
            {
              "id": "E",
              "text": "Apply only to quarantine orders and never to vaccination"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: deontological objections 'do not typically dispute the consequentialist calculation itself... but argue that certain interests... function as constraints on permissible state action rather than as inputs to be weighed.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-03-q3",
          "type": "logical_structure",
          "prompt": "The discussion of a 'threshold version' of the deontological constraint in the final paragraph functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that deontological theories have entirely abandoned any concern for bodily autonomy"
            },
            {
              "id": "B",
              "text": "Explain how most deontological theories avoid the most counterintuitive implications of an absolute constraint while still preserving their core commitment"
            },
            {
              "id": "C",
              "text": "Prove that consequentialism is the only coherent moral framework"
            },
            {
              "id": "D",
              "text": "Argue that all public health mandates should be abolished regardless of severity"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated argument about vaccine manufacturing"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explicitly frames the threshold version as a position that 'avoids the most counterintuitive implications of an absolute constraint while still preserving deontology's core commitment.'",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p05-04",
      "topic": "The problem of induction and predictive policing",
      "word_count": 365,
      "text": "David Hume's problem of induction observes that inferring future patterns from past observations, the sun will rise tomorrow because it always has, cannot be logically justified without already assuming the very principle, that the future will resemble the past, that the inference is supposed to establish, since any argument for that assumption based on past experience of the future resembling the past is itself an inductive argument presupposing the conclusion it aims to prove. Predictive policing, which allocates police resources to locations and individuals statistically associated with past crime, inherits a version of this problem in a practically consequential form.\n\nThe specific difficulty is not merely Hume's abstract worry about induction in general, since some degree of inductive reasoning is unavoidable in any practical domain and society does not grind to a halt over the philosophical problem of induction, but a more concrete version concerning what past crime data actually measures. Recorded crime data reflects not the true underlying distribution of criminal activity but the distribution of policing activity itself, since crime can only be recorded where it is detected, and detection rates vary systematically with how heavily an area is already policed, meaning areas that received more policing in the past generate more recorded crime, which then justifies allocating more policing to those same areas in the future, a feedback loop that can amplify an initial, possibly arbitrary or biased, distribution of enforcement rather than genuinely tracking where crime is most prevalent.\n\nThis creates a problem distinct from ordinary predictive inaccuracy, since the tool can be internally consistent and statistically well-calibrated to its own training data while still reproducing and entrenching whatever pattern of enforcement generated that data in the first place, a self-confirming loop that resists correction through the tool's own internal statistical machinery, because every additional round of policing generates additional confirming data for the same locations regardless of whether the underlying rate of criminal activity in those locations genuinely differs from elsewhere. Breaking the loop requires data on offending independent of enforcement intensity, victimisation surveys, self-report studies, which are considerably harder to collect systematically than the enforcement-generated data the predictive tools were originally built on, meaning the correction the problem requires is not simply a better algorithm applied to the same underlying data.",
      "questions": [
        {
          "question_id": "p05-04-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Predictive policing tools are simply mathematically incorrect and contain calculation errors."
            },
            {
              "id": "B",
              "text": "Recorded crime data reflects policing intensity as much as underlying crime, creating a self-confirming feedback loop that predictive policing's own statistical machinery cannot correct, requiring independent data sources instead."
            },
            {
              "id": "C",
              "text": "The problem of induction proves that no predictive tool of any kind can ever be justified."
            },
            {
              "id": "D",
              "text": "Predictive policing tools have never been statistically well-calibrated to their training data."
            },
            {
              "id": "E",
              "text": "Victimisation surveys are easier to collect than enforcement-generated data."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's central diagnostic claim, developed across the second and third paragraphs, and directly contradicts D and E, which the passage's own claims rule out.",
          "difficulty": "hard"
        },
        {
          "question_id": "p05-04-q2",
          "type": "inference",
          "prompt": "The passage implies that a predictive policing tool can be 'statistically well-calibrated' to its training data while still being problematic because:",
          "options": [
            {
              "id": "A",
              "text": "Calibration to enforcement-generated data does not guarantee that the data reflects the true underlying distribution of criminal activity"
            },
            {
              "id": "B",
              "text": "Statistical calibration is always mathematically impossible to achieve"
            },
            {
              "id": "C",
              "text": "The tool must be recalibrated daily to remain accurate"
            },
            {
              "id": "D",
              "text": "Calibration only applies to victimisation surveys, never to enforcement data"
            },
            {
              "id": "E",
              "text": "No predictive tool has ever been tested for calibration"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is the passage's key distinction: the tool 'can be internally consistent and statistically well-calibrated to its own training data while still reproducing and entrenching whatever pattern of enforcement generated that data in the first place.'",
          "difficulty": "hard"
        },
        {
          "question_id": "p05-04-q3",
          "type": "logical_structure",
          "prompt": "The passage's distinction between 'Hume's abstract worry about induction in general' and the 'more concrete version' facing predictive policing functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that Hume's problem of induction has no relevance to predictive policing whatsoever"
            },
            {
              "id": "B",
              "text": "Narrow the passage's focus from a general philosophical problem to a specific, practically consequential mechanism affecting crime data"
            },
            {
              "id": "C",
              "text": "Prove that all inductive reasoning should be abandoned in every practical domain"
            },
            {
              "id": "D",
              "text": "Argue that society has already solved the philosophical problem of induction"
            },
            {
              "id": "E",
              "text": "Undermine the passage's central argument about feedback loops"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This move explicitly narrows the discussion, stating the relevant difficulty is 'not merely Hume's abstract worry... but a more concrete version concerning what past crime data actually measures.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-04-q4",
          "type": "strengthen_weaken",
          "prompt": "Which finding would most directly strengthen the passage's claim that predictive policing data reflects enforcement intensity rather than true underlying crime distribution?",
          "options": [
            {
              "id": "A",
              "text": "An independent victimisation survey finds crime rates in a heavily policed area are statistically similar to a comparably sized, lightly policed area, despite the heavily policed area generating far more recorded crime."
            },
            {
              "id": "B",
              "text": "A study finds predictive policing tools are highly accurate at predicting where recorded crime will occur next."
            },
            {
              "id": "C",
              "text": "A survey finds public support for predictive policing has increased over the past decade."
            },
            {
              "id": "D",
              "text": "A study finds police officers spend most of their time on patrol rather than paperwork."
            },
            {
              "id": "E",
              "text": "A report finds predictive policing software is used in several countries."
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is precisely the kind of independent, enforcement-independent evidence the passage says is needed to break the loop: a mismatch between actual crime (via victimisation survey) and recorded crime would confirm that recorded data reflects policing intensity rather than true crime distribution.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p05-05",
      "topic": "Sunk cost reasoning in infrastructure policy",
      "word_count": 350,
      "text": "The sunk cost fallacy describes the tendency to continue investing in a project because of resources already committed to it, rather than basing the decision to continue solely on the project's expected future costs and benefits, since money, time, and effort already spent cannot be recovered regardless of what is decided going forward and should, in principle, play no role in a rational decision about whether to continue. Large infrastructure projects, a partially built rail line facing cost overruns, a stalled dam project with a ballooning budget, present the sunk cost fallacy in an unusually consequential form, since abandoning a partially completed project can appear to waste enormous prior investment, creating strong psychological and political pressure to continue even where an honest reassessment of remaining costs against remaining benefits would favour cancellation.\n\nApplying the textbook sunk cost principle cleanly to infrastructure decisions, however, requires a distinction the simple fallacy framing sometimes glosses over: the resources already spent are irrelevant to the decision, but the physical and informational assets those resources purchased are not, since a half-completed rail line has real option value, existing tunnels, land already acquired, engineering studies already completed, that reduces the cost of completing the project relative to the cost of starting an equivalent project from nothing, meaning the correct comparison is not 'complete the project' versus 'abandon it and lose the sunk cost' but 'the remaining cost of completing the project, given the assets already in place' versus 'the cost and benefit of alternative uses of that remaining budget.'\n\nThis distinction matters practically because it means correctly avoiding the sunk cost fallacy does not automatically favour cancellation, as a crude application of the principle might suggest, nor does it automatically favour continuation, as defenders of a troubled project might argue by conflating genuine remaining option value with an appeal to prior investment; it requires an honest, asset-adjusted reassessment of remaining costs and benefits that can, depending on the specific numbers involved, favour either continuing or cancelling, with the fallacy consisting specifically in treating the size of the original, irrecoverable investment itself as a reason for continuing, independent of what that investment now enables going forward.",
      "questions": [
        {
          "question_id": "p05-05-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Infrastructure projects should always be cancelled once cost overruns occur."
            },
            {
              "id": "B",
              "text": "Correctly avoiding the sunk cost fallacy in infrastructure decisions requires distinguishing irrelevant prior spending from the real remaining option value of assets already in place, a distinction that can favour either continuation or cancellation depending on the specific numbers."
            },
            {
              "id": "C",
              "text": "Infrastructure projects should always be completed once construction has begun, regardless of cost."
            },
            {
              "id": "D",
              "text": "Sunk costs are always relevant to rational decision-making about whether to continue a project."
            },
            {
              "id": "E",
              "text": "Engineering studies and land acquisition have no value once a project has stalled."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion in the final paragraph, correctly avoiding the false implication that eschewing the sunk cost fallacy always favours one particular outcome, ruling out both A and C.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-05-q2",
          "type": "inference",
          "prompt": "The passage implies that a half-completed rail line's existing tunnels and land acquisition are relevant to the completion decision because they:",
          "options": [
            {
              "id": "A",
              "text": "Represent sunk costs that should be ignored entirely"
            },
            {
              "id": "B",
              "text": "Constitute real option value that reduces the remaining cost of completing the project relative to starting an equivalent project from nothing"
            },
            {
              "id": "C",
              "text": "Have no bearing whatsoever on the remaining cost of completion"
            },
            {
              "id": "D",
              "text": "Automatically make cancellation the correct decision"
            },
            {
              "id": "E",
              "text": "Are identical in value to the original amount spent to create them"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the second paragraph: these assets 'reduce the cost of completing the project relative to the cost of starting an equivalent project from nothing' — this is option value, not a sunk cost to be ignored (A).",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-05-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's discussion of defenders who conflate 'genuine remaining option value with an appeal to prior investment' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that continuing a troubled project is always the correct decision"
            },
            {
              "id": "B",
              "text": "Warn against a second, opposite misapplication of the sunk cost principle, in which continuation is defended using reasoning that sounds like the option-value point but is actually a disguised sunk cost appeal"
            },
            {
              "id": "C",
              "text": "Prove that option value never actually exists in real infrastructure projects"
            },
            {
              "id": "D",
              "text": "Concede that the sunk cost fallacy has no practical relevance to policy"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated argument about construction industry regulation"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This identifies a specific way the option-value distinction can itself be misused to disguise a sunk cost appeal as something more defensible, a distinct pitfall from the crude cancellation bias discussed earlier.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p05-06",
      "topic": "Federalism versus centralisation of power",
      "word_count": 358,
      "text": "Federal systems divide governing authority between a central government and constituent regional units, each possessing genuine, constitutionally protected authority over specified matters rather than authority merely delegated at the centre's discretion. Advocates defend the arrangement on grounds distinct from mere administrative convenience: federalism allows policy experimentation across jurisdictions, since a policy tried in one region and found to fail can be abandoned without having been imposed nationally, and regional units closer to local conditions may design policy better suited to circumstances a distant central government cannot observe as precisely.\n\nCritics of extensive federalism point to a specific cost this experimentation benefit does not offset: policy fragmentation across regional boundaries can undermine the very coordination federalism's efficiency case for centralisation would otherwise favour in domains, environmental regulation affecting a shared river system, public health measures during a fast-spreading epidemic, where the relevant harms and benefits do not respect the administrative boundaries the federal structure has drawn. A river that flows through several jurisdictions can be polluted by any upstream regional government regardless of how strict the pollution controls are in downstream jurisdictions bearing the consequences, and no purely regional government has the authority or incentive to internalise costs it imposes entirely on jurisdictions outside its own electorate.\n\nThe practical resolution most federal systems adopt is neither full centralisation nor full regional autonomy but a variable division that assigns authority based on the geographic scope of the relevant externality: matters whose costs and benefits are genuinely local, land use planning, local policing priorities, remain with regional units, while matters whose effects cross regional boundaries, interstate trade, national environmental standards, shared water and air systems, are assigned to the centre or to inter-regional coordinating bodies specifically because the experimentation benefit that justifies regional autonomy in genuinely local matters does not extend to matters where one region's policy choice directly imposes costs on residents of another region who had no voice in making it.",
      "questions": [
        {
          "question_id": "p05-06-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Federalism should be abolished entirely in favour of full centralisation."
            },
            {
              "id": "B",
              "text": "Most federal systems resolve the tension between experimentation benefits and coordination costs by assigning authority based on the geographic scope of the relevant externality, keeping genuinely local matters regional while centralising matters with cross-boundary effects."
            },
            {
              "id": "C",
              "text": "Regional governments always have both the authority and incentive to address costs imposed on neighbouring jurisdictions."
            },
            {
              "id": "D",
              "text": "Policy experimentation provides no genuine benefit under any federal arrangement."
            },
            {
              "id": "E",
              "text": "Environmental regulation should always be handled exclusively at the regional level."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion in the final paragraph, describing the practical resolution most federal systems actually adopt, and directly contradicting C, which the second paragraph explicitly denies.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-06-q2",
          "type": "inference",
          "prompt": "The passage implies that an upstream regional government has little incentive to control pollution affecting downstream jurisdictions because:",
          "options": [
            {
              "id": "A",
              "text": "Pollution control is always more expensive upstream than downstream"
            },
            {
              "id": "B",
              "text": "The costs of the pollution fall on residents of another jurisdiction who are not part of the upstream government's own electorate"
            },
            {
              "id": "C",
              "text": "Rivers never cross more than one jurisdiction's boundary"
            },
            {
              "id": "D",
              "text": "Downstream jurisdictions always have stricter pollution controls than upstream ones"
            },
            {
              "id": "E",
              "text": "Federal systems prohibit any regional government from regulating pollution"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: 'no purely regional government has the authority or incentive to internalise costs it imposes entirely on jurisdictions outside its own electorate.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-06-q3",
          "type": "logical_structure",
          "prompt": "The passage's overall structure can best be described as:",
          "options": [
            {
              "id": "A",
              "text": "A one-sided argument entirely in favour of centralisation"
            },
            {
              "id": "B",
              "text": "Presenting federalism's genuine benefit, identifying a specific limitation to that benefit, and then describing the practical compromise most systems adopt to address it"
            },
            {
              "id": "C",
              "text": "A purely historical account with no evaluative content"
            },
            {
              "id": "D",
              "text": "A rejection of the concept of externalities as irrelevant to governance"
            },
            {
              "id": "E",
              "text": "An argument that experimentation benefits always outweigh coordination costs"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This accurately describes the passage's three-part structure across its three paragraphs, avoiding the one-sidedness of A and E.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-06-q4",
          "type": "inference",
          "prompt": "The passage implies that land use planning remains at the regional level in most federal systems primarily because:",
          "options": [
            {
              "id": "A",
              "text": "Its costs and benefits are genuinely local rather than crossing regional boundaries"
            },
            {
              "id": "B",
              "text": "It is impossible to regulate at any level of government"
            },
            {
              "id": "C",
              "text": "National governments have never had any interest in land use policy"
            },
            {
              "id": "D",
              "text": "It generates the same kind of cross-boundary externality as river pollution"
            },
            {
              "id": "E",
              "text": "Regional governments have no authority over any local matters"
            }
          ],
          "correct_option_id": "A",
          "explanation": "The passage explicitly categorises land use planning among 'matters whose costs and benefits are genuinely local', distinguishing it from cross-boundary matters like shared water systems.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p05-07",
      "topic": "Intellectual property and open-source software",
      "word_count": 362,
      "text": "Copyright and patent protection for software rest on the standard intellectual property justification: creators need a temporary legal monopoly to recoup development costs and profit from their work, without which the incentive to invest in costly software development would diminish, reducing the overall supply of innovation available to society. Open-source software, released under licences that permit free use, modification, and redistribution, appears to directly contradict this incentive story, since open-source projects, some of enormous scale and technical sophistication, are produced and maintained without the exclusive commercial monopoly the standard justification treats as necessary.\n\nThe apparent contradiction dissolves once the actual incentive structure behind open-source development is examined rather than assumed away. Some open-source contribution is genuinely unpaid, motivated by reputation within a technical community, the intrinsic satisfaction of solving a difficult problem, or ideological commitment to open software, incentives that operate independently of, and were never predicted or precluded by, the standard intellectual property justification, which addresses only one possible incentive structure among several that can sustain costly creative effort. A very substantial share of open-source development, however, particularly for large, foundational projects that underpin significant commercial infrastructure, is directly funded by companies that rely on the software commercially, employing engineers specifically to maintain and improve open-source tools their own products depend on, a business model in which the software itself remains freely available while the company profits from complementary services, support contracts, and its own downstream commercial products built using the freely available tool.\n\nThis mixed picture complicates rather than refutes the standard intellectual property justification: it shows that exclusive monopoly is one mechanism, not the only mechanism, capable of sustaining costly software development, and that which mechanism predominates in a given case depends on factors including whether complementary revenue streams are available to capture value from software that is not itself sold directly, a condition that holds for some categories of software, foundational infrastructure tools used by many downstream commercial products, considerably more reliably than for others, such as standalone consumer applications with no obvious complementary product to monetise once the software itself is given away for free.",
      "questions": [
        {
          "question_id": "p05-07-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "The standard intellectual property justification for software has been completely refuted by the existence of open-source software."
            },
            {
              "id": "B",
              "text": "Open-source software's existence complicates rather than refutes the standard intellectual property justification, showing that exclusive monopoly is one mechanism among several capable of sustaining development, with the availability of complementary revenue determining which mechanism predominates."
            },
            {
              "id": "C",
              "text": "All software development is entirely unpaid and motivated purely by reputation."
            },
            {
              "id": "D",
              "text": "No company has ever funded open-source software development."
            },
            {
              "id": "E",
              "text": "Standalone consumer applications are always more profitable than foundational infrastructure tools."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion in the final paragraph, correctly framing the relationship as complication rather than refutation, and directly contradicting C and D, which the passage's own account rules out.",
          "difficulty": "hard"
        },
        {
          "question_id": "p05-07-q2",
          "type": "inference",
          "prompt": "The passage implies that companies funding open-source development of foundational infrastructure tools do so primarily because:",
          "options": [
            {
              "id": "A",
              "text": "They receive a legal monopoly over the software they help fund"
            },
            {
              "id": "B",
              "text": "They can capture value through complementary revenue streams, such as support contracts and downstream commercial products, even though the software itself is freely available"
            },
            {
              "id": "C",
              "text": "They are legally required to fund open-source projects"
            },
            {
              "id": "D",
              "text": "Open-source licences prohibit any commercial use of the software"
            },
            {
              "id": "E",
              "text": "Standalone consumer applications generate more complementary revenue than infrastructure tools"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's described business model: profit comes 'from complementary services, support contracts, and its own downstream commercial products built using the freely available tool', not from a monopoly over the tool itself.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-07-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's distinction between 'foundational infrastructure tools' and 'standalone consumer applications' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that all categories of software are equally suited to open-source, non-monopoly development"
            },
            {
              "id": "B",
              "text": "Explain why the alternative incentive mechanism, complementary revenue, holds more reliably for some categories of software than for others"
            },
            {
              "id": "C",
              "text": "Prove that consumer applications should never be released as open-source"
            },
            {
              "id": "D",
              "text": "Argue that infrastructure tools have no commercial value whatsoever"
            },
            {
              "id": "E",
              "text": "Undermine the passage's central argument about mixed incentive structures"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This distinction is used specifically to qualify and refine the passage's claim about which mechanism predominates, showing this depends on 'whether complementary revenue streams are available' — a variable condition, not a uniform one (A).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p05-08",
      "topic": "Moral status of future generations in pension policy",
      "word_count": 355,
      "text": "Pay-as-you-go pension systems, in which current workers' contributions directly fund current retirees' benefits rather than being individually saved and invested, function as an implicit intergenerational contract: each working generation supports the generation before it, on the understanding, rarely made explicit in the systems themselves, that the following generation will do the same for them in turn. This arrangement functioned smoothly for decades under demographic conditions, a growing working-age population relative to retirees, that made each generation's contribution burden manageable, but ageing populations in many countries have inverted this ratio, meaning the implicit contract now asks a shrinking working generation to support a growing retired one at a burden per worker considerably higher than what earlier generations bore.\n\nThe resulting policy dilemma cannot be resolved simply by asking what is fair to the currently retired, who reasonably relied on a system that existed when they made their own contributions decades earlier and structured other financial decisions, housing, savings, retirement timing, around a reasonable expectation that the system's terms would roughly hold, nor simply by asking what is fair to current workers, who did not choose the demographic conditions they now face and who will, on current trajectories, bear a proportionally larger burden while facing greater uncertainty about whether an equivalent system will exist to support them when their own turn to retire arrives. Any specific reform, raising the retirement age, increasing worker contributions, reducing benefit levels, redistributes this burden across generations rather than eliminating it, since the total resources required to support a given retired population from a smaller working population do not disappear simply because the formula used to divide the burden changes.\n\nWhat makes the dilemma genuinely difficult, rather than merely politically unpopular to resolve, is that no generation involved chose the demographic trend causing the imbalance, yet every proposed distribution of the resulting burden necessarily favours some generations over others, meaning the debate is not actually about identifying a solution that avoids imposing cost on anyone, since no such solution exists once the demographic shift has already occurred, but about which principle, degree of prior reliance, capacity to absorb the cost, proportional contribution already made, should govern an unavoidable redistribution of a burden that must land somewhere.",
      "questions": [
        {
          "question_id": "p05-08-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "There exists a pension reform that would avoid imposing any cost on any generation."
            },
            {
              "id": "B",
              "text": "Because no cost-free solution exists once the demographic shift has occurred, pension reform debates are actually about which principle should govern an unavoidable redistribution of burden across generations, none of which chose the underlying demographic trend."
            },
            {
              "id": "C",
              "text": "Pay-as-you-go pension systems have never functioned successfully in any country."
            },
            {
              "id": "D",
              "text": "Current retirees bear sole responsibility for the demographic imbalance affecting pension systems."
            },
            {
              "id": "E",
              "text": "Current workers should bear the entire burden of demographic change with no adjustment to retiree benefits."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion in the final paragraph, directly contradicting A, which the passage explicitly denies is available as an option.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-08-q2",
          "type": "inference",
          "prompt": "The passage implies that fairness to current retirees is difficult to weigh against fairness to current workers because:",
          "options": [
            {
              "id": "A",
              "text": "Retirees never made any financial decisions based on the pension system's expected terms"
            },
            {
              "id": "B",
              "text": "Retirees reasonably relied on the system's terms in structuring major life decisions, while workers did not choose the demographic conditions they now face and bear a proportionally larger burden"
            },
            {
              "id": "C",
              "text": "Current workers have no legitimate claim to fair treatment under any pension system"
            },
            {
              "id": "D",
              "text": "The demographic shift has had no actual effect on the burden per worker"
            },
            {
              "id": "E",
              "text": "Pay-as-you-go systems have always required identical contribution levels regardless of demographics"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly in the second paragraph, presenting both generations' legitimate but competing claims without resolving which should take priority.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-08-q3",
          "type": "logical_structure",
          "prompt": "The passage's final paragraph, distinguishing the debate from a search for a 'solution that avoids imposing cost on anyone', functions to:",
          "options": [
            {
              "id": "A",
              "text": "Reframe the policy debate as a question of which distributive principle should govern an unavoidable burden, rather than a search for a cost-free alternative"
            },
            {
              "id": "B",
              "text": "Prove that the demographic shift described earlier never actually occurred"
            },
            {
              "id": "C",
              "text": "Argue that pension reform is impossible and should not be attempted"
            },
            {
              "id": "D",
              "text": "Concede that current retirees deserve no consideration whatsoever"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated argument about healthcare funding"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is the passage's explicit reframing move, clarifying what the underlying disagreement is actually about once a cost-free option is ruled out as unavailable.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-08-q4",
          "type": "vocabulary_in_context",
          "prompt": "As used in the first paragraph, 'implicit contract' most nearly refers to:",
          "options": [
            {
              "id": "A",
              "text": "A legally binding written agreement signed by every worker"
            },
            {
              "id": "B",
              "text": "An unstated, mutual expectation that each working generation will support the previous one, trusting the next generation will do the same for them"
            },
            {
              "id": "C",
              "text": "A formal treaty between different countries about pension policy"
            },
            {
              "id": "D",
              "text": "A contract that has been explicitly written into pension legislation in every country"
            },
            {
              "id": "E",
              "text": "An agreement that applies only to the currently retired generation"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage describes this as an understanding 'rarely made explicit in the systems themselves', an unstated mutual expectation across generations, matching B rather than a formal written agreement (A or D).",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p05-09",
      "topic": "Deterrence theory and capital punishment",
      "word_count": 358,
      "text": "Deterrence-based justifications for capital punishment rest on the empirical claim that the threat of execution reduces the incidence of capital crimes by more than a lesser maximum penalty, such as life imprisonment, would achieve, a claim that has been the subject of extensive econometric research producing notoriously inconsistent results: some studies find a measurable deterrent effect, some find none, and some find effects that vary considerably depending on the specific statistical methodology and control variables chosen by different researchers examining overlapping data.\n\nThis empirical disagreement is not merely a matter of insufficient data collection that better studies could eventually resolve, but reflects a genuine methodological difficulty specific to this question: capital punishment is not randomly assigned across jurisdictions or time periods in a way that would allow researchers to cleanly isolate its effect from the many other factors, economic conditions, policing intensity, demographic change, that simultaneously affect homicide rates and that differ systematically between jurisdictions that do and do not retain the death penalty, meaning any observed correlation between capital punishment and homicide rates is vulnerable to confounding that is difficult to fully rule out using the observational data that is, in practice, the only data available for a policy that cannot ethically or practically be tested through randomised experiment.\n\nThe practical consequence of this persistent empirical uncertainty is that deterrence cannot, at present, function as a settled premise on which a confident policy argument for or against capital punishment can be built, since a policy debate that requires resolving contested econometric questions researchers themselves have not resolved after decades of study is not well served by either side treating deterrence as established fact. This does not mean deterrence is irrelevant to the debate, since if a robust deterrent effect were eventually demonstrated it would meaningfully strengthen the case for capital punishment on consequentialist grounds, and if robustly disproven it would remove one of the strongest arguments in its favour, but it does mean that arguments for or against capital punishment that currently depend heavily on a confident deterrence claim in either direction are resting on considerably less settled empirical ground than their confident framing typically suggests.",
      "questions": [
        {
          "question_id": "p05-09-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Capital punishment has been proven to have no deterrent effect whatsoever."
            },
            {
              "id": "B",
              "text": "The empirical question of capital punishment's deterrent effect remains genuinely unresolved due to a specific methodological difficulty, meaning confident arguments on either side that depend heavily on a settled deterrence claim rest on less solid ground than they suggest."
            },
            {
              "id": "C",
              "text": "Capital punishment has been conclusively shown to strongly deter capital crimes."
            },
            {
              "id": "D",
              "text": "Deterrence is entirely irrelevant to the capital punishment debate regardless of what future research shows."
            },
            {
              "id": "E",
              "text": "Randomised controlled trials of capital punishment have definitively settled the deterrence question."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion, and it directly contradicts A, C, and E, all of which the passage's account of persistent methodological uncertainty rules out.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-09-q2",
          "type": "inference",
          "prompt": "The passage implies that the inconsistency in deterrence research findings is primarily due to:",
          "options": [
            {
              "id": "A",
              "text": "Researchers being insufficiently skilled at collecting data"
            },
            {
              "id": "B",
              "text": "Capital punishment not being randomly assigned, making it difficult to isolate its effect from other factors that simultaneously affect homicide rates and differ systematically between jurisdictions"
            },
            {
              "id": "C",
              "text": "A complete absence of any data on homicide rates"
            },
            {
              "id": "D",
              "text": "Deliberate manipulation of results by researchers on one side of the debate"
            },
            {
              "id": "E",
              "text": "Homicide rates being identical across all jurisdictions regardless of policy"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly as 'a genuine methodological difficulty specific to this question', concerning non-random assignment and confounding factors, not a simple data quality issue (A).",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-09-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's statement that 'this does not mean deterrence is irrelevant' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Reverse the entire argument made in the second paragraph about methodological difficulty"
            },
            {
              "id": "B",
              "text": "Clarify that acknowledging current uncertainty is different from claiming deterrence could never matter to the debate if the evidence became clearer"
            },
            {
              "id": "C",
              "text": "Concede that capital punishment definitely does deter capital crimes"
            },
            {
              "id": "D",
              "text": "Introduce an unrelated argument about the cost of capital trials"
            },
            {
              "id": "E",
              "text": "Undermine the passage's claim that current empirical evidence is inconsistent"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is a clarifying qualification distinguishing present uncertainty from permanent irrelevance, explicitly noting that future robust evidence in either direction 'would meaningfully strengthen' or 'remove' the relevant argument.",
          "difficulty": "medium"
        }
      ]
    },
    {
      "passage_id": "p05-10",
      "topic": "Public goods and market failure",
      "word_count": 350,
      "text": "Economists classify a good as a public good when it is both non-excludable, meaning it is impractical to prevent people who have not paid for it from using it, and non-rivalrous, meaning one person's use does not diminish its availability to others; national defence and street lighting are standard examples. Because a rational, self-interested individual has no incentive to pay for a good they will receive regardless of whether they contribute, private markets are predicted to systematically underprovide public goods relative to the socially optimal level, a conclusion economists refer to as the free-rider problem, and the standard remedy is public provision funded through compulsory taxation, which removes the option to free-ride by making payment mandatory regardless of individual willingness to contribute voluntarily.\n\nThe canonical historical example long used to illustrate this theory, that lighthouses could only ever be provided by government because ship owners could not practically be charged for a light visible to any passing vessel, has been complicated by economic historians who documented that many lighthouses in nineteenth-century Britain were in fact privately built and operated profitably, funded through harbour and port fees charged to ships that could be excluded from using nearby ports if they failed to pay, an enforcement mechanism that made the light's use effectively excludable in practice even though the light itself, once shining, was non-excludable to any vessel at sea in the strict technical sense the theory describes.\n\nThis historical complication does not refute the underlying free-rider logic, which remains sound as a description of what happens absent some enforcement mechanism capable of linking payment to use, but it does refine the theory's practical application: genuine public goods failures arise specifically where no such indirect enforcement mechanism, port fees, club membership, bundling with an excludable complementary good, is available to link payment to benefit, and the lighthouse case demonstrates that apparent non-excludability at the level of the good itself, the light shining at sea, does not always translate into non-excludability at the level of the broader commercial relationship within which the good is actually provided and consumed.",
      "questions": [
        {
          "question_id": "p05-10-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "The free-rider problem has been completely disproven by the lighthouse example."
            },
            {
              "id": "B",
              "text": "The lighthouse historical example refines rather than refutes free-rider theory, showing that apparent non-excludability at the level of a good itself does not always translate into non-excludability within the broader commercial relationship in which it is provided."
            },
            {
              "id": "C",
              "text": "All public goods can always be privately provided profitably without government involvement."
            },
            {
              "id": "D",
              "text": "National defence can be provided privately using the same mechanism as lighthouses."
            },
            {
              "id": "E",
              "text": "Non-rivalrous goods are always non-excludable as well."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion in the final paragraph, and it directly contradicts A and C, which the passage's own framing as 'refine' rather than 'refute' rules out.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-10-q2",
          "type": "inference",
          "prompt": "The passage implies that private lighthouse operators in nineteenth-century Britain were able to charge for a technically non-excludable light because:",
          "options": [
            {
              "id": "A",
              "text": "They could exclude non-paying ships from nearby ports through harbour and port fees, linking payment to a related, excludable service"
            },
            {
              "id": "B",
              "text": "They physically prevented non-paying ships from seeing the light"
            },
            {
              "id": "C",
              "text": "Government subsidies covered the entire cost of lighthouse construction"
            },
            {
              "id": "D",
              "text": "Ship owners voluntarily paid without any enforcement mechanism"
            },
            {
              "id": "E",
              "text": "The light was only visible to ships that had already paid in advance"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is stated directly: lighthouses were 'funded through harbour and port fees charged to ships that could be excluded from using nearby ports if they failed to pay' — an indirect exclusion mechanism, not physical exclusion from the light itself (B).",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-10-q3",
          "type": "logical_structure",
          "prompt": "The final paragraph's distinction between excludability 'at the level of the good itself' and 'at the level of the broader commercial relationship' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that the free-rider problem never applies to any real-world good"
            },
            {
              "id": "B",
              "text": "Explain precisely how the lighthouse case is compatible with, rather than a refutation of, the underlying free-rider logic"
            },
            {
              "id": "C",
              "text": "Prove that all public goods are, in fact, private goods"
            },
            {
              "id": "D",
              "text": "Argue that government provision of public goods should be abolished entirely"
            },
            {
              "id": "E",
              "text": "Undermine the passage's own central argument"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This distinction is the precise mechanism by which the passage reconciles the historical complication with the theory's continued soundness, matching its explicit statement that the complication 'does not refute the underlying free-rider logic.'",
          "difficulty": "hard"
        },
        {
          "question_id": "p05-10-q4",
          "type": "assumption",
          "prompt": "The passage's claim that 'genuine public goods failures arise specifically where no such indirect enforcement mechanism... is available' depends on which assumption?",
          "options": [
            {
              "id": "A",
              "text": "That all goods are non-rivalrous regardless of their excludability"
            },
            {
              "id": "B",
              "text": "That the presence or absence of an indirect enforcement mechanism, rather than the good's technical non-excludability alone, is the operative factor determining whether private provision is viable"
            },
            {
              "id": "C",
              "text": "That national defence can always be funded through port fees"
            },
            {
              "id": "D",
              "text": "That nineteenth-century Britain had no public goods of any kind"
            },
            {
              "id": "E",
              "text": "That free-rider theory has been completely abandoned by economists"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the refined claim the passage's argument depends on: it is the availability of an indirect enforcement mechanism, not technical non-excludability alone, that determines whether a genuine market failure occurs.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p05-11",
      "topic": "Confirmation bias in jury deliberation",
      "word_count": 355,
      "text": "Confirmation bias, the well-documented tendency to seek out, interpret, and recall information in ways that support a belief already held while discounting information that contradicts it, poses a specific structural risk to jury deliberation that differs from its risk in ordinary reasoning, because jurors typically form a tentative impression of guilt or innocence early in a trial, often before the defence has presented its full case, and confirmation bias predicts that subsequent evidence will then be processed in a manner that reinforces rather than genuinely tests that initial impression.\n\nThe risk is compounded by the sequential structure of a typical criminal trial, in which the prosecution presents its full case first, meaning jurors' initial impressions are disproportionately shaped by prosecution evidence before the defence has had any opportunity to respond, and confirmation bias predicts that jurors who have already formed a tentative view of guilt based on this initial, one-sided presentation will subsequently evaluate defence evidence more skeptically than they would have evaluated identical evidence had it been presented first, not because the defence evidence is objectively weaker but because it now must overcome an already-formed impression rather than contribute to a genuinely open initial assessment.\n\nProposed procedural responses, explicit judicial instructions warning jurors to withhold judgement until all evidence has been presented, are of limited effectiveness according to the available psychological research, since confirmation bias operates largely outside conscious awareness and is not reliably corrected simply by instructing people to try harder to avoid it, a pattern well documented across many other domains in which debiasing instructions alone have shown only modest and inconsistent effects. More structurally oriented proposals, requiring jurors to explicitly articulate the strongest possible case for the side they are currently inclined to disfavour before reaching a verdict, a technique with some experimental support for improving the balance of information processing in other decision-making contexts, remain largely untested specifically within the context of actual jury deliberation, meaning their promise as a remedy for this particular structural risk is, at present, considerably more theoretical than empirically demonstrated.",
      "questions": [
        {
          "question_id": "p05-11-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Confirmation bias has no effect on jury deliberation whatsoever."
            },
            {
              "id": "B",
              "text": "The sequential structure of criminal trials compounds confirmation bias's risk to jury deliberation, and while simple judicial instructions have shown limited effectiveness, more structural remedies remain largely untested in this specific context."
            },
            {
              "id": "C",
              "text": "Judicial instructions to withhold judgement have been proven highly effective at eliminating confirmation bias in jurors."
            },
            {
              "id": "D",
              "text": "The prosecution should always present its case after the defence to avoid bias."
            },
            {
              "id": "E",
              "text": "Confirmation bias operates entirely under conscious, deliberate control."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is the passage's explicit conclusion, directly contradicting C, which the passage explicitly states is not supported by the available research.",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-11-q2",
          "type": "inference",
          "prompt": "The passage implies that defence evidence presented after the prosecution's case may be evaluated more skeptically not because it is:",
          "options": [
            {
              "id": "A",
              "text": "Objectively weaker than prosecution evidence, but because it must overcome an already-formed impression rather than contribute to an open initial assessment"
            },
            {
              "id": "B",
              "text": "Always factually incorrect"
            },
            {
              "id": "C",
              "text": "Presented by a less experienced legal team"
            },
            {
              "id": "D",
              "text": "Legally inadmissible under standard trial procedure"
            },
            {
              "id": "E",
              "text": "Identical in content to the prosecution's evidence"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is stated directly: skepticism arises 'not because the defence evidence is objectively weaker but because it now must overcome an already-formed impression rather than contribute to a genuinely open initial assessment.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-11-q3",
          "type": "logical_structure",
          "prompt": "The passage's discussion of the 'argue the opposing case' technique in the final paragraph is notable because it:",
          "options": [
            {
              "id": "A",
              "text": "Is presented as a fully validated and proven solution to jury confirmation bias"
            },
            {
              "id": "B",
              "text": "Is presented as having some support in other decision-making contexts but as remaining largely untested specifically within jury deliberation"
            },
            {
              "id": "C",
              "text": "Is dismissed entirely as having no theoretical basis whatsoever"
            },
            {
              "id": "D",
              "text": "Is described as identical in effectiveness to judicial instructions"
            },
            {
              "id": "E",
              "text": "Is presented as a technique that has already been abandoned by all researchers"
            }
          ],
          "correct_option_id": "B",
          "explanation": "The passage explicitly qualifies this proposal as having 'some experimental support' elsewhere while remaining 'largely untested specifically within the context of actual jury deliberation' — a nuanced, not fully validated, endorsement.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "passage_id": "p05-12",
      "topic": "The demandingness objection to utilitarian ethics",
      "word_count": 362,
      "text": "Utilitarianism holds that an action is morally right to the extent that it maximises aggregate wellbeing, a principle that, applied consistently, appears to generate demands on individual conduct far exceeding what ordinary moral intuition treats as obligatory: if a modest donation to an effective charity could save a life at relatively low cost to the donor, strict utilitarian reasoning seems to require making that donation, and then the next one, and the one after that, for as long as any further donation would produce more aggregate wellbeing than the donor's retained resources would generate if spent on their own comfort, a conclusion that seems to leave no principled stopping point short of the donor reducing their own standard of living to somewhere near subsistence.\n\nThe demandingness objection holds that any moral theory generating conclusions this far removed from ordinary considered moral judgement has, in effect, failed a basic test that moral theories are supposed to meet: a theory whose implications are wildly at odds with settled intuitions about what morality can reasonably demand of ordinary people should be treated as having gone wrong somewhere, either in its foundational premises or in the derivation of demanding conclusions from those premises, rather than accepted as correct simply because its logical derivation from a plausible-sounding premise appears formally valid.\n\nUtilitarians have responded along two different lines that should not be conflated. One line accepts the demanding conclusion and argues that ordinary moral intuition is simply mistaken on this point, shaped by self-interest and social convention rather than by careful reflection, meaning the demandingness objection begs the question by treating intuition as a fixed standard theories must match rather than as one further input that can itself be revised in light of a compelling argument. The second line rejects the demanding conclusion while retaining a broadly utilitarian framework, typically by incorporating an agent-relative permission allowing individuals some latitude to weight their own interests and projects more heavily than strict impartial maximisation would allow, a modification that blunts the demandingness objection's force but at the cost of introducing exactly the kind of principled departure from pure aggregate maximisation that the original, undiluted utilitarian theory was designed to avoid.",
      "questions": [
        {
          "question_id": "p05-12-q1",
          "type": "main_idea",
          "prompt": "The passage's central argument is that:",
          "options": [
            {
              "id": "A",
              "text": "Utilitarianism has been completely and universally rejected by all philosophers due to the demandingness objection."
            },
            {
              "id": "B",
              "text": "Utilitarians respond to the demandingness objection along two distinct lines, one biting the bullet on demanding conclusions and one modifying the theory with agent-relative permissions, with the latter avoiding demandingness at the cost of departing from pure aggregate maximisation."
            },
            {
              "id": "C",
              "text": "Ordinary moral intuition is always a completely reliable guide to moral truth."
            },
            {
              "id": "D",
              "text": "No utilitarian has ever attempted to respond to the demandingness objection."
            },
            {
              "id": "E",
              "text": "Effective charitable donation has no relevance to utilitarian ethics."
            }
          ],
          "correct_option_id": "B",
          "explanation": "This captures the passage's presentation of the two distinct utilitarian responses without endorsing either, directly ruling out A and D, both contradicted by the passage's own account.",
          "difficulty": "hard"
        },
        {
          "question_id": "p05-12-q2",
          "type": "inference",
          "prompt": "According to the passage, the first utilitarian response to the demandingness objection argues that:",
          "options": [
            {
              "id": "A",
              "text": "The demandingness objection is entirely correct and utilitarianism should be abandoned"
            },
            {
              "id": "B",
              "text": "Ordinary moral intuition may itself be mistaken and should not be treated as a fixed standard theories must match"
            },
            {
              "id": "C",
              "text": "No moral theory has ever generated demanding conclusions"
            },
            {
              "id": "D",
              "text": "Charitable donation is morally irrelevant under any ethical theory"
            },
            {
              "id": "E",
              "text": "Agent-relative permissions should always be incorporated into utilitarian theory"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This is stated directly: this line 'argues that ordinary moral intuition is simply mistaken on this point... meaning the demandingness objection begs the question by treating intuition as a fixed standard.'",
          "difficulty": "medium"
        },
        {
          "question_id": "p05-12-q3",
          "type": "logical_structure",
          "prompt": "The final sentence's observation that the second response introduces 'exactly the kind of principled departure... the original... theory was designed to avoid' functions to:",
          "options": [
            {
              "id": "A",
              "text": "Show that the second response is a costless improvement to utilitarian theory"
            },
            {
              "id": "B",
              "text": "Identify a genuine cost or tension in the second response, even while presenting it as a way of avoiding the demandingness objection's force"
            },
            {
              "id": "C",
              "text": "Prove that the first response is entirely without merit"
            },
            {
              "id": "D",
              "text": "Argue that agent-relative permissions have no philosophical basis whatsoever"
            },
            {
              "id": "E",
              "text": "Introduce an unrelated argument about charitable giving statistics"
            }
          ],
          "correct_option_id": "B",
          "explanation": "This closing observation identifies a genuine internal tension in the second response, blunting the objection's force but at a real cost, rather than presenting it as costless (A) or dismissing the alternative (C).",
          "difficulty": "hard"
        },
        {
          "question_id": "p05-12-q4",
          "type": "inference",
          "prompt": "The passage implies that the demandingness objection itself rests on which claim?",
          "options": [
            {
              "id": "A",
              "text": "That a moral theory whose implications are wildly at odds with settled intuitions about what morality can reasonably demand should be treated as having gone wrong somewhere"
            },
            {
              "id": "B",
              "text": "That utilitarianism has never been defended by any philosopher"
            },
            {
              "id": "C",
              "text": "That charitable donation is always morally required regardless of cost"
            },
            {
              "id": "D",
              "text": "That ordinary moral intuition is infallible on every question"
            },
            {
              "id": "E",
              "text": "That agent-relative permissions are the only acceptable moral principle"
            }
          ],
          "correct_option_id": "A",
          "explanation": "This is the objection's core premise, stated directly in the second paragraph: a theory generating conclusions this removed from considered judgement 'has, in effect, failed a basic test that moral theories are supposed to meet.'",
          "difficulty": "medium"
        }
      ]
    }
  ]
}
];
