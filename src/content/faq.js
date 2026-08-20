// The FAQ knowledge base behind /faq.
//
// One source, two consumers: the page renders these groups, and
// scripts/postbuild-seo.mjs turns the same questions into FAQPage structured
// data at build time. Keep answers self-contained — an answer engine may quote
// exactly one of them, with no surrounding page for context.
//
// Pure data, no imports (routes.js reads this in plain Node during the build).

export const faqGroups = [
  {
    id: 'basics',
    title: 'The basics',
    items: [
      {
        q: 'What is ChatPro365?',
        a: 'ChatPro365 is an AI sales agent for WhatsApp, built on the official WhatsApp Business Platform. It answers your customers on your own WhatsApp number, understands what they want, prices it from your rate card, sends a branded GST quotation PDF, books appointments, and follows up on its own — while your team watches and takes over from a shared dashboard.',
      },
      {
        q: 'Who is ChatPro365 for?',
        a: 'Small and medium Indian businesses that already sell on WhatsApp and whose price is not printed on the product — manufacturers, portable cabin and prefab sellers, interior and modular firms, construction contractors, real estate teams, event and catering companies, and service businesses that quote per enquiry. If your customers ask "rate kya hai?" and the honest answer takes questions first, this is built for you.',
      },
      {
        q: 'How is this different from a normal WhatsApp chatbot?',
        a: 'A normal chatbot replies. ChatPro365 sells: it collects the requirement, applies your pricing, produces a quotation PDF with GST, remembers the customer between conversations, and follows up when a quote goes unanswered. It is also trained by uploading documents you already have, rather than by building flowcharts and typing question-answer pairs.',
      },
      {
        q: 'Does it use the official WhatsApp Business API?',
        a: 'Yes. ChatPro365 runs on the official WhatsApp Business Platform from Meta, which is what allows a business number to be automated without risking a ban. Tools that automate WhatsApp Web unofficially put your number at risk.',
      },
      {
        q: 'Is ChatPro365 affiliated with Meta or WhatsApp?',
        a: 'No. WhatsApp is a trademark of Meta Platforms, Inc. ChatPro365 is an independent platform built on the official WhatsApp Business Platform and is not endorsed by, sponsored by, or affiliated with Meta Platforms, Inc.',
      },
      {
        q: 'Which countries does ChatPro365 serve?',
        a: 'ChatPro365 is built for businesses in India, with pricing in Indian rupees, GST-format quotations and eleven Indian languages. WhatsApp itself is global, so the AI can talk to customers anywhere, but the product decisions are made for the Indian market.',
      },
    ],
  },

  {
    id: 'setup',
    title: 'Setup and training',
    items: [
      {
        q: 'How do I train the AI on my business?',
        a: 'Upload the material you already have — price lists, brochures, catalogues, policy documents (PDF, Word, CSV, or even a photograph of a printed price list) — or simply paste your website link. ChatPro365 indexes it within minutes and the AI answers strictly from your content, citing the document it used. There are no flows to build and no coding.',
      },
      {
        q: 'How long does setup take?',
        a: 'Connecting the WhatsApp Business API and loading your business information is the same-day part. The genuinely useful step is uploading your price list and documents and then testing the bot in the built-in playground before customers see it — most businesses are live within a day or two.',
      },
      {
        q: 'What happens when the AI does not know an answer?',
        a: 'It says so and offers to connect a human, rather than inventing an answer. Answers are grounded in your uploaded material and are checked against it before they are sent; if the material does not cover the question, the AI does not fill the gap with a guess.',
      },
      {
        q: 'Can I test the bot before customers talk to it?',
        a: 'Yes. A test playground lets you ask the bot anything and see both the answer and the document it drew from, so you can correct your material before going live.',
      },
      {
        q: 'Can I control what the bot is allowed to say?',
        a: 'Yes. The bot only sells what is in your catalogue and answers only from your documents. You set the business information, catalogue, pricing rules, working hours, and follow-up policy; anything outside that scope is declined and, where you want it, handed to a human.',
      },
      {
        q: 'Do I need a new phone number?',
        a: 'You can connect a number you already use for business, provided it is not currently active on the consumer WhatsApp or WhatsApp Business app, or start with a fresh number. Once a number is on the WhatsApp Business API it is managed through ChatPro365 rather than the phone app.',
      },
    ],
  },

  {
    id: 'selling',
    title: 'Selling, quotations and follow-up',
    items: [
      {
        q: 'Can ChatPro365 generate quotations automatically?',
        a: 'Yes. The AI collects the specification in conversation — size, quantity, add-ons, delivery location — applies your rate card, calculates GST and sends a branded, numbered quotation PDF inside the WhatsApp chat, with no human typing it.',
      },
      {
        q: 'Can it calculate GST?',
        a: 'Yes. Quotations are itemised with sub-total, GST at the rate you configure, and grand total, in the format Indian buyers expect.',
      },
      {
        q: 'What about items whose price depends on the case, like freight?',
        a: 'Those lines are quoted as "to be confirmed" rather than guessed. The enquiry appears in your dashboard with the pending amounts waiting; when your team fills them in, the final quotation is regenerated and sent to the customer automatically.',
      },
      {
        q: 'Does it follow up with customers on its own?',
        a: 'Yes. When a quotation goes unanswered or a conversation stalls, ChatPro365 can send a follow-up written for that specific customer in their own language, under rules you set — how long to wait, how many attempts, and whether an offer may be mentioned. Customers who ask to stop are excluded automatically.',
      },
      {
        q: 'Can it book appointments?',
        a: 'Yes — site visits, demos, tastings and consultations. You configure your available days, times and how many bookings each slot can take; the AI offers only open slots, confirms the booking, sends a reminder before it, and checks the whole team’s calendar so a slot is never double-booked.',
      },
      {
        q: 'Does the AI remember returning customers?',
        a: 'Yes. When a customer comes back days later, the AI recalls what they were interested in and picks up from there instead of restarting, the way a salesperson who knows the customer would.',
      },
      {
        q: 'Can it send photos, catalogues and videos?',
        a: 'Yes. Product images, multi-image galleries and short videos can be attached to your catalogue items and are sent when a customer asks to see something. Where you have a Meta product catalogue connected, the AI can also send product cards.',
      },
      {
        q: 'Can customers send voice notes?',
        a: 'Yes. Voice messages are transcribed and understood, including Hinglish speech, so a customer who prefers talking to typing is handled the same way.',
      },
    ],
  },

  {
    id: 'languages',
    title: 'Languages',
    items: [
      {
        q: 'Which languages can the AI chat in?',
        a: 'Eleven: English, Hinglish, Hindi, Marathi, Bengali, Gujarati, Tamil, Telugu, Kannada, Malayalam and Punjabi. Nothing needs configuring — the AI detects the language and script each customer types in and replies in the same one, switching automatically if the customer switches mid-chat.',
      },
      {
        q: 'Does it understand Hinglish typed in English letters?',
        a: 'Yes. Roman-script Hindi and other Roman-typed Indian languages are detected as their own language rather than mistaken for English, which is how most Indian customers actually type on WhatsApp.',
      },
      {
        q: 'Do quotations and reminders also go out in the customer’s language?',
        a: 'Yes. Quotation messages, appointment confirmations, reminders and follow-ups all follow the language the customer is using, not a fixed default.',
      },
      {
        q: 'Do I need to build a separate flow for each language?',
        a: 'No. There is one setup for your business; the language is handled by the AI at the moment of replying. You do not maintain eleven copies of anything.',
      },
    ],
  },

  {
    id: 'rules',
    title: 'WhatsApp rules and compliance',
    items: [
      {
        q: 'Can I message customers who have not written to me first?',
        a: 'Only using a message template that Meta has approved in advance. WhatsApp allows free-form messages only within 24 hours of the customer’s last message; outside that window, a template is the only way through. ChatPro365 handles both, and tells you when a template is required.',
      },
      {
        q: 'Will bulk messaging get my number banned?',
        a: 'Not if it is done through the official API with approved templates to contacts who expect to hear from you, which is how ChatPro365 sends. Bans happen when businesses message people who never opted in, or use unofficial tools — spam is a policy problem, and no platform can make it safe.',
      },
      {
        q: 'What are WhatsApp conversation charges, and are they included?',
        a: 'Meta charges for messages separately from any platform subscription, with rates that vary by conversation category and country. Those charges are set by Meta and are billed on top of your ChatPro365 plan — as they are with every WhatsApp Business API provider.',
      },
      {
        q: 'Who owns the chat data?',
        a: 'You do. Conversations, contacts and documents belong to your business, they are kept in your own tenant space, and they can be exported. How the data is collected, stored and deleted is set out in the privacy policy.',
      },
    ],
  },

  {
    id: 'team',
    title: 'Team, CRM and integrations',
    items: [
      {
        q: 'What happens when the AI cannot resolve a query?',
        a: 'It hands the conversation to a human. ChatPro365 runs a hybrid model: complex or high-value chats are routed to an available agent with the full conversation and everything captured so far, so the customer does not repeat themselves.',
      },
      {
        q: 'Can several agents work from the same number?',
        a: 'Yes. A shared team inbox lets multiple agents handle chats from one WhatsApp number, with automatic assignment, online/offline status, reassignment between agents and performance analytics for the owner.',
      },
      {
        q: 'Does it integrate with our existing CRM?',
        a: 'Yes, in both directions. Leads and chat activity can be pushed to your CRM through webhooks, and your CRM can push contacts into ChatPro365 to start a WhatsApp conversation. Shopify and WooCommerce stores can also be synced with your catalogue.',
      },
      {
        q: 'Can we import our existing contact list?',
        a: 'Yes, from CSV or Excel. Remember that WhatsApp still applies: reaching contacts who have not messaged you in the last 24 hours requires an approved template.',
      },
      {
        q: 'How do we know whether the bot is doing a good job?',
        a: 'A built-in QA supervisor reads your real conversations, finds where the bot lost customers, and proposes specific fixes for you to approve. Alongside it are analytics on leads, response times, campaigns and agent performance.',
      },
    ],
  },

  {
    id: 'pricing',
    title: 'Pricing and trial',
    items: [
      {
        q: 'How much does ChatPro365 cost?',
        a: 'The Starter plan is ₹2,999 per month and the Pro plan is ₹7,999 per month, with custom Enterprise pricing for larger teams. WhatsApp conversation charges from Meta are billed on top, as they are with every provider on the official API.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes — 14 days, with no credit card required. The trial is worth using properly: load your own price list and documents and test the quotations, because that is what tells you whether the AI handles your products correctly.',
      },
      {
        q: 'Can I cancel or get a refund?',
        a: 'Cancellation and refund terms are set out in the refund policy. Subscriptions can be cancelled from your account.',
      },
    ],
  },
];

// Flattened for structured data and for pages that need a plain list.
export const allFaqs = faqGroups.flatMap((g) => g.items);
