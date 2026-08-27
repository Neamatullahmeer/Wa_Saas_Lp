// Industry landing pages.
//
// Pure data, no imports: scripts/postbuild-seo.mjs pulls this in through
// routes.js while running in plain Node, outside Vite. An icon import or JSX
// here would break the build, so the page component maps `icon` to a real
// component by key instead.
//
// Every claim below has to be something the product actually does. These are
// the pages AI assistants quote from, and a feature invented for a landing page
// becomes a support ticket the day a customer signs up.

export const industries = [
  {
    slug: 'real-estate',
    path: '/whatsapp-ai-sales-agent-for-real-estate',
    name: 'Real Estate',
    icon: 'building',
    title: 'WhatsApp Chatbot for Real Estate | AI Sales Agent | ChatPro365',
    description:
      'WhatsApp automation for real estate agents: qualify enquiries on budget, location and possession, book site visits, and follow up automatically.',
    h1: 'WhatsApp AI Sales Agent for Real Estate',
    intro:
      'Property enquiries arrive on WhatsApp at every hour, from portal listings, hoardings, Instagram and Click-to-WhatsApp ads. Most ask the same four things — price, location, size, possession — and most go cold because an agent on a site visit cannot answer at 11pm. ChatPro365 puts an AI agent on that number: it answers from your actual inventory, asks the qualifying questions your team would ask, books the site visit into a calendar, and keeps following up until the buyer replies. If you have been looking for a WhatsApp chatbot for real estate, this is that — except it qualifies the buyer and books the site visit instead of only answering questions.',
    problems: [
      {
        title: 'Every lead asks the same four questions',
        desc: 'Price, carpet area, location, possession date. Your agents type these answers hundreds of times a week instead of meeting serious buyers.',
      },
      {
        title: 'Enquiries arrive when nobody is free',
        desc: 'Portal and ad leads peak at night and on weekends — exactly when agents are on site visits or off duty. A late reply is a lost buyer.',
      },
      {
        title: 'No way to tell a browser from a buyer',
        desc: 'A hundred chats look identical in WhatsApp. Without qualification, agents spend their best hours on people who were never going to buy.',
      },
    ],
    flow: [
      { title: 'Buyer messages your number', desc: 'From a portal listing, a Click-to-WhatsApp ad, your website widget or a hoarding QR code.' },
      { title: 'AI answers from your inventory', desc: 'Configuration, carpet area, price, floor, amenities, possession — answered only from the project details and brochures you uploaded, with the source cited.' },
      { title: 'It qualifies while it talks', desc: 'Budget range, preferred location, ready-to-move or under-construction, purchase timeline, loan requirement — asked naturally, not as a form.' },
      { title: 'Site visit gets booked', desc: 'The AI offers your open slots, confirms the appointment, and sends a reminder before the visit so no-shows drop.' },
      { title: 'Hot buyers reach a human', desc: 'A high-intent enquiry is scored, tagged, handed to an available agent, and the owner gets a WhatsApp alert.' },
      { title: 'The rest get followed up', desc: 'Anyone who went quiet after a price discussion gets a nudge written by the AI — in their language, on your schedule.' },
    ],
    features: [
      { title: 'Brochure and price-list training', desc: 'Upload project brochures, floor plans, price sheets and payment plans as PDF, Word or even a photo. The AI answers from those documents and never invents a number.' },
      { title: 'Site visit booking with slot limits', desc: 'Set how many visits a slot can hold. The AI books inside your availability and refuses double-bookings across the whole team.' },
      { title: 'Lead scoring and owner alerts', desc: 'Buyers are scored on what they actually said — budget stated, timeline near, documents asked for — and hot ones trigger an owner alert.' },
      { title: 'Buyer memory across days', desc: 'When a buyer returns a week later, the AI recalls the project and configuration they were looking at instead of restarting the conversation.' },
      { title: 'Sells in the buyer’s language', desc: 'Hindi, Hinglish, Marathi, Bengali, Gujarati, Tamil, Telugu, Kannada, Malayalam, Punjabi or English — auto-detected, including Roman-script typing.' },
      { title: 'Pushes into your CRM', desc: 'Every qualified lead can be posted to your existing CRM through a webhook, with the qualification answers attached.' },
    ],
    chat: [
      { from: 'user', text: 'Saw your 3BHK listing. What is the price?' },
      { from: 'bot', text: 'The 3BHK is 1,485 sq ft carpet, priced at ₹1.42 Cr all-inclusive. Possession is March 2027. Which floor range are you looking at?' },
      { from: 'user', text: 'Higher floor. Loan bhi lena padega.' },
      { from: 'bot', text: 'Noted — higher floors (12–18) are available in B wing, and we have a panel of 4 banks for home loans. Would you like to see the flat this weekend? Saturday 11am or Sunday 4pm are open.' },
      { from: 'user', text: 'Sunday 4 theek hai' },
      { from: 'bot', text: 'Booked — Sunday 4:00pm at the site office. I will send the location now and a reminder on Saturday.' },
    ],
    faq: [
      {
        q: 'Can the AI answer questions about specific projects and units?',
        a: 'Yes. You upload the project brochures, floor plans, price sheets and payment plans, and the AI answers strictly from those documents — quoting the exact carpet area, price and possession date you supplied. If a question is not covered by your material, it says so and offers to connect the buyer to your team rather than guessing.',
      },
      {
        q: 'Does it book site visits into a calendar?',
        a: 'Yes. You set your available days, time slots and how many visits each slot can take. The AI offers only open slots, confirms the booking, and sends the buyer a reminder before the visit. It also checks the whole team’s bookings, so two agents cannot fill the same slot.',
      },
      {
        q: 'How does it know which buyer is serious?',
        a: 'Every conversation is scored on what the buyer actually said — a stated budget, a near-term timeline, a request for documents or a site visit all raise the score. High-scoring buyers are tagged, routed to an available agent, and the owner receives a WhatsApp alert.',
      },
      {
        q: 'Can it handle buyers who type in Hindi or Marathi?',
        a: 'Yes, in eleven languages including Roman-script Hinglish. The AI detects the language and script from the buyer’s own message and replies in the same one, switching if the buyer switches mid-conversation. Appointment confirmations and follow-ups use the same language.',
      },
      {
        q: 'Will the leads reach our existing CRM?',
        a: 'Yes. ChatPro365 can post every new or qualified lead to your CRM through a webhook, including the qualification answers and tags. It can also receive leads from your CRM and start the WhatsApp conversation from there.',
      },
    ],
  },

  {
    slug: 'manufacturing',
    path: '/whatsapp-ai-sales-agent-for-manufacturing',
    name: 'Manufacturing',
    icon: 'factory',
    title: 'WhatsApp Chatbot for Manufacturers | Quotation AI | ChatPro365',
    description:
      'WhatsApp automation for manufacturers: collect specs and quantity, apply your rate card with GST, and send a branded quotation PDF inside the chat.',
    h1: 'WhatsApp AI Sales Agent for Manufacturers',
    intro:
      'A manufacturing enquiry is never one message. It is a size, a material, a quantity, a delivery location and a dozen follow-up questions — and the answer is a quotation somebody has to sit down and prepare. ChatPro365 collects the specification the way your sales engineer would, applies your own rate card, adds GST, and sends a branded quotation PDF inside the same WhatsApp chat, usually before the buyer has left the conversation. It is a WhatsApp chatbot for manufacturers that does the part a chatbot usually cannot — it prices the enquiry and sends the quotation.',
    problems: [
      {
        title: 'Quotations take hours, buyers wait minutes',
        desc: 'By the time a manual quote is prepared and mailed, the buyer already has three competing quotes in hand.',
      },
      {
        title: 'Specs arrive incomplete',
        desc: 'Enquiries land without quantity, grade, dimensions or delivery location, and the back-and-forth burns a full day.',
      },
      {
        title: 'Rate cards live in one person’s head',
        desc: 'Slab-wise and size-wise pricing sits in a spreadsheet only the senior person can read, so nobody else can quote.',
      },
    ],
    flow: [
      { title: 'Buyer sends the enquiry', desc: 'On WhatsApp, in whatever detail they have — often just "need 500 units, what rate?".' },
      { title: 'AI collects the full specification', desc: 'Size, grade, quantity, finish, delivery location — asked one at a time, in the buyer’s language, until the quote can actually be built.' },
      { title: 'Your rate card is applied', desc: 'Size-wise and quantity-slab pricing comes from the rate card you uploaded, not from the AI’s imagination.' },
      { title: 'A branded quotation PDF is sent', desc: 'Line items, sub-total, GST and grand total on your letterhead, delivered into the chat as a PDF.' },
      { title: 'Vendor-priced items stay honest', desc: 'For items you price case by case — freight, custom fabrication — the quote says "to be confirmed", you fill the amount from the dashboard, and the final PDF is resent automatically.' },
      { title: 'Silent buyers get nudged', desc: 'If a quotation goes unanswered, the AI follows up on your schedule with a message written for that buyer, not a template blast.' },
    ],
    features: [
      { title: 'Rate card to live catalogue', desc: 'Upload a price list — even a photograph of a printed one — and ChatPro365 builds the sellable catalogue from it, including size-wise variants.' },
      { title: 'GST quotation PDFs', desc: 'Branded, numbered quotations with line items, discounts and GST, generated and delivered inside the WhatsApp conversation.' },
      { title: 'Pending prices you control', desc: 'Anything the AI must not guess is quoted as pending. Your team fills the amount from the dashboard and the finalised quote goes out on its own.' },
      { title: 'Grounded technical answers', desc: 'Datasheets, tolerance charts and policy documents are uploaded once; the AI answers from them and cites the document it used.' },
      { title: 'Order capture and status', desc: 'Confirmed orders become records your team can track through a status pipeline, from the same inbox.' },
      { title: 'Team inbox with handoff', desc: 'Complex or high-value enquiries are routed to a human sales engineer with the entire conversation and specification already in place.' },
    ],
    chat: [
      { from: 'user', text: 'Need MS square tube. 500 pieces. Rate?' },
      { from: 'bot', text: 'Sure. Which size and thickness do you need, and where is the delivery — city and pin code?' },
      { from: 'user', text: '50x50, 2mm. Delivery Pune.' },
      { from: 'bot', text: 'Got it: MS square tube 50×50mm, 2mm, 500 pcs, delivery Pune. One moment — preparing your quotation.' },
      { from: 'bot', text: '📄 Quotation QT-2418 — Sub-total ₹3,20,000 · GST 18% ₹57,600 · Total ₹3,77,600. Freight to Pune shows as to-be-confirmed; our team will confirm it today and resend the final quote.' },
    ],
    faq: [
      {
        q: 'Can it really prepare a quotation without a human?',
        a: 'Yes, when the price can be derived from material you supplied. You upload your rate card and pricing rules; the AI collects the specification, applies the right rate and slab, adds GST, and generates a branded quotation PDF inside the chat. Anything your rate card does not cover is marked as pending rather than guessed.',
      },
      {
        q: 'What happens with freight or custom items we price case by case?',
        a: 'They are quoted as "to be confirmed". The enquiry appears in your dashboard with those lines waiting for an amount. When your team fills it in, the final quotation is regenerated and sent to the buyer automatically — the customer never has to ask twice.',
      },
      {
        q: 'How do we load size-wise or slab-wise pricing?',
        a: 'Upload the rate card as a PDF, spreadsheet, or a photo of a printed sheet. ChatPro365 reads it and builds your catalogue with size-wise variants, so the AI quotes the right price for the exact size and quantity the buyer asked for.',
      },
      {
        q: 'Can it answer technical questions about our products?',
        a: 'It answers from the documents you upload — datasheets, specification sheets, tolerance charts, warranty and policy documents — and cites the document it used. If the answer is not in your material, it says so and offers to connect a human instead of inventing a specification.',
      },
    ],
  },

  {
    slug: 'portable-cabins',
    path: '/whatsapp-ai-sales-agent-for-portable-cabins',
    name: 'Portable Cabins & Prefab',
    icon: 'package',
    title: 'WhatsApp Chatbot for Portable Cabin & Prefab Sellers | ChatPro365',
    description:
      'WhatsApp automation for portable cabin and prefab sellers: turn "rate of a 20x15 cabin?" into a branded GST quotation PDF, delivery and follow-up included.',
    h1: 'WhatsApp AI Sales Agent for Portable Cabins & Prefab Structures',
    intro:
      'Portable cabin buyers ask in square feet and expect a number back. The trouble is that the number depends on size, insulation, flooring, toilet units, delivery distance and GST — so the honest answer takes a call and a spreadsheet. ChatPro365 does that arithmetic inside the chat: it asks for the size and the add-ons, prices them from your own rate card, and sends a branded quotation PDF with GST while the buyer is still typing. It is the WhatsApp chatbot for cabin and prefab sellers that answers the rate question properly, because it asks what changes the rate first.',
    problems: [
      {
        title: '"Rate kya hai?" has no one-line answer',
        desc: 'Every cabin is configured differently, so a quick reply is either wrong or a promise to call back — and callbacks lose deals.',
      },
      {
        title: 'Delivery cost depends on where they are',
        desc: 'Freight varies by site location, and quoting it wrongly costs either margin or credibility.',
      },
      {
        title: 'Buyers compare three vendors the same evening',
        desc: 'Whoever sends a clear, itemised quotation first is usually the one who gets the site visit.',
      },
    ],
    flow: [
      { title: 'Enquiry lands on WhatsApp', desc: 'Usually a size — "20×15 office cabin" — and nothing else.' },
      { title: 'AI asks what changes the price', desc: 'Size, purpose, insulation, flooring, windows, toilet unit, quantity and delivery location.' },
      { title: 'Your rate card does the maths', desc: 'Base structure, add-ons and quantity are priced from your uploaded rate card; GST is applied at your rate.' },
      { title: 'Branded quotation PDF in the chat', desc: 'Itemised: cabin, each add-on, sub-total, GST, grand total — on your letterhead, with a quotation number.' },
      { title: 'Freight confirmed by your team', desc: 'Delivery is quoted as pending, you fill it from the dashboard, and the finalised quotation is resent automatically.' },
      { title: 'Follow-up until they answer', desc: 'A quotation that goes quiet gets a nudge in the buyer’s language, timed by rules you set.' },
    ],
    features: [
      { title: 'Size-wise and add-on pricing', desc: 'Per-sq-ft or per-unit pricing with add-ons priced separately, exactly as your rate card defines them.' },
      { title: 'GST quotations with your branding', desc: 'Numbered, itemised PDF quotations generated in seconds and delivered inside WhatsApp.' },
      { title: 'Photos and videos of your units', desc: 'The AI can send product images, galleries and short videos when a buyer asks to see the cabin.' },
      { title: 'Pending-price control', desc: 'Freight, cranes, site preparation — quoted as to-be-confirmed and finalised by your team, never guessed.' },
      { title: 'Abandoned-quote follow-up', desc: 'Behaviour-triggered nudges for buyers who received a quote and went silent, with your offer rules applied.' },
      { title: 'Site visit and delivery scheduling', desc: 'Appointments booked into your availability, with reminders before the date.' },
    ],
    chat: [
      { from: 'user', text: 'Hi, I need a 20×15 office cabin 🏗️' },
      { from: 'bot', text: 'Great — 300 sq ft office cabin. Do you need a toilet unit attached, and what is the delivery location?' },
      { from: 'user', text: 'Yes toilet chahiye. Site Bengaluru me hai.' },
      { from: 'bot', text: 'Noted. Preparing your quotation — one moment.' },
      { from: 'bot', text: '📄 Quotation — Portable Cabin (300 sq ft) ₹2,85,000 · Toilet Cabin ₹35,000 · Sub-total ₹3,20,000 · GST 18% ₹57,600 · Total ₹3,77,600. Delivery to Bengaluru will be confirmed by our team today.' },
    ],
    faq: [
      {
        q: 'Can it quote a cabin by size, like 20×15?',
        a: 'Yes. You define pricing by square foot or by standard size in your rate card, along with add-ons such as toilet units, insulation or flooring. The AI collects the size and add-ons in conversation and produces an itemised quotation with GST.',
      },
      {
        q: 'How is delivery charged if it varies by location?',
        a: 'Delivery is quoted as "to be confirmed" so the AI never invents a freight cost. The enquiry shows up in your dashboard with that line pending; once your team enters the amount, the final quotation PDF is regenerated and sent to the buyer automatically.',
      },
      {
        q: 'Can the AI send photos of the cabins?',
        a: 'Yes. Product images, multi-image galleries and short videos can be attached to catalogue items, and the AI sends them when the buyer asks to see a unit.',
      },
      {
        q: 'What if the buyer stops replying after the quotation?',
        a: 'ChatPro365 detects an abandoned quotation and follows up according to the rules you set — how long to wait, how many attempts, and whether an offer may be mentioned. The message is written for that specific buyer in their own language.',
      },
    ],
  },

  {
    slug: 'interior-design',
    path: '/whatsapp-ai-sales-agent-for-interior-design',
    name: 'Interiors & Modular',
    icon: 'layers',
    title: 'WhatsApp Chatbot for Interior Designers & Modular | ChatPro365',
    description:
      'WhatsApp automation for interior designers and modular furniture: qualify scope, carpet area, budget and timeline, then send itemised estimates with GST.',
    h1: 'WhatsApp AI Sales Agent for Interiors & Modular Furniture',
    intro:
      'Interior enquiries start vague — "kitchen ka kitna lagega?" — and end in a detailed estimate. The distance between those two is a series of questions about carpet area, material, finish and budget that your designers repeat all day. ChatPro365 asks them on WhatsApp, prices the scope from your own rate card, sends an itemised estimate with GST, and books the design consultation. As a WhatsApp chatbot for interior designers it does more than reply — it gets the enquiry all the way to a written estimate.',
    problems: [
      {
        title: 'Every enquiry needs the same discovery call',
        desc: 'Designers repeat the same ten questions before they can say anything useful about price.',
      },
      {
        title: 'Budget mismatch surfaces too late',
        desc: 'Hours go into a client who was never in your price band, because nobody asked early.',
      },
      {
        title: 'Estimates take days to prepare',
        desc: 'By the time the itemised sheet is ready, the client has met two other studios.',
      },
    ],
    flow: [
      { title: 'Client messages on WhatsApp', desc: 'From Instagram, a Google listing, a Click-to-WhatsApp ad or a referral.' },
      { title: 'AI runs the discovery', desc: 'Scope — full home, kitchen only, wardrobes — carpet area, BHK, material preference, budget band and possession date.' },
      { title: 'Indicative estimate is priced', desc: 'From your per-sq-ft or per-unit rate card, with finishes and add-ons as separate lines and GST applied.' },
      { title: 'Estimate PDF sent in chat', desc: 'Branded and itemised, so the client can compare it properly instead of guessing.' },
      { title: 'Consultation booked', desc: 'Studio visit or site measurement scheduled into your team’s availability, with a reminder before the date.' },
      { title: 'Designer takes over warm', desc: 'The chat is handed to a designer with the scope, budget and timeline already captured.' },
    ],
    features: [
      { title: 'Per-sq-ft and per-unit estimates', desc: 'Modular kitchens, wardrobes and full-home packages priced from the rate card you upload.' },
      { title: 'Design catalogue with images', desc: 'Send finish options, past work photos and material galleries directly in the conversation.' },
      { title: 'Budget qualification, politely', desc: 'The AI establishes the budget band early, in conversation, so your designers spend time on realistic projects.' },
      { title: 'Consultation booking', desc: 'Appointments with slot limits so two clients are never promised the same designer at the same hour.' },
      { title: 'Client memory', desc: 'A client returning after a fortnight is greeted with the scope they discussed, not a blank slate.' },
      { title: 'Follow-up that sounds human', desc: 'Post-estimate nudges written by the AI in the client’s language, on the schedule you set.' },
    ],
    chat: [
      { from: 'user', text: '3BHK ka full interior karwana hai. Kitna lagega?' },
      { from: 'bot', text: 'Ji bilkul. Carpet area kitna hai, aur aap full home chahte hain ya sirf kitchen aur wardrobes?' },
      { from: 'user', text: '1250 sqft. Full home. Budget 12-15 lakh.' },
      { from: 'bot', text: 'Perfect — 1250 sq ft full home, 12–15 lakh band me Essentials aur Premium dono packages aate hain. Dono ka itemised estimate bhej raha hoon.' },
      { from: 'bot', text: '📄 Estimate bhej diya. Studio visit ke liye Saturday 12pm ya Sunday 5pm — kaunsa theek rahega?' },
    ],
    faq: [
      {
        q: 'Can it give a price before a site visit?',
        a: 'It gives an indicative, itemised estimate based on carpet area, scope and the package the client chooses, priced from your own rate card and marked clearly as indicative. Final pricing after site measurement stays with your designers.',
      },
      {
        q: 'Will it ask about budget without putting clients off?',
        a: 'The budget question is asked in the flow of the conversation, in the client’s own language, alongside scope and timeline rather than as an interrogation. You control how and when it is asked.',
      },
      {
        q: 'Can it show our past work?',
        a: 'Yes. Photos, multi-image galleries and short videos can be attached to catalogue items and packages, and the AI sends them when a client asks to see finishes or previous projects.',
      },
      {
        q: 'Does it book studio visits and site measurements?',
        a: 'Yes, into the availability you configure, with a limit on how many bookings each slot can take and an automatic reminder before the appointment.',
      },
    ],
  },

  {
    slug: 'construction',
    path: '/whatsapp-ai-sales-agent-for-construction',
    name: 'Construction & Contracting',
    icon: 'hammer',
    title: 'WhatsApp Chatbot for Construction & Contractors | ChatPro365',
    description:
      'WhatsApp automation for construction firms and contractors: capture enquiries, qualify scope and site details, send itemised estimates with GST and follow up.',
    h1: 'WhatsApp AI Sales Agent for Construction & Contracting',
    intro:
      'Construction enquiries are long-cycle and detail-heavy: plot size, built-up area, floors, finish level, site location, timeline. Site engineers cannot chase them on WhatsApp while they are on site, so enquiries sit unanswered and estimates go out late. ChatPro365 keeps that conversation alive — qualifying the project, sending an itemised estimate from your rate card, and following up until the client answers. It is a WhatsApp chatbot for contractors that keeps working while your site engineers are on site and nobody is watching the phone.',
    problems: [
      {
        title: 'Enquiries wait for someone off site',
        desc: 'The people who can answer are the people least able to look at a phone during working hours.',
      },
      {
        title: 'Estimates need details nobody collected',
        desc: 'Plot dimensions, floors, finish level and site location arrive in fragments across three days of messages.',
      },
      {
        title: 'Quotations go silent and stay silent',
        desc: 'Nobody has time to chase every pending estimate, so pipeline quietly leaks.',
      },
    ],
    flow: [
      { title: 'Enquiry arrives on WhatsApp', desc: 'From a hoarding, a listing, a referral or an ad.' },
      { title: 'AI qualifies the project', desc: 'Plot size, built-up area, number of floors, finish level, site location and expected start date.' },
      { title: 'Estimate priced from your rates', desc: 'Per-sq-ft rates by finish level and package, with GST applied and add-ons as separate lines.' },
      { title: 'Branded estimate PDF in chat', desc: 'Itemised and numbered, so the client can compare it against other contractors properly.' },
      { title: 'Site meeting scheduled', desc: 'Booked into your engineers’ availability with a reminder before the visit.' },
      { title: 'Pending estimates followed up', desc: 'Automatic nudges on your schedule until the client responds or opts out.' },
    ],
    features: [
      { title: 'Package-based per-sq-ft pricing', desc: 'Standard, premium and luxury finish packages priced from your own rate card.' },
      { title: 'Document-grounded answers', desc: 'Specifications, material lists and inclusion/exclusion sheets uploaded once, answered from with citations.' },
      { title: 'Vendor-priced lines stay pending', desc: 'Anything that needs a site survey is quoted as to-be-confirmed and finalised by your team.' },
      { title: 'Site visit scheduling', desc: 'Appointments with slot limits, confirmations and reminders.' },
      { title: 'Long-cycle follow-up', desc: 'Rules for how long to wait and how many times to nudge — appropriate for a decision that takes months.' },
      { title: 'Owner alerts on hot enquiries', desc: 'A serious enquiry triggers a WhatsApp alert to the owner and lands with an available team member.' },
    ],
    chat: [
      { from: 'user', text: 'G+2 construction karana hai, 30x40 plot' },
      { from: 'bot', text: '30×40 plot, G+2 — built-up roughly 3,600 sq ft. Standard finish chahiye ya premium? Aur site kis area me hai?' },
      { from: 'user', text: 'Premium. Site Whitefield.' },
      { from: 'bot', text: 'Samajh gaya. Premium package ke hisaab se itemised estimate bhej raha hoon — inclusions aur exclusions ke saath.' },
      { from: 'bot', text: '📄 Estimate bheja gaya. Site survey ke baad final rate confirm hoga. Team is hafte visit kar sakti hai — Wednesday ya Friday?' },
    ],
    faq: [
      {
        q: 'Can it estimate a construction project accurately?',
        a: 'It produces an itemised indicative estimate from the per-square-foot rates and packages you define, clearly marked as subject to a site survey. Anything that genuinely needs a survey is quoted as pending rather than guessed, and your team finalises it.',
      },
      {
        q: 'Our sales cycle runs for months. Will it keep following up?',
        a: 'Yes. You set how long to wait between nudges and how many attempts to make, so follow-up matches a long decision cycle instead of pestering weekly. Clients who ask to stop are excluded automatically.',
      },
      {
        q: 'Can it answer questions about what is included in a package?',
        a: 'Upload your inclusion and exclusion sheets and specification documents; the AI answers from them and cites the document. It will not improvise an inclusion that your paperwork does not list.',
      },
    ],
  },

  {
    slug: 'events-catering',
    path: '/whatsapp-ai-sales-agent-for-events-catering',
    name: 'Events & Catering',
    icon: 'calendar',
    title: 'WhatsApp Chatbot for Catering & Event Planners | ChatPro365',
    description:
      'WhatsApp automation for caterers and event planners: answer date, guest count, menu and venue instantly, then send a per-plate quotation with GST.',
    h1: 'WhatsApp AI Sales Agent for Events & Catering',
    intro:
      'Event enquiries are decided fast and lost faster. A host messages four caterers on the same evening with the same three facts — date, guest count, venue — and books whoever answered with a clear per-plate price first. ChatPro365 answers immediately, checks whether the date is open, prices the menu per plate with GST, and books the tasting or site visit before your competitor has read the message. It is a WhatsApp chatbot for caterers that replies first — which, on an enquiry sent to four vendors the same evening, is most of the battle.',
    problems: [
      {
        title: 'Enquiries come in the evening',
        desc: 'Hosts plan after work hours, exactly when your team has stopped replying.',
      },
      {
        title: 'The same three questions every time',
        desc: 'Date, headcount, venue — asked and answered hundreds of times a season.',
      },
      {
        title: 'Double bookings on the same date',
        desc: 'Two people confirming the same date is an expensive mistake to unwind.',
      },
    ],
    flow: [
      { title: 'Host messages your number', desc: 'From Instagram, a listing or a referral, usually at night.' },
      { title: 'AI captures the event', desc: 'Date, guest count, event type, veg or non-veg, venue and service style.' },
      { title: 'Menu priced per plate', desc: 'Your packages and per-plate rates applied to the headcount, with GST and add-ons as separate lines.' },
      { title: 'Quotation PDF in the chat', desc: 'Branded and itemised — menu, plate count, add-ons, taxes, total.' },
      { title: 'Date held, tasting booked', desc: 'The AI books into your availability with slot limits, so the same date is never promised twice.' },
      { title: 'Follow-up before the decision', desc: 'Automatic nudges timed to the event date rather than a generic weekly blast.' },
    ],
    features: [
      { title: 'Per-plate package pricing', desc: 'Menu packages priced per plate against the guest count, with add-ons like live counters as separate lines.' },
      { title: 'Date and slot management', desc: 'Bookings respect your capacity per slot and are checked business-wide to prevent double bookings.' },
      { title: 'Menu photos and sample decks', desc: 'Send menu images, past event galleries and short videos inside the conversation.' },
      { title: 'GST quotations', desc: 'Numbered, branded quotation PDFs generated automatically in the chat.' },
      { title: 'Reminders before the event', desc: 'Automatic reminders before tastings, site visits and the event itself.' },
      { title: 'Answers in the host’s language', desc: 'Eleven Indian languages, auto-detected, including Roman-script Hinglish.' },
    ],
    chat: [
      { from: 'user', text: 'Catering chahiye 12 December, 300 guests, wedding' },
      { from: 'bot', text: '12 December abhi available hai. 300 guests ke liye — pure veg ya mix menu? Aur venue kahan hai?' },
      { from: 'user', text: 'Pure veg. Venue Indiranagar banquet.' },
      { from: 'bot', text: 'Perfect. Pure veg Gold package ₹1,250 per plate — 300 plates ka itemised quotation bhej raha hoon, GST ke saath.' },
      { from: 'bot', text: '📄 Quotation bheja. Tasting ke liye Saturday 4pm ya Sunday 12pm rakh sakte hain — 12 December ki date tab tak hold kar leta hoon.' },
    ],
    faq: [
      {
        q: 'Can it tell a customer whether a date is free?',
        a: 'Yes. Bookings are checked against your calendar and the number of events you can take per slot, across your whole team — so the AI will not confirm a date that is already committed.',
      },
      {
        q: 'How does per-plate pricing work?',
        a: 'You define your menu packages and per-plate rates. The AI collects the guest count and menu preference, multiplies it out, adds any live counters or service add-ons as separate lines, applies GST and sends the quotation as a PDF.',
      },
      {
        q: 'Can it send our menu and past event photos?',
        a: 'Yes. Menu cards, event galleries and short videos can be attached to your packages, and the AI sends them when the host asks to see the menu or previous work.',
      },
      {
        q: 'Will it keep following up as the event date approaches?',
        a: 'Follow-up timing is yours to set, including how many attempts and how far apart. Hosts who ask to stop hearing from you are excluded automatically.',
      },
    ],
  },
];

export const findIndustry = (slug) => industries.find((i) => i.slug === slug);
