const tweetList = [
  {
    body: 'Excited to be a speaker for the public meeting on #AI on May 19. Info below: #PCAST Working Group on Generative AI Invites Public Input ',
    username: `drfeifei`,
  },
  {
    body: 'Facebookresearch released audiocraft!A PyTorch library for deep learning research on audio generation. It contains the code for MusicGen, a state-of-the-art controllable music generation LM for text-to-music.',
    username: `AssemblyAI`,
  },
  {
    body: 'This is a minimal code example you can use to run a local LLM to ask questions about your own documents.It uses LangChain, GPT4All, and Chroma. All you need to do is fill the DB with your documents (PDFs, Docs, HTML etc).',
    username: 'AssemblyAI',
  },
  {
    body: 'Voice box: can synthesize multiple voices from text, clean up speech, can use a voice recording to synthesize the same voice in another language, etc.From Meta AI.',
    username: 'ylecun',
  },
  {
    body: 'Overzealous spelling correctors on mobile devices be like:"neutral nets, such as convents trained with backdrop and stochastic gradient decent."What better place than a convent to do a cross validation?But working in a convent will not increase your CV dimension.',
    username: 'ylecun',
  },
  {
    body: `We all agree that we need to arrive at a consensus on a number of questions.I agree with @geoffreyhinton that LLM have *some* level of understanding and that it is misleading to say they are "just statistics." However, their understanding of the world is very superficial, in large part because they are trained purely on text.Systems that would learn how the world works from vision would have a much deeper understanding of reality.Second, auto-regressive LLM have very limited reasoning and planning abilities. I do not believe we can get anywhere close to human-level AI (even cat-level AI) without
    (1) learning world models from sensory inputs like video,(2) an architecture that can reason and plan (not just auto-regress).Now, if we have architectures that can plan, they will be *objective driven*: their planning will work by optimizing a set of objectives at inference time (not just training time).
These objectives can include guardrails that will make those system safe and subservient *even* if they end up having much better world models that humans.
Then, the problem becomes to design (or train) good objectives functions that will guarantee safety and efficiency.
It's a hard engineering problem, but not as hard as some have made it to be.`,
    username: 'ylecun',
  },
  {
    body: `1/The false and sensationalist coverage of the purported Air Force simulation where an AI-drone decided to kill an operator will be remembered as a highly regrettable episode of AI doomsaying hype. Lets be honest about what are, and what are not, real risks.2/Developers who’re shipping AI products do see real risks like bias, fairness, inaccuracies, job displacement, and are working to address them. Unrealistic hype distracts from the real problems. It also discourages people from entering AI and building things that help people.
    3/Here’s a Vice article that describes in more detail what happened.`,
    username: `AndrewYNg`,
  },
  {
    body: `1/Thrilled to announce: 3 new Generative AI courses!
* Building Systems with the ChatGPT API, with OpenAI’s 
@isafulf

* LangChain for LLM Application Development, with LangChain’s 
@hwchase17

* How Diffusion Models Work, by 
@realSharonZhou

Check them out: http://deeplearning.ai/short-courses/
2/Building Systems with the ChatGPT API: Go beyond individual prompts, and learn to build complex applications that use multiple API calls to an LLM. Also  learn to evaluate an LLM's outputs for safety and accuracy, and drive iterative improvements. https://learn.deeplearning.ai/chatgpt-building-system
3/LangChain for LLM Application Development: Learn this powerful open-source tool for building applications using LLMs, including memory for chatbots, Question answering over a doc, and an LLM agent that can decide what action to take next. https://learn.deeplearning.ai/langchain
4/How Diffusion Models Work: Learn the technical details of how diffusion models - which power Midjourney, DALL·E 2, and Stable Diffusion - work. You’ll also end up with working code to generate your own video game sprites in Jupyter! https://learn.deeplearning.ai/diffusion-models
5/All of these courses are free for a limited time, and each can be completed in around 1-1.5 hours. I hope you enjoy them. Also, please help me spread the word and encourage others to sign up too!`,
    username: `AndrewYNg`,
  },
  {
    body: `"Give me your tired, your poor, Your huddled masses yearning to breathe free," reads a poem on the Statue of Liberty. 🗽

Looking at the immigration chaos on the southern US border, I wish we can build a compassionate world that supports and lifts up anyone in need.
`,
    username: `AndrewYNg`,
  },
  {
    body: `The call for a 6 month moratorium on making AI progress beyond GPT-4 is a terrible idea.

I'm seeing many new applications in education, healthcare, food, ... that'll help many people. Improving GPT-4 will help. Lets balance the huge value AI is creating vs. realistic risks.`,
    username: `AndrewYNg`,
  },
  {
    body: `Good point François! 

We can make exciting progress with deep learning without hyping things up via tenuous connections to AGI.`,
    username: `AndrewYNg`,
  },
  {
    body: `Join me Tuesday to discuss Visual Prompting! Text prompting has revolutionized NLP: 
Traditional AI: Label -> Train -> Predict
Prompt based AI: Prompt -> Predict 

I’ll share early thoughts on taking this from text to vision w/Visual Prompting. RSVP here:`,
    username: `AndrewYNg`,
  },
  {
    body: `A new UN Climate Change report estimates we might be on track to 2.5°C of warming. It's time to seriously consider cooling down Earth by geoengineering using stratospheric aerosol injection, a solution in which AI will play a critical role`,
    username: `AndrewYNg`,
  },
  {
    body: `Very proud of my PhD student Alan Luo 
@ch1m1m0ry0
 for successfully defending his PhD thesis, using AI to help improve healthcare delivery. Thanks also to the committee 
@eadeli
 
@sanmikoyejo
 
@jiajunwu_cs
 
@kevin_schulman
 😍🤩🥳🎉🎊`,
    username: `drfeifei`,
  },
  {
    body: `Imagine Twitter existed when fire, steam engine, electricity, anesthesia & surgery, airplanes, and many other inventions happened - what kind of debates would we hear?🤣 At the eod, technologies are here to augment humanity. It’s our responsibility to use it wisely.
@StanfordHAI`,
    username: `drfeifei`,
  },
  {
    body: `.
@landay
 and 
@Rbaltman
, faculty leaders 
@StanfordHAI
, kicked off our Fall Conference called “AI in the loop: Humans in Charge”. “We worked really hard on this title. I hope you see the irony.” Said Russ.“Be careful with copilot code generation assistance. We need people to understand their codes.” - Don Knuth, Turing Award winner (1974), luminary of 
@stanford
 CS dept, and a dear friend, at 
@StanfordHAI
 Fall Conf
 Another wonderful panel by 
@msbernst
 
@stanfordmav
 
@adapperprof
 
@landay
 
@StanfordHAI
 Fall Conf today. “AI optimizes for 100% correctness; HCI optimizes for 100% user satisfaction. What happens when they’re in conflict?”`,
    username: `drfeifei`,
  },
  {
    body: `I had the honor to deliver the Tanner Lecture 
@Yale
 on Oct 2022. With all the excitement and concerns of #AI nowadays, it’s so important to focus on the human-centered approach to AI. Talk link: What We See and What We Value: AI with a Human Perspective https://youtu.be/aWwNXRS3wBE 1
 I’m very grateful to 
@Yale
 President 
@SaloveyPeter
 and 
@YaleWHC
 for hosting this talk. It means a lot to me to deliver this lecture at the place Dr. Grace Hopper, one of the greatest pioneering female computer scientist, received her PhD. https://en.m.wikipedia.org/wiki/Tanner_Lectures_on_Human_Values 2/`,
    username: `drfeifei`,
  },
  {
    body: `Are you trying to build powerful recommenders? 

 🧑‍💻 Join our very first Dev Summit on Recommendation Systems on June 9th to learn from Google engineers!

Register now! ➡️ https://goo.gle/3qeGNk5
`,
    username: `TensorFlow`,
  },
  {
    body: `Are you new to AI and ML, but feeling overwhelmed by the array of tools available? 

🚀Join 
@lmoroney
, AI Lead at Google, as he guides you through understanding the essentials of data, models, transfer learning, and more at #GoogleIO ➡️ https://goo.gle/3OCEKjQ`,
    username: `TensorFlow`,
  },
  ,
  {
    body: `What's new in TensorFlow and Keras? 

🤯 a LOT!  

👏 The TensorFlow ecosystem is better than ever, giving developers new tools to access the next generation of ML. 

Learn all about it ➡️ http://goo.gle/io23_TFandKeras`,
    username: `TensorFlow`,
  },
  ,
  {
    body: `So much discussion about arxiv this morning. 

You can get a lot of positive value out of using arxiv if you use it with care. 

Eg does the original Transformer paper have inconsistencies (see LayerNorm) and is not super detailed? Sure. 

Is it a groundbreaking paper. Yes!
I am thankful that arxiv exists, but of course we need to take papers there with a grain of salt. But this is also generally true for peer-reviewed papers as well.

As always, you have to judge it on a case-by-case basis`,
    username: `rasbt
`,
  },
  ,
  {
    body: `"Video-LLaMA: An Instruction-tuned Audio-Visual Language Model for Video Understanding".

This method is pretty cool, but what is this new trend where papers don't contain any type of quantitative model evaluation?

Looks like researchers are in a rush.

 https://arxiv.org/abs/2306.02858`,
    username: `rasbt
`,
  },
];

module.exports = tweetList;
