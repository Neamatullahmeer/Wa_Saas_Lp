// AI Growth — the ads half of the product.
//
// ⚠️ Content rule, and it bites hardest here: nothing on this page may claim a
//    customer, a number or a result we cannot show. This feature has not run
//    long enough anywhere to have results, so the page sells the MECHANISM and
//    says plainly where it stands. A "37% lower CPL" line would be the exact
//    kind of invented proof the rest of this site refuses.
//
// ⚠️ It is deliberately framed as early access, not "buy now": it cannot be
//    switched on for a new customer yet. A page that generates demand we cannot
//    serve costs more than a page that does not exist.
//
// Data only — this file is read by the build in plain Node, so no imports.

/** How the thing actually works, in the order the owner experiences it. */
export const growthSteps = [
  {
    title: 'Say what you want, in your own words',
    desc:
      'Fifty enquiries from Delhi this month, five hundred rupees a day. It reads your own catalogue, your prices and the qualification questions you already set, and builds the campaign from those — not from a template.',
  },
  {
    title: 'It writes the campaign, not just the copy',
    desc:
      'Audience, the split of the budget, photos from your own products, and the message the customer’s WhatsApp opens with. That last one is the box Meta’s own tool leaves blank, and it is what turns "Hi" into an enquiry your bot can already answer.',
  },
  {
    title: 'Nothing runs until you tap',
    desc:
      'Everything is created paused inside your own Meta account. Switching it on is a second, separate action — one you take after reading the plan, changing what you want, and asking for it again if you disagree.',
  },
  {
    title: 'The replies land in your AI agent',
    desc:
      'The ad opens WhatsApp with the enquiry already typed, so the agent knows what the customer wants on the very first message instead of starting from a blank "Hi".',
  },
];

/** The restraint is the pitch. Each of these is enforced in code, not in a prompt. */
export const growthGuards = [
  {
    title: 'It never spends on its own',
    desc:
      'There is no path from the AI to your money. Setting a budget, launching, pausing, raising it — every one of those is your tap, every time.',
  },
  {
    title: 'It never guesses a number',
    desc:
      'If it has not seen enough of your own results to answer "how many leads will this bring", it says so. A confident number with nothing behind it is worse than no number.',
  },
  {
    title: 'It cannot go past your ceiling',
    desc:
      'Your daily and monthly limits are checked in code before anything reaches Meta. They are not a rule the AI is asked to respect — they are a wall it cannot walk through.',
  },
  {
    title: 'It cannot touch your account settings',
    desc:
      'It asks Meta for permission to create ads and nothing else. Not your payment methods, not your spending limits, not who has access to your ad account.',
  },
];

/** Where it honestly stands today. This block is the point of the page. */
export const growthStatus = {
  heading: 'Where this is today',
  body:
    'Early access, and genuinely new. It is built and connected end to end — the ad, the chat, the qualified lead, the order, and the loop back to Meta — but it has not run long enough anywhere for us to publish a result. We would rather write that sentence than show you a number we invented.',
  ask:
    'If you already run Click-to-WhatsApp ads and want to be among the first, tell us on WhatsApp and we will get in touch when it opens up.',
};

export const growthFaqs = [
  {
    q: 'Do I need my own Meta ad account?',
    a: 'Yes. Campaigns run on your own ad account and Meta bills you directly for the ad spend, exactly as it does today. Nothing is bought through us.',
  },
  {
    q: 'Will it change the campaigns I am already running?',
    a: 'No. It only creates new campaigns, and it creates them paused. Anything already running on your account is left alone.',
  },
  {
    q: 'What kind of ads does it make?',
    a: 'Click-to-WhatsApp ads only. That is the one route where we can follow a click all the way to a confirmed order, and a number we cannot follow is a number we will not report.',
  },
  {
    q: 'Why does that matter more than the ad itself?',
    a: 'Meta can see the click and that a chat started. It cannot see which of those people actually bought — that happens inside your WhatsApp. Sending the confirmed orders back is what lets Meta optimise on buyers instead of clicks.',
  },
  {
    q: 'What does it cost?',
    a: '₹2,999 a month on top of a Pro or Enterprise plan, and the AI cost of running it is included. Above ₹2,00,000 of monthly ad spend it is ₹7,999. Your ad budget is separate and is paid to Meta directly — it never passes through us. You can cancel Growth without touching your ChatPro365 plan.',
  },
  {
    q: 'How does that compare to hiring someone?',
    a: 'An ads freelancer in India starts around ₹8,000 a month and an agency runs well past that, usually charging 10-20% of what you spend. Growth costs a third of the freelancer and works from something neither of them can see: your own chat-to-order data, so it knows which ad produced a paying customer rather than which one produced clicks.',
  },
  {
    q: 'Does the AI spend my budget by itself?',
    a: 'No. It researches, plans, writes the brief and prepares the campaign — you approve before anything goes live, and you set the budget. Nothing is launched or raised without you.',
  },
];
